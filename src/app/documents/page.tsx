'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Olympic Truce Resolutions by Games
interface TruceResolution {
  games: string;
  year: number;
  season: 'Summer' | 'Winter';
  symbol: string;
  url: string;
  coSponsors?: number;
  notes?: string;
}

const TRUCE_RESOLUTIONS: TruceResolution[] = [
  {
    games: 'Milano-Cortina 2026',
    year: 2026,
    season: 'Winter',
    symbol: 'A/80/L.10',
    url: 'https://digitallibrary.un.org/record/4092685',
    coSponsors: 165,
    notes: 'Current resolution. Adopted by consensus Nov 19, 2025.',
  },
  {
    games: 'Paris 2024',
    year: 2024,
    season: 'Summer',
    symbol: 'A/RES/78/10',
    url: 'https://docs.un.org/en/A/RES/78/10',
    coSponsors: 77,
    notes: 'Adopted 118-0-2.',
  },
  {
    games: 'Beijing 2022',
    year: 2022,
    season: 'Winter',
    symbol: 'A/RES/76/13',
    url: 'https://docs.un.org/en/A/RES/76/13',
    coSponsors: 173,
    notes: 'Truce violated by Russia invasion of Ukraine.',
  },
  {
    games: 'Tokyo 2020',
    year: 2020,
    season: 'Summer',
    symbol: 'A/RES/74/16',
    url: 'https://docs.un.org/en/A/RES/74/16',
    coSponsors: 186,
    notes: 'Games postponed to 2021 due to COVID-19.',
  },
  {
    games: 'PyeongChang 2018',
    year: 2018,
    season: 'Winter',
    symbol: 'A/RES/72/6',
    url: 'https://docs.un.org/en/A/RES/72/6',
    coSponsors: 157,
    notes: 'Unified Korean team competed.',
  },
  {
    games: 'Rio 2016',
    year: 2016,
    season: 'Summer',
    symbol: 'A/RES/70/4',
    url: 'https://docs.un.org/en/A/RES/70/4',
    coSponsors: 180,
  },
  {
    games: 'Sochi 2014',
    year: 2014,
    season: 'Winter',
    symbol: 'A/RES/68/9',
    url: 'https://docs.un.org/en/A/RES/69/6',
    coSponsors: 121,
    notes: 'Crimea annexed between Olympics and Paralympics.',
  },
  {
    games: 'London 2012',
    year: 2012,
    season: 'Summer',
    symbol: 'A/RES/66/5',
    url: 'https://docs.un.org/en/A/RES/67/17',
    coSponsors: 193,
    notes: '100% co-sponsorship - all UN member states.',
  },
  {
    games: 'Vancouver 2010',
    year: 2010,
    season: 'Winter',
    symbol: 'A/RES/64/4',
    url: 'https://docs.un.org/en/A/RES/65/4',
    coSponsors: 154,
  },
  {
    games: 'Beijing 2008',
    year: 2008,
    season: 'Summer',
    symbol: 'A/RES/62/4',
    url: 'https://docs.un.org/en/A/RES/62/271',
    coSponsors: 183,
    notes: 'Russo-Georgian War during Truce window.',
  },
  {
    games: 'Torino 2006',
    year: 2006,
    season: 'Winter',
    symbol: 'A/RES/60/8',
    url: 'https://docs.un.org/en/A/RES/60/8',
    coSponsors: 190,
    notes: 'First to include Paralympics in Truce.',
  },
  {
    games: 'Athens 2004',
    year: 2004,
    season: 'Summer',
    symbol: 'A/RES/58/6',
    url: 'https://docs.un.org/en/A/RES/58/5',
    coSponsors: 190,
    notes: 'Return to birthplace of Olympics.',
  },
  {
    games: 'Salt Lake City 2002',
    year: 2002,
    season: 'Winter',
    symbol: 'A/RES/56/75',
    url: 'https://docs.un.org/en/A/RES/59/10',
    coSponsors: 172,
    notes: 'Post-9/11 Games.',
  },
  {
    games: 'Sydney 2000',
    year: 2000,
    season: 'Summer',
    symbol: 'A/RES/54/34',
    url: 'https://docs.un.org/en/A/RES/60/1',
    coSponsors: 179,
    notes: 'Korean teams marched together.',
  },
  {
    games: 'Nagano 1998',
    year: 1998,
    season: 'Winter',
    symbol: 'A/RES/52/21',
    url: 'https://docs.un.org/en/A/RES/63/135',
    coSponsors: 177,
    notes: 'Influenced Iraq mediation.',
  },
  {
    games: 'Atlanta 1996',
    year: 1996,
    season: 'Summer',
    symbol: 'A/RES/50/13',
    url: 'https://docs.un.org/en/A/RES/60/9',
    coSponsors: 161,
  },
  {
    games: 'Lillehammer 1994',
    year: 1994,
    season: 'Winter',
    symbol: 'A/RES/48/11',
    url: 'https://docs.un.org/en/A/RES/48/11',
    coSponsors: 116,
    notes: 'First Games with formal Olympic Truce.',
  },
];

// Foundational Documents
interface FoundationalDoc {
  symbol: string;
  title: string;
  year: number;
  category: 'foundation' | 'sport' | 'development' | 'peace';
  description: string;
  url: string;
}

const FOUNDATIONAL_DOCUMENTS: FoundationalDoc[] = [
  {
    symbol: 'A/RES/48/11',
    title: 'Building a Peaceful and Better World Through Sport and the Olympic Ideal',
    year: 1993,
    category: 'foundation',
    description: 'The original UN resolution establishing the modern Olympic Truce.',
    url: 'https://docs.un.org/en/A/RES/48/11',
  },
  {
    symbol: 'A/RES/55/2',
    title: 'United Nations Millennium Declaration',
    year: 2000,
    category: 'development',
    description: 'Includes commitment to Olympic Truce observance among global goals.',
    url: 'https://docs.un.org/en/A/RES/55/2',
  },
  {
    symbol: 'A/RES/58/5',
    title: 'Sport as a Means to Promote Education, Health, Development and Peace',
    year: 2003,
    category: 'sport',
    description: 'Proclaimed 2005 as International Year of Sport and Physical Education.',
    url: 'https://docs.un.org/en/A/RES/58/5',
  },
  {
    symbol: 'A/RES/59/10',
    title: 'Sport as a Means to Promote Education, Health, Development and Peace',
    year: 2004,
    category: 'sport',
    description: 'Follow-up resolution strengthening sport for development framework.',
    url: 'https://docs.un.org/en/A/RES/59/10',
  },
  {
    symbol: 'A/RES/60/1',
    title: '2005 World Summit Outcome',
    year: 2005,
    category: 'development',
    description: 'Reaffirmed commitment to Olympic Truce and sport for development.',
    url: 'https://docs.un.org/en/A/RES/60/1',
  },
  {
    symbol: 'A/RES/65/1',
    title: 'Keeping the Promise: United to Achieve the Millennium Development Goals',
    year: 2010,
    category: 'development',
    description: 'MDG summit outcome referencing sport as development enabler.',
    url: 'https://docs.un.org/en/A/RES/65/1',
  },
  {
    symbol: 'A/RES/67/296',
    title: 'International Day of Sport for Development and Peace',
    year: 2013,
    category: 'sport',
    description: 'Proclaimed April 6 as annual day celebrating sport for peace.',
    url: 'https://docs.un.org/en/A/RES/67/296',
  },
  {
    symbol: 'A/RES/70/1',
    title: 'Transforming Our World: 2030 Agenda for Sustainable Development',
    year: 2015,
    category: 'development',
    description: 'SDGs framework recognizing sport as enabler of sustainable development.',
    url: 'https://docs.un.org/en/A/RES/70/1',
  },
  {
    symbol: 'A/RES/S-27/2',
    title: 'A World Fit for Children',
    year: 2002,
    category: 'peace',
    description: 'Special session on children, referenced in Truce resolutions.',
    url: 'https://docs.un.org/en/A/RES/S-27/2',
  },
  {
    symbol: 'A/RES/71/160',
    title: 'Sport as a Means to Promote Education, Health, Development and Peace',
    year: 2016,
    category: 'sport',
    description: 'Biennial resolution on sport for development and peace.',
    url: 'https://docs.un.org/en/A/RES/71/160',
  },
  {
    symbol: 'A/RES/73/24',
    title: 'Sport as an Enabler of Sustainable Development',
    year: 2018,
    category: 'sport',
    description: 'Updated framework linking sport to SDGs implementation.',
    url: 'https://docs.un.org/en/A/RES/73/24',
  },
  {
    symbol: 'A/RES/75/18',
    title: 'Sport as an Enabler of Sustainable Development',
    year: 2020,
    category: 'sport',
    description: 'COVID-era resolution on sport\'s role in recovery.',
    url: 'https://docs.un.org/en/A/RES/75/18',
  },
  {
    symbol: 'A/RES/77/27',
    title: 'Sport as an Enabler of Sustainable Development',
    year: 2022,
    category: 'sport',
    description: 'Most recent biennial sport for development resolution.',
    url: 'https://docs.un.org/en/A/RES/77/27',
  },
];

// IOC Historical Documents
interface IOCDocument {
  title: string;
  year: number;
  type: 'appeal' | 'message' | 'resolution' | 'report';
  description: string;
  url: string;
}

const IOC_DOCUMENTS: IOCDocument[] = [
  {
    title: '1992 IOC Appeal for Olympic Truce',
    year: 1992,
    type: 'appeal',
    description: 'The original IOC appeal that launched the modern Olympic Truce movement for Barcelona 1992.',
    url: 'https://stillmed.olympics.com/media/Document%20Library/OlympicOrg/IOC/Who-We-Are/Commissions/Public-Affairs-And-Social-Development-Through-Sport/Olympic-Truce/EN-Report-1992-Appeal-199.pdf',
  },
  {
    title: '1993 UN Resolution (Original)',
    year: 1993,
    type: 'resolution',
    description: 'First UN General Assembly resolution on Olympic Truce observance.',
    url: 'https://stillmed.olympics.com/media/Document%20Library/OlympicOrg/IOC/Who-We-Are/Commissions/Public-Affairs-And-Social-Development-Through-Sport/Olympic-Truce/EN-Report-1993-Resolution-200.pdf',
  },
  {
    title: 'UN Secretary-General Message (Beijing 2008)',
    year: 2008,
    type: 'message',
    description: 'Ban Ki-moon\'s message on the Olympic Truce for the Beijing Games.',
    url: 'https://stillmed.olympics.com/media/Document%20Library/OlympicOrg/IOC/Who-We-Are/Commissions/Public-Affairs-And-Social-Development-Through-Sport/Olympic-Truce/EN-Report-2008-Message-1432.pdf',
  },
  {
    title: 'UN Solemn Appeal (Tokyo 2020)',
    year: 2021,
    type: 'appeal',
    description: 'Official UN Solemn Appeal for the Tokyo 2020 Olympic Games.',
    url: 'https://stillmed.olympics.com/media/Documents/News/2021/07/Solemn-appeal-by-United-Nations-En.pdf',
  },
];

// Beijing 2022 specific documents
const BEIJING_2022_DOCS = [
  {
    title: 'Beijing 2022 Resolution',
    symbol: 'A/RES/76/13',
    url: 'https://docs.un.org/en/A/RES/76/13',
  },
  {
    title: 'Beijing 2022 Draft Resolution',
    symbol: 'A/76/L.13',
    url: 'https://docs.un.org/en/A/76/L.13',
  },
  {
    title: 'Beijing 2022 Co-Sponsors List',
    symbol: 'A/76/L.13/Add.1',
    url: 'https://docs.un.org/en/A/76/L.13/Add.1',
  },
];

// Secretary-General Report 2024
const SG_REPORT_2024 = {
  title: 'Sport for Development and Peace Report 2024',
  symbol: 'A/79/289',
  url: 'https://documents.un.org/doc/undoc/gen/n24/232/53/pdf/n2423253.pdf',
  description: 'UN Secretary-General report on sport as driver of sustainable development and peace.',
};

const getCategoryConfig = (category: FoundationalDoc['category']) => {
  switch (category) {
    case 'foundation':
      return { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-300', label: 'Foundation' };
    case 'sport':
      return { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-300', label: 'Sport' };
    case 'development':
      return { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-300', label: 'Development' };
    case 'peace':
      return { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-300', label: 'Peace' };
  }
};

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/truce-foundation-logo.jpg" alt="Truce Foundation" className="w-10 h-10 object-contain rounded-full" />
            <span className="font-semibold text-white">Truce Foundation</span>
          </Link>
          <Link href="/history" className="text-slate-400 hover:text-white transition-colors text-sm">
            Back to History
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
              <span>📚</span>
              <span>Official UN & IOC Sources</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">UN Documents Archive</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Complete collection of UN resolutions, IOC appeals, and foundational documents related to the Olympic Truce.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Featured: 2024 SG Report */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">📄</span>
              <div className="flex-1">
                <span className="text-xs font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">{SG_REPORT_2024.symbol}</span>
                <h2 className="text-xl font-bold text-white mt-2">{SG_REPORT_2024.title}</h2>
                <p className="text-slate-300 text-sm mt-1">{SG_REPORT_2024.description}</p>
                <a
                  href={SG_REPORT_2024.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  View Full Report (PDF)
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Olympic Truce Resolutions by Games */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🏅</span>
            Olympic Truce Resolutions by Games
          </h2>
          <div className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Games</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Symbol</th>
                    <th className="text-center py-3 px-4 text-slate-400 font-medium">Co-Sponsors</th>
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Notes</th>
                    <th className="text-center py-3 px-4 text-slate-400 font-medium">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {TRUCE_RESOLUTIONS.map((res, index) => (
                    <tr key={res.symbol} className={`border-t border-slate-800/50 ${index === 0 ? 'bg-blue-500/10' : ''}`}>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-1.5 py-0.5 rounded ${res.season === 'Summer' ? 'bg-amber-500/20 text-amber-300' : 'bg-cyan-500/20 text-cyan-300'}`}>
                            {res.season === 'Summer' ? '☀️' : '❄️'}
                          </span>
                          <span className={index === 0 ? 'text-blue-300 font-medium' : 'text-white'}>{res.games}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono text-xs text-slate-400">{res.symbol}</td>
                      <td className="py-3 px-4 text-center">
                        {res.coSponsors && (
                          <span className={`font-bold ${res.coSponsors === 193 ? 'text-green-400' : 'text-white'}`}>
                            {res.coSponsors}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-xs text-slate-400">{res.notes || '-'}</td>
                      <td className="py-3 px-4 text-center">
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <svg className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* IOC Historical Documents */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🏛️</span>
            IOC Historical Documents
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {IOC_DOCUMENTS.map((doc) => (
              <div key={doc.title} className="p-5 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-300 capitalize">{doc.type}</span>
                  <span className="text-xs text-slate-500">{doc.year}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{doc.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{doc.description}</p>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
                >
                  View Document (PDF)
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Beijing 2022 Documents (Example of detailed Game docs) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🇨🇳</span>
            Beijing 2022 Document Set
          </h2>
          <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/30">
            <p className="text-sm text-slate-300 mb-4">
              Complete documentation for Beijing 2022 Winter Olympics - notably the Truce window during which Russia invaded Ukraine.
            </p>
            <div className="flex flex-wrap gap-3">
              {BEIJING_2022_DOCS.map((doc) => (
                <a
                  key={doc.symbol}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg text-sm transition-colors"
                >
                  <span className="font-mono text-xs text-slate-400">{doc.symbol}</span>
                  <span className="text-white">{doc.title}</span>
                  <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Foundational Documents */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">📜</span>
            Foundational UN Resolutions
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Key UN documents referenced in Olympic Truce resolutions, establishing the legal and normative framework.
          </p>
          <div className="grid gap-3">
            {FOUNDATIONAL_DOCUMENTS.map((doc) => {
              const config = getCategoryConfig(doc.category);
              return (
                <div
                  key={doc.symbol}
                  className={`p-4 rounded-xl ${config.bg} border ${config.border}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-slate-400">{doc.symbol}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${config.bg} ${config.text}`}>{config.label}</span>
                        <span className="text-xs text-slate-500">{doc.year}</span>
                      </div>
                      <h3 className="font-semibold text-white text-sm">{doc.title}</h3>
                      <p className="text-xs text-slate-400 mt-1">{doc.description}</p>
                    </div>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* External Resources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🔗</span>
            External Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="https://www.olympics.com/ioc/olympic-truce/resolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-colors group"
            >
              <div className="text-2xl mb-2">🏅</div>
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">IOC Olympic Truce</h3>
              <p className="text-sm text-slate-400 mt-1">Official IOC page with resolutions, appeals, and history</p>
            </a>
            <a
              href="https://social.desa.un.org/issues/sport-for-development-and-peace/general-assembly"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-colors group"
            >
              <div className="text-2xl mb-2">🇺🇳</div>
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">UN DESA Sport</h3>
              <p className="text-sm text-slate-400 mt-1">Sport for Development and Peace resources</p>
            </a>
            <a
              href="https://olympictruce.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-colors group"
            >
              <div className="text-2xl mb-2">🕊️</div>
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">IOTC</h3>
              <p className="text-sm text-slate-400 mt-1">International Olympic Truce Centre</p>
            </a>
          </div>
        </motion.section>

        {/* Footer */}
        <div className="text-center py-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm mb-4">
            All documents link to official UN and IOC sources.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/history" className="text-blue-400 hover:text-blue-300 text-sm">
              View History Timeline
            </Link>
            <Link href="/briefing-sheet" className="text-blue-400 hover:text-blue-300 text-sm">
              Donor Briefing Sheet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
