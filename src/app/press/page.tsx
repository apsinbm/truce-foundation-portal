'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TRUCE_INDEX_URL } from '@/lib/constants';
import Header from '@/components/Header';

interface Stats {
  total_incidents: number;
  conflict_incidents: number;
  countries_with_incidents: number;
}

const MEDIA_KIT_ITEMS = [
  {
    name: 'Logo Pack',
    description: 'High-resolution logos in PNG and SVG formats',
    icon: '🎨',
    href: '/downloads/truce-logo-pack.zip',
  },
  {
    name: 'Brand Guidelines',
    description: 'Colors, typography, and usage guidelines',
    icon: '📐',
    href: '/downloads/style-guide.pdf',
  },
  {
    name: 'Fact Sheet',
    description: 'Key statistics and background information',
    icon: '📊',
    href: '/downloads/fact-sheet.pdf',
  },
  {
    name: 'Press Release',
    description: 'Latest official announcements',
    icon: '📰',
    href: '/downloads/press-release.pdf',
  },
];

// Recent coverage and key sources
interface CoverageItem {
  source: string;
  title: string;
  date: string;
  url: string;
  type: 'official' | 'media' | 'analysis';
}

const RECENT_COVERAGE: CoverageItem[] = [
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
  {
    source: 'ANOC',
    title: 'Olympic Truce Resolution for Milano Cortina 2026 adopted by the United Nations',
    date: '2025-11-19',
    url: 'https://www.anocolympic.org/olympic-movement/olympic-truce-resolution-for-milano-cortina-2026-adopted-by-the-united-nations/',
    type: 'official',
  },
];

// Key talking points for journalists
const KEY_TALKING_POINTS = [
  {
    stat: '165',
    label: 'UN Co-Sponsors',
    context: 'Out of 193 member states - highest in Olympic Truce history',
  },
  {
    stat: '50-50',
    label: 'Gender Balance',
    context: 'Most gender-balanced Winter Games in history',
  },
  {
    stat: 'Consensus',
    label: 'Adoption Method',
    context: 'Adopted without a vote on November 19, 2025',
  },
  {
    stat: '52 days',
    label: 'Truce Window',
    context: 'January 30 - March 22, 2026',
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
  const [stats, setStats] = useState<Stats | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fetch stats from Truce Index API
    const twoYearsAgo = new Date(Date.now() - 730 * 24 * 60 * 60 * 1000).toISOString();
    fetch(`${TRUCE_INDEX_URL}/api/stats?start=${twoYearsAgo}`)
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(console.error);
  }, []);

  const embedCode = `<iframe src="${TRUCE_INDEX_URL}/embed/widget" width="300" height="200" frameborder="0" style="border-radius: 12px;"></iframe>`;

  const copyEmbedCode = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Press & Media
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Resources for journalists and media covering the Olympic Truce
            </p>
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
            <h2 className="text-2xl font-bold text-white mb-2">Key Facts: Milano-Cortina 2026</h2>
            <p className="text-slate-400 mb-6">Quick reference for reporting on the Olympic Truce</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {KEY_TALKING_POINTS.map((point, index) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 text-center"
                >
                  <span className="text-2xl font-bold text-white block">{point.stat}</span>
                  <span className="text-sm text-blue-300 font-medium">{point.label}</span>
                  <p className="text-xs text-slate-500 mt-2">{point.context}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Coverage */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">Official Sources & Coverage</h2>
            <p className="text-slate-400 mb-6">Verified reporting on the 2026 Olympic Truce resolution</p>

            <div className="space-y-3">
              {RECENT_COVERAGE.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-blue-400">{item.source}</span>
                        <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">
                          {item.type}
                        </span>
                        <span className="text-xs text-slate-500">
                          {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                      <h3 className="text-white group-hover:text-blue-300 transition-colors text-sm">
                        {item.title}
                      </h3>
                    </div>
                    <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <h2 className="text-2xl font-bold text-white mb-2">Visual Assets & B-Roll</h2>
            <p className="text-slate-400 mb-6">Video footage, documents, and graphics for your coverage</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VISUAL_ASSETS.map((asset) => (
                <a
                  key={asset.name}
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{asset.icon}</span>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {asset.name}
                      </h3>
                      <p className="text-sm text-slate-400">{asset.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Statistics */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">Live Statistics</h2>
            <p className="text-slate-400 mb-6">Real-time data from the Truce Compliance Index</p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-800/50 rounded-xl p-6 text-center border border-slate-700/50">
                <div className="text-4xl font-bold text-white mb-2">
                  {stats?.total_incidents?.toLocaleString() || '---'}
                </div>
                <div className="text-sm text-slate-400">Incidents Tracked</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 text-center border border-slate-700/50">
                <div className="text-4xl font-bold text-red-400 mb-2">
                  {stats?.conflict_incidents?.toLocaleString() || '---'}
                </div>
                <div className="text-sm text-slate-400">Conflict Events</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 text-center border border-slate-700/50">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {stats?.countries_with_incidents || '---'}
                </div>
                <div className="text-sm text-slate-400">Countries Monitored</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Embed Widget */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">Embed Widget</h2>
            <p className="text-slate-400 mb-6">Add live Truce Index data to your website</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="font-semibold text-white mb-4">Preview</h3>
                <div className="bg-slate-900 rounded-lg p-4 flex items-center justify-center">
                  <iframe
                    src={`${TRUCE_INDEX_URL}/embed/widget`}
                    width="280"
                    height="180"
                    frameBorder="0"
                    style={{ borderRadius: '12px' }}
                  />
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="font-semibold text-white mb-4">Embed Code</h3>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-slate-300 overflow-x-auto">
                  {embedCode}
                </div>
                <button
                  onClick={copyEmbedCode}
                  className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Cite */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">How to Cite</h2>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="font-semibold text-white mb-2">Academic Citation</h3>
                <p className="text-slate-300 font-mono text-sm">
                  Truce Foundation. (2025). Olympic Truce Compliance Index [Data set].
                  Retrieved from {TRUCE_INDEX_URL}
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="font-semibold text-white mb-2">News Attribution</h3>
                <p className="text-slate-300 text-sm">
                  "According to the Truce Index, maintained by the Truce Foundation..."
                  or "Data from the Olympic Truce Compliance Index shows..."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Media Kit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MEDIA_KIT_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Press Contact</h2>
                <h3 className="font-semibold text-lg text-slate-300 mb-2">Media Officer</h3>
                <p className="text-slate-400 mb-4">Truce Foundation</p>
                <a
                  href="mailto:press@trucefoundation.world"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  press@trucefoundation.world
                </a>
                <p className="text-slate-400 mt-4 text-sm">
                  For urgent media inquiries during the Olympic period, we aim to respond within 12 hours.
                  For interview requests, please provide your deadline and topic.
                </p>
              </div>
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
            <h2 className="text-2xl font-bold text-white mb-4">Explore the Index</h2>
            <p className="text-slate-400 mb-6">
              See real-time compliance data on our interactive map
            </p>
            <a
              href={TRUCE_INDEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
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
      <footer className="py-8 px-4 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Truce Foundation. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
