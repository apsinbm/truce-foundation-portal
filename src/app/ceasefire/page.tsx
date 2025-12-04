'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';

// 2025 Ceasefires and settlements to monitor
const CEASEFIRES_2025 = [
  {
    id: 'arm-aze',
    parties: ['Armenia', 'Azerbaijan'],
    region: 'Caucasus',
    status: 'signed',
    date: 'August 2025',
    description: 'Peace agreement signed ending decades of conflict over Nagorno-Karabakh',
    context: 'Ceasefires since 2020, culminating in formal peace agreement',
    risks: ['Displaced population tensions', 'Border demarcation disputes', 'Ethnic reconciliation challenges'],
    relevance: 'Critical test of post-conflict reconciliation during Olympic Truce window',
  },
  {
    id: 'isr-hms',
    parties: ['Israel', 'Hamas'],
    region: 'Middle East',
    status: 'partial',
    date: '2025',
    description: 'Ceasefire and hostage-for-prisoner exchanges following extended conflict',
    context: 'Partial settlement after two-year conflict in Gaza',
    risks: ['Fragile implementation', 'Humanitarian crisis continuation', 'Regional tensions'],
    relevance: 'Humanitarian corridors essential for aid delivery during Truce',
  },
  {
    id: 'isr-irn',
    parties: ['Israel', 'Iran'],
    region: 'Middle East',
    status: 'ceasefire',
    date: 'June 2025',
    description: 'Ceasefire following 12-day escalation after strikes on nuclear sites',
    context: 'Regional de-escalation following direct military confrontation',
    risks: ['Proxy conflict continuation', 'Nuclear program concerns', 'Regional instability'],
    relevance: 'Regional stability critical for broader Middle East peace',
  },
  {
    id: 'drc-rwa',
    parties: ['DR Congo', 'Rwanda'],
    region: 'Africa',
    status: 'signed',
    date: 'June 2025',
    description: 'Treaty between the two nations addressing eastern DRC conflict',
    context: 'Diplomatic breakthrough after years of proxy conflicts',
    risks: ['M23 rebel group activity', 'Resource competition', 'Refugee returns'],
    relevance: 'Opportunity for humanitarian access improvement in eastern DRC',
  },
  {
    id: 'ind-pak',
    parties: ['India', 'Pakistan'],
    region: 'South Asia',
    status: 'ceasefire',
    date: 'May 2025',
    description: 'Ceasefire announced after escalating military confrontation',
    context: 'De-escalation following border tensions',
    risks: ['Kashmir tensions', 'Nuclear-armed states', 'Cross-border incidents'],
    relevance: 'Nuclear de-escalation aligned with Olympic peace principles',
  },
  {
    id: 'tha-khm',
    parties: ['Thailand', 'Cambodia'],
    region: 'Southeast Asia',
    status: 'ceasefire',
    date: 'July 2025',
    description: 'Ceasefire after five days of deadly border clashes',
    context: 'Border dispute de-escalation',
    risks: ['Temple area disputes', 'Nationalist sentiment', 'Economic ties'],
    relevance: 'ASEAN regional stability important for broader peace',
  },
  {
    id: 'srb-kos',
    parties: ['Serbia', 'Kosovo'],
    region: 'Europe',
    status: 'dialogue',
    date: '2025',
    description: 'Continued dialogue and ceasefire initiatives',
    context: 'EU-mediated normalization process',
    risks: ['Recognition disputes', 'Ethnic tensions', 'Political instability'],
    relevance: 'European peace consolidation during Olympic period',
  },
  {
    id: 'egy-eth',
    parties: ['Egypt', 'Ethiopia'],
    region: 'Africa',
    status: 'diplomatic',
    date: '2025',
    description: 'Diplomatic resolution over Grand Ethiopian Renaissance Dam dispute',
    context: 'Water rights negotiations rather than military conflict',
    risks: ['Water allocation tensions', 'Regional power dynamics', 'Climate impacts'],
    relevance: 'Peaceful dispute resolution model',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'signed':
      return 'bg-green-500/20 text-green-300 border-green-500/30';
    case 'ceasefire':
      return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    case 'partial':
      return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    case 'dialogue':
      return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
    case 'diplomatic':
      return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
    default:
      return 'bg-slate-800 text-slate-300 border-slate-700';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'signed':
      return 'Peace Agreement';
    case 'ceasefire':
      return 'Ceasefire';
    case 'partial':
      return 'Partial Settlement';
    case 'dialogue':
      return 'Active Dialogue';
    case 'diplomatic':
      return 'Diplomatic Resolution';
    default:
      return status;
  }
};

export default function CeasefireWatchPage() {
  const signed = CEASEFIRES_2025.filter(c => c.status === 'signed').length;
  const ceasefires = CEASEFIRES_2025.filter(c => c.status === 'ceasefire').length;
  const partial = CEASEFIRES_2025.filter(c => c.status === 'partial' || c.status === 'dialogue' || c.status === 'diplomatic').length;

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <span className="text-green-300 text-sm font-medium">Peace Monitoring</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Ceasefire Watch
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Monitoring fragile peace agreements and ceasefires that need to hold during the Olympic Truce
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4"
          >
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-center">
              <div className="text-3xl font-bold text-green-400">{signed}</div>
              <div className="text-sm text-green-300/80">Peace Agreements</div>
            </div>
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center">
              <div className="text-3xl font-bold text-blue-400">{ceasefires}</div>
              <div className="text-sm text-blue-300/80">Active Ceasefires</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center">
              <div className="text-3xl font-bold text-amber-400">{partial}</div>
              <div className="text-sm text-amber-300/80">In Progress</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Context */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30"
          >
            <h2 className="text-lg font-bold text-white mb-3">2025: A Year of Fragile Peace</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              The year 2025 has seen multiple conflict settlements and ceasefires announced across different regions.
              While these represent significant diplomatic achievements, many remain fragile and require sustained
              attention. The Milano-Cortina 2026 Olympic Truce (January 30 - March 22, 2026) provides a critical window
              to reinforce these agreements and demonstrate that peace can hold.
            </p>
            <p className="text-slate-400 text-xs mt-3">
              Note: Independent verification confirms involvement in several ceasefires, though analysts caution that
              some disputes were limited confrontations or remain partially unresolved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ceasefire Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Active Agreements & Ceasefires</h2>
            <p className="text-slate-400">
              Tracking peace processes that need to hold during the Olympic Truce window
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CEASEFIRES_2025.map((ceasefire, index) => (
              <motion.div
                key={ceasefire.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-slate-600/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {ceasefire.parties.join(' – ')}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-500">{ceasefire.region}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-slate-500">{ceasefire.date}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(ceasefire.status)}`}>
                    {getStatusLabel(ceasefire.status)}
                  </span>
                </div>

                <p className="text-sm text-slate-300 mb-3">{ceasefire.description}</p>
                <p className="text-xs text-slate-500 mb-4">{ceasefire.context}</p>

                <div className="mb-4">
                  <div className="text-xs text-slate-400 mb-2 font-medium">Risks to Monitor:</div>
                  <div className="flex flex-wrap gap-2">
                    {ceasefire.risks.map((risk) => (
                      <span key={risk} className="px-2 py-1 text-xs bg-red-500/10 text-red-300/80 rounded border border-red-500/20">
                        {risk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <p className="text-xs text-blue-300/80">
                    <strong className="text-blue-300">Truce relevance:</strong> {ceasefire.relevance}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Monitor */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">What We Monitor</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-700/50">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  Agreement Compliance
                </h3>
                <p className="text-sm text-slate-400">
                  Whether parties are adhering to signed agreements, implementing provisions, and meeting timelines
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-700/50">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Ceasefire Violations
                </h3>
                <p className="text-sm text-slate-400">
                  Incidents of violence, military movements, or provocations that threaten fragile peace
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-700/50">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Humanitarian Access
                </h3>
                <p className="text-sm text-slate-400">
                  Whether peace allows for improved aid delivery, refugee returns, and civilian protection
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-700/50">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  Diplomatic Progress
                </h3>
                <p className="text-sm text-slate-400">
                  Continued dialogue, negotiation milestones, and international mediation efforts
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connection to Index */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-xl font-bold text-white mb-4">Connected to the Truce Compliance Index</h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Ceasefire compliance is a key factor in our assessment of how nations honor the Olympic Truce.
              Maintaining peace agreements during the Truce window demonstrates genuine commitment to the spirit of ekecheiria.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/humanitarian"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors"
              >
                Humanitarian Access
              </Link>
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
