'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const COMPLIANCE_CATEGORIES = [
  {
    id: 'ceasefire',
    name: 'Ceasefire Compliance',
    description: 'Monitoring armed conflicts, military operations, and violations of cessation of hostilities during the Olympic Truce period.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    metrics: ['Armed conflict incidents', 'Military operations', 'Casualty reports', 'Territorial violations'],
    color: 'from-green-500/20 to-green-600/10',
    border: 'border-green-500/30',
    iconColor: 'text-green-400',
  },
  {
    id: 'corridors',
    name: 'Humanitarian Corridors',
    description: 'Tracking the establishment and maintenance of safe passage for humanitarian aid, medical supplies, and civilian movement.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    metrics: ['Active corridors', 'Aid deliveries', 'Civilian evacuations', 'Medical access'],
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    id: 'stakeholder',
    name: 'Stakeholder Engagement',
    description: 'Measuring diplomatic efforts, negotiations, and commitment from governments and international bodies.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    metrics: ['Diplomatic meetings', 'UN resolutions', 'Bilateral agreements', 'Public commitments'],
    color: 'from-purple-500/20 to-purple-600/10',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  {
    id: 'youth',
    name: 'Youth Impact',
    description: 'Assessing the impact on young people, including education disruption, displacement, and access to sports programs.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    metrics: ['School closures', 'Youth displacement', 'Sports program access', 'Recruitment incidents'],
    color: 'from-pink-500/20 to-pink-600/10',
    border: 'border-pink-500/30',
    iconColor: 'text-pink-400',
  },
  {
    id: 'media',
    name: 'Media & Communications',
    description: 'Analyzing public discourse, media coverage, and official communications regarding the Olympic Truce.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    metrics: ['Official statements', 'Media coverage sentiment', 'Social media engagement', 'Press releases'],
    color: 'from-amber-500/20 to-amber-600/10',
    border: 'border-amber-500/30',
    iconColor: 'text-amber-400',
  },
];

const DATA_SOURCES = [
  { name: 'ACLED', description: 'Armed Conflict Location & Event Data Project', url: 'https://acleddata.com' },
  { name: 'UCDP', description: 'Uppsala Conflict Data Program', url: 'https://ucdp.uu.se' },
  { name: 'UNHCR', description: 'UN Refugee Agency displacement data', url: 'https://www.unhcr.org' },
  { name: 'UN Documents', description: 'Official UN resolutions and reports', url: 'https://documents.un.org' },
  { name: 'Crisis Group', description: 'International Crisis Group analysis', url: 'https://www.crisisgroup.org' },
];

export default function MethodologyPage() {
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Index Methodology
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Transparent, data-driven measurement of Olympic Truce compliance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                The Olympic Truce Compliance Index provides the first systematic, evidence-based
                mechanism for monitoring adherence to the Olympic Truce resolution. Our methodology
                combines quantitative conflict data with qualitative diplomatic assessments to produce
                a comprehensive measure of global compliance.
              </p>
              <p>
                The Index is designed by <strong>Multilateral Accountability Associates (MAA)</strong> and
                independently validated by <strong>Seton Hall University</strong> through its Center for
                Sports Media, Center for UN and Global Governance Studies, and Sports Polling Institute.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Five Categories */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Five Compliance Categories
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Each category is weighted and scored to produce the composite Truce Compliance Index
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPLIANCE_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} border ${category.border}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center mb-4 ${category.iconColor}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{category.description}</p>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Key Metrics:</p>
                  <div className="flex flex-wrap gap-1">
                    {category.metrics.map((metric) => (
                      <span key={metric} className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scoring */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Scoring Methodology</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-700/50">
                <h3 className="font-semibold text-white mb-3">Composite Score Calculation</h3>
                <p className="text-slate-400 text-sm mb-4">
                  The composite score (0-100) is calculated as a weighted average of the five category scores:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">30%</div>
                    <div className="text-xs text-slate-500">Ceasefire</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">25%</div>
                    <div className="text-xs text-slate-500">Corridors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">20%</div>
                    <div className="text-xs text-slate-500">Stakeholder</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">15%</div>
                    <div className="text-xs text-slate-500">Youth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400">10%</div>
                    <div className="text-xs text-slate-500">Media</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-700/50">
                <h3 className="font-semibold text-white mb-3">Score Interpretation</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-green-500"></div>
                    <span className="text-slate-300">80-100: Strong Compliance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-lime-500"></div>
                    <span className="text-slate-300">60-79: Moderate Compliance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-yellow-500"></div>
                    <span className="text-slate-300">40-59: Partial Compliance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-orange-500"></div>
                    <span className="text-slate-300">20-39: Limited Compliance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-red-500"></div>
                    <span className="text-slate-300">0-19: Non-Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Data Sources</h2>
            <p className="text-slate-400 mb-6">
              The Index draws on multiple authoritative sources to ensure accuracy and comprehensiveness:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DATA_SOURCES.map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {source.name}
                      </h3>
                      <p className="text-sm text-slate-400">{source.description}</p>
                    </div>
                    <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Validation */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Independent Validation</h2>
                <p className="text-slate-400 mb-4">
                  The Index methodology is independently validated by Seton Hall University, ensuring
                  academic rigor and impartiality. The validation process includes:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">&#8226;</span>
                    Methodology review by the Center for Sports Media
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">&#8226;</span>
                    Data verification through the Sports Polling Institute
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">&#8226;</span>
                    Policy alignment review by the Center for UN and Global Governance Studies
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Explore the Index</h2>
            <p className="text-slate-400 mb-6">
              See the methodology in action with real-time compliance data
            </p>
            <a
              href="https://truce-index.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
            >
              View Live Index
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
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
