'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Partner {
  id: string;
  name: string;
  description: string;
  url: string;
  category: 'founding' | 'validation' | 'potential';
  logo?: string;
}

const PARTNERS: Partner[] = [
  {
    id: 'maa',
    name: 'Multilateral Accountability Associates',
    description: 'Strategic advisory firm specializing in international accountability mechanisms and multilateral cooperation frameworks. Designs the Truce Index methodology and serves as methodology gatekeeper.',
    url: 'https://www.multilateralaccountability.com',
    category: 'founding',
  },
  {
    id: 'icss',
    name: 'International Centre for Sport Security',
    description: 'Global leader in safeguarding sport through security, integrity, and major event risk management.',
    url: 'https://theicss.org',
    category: 'founding',
  },
  {
    id: 'savethedream',
    name: 'Save the Dream',
    description: 'International movement promoting the values of sport for development, peace, and the protection of youth.',
    url: 'https://savethedream.org',
    category: 'founding',
  },
  {
    id: 'bciu',
    name: 'Business Council for International Understanding',
    description: 'Bridging the gap between business and government through high-level dialogues and partnerships.',
    url: 'https://www.bciu.org',
    category: 'founding',
  },
  {
    id: 'setonhall',
    name: 'Seton Hall University',
    description: 'Independent academic validator through the Center for Sports Media, Center for UN and Global Governance Studies, and Sports Polling Institute.',
    url: 'https://www.shu.edu',
    category: 'validation',
  },
  {
    id: 'iotc',
    name: 'International Olympic Truce Centre',
    description: 'Official IOC-affiliated organization promoting the Olympic Truce tradition and values.',
    url: 'https://www.olympictruce.org',
    category: 'potential',
  },
  {
    id: 'woa',
    name: 'World Olympians Association',
    description: 'Global network of Olympic athletes working together to make a positive impact in the world.',
    url: 'https://www.olympians.org',
    category: 'potential',
    logo: '/woa-logo.png',
  },
  {
    id: 'peacesport',
    name: 'Peace and Sport',
    description: 'International organization dedicated to using sport as a tool for peace and social stability.',
    url: 'https://www.peace-sport.org',
    category: 'potential',
  },
];

const CATEGORY_CONFIG = {
  founding: {
    label: 'Founding Partners',
    description: 'Core organizations driving the Truce Foundation mission',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  validation: {
    label: 'Academic Validation Partner',
    description: 'Independent institution providing methodology validation and research integrity',
    color: 'from-purple-500/20 to-purple-600/10',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  potential: {
    label: 'Future Collaborations',
    description: 'Organizations we are in discussions with',
    color: 'from-amber-500/20 to-amber-600/10',
    border: 'border-amber-500/30',
    iconColor: 'text-amber-400',
  },
};

export default function PartnersPage() {
  const foundingPartners = PARTNERS.filter((p) => p.category === 'founding');
  const validationPartners = PARTNERS.filter((p) => p.category === 'validation');
  const potentialPartners = PARTNERS.filter((p) => p.category === 'potential');

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/tf-logo.png" alt="Truce Foundation" className="w-10 h-10 object-contain" />
            <span className="font-semibold text-white">Truce Foundation</span>
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Our Partners
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Building a global coalition for peace through the Olympic Truce
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Partners */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              {CATEGORY_CONFIG.founding.label}
            </h2>
            <p className="text-slate-400">
              {CATEGORY_CONFIG.founding.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {foundingPartners.map((partner, index) => (
              <motion.a
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`block p-6 rounded-2xl bg-gradient-to-br ${CATEGORY_CONFIG.founding.color} border ${CATEGORY_CONFIG.founding.border} hover:border-blue-400/50 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-3">
                      {partner.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-blue-400">
                      Visit website
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Validation Partner */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              {CATEGORY_CONFIG.validation.label}
            </h2>
            <p className="text-slate-400">
              {CATEGORY_CONFIG.validation.description}
            </p>
          </motion.div>

          <div className="max-w-2xl">
            {validationPartners.map((partner, index) => (
              <motion.a
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`block p-6 rounded-2xl bg-gradient-to-br ${CATEGORY_CONFIG.validation.color} border ${CATEGORY_CONFIG.validation.border} hover:border-purple-400/50 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-3">
                      {partner.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">Center for Sports Media</span>
                      <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">UN & Global Governance</span>
                      <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">Sports Polling Institute</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-purple-400">
                      Visit website
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Potential Partners */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              {CATEGORY_CONFIG.potential.label}
            </h2>
            <p className="text-slate-400">
              {CATEGORY_CONFIG.potential.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {potentialPartners.map((partner, index) => (
              <motion.a
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`block p-5 rounded-xl bg-gradient-to-br ${CATEGORY_CONFIG.potential.color} border ${CATEGORY_CONFIG.potential.border} hover:border-amber-400/50 transition-all duration-300`}
              >
                {partner.logo && (
                  <div className="mb-3 flex justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                )}
                <h3 className="text-md font-semibold text-white mb-2">
                  {partner.name}
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  {partner.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-amber-400">
                  Learn more
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Become a Partner
            </h2>
            <p className="text-slate-400 mb-6">
              Join us in promoting peace through the Olympic Truce. We welcome partnerships
              with NGOs, governments, academic institutions, and private sector organizations.
            </p>
            <a
              href="mailto:partnerships@trucefoundation.world"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
          </motion.div>
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
