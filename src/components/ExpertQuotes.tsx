'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Quote {
  id: string;
  text: string;
  author: string;
  title: string;
  category: 'olympian' | 'un_official' | 'peace_expert' | 'journalist';
  imageUrl?: string;
}

// Placeholder quotes - authors to be assigned later
const EXPERT_QUOTES: Quote[] = [
  {
    id: '1',
    text: "The Olympic Truce represents humanity's enduring belief that even in our darkest moments, we can choose peace. This Index makes that choice visible and accountable.",
    author: "Olympic Champion",
    title: "Former Olympic Gold Medalist",
    category: 'olympian',
  },
  {
    id: '2',
    text: "For the first time, we have a transparent, data-driven mechanism to monitor compliance with the Olympic Truce resolution. This is a significant step forward for international accountability.",
    author: "UN Official",
    title: "United Nations Representative",
    category: 'un_official',
  },
  {
    id: '3',
    text: "Measuring peace is as important as measuring conflict. The Truce Compliance Index provides the evidence base we need to advocate effectively for ceasefires during the Olympic period.",
    author: "Peace Researcher",
    title: "Conflict Resolution Expert",
    category: 'peace_expert',
  },
  {
    id: '4',
    text: "Athletes train for years to compete at the Olympics. The least we can do is ensure they can do so in a world striving for peace. This Index holds nations to that promise.",
    author: "Sports Correspondent",
    title: "International Sports Journalist",
    category: 'journalist',
  },
  {
    id: '5',
    text: "The ekecheiria - the sacred truce - was the foundation of the ancient Games. By monitoring compliance today, we honor that tradition and give it real meaning.",
    author: "Olympic Historian",
    title: "Former Olympian & Scholar",
    category: 'olympian',
  },
  {
    id: '6',
    text: "Real-time monitoring of humanitarian corridors during the Olympic period could save lives. This platform makes the invisible visible.",
    author: "Humanitarian Expert",
    title: "International Aid Organization",
    category: 'peace_expert',
  },
];

const categoryIcons: Record<Quote['category'], string> = {
  olympian: '🏅',
  un_official: '🌐',
  peace_expert: '🕊️',
  journalist: '📰',
};

const categoryLabels: Record<Quote['category'], string> = {
  olympian: 'Olympian',
  un_official: 'UN Official',
  peace_expert: 'Peace Expert',
  journalist: 'Journalist',
};

export default function ExpertQuotes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % EXPERT_QUOTES.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeQuote = EXPERT_QUOTES[activeIndex];

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Voices for Peace
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Experts, athletes, and advocates share why the Olympic Truce matters.
          </p>
        </motion.div>

        {/* Main Quote Display */}
        <motion.div
          key={activeQuote.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="glass-card p-8 sm:p-12 relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Quote icon */}
          <div className="absolute top-6 left-6 text-4xl text-blue-500/30">
            "
          </div>

          {/* Category badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm">
              <span>{categoryIcons[activeQuote.category]}</span>
              <span>{categoryLabels[activeQuote.category]}</span>
            </span>
          </div>

          {/* Quote text */}
          <blockquote className="text-lg sm:text-xl text-slate-200 text-center leading-relaxed mb-8 px-4">
            {activeQuote.text}
          </blockquote>

          {/* Author */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <span className="text-xl">{categoryIcons[activeQuote.category]}</span>
            </div>
            <div className="text-center">
              <p className="font-semibold text-white">{activeQuote.author}</p>
              <p className="text-sm text-slate-400">{activeQuote.title}</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-6">
          {EXPERT_QUOTES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex
                  ? 'bg-blue-500 w-6'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>

        {/* All quotes grid (smaller) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
          {EXPERT_QUOTES.map((quote, index) => (
            <motion.button
              key={quote.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`p-4 rounded-lg text-left transition-all ${
                index === activeIndex
                  ? 'bg-blue-500/20 border border-blue-500/50'
                  : 'bg-slate-800/50 border border-slate-700/50 hover:border-slate-600'
              }`}
            >
              <span className="text-2xl mb-2 block">{categoryIcons[quote.category]}</span>
              <p className="text-xs text-slate-400 line-clamp-2">{quote.text.slice(0, 60)}...</p>
              <p className="text-xs text-slate-500 mt-2">{quote.author}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
