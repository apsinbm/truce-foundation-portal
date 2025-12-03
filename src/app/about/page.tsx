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
          {/* The Olympic Truce - from Hugh's essay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 sm:p-10"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🏛️</span>
              The Olympic Truce
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>
                The Olympic Truce is the source and the highest principle of the Olympic Movement. It is the{' '}
                <strong className="text-white">oldest, continuous international agreement in history</strong>,
                dating from 776 BCE. The warring Greek city-states were in perpetual civil wars. Their leadership
                sought reprieve and appealed to the Oracle at Delphi for assistance. The Oracle suggested a truce
                among them all to precede and continue through a major cultural conclave of sport where athletes
                would show their prowess in praise of Zeus.
              </p>
              <p>
                All would be enabled <strong className="text-white">safe passage</strong> to the sacred grove at Olympia
                (not itself part of any city state), safe participation there, and again safe passage back to their homelands.
                The truce was not a ceasefire "per se", but rather a guarantee to enable all to pass freely and safely
                among and through the city states to and from the Games, and to participate without fear of attack
                or reprisal from enemies also in attendance.
              </p>
              <p>
                The impetus of the Olympic Truce was to manage through civil wars. The convening of the games as a
                near religious ritual called upon each person in their soul to abide by the sacred Truce which was
                etched on a ceremonial discus housed in the Temple of Hera facing the gate to the field of play.
                By convening from various directions to common ground, it enabled a practice of{' '}
                <strong className="text-white">people-to-people interaction</strong> meant to surmount the tensions
                of their respective regimes.
              </p>
              <p>
                The Olympic Truce was all the corpus of international law for centuries until law was further
                elaborated to encompass other areas. The United Nations subsequently formalized its status in the
                modern era through a series of resolutions that have been the{' '}
                <strong className="text-white">most supported UN agreements in history</strong>.
              </p>
              <p>
                For Milano-Cortina 2026, the UN General Assembly adopted resolution{' '}
                <a href="/downloads/A_80_L.10-EN.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                  A/80/L.10
                </a>{' '}
                on November 19, 2025 with a record <strong className="text-white">165 co-sponsors</strong> - the highest
                in Olympic Truce history. There will be one in late October 2027 for the LA28 Summer Games.
                The Truce window for Milano-Cortina runs from January 30 to March 22, 2026.
              </p>
            </div>
          </motion.div>

          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 sm:p-10"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🕊️</span>
              Our Approach
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>
                The Truce Foundation advocates the Olympic Truce in the modern era through recognition of
                international figures and through monitoring compliance with UN resolutions. Mindful that
                what the world today knows of the ancient Olympic Games comes principally through{' '}
                <strong className="text-white">statuary and poetry</strong> of that era, the Truce Foundation
                has made gifts of statuary at Olympic headquarters in Lausanne, Switzerland, and in
                Colorado Springs, Colorado, USA. It makes gifts of original poetry to key figures in
                the movement of peace through sport.
              </p>
              <p>
                We believe that <strong className="text-white">what gets measured gets managed</strong>, and
                what gets verified gets respected. The Truce Compliance Index represents the first systematic,
                evidence-based mechanism for monitoring adherence to the Olympic Truce resolution.
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
                instrument for peace.
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
