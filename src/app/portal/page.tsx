'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import SubSiteCard from '@/components/SubSiteCard';
import Footer from '@/components/Footer';
import { SUB_SITES } from '@/lib/constants';

export default function PortalHub() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Truce Portal
            </h1>
            <p className="text-slate-400 text-lg">
              Your gateway to Olympic Truce resources, monitoring, and engagement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sub-Sites Grid Section */}
      <section className="relative pt-4 pb-16 sm:pb-24 px-4">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Co-Sponsors Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
            >
              <Link
                href="/co-sponsors"
                className="glass-card p-6 relative overflow-hidden group transition-all duration-300 cursor-pointer hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 block h-full"
              >
                {/* Status badge */}
                <div className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                  Live
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">🌍</div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  166 UN Member States
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 line-clamp-2">
                  Co-sponsors of Milano-Cortina 2026 Olympic Truce resolution A/80/L.10
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center gap-2 text-green-400 text-sm font-medium">
                  <span>View Full List</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>

            {SUB_SITES.map((site, index) => (
              <SubSiteCard key={site.id} site={site} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
