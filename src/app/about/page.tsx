'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="p-4 sm:p-6 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <span className="text-lg">🕊️</span>
            </div>
            <span className="font-bold text-white hidden sm:block">Truce Foundation</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 sm:py-24 px-4">
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

      <Footer />
    </main>
  );
}
