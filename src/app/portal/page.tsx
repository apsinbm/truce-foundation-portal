'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import SubSiteCard from '@/components/SubSiteCard';
import Footer from '@/components/Footer';
import { SUB_SITES } from '@/lib/constants';

export default function PortalHub() {
  // All sites are tier 1 (boxes), filter out hidden ones
  const allSites = SUB_SITES.filter(site => site.tier === 1 && !site.hidden);

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

      {/* All Cards Section */}
      <section className="relative pt-2 pb-16 px-4">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Cards Grid - 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {allSites.map((site, index) => (
              <SubSiteCard key={site.id} site={site} index={index} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
