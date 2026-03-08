import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // Validate start date
  const rawStart = searchParams.get('start');
  const start = rawStart || new Date(Date.now() - 30 * 86400000).toISOString();
  if (rawStart && isNaN(new Date(rawStart).getTime())) {
    return NextResponse.json({ error: 'Invalid start date' }, { status: 400 });
  }

  // Validate end date
  const rawEnd = searchParams.get('end');
  const end = rawEnd || new Date().toISOString();
  if (rawEnd && isNaN(new Date(rawEnd).getTime())) {
    return NextResponse.json({ error: 'Invalid end date' }, { status: 400 });
  }

  // Validate and clamp limit (1-500, default 50)
  let limit = parseInt(searchParams.get('limit') || '50');
  if (isNaN(limit)) limit = 50;
  if (limit < 1) limit = 1;
  if (limit > 500) limit = 500;

  // Validate source
  const source = searchParams.get('source');
  if (source !== null && source !== 'UCDP' && source !== 'ACLED') {
    return NextResponse.json({ error: 'Invalid source. Must be UCDP or ACLED.' }, { status: 400 });
  }

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
          (SUM(
            CASE WHEN ti.type = 'POSITIVE_MEASURE' THEN 0
            ELSE
              (CASE ti.severity
                WHEN 'critical' THEN 10 WHEN 'high' THEN 5
                WHEN 'medium' THEN 2 WHEN 'low' THEN 1 ELSE 1
              END)
              *
              (CASE ti.type
                WHEN 'CONFLICT' THEN 3.0 WHEN 'TRUCE_VIOLATION' THEN 2.0
                WHEN 'HUMANITARIAN_ACCESS' THEN 1.5 ELSE 1.0
              END)
            END
          ) + (CASE cb.crisis_level
            WHEN 'war' THEN 30 WHEN 'crisis' THEN 15
            WHEN 'conflict' THEN 5 ELSE 0
          END)) as severity_score,
          cb.gpi_score, cb.gpi_rank, cb.crisis_level
        FROM truce_incidents ti
        LEFT JOIN country_baselines cb ON ti.country_iso3 = cb.country_iso3
        WHERE ti.occurred_at >= $1 AND ti.occurred_at <= $2${sourceFilter}
        GROUP BY ti.country_iso3, cb.country_name, cb.gpi_score, cb.gpi_rank, cb.crisis_level
        ORDER BY severity_score DESC LIMIT $3
      `, [start, end, limit]),
      pool.query(`
        SELECT ti.country_iso3, COUNT(*) as total_incidents,
          ROW_NUMBER() OVER (ORDER BY (SUM(
            CASE WHEN ti.type = 'POSITIVE_MEASURE' THEN 0
            ELSE
              (CASE ti.severity
                WHEN 'critical' THEN 10 WHEN 'high' THEN 5
                WHEN 'medium' THEN 2 WHEN 'low' THEN 1 ELSE 1
              END)
              *
              (CASE ti.type
                WHEN 'CONFLICT' THEN 3.0 WHEN 'TRUCE_VIOLATION' THEN 2.0
                WHEN 'HUMANITARIAN_ACCESS' THEN 1.5 ELSE 1.0
              END)
            END
          ) + (CASE cb.crisis_level
            WHEN 'war' THEN 30 WHEN 'crisis' THEN 15
            WHEN 'conflict' THEN 5 ELSE 0
          END)) DESC) as prev_rank
        FROM truce_incidents ti
        LEFT JOIN country_baselines cb ON ti.country_iso3 = cb.country_iso3
        WHERE ti.occurred_at >= $1 AND ti.occurred_at < $2${sourceFilter}
        GROUP BY ti.country_iso3, cb.crisis_level
      `, [prevStart, start]),
      pool.query(`
        SELECT s.total_incidents, s.total_countries, s.total_critical,
          s.incident_severity + COALESCE(s.crisis_bonus, 0) as total_severity_score
        FROM (
          SELECT COUNT(*) as total_incidents, COUNT(DISTINCT ti.country_iso3) as total_countries,
            SUM(CASE WHEN ti.severity = 'critical' THEN 1 ELSE 0 END) as total_critical,
            SUM(
              CASE WHEN ti.type = 'POSITIVE_MEASURE' THEN 0
              ELSE
                (CASE ti.severity
                  WHEN 'critical' THEN 10 WHEN 'high' THEN 5
                  WHEN 'medium' THEN 2 WHEN 'low' THEN 1 ELSE 1
                END)
                *
                (CASE ti.type
                  WHEN 'CONFLICT' THEN 3.0 WHEN 'TRUCE_VIOLATION' THEN 2.0
                  WHEN 'HUMANITARIAN_ACCESS' THEN 1.5 ELSE 1.0
                END)
              END
            ) as incident_severity,
            (SELECT SUM(CASE cb2.crisis_level
              WHEN 'war' THEN 30 WHEN 'crisis' THEN 15
              WHEN 'conflict' THEN 5 ELSE 0
            END) FROM country_baselines cb2
            WHERE cb2.country_iso3 IN (
              SELECT DISTINCT ti2.country_iso3 FROM truce_incidents ti2
              WHERE ti2.occurred_at >= $1 AND ti2.occurred_at <= $2${sourceFilter}
            )) as crisis_bonus
          FROM truce_incidents ti WHERE ti.occurred_at >= $1 AND ti.occurred_at <= $2${sourceFilter}
        ) s
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
        severity_score: parseFloat(row.severity_score || 0),
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
        total_severity_score: parseFloat(totals.total_severity_score || 0),
      },
      generated_at: new Date().toISOString(),
    }, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120' },
    });
  } catch (error) {
    console.error('Leaderboard error:', error);
    return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 });
  }
}
