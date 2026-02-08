'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PULSE_ENTRIES, type PulseSection } from '@/lib/pulse-data';
import { TRUCE_INDEX_URL } from '@/lib/constants';

const SECTION_STYLES: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  blue: {
    bg: 'bg-blue-50/80',
    border: 'border-blue-200/60',
    text: 'text-blue-800',
    dot: 'bg-blue-500',
  },
  amber: {
    bg: 'bg-amber-50/80',
    border: 'border-amber-200/60',
    text: 'text-amber-800',
    dot: 'bg-amber-500',
  },
  green: {
    bg: 'bg-green-50/80',
    border: 'border-green-200/60',
    text: 'text-green-800',
    dot: 'bg-green-500',
  },
  purple: {
    bg: 'bg-purple-50/80',
    border: 'border-purple-200/60',
    text: 'text-purple-800',
    dot: 'bg-purple-500',
  },
};

const ALIGNMENT_STYLES: Record<string, { bg: string; border: string; text: string; label: string }> = {
  strong: {
    bg: 'bg-green-50',
    border: 'border-green-300',
    text: 'text-green-800',
    label: 'Strong Alignment',
  },
  moderate: {
    bg: 'bg-blue-50',
    border: 'border-blue-300',
    text: 'text-blue-800',
    label: 'Moderate Alignment',
  },
  weak: {
    bg: 'bg-amber-50',
    border: 'border-amber-300',
    text: 'text-amber-800',
    label: 'Weak Alignment',
  },
  critical: {
    bg: 'bg-red-50',
    border: 'border-red-300',
    text: 'text-red-800',
    label: 'Critical',
  },
};

const FOCUS_COLORS: Record<string, string> = {
  'Safe Passage': 'bg-blue-100 text-blue-800 border-blue-200',
  'Humanitarian Access': 'bg-amber-100 text-amber-800 border-amber-200',
  'De-escalation': 'bg-green-100 text-green-800 border-green-200',
  'Peace Through Sport': 'bg-purple-100 text-purple-800 border-purple-200',
};

function SectionCard({ section, index }: { section: PulseSection; index: number }) {
  const style = SECTION_STYLES[section.color] || SECTION_STYLES.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`${style.bg} border ${style.border} rounded-xl p-6`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{section.icon}</span>
        <h3 className={`text-lg font-bold ${style.text}`}>{section.title}</h3>
      </div>
      <div className="space-y-3">
        {section.bullets.map((bullet, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full ${style.dot} mt-2 shrink-0`} />
            <div>
              <span className="font-semibold text-gray-900">{bullet.headline}: </span>
              <span className="text-gray-600">{bullet.text}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function TrucePulsePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const entry = PULSE_ENTRIES[currentIndex];
  const hasMultiple = PULSE_ENTRIES.length > 1;

  const handlePrev = () => {
    if (currentIndex < PULSE_ENTRIES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!entry) return null;

  const alignment = ALIGNMENT_STYLES[entry.overallAlignment.level] || ALIGNMENT_STYLES.moderate;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-500/30 rounded-full">
              <span className="text-blue-800 text-sm font-medium">Expert Analysis</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Truce Pulse
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Weekly curated analysis of current events mapped against Olympic Truce principles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Entry Navigation */}
      {hasMultiple && (
        <section className="px-4 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentIndex >= PULSE_ENTRIES.length - 1}
                className={`flex items-center gap-2 transition-colors ${
                  currentIndex >= PULSE_ENTRIES.length - 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Older
              </button>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">
                  {entry.periodLabel}
                </div>
                <div className="text-sm text-gray-500">
                  Update {PULSE_ENTRIES.length - currentIndex} of {PULSE_ENTRIES.length}
                </div>
              </div>
              <button
                onClick={handleNext}
                disabled={currentIndex <= 0}
                className={`flex items-center gap-2 transition-colors ${
                  currentIndex <= 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Newer
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Period Label (when single entry) */}
      {!hasMultiple && (
        <section className="px-4 pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-lg font-semibold text-gray-900">
                Update Period: {entry.periodLabel}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Focus Area Pills */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {entry.focusAreas.map((area) => (
              <span
                key={area}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${FOCUS_COLORS[area] || 'bg-gray-100 text-gray-700 border-gray-200'}`}
              >
                {area}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {entry.sections.map((section, index) => (
              <SectionCard key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Overall Truce Alignment */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${alignment.bg} border ${alignment.border} rounded-2xl p-8`}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">📡</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-xl font-bold text-gray-900">Overall Truce Alignment</h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${alignment.text} ${alignment.bg} border ${alignment.border}`}>
                    {alignment.label}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {entry.overallAlignment.summary}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Constraints */}
      {entry.keyConstraints.length > 0 && (
        <section className="px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-amber-50/80 border border-amber-200/60 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Key Constraints
              </h3>
              <div className="space-y-3">
                {entry.keyConstraints.map((constraint, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <p className="text-gray-700">{constraint}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Cross-links */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <Link
              href="/humanitarian"
              className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all text-center group"
            >
              <span className="text-2xl">🚑</span>
              <div className="text-sm font-medium text-gray-900 mt-2 group-hover:text-blue-700">Humanitarian Access</div>
            </Link>
            <Link
              href="/ceasefire"
              className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all text-center group"
            >
              <span className="text-2xl">🕊️</span>
              <div className="text-sm font-medium text-gray-900 mt-2 group-hover:text-blue-700">Ceasefire Watch</div>
            </Link>
            <a
              href={TRUCE_INDEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all text-center group"
            >
              <span className="text-2xl">🗺️</span>
              <div className="text-sm font-medium text-gray-900 mt-2 group-hover:text-blue-700">View Live Index ↗</div>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
