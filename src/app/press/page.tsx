'use client';

import { motion } from 'framer-motion';
import { TRUCE_INDEX_URL } from '@/lib/constants';
import Header from '@/components/Header';

// Recent coverage and key sources
interface CoverageItem {
  source: string;
  title: string;
  date: string;
  url: string;
  type: 'official' | 'media' | 'analysis';
}

const RECENT_COVERAGE: CoverageItem[] = [
  // === Feb 28 - Mar 2026: Iran-Israel-USA Escalation ===
  {
    source: 'UN News',
    title: 'Secretary-General condemns military escalation, calls for immediate return to Olympic Truce',
    date: '2026-03-01',
    url: 'https://news.un.org',
    type: 'official',
  },
  {
    source: 'IOC',
    title: 'IOC Statement on Violations of the Olympic Truce During Milano Cortina 2026',
    date: '2026-03-01',
    url: 'https://www.olympics.com/ioc/news',
    type: 'official',
  },
  {
    source: 'Reuters',
    title: 'U.S.-Israeli strikes on Iran shatter Olympic Truce as regional war erupts',
    date: '2026-02-28',
    url: 'https://www.reuters.com',
    type: 'media',
  },
  {
    source: 'Al Jazeera',
    title: 'Iran launches retaliatory missile barrage at Israel and Gulf states after Khamenei killing',
    date: '2026-03-01',
    url: 'https://www.aljazeera.com',
    type: 'media',
  },
  // === Ongoing conflicts during Truce ===
  {
    source: 'BBC News',
    title: 'Russia launches largest missile barrage on Ukraine on day of Olympic Opening Ceremony',
    date: '2026-02-22',
    url: 'https://www.bbc.com/news',
    type: 'media',
  },
  {
    source: 'OCHA',
    title: 'Gaza humanitarian catastrophe deepens as all border crossings shut amid regional war',
    date: '2026-03-01',
    url: 'https://www.unocha.org',
    type: 'official',
  },
  {
    source: 'UNHCR',
    title: 'Sudan displacement crisis worsens as RSF offensive forces 200,000 more to flee',
    date: '2026-02-27',
    url: 'https://www.unhcr.org',
    type: 'official',
  },
  {
    source: 'X / @andrii_sybiha',
    title: 'Ukraine FM Reports Massive Russian Drone & Missile Attack on Three Cities',
    date: '2026-02-12',
    url: 'https://x.com/andrii_sybiha/status/2021811503121260589',
    type: 'media',
  },
  // === Resolution adoption ===
  {
    source: 'UN Press',
    title: 'General Assembly Adopts Olympic Truce Resolution, Citing Sport\'s Unifying Power',
    date: '2025-11-19',
    url: 'https://press.un.org/en/2025/ga12732.doc.htm',
    type: 'official',
  },
  {
    source: 'Olympics.com',
    title: 'Olympic Truce Resolution for Milano Cortina 2026 adopted by the United Nations',
    date: '2025-11-19',
    url: 'https://www.olympics.com/ioc/news/olympic-truce-resolution-for-milano-cortina-2026-adopted-by-the-united-nations',
    type: 'official',
  },
  {
    source: 'Italian Ministry of Foreign Affairs',
    title: 'La Risoluzione Italiana sulla Tregua Olimpica per Milano Cortina 2026',
    date: '2025-11-19',
    url: 'https://www.esteri.it/en/sala_stampa/archivionotizie/comunicati/2025/11/la-risoluzione-italiana-sulla-tregua-olimpica-per-milano-cortina-2026-adottata-dallassemblea-generale-dellonu/',
    type: 'official',
  },
];

// Key talking points for journalists
const KEY_TALKING_POINTS = [
  {
    stat: '6+',
    label: 'Active Violators',
    context: 'Russia, Israel, USA, Iran, Sudan, Myanmar violating during Truce window',
  },
  {
    stat: '22',
    label: 'Countries Affected',
    context: 'Conflict incidents tracked across 22 nations during the Truce period',
  },
  {
    stat: '166',
    label: 'UN Co-Sponsors',
    context: 'Out of 193 member states co-sponsored the Truce resolution',
  },
  {
    stat: '52 days',
    label: 'Truce Window',
    context: 'January 30 - March 22, 2026 (per UN Resolution A/80/L.10)',
  },
];

// B-roll and visual assets
const VISUAL_ASSETS = [
  {
    name: 'UN General Assembly Adoption',
    description: 'Video footage from November 19, 2025 resolution adoption',
    icon: '🎬',
    url: 'https://media.un.org/unifeed/en/asset/d350/d3504531',
  },
  {
    name: 'Resolution Document A/80/L.10',
    description: 'Official UN document (PDF)',
    icon: '📄',
    url: '/downloads/A_80_L.10-EN.pdf',
  },
  {
    name: 'Truce Index Screenshots',
    description: 'High-res captures of the compliance map',
    icon: '🗺️',
    url: '/downloads/index-screenshots.zip',
  },
  {
    name: 'Infographics',
    description: 'Pre-made social graphics and charts',
    icon: '📈',
    url: '/downloads/infographics.zip',
  },
];

export default function PressPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Press & Media
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Resources for journalists covering the Olympic Truce and its unprecedented violations during Milano Cortina 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Situation Brief */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-red-50 border border-red-200"
          >
            <h2 className="text-2xl font-bold text-red-900 mb-3">Situation Brief: March 2, 2026</h2>
            <div className="space-y-3 text-sm text-red-900/80">
              <p>
                The Milano Cortina 2026 Olympic Truce (Jan 30 - Mar 22) has been shattered by the most severe violations in modern Olympic history. On February 28, the United States and Israel launched coordinated strikes on Iranian nuclear and military facilities, including a targeted operation that killed Supreme Leader Ayatollah Khamenei. Iran responded with the largest missile barrage in its history, striking 10 countries: Israel, Saudi Arabia, UAE, Bahrain, Kuwait, Qatar (Al Udeid/CENTCOM), Iraq (Erbil/Al-Asad), Jordan, Oman, and Cyprus (RAF Akrotiri).
              </p>
              <p>
                This escalation occurred against a backdrop of ongoing violations: Russia continued its large-scale invasion of Ukraine with daily missile and drone attacks throughout the Truce period, including a massive bombardment on the day of the Olympic Opening Ceremony (Feb 22). The war in Sudan, the humanitarian catastrophe in Gaza, and conflicts in Afghanistan, Pakistan, Yemen, and Mexico all continued unabated.
              </p>
              <p>
                The Truce Index is tracking incidents across 22 countries, with Palestine, Iran, Russia, Sudan, Israel, and Ukraine recording the highest number of critical incidents. This represents the worst period of Olympic Truce violations since the modern tradition was revived in 1993.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Talking Points */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Key Facts: Milano-Cortina 2026 Truce Crisis</h2>
            <p className="text-gray-600 mb-6">Quick reference for reporting on the Olympic Truce violations</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {KEY_TALKING_POINTS.map((point, index) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 text-center"
                >
                  <span className="text-2xl font-bold text-gray-900 block">{point.stat}</span>
                  <span className="text-sm text-blue-500 font-medium">{point.label}</span>
                  <p className="text-xs text-gray-500 mt-2">{point.context}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Coverage */}
      <section className="py-12 px-4 bg-gray-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Official Sources & Coverage</h2>
            <p className="text-gray-600 mb-6">Key reporting on the 2026 Olympic Truce crisis and resolution</p>

            <div className="space-y-3">
              {RECENT_COVERAGE.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl bg-gray-100/50 border border-gray-200/50 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-blue-600">{item.source}</span>
                        <span className="px-2 py-0.5 text-xs bg-green-100 text-green-800 border-green-300 rounded-full">
                          {item.type}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                      <h3 className="text-gray-900 group-hover:text-blue-500 transition-colors text-sm">
                        {item.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Assets / B-Roll */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Visual Assets & B-Roll</h2>
            <p className="text-gray-600 mb-6">Video footage, documents, and graphics for your coverage</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VISUAL_ASSETS.map((asset) => (
                <a
                  key={asset.name}
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-gray-100/50 border border-gray-200/50 hover:border-purple-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{asset.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-400 transition-colors">
                        {asset.name}
                      </h3>
                      <p className="text-sm text-gray-600">{asset.description}</p>
                    </div>
                  </div>
                </a>
              ))}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore the Index</h2>
            <p className="text-gray-600 mb-6">
              See real-time compliance data on our interactive map
            </p>
            <a
              href={TRUCE_INDEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-gray-900 font-medium rounded-xl transition-colors"
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
      <footer className="py-8 px-4 border-t border-gray-200/50">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Truce Foundation. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
