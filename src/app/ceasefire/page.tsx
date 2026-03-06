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
    status: 'collapsed',
    date: '2025–2026',
    description: 'Ceasefire has broken down with renewed military operations in Gaza, border crossings closed, and MSF forced to suspend operations',
    context: 'Partial settlement collapsed during Olympic Truce window',
    risks: ['Crossings closed', 'MSF operations suspended', 'Humanitarian crisis deepening'],
    relevance: 'Humanitarian corridors essential for aid delivery during Truce',
  },
  {
    id: 'isr-irn',
    parties: ['Israel', 'Iran'],
    region: 'Middle East',
    status: 'collapsed',
    date: 'June 2025–Mar 2026 (Feb 28–Mar 1)',
    description: 'Ceasefire collapsed following U.S.–Israel coordinated strikes on Iran (Feb 28, 2026) and Iranian retaliatory strikes (Mar 1, 2026)',
    context: 'Major regional escalation during Olympic Truce window',
    risks: ['Active military strikes', 'Iranian retaliation', 'Strait of Hormuz tensions'],
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
    id: 'ind-pak-2026',
    parties: ['India', 'Pakistan'],
    region: 'South Asia',
    status: 'partial',
    date: 'Feb 2026',
    description: 'May 2025 ceasefire under strain from Pakistan cross-border strikes into Afghanistan (Feb 22, Feb 26)',
    context: 'Border operations risk broader destabilization between nuclear-armed states',
    risks: ['Cross-border strikes into Afghanistan', 'Ceasefire strain', 'Regional spillover'],
    relevance: 'Nuclear de-escalation critical during Olympic Truce window',
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
  {
    id: 'irn-gulf',
    parties: ['Iran', 'Saudi Arabia / UAE / Bahrain / Kuwait / Qatar / Oman / Iraq / Jordan'],
    region: 'Persian Gulf & Middle East',
    status: 'collapsed',
    date: 'Mar 2026',
    description: 'Iranian retaliatory missile/drone strikes hit 11 countries (Mar 1). 26+ fatalities: Israel (12), Kuwait (4), Iraq (4), UAE (3), Bahrain (2), Oman (1). Debris fell in Azerbaijan. Strait of Hormuz officially closed (Mar 2), IRGC claims full control (Mar 4). Qatar LNG shutdown — Force Majeure declared. Oil surging toward $100.',
    context: 'Largest Iranian military operation in history. Strait of Hormuz transit dropped from 40 ships/day to near zero. 280 vessels stranded. Qatar Ras Laffan offline — 20% of global seaborne LNG gone. Insurance revoked for Strait passage.',
    risks: ['Strait of Hormuz closed — 16-18M bbl/day disrupted', 'Qatar LNG Force Majeure — 20% global supply offline', 'Oil prices toward $100+ if blockade persists', 'NATO Article 5 implications (Cyprus)'],
    relevance: 'Regional war during Olympic Truce window represents most severe Truce violation in modern history',
  },
  {
    id: 'pak-afg',
    parties: ['Pakistan', 'Afghanistan'],
    region: 'South Asia',
    status: 'collapsed',
    date: 'Feb 2026',
    description: 'Pakistan launched cross-border airstrikes and ground operations into Afghanistan targeting Taliban positions (Feb 22, Feb 26), breaking de facto arrangements with Taliban government',
    context: 'Pakistan military operations escalated despite diplomatic channels, creating mass displacement along the border',
    risks: ['Cross-border military escalation', 'Mass refugee displacement', 'Regional destabilization'],
    relevance: 'Border conflicts during Truce window violate safe passage and humanitarian access principles',
  },
  {
    id: 'irn-cyp',
    parties: ['Iran', 'Cyprus (UK bases)'],
    region: 'Eastern Mediterranean',
    status: 'collapsed',
    date: 'Mar 2026',
    description: 'Iranian strikes targeted RAF Akrotiri British military base in Cyprus (Mar 1, 2026), expanding the conflict into the Eastern Mediterranean',
    context: 'Iranian targeting of NATO-aligned bases extends conflict beyond Middle East',
    risks: ['NATO involvement escalation', 'Mediterranean shipping disruption', 'European security threat'],
    relevance: 'Conflict expansion threatens Olympic Truce principles of safe passage across regions',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'signed':
      return 'bg-green-100 text-green-800 border-green-500/30';
    case 'ceasefire':
      return 'bg-blue-100 text-blue-800 border-blue-500/30';
    case 'partial':
      return 'bg-amber-100 text-amber-800 border-amber-500/30';
    case 'dialogue':
      return 'bg-purple-100 text-purple-800 border-purple-500/30';
    case 'diplomatic':
      return 'bg-cyan-100 text-cyan-600 border-cyan-500/30';
    case 'collapsed':
      return 'bg-red-100 text-red-800 border-red-500/30';
    default:
      return 'bg-gray-100 text-gray-600 border-gray-200';
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
    case 'collapsed':
      return 'Collapsed';
    default:
      return status;
  }
};

export default function CeasefireWatchPage() {
  const signed = CEASEFIRES_2025.filter(c => c.status === 'signed').length;
  const ceasefires = CEASEFIRES_2025.filter(c => c.status === 'ceasefire').length;
  const collapsed = CEASEFIRES_2025.filter(c => c.status === 'collapsed').length;
  const partial = CEASEFIRES_2025.filter(c => c.status === 'partial' || c.status === 'dialogue' || c.status === 'diplomatic').length;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-500/30 rounded-full">
              <span className="text-green-800 text-sm font-medium">Peace Monitoring</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Ceasefire Watch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
            className="grid grid-cols-4 gap-4"
          >
            <div className="p-4 rounded-xl bg-green-100 border border-green-500/30 text-center">
              <div className="text-3xl font-bold text-green-800">{signed}</div>
              <div className="text-sm text-green-700">Peace Agreements</div>
            </div>
            <div className="p-4 rounded-xl bg-blue-100 border border-blue-500/30 text-center">
              <div className="text-3xl font-bold text-blue-600">{ceasefires}</div>
              <div className="text-sm text-blue-700">Active Ceasefires</div>
            </div>
            <div className="p-4 rounded-xl bg-red-100 border border-red-500/30 text-center">
              <div className="text-3xl font-bold text-red-800">{collapsed}</div>
              <div className="text-sm text-red-700">Collapsed</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-100 border border-amber-500/30 text-center">
              <div className="text-3xl font-bold text-amber-800">{partial}</div>
              <div className="text-sm text-amber-700">In Progress</div>
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
            <h2 className="text-lg font-bold text-gray-900 mb-3">Ceasefires Under Pressure</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Multiple ceasefires negotiated in 2025 have come under severe strain or collapsed entirely during the
              Milano-Cortina 2026 Olympic Truce window (January 30 – March 22, 2026). The Israel–Hamas partial
              settlement has broken down with renewed operations and closed crossings. On February 28, the U.S. and
              Israel launched coordinated strikes on Iranian nuclear and military facilities, killing Supreme Leader
              Khamenei. Iran responded on March 1 with the largest retaliatory missile barrage in its history, striking
              11 countries: Israel, Saudi Arabia, UAE, Bahrain, Kuwait, Qatar (Al Udeid/CENTCOM), Iraq (Erbil/Al-Asad),
              Jordan, Oman, Cyprus (RAF Akrotiri), and Azerbaijan — expanding the conflict from a bilateral confrontation into a
              regional war spanning from the Eastern Mediterranean to the Persian Gulf. The diplomatic fallout was immediate:
              11 nations plus the EU boycotted the Paralympic Opening Ceremony over Russia&apos;s participation, while Iran&apos;s
              Olympic Committee formally demanded the IOC punish the United States and Israel for breaching the Olympic Charter.
              Russia continued its full-scale invasion of Ukraine with daily attacks throughout the Truce period. Pakistan
              cross-border strikes into Afghanistan threaten the India–Pakistan ceasefire. Sudan&apos;s civil war between SAF
              and RSF forces has displaced millions. These developments underscore the catastrophic failure of the Olympic
              Truce and the speed at which localized conflicts can escalate into regional wars.
            </p>
            <p className="text-gray-600 text-xs mt-3">
              Note: Status assessments reflect verified developments through March 5, 2026. Analysts caution that
              conditions remain fluid and some agreements may still be partially operative in limited areas.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Active Agreements & Ceasefires</h2>
            <p className="text-gray-600">
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
                className="p-6 rounded-xl bg-gray-50/50 border border-gray-200/50 hover:border-gray-400/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {ceasefire.parties.join(' – ')}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{ceasefire.region}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-xs text-gray-500">{ceasefire.date}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(ceasefire.status)}`}>
                    {getStatusLabel(ceasefire.status)}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">{ceasefire.description}</p>
                <p className="text-xs text-gray-500 mb-4">{ceasefire.context}</p>

                <div className="mb-4">
                  <div className="text-xs text-gray-600 mb-2 font-medium">Risks to Monitor:</div>
                  <div className="flex flex-wrap gap-2">
                    {ceasefire.risks.map((risk) => (
                      <span key={risk} className="px-2 py-1 text-xs bg-red-100 text-red-800 border-red-300/80 rounded border border-red-500/20">
                        {risk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-blue-700">
                    <strong className="text-blue-500">Truce relevance:</strong> {ceasefire.relevance}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Monitor */}
      <section className="py-12 px-4 bg-gray-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Monitor</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/50 border border-gray-200/50">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  Agreement Compliance
                </h3>
                <p className="text-sm text-gray-600">
                  Whether parties are adhering to signed agreements, implementing provisions, and meeting timelines
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/50 border border-gray-200/50">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Ceasefire Violations
                </h3>
                <p className="text-sm text-gray-600">
                  Incidents of violence, military movements, or provocations that threaten fragile peace
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/50 border border-gray-200/50">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Humanitarian Access
                </h3>
                <p className="text-sm text-gray-600">
                  Whether peace allows for improved aid delivery, refugee returns, and civilian protection
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/50 border border-gray-200/50">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  Diplomatic Progress
                </h3>
                <p className="text-sm text-gray-600">
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Connected to the Truce Compliance Index</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ceasefire compliance is a key factor in our assessment of how nations honor the Olympic Truce.
              Maintaining peace agreements during the Truce window demonstrates genuine commitment to the spirit of ekecheiria.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/humanitarian"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-xl transition-colors"
              >
                Humanitarian Access
              </Link>
              <a
                href="https://truce-index.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
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
      <footer className="py-8 px-4 border-t border-gray-200/50">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Truce Foundation. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
