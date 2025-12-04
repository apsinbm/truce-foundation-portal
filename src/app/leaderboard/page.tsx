'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { format, subDays, subMonths } from 'date-fns';
import { TRUCE_INDEX_URL } from '@/lib/constants';
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

const TIME_FILTERS: { value: TimeFilter; label: string }[] = [
  { value: '7d', label: 'Last 7 Days' },
  { value: '30d', label: 'Last 30 Days' },
  { value: '90d', label: 'Last 3 Months' },
  { value: '1y', label: 'Last Year' },
  { value: 'all', label: 'All Time' },
];

function getTrendIcon(trend: string) {
  switch (trend) {
    case 'up':
      return <span className="text-red-400">&#x25B2;</span>;
    case 'down':
      return <span className="text-green-400">&#x25BC;</span>;
    case 'new':
      return <span className="text-blue-400 text-xs">NEW</span>;
    default:
      return <span className="text-slate-500">&#x2014;</span>;
  }
}

function getCrisisColor(level: string | null) {
  if (!level) return 'bg-slate-700';
  const l = level.toLowerCase();
  if (l.includes('critical') || l.includes('high')) return 'bg-red-900/50 text-red-300';
  if (l.includes('moderate') || l.includes('medium')) return 'bg-orange-900/50 text-orange-300';
  if (l.includes('low')) return 'bg-yellow-900/50 text-yellow-300';
  return 'bg-slate-700 text-slate-300';
}

export default function LeaderboardPage() {
  const [data, setData] = useState<LeaderboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('30d');
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

      let start: string;
      const end = new Date().toISOString();

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

      try {
        const res = await fetch(`${TRUCE_INDEX_URL}/api/leaderboard?start=${start}&end=${end}&limit=50`);
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
  }, [timeFilter]);

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />

      <div className="pt-24 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-2">Country Compliance Leaderboard</h1>
            <p className="text-slate-400">
              Countries ranked by total incidents during the selected time period.
              Higher rank indicates more violations of peaceful conditions.
            </p>
          </motion.div>

          {/* Time Filter & Export Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
          >
            {/* Time Filter Buttons */}
            <div className="flex gap-2 bg-slate-900/50 p-1 rounded-lg">
              {TIME_FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setTimeFilter(filter.value)}
                  className={`px-4 py-2 text-sm rounded-md transition-colors ${
                    timeFilter === filter.value
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Export Buttons */}
            {data && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 mr-1">Export:</span>
                <button
                  onClick={exportCSV}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  CSV
                </button>
                <button
                  onClick={exportJSON}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  JSON
                </button>
              </div>
            )}
          </motion.div>

          {/* Summary Stats */}
          {data && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-white mb-1">
                  {data.totals.total_incidents.toLocaleString()}
                </div>
                <div className="text-sm text-slate-400">Total Incidents</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  {data.totals.total_countries}
                </div>
                <div className="text-sm text-slate-400">Countries Affected</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-red-400 mb-1">
                  {data.totals.total_critical.toLocaleString()}
                </div>
                <div className="text-sm text-slate-400">Critical Incidents</div>
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
              <p className="text-red-400">{error}</p>
            </div>
          )}

          {/* Leaderboard Table */}
          {data && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/50 border border-slate-800/50 rounded-xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700 text-left text-sm text-slate-400">
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
                        className={`border-b border-slate-800/50 hover:bg-slate-800/30 cursor-pointer transition-colors ${
                          selectedCountry === country.country_iso3 ? 'bg-slate-800/50' : ''
                        }`}
                      >
                        <td className="px-4 py-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                            country.rank <= 3 ? 'bg-red-600' :
                            country.rank <= 10 ? 'bg-orange-600' : 'bg-slate-700'
                          }`}>
                            {country.rank}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center">
                          {getTrendIcon(country.trend)}
                        </td>
                        <td className="px-4 py-4">
                          <div className="font-medium text-white">{country.country_name}</div>
                          <div className="text-xs text-slate-500">{country.country_iso3}</div>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="text-lg font-bold text-white">
                            {country.total_incidents.toLocaleString()}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <span className="text-red-400">
                            {country.conflict_incidents.toLocaleString()}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right">
                          {country.critical_incidents > 0 ? (
                            <span className="px-2 py-1 bg-red-900/50 text-red-300 rounded text-sm">
                              {country.critical_incidents}
                            </span>
                          ) : (
                            <span className="text-slate-500">-</span>
                          )}
                        </td>
                        <td className="px-4 py-4 text-center">
                          {country.crisis_level ? (
                            <span className={`px-2 py-1 rounded text-xs ${getCrisisColor(country.crisis_level)}`}>
                              {country.crisis_level}
                            </span>
                          ) : (
                            <span className="text-slate-500">-</span>
                          )}
                        </td>
                        <td className="px-4 py-4 text-center">
                          {country.gpi_rank ? (
                            <span className="text-slate-300">#{country.gpi_rank}</span>
                          ) : (
                            <span className="text-slate-500">-</span>
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
              className="mt-4 bg-slate-900/50 border border-slate-800/50 rounded-xl p-6"
            >
              {(() => {
                const country = data.rankings.find(c => c.country_iso3 === selectedCountry);
                if (!country) return null;
                return (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">{country.country_name} - Incident Breakdown</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-red-400">{country.conflict_incidents}</div>
                        <div className="text-sm text-slate-400">Armed Conflicts</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-yellow-400">{country.humanitarian_access_incidents}</div>
                        <div className="text-sm text-slate-400">Humanitarian Access</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-orange-400">{country.truce_violations}</div>
                        <div className="text-sm text-slate-400">Truce Violations</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-400">{country.positive_measures}</div>
                        <div className="text-sm text-slate-400">Positive Measures</div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-4">
                      <a
                        href={`${TRUCE_INDEX_URL}/?country=${country.country_iso3}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors text-white"
                      >
                        View on Map
                      </a>
                      {country.gpi_score && (
                        <div className="px-4 py-2 bg-slate-800 rounded-lg text-sm text-slate-300">
                          GPI Score: <span className="font-bold text-white">{country.gpi_score.toFixed(2)}</span>
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
            className="mt-8 text-center text-sm text-slate-500"
          >
            {data && (
              <p>
                Showing {data.rankings.length} countries | {data.time_window.label} |
                Generated {format(new Date(data.generated_at), 'HH:mm:ss')} UTC
              </p>
            )}
            <p className="mt-2">
              <Link href="/briefing" className="text-blue-400 hover:underline">
                Daily Briefing
              </Link>
              {' | '}
              <Link href="/press" className="text-blue-400 hover:underline">
                Press & Media
              </Link>
              {' | '}
              <a href={TRUCE_INDEX_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Live Map
              </a>
            </p>
          </motion.footer>
        </div>
      </div>
    </main>
  );
}
