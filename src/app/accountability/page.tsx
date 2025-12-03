'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TRUCE_INDEX_URL } from '@/lib/constants';

// Historical Olympic Truce periods with documented violations
interface TrucePeriod {
  id: string;
  games: string;
  year: number;
  city: string;
  country: string;
  season: 'Summer' | 'Winter';
  truceWindow: {
    start: string;
    end: string;
  };
  unResolution: string;
  violations: Violation[];
  status: 'observed' | 'violated' | 'mixed';
}

interface Violation {
  country: string;
  countryIso3: string;
  description: string;
  date?: string;
  severity: 'critical' | 'major' | 'significant';
  casualties?: number;
  sources?: string[];
}

// Historical data - violations during Olympic Truce windows
const TRUCE_PERIODS: TrucePeriod[] = [
  {
    id: 'paris-2024',
    games: 'Paris 2024',
    year: 2024,
    city: 'Paris',
    country: 'France',
    season: 'Summer',
    truceWindow: {
      start: '2024-07-19',
      end: '2024-09-15',
    },
    unResolution: 'A/RES/78/10',
    status: 'violated',
    violations: [
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'Continued military operations in Ukraine throughout the Truce period, including missile strikes on civilian infrastructure',
        severity: 'critical',
        sources: ['UN Reports', 'OHCHR'],
      },
      {
        country: 'Israel',
        countryIso3: 'ISR',
        description: 'Military operations in Gaza continued during the Truce window',
        severity: 'critical',
        sources: ['UN Reports', 'OCHA'],
      },
      {
        country: 'Sudan',
        countryIso3: 'SDN',
        description: 'Ongoing civil conflict between SAF and RSF forces',
        severity: 'major',
        sources: ['ACLED', 'Crisis Group'],
      },
      {
        country: 'Myanmar',
        countryIso3: 'MMR',
        description: 'Continued military operations against civilian populations',
        severity: 'major',
        sources: ['ACLED', 'UN Reports'],
      },
    ],
  },
  {
    id: 'beijing-2022-winter',
    games: 'Beijing 2022',
    year: 2022,
    city: 'Beijing',
    country: 'China',
    season: 'Winter',
    truceWindow: {
      start: '2022-01-28',
      end: '2022-03-20',
    },
    unResolution: 'A/RES/76/13',
    status: 'violated',
    violations: [
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'Full-scale invasion of Ukraine launched February 24, 2022 - between Olympic and Paralympic Games',
        date: '2022-02-24',
        severity: 'critical',
        casualties: 10000,
        sources: ['UN Security Council', 'OHCHR'],
      },
    ],
  },
  {
    id: 'tokyo-2020',
    games: 'Tokyo 2020',
    year: 2021,
    city: 'Tokyo',
    country: 'Japan',
    season: 'Summer',
    truceWindow: {
      start: '2021-07-16',
      end: '2021-09-12',
    },
    unResolution: 'A/RES/74/16',
    status: 'violated',
    violations: [
      {
        country: 'Afghanistan',
        countryIso3: 'AFG',
        description: 'Taliban offensive and fall of Kabul during Games period',
        date: '2021-08-15',
        severity: 'critical',
        sources: ['UN Reports', 'Crisis Group'],
      },
      {
        country: 'Ethiopia',
        countryIso3: 'ETH',
        description: 'Tigray conflict escalation during Truce window',
        severity: 'major',
        sources: ['ACLED', 'UN Reports'],
      },
    ],
  },
  {
    id: 'pyeongchang-2018',
    games: 'PyeongChang 2018',
    year: 2018,
    city: 'PyeongChang',
    country: 'South Korea',
    season: 'Winter',
    truceWindow: {
      start: '2018-02-02',
      end: '2018-03-25',
    },
    unResolution: 'A/RES/72/6',
    status: 'observed',
    violations: [],
  },
  {
    id: 'rio-2016',
    games: 'Rio 2016',
    year: 2016,
    city: 'Rio de Janeiro',
    country: 'Brazil',
    season: 'Summer',
    truceWindow: {
      start: '2016-07-29',
      end: '2016-09-25',
    },
    unResolution: 'A/RES/70/4',
    status: 'violated',
    violations: [
      {
        country: 'Syria',
        countryIso3: 'SYR',
        description: 'Syrian Civil War continued with intense fighting in Aleppo',
        severity: 'critical',
        sources: ['UN Reports', 'SOHR'],
      },
      {
        country: 'Yemen',
        countryIso3: 'YEM',
        description: 'Saudi-led coalition continued military operations',
        severity: 'major',
        sources: ['ACLED', 'UN Reports'],
      },
    ],
  },
  {
    id: 'sochi-2014',
    games: 'Sochi 2014',
    year: 2014,
    city: 'Sochi',
    country: 'Russia',
    season: 'Winter',
    truceWindow: {
      start: '2014-01-31',
      end: '2014-03-23',
    },
    unResolution: 'A/RES/68/9',
    status: 'violated',
    violations: [
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'Annexation of Crimea began February 27, 2014 - between Olympic and Paralympic Games',
        date: '2014-02-27',
        severity: 'critical',
        sources: ['UN General Assembly', 'OSCE'],
      },
    ],
  },
  {
    id: 'london-2012',
    games: 'London 2012',
    year: 2012,
    city: 'London',
    country: 'United Kingdom',
    season: 'Summer',
    truceWindow: {
      start: '2012-07-20',
      end: '2012-09-16',
    },
    unResolution: 'A/RES/66/5',
    status: 'violated',
    violations: [
      {
        country: 'Syria',
        countryIso3: 'SYR',
        description: 'Syrian Civil War intensified during Games period',
        severity: 'critical',
        sources: ['UN Reports'],
      },
    ],
  },
  {
    id: 'vancouver-2010',
    games: 'Vancouver 2010',
    year: 2010,
    city: 'Vancouver',
    country: 'Canada',
    season: 'Winter',
    truceWindow: {
      start: '2010-02-05',
      end: '2010-03-28',
    },
    unResolution: 'A/RES/64/4',
    status: 'violated',
    violations: [
      {
        country: 'Afghanistan',
        countryIso3: 'AFG',
        description: 'Operation Moshtarak (Feb 13) - major NATO offensive in Helmand during Games',
        date: '2010-02-13',
        severity: 'critical',
        sources: ['UN Reports', 'NATO'],
      },
      {
        country: 'Pakistan',
        countryIso3: 'PAK',
        description: 'War in North-West Pakistan - ongoing military operations against Taliban',
        severity: 'major',
        sources: ['UN Reports', 'Crisis Group'],
      },
      {
        country: 'Somalia',
        countryIso3: 'SOM',
        description: 'Somali Civil War continued with al-Shabaab offensive operations',
        severity: 'major',
        sources: ['UN Reports', 'ACLED'],
      },
    ],
  },
  {
    id: 'beijing-2008',
    games: 'Beijing 2008',
    year: 2008,
    city: 'Beijing',
    country: 'China',
    season: 'Summer',
    truceWindow: {
      start: '2008-08-01',
      end: '2008-09-24',
    },
    unResolution: 'A/RES/62/4',
    status: 'violated',
    violations: [
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'Russo-Georgian War began August 7, 2008 - one day before Opening Ceremony',
        date: '2008-08-07',
        severity: 'critical',
        casualties: 850,
        sources: ['EU Fact-Finding Mission', 'UN Reports'],
      },
      {
        country: 'Georgia',
        countryIso3: 'GEO',
        description: 'Military engagement in South Ossetia conflict',
        date: '2008-08-07',
        severity: 'critical',
        sources: ['EU Fact-Finding Mission'],
      },
    ],
  },
  {
    id: 'turin-2006',
    games: 'Turin 2006',
    year: 2006,
    city: 'Turin',
    country: 'Italy',
    season: 'Winter',
    truceWindow: {
      start: '2006-02-03',
      end: '2006-03-26',
    },
    unResolution: 'A/RES/60/8',
    status: 'violated',
    violations: [
      {
        country: 'Iraq',
        countryIso3: 'IRQ',
        description: 'Iraq War continued with intense sectarian violence following the Al-Askari mosque bombing (Feb 22)',
        severity: 'critical',
        sources: ['UN Reports', 'Iraq Body Count'],
      },
      {
        country: 'Sudan',
        countryIso3: 'SDN',
        description: 'Darfur conflict ongoing with continued attacks on civilians',
        severity: 'critical',
        sources: ['UN Reports', 'Crisis Group'],
      },
    ],
  },
  {
    id: 'athens-2004',
    games: 'Athens 2004',
    year: 2004,
    city: 'Athens',
    country: 'Greece',
    season: 'Summer',
    truceWindow: {
      start: '2004-08-06',
      end: '2004-10-03',
    },
    unResolution: 'A/RES/58/6',
    status: 'violated',
    violations: [
      {
        country: 'Iraq',
        countryIso3: 'IRQ',
        description: 'Iraq War continued - Battle of Najaf (Aug 5-27) and ongoing insurgency',
        severity: 'critical',
        sources: ['UN Reports', 'US DoD'],
      },
      {
        country: 'Sudan',
        countryIso3: 'SDN',
        description: 'Darfur genocide ongoing - UN declared humanitarian emergency July 2004',
        severity: 'critical',
        sources: ['UN Security Council', 'Human Rights Watch'],
      },
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'Second Chechen War operations continued',
        severity: 'major',
        sources: ['Human Rights Watch', 'Memorial'],
      },
    ],
  },
  {
    id: 'salt-lake-2002',
    games: 'Salt Lake City 2002',
    year: 2002,
    city: 'Salt Lake City',
    country: 'United States',
    season: 'Winter',
    truceWindow: {
      start: '2002-02-01',
      end: '2002-03-24',
    },
    unResolution: 'A/RES/56/75',
    status: 'violated',
    violations: [
      {
        country: 'Afghanistan',
        countryIso3: 'AFG',
        description: 'US-led Operation Anaconda (Mar 2-18) during Paralympic period',
        date: '2002-03-02',
        severity: 'critical',
        sources: ['US DoD', 'UN Reports'],
      },
      {
        country: 'Israel',
        countryIso3: 'ISR',
        description: 'Second Intifada - IDF Operation Defensive Shield preparation, ongoing violence',
        severity: 'major',
        sources: ['UN Reports', 'B\'Tselem'],
      },
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'Second Chechen War continued with military operations',
        severity: 'major',
        sources: ['Human Rights Watch', 'Memorial'],
      },
    ],
  },
  {
    id: 'sydney-2000',
    games: 'Sydney 2000',
    year: 2000,
    city: 'Sydney',
    country: 'Australia',
    season: 'Summer',
    truceWindow: {
      start: '2000-09-08',
      end: '2000-11-05',
    },
    unResolution: 'A/RES/54/34',
    status: 'violated',
    violations: [
      {
        country: 'Israel',
        countryIso3: 'ISR',
        description: 'Second Intifada began September 28, 2000 during Games',
        date: '2000-09-28',
        severity: 'critical',
        sources: ['UN Reports', 'B\'Tselem'],
      },
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'Second Chechen War operations ongoing',
        severity: 'major',
        sources: ['Human Rights Watch', 'Memorial'],
      },
    ],
  },
  {
    id: 'nagano-1998',
    games: 'Nagano 1998',
    year: 1998,
    city: 'Nagano',
    country: 'Japan',
    season: 'Winter',
    truceWindow: {
      start: '1998-01-30',
      end: '1998-03-22',
    },
    unResolution: 'A/RES/52/21',
    status: 'observed',
    violations: [],
  },
  {
    id: 'atlanta-1996',
    games: 'Atlanta 1996',
    year: 1996,
    city: 'Atlanta',
    country: 'United States',
    season: 'Summer',
    truceWindow: {
      start: '1996-07-12',
      end: '1996-09-08',
    },
    unResolution: 'A/RES/50/13',
    status: 'violated',
    violations: [
      {
        country: 'Russia',
        countryIso3: 'RUS',
        description: 'First Chechen War - Battle of Grozny (Aug 6-22) during Games',
        date: '1996-08-06',
        severity: 'critical',
        casualties: 2000,
        sources: ['Human Rights Watch', 'Memorial'],
      },
      {
        country: 'Burundi',
        countryIso3: 'BDI',
        description: 'Burundian Civil War - military coup July 25 during Games',
        date: '1996-07-25',
        severity: 'major',
        sources: ['UN Reports', 'Crisis Group'],
      },
      {
        country: 'Afghanistan',
        countryIso3: 'AFG',
        description: 'Afghan Civil War continued - Taliban offensive operations',
        severity: 'major',
        sources: ['UN Reports'],
      },
    ],
  },
  {
    id: 'lillehammer-1994',
    games: 'Lillehammer 1994',
    year: 1994,
    city: 'Lillehammer',
    country: 'Norway',
    season: 'Winter',
    truceWindow: {
      start: '1994-02-05',
      end: '1994-03-27',
    },
    unResolution: 'A/RES/48/11',
    status: 'violated',
    violations: [
      {
        country: 'Bosnia and Herzegovina',
        countryIso3: 'BIH',
        description: 'Bosnian War continued - Siege of Sarajevo ongoing, Markale massacre (Feb 5) on Opening Day',
        date: '1994-02-05',
        severity: 'critical',
        casualties: 68,
        sources: ['ICTY', 'UN Reports'],
      },
      {
        country: 'Serbia',
        countryIso3: 'SRB',
        description: 'Yugoslav Wars - Bosnian Serb forces continued siege operations',
        severity: 'critical',
        sources: ['ICTY', 'UN Reports'],
      },
      {
        country: 'Croatia',
        countryIso3: 'HRV',
        description: 'Croatian War of Independence - ongoing military operations',
        severity: 'major',
        sources: ['ICTY', 'UN Reports'],
      },
      {
        country: 'Rwanda',
        countryIso3: 'RWA',
        description: 'Rwandan Civil War escalating - genocide would begin April 1994',
        severity: 'major',
        sources: ['UN Reports', 'Human Rights Watch'],
      },
    ],
  },
];

// Calculate repeat offenders from the data
interface RepeatOffender {
  country: string;
  countryIso3: string;
  violationCount: number;
  gamesViolated: string[];
  mostRecent: number;
}

const calculateRepeatOffenders = (): RepeatOffender[] => {
  const offenderMap = new Map<string, { country: string; countryIso3: string; games: string[]; years: number[] }>();

  TRUCE_PERIODS.forEach(period => {
    period.violations.forEach(violation => {
      const key = violation.countryIso3;
      if (!offenderMap.has(key)) {
        offenderMap.set(key, {
          country: violation.country,
          countryIso3: violation.countryIso3,
          games: [],
          years: [],
        });
      }
      const entry = offenderMap.get(key)!;
      if (!entry.games.includes(period.games)) {
        entry.games.push(period.games);
        entry.years.push(period.year);
      }
    });
  });

  return Array.from(offenderMap.values())
    .map(entry => ({
      country: entry.country,
      countryIso3: entry.countryIso3,
      violationCount: entry.games.length,
      gamesViolated: entry.games,
      mostRecent: Math.max(...entry.years),
    }))
    .filter(o => o.violationCount > 1)
    .sort((a, b) => b.violationCount - a.violationCount);
};

const REPEAT_OFFENDERS = calculateRepeatOffenders();

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

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'observed':
      return {
        bg: 'from-green-500/20 to-green-600/10',
        border: 'border-green-500/30',
        label: 'Truce Observed',
        icon: '✓',
        iconColor: 'text-green-400',
      };
    case 'violated':
      return {
        bg: 'from-red-500/20 to-red-600/10',
        border: 'border-red-500/30',
        label: 'Truce Violated',
        icon: '✗',
        iconColor: 'text-red-400',
      };
    default:
      return {
        bg: 'from-amber-500/20 to-amber-600/10',
        border: 'border-amber-500/30',
        label: 'Mixed',
        icon: '~',
        iconColor: 'text-amber-400',
      };
  }
};

export default function AccountabilityPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  const totalViolations = TRUCE_PERIODS.reduce((acc, p) => acc + p.violations.length, 0);
  const violatedPeriods = TRUCE_PERIODS.filter(p => p.status === 'violated').length;
  const observedPeriods = TRUCE_PERIODS.filter(p => p.status === 'observed').length;

  // Count unique countries with violations
  const violatingCountries = new Set<string>();
  TRUCE_PERIODS.forEach(p => {
    p.violations.forEach(v => violatingCountries.add(v.countryIso3));
  });

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
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Truce Accountability Record
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A permanent record of Olympic Truce compliance, inspired by the ancient tradition
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ancient Tradition Context */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🏛️</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white mb-2">The Ancient Wall of Shame</h2>
                <p className="text-slate-300 text-sm mb-3">
                  In ancient Greece, the Olympic Truce (<em>ekecheiria</em>) was sacred law. Those who violated it
                  faced severe consequences: their names were inscribed on stone <strong>stelai</strong> at Olympia,
                  creating a permanent record of shame visible to all visitors for generations.
                </p>
                <p className="text-slate-400 text-sm">
                  This modern Accountability Record continues that tradition of transparency and historical documentation.
                  Nations that engage in armed conflict during the Olympic Truce window are recorded here as a matter
                  of historical fact, not judgment.
                </p>
              </div>
            </div>
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
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 text-center"
            >
              <span className="text-3xl font-bold text-white">{TRUCE_PERIODS.length}</span>
              <p className="text-xs text-slate-500 mt-1">Truce Periods Tracked</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-center"
            >
              <span className="text-3xl font-bold text-red-400">{violatedPeriods}</span>
              <p className="text-xs text-slate-500 mt-1">Periods with Violations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-center"
            >
              <span className="text-3xl font-bold text-green-400">{observedPeriods}</span>
              <p className="text-xs text-slate-500 mt-1">Periods Observed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 text-center"
            >
              <span className="text-3xl font-bold text-slate-300">{violatingCountries.size}</span>
              <p className="text-xs text-slate-500 mt-1">Countries Recorded</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Repeat Offenders Analysis */}
      {REPEAT_OFFENDERS.length > 0 && (
        <section className="py-12 px-4 bg-slate-900/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-2">Repeat Violations</h2>
              <p className="text-slate-400 mb-6">Countries with documented violations across multiple Olympic Truce periods</p>

              <div className="space-y-4">
                {REPEAT_OFFENDERS.map((offender, index) => (
                  <motion.div
                    key={offender.countryIso3}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 rounded-xl bg-red-500/10 border border-red-500/30"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                          <span className="text-xl font-bold text-red-400">{offender.violationCount}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-white">{offender.country}</h3>
                        </div>
                      </div>
                      <a
                        href={`${TRUCE_INDEX_URL}/?country=${offender.countryIso3}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
                      >
                        View Current Data
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {offender.gamesViolated.map((game) => (
                        <span
                          key={game}
                          className="px-2 py-1 text-xs bg-slate-800/50 text-slate-400 rounded"
                        >
                          {game}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      Most recent: {offender.mostRecent} &middot; {offender.violationCount} Truce periods with documented violations
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <p className="text-xs text-slate-500">
                  <strong className="text-slate-400">Note:</strong> This analysis counts countries with violations recorded
                  across multiple distinct Olympic Truce periods. Single incidents across consecutive Games (e.g., ongoing
                  conflicts) are counted separately for each Truce window they span.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Historical Record */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Historical Record by Olympic Games
          </motion.h2>

          <div className="space-y-6">
            {TRUCE_PERIODS.map((period, index) => {
              const config = getStatusConfig(period.status);
              const isExpanded = selectedPeriod === period.id;

              return (
                <motion.div
                  key={period.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`rounded-2xl bg-gradient-to-br ${config.bg} border ${config.border} overflow-hidden`}
                >
                  {/* Header - Always visible */}
                  <button
                    onClick={() => setSelectedPeriod(isExpanded ? null : period.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-xl font-bold ${config.iconColor}`}>
                        {config.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-white">{period.games}</h3>
                          <span className="px-2 py-0.5 text-xs bg-slate-800/50 text-slate-300 rounded-full">
                            {period.season}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400">
                          {period.country} &middot; {period.unResolution}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <span className={`text-sm ${config.iconColor}`}>{config.label}</span>
                        {period.violations.length > 0 && (
                          <p className="text-xs text-slate-500">
                            {period.violations.length} violation{period.violations.length !== 1 ? 's' : ''} recorded
                          </p>
                        )}
                      </div>
                      <svg
                        className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="px-6 pb-6 border-t border-slate-700/30"
                    >
                      <div className="pt-4 space-y-4">
                        {/* Truce Window Info */}
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="px-3 py-2 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-500">Truce Window:</span>{' '}
                            <span className="text-slate-300">
                              {new Date(period.truceWindow.start).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {' '}
                              {new Date(period.truceWindow.end).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                          </div>
                        </div>

                        {/* Violations List */}
                        {period.violations.length > 0 ? (
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                              Recorded Violations
                            </h4>
                            {period.violations.map((violation, vIndex) => (
                              <div
                                key={`${violation.countryIso3}-${vIndex}`}
                                className={`p-4 rounded-xl border ${getSeverityColor(violation.severity)}`}
                              >
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                      <span className="font-semibold text-white">{violation.country}</span>
                                      <span className="px-2 py-0.5 text-xs rounded-full bg-slate-800/50 text-slate-400">
                                        {violation.countryIso3}
                                      </span>
                                      <span className={`px-2 py-0.5 text-xs rounded-full ${getSeverityColor(violation.severity)}`}>
                                        {violation.severity}
                                      </span>
                                    </div>
                                    <p className="text-sm text-slate-300">{violation.description}</p>
                                    {violation.date && (
                                      <p className="text-xs text-slate-500 mt-2">
                                        Date: {new Date(violation.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                      </p>
                                    )}
                                    {violation.sources && violation.sources.length > 0 && (
                                      <p className="text-xs text-slate-500 mt-1">
                                        Sources: {violation.sources.join(', ')}
                                      </p>
                                    )}
                                  </div>
                                  <a
                                    href={`${TRUCE_INDEX_URL}/?country=${violation.countryIso3}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors flex-shrink-0"
                                  >
                                    View on Map
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                            <span className="text-green-400">No violations recorded during this Truce period</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milano-Cortina 2026 Preview */}
      <section className="py-12 px-4 bg-slate-900/30">
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
            <p className="text-slate-400 mb-2">
              The next Olympic Truce window per <a href="/downloads/A_80_L.10-EN.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">UN Resolution A/80/L.10</a>:
            </p>
            <p className="text-lg text-white font-medium mb-6">
              January 30 - March 22, 2026
            </p>
            <p className="text-slate-400 mb-6">
              The Truce Index will track compliance in real-time. Will this be a Truce observed?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/leaderboard"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors"
              >
                View Current Leaderboard
              </Link>
              <a
                href={TRUCE_INDEX_URL}
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

      {/* Methodology Note */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-700/50">
            <h3 className="text-sm font-semibold text-slate-400 mb-3">Methodology Note</h3>
            <p className="text-xs text-slate-500">
              This record documents armed conflicts and significant military operations that occurred during
              official Olympic Truce windows (7 days before Opening Ceremony to 7 days after Paralympic Closing).
              Violations are sourced from UN reports, ACLED, UCDP, and other verified conflict databases.
              The severity classification considers scale of conflict, civilian impact, and direct contravention
              of Truce principles. This is a factual historical record, not a legal determination.
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/history"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Truce History
              </h3>
              <p className="text-sm text-slate-400 mt-1">30 years of UN Solemn Appeals</p>
            </Link>
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
              href="/leaderboard"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Live Leaderboard
              </h3>
              <p className="text-sm text-slate-400 mt-1">Current incident rankings</p>
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
