'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';

interface Report {
  id: string;
  title: string;
  type: 'monthly' | 'final' | 'infographic' | 'data';
  date: string;
  description: string;
  downloadUrl?: string;
  comingSoon?: boolean;
}

// Placeholder structure for when reports are available
const REPORT_TYPES = [
  {
    id: 'monthly',
    label: 'Monthly Reports',
    icon: '📅',
    description: 'Regular compliance updates during the Truce Window',
  },
  {
    id: 'final',
    label: 'Final Assessments',
    icon: '📋',
    description: 'Comprehensive post-Games compliance reports',
  },
  {
    id: 'infographic',
    label: 'Infographics',
    icon: '📊',
    description: 'Visual summaries and data visualizations',
  },
  {
    id: 'data',
    label: 'Raw Data',
    icon: '💾',
    description: 'Downloadable datasets for researchers',
  },
];

// Future reports structure (will be populated from API)
const UPCOMING_REPORTS: Report[] = [
  {
    id: 'monthly-jan-2026',
    title: 'January 2026 Pre-Truce Baseline',
    type: 'monthly',
    date: '2026-01-30',
    description: 'Global conflict baseline report before Truce Window opens',
    comingSoon: true,
  },
  {
    id: 'monthly-feb-2026',
    title: 'February 2026 Winter Olympics Report',
    type: 'monthly',
    date: '2026-02-28',
    description: 'Compliance during Milano-Cortina 2026 Winter Olympics',
    comingSoon: true,
  },
  {
    id: 'monthly-mar-2026',
    title: 'March 2026 Paralympics Report',
    type: 'monthly',
    date: '2026-03-22',
    description: 'Compliance during the Paralympic Games and Truce closing',
    comingSoon: true,
  },
  {
    id: 'final-2026',
    title: 'Milano-Cortina 2026 Final Assessment',
    type: 'final',
    date: '2026-04-15',
    description: 'Complete analysis of Truce compliance for the 2026 Winter Games',
    comingSoon: true,
  },
];

// Historical reports (placeholder for Paris 2024 retrospective)
const HISTORICAL_REPORTS: Report[] = [
  {
    id: 'paris-2024-retro',
    title: 'Paris 2024 Retrospective Analysis',
    type: 'final',
    date: '2024-10-01',
    description: 'Historical analysis of Olympic Truce compliance during Paris 2024',
    comingSoon: true,
  },
];

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Report Archives
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Monthly compliance reports, final assessments, infographics, and data exports
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Reports begin January 2026
            </div>
          </motion.div>
        </div>
      </section>

      {/* Report Types Overview */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {REPORT_TYPES.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 text-center"
              >
                <span className="text-3xl mb-2 block">{type.icon}</span>
                <h3 className="font-semibold text-white text-sm">{type.label}</h3>
                <p className="text-xs text-slate-500 mt-1">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milano-Cortina 2026 Reports */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Milano-Cortina 2026</h2>
            <p className="text-slate-400">
              Reports for the upcoming Truce Window (January 30 - March 22, 2026)
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {UPCOMING_REPORTS.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-xl bg-slate-900/30 border border-slate-700/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {REPORT_TYPES.find(t => t.id === report.type)?.icon}
                    </span>
                    <span className="px-2 py-0.5 text-xs bg-slate-700/50 text-slate-400 rounded-full">
                      {REPORT_TYPES.find(t => t.id === report.type)?.label}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 text-xs bg-amber-500/20 text-amber-400 rounded-full">
                    Coming Soon
                  </span>
                </div>
                <h3 className="font-semibold text-slate-400 mb-1">{report.title}</h3>
                <p className="text-sm text-slate-500 mb-2">{report.description}</p>
                <p className="text-xs text-slate-600">Expected: {new Date(report.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Reports */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Historical Reports</h2>
            <p className="text-slate-400">
              Retrospective analyses from previous Olympic Games
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HISTORICAL_REPORTS.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-xl bg-slate-900/30 border border-slate-700/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {REPORT_TYPES.find(t => t.id === report.type)?.icon}
                    </span>
                    <span className="px-2 py-0.5 text-xs bg-slate-700/50 text-slate-400 rounded-full">
                      {REPORT_TYPES.find(t => t.id === report.type)?.label}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 text-xs bg-amber-500/20 text-amber-400 rounded-full">
                    Coming Soon
                  </span>
                </div>
                <h3 className="font-semibold text-slate-400 mb-1">{report.title}</h3>
                <p className="text-sm text-slate-500">{report.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Access */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💾</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Research Data Access</h2>
                <p className="text-slate-400 mb-4">
                  Academic researchers and journalists can request access to raw compliance data,
                  incident records, and historical datasets. Data is provided in CSV and JSON formats.
                </p>
                <a
                  href="mailto:data@trucefoundation.world"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Request Data Access
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/methodology"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Index Methodology
              </h3>
              <p className="text-sm text-slate-400 mt-1">How compliance is measured</p>
            </Link>
            <Link
              href="/accountability"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Accountability Record
              </h3>
              <p className="text-sm text-slate-400 mt-1">Historical violation data</p>
            </Link>
            <a
              href="https://truce-index.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Live Index
              </h3>
              <p className="text-sm text-slate-400 mt-1">Real-time compliance data</p>
            </a>
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
