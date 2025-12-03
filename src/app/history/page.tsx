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
  {
    year: 2026,
    city: 'Milano-Cortina',
    country: 'Italy',
    season: 'Winter',
    unResolution: 'A/80/L.10',
    coSponsors: 165,
    solemnAppeal: true,
    milestoneEffects: [
      'Record 165 co-sponsors - highest in Olympic Truce history',
      'Resolution adopted by consensus on November 19, 2025',
      'Most gender-balanced Winter Games in history (near 50-50 participation)',
      'First Games with Truce Compliance Index monitoring',
      'Summer Youth Olympic Games in Dakar - first Olympic event in Africa',
    ],
    significance: 'neutral',
  },
];

// Complete historical co-sponsor data from IOC (all resolutions since 1994)
interface TruceResolutionData {
  games: string;
  year: number;
  coSponsors: number;
  totalMembers: number;
  highlight?: boolean;
}

const ALL_RESOLUTIONS_DATA: TruceResolutionData[] = [
  { games: 'Milano Cortina 2026', year: 2026, coSponsors: 165, totalMembers: 193, highlight: true },
  { games: 'Paris 2024', year: 2024, coSponsors: 77, totalMembers: 193 },
  { games: 'Beijing 2022', year: 2022, coSponsors: 173, totalMembers: 193 },
  { games: 'Tokyo 2020', year: 2020, coSponsors: 186, totalMembers: 193 },
  { games: 'PyeongChang 2018', year: 2018, coSponsors: 157, totalMembers: 193 },
  { games: 'Rio 2016', year: 2016, coSponsors: 180, totalMembers: 193 },
  { games: 'Sochi 2014', year: 2014, coSponsors: 121, totalMembers: 193 },
  { games: 'London 2012', year: 2012, coSponsors: 193, totalMembers: 193 },
  { games: 'Vancouver 2010', year: 2010, coSponsors: 154, totalMembers: 193 },
  { games: 'Beijing 2008', year: 2008, coSponsors: 183, totalMembers: 192 },
  { games: 'Torino 2006', year: 2006, coSponsors: 190, totalMembers: 191 },
  { games: 'Athens 2004', year: 2004, coSponsors: 190, totalMembers: 191 },
  { games: 'Salt Lake City 2002', year: 2002, coSponsors: 172, totalMembers: 189 },
  { games: 'Sydney 2000', year: 2000, coSponsors: 179, totalMembers: 188 },
  { games: 'Nagano 1998', year: 1998, coSponsors: 177, totalMembers: 185 },
  { games: 'Atlanta 1996', year: 1996, coSponsors: 161, totalMembers: 185 },
  { games: 'Lillehammer 1994', year: 1994, coSponsors: 116, totalMembers: 184 },
];

// Key moments in Olympic Truce history from IOC
interface KeyMoment {
  year: number;
  title: string;
  description: string;
  significance: 'milestone' | 'record' | 'diplomatic' | 'symbolic';
}

const KEY_MOMENTS: KeyMoment[] = [
  // Ancient Era (776 BC - 393 AD)
  {
    year: -776,
    title: 'Ancient Olympic Truce Established',
    description: 'King Iphitos of Elis, following the Oracle of Delphi\'s counsel, joins with King Cleisthenes of Pisa and Spartan lawgiver Lycurgus to establish the ekecheiria ("holding of hands"). The treaty is inscribed on a bronze discus stored in the Temple of Hera at Olympia.',
    significance: 'milestone',
  },
  {
    year: -420,
    title: 'Sparta Banned from Olympics',
    description: 'Sparta attacks Lepreum during the truce period. Elis fines Sparta 2,000 minae (over 30 talents of silver) and bans Spartan athletes. Lichas, who enters his chariot under another state\'s name, is publicly flogged when he celebrates victory.',
    significance: 'milestone',
  },
  {
    year: -480,
    title: 'Games Held During Persian Invasion',
    description: 'The Olympic Games are held even as Xerxes\' Persian army invades Greece, demonstrating the sacred nature of the festival. Greeks at Olympia while others fight for survival at Thermopylae.',
    significance: 'symbolic',
  },
  {
    year: -362,
    title: 'Battle at Olympia',
    description: 'The Eleans and Arcadians/Pisatans fight within the sacred precincts of Olympia itself - one of the most egregious violations of the ekecheiria in ancient history.',
    significance: 'milestone',
  },
  {
    year: 393,
    title: 'Ancient Olympics Abolished',
    description: 'Emperor Theodosius I bans pagan religious festivals including the Olympic Games. After over 1,100 years, the ekecheiria tradition ends. The concept falls into obscurity until the 19th century.',
    significance: 'milestone',
  },
  // Gap Period & Revival
  {
    year: 1612,
    title: 'Cotswold Olympicks',
    description: 'Robert Dover organizes the "Cotswold Olympicks" in England - early rural games inspired by antiquity, though without international dimension or warfare to pause.',
    significance: 'symbolic',
  },
  {
    year: 1850,
    title: 'Wenlock Olympian Games',
    description: 'William Penny Brookes founds the Wenlock Olympian Games in England, later inspiring Baron Pierre de Coubertin.',
    significance: 'symbolic',
  },
  {
    year: 1894,
    title: 'Modern Olympics Founded',
    description: 'Baron Pierre de Coubertin founds the IOC, believing sports could promote peace. His 1892 speech: "the cause of peace will have received a new and strong ally." The ancient truce is not formally revived but its spirit lives on.',
    significance: 'milestone',
  },
  {
    year: 1936,
    title: 'Jesse Owens & Luz Long',
    description: 'Afro-American athlete Jesse Owens wins Gold in long jump at Berlin, thanks to encouragement from his main opponent, German Luz Long. The two remain friends until the end of their lives - embodying Olympic values.',
    significance: 'symbolic',
  },
  {
    year: 1992,
    title: 'Modern Olympic Truce Revived at Barcelona',
    description: 'IOC President Juan Antonio Samaranch makes the first public appeal for Olympic Truce. UN Secretary-General Boutros Boutros-Ghali sends letter calling for "a truce in the former Yugoslavia, which would be the Olympic Truce of classical tradition." IOC flies plane into besieged Sarajevo to evacuate athletes.',
    significance: 'milestone',
  },
  {
    year: 1993,
    title: 'First UN Resolution (A/RES/48/11)',
    description: 'On October 25, 1993, the UN General Assembly adopts Resolution 48/11 "Building a peaceful and better world through sport and the Olympic ideal" - the first GA resolution to invoke an ancient tradition in a modern peace context. Greece leads the initiative. Urges observance "from seventh day before to seventh day after" the Games.',
    significance: 'milestone',
  },
  {
    year: 1994,
    title: 'First Modern Truce Observed (Lillehammer)',
    description: 'Brief ceasefire in Sarajevo during Games. Samaranch\'s closing ceremony (Feb 27): "After many horrors, the situation now seems to be improving. Let us hope that this 17-day-old truce – to which, in our very limited way, we may have contributed – will turn into lasting peace." UN proclaimed 1994 as International Year of Sport.',
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
    description: 'During the Nagano Games, tensions with Iraq over UNSCOM inspections reach crisis point. UN Secretary-General Kofi Annan flies to Baghdad in the final days, striking a deal with Saddam Hussein on Feb 23, 1998 - averting immediate war. The Olympic Truce appeal provided moral context for the diplomatic opening.',
    significance: 'diplomatic',
  },
  {
    year: 1999,
    title: 'Record 180 Co-Sponsors',
    description: 'A record number of 180 Member States co-sponsored the resolution ahead of the Sydney 2000 Olympic Games.',
    significance: 'record',
  },
  {
    year: 2000,
    title: 'IOTC Founded & Korean Unity',
    description: 'The International Olympic Truce Centre is founded by the IOC. The UN Millennium Summit adopts a declaration including Olympic Truce. At Sydney 2000, North and South Korean delegations parade together under the flag of the Korean peninsula.',
    significance: 'milestone',
  },
  {
    year: 2002,
    title: 'Signature Collection Launched',
    description: 'Collection of signatures by international personalities in support of the Olympic Truce is launched in Ancient Olympia during the Salt Lake City Olympic Flame lighting. Hundreds of Heads of State, religious leaders, and athletes sign.',
    significance: 'symbolic',
  },
  {
    year: 2003,
    title: '190 Co-Sponsors for Athens 2004',
    description: 'The nations of the world unanimously urge humanity to celebrate Athens 2004 in peace. 190 UN Member States co-sponsor - unprecedented in UN history at the time.',
    significance: 'record',
  },
  {
    year: 2004,
    title: '300+ Personalities Sign Truce Appeal',
    description: 'More than 300 personalities from around the world signed a Truce Appeal. Many also signed a Truce Wall created by the Greek Government during Athens 2004.',
    significance: 'symbolic',
  },
  {
    year: 2007,
    title: 'Beijing 2008 Resolution Adopted',
    description: 'The 62nd session of the UN General Assembly adopted the resolution on the Olympic Truce in preparation for the 2008 Olympic Games in Beijing.',
    significance: 'milestone',
  },
  {
    year: 2008,
    title: 'UN Secretary General\'s Beijing Message',
    description: 'During the Opening Ceremony of the Olympic Games in Beijing, the international community, particularly the United Nations, reiterated the importance of the Games and the value of sport to promote development and peace worldwide.',
    significance: 'diplomatic',
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
    description: 'The UN General Assembly declares April 6 as the International Day of Sport for Development and Peace, celebrating the power of sport to drive social change and foster peace.',
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
    description: 'Teams from DPRK and Republic of Korea marched side by side at the Opening Ceremony; women\'s ice hockey players competed together as a unified team.',
    significance: 'diplomatic',
  },
  {
    year: 2019,
    title: 'Tokyo 2020 Resolution (186 co-sponsors)',
    description: 'The Tokyo 2020 Olympic Truce resolution was adopted with 186 co-sponsors, later reiterated in 2020 due to COVID-19 postponement.',
    significance: 'record',
  },
  {
    year: 2021,
    title: 'Beijing 2022 Resolution by Consensus',
    description: 'The Beijing 2022 Olympic Truce resolution was adopted by consensus with 173 Member States co-sponsoring it.',
    significance: 'milestone',
  },
  {
    year: 2023,
    title: 'Paris 2024 Resolution Adopted',
    description: 'The Paris 2024 Olympic Truce resolution was co-sponsored by 77 member countries and adopted with 118 votes in favour and two abstentions.',
    significance: 'milestone',
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

// Legal framework - foundational UN resolutions referenced in Olympic Truce resolutions
interface LegalDocument {
  id: string;
  symbol: string;
  title: string;
  year: number;
  description: string;
  relevance: string;
  url: string;
  downloadUrl?: string;
}

const LEGAL_FRAMEWORK: LegalDocument[] = [
  {
    id: 'original-truce',
    symbol: 'A/RES/48/11',
    title: 'Observance of the Olympic Truce',
    year: 1993,
    description: 'The foundational resolution that revived the ancient Greek ekecheiria tradition for modern times.',
    relevance: 'Established the 7-day-before to 7-day-after window and called on all Member States to observe the Truce.',
    url: 'https://digitallibrary.un.org/record/197368',
  },
  {
    id: 'millennium',
    symbol: 'A/RES/55/2',
    title: 'United Nations Millennium Declaration',
    year: 2000,
    description: 'Landmark declaration adopted by 189 countries setting goals for peace, development, and human rights.',
    relevance: 'Olympic Truce resolutions reference this as foundation for global cooperation and peaceful societies.',
    url: 'https://www.un.org/en/development/desa/population/migration/generalassembly/docs/globalcompact/A_RES_55_2.pdf',
  },
  {
    id: 'children',
    symbol: 'A/RES/S-27/2',
    title: 'A World Fit for Children',
    year: 2002,
    description: 'Special session outcome promoting healthy lives, quality education, and protecting children from violence.',
    relevance: 'Referenced for youth engagement and education aspects of the Olympic Truce.',
    url: 'https://digitallibrary.un.org/record/464538',
  },
  {
    id: 'sdgs',
    symbol: 'A/RES/70/1',
    title: 'Transforming our World: 2030 Agenda for Sustainable Development',
    year: 2015,
    description: 'The 17 Sustainable Development Goals framework guiding global development efforts.',
    relevance: 'Olympic Truce supports SDG 16 (peaceful societies) and SDG 17 (global partnerships).',
    url: 'https://www.un.org/en/development/desa/population/migration/generalassembly/docs/globalcompact/A_RES_70_1_E.pdf',
  },
  {
    id: 'beijing-2022',
    symbol: 'A/RES/77/27',
    title: 'Olympic Truce for Beijing 2022',
    year: 2022,
    description: 'Resolution for the 2022 Winter Olympics with 173 co-sponsors.',
    relevance: 'Preceded the Russia-Ukraine conflict that began during the Truce window.',
    url: 'https://docs.un.org/en/A/RES/77/27',
  },
  {
    id: 'paris-2024',
    symbol: 'A/RES/78/10',
    title: 'Olympic Truce for Paris 2024',
    year: 2023,
    description: 'Resolution adopted 118-0-2 for the Paris 2024 Summer Games.',
    relevance: 'Most recent Summer Games resolution, addressing neutral athlete participation.',
    url: 'https://docs.un.org/en/A/RES/78/10',
  },
  {
    id: 'milano-2026',
    symbol: 'A/80/L.10',
    title: 'Olympic Truce for Milano-Cortina 2026',
    year: 2025,
    description: 'Current governing resolution with record 165 co-sponsors, adopted by consensus.',
    relevance: 'Defines the Truce window: January 30 - March 22, 2026.',
    url: 'https://digitallibrary.un.org/record/4092685',
    downloadUrl: '/downloads/A_80_L.10-EN.pdf',
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
              30+ Years of UN Solemn Appeals and Milestone Effects
            </p>
            <p className="text-slate-500">
              From Lillehammer 1994 to Milano-Cortina 2026
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

      {/* Ancient Ekecheiria Section */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-2">The Ancient Ekecheiria (776 BC - 393 AD)</h2>
            <p className="text-slate-400">Over 1,100 years of sacred peace</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30"
            >
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span>🏛️</span> Origins & Founders
              </h3>
              <div className="space-y-3 text-sm text-slate-300">
                <p>
                  Greece in the 8th century BC was suffering from constant wars and plague. <strong className="text-amber-300">King Iphitos of Elis</strong> sought
                  guidance from the Oracle of Delphi, who ordained that he "must renew the Olympic games."
                </p>
                <p>
                  Iphitos enlisted <strong className="text-amber-300">King Cleisthenes of Pisa</strong> and the Spartan lawgiver <strong className="text-amber-300">Lycurgus</strong> to
                  forge a sacred peace pact. The treaty was inscribed on a bronze discus stored in the Temple of Hera at Olympia.
                </p>
                <p className="text-xs text-slate-500 italic">
                  "The ekecheiria declared the sanctuary of Olympia and the territory of Elis to be inviolable during the Games." — Pausanias
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30"
            >
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span>📜</span> How It Worked
              </h3>
              <div className="space-y-3 text-sm text-slate-300">
                <p>
                  <strong className="text-green-300">Spondophoroi</strong> ("truce-bearers") - heralds crowned with olive branches -
                  traveled across Greece announcing the sacred truce and the Games' schedule.
                </p>
                <p>
                  The truce evolved from <strong className="text-green-300">one month to three months</strong> as participation expanded
                  geographically - allowing athletes from distant Greek colonies time to travel safely.
                </p>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
                  <li>Armed conflict forbidden between participating city-states</li>
                  <li>Elis declared neutral ground, immune from attack</li>
                  <li>Safe passage for athletes, trainers, and pilgrims</li>
                  <li>Death penalties suspended during the truce period</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30 mb-8"
          >
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span>🎭</span> Religious & Cultural Significance
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p>
                The ekecheiria was fundamentally tied to <strong className="text-purple-300">Zeus</strong>, king of the Greek gods.
                Waging war during Zeus's festival was seen as impious. Inside the Temple of Zeus stood a statue depicting King Iphitos
                being crowned by <strong className="text-purple-300">Ekecheiria</strong> - a female personification of Peace/Truce,
                implying the Greeks deified the concept itself.
              </p>
              <blockquote className="border-l-2 border-purple-500/50 pl-4 text-slate-400 italic">
                "We come together in one place, and as we make our prayers and sacrifices in common, we are reminded of the kinship
                which exists among us and are made to feel more kindly towards each other for the future, reviving our old friendships
                and establishing new ties."
                <footer className="text-xs text-slate-500 mt-1 not-italic">— Isocrates, Panegyricus (4th century BC)</footer>
              </blockquote>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/30"
          >
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span>⚖️</span> Enforcement & Notable Violations
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
              <div>
                <h4 className="font-medium text-white mb-2">Enforcement</h4>
                <p className="mb-2">
                  Violators faced <strong className="text-red-300">exclusion from the Games</strong> and heavy fines
                  dedicated to Zeus. There was no "Olympic army" - enforcement relied on collective respect for the gods
                  and social pressure among Greek peers.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">The Spartan Precedent (420 BC)</h4>
                <p>
                  Sparta attacked Lepreum during the truce. Elis fined them <strong className="text-red-300">2,000 minae</strong> (over 30 talents of silver)
                  and banned all Spartan athletes. When Lichas entered his chariot under another state's name, he was publicly flogged upon victory.
                </p>
              </div>
            </div>
          </motion.div>
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
                fell into obscurity for over 1,500 years. The "Truce of God" (<em>Treuga Dei</em>) in medieval Europe and sacred
                pilgrimage periods in other cultures preserved the idea of religiously-mandated peace, but the Olympic Truce itself was dormant.
              </p>
              <p>
                In <strong>1992</strong>, IOC President <strong>Juan Antonio Samaranch</strong> made the first public appeal for an Olympic Truce
                at the Barcelona Games. UN Secretary-General <strong>Boutros Boutros-Ghali</strong> sent a letter calling for "a truce in the
                former Yugoslavia, which would be the Olympic Truce of classical tradition" - the first explicit reference to ancient ekecheiria on a modern Olympic stage.
              </p>
              <p>
                The Truce was formally established by <strong>UN Resolution 48/11</strong> on October 25, 1993, urging Member States
                to observe the Truce from the seventh day before the opening to the seventh day following the closing of each Olympic Games.
                Since then, <strong>Greece</strong> has led the initiative at the UN, and every Olympics has had a corresponding resolution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Framework Section */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Legal Framework</h2>
            <p className="text-slate-400">
              Key UN resolutions that establish and support the Olympic Truce
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LEGAL_FRAMEWORK.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-5 rounded-xl border transition-all ${
                  doc.id === 'milano-2026'
                    ? 'bg-blue-500/10 border-blue-500/30'
                    : doc.id === 'original-truce'
                    ? 'bg-green-500/10 border-green-500/30'
                    : 'bg-slate-900/50 border-slate-700/50'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                      doc.id === 'milano-2026'
                        ? 'bg-blue-500/20 text-blue-300'
                        : doc.id === 'original-truce'
                        ? 'bg-green-500/20 text-green-300'
                        : 'bg-slate-700/50 text-slate-400'
                    }`}>
                      {doc.symbol}
                    </span>
                    <span className="text-xs text-slate-500 ml-2">{doc.year}</span>
                  </div>
                  {doc.id === 'milano-2026' && (
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                      Current
                    </span>
                  )}
                  {doc.id === 'original-truce' && (
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded">
                      Foundation
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{doc.title}</h3>
                <p className="text-xs text-slate-400 mb-2">{doc.description}</p>
                <p className="text-xs text-slate-500 italic mb-3">{doc.relevance}</p>
                <div className="flex items-center gap-2">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View at UN
                  </a>
                  {doc.downloadUrl && (
                    <a
                      href={doc.downloadUrl}
                      className="inline-flex items-center gap-1 text-xs text-green-400 hover:text-green-300"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 165 Co-sponsors highlight with adoption details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-purple-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🌍</span>
              <div>
                <h3 className="text-lg font-bold text-white">165 Co-Sponsors</h3>
                <p className="text-sm text-slate-400">A/80/L.10 - Milano-Cortina 2026</p>
              </div>
            </div>

            {/* Adoption details */}
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
              Out of 193 UN Member States, <strong className="text-white">165 countries</strong> co-sponsored the 2026 Olympic Truce resolution -
              demonstrating unprecedented global unity despite ongoing geopolitical tensions. The resolution was adopted by{' '}
              <strong className="text-white">consensus without a vote</strong>, meaning even non-sponsors did not block its passage.
            </p>

            {/* Regional breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-xs mb-4">
              <div className="p-2 bg-slate-800/50 rounded text-center">
                <span className="block text-slate-400">Africa</span>
                <span className="text-white font-semibold">Strong AU support</span>
              </div>
              <div className="p-2 bg-slate-800/50 rounded text-center">
                <span className="block text-slate-400">Asia-Pacific</span>
                <span className="text-white font-semibold">Broad endorsement</span>
              </div>
              <div className="p-2 bg-slate-800/50 rounded text-center">
                <span className="block text-slate-400">Eastern Europe</span>
                <span className="text-white font-semibold">Mixed contexts</span>
              </div>
              <div className="p-2 bg-slate-800/50 rounded text-center">
                <span className="block text-slate-400">GRULAC</span>
                <span className="text-white font-semibold">Traditional support</span>
              </div>
              <div className="p-2 bg-slate-800/50 rounded text-center">
                <span className="block text-slate-400">WEOG</span>
                <span className="text-white font-semibold">Italy as lead</span>
              </div>
            </div>
            <p className="text-xs text-slate-500">
              Initial sponsors: Italy and Turkmenistan. Additional co-sponsors joined after the draft was tabled on November 5, 2025.
            </p>
          </motion.div>

          {/* Complete Resolutions Table - All Games */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50"
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
                          {isRecord && (
                            <span className="ml-2 text-xs bg-green-500/20 text-green-300 px-1.5 py-0.5 rounded">
                              100%
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
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              <strong>London 2012</strong> achieved 100% co-sponsorship (all 193 member states).{' '}
              <strong>Paris 2024</strong> saw the lowest recent support (77 co-sponsors) due to Russia-Belarus tensions.
            </p>
          </motion.div>

          {/* Key Moments Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🏛️</span>
              Key Moments in Olympic Truce History
            </h3>
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
                          <span className={`font-bold ${sigConfig.color}`}>
                            {moment.year < 0 ? `${Math.abs(moment.year)} BC` : moment.year === 393 ? '393 AD' : moment.year}
                          </span>
                          <h4 className="font-semibold text-white">{moment.title}</h4>
                        </div>
                        <p className="text-sm text-slate-300">{moment.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Source: <a href="https://www.olympics.com/ioc/olympic-truce/resolutions" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">IOC Olympic Truce Resolutions</a>
            </p>
          </motion.div>

          {/* Key Figures */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🎙️</span>
              Key Figures at the Adoption
            </h3>
            <div className="grid gap-4">
              {KEY_FIGURES_2026.map((figure) => (
                <div key={figure.name} className="p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-white">{figure.name}</h4>
                    <span className="text-xs bg-slate-700/50 text-slate-400 px-2 py-0.5 rounded">
                      {figure.role}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 italic">"{figure.statement}"</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Gender Equality Milestone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/10 border border-pink-500/30"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">⚖️</span>
              <div>
                <h3 className="text-lg font-bold text-white">Most Gender-Balanced Winter Games</h3>
                <p className="text-sm text-slate-400">Milano-Cortina 2026 Milestone</p>
              </div>
            </div>
            <p className="text-sm text-slate-300">
              Resolution A/80/L.10 explicitly commends Milano-Cortina 2026 for being set to be the{' '}
              <strong className="text-pink-300">"most gender-balanced Winter Games in history"</strong>,
              achieving near 50-50 participation on the field of play. This represents a significant
              advancement for gender equality in the Olympic Movement.
            </p>
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
          <div className="space-y-3">
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
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
              <span className="text-slate-600">Ancient:</span>
              <a href="http://www.perseus.tufts.edu/hopper/text?doc=Paus.+5.4" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                Pausanias
              </a>
              <span>|</span>
              <a href="http://www.perseus.tufts.edu/hopper/text?doc=Thuc.+5.49" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                Thucydides
              </a>
              <span>|</span>
              <a href="http://www.perseus.tufts.edu/hopper/text?doc=Isoc.+4.43" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                Isocrates
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
              <span className="text-slate-600">Academic:</span>
              <a href="https://www.ejiltalk.org/the-olympic-truce-tradition-or-international-law/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                EJIL:Talk (Legal Analysis)
              </a>
              <span>|</span>
              <a href="https://www.swissinfo.ch/eng/sport/the-olympic-truce-noble-myth-harsh-reality/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                SwissInfo
              </a>
              <span>|</span>
              <Link href="/documents" className="hover:text-blue-300 transition-colors">
                Full Document Archive
              </Link>
            </div>
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
