'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ANCIENT_QUOTES, AncientQuote } from '@/lib/constants';

const categoryConfig = {
  ekecheiria: { icon: '🏛️', label: 'On the Truce', color: 'text-amber-300' },
  athletics: { icon: '🏃', label: 'On Athletics', color: 'text-green-300' },
  peace: { icon: '🕊️', label: 'On Peace', color: 'text-blue-300' },
  glory: { icon: '🏆', label: 'On Glory', color: 'text-purple-300' },
};

export default function AncientWisdom() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate quotes every 10 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANCIENT_QUOTES.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentQuote = ANCIENT_QUOTES[currentIndex];
  const config = categoryConfig[currentQuote.category];

  const goToQuote = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 30 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 30000);
  };

  const nextQuote = () => {
    goToQuote((currentIndex + 1) % ANCIENT_QUOTES.length);
  };

  const prevQuote = () => {
    goToQuote((currentIndex - 1 + ANCIENT_QUOTES.length) % ANCIENT_QUOTES.length);
  };

  return (
    <section className="relative py-16 sm:py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/50" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
            <span className="text-xl">📜</span>
            <span className="text-amber-300 text-sm font-medium">Ancient Wisdom</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Voices from Antiquity
          </h2>
          <p className="text-slate-400 mt-2">
            Words that shaped the Olympic ideal for over 2,800 years
          </p>
        </motion.div>

        {/* Quote Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm"
            >
              {/* Category badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl">{config.icon}</span>
                <span className={`text-sm font-medium ${config.color}`}>{config.label}</span>
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-6 italic">
                "{currentQuote.text}"
              </blockquote>

              {/* Attribution */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="font-semibold text-white">{currentQuote.author}</div>
                  <div className="text-sm text-slate-400">{currentQuote.authorDates}</div>
                </div>
                <div className="text-right">
                  {currentQuote.sourceUrl ? (
                    <a
                      href={currentQuote.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      {currentQuote.source} ↗
                    </a>
                  ) : (
                    <span className="text-sm text-slate-500">{currentQuote.source}</span>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prevQuote}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 p-2 rounded-full bg-slate-800/80 border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
            aria-label="Previous quote"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextQuote}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 p-2 rounded-full bg-slate-800/80 border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
            aria-label="Next quote"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {ANCIENT_QUOTES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToQuote(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-amber-400 w-6'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-xs text-slate-500 hover:text-slate-400 transition-colors"
          >
            {isAutoPlaying ? '⏸ Auto-rotating' : '▶ Click to resume'}
          </button>
        </div>
      </div>
    </section>
  );
}
