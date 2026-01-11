'use client';

import { motion } from 'framer-motion';
import Countdown from './Countdown';
import { TRUCE_INDEX_URL } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Blue glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Official Truce Foundation Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <img
            src="/truce-foundation-logo.jpg"
            alt="Truce Foundation"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain drop-shadow-2xl rounded-full"
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-gray-900">TRUCE</span>
            <span className="gradient-text ml-3">FOUNDATION</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light">
            Olympic Truce — Transforming Tradition into Action
          </p>
        </motion.div>

        {/* Navigation Links - Prominent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-4 pt-2"
        >
          <a
            href={TRUCE_INDEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Compliance Index
          </a>
          <span className="text-gray-400 text-2xl font-light">|</span>
          <a
            href="/portal"
            className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Truce Portal
          </a>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-4 pb-0"
        >
          <Countdown />
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm pt-2"
        >
          <a href="/co-sponsors" className="px-4 py-2 bg-blue-100 border border-blue-600/30 rounded-lg text-blue-700 hover:bg-blue-600/20 transition-colors">
            <span className="font-bold">166</span> UN Co-Sponsors
          </a>
          <div className="px-4 py-2 bg-pink-600/10 border border-pink-600/30 rounded-lg text-pink-700">
            Most <span className="font-bold">Gender-Balanced</span> Winter Games
          </div>
          <div className="px-4 py-2 bg-green-600/10 border border-green-600/30 rounded-lg text-green-700">
            Adopted by <span className="font-bold">Consensus</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
