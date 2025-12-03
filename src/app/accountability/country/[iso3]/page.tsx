'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { TRUCE_INDEX_URL } from '@/lib/constants';
import { getCountryByIso3, getViolationsForCountry, REPEAT_OFFENDERS } from '@/lib/truce-data';
import Header from '@/components/Header';

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'critical':
      return 'bg-red-900/50 text-red-300 border-red-500/30';
    case 'major':
      return 'bg-orange-900/50 text-orange-300 border-orange-500/30';
    case 'significant':
      return 'bg-yellow-900/50 text-yellow-300 border-yellow-500/30';
    default:
      return 'bg-slate-800 text-slate-300';
  }
};

export default function CountryProfilePage() {
  const params = useParams();
  const iso3 = params.iso3 as string;

  const countryData = getCountryByIso3(iso3.toUpperCase());
  const violations = getViolationsForCountry(iso3.toUpperCase());

  if (!countryData || violations.length === 0) {
    return (
      <main className="min-h-screen bg-slate-950">
        <Header />

        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Country Not Found</h1>
            <p className="text-slate-400 mb-8">
              No violation record found for country code: {iso3.toUpperCase()}
            </p>
            <Link
              href="/accountability"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
            >
              View All Records
            </Link>
          </div>
        </section>
      </main>
    );
  }

  // Calculate total casualties
  const totalCasualties = violations.reduce((acc, v) => acc + (v.violation.casualties || 0), 0);

  // Get first and last violation years
  const years = violations.map(v => v.period.year);
  const firstViolation = Math.min(...years);
  const lastViolation = Math.max(...years);

  // Count by severity
  const criticalCount = violations.filter(v => v.violation.severity === 'critical').length;
  const majorCount = violations.filter(v => v.violation.severity === 'major').length;

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
              <span className="text-red-300 text-sm font-medium">Country Profile</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {countryData.country}
            </h1>
            <p className="text-xl text-slate-400">
              {countryData.violationCount} Truce Period{countryData.violationCount !== 1 ? 's' : ''} with Documented Violations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-center"
            >
              <span className="text-3xl font-bold text-red-400">{countryData.violationCount}</span>
              <p className="text-xs text-slate-500 mt-1">Truce Periods Violated</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 text-center"
            >
              <span className="text-3xl font-bold text-white">{violations.length}</span>
              <p className="text-xs text-slate-500 mt-1">Total Incidents</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 text-center"
            >
              <span className="text-3xl font-bold text-orange-400">{criticalCount}</span>
              <p className="text-xs text-slate-500 mt-1">Critical Severity</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 text-center"
            >
              <span className="text-3xl font-bold text-slate-300">{lastViolation}</span>
              <p className="text-xs text-slate-500 mt-1">Most Recent</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline View */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 mb-8"
          >
            <h3 className="text-lg font-bold text-white mb-4">Violation Timeline</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-red-500/30" />

              <div className="space-y-4">
                {violations.map((v, index) => (
                  <motion.div
                    key={`${v.period.id}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="relative pl-10"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-2 top-2 w-5 h-5 rounded-full flex items-center justify-center ${
                      v.violation.severity === 'critical' ? 'bg-red-500' :
                      v.violation.severity === 'major' ? 'bg-orange-500' : 'bg-yellow-500'
                    }`}>
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>

                    <div className={`p-4 rounded-xl border ${getSeverityColor(v.violation.severity)}`}>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white">{v.period.games}</span>
                            <span className="px-2 py-0.5 text-xs bg-slate-800/50 text-slate-300 rounded-full">
                              {v.period.season}
                            </span>
                            <span className={`px-2 py-0.5 text-xs rounded-full ${getSeverityColor(v.violation.severity)}`}>
                              {v.violation.severity}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">
                            {v.period.truceWindow.start} to {v.period.truceWindow.end}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-300 mb-2">{v.violation.description}</p>
                      {v.violation.date && (
                        <p className="text-xs text-slate-500">
                          Date: {new Date(v.violation.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                      )}
                      {v.violation.casualties && (
                        <p className="text-xs text-red-400 mt-1">
                          Estimated casualties: {v.violation.casualties.toLocaleString()}
                        </p>
                      )}
                      {v.violation.sources && v.violation.sources.length > 0 && (
                        <p className="text-xs text-slate-500 mt-1">
                          Sources: {v.violation.sources.join(', ')}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${TRUCE_INDEX_URL}/?country=${iso3.toUpperCase()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
            >
              View on Live Index
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              href="/accountability"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors"
            >
              Back to Full Record
            </Link>
          </div>
        </div>
      </section>

      {/* Other Countries */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Other Countries with Multiple Violations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {REPEAT_OFFENDERS
              .filter(o => o.countryIso3 !== iso3.toUpperCase())
              .slice(0, 8)
              .map(offender => (
                <Link
                  key={offender.countryIso3}
                  href={`/accountability/country/${offender.countryIso3.toLowerCase()}`}
                  className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-red-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-xs font-bold text-red-400">
                      {offender.violationCount}
                    </span>
                    <span className="text-sm text-white group-hover:text-red-300 transition-colors truncate">
                      {offender.country}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Truce Foundation. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
