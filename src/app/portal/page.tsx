'use client';

import { motion } from 'framer-motion';
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
            {SUB_SITES.map((site, index) => (
              <SubSiteCard key={site.id} site={site} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
