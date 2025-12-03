'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { format, subDays, parseISO } from 'date-fns';
import { TRUCE_INDEX_URL } from '@/lib/constants';

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
  low: 'bg-blue-500',
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
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/truce-foundation-logo.jpg" alt="Truce Foundation" className="w-10 h-10 object-contain rounded-full" />
            <span className="font-semibold text-white">Truce Foundation</span>
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            Back to Home
          </Link>
        </div>
      </header>

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
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Day
            </button>

            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-1">
                {format(parseISO(selectedDate), 'EEEE, MMMM d, yyyy')}
              </h1>
              <p className="text-slate-400">
                {isToday ? 'Today\'s Briefing' : 'Historical Briefing'}
              </p>
            </div>

            <button
              onClick={handleNextDay}
              disabled={isToday}
              className={`flex items-center gap-2 transition-colors ${
                isToday ? 'text-slate-600 cursor-not-allowed' : 'text-slate-400 hover:text-white'
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
                <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-5">
                  <div className="text-4xl font-bold text-white mb-1">
                    {briefing.summary.total_incidents}
                  </div>
                  <div className="text-sm text-slate-400">Total Incidents</div>
                  {briefing.comparison.trend !== 'stable' && (
                    <div className={`text-xs mt-2 ${
                      briefing.comparison.trend === 'up' ? 'text-red-400' : 'text-green-400'
                    }`}>
                      {briefing.comparison.trend === 'up' ? '↑' : '↓'} {Math.abs(briefing.comparison.change_percent)}% vs yesterday
                    </div>
                  )}
                </div>

                <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-5">
                  <div className="text-4xl font-bold text-red-400 mb-1">
                    {briefing.summary.conflict_incidents}
                  </div>
                  <div className="text-sm text-slate-400">Armed Conflicts</div>
                </div>

                <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-5">
                  <div className="text-4xl font-bold text-orange-400 mb-1">
                    {briefing.summary.critical_incidents + briefing.summary.high_severity_incidents}
                  </div>
                  <div className="text-sm text-slate-400">High/Critical Severity</div>
                </div>

                <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-5">
                  <div className="text-4xl font-bold text-blue-400 mb-1">
                    {briefing.summary.countries_affected}
                  </div>
                  <div className="text-sm text-slate-400">Countries Affected</div>
                </div>
              </motion.section>

              {/* Shareable Quote */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-gradient-to-r from-blue-900/30 to-slate-900 border border-blue-800/50 rounded-xl p-6 mb-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-sm uppercase tracking-wider text-blue-400 mb-3">Shareable Summary</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      "{getShareableQuote()}"
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => copyToClipboard(getShareableQuote())}
                      className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm transition-colors flex items-center gap-2 text-white"
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
                      className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm transition-colors flex items-center gap-2 text-white"
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
                  className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Top Incidents by Severity
                  </h2>

                  {briefing.top_incidents.length === 0 ? (
                    <p className="text-slate-500 text-center py-8">No incidents recorded for this day</p>
                  ) : (
                    <div className="space-y-3">
                      {briefing.top_incidents.slice(0, 5).map((incident) => (
                        <div
                          key={incident.id}
                          className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg"
                        >
                          <div className={`w-2 h-2 mt-2 rounded-full ${SEVERITY_COLORS[incident.severity]}`}></div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs px-2 py-0.5 bg-slate-700 rounded uppercase text-slate-300">
                                {incident.severity}
                              </span>
                              <span className="text-xs text-slate-500">
                                {TYPE_LABELS[incident.type] || incident.type}
                              </span>
                            </div>
                            <p className="text-sm font-medium text-slate-200 mb-1">
                              {incident.location_name}, {incident.country_iso3}
                            </p>
                            {incident.narrative && (
                              <p className="text-xs text-slate-400 line-clamp-2">
                                {incident.narrative}
                              </p>
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
                  className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Countries Most Affected
                  </h2>

                  {briefing.country_breakdown.length === 0 ? (
                    <p className="text-slate-500 text-center py-8">No country data for this day</p>
                  ) : (
                    <div className="space-y-3">
                      {briefing.country_breakdown.slice(0, 5).map((country, index) => (
                        <div
                          key={country.country_iso3}
                          className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg"
                        >
                          <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-sm font-bold text-white">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">
                              {country.country_name}
                            </p>
                            <p className="text-xs text-slate-500">
                              {country.country_iso3}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-white">
                              {country.total_incidents}
                            </div>
                            <div className="text-xs text-slate-500">incidents</div>
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
                className="mt-8 bg-slate-900/50 border border-slate-800/50 rounded-xl p-6"
              >
                <h2 className="text-xl font-bold text-white mb-4">Incident Type Breakdown</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-red-400 mb-1">
                      {briefing.summary.conflict_incidents}
                    </div>
                    <div className="text-sm text-slate-400">Armed Conflicts</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">
                      {briefing.summary.humanitarian_access_incidents}
                    </div>
                    <div className="text-sm text-slate-400">Humanitarian Access</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-400 mb-1">
                      {briefing.summary.truce_violations}
                    </div>
                    <div className="text-sm text-slate-400">Truce Violations</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {briefing.summary.positive_measures}
                    </div>
                    <div className="text-sm text-slate-400">Positive Measures</div>
                  </div>
                </div>
              </motion.section>

              {/* Citation & Download */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl"
              >
                <div>
                  <h3 className="font-semibold text-white mb-1">How to Cite</h3>
                  <p className="text-sm text-slate-400">
                    Truce Index Daily Briefing. ({format(parseISO(briefing.date), 'MMMM d, yyyy')}).
                    Truce Foundation. Retrieved from https://trucefoundation.world/briefing
                  </p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap text-white"
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
                className="mt-8 text-center text-sm text-slate-500"
              >
                <p>
                  Generated at {format(parseISO(briefing.generated_at), 'HH:mm:ss')} UTC |
                  Data sources: ACLED, OCHA, UNHCR
                </p>
                <p className="mt-2">
                  <Link href="/press" className="text-blue-400 hover:underline">
                    Press & Media Resources
                  </Link>
                  {' | '}
                  <a href={TRUCE_INDEX_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
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
