'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';

// Key statistics from A/79/289
const KEY_STATISTICS = [
  {
    stat: '37%',
    label: 'of global homicides are youth homicides',
    source: 'WHO via A/79/289',
    icon: '⚠️',
  },
  {
    stat: '1 in 3',
    label: 'adults globally are physically inactive',
    source: 'WHO 2024',
    icon: '🏃',
  },
  {
    stat: '$10B',
    label: 'pledged for community sport infrastructure by 2030',
    source: 'Coalition for Sustainable Development through Sport',
    icon: '🏗️',
  },
  {
    stat: '$650M',
    label: 'IOC Olympic Solidarity commitment (2025-2028)',
    source: 'International Olympic Committee',
    icon: '🏅',
  },
  {
    stat: '31,000+',
    label: 'young people trained through UNODC Line Up, Live Up',
    source: 'UNODC',
    icon: '👥',
  },
  {
    stat: '3x',
    label: 'return on investment for sport-based social programs',
    source: 'UNESCO Social Impact of Sport Report 2024',
    icon: '📈',
  },
];

// Five priority themes from the report
const FIVE_THEMES = [
  {
    id: 'social-inclusion',
    title: 'Social Inclusion',
    icon: '🤝',
    sdgs: [3, 4, 10],
    description: 'Sport reduces barriers for women, girls, youth, older persons, Indigenous Peoples, and persons with disabilities.',
    keyFinding: 'Progress in SDP policies strengthening inclusion, but challenges remain: poor accessibility, lack of adapted equipment, insufficient trained staff.',
  },
  {
    id: 'physical-activity',
    title: 'Physical Activity & Education',
    icon: '🏃',
    sdgs: [3, 4, 17],
    description: 'Prevents non-communicable diseases and promotes health across all age groups through quality physical education.',
    keyFinding: '1 in 3 adults inactive globally (WHO 2024). Two-thirds of secondary students lack minimum PE hours.',
  },
  {
    id: 'gender-equality',
    title: 'Gender Equality',
    icon: '⚖️',
    sdgs: [5],
    description: 'Advancing women\'s leadership, equal prize money, and safe sport environments.',
    keyFinding: '2024 Olympics achieved gender parity among athletes. FIFA Women\'s World Cup 2023 prize: $150M (up 300% from 2019).',
  },
  {
    id: 'peacebuilding',
    title: 'Peacebuilding & Crime Prevention',
    icon: '🕊️',
    sdgs: [16],
    description: 'Sport addresses youth violence through fair play, preventing violent extremism, and fostering safer communities.',
    keyFinding: 'Youth homicides = 37% of global homicides. Sport-based life skills training strengthens resilience to violence, crime, and drug use.',
  },
  {
    id: 'climate',
    title: 'Sustainable Communities & Climate',
    icon: '🌍',
    sdgs: [11, 12, 13],
    description: 'Sport organizations influence millions of fans to take climate action through demonstration and leadership.',
    keyFinding: '83% of sports fans want their teams to lead environmental initiatives. 260+ signatories in Sports for Climate Action Framework.',
  },
];

// Donor engagement points
const DONOR_ENGAGEMENT_POINTS = [
  {
    title: 'High Visibility, Low Cost',
    description: 'Sport is a proven high-impact, low-cost tool for global peace diplomacy and sustainable development.',
    icon: '🎯',
  },
  {
    title: 'Lasting Legacy',
    description: 'Contributions tied to enduring symbols: Olympic Truce, Milano-Cortina 2026, community resilience programs.',
    icon: '🏛️',
  },
  {
    title: 'Recognition',
    description: 'Branded donor credits, certificates, coalition endorsements, and participation in milestone events.',
    icon: '🏆',
  },
  {
    title: 'Multi-Stakeholder Impact',
    description: 'Join governments, NGOs, athletes, and private sector in coordinated action.',
    icon: '🤝',
  },
  {
    title: 'Measurable Outcomes',
    description: 'Use monitoring frameworks like the Truce Index to track and report concrete results.',
    icon: '📊',
  },
];

// Calls to action
const CALLS_TO_ACTION = [
  {
    action: 'Pledge Support',
    description: 'Commit resources to UN-aligned sport initiatives and the Olympic Truce.',
    cta: 'Contact Us',
    href: '/partners',
  },
  {
    action: 'Amplify Impact',
    description: 'Sponsor community-level programs that embody SDG values.',
    cta: 'View Programs',
    href: '/methodology',
  },
  {
    action: 'Join Coalitions',
    description: 'Partner with UN agencies, NGOs, and foundations to scale outreach.',
    cta: 'Our Partners',
    href: '/partners',
  },
  {
    action: 'Celebrate Milestones',
    description: 'Link donor recognition to Milano-Cortina 2026 and US 250th anniversary.',
    cta: 'Learn More',
    href: '/history',
  },
];

// Key recommendations from the report
const KEY_RECOMMENDATIONS = [
  'Integrate sport into national development plans and SDG strategies',
  'Expand access to physical activity and community programs, especially for youth and marginalized groups',
  'Promote gender equality by supporting women\'s leadership in sport',
  'Leverage sport for peacebuilding, crime prevention, and post-conflict recovery',
  'Align sport initiatives with climate action, including sustainable infrastructure',
  'Mobilize resources to strengthen UN secretariat capacity for sport coordination',
];

export default function BriefingSheetPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-b from-blue-900/50 to-gray-50 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-6">
              <span>📋</span>
              <span>Donor & Coalition Engagement</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sport for Development & Peace
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">
              Briefing Sheet: UN Secretary-General Report A/79/289
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key findings, donor engagement points, and calls-to-action from the 2024 UN report
              on sport as a driver of peace and sustainable development.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Executive Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">📌</span>
            Executive Summary
          </h2>
          <div className="bg-gray-50/50 border border-gray-200 rounded-xl p-6">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-green-800 mt-1">✓</span>
                <span><strong className="text-gray-900">Sport is a cross-cutting enabler</strong> of the Sustainable Development Goals (SDGs).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-800 mt-1">✓</span>
                <span><strong className="text-gray-900">Five priority areas:</strong> social inclusion, physical activity, gender equality, peacebuilding/crime prevention, and climate action.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-800 mt-1">✓</span>
                <span><strong className="text-gray-900">Critical finding:</strong> Youth homicides account for 37% of global homicides—sport can address this through life skills training and community programs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-800 mt-1">✓</span>
                <span><strong className="text-gray-900">Calls for stronger partnerships</strong> between governments, civil society, and the private sector to maximize impact.</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Key Statistics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">📊</span>
            Key Statistics
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {KEY_STATISTICS.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="bg-gray-50/50 border border-gray-200 rounded-xl p-6 text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-1">{item.stat}</div>
                <div className="text-gray-600 text-sm mb-2">{item.label}</div>
                <div className="text-xs text-gray-500">{item.source}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Five Priority Themes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            Five Priority Themes
          </h2>
          <div className="space-y-4">
            {FIVE_THEMES.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="bg-gray-50/50 border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{theme.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{theme.title}</h3>
                      <div className="flex gap-1">
                        {theme.sdgs.map(sdg => (
                          <span
                            key={sdg}
                            className="px-2 py-0.5 bg-blue-100 text-blue-800 border-blue-300 text-xs rounded"
                          >
                            SDG {sdg}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">{theme.description}</p>
                    <p className="text-sm text-amber-700 bg-amber-100 px-3 py-2 rounded-lg">
                      <strong>Key Finding:</strong> {theme.keyFinding}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Youth Violence Focus Box */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-red-500">
              <span className="text-3xl">⚠️</span>
              Focus: Sport Addressing Youth Violence
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">The Problem</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Youth violence results in numerous deaths, injuries, and disabilities</li>
                  <li>• <strong className="text-red-500">Youth homicides account for 37%</strong> of global homicides annually</li>
                  <li>• Violence affects victims, families, and entire communities</li>
                  <li>• Often starts with hate speech and escalates to violent extremism</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How Sport Helps</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Promotes fair play, teamwork, and conflict resolution</li>
                  <li>• Prevents violent extremism through community engagement</li>
                  <li>• Creates safe environments that protect vulnerable youth</li>
                  <li>• Life skills training: communication, critical thinking, problem-solving</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50/50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">UNODC Line Up, Live Up Program:</strong> 43 capacity-building events,
                1,200+ coaches trained, 31,000+ young people reached in school and community settings—strengthening
                resilience to violence, crime, and drug use.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Key Recommendations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">📋</span>
            Key Recommendations
          </h2>
          <div className="bg-gray-50/50 border border-gray-200 rounded-xl p-6">
            <ol className="space-y-3">
              {KEY_RECOMMENDATIONS.map((rec, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 border-blue-300 rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span>{rec}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.section>

        {/* Donor Engagement Points */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">💼</span>
            Donor & Coalition Engagement Points
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DONOR_ENGAGEMENT_POINTS.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-5"
              >
                <div className="text-2xl mb-2">{point.icon}</div>
                <h3 className="font-semibold text-green-500 mb-2">{point.title}</h3>
                <p className="text-sm text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Calls to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🚀</span>
            Suggested Calls-to-Action
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {CALLS_TO_ACTION.map((cta, index) => (
              <motion.div
                key={cta.action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="bg-gray-50/50 border border-gray-200 rounded-xl p-6 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{cta.action}</h3>
                  <p className="text-sm text-gray-600">{cta.description}</p>
                </div>
                <Link
                  href={cta.href}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-gray-900 text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
                >
                  {cta.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Deployment Format */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">📦</span>
            Deployment Format
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50/50 border border-gray-200 rounded-xl p-5 text-center">
              <div className="text-3xl mb-3">📄</div>
              <h3 className="font-semibold mb-2">One-Page Briefing</h3>
              <p className="text-sm text-gray-600">Quick donor review format with key stats and CTAs</p>
            </div>
            <div className="bg-gray-50/50 border border-gray-200 rounded-xl p-5 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold mb-2">Infographic Overlays</h3>
              <p className="text-sm text-gray-600">Visual mapping of sport's contribution to SDGs</p>
            </div>
            <div className="bg-gray-50/50 border border-gray-200 rounded-xl p-5 text-center">
              <div className="text-3xl mb-3">📁</div>
              <h3 className="font-semibold mb-2">Modular Inserts</h3>
              <p className="text-sm text-gray-600">Endorsement letters, pledge forms, recognition templates</p>
            </div>
          </div>
        </motion.section>

        {/* Source Documents */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">📚</span>
            Source Documents
          </h2>
          <div className="bg-gray-50/50 border border-gray-200 rounded-xl p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-blue-600">📄</span>
                <div>
                  <a
                    href="https://documents.un.org/doc/undoc/gen/n24/232/53/pdf/n2423253.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-400 underline"
                  >
                    A/79/289 - Full Report
                  </a>
                  <span className="text-gray-600 ml-2">UN Secretary-General's Report on Sport for Development and Peace (2024)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600">📄</span>
                <div>
                  <a
                    href="https://social.desa.un.org/sites/default/files/inline-files/Secretary-General%27s%20Report%20Presentation%20-%20Group%20of%20Friends%20%281%29.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-400 underline"
                  >
                    Presentation Slides
                  </a>
                  <span className="text-gray-600 ml-2">Secretary-General's Report Presentation to Group of Friends</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600">📄</span>
                <div>
                  <a
                    href="https://social.desa.un.org/issues/sport-for-development-and-peace/general-assembly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-400 underline"
                  >
                    UN DESA Sport for Development and Peace
                  </a>
                  <span className="text-gray-600 ml-2">Full menu of reports, resolutions, and resources</span>
                </div>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center py-12 border-t border-gray-200"
        >
          <p className="text-gray-600 mb-6">
            Ready to support the Olympic Truce and sport for development?
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/partners"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-gray-900 font-medium rounded-lg transition-colors"
            >
              Become a Partner
            </Link>
            <Link
              href="/advocacy"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition-colors"
            >
              Advocacy Toolkit
            </Link>
            <Link
              href="/"
              className="px-6 py-3 border border-gray-400 hover:border-gray-500 text-gray-600 font-medium rounded-lg transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
