'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface OlympicGame {
  year: number;
  city: string;
  country: string;
  season: 'Summer' | 'Winter';
  unResolution?: string;
  coSponsors?: number;
  solemnAppeal: boolean;
  milestoneEffects: string[];
  violations?: string[];
  significance: 'positive' | 'mixed' | 'negative' | 'neutral';
}

const OLYMPIC_TRUCE_HISTORY: OlympicGame[] = [
  {
    year: 1994,
    city: 'Lillehammer',
    country: 'Norway',
    season: 'Winter',
    unResolution: 'A/RES/48/11',
    solemnAppeal: true,
    milestoneEffects: [
      'First Games with formal Olympic Truce application',
      'UN proclaimed 1994 as International Year of Sport and the Olympic Ideal',
      'Former Yugoslavia allowed to participate despite ongoing wars',
      'IOC delegation visited Sarajevo in solidarity (1984 Winter Games host)',
    ],
    significance: 'positive',
  },
  {
    year: 1996,
    city: 'Atlanta',
    country: 'USA',
    season: 'Summer',
    unResolution: 'A/RES/50/13',
    solemnAppeal: true,
    milestoneEffects: [
      'Resolution supported building peaceful world through sport',
      'Centennial Olympic Games celebrated 100 years of modern Olympics',
    ],
    significance: 'neutral',
  },
  {
    year: 1998,
    city: 'Nagano',
    country: 'Japan',
    season: 'Winter',
    unResolution: 'A/RES/52/21',
    solemnAppeal: true,
    milestoneEffects: [
      'During Persian Gulf tensions, UN Secretary General Kofi Annan invoked the Truce',
      'Annan stated: "I call upon all nations to observe the Olympic truce"',
      'Diplomatic intervention helped ease Iraq crisis during Games period',
    ],
    significance: 'positive',
  },
  {
    year: 2000,
    city: 'Sydney',
    country: 'Australia',
    season: 'Summer',
    unResolution: 'A/RES/54/34',
    coSponsors: 180,
    solemnAppeal: true,
    milestoneEffects: [
      'Record 180 Member States co-sponsored the resolution',
      'Historic moment: North and South Korea marched together under unified flag',
      'Symbolized hope for Korean peninsula reconciliation',
    ],
    significance: 'positive',
  },
  {
    year: 2002,
    city: 'Salt Lake City',
    country: 'USA',
    season: 'Winter',
    unResolution: 'A/RES/56/75',
    solemnAppeal: true,
    milestoneEffects: [
      'First Games after September 11, 2001 attacks',
      'US introduced modified resolution amid Afghanistan operations',
    ],
    violations: [
      'US exempted itself from cessation of hostilities with Afghanistan',
    ],
    significance: 'mixed',
  },
  {
    year: 2004,
    city: 'Athens',
    country: 'Greece',
    season: 'Summer',
    unResolution: 'A/RES/58/6',
    coSponsors: 190,
    solemnAppeal: true,
    milestoneEffects: [
      'Unprecedented 190 UN Member States co-sponsored resolution',
      'Games returned to birthplace of Olympics and ancient Truce tradition',
      'Strongest global endorsement of Olympic Truce to date',
    ],
    significance: 'positive',
  },
  {
    year: 2006,
    city: 'Turin',
    country: 'Italy',
    season: 'Winter',
    unResolution: 'A/RES/60/8',
    solemnAppeal: true,
    milestoneEffects: [
      'Solemn Appeal extended to Paralympic Games for first time',
      'Established precedent for inclusive Truce coverage',
    ],
    significance: 'positive',
  },
  {
    year: 2008,
    city: 'Beijing',
    country: 'China',
    season: 'Summer',
    unResolution: 'A/RES/62/4',
    solemnAppeal: true,
    milestoneEffects: [
      'China hosted its first Summer Olympic Games',
    ],
    violations: [
      'Russo-Georgian War (Aug 1-16) ran through opening ceremony',
      'First major armed conflict during Games since Truce revival',
    ],
    significance: 'negative',
  },
  {
    year: 2010,
    city: 'Vancouver',
    country: 'Canada',
    season: 'Winter',
    unResolution: 'A/RES/64/4',
    solemnAppeal: true,
    milestoneEffects: [
      'Canada hosted second Winter Games (after Calgary 1988)',
      'Truce observed without major violations',
    ],
    significance: 'neutral',
  },
  {
    year: 2012,
    city: 'London',
    country: 'United Kingdom',
    season: 'Summer',
    unResolution: 'A/RES/66/5',
    solemnAppeal: true,
    milestoneEffects: [
      'UN Secretary General Ban Ki-Moon carried Olympic Flag at Opening Ceremony',
      'First time UN chief participated in Olympic ceremony',
      'Resolution unanimously supported by General Assembly',
    ],
    significance: 'positive',
  },
  {
    year: 2014,
    city: 'Sochi',
    country: 'Russia',
    season: 'Winter',
    unResolution: 'A/RES/68/9',
    solemnAppeal: true,
    milestoneEffects: [
      'Russia hosted its first Winter Olympic Games',
    ],
    violations: [
      'Russian annexation of Crimea (Feb 27) occurred between Olympics and Paralympics',
      'US and UK diplomatically boycotted Paralympics in response',
    ],
    significance: 'negative',
  },
  {
    year: 2016,
    city: 'Rio de Janeiro',
    country: 'Brazil',
    season: 'Summer',
    unResolution: 'A/RES/70/4',
    solemnAppeal: true,
    milestoneEffects: [
      'First South American Olympics',
      'Refugee Olympic Team participated for first time',
    ],
    significance: 'neutral',
  },
  {
    year: 2018,
    city: 'PyeongChang',
    country: 'South Korea',
    season: 'Winter',
    unResolution: 'A/RES/72/6',
    solemnAppeal: true,
    milestoneEffects: [
      'North and South Korea formed unified womens ice hockey team',
      'Athletes marched under unified Korean flag',
      'Kim Yo-jong became first member of North Korean ruling family to visit South',
      'Significant diplomatic thaw during heightened Korean tensions',
    ],
    significance: 'positive',
  },
  {
    year: 2020,
    city: 'Tokyo',
    country: 'Japan',
    season: 'Summer',
    unResolution: 'A/RES/74/16',
    solemnAppeal: true,
    milestoneEffects: [
      'Games postponed to 2021 due to COVID-19 pandemic',
      'First Olympics held without spectators',
      'Demonstrated resilience of Olympic movement',
    ],
    significance: 'neutral',
  },
  {
    year: 2022,
    city: 'Beijing',
    country: 'China',
    season: 'Winter',
    unResolution: 'A/RES/76/13',
    coSponsors: 173,
    solemnAppeal: true,
    milestoneEffects: [
      'Beijing became first city to host both Summer and Winter Olympics',
      '173 Member States co-sponsored resolution',
    ],
    violations: [
      'Russian invasion of Ukraine (Feb 24) began between Olympics and Paralympics',
      'First time Olympic Truce violation was formally sanctioned',
      'Russia and Belarus banned from subsequent Olympic events',
    ],
    significance: 'negative',
  },
  {
    year: 2024,
    city: 'Paris',
    country: 'France',
    season: 'Summer',
    unResolution: 'A/RES/78/10',
    coSponsors: 77,
    solemnAppeal: true,
    milestoneEffects: [
      '100 years since Paris last hosted (1924)',
      'Russian and Belarusian athletes competed as Individual Neutral Athletes',
      'Ongoing global conflicts tested Truce principles',
      '118 votes in favour, 2 abstentions for resolution',
    ],
    significance: 'mixed',
  },
];

const getSignificanceConfig = (significance: OlympicGame['significance']) => {
  switch (significance) {
    case 'positive':
      return {
        bg: 'from-green-500/20 to-green-600/10',
        border: 'border-green-500/30',
        icon: '✓',
        iconColor: 'text-green-400',
        label: 'Truce Observed',
      };
    case 'negative':
      return {
        bg: 'from-red-500/20 to-red-600/10',
        border: 'border-red-500/30',
        icon: '✗',
        iconColor: 'text-red-400',
        label: 'Truce Violated',
      };
    case 'mixed':
      return {
        bg: 'from-amber-500/20 to-amber-600/10',
        border: 'border-amber-500/30',
        icon: '~',
        iconColor: 'text-amber-400',
        label: 'Mixed Outcome',
      };
    default:
      return {
        bg: 'from-slate-500/20 to-slate-600/10',
        border: 'border-slate-500/30',
        icon: '○',
        iconColor: 'text-slate-400',
        label: 'Neutral',
      };
  }
};

export default function HistoryPage() {
  const totalGames = OLYMPIC_TRUCE_HISTORY.length;
  const observedGames = OLYMPIC_TRUCE_HISTORY.filter(g => g.significance === 'positive' || g.significance === 'neutral').length;
  const violatedGames = OLYMPIC_TRUCE_HISTORY.filter(g => g.significance === 'negative').length;

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
              Olympic Truce History
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              30 Years of UN Solemn Appeals and Milestone Effects
            </p>
            <p className="text-slate-500">
              From Lillehammer 1994 to Paris 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 text-center"
            >
              <span className="text-3xl font-bold text-white">{totalGames}</span>
              <p className="text-xs text-slate-500 mt-1">Games with Truce</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-center"
            >
              <span className="text-3xl font-bold text-green-400">{observedGames}</span>
              <p className="text-xs text-slate-500 mt-1">Observed/Neutral</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-center"
            >
              <span className="text-3xl font-bold text-red-400">{violatedGames}</span>
              <p className="text-xs text-slate-500 mt-1">Major Violations</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-8 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30"
          >
            <h2 className="text-lg font-semibold text-white mb-3">The Modern Olympic Truce</h2>
            <div className="space-y-3 text-sm text-slate-300">
              <p>
                In 1992, the International Olympic Committee renewed the ancient Greek tradition of <em>ekecheiria</em> (holding of hands),
                calling upon all nations to observe the Olympic Truce during the modern Games.
              </p>
              <p>
                The Truce was formally established by <strong>UN Resolution 48/11</strong> on October 25, 1993, urging Member States
                to observe the Truce from the seventh day before the opening to the seventh day following the closing of each Olympic Games.
              </p>
              <p>
                Since 1994, the President of the UN General Assembly has made a <strong>Solemn Appeal</strong> before each Games.
                Beginning in 2006, this appeal was extended to cover the Paralympic Games as well.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Longitudinal Record
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-700/50 -translate-x-1/2" />

            {OLYMPIC_TRUCE_HISTORY.map((game, index) => {
              const config = getSignificanceConfig(game.significance);
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${game.year}-${game.city}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative mb-8 md:mb-12 ${
                    isLeft ? 'md:pr-[52%]' : 'md:pl-[52%]'
                  } pl-12 md:pl-0`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full flex items-center justify-center text-sm font-bold ${config.bg} border ${config.border} ${config.iconColor}`}>
                    {config.icon}
                  </div>

                  {/* Content card */}
                  <div className={`p-5 rounded-xl bg-gradient-to-br ${config.bg} border ${config.border}`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-white">{game.year}</span>
                          <span className="px-2 py-0.5 text-xs bg-slate-800/50 text-slate-300 rounded-full">
                            {game.season}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {game.city}, {game.country}
                        </h3>
                      </div>
                      <span className={`text-xs ${config.iconColor}`}>{config.label}</span>
                    </div>

                    {/* Resolution info */}
                    {game.unResolution && (
                      <div className="mb-3 text-xs text-slate-400">
                        <span className="font-medium text-slate-300">UN Resolution:</span> {game.unResolution}
                        {game.coSponsors && (
                          <span className="ml-2">({game.coSponsors} co-sponsors)</span>
                        )}
                      </div>
                    )}

                    {/* Milestone effects */}
                    <div className="space-y-1 mb-3">
                      {game.milestoneEffects.map((effect, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-green-400 mt-1">+</span>
                          <span className="text-slate-300">{effect}</span>
                        </div>
                      ))}
                    </div>

                    {/* Violations */}
                    {game.violations && game.violations.length > 0 && (
                      <div className="space-y-1 pt-2 border-t border-red-500/20">
                        {game.violations.map((violation, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-red-400 mt-1">-</span>
                            <span className="text-red-300">{violation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Milano-Cortina 2026
            </h2>
            <p className="text-slate-400 mb-6">
              The next Olympic Truce window opens for the 2026 Winter Games in Italy.
              The Truce Index will track compliance in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/methodology"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors"
              >
                View Methodology
              </Link>
              <a
                href="https://truce-index.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
              >
                Explore Live Index
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-semibold text-slate-500 mb-4 text-center">Sources</h3>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
            <a href="https://www.un.org/en/olympictruce" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              UN Olympic Truce
            </a>
            <span>|</span>
            <a href="https://www.olympics.com/ioc/olympic-truce/resolutions" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              IOC Resolutions
            </a>
            <span>|</span>
            <a href="https://olympictruce.org/en/profile/the-truce-timeline/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              IOTC Timeline
            </a>
          </div>
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
              <p className="text-sm text-slate-400 mt-1">How compliance is measured today</p>
            </Link>
            <Link
              href="/partners"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Our Partners
              </h3>
              <p className="text-sm text-slate-400 mt-1">Organizations supporting the Truce</p>
            </Link>
            <Link
              href="/advocacy"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Advocacy Toolkit
              </h3>
              <p className="text-sm text-slate-400 mt-1">Resources to champion the Truce</p>
            </Link>
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
