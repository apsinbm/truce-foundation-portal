'use client';

import { motion } from 'framer-motion';
import { TRUCE_INDEX_URL } from '@/lib/constants';
import Header from '@/components/Header';

// Coverage items with descriptions
interface CoverageItem {
  source: string;
  title: string;
  date: string;
  url: string;
  type: 'official' | 'media' | 'analysis';
  description: string;
}

interface CoverageSection {
  title: string;
  dateRange: string;
  items: CoverageItem[];
}

const COVERAGE_SECTIONS: CoverageSection[] = [
  // === PHASE 3 ===
  {
    title: 'Middle Eastern Military Escalation Breaches the Olympic Truce',
    dateRange: 'February 27 \u2013 March 3, 2026',
    items: [
      {
        source: 'Olympics.com',
        title: 'IOC statement on athletes\u2019 safe passage',
        date: '2026-03-03',
        url: 'https://www.olympics.com/ioc/news/ioc-statement-on-athletes-safe-passage',
        type: 'official',
        description: 'The IOC reaffirmed its commitment to the \u201cneutrality principle,\u201d stating that the primary goal of the UN Olympic Truce Resolution is to guarantee the safe travel and peaceful competition of all qualified athletes, regardless of their government\u2019s actions.',
      },
      {
        source: 'Inside The Games',
        title: 'IOC silent on Olympic Truce amid Middle East escalation',
        date: '2026-03-03',
        url: 'https://www.insidethegames.biz/articles/ioc-silent-olympic-truce-middle-east-escalation',
        type: 'analysis',
        description: 'The IOC faces diplomatic scrutiny for failing to formally condemn the Middle East military strikes during the Truce period. Media outlets contrast this silence with the IOC\u2019s swift condemnation of Russia when it breached the truce by invading Ukraine during the 2022 Beijing Games.',
      },
      {
        source: 'Inside The Games',
        title: 'Italy\u2019s sport chiefs condemn Iran strikes',
        date: '2026-03-03',
        url: 'https://www.insidethegames.biz/articles/italys-olympic-chiefs-condemn-iran-strikes',
        type: 'media',
        description: 'CONI President Luciano Buonfiglio expressed deep frustration over the breach of the Olympic Truce. Speaking ahead of the Paralympic Opening Ceremony in Verona, Italian sporting officials lamented the recurring global disrespect for the UN-sanctioned peace period.',
      },
      {
        source: 'Sport & Politics',
        title: '\u201cConflict in the Middle East,\u201d \u201cthe situation\u201d: the shameful Olympic silence',
        date: '2026-03-02',
        url: 'https://www.sportandpolitics.de/conflict-in-the-middle-east-the-situation-shameful-olympic-silence/',
        type: 'analysis',
        description: 'Critical sports journalism piece examining the lack of public condemnation from international sporting bodies regarding the breach of the Olympic Truce, highlighting the disparity in response depending on the geopolitical power of the nations involved.',
      },
      {
        source: 'NPR',
        title: 'Mideast clashes breach Olympic truce as athletes gather for Winter Paralympic Games',
        date: '2026-03-01',
        url: 'https://newsfeed.wtjx.org/2026-03-01/mideast-clashes-breach-olympic-truce-as-athletes-gather-for-winter-paralympic-games',
        type: 'media',
        description: 'Airstrikes involving Israel, the United States, and Iran shattered the Olympic Truce ahead of the Winter Paralympic Games. The conflict disrupted international air traffic, stranding families of para-athletes attempting to travel through Middle East transit hubs.',
      },
      {
        source: 'Devdiscourse',
        title: 'Global Sporting Events Thrown Into Chaos Amid Middle East Tensions',
        date: '2026-03-02',
        url: 'https://www.devdiscourse.com/article/sports-games/3824896-global-sporting-events-thrown-into-chaos-amid-middle-east-tensions',
        type: 'media',
        description: 'Coverage of how Middle East military operations disrupted global sporting events, including the 2026 Winter Paralympics and tennis tournaments in the Gulf.',
      },
      {
        source: 'AP (via The Morning Call)',
        title: 'Tennis stars in Dubai and Paralympians face travel issues as Middle East war continues',
        date: '2026-03-02',
        url: 'https://www.mcall.com/2026/03/02/iran-war-sports-travel-issues/',
        type: 'media',
        description: 'Airspace closures across Iran, Iraq, Kuwait, Israel, Bahrain, and Qatar forced the shutdown of Dubai International Airport, stranding athletes. Paralympic contingents faced delays reaching Italy.',
      },
    ],
  },
  // === PHASE 2 ===
  {
    title: 'Preparations and Global Appeals as the Truce Period Begins',
    dateRange: 'February 1 \u2013 February 26, 2026',
    items: [
      {
        source: 'IOC Newsroom',
        title: 'IOC President Kirsty Coventry joins athletes to sign Milano Cortina 2026 Olympic Truce Mural',
        date: '2026-02-06',
        url: 'https://newsroom.olympics.com/record/3166',
        type: 'official',
        description: 'Coventry signed the Olympic Truce Mural in the Milan Olympic Village alongside athletes including IOC Athletes\u2019 Commission Chair Emma Terho ahead of the Opening Ceremony.',
      },
      {
        source: '3BL Media / IOC',
        title: 'United Nations Calls for Global Observance of Olympic Truce To Ensure Safe Passage for Athletes',
        date: '2026-02-09',
        url: 'https://www.3blmedia.com/news/united-nations-calls-global-observance-olympic-truce-ensure-safe-passage-athletes-and',
        type: 'official',
        description: 'Days before the Opening Ceremony, the UN General Assembly issued a solemn global appeal, urging all Member States to uphold the truce and specifically requesting safe passage for all athletes to Italy.',
      },
      {
        source: 'Vatican News',
        title: 'Pope appeals for Olympic truce ahead of 2026 Winter Games',
        date: '2026-02-06',
        url: 'https://www.vaticannews.va/en/pope/news/2026-02/pope-leo-xiv-angelus-appeal-winter-olympic-truce.html',
        type: 'official',
        description: 'Pope Leo XIV issued a letter on Opening Ceremony day urging nations to respect the Olympic Truce, calling it \u201ca symbol and promise of a reconciled world.\u201d',
      },
      {
        source: 'Olympics.com',
        title: 'The Olympic Truce Wall, a symbol of peace and participation',
        date: '2026-02-02',
        url: 'https://www.olympics.com/en/milano-cortina-2026/news/the-olympic-truce-wall-a-symbol-of-peace-and-participation',
        type: 'official',
        description: 'The Milano Cortina 2026 organizing committee unveiled the Olympic Truce Wall in the Olympic Villages. Continuing a tradition from the 2004 Athens Games, athletes are invited to sign the mural as a personal commitment to peace.',
      },
      {
        source: 'The Washington Post',
        title: 'Olympic ceasefire calls lay bare the scale of global conflict',
        date: '2026-02-02',
        url: 'https://www.washingtonpost.com/world/2026/02/02/olympics-ceasefire-winter-games-italy-ukraine-gaza-sudan/',
        type: 'analysis',
        description: 'Analysis of how the Olympic ceasefire tradition exposes the scale of ongoing global conflicts, including Ukraine, Gaza, and Sudan, as the Winter Games approach.',
      },
      {
        source: 'X / @andrii_sybiha',
        title: 'Ukraine FM Reports Massive Russian Drone & Missile Attack on Three Cities',
        date: '2026-02-12',
        url: 'https://x.com/andrii_sybiha/status/2021811503121260589',
        type: 'media',
        description: 'Ukraine\u2019s Foreign Minister documents ongoing Russian attacks during the Olympic Truce period, including drone and missile strikes on multiple cities.',
      },
      {
        source: 'CIVICUS Lens',
        title: 'Olympic Truce: \u2018A call for states to exercise restraint and facilitate humanitarian access\u2019',
        date: '2026-02-17',
        url: 'https://lens.civicus.org/interview/olympic-truce-a-call-for-states-to-exercise-restraint-and-facilitate-humanitarian-access/',
        type: 'analysis',
        description: 'In-depth interview where Dugan discusses the modern revival of the Olympic Truce and the launch of the Truce Compliance Index, explaining how the Truce Foundation is working to transform the symbolic truce into an accountability mechanism.',
      },
      {
        source: 'Fox News Digital / WWBL',
        title: 'Italy cheers faith and flag in Milan after Paris\u2019 \u2018woke\u2019 Olympic spectacle sparked culture clash',
        date: '2026-02-17',
        url: 'https://www.wwbl.com/2026/02/17/italy-cheers-faith-and-flag-in-milan-after-paris-woke-olympic-spectacle-sparked-culture-clash-experts-say/',
        type: 'media',
        description: 'Dugan provides commentary comparing the opening ceremonies of Paris 2024 and Milano-Cortina 2026, arguing that Milan\u2019s ceremony centered its message on heritage, human connection, and the Olympic Truce.',
      },
      {
        source: 'Principality of Monaco',
        title: 'Monaco Honored at The Truce Foundation Awards Ceremony during Milano-Cortina 2026',
        date: '2026-02-13',
        url: 'https://mission-onu-ny.gouv.mc/actualites/monaco-honored-at-the-truce-foundation-awards-ceremony-during-milano-cortina-2026',
        type: 'official',
        description: 'Coverage of the Truce Foundation Awards Ceremony in Milan, where Dugan presented the President\u2019s Award to Monaco\u2019s Permanent Representative to the UN and introduced the Truce Compliance Index to international dignitaries.',
      },
      {
        source: 'The Royal Gazette',
        title: 'Apierion team-up aims to stop corruption at Winter Olympics',
        date: '2026-02-11',
        url: 'https://www.royalgazette.com/international-business/business/article/20260211/apierion-team-up-aims-to-stop-corruption-at-winter-olympics/',
        type: 'media',
        description: 'Details the collaboration between the Truce Foundation and Apierion, with Dugan explaining how the Truce Compliance Index leverages \u201cDigital Medical Twin\u201d technology for anti-doping compliance monitoring.',
      },
    ],
  },
  // === PHASE 1 ===
  {
    title: 'The UN General Assembly Adopts the Olympic Truce Resolution',
    dateRange: 'October 2025 \u2013 January 31, 2026',
    items: [
      {
        source: 'Euronews',
        title: 'UN calls for 52-day pause in global wars ahead of Milan Cortina Winter Olympics',
        date: '2026-01-30',
        url: 'https://www.euronews.com/2026/01/30/un-calls-for-52-day-pause-in-global-wars-ahead-of-milan-cortina-winter-olympics',
        type: 'media',
        description: 'Coverage of the start of the 52-day Olympic Truce window, covering the Feb 6\u201322 Winter Games and Mar 6\u201315 Paralympics plus a week on either side.',
      },
      {
        source: 'UN News',
        title: 'Olympic Truce: \u2018Humanity can find common ground through sport\u2019',
        date: '2025-11-19',
        url: 'https://news.un.org/en/story/2025/11/1166405',
        type: 'official',
        description: 'The 80th Session of the UNGA officially adopted the Olympic Truce resolution. President Annalena Baerbock urged the 165 co-sponsoring Member States to honor the tradition, highlighting sport as a rare space where people can meet as equals.',
      },
      {
        source: 'UN Press',
        title: 'General Assembly Adopts Olympic Truce Resolution, Citing Sport\u2019s Unifying Power',
        date: '2025-11-19',
        url: 'https://press.un.org/en/2025/ga12732.doc.htm',
        type: 'official',
        description: 'Official UN meetings coverage of the consensus adoption of resolution A/80/L.10, calling on Member States to observe the Olympic Truce from January 30 through March 22, 2026.',
      },
      {
        source: 'Olympics.com',
        title: 'Olympic Truce Resolution for Milano Cortina 2026 adopted by the United Nations',
        date: '2025-11-19',
        url: 'https://www.olympics.com/ioc/news/olympic-truce-resolution-for-milano-cortina-2026-adopted-by-the-united-nations',
        type: 'official',
        description: 'IOC coverage of the resolution adoption. IOC President Kirsty Coventry and Milano Cortina 2026 OC President Giovanni Malag\u00f2 addressed the General Assembly.',
      },
      {
        source: 'Italian Ministry of Foreign Affairs',
        title: 'UN General Assembly adopts Italy\u2019s Resolution on the Olympic Truce',
        date: '2025-11-19',
        url: 'https://www.esteri.it/en/sala_stampa/archivionotizie/comunicati/2025/11/la-risoluzione-italiana-sulla-tregua-olimpica-per-milano-cortina-2026-adottata-dallassemblea-generale-dellonu/',
        type: 'official',
        description: 'Italian government\u2019s official announcement of the resolution they steered in coordination with the IOC and the Milano Cortina Foundation.',
      },
      {
        source: 'ANOC',
        title: 'Olympic Truce Resolution for Milano Cortina 2026 adopted by the United Nations',
        date: '2025-11-19',
        url: 'https://www.anocolympic.org/olympic-movement/olympic-truce-resolution-for-milano-cortina-2026-adopted-by-the-united-nations/',
        type: 'official',
        description: 'Association of National Olympic Committees\u2019 coverage of the UNGA resolution calling for a truce period from January 30 through March 22, 2026.',
      },
    ],
  },
];

// Key talking points for journalists
const KEY_TALKING_POINTS = [
  {
    stat: '6+',
    label: 'Active Violators',
    context: 'Russia, Israel, USA, Iran, Sudan, Myanmar violating during Truce window',
  },
  {
    stat: '22',
    label: 'Countries Affected',
    context: 'Conflict incidents tracked across 22 nations during the Truce period',
  },
  {
    stat: '166',
    label: 'UN Co-Sponsors',
    context: 'Out of 193 member states co-sponsored the Truce resolution',
  },
  {
    stat: '52 days',
    label: 'Truce Window',
    context: 'January 30 - March 22, 2026 (per UN Resolution A/80/L.10)',
  },
];

// B-roll and visual assets
const VISUAL_ASSETS = [
  {
    name: 'UN General Assembly Adoption',
    description: 'Video footage from November 19, 2025 resolution adoption',
    icon: '🎬',
    url: 'https://media.un.org/unifeed/en/asset/d350/d3504531',
  },
  {
    name: 'Resolution Document A/80/L.10',
    description: 'Official UN document (PDF)',
    icon: '📄',
    url: '/downloads/A_80_L.10-EN.pdf',
  },
];

export default function PressPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Press & Media
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Resources for journalists covering the Olympic Truce and its unprecedented violations during Milano Cortina 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Situation Brief */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-red-50 border border-red-200"
          >
            <h2 className="text-2xl font-bold text-red-900 mb-3">Situation Brief: March 3, 2026</h2>
            <div className="space-y-3 text-sm text-red-900/80">
              <p>
                The Milano Cortina 2026 Olympic Truce (Jan 30 - Mar 22) has been shattered by the most severe violations in modern Olympic history. On February 28, the United States and Israel launched coordinated strikes on Iranian nuclear and military facilities, including a targeted operation that killed Supreme Leader Ayatollah Khamenei. Iran responded with the largest missile barrage in its history, striking 10 countries: Israel, Saudi Arabia, UAE, Bahrain, Kuwait, Qatar (Al Udeid/CENTCOM), Iraq (Erbil/Al-Asad), Jordan, Oman, and Cyprus (RAF Akrotiri).
              </p>
              <p>
                This escalation occurred against a backdrop of ongoing violations: Russia continued its large-scale invasion of Ukraine with daily missile and drone attacks throughout the Truce period, including a massive bombardment on the day of the Olympic Opening Ceremony (Feb 22). The war in Sudan, the humanitarian catastrophe in Gaza, and conflicts in Afghanistan, Pakistan, Yemen, and Mexico all continued unabated.
              </p>
              <p>
                The Truce Index is tracking incidents across 22 countries, with Palestine, Iran, Russia, Sudan, Israel, and Ukraine recording the highest number of critical incidents. This represents the worst period of Olympic Truce violations since the modern tradition was revived in 1993.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Talking Points */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Key Facts: Milano-Cortina 2026 Truce Crisis</h2>
            <p className="text-gray-600 mb-6">Quick reference for reporting on the Olympic Truce violations</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {KEY_TALKING_POINTS.map((point, index) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 text-center"
                >
                  <span className="text-2xl font-bold text-gray-900 block">{point.stat}</span>
                  <span className="text-sm text-blue-500 font-medium">{point.label}</span>
                  <p className="text-xs text-gray-500 mt-2">{point.context}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage by Phase */}
      {COVERAGE_SECTIONS.map((section, sectionIndex) => (
        <section key={section.title} className={`py-12 px-4 ${sectionIndex % 2 === 0 ? 'bg-gray-50/30' : ''}`}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <p className="text-sm font-medium text-blue-600 mb-1">{section.dateRange}</p>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>

              <div className="space-y-3">
                {section.items.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl bg-white border border-gray-200/50 hover:border-blue-500/50 transition-colors group shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-sm font-semibold text-blue-600">{item.source}</span>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            item.type === 'official'
                              ? 'bg-green-100 text-green-800 border border-green-300'
                              : item.type === 'analysis'
                              ? 'bg-purple-100 text-purple-800 border border-purple-300'
                              : 'bg-gray-100 text-gray-700 border border-gray-300'
                          }`}>
                            {item.type}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </div>
                        <h3 className="text-gray-900 group-hover:text-blue-500 transition-colors text-sm font-medium mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
                      </div>
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Visual Assets / B-Roll */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Visual Assets</h2>
            <p className="text-gray-600 mb-6">Video footage and documents for your coverage</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VISUAL_ASSETS.map((asset) => (
                <a
                  key={asset.name}
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-gray-100/50 border border-gray-200/50 hover:border-purple-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{asset.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-400 transition-colors">
                        {asset.name}
                      </h3>
                      <p className="text-sm text-gray-600">{asset.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore the Index</h2>
            <p className="text-gray-600 mb-6">
              See real-time compliance data on our interactive map
            </p>
            <a
              href={TRUCE_INDEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
            >
              View Live Index
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
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
