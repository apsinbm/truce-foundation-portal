'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { format, subDays, parseISO } from 'date-fns';
import { TRUCE_INDEX_URL } from '@/lib/constants';
import Header from '@/components/Header';
import SourceBadge, { FatalityRange } from '@/components/SourceBadge';

interface BriefingIncident {
  id: string;
  type: string;
  severity: string;
  country_iso3: string;
  location_name: string;
  occurred_at: string;
  narrative: string;
  latitude: number;
  longitude: number;
  // Source metadata
  source_primary?: string;
  source_dataset_version?: string;
  // Fatality estimates
  fatalities_best?: number;
  fatalities_low?: number;
  fatalities_high?: number;
}

interface CountryBreakdown {
  country_iso3: string;
  country_name: string;
  total_incidents: number;
  conflict_incidents: number;
  critical_incidents: number;
  high_incidents: number;
}

interface BriefingData {
  date: string;
  summary: {
    total_incidents: number;
    conflict_incidents: number;
    humanitarian_access_incidents: number;
    truce_violations: number;
    positive_measures: number;
    countries_affected: number;
    critical_incidents: number;
    high_severity_incidents: number;
  };
  top_incidents: BriefingIncident[];
  country_breakdown: CountryBreakdown[];
  comparison: {
    previous_day_total: number;
    change_percent: number;
    trend: 'up' | 'down' | 'stable';
  };
  generated_at: string;
}

const SEVERITY_COLORS: Record<string, string> = {
  critical: 'bg-red-500',
  high: 'bg-orange-500',
  medium: 'bg-yellow-500',
  low: 'bg-blue-600',
};

const TYPE_LABELS: Record<string, string> = {
  CONFLICT: 'Armed Conflict',
  HUMANITARIAN_ACCESS: 'Humanitarian Access',
  TRUCE_VIOLATION: 'Truce Violation',
  POSITIVE_MEASURE: 'Positive Measure',
};

export default function DailyBriefingPage() {
  const [briefing, setBriefing] = useState<BriefingData | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>(format(new Date(), 'yyyy-MM-dd'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBriefing() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${TRUCE_INDEX_URL}/api/briefing?date=${selectedDate}`);
        if (!res.ok) throw new Error('Failed to fetch briefing');
        const data = await res.json();
        setBriefing(data);
      } catch (err) {
        setError('Unable to load briefing data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchBriefing();
  }, [selectedDate]);

  const handlePrevDay = () => {
    const prev = subDays(parseISO(selectedDate), 1);
    setSelectedDate(format(prev, 'yyyy-MM-dd'));
  };

  const handleNextDay = () => {
    const next = new Date(selectedDate);
    next.setDate(next.getDate() + 1);
    if (next <= new Date()) {
      setSelectedDate(format(next, 'yyyy-MM-dd'));
    }
  };

  const isToday = selectedDate === format(new Date(), 'yyyy-MM-dd');

  const getShareableQuote = () => {
    if (!briefing) return '';
    const date = format(parseISO(briefing.date), 'MMMM d, yyyy');
    return `Olympic Truce Daily Briefing (${date}): ${briefing.summary.total_incidents} incidents tracked across ${briefing.summary.countries_affected} countries. ${briefing.summary.critical_incidents} critical incidents. #OlympicTruce #TruceIndex`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Date Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <button
              onClick={handlePrevDay}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Day
            </button>

            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                {format(parseISO(selectedDate), 'EEEE, MMMM d, yyyy')}
              </h1>
              <p className="text-gray-600">
                {isToday ? 'Today\'s Briefing' : 'Historical Briefing'}
              </p>
            </div>

            <button
              onClick={handleNextDay}
              disabled={isToday}
              className={`flex items-center gap-2 transition-colors ${
                isToday ? 'text-gray-600 cursor-not-allowed' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Next Day
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-400">{error}</p>
            </div>
          ) : briefing ? (
            <>
              {/* Summary Cards */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
              >
                <div className="bg-gray-50/50 border border-gray-200/50 rounded-xl p-5">
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    {briefing.summary.total_incidents}
                  </div>
                  <div className="text-sm text-gray-600">Total Incidents</div>
                  {briefing.comparison.trend !== 'stable' && (
                    <div className={`text-xs mt-2 ${
                      briefing.comparison.trend === 'up' ? 'text-red-400' : 'text-green-400'
                    }`}>
                      {briefing.comparison.trend === 'up' ? '↑' : '↓'} {Math.abs(briefing.comparison.change_percent)}% vs yesterday
                    </div>
                  )}
                </div>

                <div className="bg-gray-50/50 border border-gray-200/50 rounded-xl p-5">
                  <div className="text-4xl font-bold text-red-400 mb-1">
                    {briefing.summary.conflict_incidents}
                  </div>
                  <div className="text-sm text-gray-600">Armed Conflicts</div>
                </div>

                <div className="bg-gray-50/50 border border-gray-200/50 rounded-xl p-5">
                  <div className="text-4xl font-bold text-orange-400 mb-1">
                    {briefing.summary.critical_incidents + briefing.summary.high_severity_incidents}
                  </div>
                  <div className="text-sm text-gray-600">High/Critical Severity</div>
                </div>

                <div className="bg-gray-50/50 border border-gray-200/50 rounded-xl p-5">
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    {briefing.summary.countries_affected}
                  </div>
                  <div className="text-sm text-gray-600">Countries Affected</div>
                </div>
              </motion.section>

              {/* Shareable Quote */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-gradient-to-r from-blue-600/30 to-gray-50 border border-blue-600/50 rounded-xl p-6 mb-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-sm uppercase tracking-wider text-blue-600 mb-3">Shareable Summary</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      "{getShareableQuote()}"
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => copyToClipboard(getShareableQuote())}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors flex items-center gap-2 text-gray-900"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </button>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(getShareableQuote())}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors flex items-center gap-2 text-gray-900"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      Share
                    </a>
                  </div>
                </div>
              </motion.section>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Top Incidents */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-50/50 border border-gray-200/50 rounded-xl p-6"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Top Incidents by Severity
                  </h2>

                  {briefing.top_incidents.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No incidents recorded for this day</p>
                  ) : (
                    <div className="space-y-3">
                      {briefing.top_incidents.slice(0, 5).map((incident) => (
                        <div
                          key={incident.id}
                          className="flex items-start gap-3 p-3 bg-gray-100/50 rounded-lg"
                        >
                          <div className={`w-2 h-2 mt-2 rounded-full ${SEVERITY_COLORS[incident.severity]}`}></div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span className="text-xs px-2 py-0.5 bg-gray-200 rounded uppercase text-gray-600">
                                {incident.severity}
                              </span>
                              <span className="text-xs text-gray-500">
                                {TYPE_LABELS[incident.type] || incident.type}
                              </span>
                              {incident.source_primary && (
                                <SourceBadge source={incident.source_primary} size="sm" />
                              )}
                            </div>
                            <p className="text-sm font-medium text-gray-700 mb-1">
                              {incident.location_name}, {incident.country_iso3}
                            </p>
                            {incident.narrative && (
                              <p className="text-xs text-gray-600 line-clamp-2">
                                {incident.narrative}
                              </p>
                            )}
                            {incident.fatalities_best && (
                              <div className="mt-1.5">
                                <FatalityRange
                                  low={incident.fatalities_low}
                                  best={incident.fatalities_best}
                                  high={incident.fatalities_high}
                                  compact
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.section>

                {/* Countries Most Affected */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="bg-gray-50/50 border border-gray-200/50 rounded-xl p-6"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Countries Most Affected
                  </h2>

                  {briefing.country_breakdown.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No country data for this day</p>
                  ) : (
                    <div className="space-y-3">
                      {briefing.country_breakdown.slice(0, 5).map((country, index) => (
                        <div
                          key={country.country_iso3}
                          className="flex items-center gap-4 p-3 bg-gray-100/50 rounded-lg"
                        >
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-700">
                              {country.country_name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {country.country_iso3}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-900">
                              {country.total_incidents}
                            </div>
                            <div className="text-xs text-gray-500">incidents</div>
                          </div>
                          {country.critical_incidents > 0 && (
                            <div className="px-2 py-1 bg-red-900/50 text-red-400 rounded text-xs">
                              {country.critical_incidents} critical
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.section>
              </div>

              {/* Incident Type Breakdown */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 bg-gray-50/50 border border-gray-200/50 rounded-xl p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Incident Type Breakdown</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-100/50 rounded-lg">
                    <div className="text-2xl font-bold text-red-400 mb-1">
                      {briefing.summary.conflict_incidents}
                    </div>
                    <div className="text-sm text-gray-600">Armed Conflicts</div>
                  </div>
                  <div className="text-center p-4 bg-gray-100/50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">
                      {briefing.summary.humanitarian_access_incidents}
                    </div>
                    <div className="text-sm text-gray-600">Humanitarian Access</div>
                  </div>
                  <div className="text-center p-4 bg-gray-100/50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-400 mb-1">
                      {briefing.summary.truce_violations}
                    </div>
                    <div className="text-sm text-gray-600">Truce Violations</div>
                  </div>
                  <div className="text-center p-4 bg-gray-100/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {briefing.summary.positive_measures}
                    </div>
                    <div className="text-sm text-gray-600">Positive Measures</div>
                  </div>
                </div>
              </motion.section>

              {/* Citation & Download */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-gray-50/50 border border-gray-200/50 rounded-xl"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">How to Cite</h3>
                  <p className="text-sm text-gray-600">
                    Truce Index Daily Briefing. ({format(parseISO(briefing.date), 'MMMM d, yyyy')}).
                    Truce Foundation. Retrieved from https://trucefoundation.world/briefing
                  </p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap text-gray-900"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download as PDF
                </button>
              </motion.section>

              {/* Footer */}
              <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-center text-sm text-gray-500"
              >
                <p>
                  Generated at {format(parseISO(briefing.generated_at), 'HH:mm:ss')} UTC |
                  Data sources: ACLED, OCHA, UNHCR
                </p>
                <p className="mt-2">
                  <Link href="/press" className="text-blue-600 hover:underline">
                    Press & Media Resources
                  </Link>
                  {' | '}
                  <a href={TRUCE_INDEX_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    View Live Map
                  </a>
                </p>
              </motion.footer>
            </>
          ) : null}
        </div>
      </div>
    </main>
  );
}
