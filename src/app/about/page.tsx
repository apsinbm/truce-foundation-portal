'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Previous Olympic Truce Award recipients
const PREVIOUS_AWARDEES = [
  { name: 'H.E. Kostas Karamanlis', title: 'Prime Minister', country: 'Greece' },
  { name: 'H.E. George Papandreou', title: 'Foreign Minister', country: 'Greece' },
  { name: 'Mitt Romney', title: 'President, Salt Lake Olympic Games', country: 'USA' },
  { name: 'H.E. Gianfranco Fini', title: 'Foreign Minister', country: 'Italy' },
  { name: 'Peter Ueberroth', title: 'President, US Olympic Committee', country: 'USA' },
  { name: 'H.E. Olusegun Obasanjo', title: 'President', country: 'Nigeria' },
  { name: 'H.E. Ellen Johnson-Sirleaf', title: 'President', country: 'Liberia' },
  { name: 'H.S.H. Prince Albert II', title: 'Sovereign Prince', country: 'Monaco' },
  { name: 'H.E. Lillian Boyce', title: 'Minister', country: 'Turks and Caicos' },
  { name: 'Juan Antonio Samaranch', title: 'President-Emeritus, IOC', country: 'Spain' },
  { name: 'H.E. Cai Mingzhao', title: 'Vice Minister', country: 'China' },
  { name: 'Irwin Belk', title: 'Co-founder, US Olympic Committee', country: 'USA' },
  { name: 'Richard C. Levin', title: 'President, Yale University', country: 'USA' },
  { name: 'Lord Michael Bates', title: 'Olympic Truce Advocate, House of Lords', country: 'United Kingdom' },
  { name: 'Mario Pescante', title: 'Vice President, IOC', country: 'Italy' },
  { name: 'Anita DeFrantz', title: 'Vice President, IOC', country: 'USA' },
  { name: 'Wilfried Lemke', title: 'Special Advisor on Sport for Peace, UN', country: 'Germany' },
  { name: 'Andrew Parsons', title: 'President, Brazilian Paralympics', country: 'Brazil' },
  { name: 'Carlos Henrique Schroder', title: 'General Director, Globo TV', country: 'Brazil' },
  { name: 'Admiral James G. Stavridis', title: 'Supreme Allied Commander-Europe, NATO', country: 'USA' },
  { name: 'Choi Moon-soon', title: 'Governor, Gangwon Province', country: 'Republic of Korea' },
  { name: 'Lee Hee-beom', title: 'President, PyeongChang Olympic Committee', country: 'Republic of Korea' },
  { name: 'Miroslav L. Lajcak', title: 'President, UN 72nd General Assembly', country: 'Slovakia' },
];

// Articles and publications
const PUBLICATIONS = [
  {
    title: 'Can the Olympics Help Us Understand Each Other?',
    author: 'Hugh Dugan',
    publication: 'Newsmax',
    date: 'July 30, 2024',
    description: 'Writing from Paris about the 2024 Olympics, Dugan introduces "Geolympics" — tracking the Olympic Truce\'s real-time effects on international relations.',
    url: 'https://www.newsmax.com/hughdugan/olympics-trucy-humanity/2024/07/30/id/1174522/',
    type: 'article',
  },
  {
    title: 'May Olympic Truce Day Align our Troubled World Through Sport',
    author: 'Hugh Dugan',
    publication: 'Newsmax',
    date: 'February 29, 2024',
    description: 'A proposal to establish February 29 (leap day) as "Olympic Truce Day" to promote global peace through athletics.',
    url: 'https://www.newsmax.com/hughdugan/games-olympians-truce/2024/02/29/id/1155380/',
    type: 'article',
  },
  {
    title: 'In Ethiopia, an Unfinished Peace Risks Betraying the People of Tigray',
    author: 'Sarah Miller & Abdullahi Boru Halakhe',
    publication: 'Just Security',
    date: 'December 3, 2025',
    description: 'Examining the fragile state of the Pretoria Agreement, with 600,000 civilians killed and 760,000+ internally displaced.',
    url: 'https://www.justsecurity.org/125778/ethiopia-unfinished-peace-tigray-region/',
    type: 'featured',
  },
  {
    title: 'Maritime Intelligence Brief: Expanding Risks in the Red Sea and Black Sea',
    author: 'World Ports Organization',
    publication: 'World Ports Organization',
    date: '2024',
    description: 'Analysis of maritime threats affecting global shipping routes, including Houthi attacks in the Red Sea and Russian naval operations in the Black Sea.',
    url: 'https://www.worldports.org/maritime-intelligence-brief-expanding-risks-in-the-red-sea-and-black-sea/',
    type: 'reference',
  },
  {
    title: 'Landmine Crisis: Casualties Rising as Funding Falls',
    author: 'UN News / Mine Monitor',
    publication: 'UN News',
    date: 'December 2025',
    description: 'Mine action workers warn that the deadly legacy of conflicts continues to kill and maim civilians in Gaza, Sudan, and beyond while facing significant funding cuts.',
    url: 'https://us15.campaign-archive.com/?e=553d9831d6&u=372753f560ef60c400f1a4f3f&id=e1c759d235',
    type: 'reference',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              About the Truce Foundation
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Transforming the Olympic Truce tradition into action for global peace
            </p>
          </motion.div>
        </div>
      </section>

      {/* Foundation Flyer Download */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.a
            href="/documents/truce-foundation-flyer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30 hover:border-blue-400/50 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center text-3xl">
                📄
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  Truce Foundation Flyer
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Download our official flyer featuring the Olympic Truce Award, previous awardees, and foundation information
                </p>
              </div>
              <div className="text-blue-400 group-hover:translate-x-1 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Featured Analysis</h2>
            <p className="text-slate-400">Critical perspectives on peace and conflict</p>
          </motion.div>

          {PUBLICATIONS.filter(p => p.type === 'featured').map((pub, index) => (
            <motion.a
              key={pub.url}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="block p-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-red-500/10 border border-amber-500/30 hover:border-amber-400/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                  🔥
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs bg-amber-500/20 text-amber-400 rounded">Featured</span>
                    <span className="text-xs text-slate-500">{pub.publication} • {pub.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-2">{pub.description}</p>
                  <p className="text-xs text-slate-500">By {pub.author}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Publications by Hugh Dugan */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Publications by Hugh Dugan</h2>
            <p className="text-slate-400">Founder's writings on the Olympic Truce</p>
          </motion.div>

          <div className="space-y-4">
            {PUBLICATIONS.filter(p => p.author === 'Hugh Dugan').map((pub, index) => (
              <motion.a
                key={pub.url}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="block p-5 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                    📰
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-slate-500">{pub.publication} • {pub.date}</span>
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-1">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-slate-400">{pub.description}</p>
                  </div>
                  <div className="text-slate-500 group-hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Reference Materials */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Reference Materials</h2>
            <p className="text-slate-400">Key reports and analysis on global conflicts</p>
          </motion.div>

          <div className="space-y-4">
            {PUBLICATIONS.filter(p => p.type === 'reference').map((pub, index) => (
              <motion.a
                key={pub.url}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="block p-5 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                    📊
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-slate-500">{pub.publication} • {pub.date}</span>
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-slate-400">{pub.description}</p>
                  </div>
                  <div className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Awardees */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Olympic Truce Award Recipients</h2>
            <p className="text-slate-400">Honoring leaders who champion peace through sport</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PREVIOUS_AWARDEES.map((awardee, index) => (
              <motion.div
                key={awardee.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/30"
              >
                <p className="font-medium text-white text-sm">{awardee.name}</p>
                <p className="text-xs text-slate-400">{awardee.title}</p>
                <p className="text-xs text-slate-500">{awardee.country}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Truce Sculpture */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-slate-900/50 border border-purple-500/30 text-center"
          >
            <h2 className="text-xl font-bold text-white mb-4">The Olympic Truce Sculpture</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The Foundation's monument "Olympic Truce" by Rosa Serra (Spain, 2001) stands at the
              Olympic Museum in Lausanne, Switzerland — a permanent symbol of the world's oldest
              peace tradition.
            </p>
            <p className="text-sm text-slate-500">
              Olympic Museum, Lausanne
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 text-center"
          >
            <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
            <div className="space-y-2 text-slate-400">
              <p className="font-medium text-white">Truce Foundation</p>
              <p>451 Seven Ponds Towd Road</p>
              <p>Water Mill, NY 11976 USA</p>
              <p className="pt-2">
                <a href="tel:+12123806975" className="text-blue-400 hover:text-blue-300">
                  +1 (212) 380-6975
                </a>
              </p>
              <p>
                <a href="mailto:Hugh.Dugan@TruceFoundation.world" className="text-blue-400 hover:text-blue-300">
                  Hugh.Dugan@TruceFoundation.world
                </a>
              </p>
              <p>
                <a href="https://www.TruceFoundation.world" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  www.TruceFoundation.world
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaborating Organizations */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Collaborating Organizations</h2>
            <p className="text-slate-400">Partners advancing the Olympic Truce mission</p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <a
              href="https://www.bfrv.it"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src="/logos/partners/house-of-sport-volunteers.jpeg"
                alt="The House of Sport Volunteers"
                className="h-14 sm:h-16 w-auto object-contain bg-white rounded-lg px-3 py-2"
              />
            </a>
            <a
              href="https://www.bciu.org"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src="/logos/partners/bciu.jpeg"
                alt="BCIU - Business Council for International Understanding"
                className="h-14 sm:h-16 w-auto object-contain bg-white rounded-lg px-3 py-2"
              />
            </a>
            <a
              href="https://www.savethedream.org"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src="/logos/partners/save-the-dream.jpeg"
                alt="Save the Dream"
                className="h-14 sm:h-16 w-auto object-contain bg-white rounded-lg px-3 py-2"
              />
            </a>
            <a
              href="https://www.thatcherandco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src="/logos/partners/thatcher-co.jpeg"
                alt="Thatcher+Co."
                className="h-14 sm:h-16 w-auto object-contain bg-white rounded-lg px-3 py-2"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/history"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Olympic Truce History
              </h3>
              <p className="text-sm text-slate-400 mt-1">From ancient Greece to today</p>
            </Link>
            <Link
              href="/co-sponsors"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                166 Co-Sponsors
              </h3>
              <p className="text-sm text-slate-400 mt-1">Milano-Cortina 2026 resolution</p>
            </Link>
            <Link
              href="/portal"
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                Truce Portal
              </h3>
              <p className="text-sm text-slate-400 mt-1">All resources and tools</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
