'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ComingSoonProps {
  title: string;
  description: string;
  icon: string;
}

export default function ComingSoon({ title, description, icon }: ComingSoonProps) {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      {/* Navigation back */}
      <nav className="p-4 sm:p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </Link>
      </nav>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-lg"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl mb-6"
          >
            {icon}
          </motion.div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {title}
          </h1>

          {/* Description */}
          <p className="text-slate-400 mb-8">
            {description}
          </p>

          {/* Coming Soon badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-slate-300 text-sm font-medium">Coming Soon</span>
          </div>

          {/* Stay updated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 glass-card max-w-md mx-auto"
          >
            <h2 className="text-lg font-semibold text-white mb-2">
              Stay Updated
            </h2>
            <p className="text-sm text-slate-400 mb-4">
              Be the first to know when this feature launches.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
              >
                Notify Me
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
