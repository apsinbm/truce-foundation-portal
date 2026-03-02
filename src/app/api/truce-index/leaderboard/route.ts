import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const start = searchParams.get('start') || new Date(Date.now() - 30 * 86400000).toISOString();
  const end = searchParams.get('end') || new Date().toISOString();
  const limit = parseInt(searchParams.get('limit') || '50');
  const source = searchParams.get('source');

  try {
    let sourceFilter = '';
    if (source === 'UCDP') sourceFilter = ` AND ti.source_primary = 'UCDP GED'`;
    else if (source === 'ACLED') sourceFilter = ` AND ti.source_primary = 'ACLED'`;

    const currentDuration = new Date(end).getTime() - new Date(start).getTime();
    const prevStart = new Date(new Date(start).getTime() - currentDuration).toISOString();

    const [currentRes, prevRes, totalsRes] = await Promise.all([
      pool.query(`
        SELECT ti.country_iso3, COALESCE(cb.country_name, ti.country_iso3) as country_name,
          COUNT(*) as total_incidents,
          SUM(CASE WHEN ti.type = 'CONFLICT' THEN 1 ELSE 0 END) as conflict_incidents,
          SUM(CASE WHEN ti.type = 'HUMANITARIAN_ACCESS' THEN 1 ELSE 0 END) as humanitarian_access_incidents,
          SUM(CASE WHEN ti.type = 'TRUCE_VIOLATION' THEN 1 ELSE 0 END) as truce_violations,
          SUM(CASE WHEN ti.type = 'POSITIVE_MEASURE' THEN 1 ELSE 0 END) as positive_measures,
          SUM(CASE WHEN ti.severity = 'critical' THEN 1 ELSE 0 END) as critical_incidents,
          SUM(CASE WHEN ti.severity = 'high' THEN 1 ELSE 0 END) as high_incidents,
          cb.gpi_score, cb.gpi_rank, cb.crisis_level
        FROM truce_incidents ti
        LEFT JOIN country_baselines cb ON ti.country_iso3 = cb.country_iso3
        WHERE ti.occurred_at >= $1 AND ti.occurred_at <= $2${sourceFilter}
        GROUP BY ti.country_iso3, cb.country_name, cb.gpi_score, cb.gpi_rank, cb.crisis_level
        ORDER BY total_incidents DESC LIMIT $3
      `, [start, end, limit]),
      pool.query(`
        SELECT ti.country_iso3, COUNT(*) as total_incidents,
          ROW_NUMBER() OVER (ORDER BY COUNT(*) DESC) as prev_rank
        FROM truce_incidents ti
        WHERE ti.occurred_at >= $1 AND ti.occurred_at < $2${sourceFilter}
        GROUP BY ti.country_iso3
      `, [prevStart, start]),
      pool.query(`
        SELECT COUNT(*) as total_incidents, COUNT(DISTINCT country_iso3) as total_countries,
          SUM(CASE WHEN severity = 'critical' THEN 1 ELSE 0 END) as total_critical
        FROM truce_incidents ti WHERE ti.occurred_at >= $1 AND ti.occurred_at <= $2${sourceFilter}
      `, [start, end]),
    ]);

    const prevMap = new Map<string, number>();
    prevRes.rows.forEach((r: any) => prevMap.set(r.country_iso3, parseInt(r.prev_rank)));

    const rankings = currentRes.rows.map((row: any, i: number) => {
      const rank = i + 1;
      const prev = prevMap.get(row.country_iso3);
      let trend: string = 'stable';
      if (!prev) trend = 'new';
      else if (rank < prev) trend = 'up';
      else if (rank > prev) trend = 'down';

      return {
        rank,
        country_iso3: row.country_iso3,
        country_name: row.country_name,
        total_incidents: parseInt(row.total_incidents),
        conflict_incidents: parseInt(row.conflict_incidents || 0),
        humanitarian_access_incidents: parseInt(row.humanitarian_access_incidents || 0),
        truce_violations: parseInt(row.truce_violations || 0),
        positive_measures: parseInt(row.positive_measures || 0),
        critical_incidents: parseInt(row.critical_incidents || 0),
        high_incidents: parseInt(row.high_incidents || 0),
        fatality_estimate: null,
        gpi_score: row.gpi_score ? parseFloat(row.gpi_score) : null,
        gpi_rank: row.gpi_rank ? parseInt(row.gpi_rank) : null,
        crisis_level: row.crisis_level,
        trend,
        previous_rank: prev || null,
      };
    });

    const totals = totalsRes.rows[0];
    const days = Math.round(currentDuration / 86400000);
    let label = `Last ${days} days`;
    if (days === 7) label = 'Last 7 days';
    else if (days === 30) label = 'Last 30 days';
    else if (days === 90) label = 'Last 3 months';
    else if (days === 365) label = 'Last year';

    return NextResponse.json({
      rankings,
      time_window: { start, end, label },
      totals: {
        total_incidents: parseInt(totals.total_incidents || 0),
        total_countries: parseInt(totals.total_countries || 0),
        total_critical: parseInt(totals.total_critical || 0),
      },
      generated_at: new Date().toISOString(),
    }, {
      headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' },
    });
  } catch (error) {
    console.error('Leaderboard error:', error);
    return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 });
  }
}
