'use client';

import { motion } from 'framer-motion';
import Countdown from './Countdown';
import { TRUCE_INDEX_URL } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Blue glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Official Truce Foundation Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <img
            src="/truce-foundation-logo.jpg"
            alt="Truce Foundation"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain drop-shadow-2xl rounded-full"
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">TRUCE</span>
            <span className="gradient-text ml-3">FOUNDATION</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light">
            Olympic Truce — Transforming Tradition into Action
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-8 pb-0"
        >
          <Countdown />
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm -mt-1"
        >
          <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300">
            <span className="font-bold">165</span> UN Co-Sponsors
          </div>
          <div className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-lg text-pink-300">
            Most <span className="font-bold">Gender-Balanced</span> Winter Games
          </div>
          <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-300">
            Adopted by <span className="font-bold">Consensus</span>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-6 sm:gap-8 text-base sm:text-lg mt-8"
        >
          <a
            href={TRUCE_INDEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors duration-200"
          >
            Compliance Index
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="/portal"
            className="text-slate-300 hover:text-white transition-colors duration-200"
          >
            Truce Portal
          </a>
        </motion.div>
      </div>
    </section>
  );
}
