'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';

interface Partner {
  id: string;
  name: string;
  description: string;
  url: string;
  category: 'founding' | 'technology' | 'validation' | 'potential' | 'friendship';
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
    id: 'apierion',
    name: 'Apierion',
    description: 'Global healthtech solutions company deploying secure, next-generation data infrastructure on the Avalanche blockchain. Powers the Truce Compliance Index with its Digital Medical Twin technology, securely presenting, validating, and charting anti-doping compliance while preserving athlete privacy and data sovereignty.',
    url: 'https://apnews.com/press-release/ein-presswire-newsmatics/apierion-and-the-truce-foundation-partner-to-protect-olympians-integrity-of-games-through-the-truce-compliance-index-9931aa37435337de08edf5efb6e57534',
    category: 'technology',
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
    url: 'https://olympictruce.org/en/homepage/',
    category: 'potential',
    logo: '/iotc-logo.png',
  },
  {
    id: 'woa',
    name: 'World Olympians Association',
    description: 'Global network of Olympic athletes working together to make a positive impact in the world. A long-standing friend in promoting peace through sport.',
    url: 'https://olympians.org',
    category: 'friendship',
    logo: '/woa-logo.png',
  },
];

const CATEGORY_CONFIG = {
  founding: {
    label: 'Founding Partners',
    description: 'Core organizations driving the Truce Foundation mission',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-600',
  },
  technology: {
    label: 'Technology Partner',
    description: 'Providing secure data infrastructure for the Truce Compliance Index',
    color: 'from-teal-500/20 to-teal-600/10',
    border: 'border-teal-500/30',
    iconColor: 'text-teal-600',
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
    iconColor: 'text-amber-800',
  },
  friendship: {
    label: 'Friendship Links',
    description: 'Organizations we have worked with over many years',
    color: 'from-green-500/20 to-green-600/10',
    border: 'border-green-500/30',
    iconColor: 'text-green-600',
  },
};

export default function PartnersPage() {
  const foundingPartners = PARTNERS.filter((p) => p.category === 'founding');
  const technologyPartners = PARTNERS.filter((p) => p.category === 'technology');
  const validationPartners = PARTNERS.filter((p) => p.category === 'validation');
  const potentialPartners = PARTNERS.filter((p) => p.category === 'potential');
  const friendshipPartners = PARTNERS.filter((p) => p.category === 'friendship');

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Our Partners
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {CATEGORY_CONFIG.founding.label}
            </h2>
            <p className="text-gray-600">
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
                  <div className="w-12 h-12 rounded-xl bg-gray-100/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {partner.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-blue-600">
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

      {/* Technology Partner */}
      <section className="py-12 px-4 bg-gray-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {CATEGORY_CONFIG.technology.label}
            </h2>
            <p className="text-gray-600">
              {CATEGORY_CONFIG.technology.description}
            </p>
          </motion.div>

          <div className="max-w-2xl">
            {technologyPartners.map((partner, index) => (
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
                className={`block p-6 rounded-2xl bg-gradient-to-br ${CATEGORY_CONFIG.technology.color} border ${CATEGORY_CONFIG.technology.border} hover:border-teal-400/50 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {partner.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 text-xs bg-teal-100 text-teal-800 border-teal-300 rounded-full">Digital Medical Twin</span>
                      <span className="px-2 py-1 text-xs bg-teal-100 text-teal-800 border-teal-300 rounded-full">Avalanche Blockchain</span>
                      <span className="px-2 py-1 text-xs bg-teal-100 text-teal-800 border-teal-300 rounded-full">Anti-Doping Compliance</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-teal-600">
                      Read announcement
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
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {CATEGORY_CONFIG.validation.label}
            </h2>
            <p className="text-gray-600">
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
                  <div className="w-12 h-12 rounded-xl bg-gray-100/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {partner.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 border-purple-300 rounded-full">Center for Sports Media</span>
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 border-purple-300 rounded-full">UN & Global Governance</span>
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 border-purple-300 rounded-full">Sports Polling Institute</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {CATEGORY_CONFIG.potential.label}
            </h2>
            <p className="text-gray-600">
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
                  <div className="mb-4 flex justify-center h-20">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                )}
                <h3 className="text-md font-semibold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-600 mb-3">
                  {partner.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-amber-800">
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

      {/* Friendship Links */}
      {friendshipPartners.length > 0 && (
        <section className="py-12 px-4 bg-gray-50/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {CATEGORY_CONFIG.friendship.label}
              </h2>
              <p className="text-gray-600">
                {CATEGORY_CONFIG.friendship.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {friendshipPartners.map((partner, index) => (
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
                  className={`block p-5 rounded-xl bg-gradient-to-br ${CATEGORY_CONFIG.friendship.color} border ${CATEGORY_CONFIG.friendship.border} hover:border-green-400/50 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    {partner.logo && (
                      <div className="w-16 h-16 rounded-xl bg-white/50 flex items-center justify-center flex-shrink-0 p-2">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {partner.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-green-600">
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
      )}

      {/* Become a Partner CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-100/50 to-gray-50/50 border border-gray-200/50"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Become a Partner
            </h2>
            <p className="text-gray-600 mb-6">
              Join us in promoting peace through the Olympic Truce. We welcome partnerships
              with NGOs, governments, academic institutions, and private sector organizations.
            </p>
            <a
              href="mailto:partnerships@trucefoundation.world"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-gray-900 font-medium rounded-xl transition-colors"
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
      <footer className="py-8 px-4 border-t border-gray-200/50">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Truce Foundation. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
