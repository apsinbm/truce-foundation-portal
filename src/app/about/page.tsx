'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
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

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              About the Truce Foundation
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Transforming the ancient tradition of Olympic Truce into measurable, verifiable action for peace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 sm:p-10"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🏛️</span>
              The Olympic Truce Tradition
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>
                The Olympic Truce, known as "ekecheiria" in ancient Greek, dates back to the 9th century BCE.
                It was a sacred agreement that allowed athletes, artists, and spectators to travel safely
                to and from the Olympic Games.
              </p>
              <p>
                In 1992, the International Olympic Committee revived this tradition by calling upon all
                nations to observe the Olympic Truce during the modern Games. Since 1993, the United Nations
                General Assembly has adopted a resolution before each Olympic Games, calling for a worldwide
                ceasefire during the Olympic period.
              </p>
              <p>
                For Milano-Cortina 2026, the UN General Assembly adopted resolution{' '}
                <a href="/downloads/A_80_L.10-EN.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                  A/80/L.10
                </a>{' '}
                on November 19, 2025 with a record <strong className="text-white">165 co-sponsors</strong> - the highest in Olympic Truce history -
                demonstrating unprecedented global unity. The resolution was adopted by consensus and explicitly commends
                the Games for being the <strong className="text-white">most gender-balanced Winter Games in history</strong>.
                The Truce window runs from January 30 to March 22, 2026.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 sm:p-10"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              Our Mission
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>
                The Truce Foundation exists to transform the symbolic Olympic Truce into a meaningful
                instrument for peace. We believe that what gets measured gets managed, and what gets
                verified gets respected.
              </p>
              <p className="font-medium text-white">
                Our core objectives:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Monitor and document compliance with the Olympic Truce resolution</li>
                <li>Provide independent, verifiable assessments of member state actions</li>
                <li>Create transparency and accountability around truce commitments</li>
                <li>Engage youth, athletes, and civil society in peace advocacy</li>
                <li>Archive and report on truce-related activities for future reference</li>
              </ul>
            </div>
          </motion.div>

          {/* Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 sm:p-10"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">📊</span>
              Our Methodology
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>
                The Truce Compliance Index uses a multi-source verification approach to assess
                compliance with the Olympic Truce. Our methodology includes:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Data Sources</h3>
                  <p className="text-sm">UN reports, conflict databases, NGO assessments, and verified media reports</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Verification</h3>
                  <p className="text-sm">Multi-tier verification with independent audit capabilities</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Scoring</h3>
                  <p className="text-sm">Composite scoring across multiple compliance dimensions</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Transparency</h3>
                  <p className="text-sm">Open methodology documentation and data accessibility</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Get Involved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 sm:p-10 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Get Involved
            </h2>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              The Olympic Truce belongs to everyone. Join us in making peace measurable and achievable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/advocacy"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
              >
                Advocacy Toolkit
              </Link>
              <Link
                href="/partners"
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/history"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Truce History
              </h3>
              <p className="text-sm text-slate-400 mt-1">30+ years of Olympic Truce</p>
            </Link>
            <Link
              href="/methodology"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Index Methodology
              </h3>
              <p className="text-sm text-slate-400 mt-1">How we measure compliance</p>
            </Link>
            <a
              href="https://truce-index.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Live Index
              </h3>
              <p className="text-sm text-slate-400 mt-1">Real-time compliance data</p>
            </a>
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
