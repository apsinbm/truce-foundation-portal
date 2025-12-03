'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';

interface ToolkitItem {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'image' | 'social' | 'video' | 'external';
  category: 'infographic' | 'policy' | 'social' | 'template';
  downloadUrl?: string;
  externalUrl?: string;
  comingSoon?: boolean;
  highlight?: boolean;
}

const TOOLKIT_ITEMS: ToolkitItem[] = [
  // Infographics
  {
    id: 'what-is-truce',
    title: 'What is the Olympic Truce?',
    description: 'Visual explainer of the Olympic Truce history, from ancient Greece to today',
    type: 'image',
    category: 'infographic',
    comingSoon: true,
  },
  {
    id: 'truce-timeline',
    title: 'Olympic Truce Timeline',
    description: 'Key dates and milestones for Milano-Cortina 2026 Truce Window',
    type: 'image',
    category: 'infographic',
    comingSoon: true,
  },
  {
    id: 'compliance-categories',
    title: '5 Compliance Categories',
    description: 'Visual breakdown of how the Truce Index measures compliance',
    type: 'image',
    category: 'infographic',
    comingSoon: true,
  },
  // Policy Briefs - UN Resolutions
  {
    id: 'policy-brief-un-2026',
    title: 'UN Resolution A/80/L.10 (2025)',
    description: 'Official Olympic Truce resolution for Milano-Cortina 2026 - 165 co-sponsors, adopted by consensus',
    type: 'pdf',
    category: 'policy',
    downloadUrl: '/downloads/A_80_L.10-EN.pdf',
    comingSoon: false,
    highlight: true,
  },
  {
    id: 'policy-brief-un-2024',
    title: 'UN Resolution A/RES/78/10 (2023)',
    description: 'Olympic Truce resolution for Paris 2024 - adopted 118-0-2',
    type: 'external',
    category: 'policy',
    externalUrl: 'https://docs.un.org/en/A/RES/78/10',
    comingSoon: false,
  },
  {
    id: 'policy-brief-original',
    title: 'UN Resolution A/RES/48/11 (1993)',
    description: 'The foundational resolution that revived the ancient ekecheiria tradition',
    type: 'external',
    category: 'policy',
    externalUrl: 'https://digitallibrary.un.org/record/197368',
    comingSoon: false,
  },
  {
    id: 'policy-sdgs',
    title: 'UN 2030 Agenda A/RES/70/1',
    description: 'The 17 SDGs - Olympic Truce supports SDG 16 (peace) and SDG 17 (partnerships)',
    type: 'external',
    category: 'policy',
    externalUrl: 'https://www.un.org/en/development/desa/population/migration/generalassembly/docs/globalcompact/A_RES_70_1_E.pdf',
    comingSoon: false,
  },
  {
    id: 'policy-millennium',
    title: 'Millennium Declaration A/RES/55/2',
    description: 'Landmark 2000 declaration on peace, development, and human rights',
    type: 'external',
    category: 'policy',
    externalUrl: 'https://www.un.org/en/development/desa/population/migration/generalassembly/docs/globalcompact/A_RES_55_2.pdf',
    comingSoon: false,
  },
  {
    id: 'policy-brief-stakeholders',
    title: 'Stakeholder Guide',
    description: 'How governments, NGOs, and media can support the Olympic Truce',
    type: 'pdf',
    category: 'policy',
    comingSoon: true,
  },
  // Social Media Templates
  {
    id: 'social-countdown',
    title: 'Countdown Graphics',
    description: 'Share the countdown to the Truce Window on social media',
    type: 'social',
    category: 'social',
    comingSoon: true,
  },
  {
    id: 'social-share-card',
    title: 'Truce Share Cards',
    description: 'Branded graphics for Twitter, Instagram, and LinkedIn',
    type: 'social',
    category: 'social',
    comingSoon: true,
  },
  {
    id: 'social-hashtag-guide',
    title: 'Hashtag Guide',
    description: 'Official hashtags and messaging guidelines for social campaigns',
    type: 'pdf',
    category: 'social',
    comingSoon: true,
  },
  // Templates
  {
    id: 'template-press-release',
    title: 'Press Release Template',
    description: 'Customizable template for announcing Truce-related initiatives',
    type: 'pdf',
    category: 'template',
    comingSoon: true,
  },
  {
    id: 'template-op-ed',
    title: 'Op-Ed Framework',
    description: 'Structure and talking points for opinion pieces on the Olympic Truce',
    type: 'pdf',
    category: 'template',
    comingSoon: true,
  },
];

const CATEGORIES = [
  { id: 'infographic', label: 'Infographics', icon: '📊', description: 'Visual explainers and data visualizations' },
  { id: 'policy', label: 'Policy Briefs', icon: '📋', description: 'In-depth analysis and recommendations' },
  { id: 'social', label: 'Social Media', icon: '📱', description: 'Ready-to-share graphics and templates' },
  { id: 'template', label: 'Templates', icon: '📝', description: 'Customizable documents for advocacy' },
];

const TYPE_ICONS = {
  pdf: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  image: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  social: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  ),
  video: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  external: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
};

export default function AdvocacyPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Advocacy Toolkit
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Resources to champion the Olympic Truce in your community, organization, and media
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 text-center"
              >
                <span className="text-3xl mb-2 block">{cat.icon}</span>
                <h3 className="font-semibold text-white text-sm">{cat.label}</h3>
                <p className="text-xs text-slate-500 mt-1">{cat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit Items by Category */}
      {CATEGORIES.map((category) => {
        const items = TOOLKIT_ITEMS.filter((item) => item.category === category.id);
        return (
          <section key={category.id} className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="text-2xl font-bold text-white">{category.label}</h2>
                </div>
                <p className="text-slate-400">{category.description}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-5 rounded-xl border transition-all ${
                      item.comingSoon
                        ? 'bg-slate-900/30 border-slate-700/30'
                        : item.highlight
                        ? 'bg-blue-500/10 border-blue-500/30 hover:border-blue-400/50'
                        : 'bg-slate-900/50 border-slate-700/50 hover:border-blue-500/50 cursor-pointer'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        item.comingSoon
                          ? 'bg-slate-800/50 text-slate-500'
                          : item.highlight
                          ? 'bg-blue-500/30 text-blue-300'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {TYPE_ICONS[item.type]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className={`font-semibold ${item.comingSoon ? 'text-slate-400' : 'text-white'}`}>
                            {item.title}
                          </h3>
                          {item.comingSoon && (
                            <span className="px-2 py-0.5 text-xs bg-slate-700/50 text-slate-400 rounded-full flex-shrink-0">
                              Coming Soon
                            </span>
                          )}
                          {item.highlight && (
                            <span className="px-2 py-0.5 text-xs bg-blue-500/30 text-blue-300 rounded-full flex-shrink-0">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                        <div className="flex items-center gap-3 mt-2">
                          {!item.comingSoon && item.downloadUrl && (
                            <a
                              href={item.downloadUrl}
                              className="inline-flex items-center gap-1 text-xs text-green-400 hover:text-green-300"
                            >
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              Download PDF
                            </a>
                          )}
                          {!item.comingSoon && item.externalUrl && (
                            <a
                              href={item.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300"
                            >
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              View at UN
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Request Custom Resources */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Custom Resources?
            </h2>
            <p className="text-slate-400 mb-6">
              We can create tailored materials for your organization, event, or campaign.
              Contact us to discuss your advocacy needs.
            </p>
            <a
              href="mailto:advocacy@trucefoundation.world"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Request Resources
            </a>
          </motion.div>
        </div>
      </section>

      {/* Links */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/methodology"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Index Methodology
              </h3>
              <p className="text-sm text-slate-400 mt-1">Learn how compliance is measured</p>
            </Link>
            <Link
              href="/partners"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Our Partners
              </h3>
              <p className="text-sm text-slate-400 mt-1">Organizations supporting the Truce</p>
            </Link>
            <a
              href="https://truce-index.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Live Index
              </h3>
              <p className="text-sm text-slate-400 mt-1">View real-time compliance data</p>
            </a>
          </div>
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
