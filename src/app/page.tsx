'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import SubSiteCard from '@/components/SubSiteCard';
import ExpertQuotes from '@/components/ExpertQuotes';
import AncientWisdom from '@/components/AncientWisdom';
import Footer from '@/components/Footer';
import { SUB_SITES } from '@/lib/constants';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <Hero />

      {/* Sub-Sites Grid Section */}
      <section className="relative py-16 sm:py-24 px-4">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Discover Our Resources
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Access real-time compliance monitoring, advocacy resources, and connect with the global truce community.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {SUB_SITES.map((site, index) => (
              <SubSiteCard key={site.id} site={site} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Expert Quotes Section */}
      <ExpertQuotes />

      {/* Ancient Wisdom Section */}
      <AncientWisdom />

      {/* Mission Statement Section */}
      <section className="relative py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 sm:p-12"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The Olympic Truce tradition dates back to ancient Greece, when warring states would
              cease hostilities to allow athletes safe passage to the Olympic Games. Today, the
              Truce Foundation works to transform this powerful symbol into measurable action for peace.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Through real-time monitoring, independent verification, and global engagement,
              we hold nations accountable to their commitment to peace during the Olympic period.
            </p>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
            >
              <span>Learn More About Us</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
