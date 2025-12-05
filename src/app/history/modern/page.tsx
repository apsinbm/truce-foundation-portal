'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';

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
    violations: [
      'Bosnian War continued - Markale massacre (68 killed) on Opening Day',
      'Siege of Sarajevo ongoing throughout Games',
    ],
    significance: 'negative',
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
    violations: [
      'First Chechen War - Battle of Grozny (Aug 6-22) during Games',
      'Burundian Civil War - military coup July 25 during Games',
    ],
    significance: 'negative',
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
    violations: [
      'Second Intifada began September 28, 2000 during Games',
      'Second Chechen War operations ongoing',
    ],
    significance: 'negative',
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
      'US-led Operation Anaconda (Mar 2-18) during Paralympic period',
      'Second Intifada - ongoing violence in Israel/Palestine',
      'Second Chechen War continued',
    ],
    significance: 'negative',
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
    violations: [
      'Iraq War continued - Battle of Najaf (Aug 5-27)',
      'Darfur genocide ongoing - UN declared humanitarian emergency',
      'Second Chechen War operations continued',
    ],
    significance: 'negative',
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
    violations: [
      'Iraq War continued with intense sectarian violence',
      'Darfur conflict ongoing with continued attacks on civilians',
    ],
    significance: 'negative',
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
      'Symbolic moment: Russian and Georgian shooters embraced on medal podium despite active combat',
    ],
    violations: [
      'August 8 (Opening Ceremony day): Russia invades Georgia; Putin receives real-time updates from the front while attending ceremony in Bird\'s Nest Stadium',
      '~800,000 Russian troops deployed; 60 civilians killed in Gori alone on August 9',
      'IOC response: no sanctions against Russia',
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
    ],
    violations: [
      'Operation Moshtarak (Feb 13) - major NATO offensive in Afghanistan during Games',
      'War in North-West Pakistan ongoing',
      'Somali Civil War continued',
    ],
    significance: 'negative',
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
    violations: [
      'Syrian Civil War intensified during Games period',
    ],
    significance: 'negative',
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
    violations: [
      'Syrian Civil War continued with intense fighting in Aleppo',
      'Yemen - Saudi-led coalition continued military operations',
    ],
    significance: 'negative',
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
    violations: [
      'Taliban offensive and fall of Kabul (Aug 15) during Games',
      'Tigray conflict escalation in Ethiopia',
    ],
    significance: 'negative',
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
      '118 votes in favour, 2 abstentions for resolution',
    ],
    violations: [
      'Russia continued military operations in Ukraine throughout Truce',
      'Israel-Gaza conflict continued during Truce window',
      'Sudan civil conflict between SAF and RSF forces',
      'Myanmar military operations against civilian populations',
    ],
    significance: 'negative',
  },
  {
    year: 2026,
    city: 'Milano-Cortina',
    country: 'Italy',
    season: 'Winter',
    unResolution: 'A/80/L.10',
    coSponsors: 166,
    solemnAppeal: true,
    milestoneEffects: [
      'Record 166 co-sponsors - highest in Olympic Truce history',
      'Resolution adopted by consensus on November 19, 2025',
      'Most gender-balanced Winter Games in history (near 50-50 participation)',
      'First Games with Truce Compliance Index monitoring',
      'Summer Youth Olympic Games in Dakar - first Olympic event in Africa',
    ],
    significance: 'neutral',
  },
];

// Complete historical co-sponsor data
interface TruceResolutionData {
  games: string;
  year: number;
  coSponsors: number;
  totalMembers: number;
  adoptionDate: string;
  highlight?: boolean;
  notes?: string;
}

const ALL_RESOLUTIONS_DATA: TruceResolutionData[] = [
  { games: 'Milano Cortina 2026', year: 2026, coSponsors: 166, totalMembers: 193, adoptionDate: '2025-11-19', highlight: true, notes: 'Adopted by consensus' },
  { games: 'Paris 2024', year: 2024, coSponsors: 118, totalMembers: 193, adoptionDate: '2023-11-21', notes: 'Vote: 118-0-2 (Russia, Syria abstained)' },
  { games: 'Beijing 2022', year: 2022, coSponsors: 173, totalMembers: 193, adoptionDate: '2021-12-02', notes: 'Truce violated Feb 24, 2022' },
  { games: 'Tokyo 2020', year: 2020, coSponsors: 186, totalMembers: 193, adoptionDate: '2019-12-09', notes: 'Games postponed to 2021' },
  { games: 'PyeongChang 2018', year: 2018, coSponsors: 157, totalMembers: 193, adoptionDate: '2017-11-13', notes: 'Unified Korean team' },
  { games: 'Rio 2016', year: 2016, coSponsors: 180, totalMembers: 193, adoptionDate: '2015-10-26', notes: 'First Refugee Olympic Team' },
  { games: 'Sochi 2014', year: 2014, coSponsors: 193, totalMembers: 193, adoptionDate: '2013-11-06', notes: 'Crimea annexed during Paralympics' },
  { games: 'London 2012', year: 2012, coSponsors: 193, totalMembers: 193, adoptionDate: '2011-10-17', notes: '100% - all UN members. Presented by Sebastian Coe' },
  { games: 'Vancouver 2010', year: 2010, coSponsors: 192, totalMembers: 192, adoptionDate: '2009-10-19', notes: 'Universal support' },
  { games: 'Beijing 2008', year: 2008, coSponsors: 183, totalMembers: 192, adoptionDate: '2007-10-31', notes: 'Russo-Georgian War during Truce' },
  { games: 'Torino 2006', year: 2006, coSponsors: 191, totalMembers: 191, adoptionDate: '2005-10-31', notes: 'All 191 members co-sponsored' },
  { games: 'Athens 2004', year: 2004, coSponsors: 190, totalMembers: 191, adoptionDate: '2003-11-03', notes: 'First to include Paralympics' },
  { games: 'Salt Lake City 2002', year: 2002, coSponsors: 173, totalMembers: 189, adoptionDate: '2001-12-11', notes: 'Post-9/11 Games' },
  { games: 'Sydney 2000', year: 2000, coSponsors: 180, totalMembers: 188, adoptionDate: '1999-11-24', notes: 'Korean teams marched together' },
  { games: 'Nagano 1998', year: 1998, coSponsors: 178, totalMembers: 185, adoptionDate: '1997-12-08', notes: 'Kofi Annan Iraq diplomacy' },
  { games: 'Atlanta 1996', year: 1996, coSponsors: 161, totalMembers: 185, adoptionDate: '1995-11-07', notes: 'Centennial Games' },
  { games: 'Lillehammer 1994', year: 1994, coSponsors: 121, totalMembers: 184, adoptionDate: '1993-10-25', notes: 'First Olympic Truce resolution' },
];

// Key moments (modern era only)
interface KeyMoment {
  year: number;
  title: string;
  description: string;
  significance: 'milestone' | 'record' | 'diplomatic' | 'symbolic';
}

const KEY_MOMENTS: KeyMoment[] = [
  {
    year: 1992,
    title: 'Modern Olympic Truce Revived at Barcelona',
    description: 'IOC President Samaranch appeals for Olympic Truce. UN Security Council Resolution 757 became the first SC resolution to include "sport" as a sanctioned element. Kéba Mbaye drafted legal language allowing Yugoslav athletes to compete as "Independent Olympic Participants."',
    significance: 'milestone',
  },
  {
    year: 1993,
    title: 'First UN Resolution (A/RES/48/11)',
    description: 'On October 25, 1993, the UN General Assembly adopts Resolution 48/11 "Building a peaceful and better world through sport and the Olympic ideal" - the first GA resolution to invoke an ancient tradition in a modern peace context.',
    significance: 'milestone',
  },
  {
    year: 1994,
    title: 'First Modern Truce Observed (Lillehammer)',
    description: 'Brief ceasefire in Sarajevo during Games. Samaranch led a dangerous solidarity mission to besieged Sarajevo carrying 1,500 kg of food donations. UN proclaimed 1994 as International Year of Sport.',
    significance: 'diplomatic',
  },
  {
    year: 1995,
    title: 'IOC President Addresses UN',
    description: 'The IOC President addressed the UN General Assembly for the first time in history.',
    significance: 'diplomatic',
  },
  {
    year: 1998,
    title: 'Kofi Annan\'s Iraq Diplomacy (Nagano)',
    description: 'The most significant operational use of the modern Truce. During escalating US-Iraq tensions, Annan used the Olympic Truce window to justify a diplomatic mission, negotiating a "Memorandum of Understanding" that averted imminent airstrikes.',
    significance: 'diplomatic',
  },
  {
    year: 2000,
    title: 'IOTC Founded & Korean Unity',
    description: 'The International Olympic Truce Centre is officially launched at Zappeion Palace, Athens (July 24, 2000). At Sydney, North and South Korea parade together under unified flag for the first time.',
    significance: 'milestone',
  },
  {
    year: 2012,
    title: 'Ban Ki-Moon Carries Olympic Flag',
    description: 'At London 2012 Opening Ceremony, UN Secretary General Ban Ki-Moon carries the Olympic Flag - first time ever. Also first Games where every national team includes at least one woman.',
    significance: 'milestone',
  },
  {
    year: 2013,
    title: 'International Day of Sport for Development and Peace',
    description: 'The UN General Assembly declares April 6 as the International Day of Sport for Development and Peace, celebrating the power of sport to drive social change.',
    significance: 'milestone',
  },
  {
    year: 2016,
    title: 'First Refugee Olympic Team',
    description: 'Athletes with refugee status compete at Rio 2016 under the Olympic flag as the Refugee Olympic Team. The Olympic Truce Declaration tradition is also established by IOTC.',
    significance: 'symbolic',
  },
  {
    year: 2018,
    title: 'Unified Korean Team at PyeongChang',
    description: 'Teams from DPRK and Republic of Korea marched side by side at the Opening Ceremony; women\'s ice hockey players competed together as the first unified Olympic team. Kim Yo-jong attended - the first member of the Kim dynasty to visit South Korea since the Korean War.',
    significance: 'diplomatic',
  },
];

// Key figures in 2026 resolution adoption
interface KeyFigure {
  name: string;
  role: string;
  statement: string;
}

const KEY_FIGURES_2026: KeyFigure[] = [
  {
    name: 'Annalena Baerbock',
    role: 'President of the UN General Assembly',
    statement: 'Urged nations to use the "moral compass" of the Truce, comparing the world to a "soccer field" where rules and fair play must prevail.',
  },
  {
    name: 'Kirsty Coventry',
    role: 'IOC President',
    statement: 'Emphasized the Games offer a rare space where adversaries meet as "fellow human beings" and advocated for sport autonomy.',
  },
  {
    name: 'Giovanni Malagò',
    role: 'Milano-Cortina 2026 President',
    statement: 'Framed the Italian Games as a "beacon of hope" and a "unifying event" that rises above national boundaries.',
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

export default function ModernHistoryPage() {
  const totalGames = OLYMPIC_TRUCE_HISTORY.length;
  const observedGames = OLYMPIC_TRUCE_HISTORY.filter(g => g.significance === 'positive' || g.significance === 'neutral').length;
  const violatedGames = OLYMPIC_TRUCE_HISTORY.filter(g => g.significance === 'negative').length;

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
              <span className="text-xl">🌍</span>
              <span className="text-blue-300 text-sm font-medium">Modern Era</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              The Modern Revival
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              1992 - Present: 30+ Years of UN Solemn Appeals
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
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30"
          >
            <h2 className="text-lg font-semibold text-white mb-3">The Modern Revival (1992-Present)</h2>
            <div className="space-y-3 text-sm text-slate-300">
              <p>
                After the ancient Olympics were abolished in <strong>393 AD</strong> by Emperor Theodosius I, the concept of ekecheiria
                fell into obscurity for over 1,500 years.
              </p>
              <p>
                In <strong>1992</strong>, IOC President <strong>Juan Antonio Samaranch</strong> made the first public appeal for an Olympic Truce
                at the Barcelona Games. UN Secretary-General <strong>Boutros Boutros-Ghali</strong> sent a letter calling for "a truce in the
                former Yugoslavia, which would be the Olympic Truce of classical tradition."
              </p>
              <p>
                The Truce was formally established by <strong>UN Resolution 48/11</strong> on October 25, 1993, urging Member States
                to observe the Truce from the seventh day before the opening to the seventh day following the closing of each Olympic Games.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Moments Timeline */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Key Moments
          </motion.h2>

          <div className="space-y-4">
            {KEY_MOMENTS.map((moment, index) => {
              const sigConfig = {
                milestone: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: '📌', color: 'text-blue-300' },
                record: { bg: 'bg-green-500/10', border: 'border-green-500/30', icon: '🏆', color: 'text-green-300' },
                diplomatic: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', icon: '🕊️', color: 'text-purple-300' },
                symbolic: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', icon: '✨', color: 'text-amber-300' },
              }[moment.significance];

              return (
                <motion.div
                  key={moment.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className={`p-4 rounded-lg ${sigConfig.bg} border ${sigConfig.border}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{sigConfig.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-bold ${sigConfig.color}`}>{moment.year}</span>
                        <h4 className="font-semibold text-white">{moment.title}</h4>
                      </div>
                      <p className="text-sm text-slate-300">{moment.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Complete Resolutions Table */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50"
          >
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-xl">📊</span>
              Complete Resolution Co-Sponsor History
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              All Olympic Truce resolutions have been adopted by consensus. Member States show support by co-sponsoring.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-2 text-slate-400 font-medium">Edition</th>
                    <th className="text-center py-2 text-slate-400 font-medium">Co-Sponsors</th>
                    <th className="text-center py-2 text-slate-400 font-medium">Total Members</th>
                    <th className="text-center py-2 text-slate-400 font-medium">%</th>
                    <th className="text-left py-2 text-slate-400 font-medium hidden md:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {ALL_RESOLUTIONS_DATA.map((item) => {
                    const percentage = Math.round((item.coSponsors / item.totalMembers) * 100);
                    const isRecord = item.coSponsors === item.totalMembers;
                    return (
                      <tr
                        key={item.games}
                        className={`border-b border-slate-800/50 ${
                          item.highlight ? 'bg-blue-500/10' : ''
                        }`}
                      >
                        <td className={`py-2 ${item.highlight ? 'text-blue-300 font-medium' : 'text-white'}`}>
                          {item.games}
                          {item.highlight && (
                            <span className="ml-2 text-xs bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">
                              Current
                            </span>
                          )}
                        </td>
                        <td className="py-2 text-center">
                          <span className={`font-bold ${
                            isRecord ? 'text-green-400' :
                            item.highlight ? 'text-blue-400' : 'text-white'
                          }`}>
                            {item.coSponsors}
                          </span>
                        </td>
                        <td className="py-2 text-center text-slate-400">{item.totalMembers}</td>
                        <td className="py-2 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  isRecord ? 'bg-green-500' :
                                  percentage >= 90 ? 'bg-blue-500' :
                                  percentage >= 70 ? 'bg-amber-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                            <span className="text-xs text-slate-400">{percentage}%</span>
                          </div>
                        </td>
                        <td className="py-2 text-xs text-slate-500 hidden md:table-cell">{item.notes}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 166 Co-sponsors highlight */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-purple-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🌍</span>
              <div>
                <h3 className="text-lg font-bold text-white">166 Co-Sponsors</h3>
                <p className="text-sm text-slate-400">A/80/L.10 - Milano-Cortina 2026</p>
              </div>
            </div>

            <div className="mb-4 p-3 bg-slate-900/50 rounded-lg">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Adopted:</span>
                  <span className="text-white font-medium">November 19, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Session:</span>
                  <span className="text-white font-medium">80th UN General Assembly</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Method:</span>
                  <span className="text-green-400 font-medium">Consensus (no vote)</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-4">
              Out of 193 UN Member States, <strong className="text-white">166 countries</strong> co-sponsored the 2026 Olympic Truce resolution -
              demonstrating unprecedented global unity despite ongoing geopolitical tensions.
            </p>

            {/* Key Figures */}
            <h4 className="text-sm font-semibold text-white mb-3">Key Figures at the Adoption</h4>
            <div className="grid gap-3">
              {KEY_FIGURES_2026.map((figure) => (
                <div key={figure.name} className="p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-white text-sm">{figure.name}</span>
                    <span className="text-xs bg-slate-700/50 text-slate-400 px-2 py-0.5 rounded">
                      {figure.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 italic">"{figure.statement}"</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Games Timeline */}
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
                  transition={{ delay: index * 0.03 }}
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

      {/* Navigation */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/history/ancient"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Ancient Era
            </Link>
            <Link
              href="/history"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors"
            >
              Back to History Hub
            </Link>
          </div>
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
            <span>|</span>
            <Link href="/documents" className="hover:text-blue-300 transition-colors">
              Full Document Archive
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
