'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';

// Priority countries identified by humanitarian experts
const PRIORITY_COUNTRIES = [
  {
    name: 'Gaza',
    iso3: 'PSE',
    status: 'extreme',
    description: 'Severe restrictions on aid delivery amid ongoing conflict',
    acapsScore: 5,
    issues: ['Blockade restrictions', 'Border crossing limitations', 'Aid convoy attacks'],
  },
  {
    name: 'Sudan',
    iso3: 'SDN',
    status: 'extreme',
    description: 'Civil war severely impeding humanitarian operations',
    acapsScore: 5,
    issues: ['Active conflict zones', 'Aid worker targeting', 'Infrastructure destruction'],
  },
  {
    name: 'South Sudan',
    iso3: 'SSD',
    status: 'high',
    description: 'Persistent access constraints in conflict-affected areas',
    acapsScore: 4,
    issues: ['Road inaccessibility', 'Armed group interference', 'Bureaucratic impediments'],
  },
  {
    name: 'Ukraine',
    iso3: 'UKR',
    status: 'high',
    description: 'Frontline areas face significant humanitarian access challenges',
    acapsScore: 4,
    issues: ['Active combat zones', 'Infrastructure damage', 'Mine contamination'],
  },
  {
    name: 'Syria',
    iso3: 'SYR',
    status: 'high',
    description: 'Complex political landscape affecting aid distribution',
    acapsScore: 4,
    issues: ['Cross-border restrictions', 'Multi-party conflict', 'Sanctions complications'],
  },
  {
    name: 'DR Congo',
    iso3: 'COD',
    status: 'high',
    description: 'Armed group activity disrupts eastern regions',
    acapsScore: 4,
    issues: ['Armed group presence', 'Road insecurity', 'Displacement waves'],
  },
  {
    name: 'Afghanistan',
    iso3: 'AFG',
    status: 'high',
    description: 'Restrictions on female aid workers affecting operations',
    acapsScore: 4,
    issues: ['Gender-based restrictions', 'Banking limitations', 'Operational interference'],
  },
];

// Exemplary countries for humanitarian response
const EXEMPLARY_COUNTRIES = [
  {
    name: 'Moldova',
    iso3: 'MDA',
    description: 'Exemplary care for Ukrainian refugees despite limited resources',
    highlight: 'Hosted refugees equivalent to 5% of its population',
  },
];

const DATA_SOURCES = [
  {
    name: 'ACAPS',
    fullName: 'Assessment Capacities Project',
    description: 'Bi-annual Global Humanitarian Access Overview covering 80+ countries with 9 indicators across 3 pillars',
    url: 'https://www.acaps.org/en/thematics/all-topics/humanitarian-access',
    metrics: ['Access constraints scoring (0-5)', 'Bureaucratic impediments', 'Movement restrictions', 'Violence against aid workers'],
  },
  {
    name: 'Humanitarian Outcomes',
    fullName: 'CORE Project',
    description: 'Direct surveys of crisis-affected populations on aid accessibility and humanitarian actor effectiveness',
    url: 'https://humanitarianoutcomes.org/projects/core',
    metrics: ['Population surveys', 'Aid accessibility', 'Operational presence', 'Coverage gaps'],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'extreme':
      return 'bg-red-500/20 text-red-300 border-red-500/30';
    case 'high':
      return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
    case 'moderate':
      return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
    default:
      return 'bg-slate-800 text-slate-300 border-slate-700';
  }
};

const getScoreColor = (score: number) => {
  if (score >= 5) return 'text-red-400';
  if (score >= 4) return 'text-orange-400';
  if (score >= 3) return 'text-yellow-400';
  return 'text-green-400';
};

export default function HumanitarianPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <span className="text-blue-300 text-sm font-medium">Humanitarian Monitoring</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Humanitarian Access
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Monitoring barriers to humanitarian aid delivery during the Olympic Truce period
            </p>
          </motion.div>
        </div>
      </section>

      {/* Connection to Olympic Truce */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30"
          >
            <h2 className="text-lg font-bold text-white mb-3">Why Humanitarian Access Matters for the Olympic Truce</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              The ancient Olympic Truce (ekecheiria) was not a ceasefire per se, but rather a guarantee of <strong className="text-white">safe passage</strong> -
              allowing athletes, artists, and spectators to travel freely to and from the Games without fear of attack.
              In the modern context, this principle extends to humanitarian corridors: the ability for aid workers, medical supplies,
              and essential goods to reach populations in need. Monitoring humanitarian access during Truce periods reflects
              this fundamental spirit of the ekecheiria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Priority Countries */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Priority Countries</h2>
            <p className="text-slate-400">
              Countries where humanitarian access is most constrained, as identified by expert advisors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRIORITY_COUNTRIES.map((country, index) => (
              <motion.div
                key={country.iso3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-5 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-slate-600/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white text-lg">{country.name}</h3>
                    <span className={`inline-block px-2 py-0.5 text-xs rounded-full border mt-1 ${getStatusColor(country.status)}`}>
                      {country.status} constraints
                    </span>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getScoreColor(country.acapsScore)}`}>
                      {country.acapsScore}/5
                    </div>
                    <div className="text-xs text-slate-500">ACAPS Score</div>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-3">{country.description}</p>
                <div className="space-y-1">
                  {country.issues.map((issue) => (
                    <div key={issue} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1 h-1 rounded-full bg-slate-600" />
                      {issue}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exemplary Response */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Exemplary Humanitarian Response</h2>
            <p className="text-slate-400 mb-6">
              Countries demonstrating exceptional commitment to humanitarian principles
            </p>

            {EXEMPLARY_COUNTRIES.map((country) => (
              <div
                key={country.iso3}
                className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{country.name}</h3>
                    <p className="text-slate-300 mt-1">{country.description}</p>
                    <p className="text-sm text-green-400 mt-2">{country.highlight}</p>
                  </div>
                </div>
              </div>
            ))}

            <p className="text-xs text-slate-500 mt-4 text-center">
              Additional exemplary countries will be added as our humanitarian advisors provide further assessments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Data Sources</h2>
            <p className="text-slate-400 mb-6">
              Our humanitarian access monitoring draws on authoritative independent sources
            </p>

            <div className="space-y-4">
              {DATA_SOURCES.map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {source.name}
                        </h3>
                        <span className="text-xs text-slate-500">({source.fullName})</span>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">{source.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {source.metrics.map((metric) => (
                          <span key={metric} className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expert Consultation */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Expert Consultation</h2>
                <p className="text-slate-300 text-sm">
                  The humanitarian access monitoring for the Truce Foundation is developed in consultation with
                  experienced humanitarian professionals with decades of field experience across UN agencies,
                  USAID, and international NGOs. Our advisors have directed emergency operations in complex
                  emergencies including the Ebola outbreak in West Africa, Ukrainian refugee coordination,
                  and conflict responses in Sudan, Bosnia, Angola, and Gaza.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methodology Link */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-xl font-bold text-white mb-4">How This Fits Our Methodology</h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Humanitarian corridors represent 25% of our composite Truce Compliance Index score.
              This data informs our assessment of whether states are enabling safe passage for aid.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/methodology"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
              >
                View Full Methodology
              </Link>
              <a
                href="https://truce-index.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors"
              >
                View Live Index
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
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
