'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
// Source: ACAPS Humanitarian Access Overview July 2025, expert consultation
const EXEMPLARY_COUNTRIES = [
  {
    name: 'Moldova',
    iso3: 'MDA',
    acapsScore: 1,
    trend: 'improved',
    description: 'Exemplary care for Ukrainian refugees despite limited resources',
    highlight: 'Hosted refugees equivalent to 5% of its population',
  },
  {
    name: 'Romania',
    iso3: 'ROU',
    acapsScore: 0,
    trend: 'stable',
    description: 'Strong humanitarian access with no significant constraints',
    highlight: 'Efficient refugee processing and integration programs',
  },
  {
    name: 'Peru',
    iso3: 'PER',
    acapsScore: 1,
    trend: 'improved',
    description: 'Improved humanitarian access despite regional challenges',
    highlight: 'Effective coordination with international organizations',
  },
  {
    name: 'Panama',
    iso3: 'PAN',
    acapsScore: 1,
    trend: 'stable',
    description: 'Consistent humanitarian access for migrant populations',
    highlight: 'Manages Darien Gap migration corridor effectively',
  },
  {
    name: 'Angola',
    iso3: 'AGO',
    acapsScore: 1,
    trend: 'stable',
    description: 'Low humanitarian access constraints in post-conflict recovery',
    highlight: 'Open access for international humanitarian organizations',
  },
  {
    name: 'Rwanda',
    iso3: 'RWA',
    acapsScore: 1,
    trend: 'stable',
    description: 'Strong institutional support for refugee populations',
    highlight: 'Hosts significant refugee population with minimal barriers',
  },
];

// Post-conflict zones requiring careful monitoring - peace is fragile
const FRAGILE_PEACE_ZONES = [
  {
    region: 'Africa',
    countries: [
      {
        name: 'Northern Mozambique',
        area: 'Cabo Delgado',
        status: 'stabilizing',
        description: 'Insurgency reduced after regional military interventions',
        focus: ['Community dialogue', 'Economic recovery', 'Displaced population reintegration'],
      },
      {
        name: 'South Sudan',
        area: 'Nationwide',
        status: 'fragile',
        description: '2018 peace agreement holding tenuously',
        focus: ['Disarmament', 'Reconciliation', 'Transitional governance'],
      },
      {
        name: 'Libya',
        area: 'Post-ceasefire zones',
        status: 'fragile',
        description: 'Ceasefire since 2020 largely intact',
        focus: ['Political reconciliation', 'UN-led dialogue', 'Factional mediation'],
      },
    ],
  },
  {
    region: 'Middle East',
    countries: [
      {
        name: 'Iraq',
        area: 'Post-ISIS zones',
        status: 'recovering',
        description: 'Military defeat of ISIS left regions in recovery mode',
        focus: ['Sectarian reconciliation', 'Governance rebuilding', 'Counter-extremism'],
      },
      {
        name: 'Syria',
        area: 'Ceasefire zones',
        status: 'fragile',
        description: 'Some areas stabilized under ceasefire agreements',
        focus: ['Reconstruction', 'Reconciliation', 'International aid coordination'],
      },
    ],
  },
  {
    region: 'Europe & Caucasus',
    countries: [
      {
        name: 'Nagorno-Karabakh',
        area: 'Armenia–Azerbaijan',
        status: 'fragile',
        description: 'Ceasefires since 2020, renewed agreements in 2023',
        focus: ['Displaced population return', 'Ethnic reconciliation', 'Border demarcation'],
      },
      {
        name: 'Kosovo & Bosnia',
        area: 'Western Balkans',
        status: 'stabilizing',
        description: 'No renewed conflict, but reconciliation ongoing',
        focus: ['EU-led governance initiatives', 'Dialogue', 'Ethnic tension prevention'],
      },
    ],
  },
  {
    region: 'Latin America',
    countries: [
      {
        name: 'Colombia',
        area: 'Post-FARC zones',
        status: 'fragile',
        description: 'Peace agreement implementation continues',
        focus: ['Ex-combatant reintegration', 'Reconciliation programs', 'Criminal group containment'],
      },
    ],
  },
];

const getFragileStatusColor = (status: string) => {
  switch (status) {
    case 'fragile':
      return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    case 'stabilizing':
      return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    case 'recovering':
      return 'bg-green-500/20 text-green-300 border-green-500/30';
    default:
      return 'bg-slate-800 text-slate-300 border-slate-700';
  }
};

// Maritime Mine Zones - threats to shipping and global trade
// Source: Dryad Global, Lloyd's List, World Ports Source
const MARITIME_MINE_ZONES = [
  {
    severity: 'urgent',
    zones: [
      {
        name: 'Black Sea',
        area: 'Ukraine conflict zone',
        description: 'Cargo vessel NS Pride struck explosive device near Odesa in August 2025. Ongoing hazard from floating mines and debris.',
        impact: ['Grain export disruption', 'Floating mine hazards', 'War-risk insurance required'],
      },
      {
        name: 'Red Sea & Gulf of Aden',
        area: 'Yemen conflict zone',
        description: 'Houthi forces have deployed sea mines alongside missile and drone attacks. MV Eternity C sunk, multiple vessels damaged.',
        impact: ['Suez Canal revenues down 40%', 'Global shipping rerouted via Cape of Good Hope', 'Insurance costs tripled'],
      },
    ],
  },
  {
    severity: 'ongoing',
    zones: [
      {
        name: 'Baltic Sea',
        area: 'NATO clearance operations',
        description: 'NATO and EU-led operations continue to clear WWII-era mines, especially around shipping lanes.',
        impact: ['Active clearance operations', 'Shipping lane protection', 'Periodic discoveries'],
      },
      {
        name: 'Persian Gulf',
        area: 'Oil shipping routes',
        description: 'Regular clearance operations reduce risks to oil shipping routes, though hazards persist from historical conflicts.',
        impact: ['Oil shipping route protection', 'Active clearance programs', 'Legacy Iran-Iraq War hazards'],
      },
    ],
  },
  {
    severity: 'legacy',
    zones: [
      {
        name: 'South China Sea',
        area: 'Territorial waters',
        description: 'Historic mines and tensions over territorial waters pose risks to fishing and trade.',
        impact: ['Fishing restrictions', 'Trade route hazards', 'Territorial tensions compound risk'],
      },
      {
        name: 'Pacific Islands',
        area: 'WWII remnants',
        description: 'WWII mines still affect fishing communities, limiting safe access to coastal waters.',
        impact: ['Fishing restrictions', 'Coastal hazards', 'Limited clearance resources'],
      },
    ],
  },
];

const getMineSeverityColor = (severity: string) => {
  switch (severity) {
    case 'urgent':
      return 'bg-red-500/20 text-red-300 border-red-500/30';
    case 'ongoing':
      return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    case 'legacy':
      return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
    default:
      return 'bg-slate-800 text-slate-300 border-slate-700';
  }
};

const getSeverityLabel = (severity: string) => {
  switch (severity) {
    case 'urgent':
      return 'Urgent Incidents';
    case 'ongoing':
      return 'Ongoing Clearance';
    case 'legacy':
      return 'Legacy Risks';
    default:
      return severity;
  }
};

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

      {/* ACAPS Methodology Explainer */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50"
          >
            <h3 className="text-lg font-bold text-white mb-4">Understanding ACAPS Humanitarian Access Scores</h3>
            <p className="text-sm text-slate-400 mb-4">
              The ACAPS methodology measures humanitarian access using 9 indicators across 3 pillars,
              scoring each country from 0 (no constraints) to 5 (extreme constraints):
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <h4 className="text-sm font-semibold text-blue-300 mb-2">Pillar 1: People&apos;s Access</h4>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Denial of humanitarian needs</li>
                  <li>• Obstruction of services</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <h4 className="text-sm font-semibold text-purple-300 mb-2">Pillar 2: Org Access</h4>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Entry impediments (bureaucratic)</li>
                  <li>• Movement restrictions</li>
                  <li>• Programmatic interference</li>
                  <li>• Violence against aid workers</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <h4 className="text-sm font-semibold text-amber-300 mb-2">Pillar 3: Physical/Security</h4>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• Hostilities affecting aid</li>
                  <li>• Landmines/IEDs/UXO</li>
                  <li>• Environmental constraints</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded">0-1: Low/No constraints</span>
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded">2: Moderate</span>
              <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded">3: High</span>
              <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded">4: Very High</span>
              <span className="px-2 py-1 bg-red-600/30 text-red-200 rounded">5: Extreme</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fragile Peace Zones */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white">Fragile Peace Zones</h2>
              <span className="px-2 py-1 text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full">
                ICU Watch
              </span>
            </div>
            <p className="text-slate-400">
              Post-conflict regions where military hostilities have ceased but stability remains fragile.
              These require careful monitoring during the Olympic Truce to prevent re-escalation.
            </p>
          </motion.div>

          <div className="space-y-8">
            {FRAGILE_PEACE_ZONES.map((zone, zoneIndex) => (
              <motion.div
                key={zone.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: zoneIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-slate-300 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  {zone.region}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {zone.countries.map((country) => (
                    <div
                      key={country.name}
                      className="p-4 rounded-xl bg-slate-950/50 border border-slate-700/50"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-white">{country.name}</h4>
                          <span className="text-xs text-slate-500">{country.area}</span>
                        </div>
                        <span className={`px-2 py-0.5 text-xs rounded-full border ${getFragileStatusColor(country.status)}`}>
                          {country.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 mb-3">{country.description}</p>
                      <div className="space-y-1">
                        {country.focus.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-slate-500">
                            <span className="w-1 h-1 rounded-full bg-amber-500/50" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <p className="text-sm text-amber-200/80">
              <strong className="text-amber-300">Why monitor post-conflict zones?</strong> These regions are engaged in
              reconciliation, disarmament, and peacebuilding. Risks of relapse remain high due to weak institutions,
              economic instability, ethnic divisions, and external interference. The Olympic Truce provides a symbolic
              window for reinforcing these fragile peace processes.
            </p>
          </div>
        </div>
      </section>

      {/* Maritime Mine Threats */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white">Maritime Mine Threats</h2>
              <span className="px-2 py-1 text-xs bg-red-500/20 text-red-300 border border-red-500/30 rounded-full">
                Shipping Risk
              </span>
            </div>
            <p className="text-slate-400">
              Global maritime mine incidents threaten shipping lanes, disrupt trade, and endanger humanitarian supply chains.
              These hotspots highlight urgent risks to mariners and global commerce.
            </p>
          </motion.div>

          <div className="space-y-8">
            {MARITIME_MINE_ZONES.map((group, groupIndex) => (
              <motion.div
                key={group.severity}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-slate-300 mb-4 flex items-center gap-2">
                  <span className={`px-2 py-0.5 text-xs rounded-full border ${getMineSeverityColor(group.severity)}`}>
                    {getSeverityLabel(group.severity)}
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.zones.map((zone) => (
                    <div
                      key={zone.name}
                      className="p-4 rounded-xl bg-slate-950/50 border border-slate-700/50"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-white">{zone.name}</h4>
                          <span className="text-xs text-slate-500">{zone.area}</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-400 mb-3">{zone.description}</p>
                      <div className="space-y-1">
                        {zone.impact.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-slate-500">
                            <span className="w-1 h-1 rounded-full bg-red-500/50" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
            <p className="text-sm text-red-200/80">
              <strong className="text-red-300">Strategic Impact:</strong> The Black Sea and Red Sea are the most urgent
              maritime mine zones today. Rerouting ships away from the Red Sea has cut Suez Canal revenues by 40% since 2023.
              Mines threaten food security by blocking grain exports from Ukraine and disrupting fishing in the Pacific.
              These are not just remnants of past wars — they are active threats to civilians, economies, and global stability.
            </p>
          </div>

          <div className="mt-4 text-xs text-slate-500">
            <p>Sources: <a href="https://channel16.dryadglobal.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Dryad Global</a>, <a href="https://www.lloydslist.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Lloyd&apos;s List</a>, <a href="https://www.worldports.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">World Ports Source</a></p>
          </div>
        </div>
      </section>

      {/* Exemplary Response */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white">Exemplary Humanitarian Access</h2>
              <span className="px-2 py-1 text-xs bg-green-500/20 text-green-300 border border-green-500/30 rounded-full">
                Best Practices
              </span>
            </div>
            <p className="text-slate-400">
              Countries scoring well on humanitarian access (ACAPS Score 0-1), demonstrating effective
              support for humanitarian operations and refugee populations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXEMPLARY_COUNTRIES.map((country, index) => (
              <motion.div
                key={country.iso3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-5 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 hover:border-green-400/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white text-lg">{country.name}</h3>
                    <span className={`inline-block px-2 py-0.5 text-xs rounded-full border mt-1 ${
                      country.trend === 'improved'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                        : 'bg-green-500/20 text-green-300 border-green-500/30'
                    }`}>
                      {country.trend === 'improved' ? '↑ improved' : '→ stable'}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">
                      {country.acapsScore}/5
                    </div>
                    <div className="text-xs text-slate-500">ACAPS Score</div>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-2">{country.description}</p>
                <p className="text-xs text-green-400/80">{country.highlight}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <p className="text-sm text-green-200/80">
              <strong className="text-green-300">Why highlight positive examples?</strong> These countries demonstrate
              that effective humanitarian access is achievable. Low scores (0-1) indicate minimal bureaucratic impediments,
              freedom of movement for aid workers, and supportive policies for refugee populations. Their practices
              serve as models for improving humanitarian access globally.
            </p>
          </div>

          <div className="mt-4 text-xs text-slate-500">
            <p>
              Source:{' '}
              <a
                href="https://www.acaps.org/fileadmin/Data_Product/Main_media/20250120_ACAPS_Humanitarian_Access_Overview__2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                ACAPS Humanitarian Access Overview July 2025
              </a>
              , expert consultation with humanitarian professionals
            </p>
          </div>
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
                <p className="text-slate-300 text-sm mb-3">
                  The humanitarian access monitoring for the Truce Foundation is developed in consultation with
                  experienced humanitarian professionals with decades of field experience across UN agencies,
                  USAID, and international NGOs. Our advisors have directed emergency operations in complex
                  emergencies including the Ebola outbreak in West Africa, Ukrainian refugee coordination,
                  and conflict responses in Sudan, Bosnia, Angola, and Gaza.
                </p>
                <p className="text-slate-300 text-sm">
                  Our humanitarian advisor{' '}
                  <a
                    href="https://global.utexas.edu/events/humanitarian-aid-crisis-saving-lives-time-eroding-support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Doug Mercado
                  </a>
                  {' '}brings extensive experience from senior roles at USAID and the UN, having coordinated
                  humanitarian responses to some of the most challenging crises of recent decades.
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
