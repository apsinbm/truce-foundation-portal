'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import SubSiteCard from '@/components/SubSiteCard';
import Footer from '@/components/Footer';
import { SUB_SITES } from '@/lib/constants';

export default function PortalHub() {
  // Split sites by tier
  const tier1Sites = SUB_SITES.filter(site => site.tier === 1);
  const tier2Sites = SUB_SITES.filter(site => site.tier === 2);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Truce Portal
            </h1>
            <p className="text-gray-600 text-lg">
              Your gateway to Olympic Truce resources, monitoring, and engagement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Cards Section (Tier 1) */}
      <section className="relative pt-2 pb-8 px-4">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Featured Cards Grid - 4x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Co-Sponsors Card (always first) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
            >
              <Link
                href="/co-sponsors"
                className="glass-card p-5 relative overflow-hidden group transition-all duration-300 cursor-pointer hover:border-green-600/50 hover:shadow-lg hover:shadow-green-600/10 block h-full"
              >
                {/* Status badge */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-medium bg-green-600/20 text-green-700 border border-green-600/30">
                  Live
                </div>

                {/* Icon */}
                <div className="text-3xl mb-3">🌍</div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 mb-1.5 group-hover:text-green-700 transition-colors">
                  166 UN Member States
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2">
                  Co-sponsors of Milano-Cortina 2026 Olympic Truce resolution A/80/L.10
                </p>

                {/* Arrow indicator */}
                <div className="mt-3 flex items-center gap-2 text-green-600 text-xs font-medium">
                  <span>View Full List</span>
                  <svg
                    className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>

            {/* Tier 1 Featured Cards */}
            {tier1Sites.map((site, index) => (
              <SubSiteCard key={site.id} site={site} index={index + 1} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section (Tier 2) */}
      <section className="relative pb-16 px-4">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="border-t border-gray-200 pt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-x-6 gap-y-3"
            >
              {tier2Sites.map((site) => (
                <Link
                  key={site.id}
                  href={site.href}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
                >
                  <span className="text-base">{site.icon}</span>
                  <span className="group-hover:underline underline-offset-2">{site.title}</span>
                  {site.external && (
                    <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
