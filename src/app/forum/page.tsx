'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';

// Forum topic categories
interface ForumCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  topicCount: number;
  color: string;
}

const FORUM_CATEGORIES: ForumCategory[] = [
  {
    id: 'truce-discussion',
    name: 'Olympic Truce Discussion',
    icon: '🏛️',
    description: 'General discussion about the Olympic Truce tradition and its modern application',
    topicCount: 0,
    color: 'blue',
  },
  {
    id: 'milano-cortina-2026',
    name: 'Milano-Cortina 2026',
    icon: '🏔️',
    description: 'Topics specific to the upcoming 2026 Winter Games and Truce window',
    topicCount: 0,
    color: 'purple',
  },
  {
    id: 'peace-initiatives',
    name: 'Peace Initiatives',
    icon: '🕊️',
    description: 'Share and discuss peace-building projects and grassroots initiatives',
    topicCount: 0,
    color: 'green',
  },
  {
    id: 'athlete-voices',
    name: 'Athlete Voices',
    icon: '🏅',
    description: 'A space for athletes to share their perspectives on sport and peace',
    topicCount: 0,
    color: 'amber',
  },
  {
    id: 'research-data',
    name: 'Research & Data',
    icon: '📊',
    description: 'Academic discussions, data analysis, and methodology questions',
    topicCount: 0,
    color: 'cyan',
  },
  {
    id: 'youth-corner',
    name: 'Youth Corner',
    icon: '🌱',
    description: 'A dedicated space for young advocates and students',
    topicCount: 0,
    color: 'pink',
  },
];

// Sample discussion threads (placeholder data)
interface DiscussionThread {
  id: string;
  title: string;
  author: string;
  category: string;
  replies: number;
  views: number;
  lastActivity: string;
  pinned?: boolean;
}

const SAMPLE_THREADS: DiscussionThread[] = [
  {
    id: '1',
    title: 'Welcome to the Truce Forum - Community Guidelines',
    author: 'Truce Foundation',
    category: 'truce-discussion',
    replies: 0,
    views: 0,
    lastActivity: '2025-12-01',
    pinned: true,
  },
  {
    id: '2',
    title: '166 Co-Sponsors: What does record support mean for 2026?',
    author: 'Truce Foundation',
    category: 'milano-cortina-2026',
    replies: 0,
    views: 0,
    lastActivity: '2025-11-19',
    pinned: true,
  },
  {
    id: '3',
    title: 'How can athletes amplify the Truce message?',
    author: 'Truce Foundation',
    category: 'athlete-voices',
    replies: 0,
    views: 0,
    lastActivity: '2025-11-15',
  },
];

const getCategoryColor = (color: string) => {
  const colors: Record<string, string> = {
    blue: 'bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50',
    purple: 'bg-purple-500/10 border-purple-500/30 hover:border-purple-500/50',
    green: 'bg-green-500/10 border-green-500/30 hover:border-green-500/50',
    amber: 'bg-amber-500/10 border-amber-500/30 hover:border-amber-500/50',
    cyan: 'bg-cyan-500/10 border-cyan-500/30 hover:border-cyan-500/50',
    pink: 'bg-pink-500/10 border-pink-500/30 hover:border-pink-500/50',
  };
  return colors[color] || colors.blue;
};

const getCategoryTextColor = (color: string) => {
  const colors: Record<string, string> = {
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    green: 'text-green-400',
    amber: 'text-amber-400',
    cyan: 'text-cyan-400',
    pink: 'text-pink-400',
  };
  return colors[color] || colors.blue;
};

export default function ForumPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const filteredThreads = selectedCategory
    ? SAMPLE_THREADS.filter(t => t.category === selectedCategory)
    : SAMPLE_THREADS;

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Truce Forum
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Join the global conversation about peace, sport, and the Olympic Truce
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Community launching January 2026
            </div>
          </motion.div>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Discussion Categories</h2>
            <p className="text-slate-400">Browse topics by category or view all discussions</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FORUM_CATEGORIES.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                className={`p-5 rounded-xl border text-left transition-all ${getCategoryColor(category.color)} ${
                  selectedCategory === category.id ? 'ring-2 ring-white/20' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className={`font-semibold ${getCategoryTextColor(category.color)}`}>
                    {category.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-400 mb-3">{category.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{category.topicCount} topics</span>
                  {selectedCategory === category.id && (
                    <span className="text-white">Viewing</span>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-4 text-sm text-slate-400 hover:text-white transition-colors"
            >
              Clear filter
            </button>
          )}
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">
                {selectedCategory
                  ? FORUM_CATEGORIES.find(c => c.id === selectedCategory)?.name
                  : 'All Discussions'}
              </h2>
              <p className="text-slate-400 text-sm">
                {filteredThreads.length} topic{filteredThreads.length !== 1 ? 's' : ''}
              </p>
            </div>
            <button
              disabled
              className="px-4 py-2 bg-slate-800 text-slate-500 rounded-lg text-sm cursor-not-allowed"
            >
              New Topic (Coming Soon)
            </button>
          </motion.div>

          <div className="space-y-3">
            {filteredThreads.map((thread, index) => {
              const category = FORUM_CATEGORIES.find(c => c.id === thread.category);
              return (
                <motion.div
                  key={thread.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-slate-600/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {thread.pinned && (
                          <span className="px-2 py-0.5 text-xs bg-amber-500/20 text-amber-400 rounded">
                            Pinned
                          </span>
                        )}
                        <span className={`px-2 py-0.5 text-xs rounded ${getCategoryColor(category?.color || 'blue')} ${getCategoryTextColor(category?.color || 'blue')}`}>
                          {category?.name}
                        </span>
                      </div>
                      <h3 className="font-semibold text-white mb-1">{thread.title}</h3>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span>by {thread.author}</span>
                        <span>{thread.replies} replies</span>
                        <span>{thread.views} views</span>
                        <span>Last activity: {new Date(thread.lastActivity).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredThreads.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No topics in this category yet. Be the first to start a discussion!
            </div>
          )}
        </div>
      </section>

      {/* Community Guidelines Preview */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50"
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">📜</span>
              Community Guidelines
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-slate-300">Respectful dialogue across perspectives</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-slate-300">Evidence-based discussions welcomed</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-slate-300">Share personal stories and experiences</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span className="text-slate-300">No hate speech or personal attacks</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span className="text-slate-300">No misinformation or propaganda</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span className="text-slate-300">No spam or commercial promotion</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Early Access Signup */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Get Early Access
            </h2>
            <p className="text-slate-400 mb-6">
              Be among the first to join the conversation when the Forum launches in January 2026.
              We'll notify you when it's ready.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400">
                Thank you! We'll notify you when the Forum launches.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
                >
                  Notify Me
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/stories"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Youth Stories
              </h3>
              <p className="text-sm text-slate-400 mt-1">First-person accounts</p>
            </Link>
            <Link
              href="/candles"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Global Candle Wall
              </h3>
              <p className="text-sm text-slate-400 mt-1">Light a candle for peace</p>
            </Link>
            <Link
              href="/advocacy"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Advocacy Toolkit
              </h3>
              <p className="text-sm text-slate-400 mt-1">Resources to spread the word</p>
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
