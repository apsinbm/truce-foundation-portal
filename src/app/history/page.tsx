'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';

export default function HistoryHubPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Olympic Truce History
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From Ancient Greece to Modern Times
            </p>
            <p className="text-slate-500">
              2,800 years of the world's oldest peace tradition
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual Timeline Bridge */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Timeline visualization */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-slate-600 to-blue-500 -translate-x-1/2" />

            {/* Ancient Era Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mb-8"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Link
                  href="/history/ancient"
                  className="group p-8 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 hover:border-amber-400/50 transition-all hover:shadow-lg hover:shadow-amber-500/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🏛️</span>
                    <div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        Ancient Ekecheiria
                      </h2>
                      <p className="text-amber-400/80 text-sm">776 BC - 393 AD</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4">
                    The sacred truce that united warring Greek city-states for over 1,100 years.
                    Discover the origins, enforcement, and rare violations of history's first
                    international peace agreement.
                  </p>
                  <ul className="text-sm text-slate-400 space-y-1 mb-4">
                    <li>• Origins with King Iphitos and the Oracle of Delphi</li>
                    <li>• The Spondophoroi (truce-bearers) and their sacred mission</li>
                    <li>• Famous violations: Sparta, Philip II, Battle at Olympia</li>
                    <li>• Ancient wisdom from Isocrates, Pausanias, Pindar</li>
                  </ul>
                  <span className="inline-flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all">
                    Explore Ancient History
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>

                {/* Timeline marker */}
                <div className="hidden md:flex items-center justify-start">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-amber-500 border-4 border-slate-950 shadow-lg shadow-amber-500/50" />
                    <div className="text-slate-400">
                      <div className="font-bold text-amber-300">776 BC</div>
                      <div className="text-xs">First Olympic Games</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Gap Period Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative py-8"
            >
              <div className="flex justify-center">
                <div className="px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-full">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500">⏳</span>
                    <div className="text-center">
                      <div className="text-sm text-slate-400">1,500 Years of Dormancy</div>
                      <div className="text-xs text-slate-500">393 AD - 1894</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Modern Era Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Timeline marker */}
                <div className="hidden md:flex items-center justify-end order-1 md:order-none">
                  <div className="flex items-center gap-4">
                    <div className="text-slate-400 text-right">
                      <div className="font-bold text-blue-300">1993</div>
                      <div className="text-xs">UN Resolution 48/11</div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-slate-950 shadow-lg shadow-blue-500/50" />
                  </div>
                </div>

                <Link
                  href="/history/modern"
                  className="group p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🌍</span>
                    <div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        Modern Revival
                      </h2>
                      <p className="text-blue-400/80 text-sm">1992 - Present</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4">
                    The resurrection of the Olympic Truce through UN resolutions. Track 30+ years
                    of diplomatic efforts, historic moments, and the ongoing challenge of
                    translating ancient ideals into modern peace.
                  </p>
                  <ul className="text-sm text-slate-400 space-y-1 mb-4">
                    <li>• 17 Olympic Games with formal Truce resolutions</li>
                    <li>• Key moments: Korean unity, Kofi Annan's diplomacy</li>
                    <li>• Violations: Georgia 2008, Crimea 2014, Ukraine 2022</li>
                    <li>• Milano-Cortina 2026: 165 co-sponsors</li>
                  </ul>
                  <span className="inline-flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all">
                    Explore Modern History
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center"
            >
              <span className="text-3xl font-bold text-amber-400">2,800+</span>
              <p className="text-xs text-slate-500 mt-1">Years of Tradition</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center"
            >
              <span className="text-3xl font-bold text-green-400">17</span>
              <p className="text-xs text-slate-500 mt-1">Modern UN Resolutions</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center"
            >
              <span className="text-3xl font-bold text-blue-400">165</span>
              <p className="text-xs text-slate-500 mt-1">2026 Co-Sponsors</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center"
            >
              <span className="text-3xl font-bold text-purple-400">193</span>
              <p className="text-xs text-slate-500 mt-1">UN Member States</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Connection */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-slate-900/50 border border-purple-500/30 text-center"
          >
            <h2 className="text-xl font-bold text-white mb-4">
              The Unbroken Thread
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Though the ancient Games ended in 393 AD and the modern Olympics began in 1896,
              the Olympic Truce was not formally revived until <strong className="text-purple-300">1993</strong>.
              It took nearly a century for the modern Olympic movement to rediscover what the
              ancient Greeks knew: that sport could be a catalyst for peace.
            </p>
            <blockquote className="text-slate-400 italic border-l-2 border-purple-500/50 pl-4 text-left">
              "The founders of our great festivals are justly praised for handing down to us a
              custom by which, having proclaimed a truce and resolved our pending quarrels, we
              come together in one place..."
              <footer className="text-xs text-slate-500 mt-2 not-italic">
                — Isocrates, Panegyricus (380 BC)
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/documents"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                UN Documents Archive
              </h3>
              <p className="text-sm text-slate-400 mt-1">All resolutions and legal texts</p>
            </Link>
            <Link
              href="/methodology"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Methodology
              </h3>
              <p className="text-sm text-slate-400 mt-1">How we measure compliance today</p>
            </Link>
            <Link
              href="/accountability"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Accountability Record
              </h3>
              <p className="text-sm text-slate-400 mt-1">Modern wall of shame</p>
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
