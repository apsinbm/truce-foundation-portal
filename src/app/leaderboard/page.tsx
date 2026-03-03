'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { format, subDays, subMonths } from 'date-fns';
import { TRUCE_INDEX_URL, TRUCE_START_DATE, TRUCE_END_DATE } from '@/lib/constants';
import Header from '@/components/Header';

interface CountryRanking {
  rank: number;
  country_iso3: string;
  country_name: string;
  total_incidents: number;
  conflict_incidents: number;
  humanitarian_access_incidents: number;
  truce_violations: number;
  positive_measures: number;
  critical_incidents: number;
  high_incidents: number;
  fatality_estimate: number | null;
  gpi_score: number | null;
  gpi_rank: number | null;
  crisis_level: string | null;
  trend: 'up' | 'down' | 'stable' | 'new';
  previous_rank: number | null;
}

interface LeaderboardData {
  rankings: CountryRanking[];
  time_window: {
    start: string;
    end: string;
    label: string;
  };
  totals: {
    total_incidents: number;
    total_countries: number;
    total_critical: number;
  };
  generated_at: string;
}

type TimeFilter = '7d' | '30d' | '90d' | '1y' | 'all';
type SourceFilter = 'truce' | 'all' | 'ACLED' | 'UCDP';

const TIME_FILTERS: { value: TimeFilter; label: string }[] = [
  { value: '7d', label: 'Last 7 Days' },
  { value: '30d', label: 'Last 30 Days' },
  { value: '90d', label: 'Last 3 Months' },
  { value: '1y', label: 'Last Year' },
  { value: 'all', label: 'All Time' },
];

// Data source presets - matches the date ranges where each source has data
const SOURCE_PRESETS: {
  value: SourceFilter;
  label: string;
  description: string;
  methodology: string;
  dateRange?: { start: string; end?: string };
}[] = [
  {
    value: 'truce',
    label: 'Olympic Truce',
    description: 'Jan 30 \u2013 Mar 22, 2026 (Milano-Cortina 2026)',
    methodology: 'All verified incidents during the 52-day Olympic Truce window per UN Resolution A/80/L.10',
    dateRange: {
      start: '2026-01-30T00:00:00Z',
      end: '2026-03-22T23:59:59Z',
    },
  },
  {
    value: 'all',
    label: 'All Sources',
    description: 'UCDP 2022-2023 + ACLED 2024 + Truce 2026',
    methodology: 'Combined data from all sources including academic (UCDP), near real-time (ACLED), and curated Truce incidents',
  },
  {
    value: 'UCDP',
    label: 'UCDP',
    description: 'Uppsala Conflict Data (2022-2023)',
    methodology: 'Academic dataset with 25+ death threshold. Provides low/best/high fatality estimates.',
    dateRange: { start: '2022-01-01T00:00:00Z', end: '2023-12-31T23:59:59Z' },
  },
  {
    value: 'ACLED',
    label: 'ACLED',
    description: 'Armed Conflict Location & Event Data (2024)',
    methodology: 'Near real-time, human-coded events. No fatality threshold. Weekly updates.',
    dateRange: { start: '2024-01-01T00:00:00Z' },
  },
];

function getTrendIcon(trend: string) {
  switch (trend) {
    case 'up':
      return <span className="text-red-800">&#x25B2;</span>;
    case 'down':
      return <span className="text-green-800">&#x25BC;</span>;
    case 'new':
      return <span className="text-blue-600 text-xs">NEW</span>;
    default:
      return <span className="text-gray-500">&#x2014;</span>;
  }
}

function getCrisisColor(level: string | null) {
  if (!level) return 'bg-gray-200';
  const l = level.toLowerCase();
  if (l.includes('critical') || l.includes('high')) return 'bg-red-100 text-red-800 border-red-300';
  if (l.includes('moderate') || l.includes('medium')) return 'bg-orange-100 text-orange-800 border-orange-300';
  if (l.includes('low')) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
  return 'bg-gray-200 text-gray-600';
}

export default function LeaderboardPage() {
  const [data, setData] = useState<LeaderboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('30d');
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>('truce');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // Export data as CSV
  const exportCSV = () => {
    if (!data) return;

    const headers = [
      'Rank',
      'Country',
      'ISO3',
      'Total Incidents',
      'Conflict Incidents',
      'Humanitarian Access',
      'Truce Violations',
      'Positive Measures',
      'Critical Incidents',
      'High Incidents',
      'Fatality Estimate',
      'GPI Score',
      'Crisis Level',
    ];

    const rows = data.rankings.map((r) => [
      r.rank,
      r.country_name,
      r.country_iso3,
      r.total_incidents,
      r.conflict_incidents,
      r.humanitarian_access_incidents,
      r.truce_violations,
      r.positive_measures,
      r.critical_incidents,
      r.high_incidents,
      r.fatality_estimate || '',
      r.gpi_score || '',
      r.crisis_level || '',
    ]);

    const csvContent = [headers, ...rows].map((row) => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `truce-leaderboard-${data.time_window.label.replace(/\s+/g, '-').toLowerCase()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Export data as JSON
  const exportJSON = () => {
    if (!data) return;

    const exportData = {
      generated_at: data.generated_at,
      time_window: data.time_window,
      totals: data.totals,
      rankings: data.rankings.map((r) => ({
        rank: r.rank,
        country_name: r.country_name,
        country_iso3: r.country_iso3,
        total_incidents: r.total_incidents,
        conflict_incidents: r.conflict_incidents,
        humanitarian_access_incidents: r.humanitarian_access_incidents,
        truce_violations: r.truce_violations,
        positive_measures: r.positive_measures,
        critical_incidents: r.critical_incidents,
        high_incidents: r.high_incidents,
        fatality_estimate: r.fatality_estimate,
        gpi_score: r.gpi_score,
        crisis_level: r.crisis_level,
      })),
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `truce-leaderboard-${data.time_window.label.replace(/\s+/g, '-').toLowerCase()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    async function fetchLeaderboard() {
      setLoading(true);
      setError(null);

      // Get the source preset for date ranges
      const sourcePreset = SOURCE_PRESETS.find(s => s.value === sourceFilter);

      let start: string;
      let end: string = new Date().toISOString();

      // If source filter has a fixed date range, use it
      if (sourcePreset?.dateRange) {
        start = sourcePreset.dateRange.start;
        if (sourcePreset.dateRange.end) {
          end = sourcePreset.dateRange.end;
        }
      } else {
        // Use time filter for relative date ranges
        switch (timeFilter) {
          case '7d':
            start = subDays(new Date(), 7).toISOString();
            break;
          case '30d':
            start = subDays(new Date(), 30).toISOString();
            break;
          case '90d':
            start = subMonths(new Date(), 3).toISOString();
            break;
          case '1y':
            start = subMonths(new Date(), 12).toISOString();
            break;
          case 'all':
            start = subMonths(new Date(), 36).toISOString();
            break;
          default:
            start = subDays(new Date(), 30).toISOString();
        }
      }

      try {
        let url = `/api/truce-index/leaderboard?start=${start}&end=${end}&limit=50`;
        if (sourceFilter !== 'all' && sourceFilter !== 'truce') {
          url += `&source=${sourceFilter}`;
        }
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch leaderboard');
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError('Unable to load leaderboard data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, [timeFilter, sourceFilter]);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">Country Compliance Leaderboard</h1>
            <p className="text-gray-600">
              Countries ranked by verified incidents during the Milano-Cortina 2026 Olympic Truce
              (January 30 \u2013 March 22, 2026). Higher rank indicates more violations.
            </p>
          </motion.div>

          {/* Filter Controls & Export Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4 mb-6"
          >
            {/* Data Source Filter */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <span className="text-sm text-gray-600">Data Source:</span>
                <div className="flex gap-2 bg-gray-50/50 p-1 rounded-lg">
                  {SOURCE_PRESETS.map((source) => (
                    <button
                      key={source.value}
                      onClick={() => setSourceFilter(source.value)}
                      title={source.methodology}
                      className={`px-4 py-2 text-sm rounded-md transition-colors ${
                        sourceFilter === source.value
                          ? source.value === 'truce' ? 'bg-green-600 text-white hover:bg-green-700'
                            : source.value === 'ACLED' ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : source.value === 'UCDP' ? 'bg-purple-600 text-white hover:bg-purple-700'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {source.label}
                    </button>
                  ))}
                </div>
              </div>
              {/* Show methodology info for selected source */}
              <div className={`text-xs p-2 rounded-lg border ${
                sourceFilter === 'truce' ? 'bg-green-50 border-green-300 text-green-800'
                : sourceFilter === 'ACLED' ? 'bg-blue-900/20 border-blue-600/50 text-blue-400'
                : sourceFilter === 'UCDP' ? 'bg-purple-900/20 border-purple-800/50 text-purple-400'
                : 'bg-gray-100/50 border-gray-200/50 text-gray-600'
              }`}>
                <span className="font-medium">
                  {SOURCE_PRESETS.find(s => s.value === sourceFilter)?.description}
                </span>
                <span className="mx-2">•</span>
                <span className="text-gray-500">
                  {SOURCE_PRESETS.find(s => s.value === sourceFilter)?.methodology}
                </span>
              </div>
            </div>

            {/* Time Filter & Export Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Time Filter Buttons - only show when not using source presets */}
              <div className="flex gap-2 bg-gray-50/50 p-1 rounded-lg">
                {TIME_FILTERS.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setTimeFilter(filter.value)}
                    disabled={!!SOURCE_PRESETS.find(s => s.value === sourceFilter)?.dateRange}
                    className={`px-4 py-2 text-sm rounded-md transition-colors ${
                      timeFilter === filter.value && !SOURCE_PRESETS.find(s => s.value === sourceFilter)?.dateRange
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : SOURCE_PRESETS.find(s => s.value === sourceFilter)?.dateRange
                        ? 'text-gray-600 cursor-not-allowed'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Export Buttons */}
              {data && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 mr-1">Export:</span>
                  <button
                    onClick={exportCSV}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 hover:text-gray-900 bg-gray-100/50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    CSV
                  </button>
                  <button
                    onClick={exportJSON}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 hover:text-gray-900 bg-gray-100/50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    JSON
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Summary Stats */}
          {data && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              <div className="bg-gray-50/50 border border-gray-200/50 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {data.totals.total_incidents.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Incidents</div>
              </div>
              <div className="bg-gray-50/50 border border-gray-200/50 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {data.totals.total_countries}
                </div>
                <div className="text-sm text-gray-600">Countries Affected</div>
              </div>
              <div className="bg-gray-50/50 border border-gray-200/50 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-red-800 mb-1">
                  {data.totals.total_critical.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Critical Incidents</div>
              </div>
            </motion.div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-20">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {/* Leaderboard Table */}
          {data && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50/50 border border-gray-200/50 rounded-xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 text-left text-sm text-gray-600">
                      <th className="px-4 py-3 w-16">Rank</th>
                      <th className="px-4 py-3 w-12"></th>
                      <th className="px-4 py-3">Country</th>
                      <th className="px-4 py-3 text-right">Total</th>
                      <th className="px-4 py-3 text-right">Conflicts</th>
                      <th className="px-4 py-3 text-right">Critical</th>
                      <th className="px-4 py-3 text-center">Crisis Level</th>
                      <th className="px-4 py-3 text-center">GPI Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.rankings.map((country, index) => (
                      <motion.tr
                        key={country.country_iso3}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.02 * index }}
                        onClick={() => setSelectedCountry(
                          selectedCountry === country.country_iso3 ? null : country.country_iso3
                        )}
                        className={`border-b border-gray-200/50 hover:bg-gray-100/30 cursor-pointer transition-colors ${
                          selectedCountry === country.country_iso3 ? 'bg-gray-100/50' : ''
                        }`}
                      >
                        <td className="px-4 py-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-gray-900 ${
                            country.rank <= 3 ? 'bg-red-600' :
                            country.rank <= 10 ? 'bg-orange-600' : 'bg-gray-200'
                          }`}>
                            {country.rank}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center">
                          {getTrendIcon(country.trend)}
                        </td>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">{country.country_name}</div>
                          <div className="text-xs text-gray-500">{country.country_iso3}</div>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="text-lg font-bold text-gray-900">
                            {country.total_incidents.toLocaleString()}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <span className="text-red-800">
                            {country.conflict_incidents.toLocaleString()}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right">
                          {country.critical_incidents > 0 ? (
                            <span className="px-2 py-1 bg-red-100 text-red-800 border-red-300 rounded text-sm">
                              {country.critical_incidents}
                            </span>
                          ) : (
                            <span className="text-gray-500">-</span>
                          )}
                        </td>
                        <td className="px-4 py-4 text-center">
                          {country.crisis_level ? (
                            <span className={`px-2 py-1 rounded text-xs ${getCrisisColor(country.crisis_level)}`}>
                              {country.crisis_level}
                            </span>
                          ) : (
                            <span className="text-gray-500">-</span>
                          )}
                        </td>
                        <td className="px-4 py-4 text-center">
                          {country.gpi_rank ? (
                            <span className="text-gray-600">#{country.gpi_rank}</span>
                          ) : (
                            <span className="text-gray-500">-</span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Expanded Country Details */}
          {selectedCountry && data && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 bg-gray-50/50 border border-gray-200/50 rounded-xl p-6"
            >
              {(() => {
                const country = data.rankings.find(c => c.country_iso3 === selectedCountry);
                if (!country) return null;
                return (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{country.country_name} - Incident Breakdown</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-100/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-red-800">{country.conflict_incidents}</div>
                        <div className="text-sm text-gray-600">Armed Conflicts</div>
                      </div>
                      <div className="bg-gray-100/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-yellow-800">{country.humanitarian_access_incidents}</div>
                        <div className="text-sm text-gray-600">Humanitarian Access</div>
                      </div>
                      <div className="bg-gray-100/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-orange-800">{country.truce_violations}</div>
                        <div className="text-sm text-gray-600">Truce Violations</div>
                      </div>
                      <div className="bg-gray-100/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-800">{country.positive_measures}</div>
                        <div className="text-sm text-gray-600">Positive Measures</div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-4">
                      <a
                        href={`${TRUCE_INDEX_URL}/?country=${country.country_iso3}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors text-gray-900"
                      >
                        View on Map
                      </a>
                      {country.gpi_score && (
                        <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600">
                          GPI Score: <span className="font-bold text-gray-900">{country.gpi_score.toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* Footer Info */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center text-sm text-gray-500"
          >
            {data && (
              <p>
                Showing {data.rankings.length} countries | {data.time_window.label} |
                Generated {format(new Date(data.generated_at), 'HH:mm:ss')} UTC
              </p>
            )}
            <p className="mt-2">
              <Link href="/briefing" className="text-blue-600 hover:underline">
                Daily Briefing
              </Link>
              {' | '}
              <Link href="/press" className="text-blue-600 hover:underline">
                Press & Media
              </Link>
              {' | '}
              <a href={TRUCE_INDEX_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Live Map
              </a>
            </p>
          </motion.footer>
        </div>
      </div>
    </main>
  );
}
