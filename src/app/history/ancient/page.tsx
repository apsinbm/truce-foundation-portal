'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ANCIENT_QUOTES } from '@/lib/constants';
import Header from '@/components/Header';

// Ancient era key moments (pre-393 AD)
interface AncientMoment {
  year: number;
  title: string;
  description: string;
  significance: 'milestone' | 'violation' | 'symbolic';
}

const ANCIENT_MOMENTS: AncientMoment[] = [
  {
    year: -776,
    title: 'Ancient Olympic Truce Established',
    description: 'King Iphitos of Elis, following the Oracle of Delphi\'s counsel, joins with King Cleisthenes (Kleosthenes) of Pisa and Spartan lawgiver Lycurgus to establish the ekecheiria ("laying down of arms"). The treaty is inscribed in boustrophedon (alternating left-to-right and right-to-left) on a bronze discus stored in the Temple of Hera at Olympia. Some sources date the foundational pact to 884 BC.',
    significance: 'milestone',
  },
  {
    year: -480,
    title: 'Games Held During Persian Invasion',
    description: 'The Olympic Games are held even as Xerxes\' Persian army invades Greece, demonstrating the sacred nature of the festival. Greeks at Olympia while others fight for survival at Thermopylae.',
    significance: 'symbolic',
  },
  {
    year: -420,
    title: 'Sparta Banned from Olympics',
    description: 'Sparta attacks Lepreum during the truce period. Elis fines Sparta 2,000 minae (2 minae per soldier × 1,000 hoplites). The ban was taken seriously: 1,000 Argive warriors, 1,000 Mantinean warriors, and Athenian cavalry guarded the Games to deter Spartan attack. Lichas enters his chariot under Thebes\'s name - when he wins and rushes to crown his charioteer, officials discover his identity and publicly flog him with rods.',
    significance: 'violation',
  },
  {
    year: -399,
    title: 'Second Spartan Invasion',
    description: 'Sparta invades Olympia again. According to Pausanias, Elean defenders placed archers on temple roofs to repel the attack. Skeletal remains discovered centuries later during temple repairs were believed to be Elean defenders killed in this battle.',
    significance: 'violation',
  },
  {
    year: -364,
    title: 'Battle at Olympia',
    description: 'Arcadians and Pisatans occupy the sacred grove and attempt to hold the 104th Olympiad themselves. According to Xenophon (Hellenica 7.4.28-35), the Elean army counterattacked during the pentathlon - fighting erupted between the senate house, Temple of Hestia, and theatre. The Arcadians pulled down wooden bleachers to build fortifications. Elean leader Stratolas and his "Three Hundred" were killed.',
    significance: 'violation',
  },
  {
    year: -348,
    title: 'Philip II of Macedon Fined',
    description: 'Macedonian soldiers are convicted of robbing travelers en route to the Games. Philip II is fined. The captivity of Phrynon of Rhamnous by Macedonian pirates required subsequent compensation - demonstrating the Truce\'s reach extended to protecting pilgrims from state-sponsored piracy.',
    significance: 'violation',
  },
  {
    year: -312,
    title: 'Macedonian Treasury Looting',
    description: 'Macedonian general Telesphorus invades Elis and loots the treasury of the sanctuary to pay his mercenaries - a direct violation of the territory\'s sacred inviolability.',
    significance: 'violation',
  },
  {
    year: -80,
    title: 'Sulla Sacks Olympia',
    description: 'Roman general Sulla sacks the sanctuary and transfers the 175th Olympiad to Rome, treating the Truce as a quaint relic irrelevant to Roman power.',
    significance: 'violation',
  },
  {
    year: 393,
    title: 'Ancient Olympics End',
    description: 'Traditional account: Emperor Theodosius I\'s decrees (389-391 AD) ban pagan festivals; 393 AD is the last recorded Games. Modern revision: court poet Claudian references Olympics in 399 AD. Historian Sofie Remijsen argues economic factors: "The contests ended because no one could afford it." Olympic festivals at Antioch continued until the early 6th century AD.',
    significance: 'milestone',
  },
  {
    year: 426,
    title: 'Temples Destroyed',
    description: 'Theodosius II orders the destruction of pagan temples. The great Statue of Zeus (one of the Seven Wonders) is removed and the sanctuary is burned. Earthquakes in 522 and 551 AD will complete the destruction.',
    significance: 'milestone',
  },
];

export default function AncientHistoryPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-500/30 rounded-full mb-4">
              <span className="text-xl">🏛️</span>
              <span className="text-amber-500 text-sm font-medium">Ancient Era</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              The Ancient Ekecheiria
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              776 BC - 393 AD: Over 1,100 Years of Sacred Peace
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origins Section */}
      <section className="py-12 px-4 bg-gray-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>🏛️</span> Origins & Founders
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  Greece in the 8th century BC was suffering from constant wars and plague. <strong className="text-amber-500">King Iphitos of Elis</strong> sought
                  guidance from the Oracle of Delphi, who ordained that he "must renew the Olympic games."
                </p>
                <p>
                  Iphitos enlisted <strong className="text-amber-500">King Cleisthenes of Pisa</strong> and the Spartan lawgiver <strong className="text-amber-500">Lycurgus</strong> to
                  forge a sacred peace pact. The treaty was inscribed on a bronze discus stored in the Temple of Hera at Olympia.
                </p>
                <p className="text-xs text-gray-500 italic">
                  "The ekecheiria declared the sanctuary of Olympia and the territory of Elis to be inviolable during the Games." — Pausanias
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>📜</span> How It Worked
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong className="text-green-500">Spondophoroi</strong> ("truce-bearers") - noble heralds crowned with olive, carrying the <em>kerykeion</em> (herald's staff) -
                  traveled three distinct circuits: <strong>Northern</strong> (Athens, Thebes, Macedonia, Black Sea), <strong>Eastern</strong> (Aegean, Ionia, Egypt), and <strong>Western</strong> (Sicily, Italy, Gaul). The announcement (<em>epangelia</em>) was a diplomatic test - refusing the heralds excluded a city from the Greek community.
                </p>
                <p>
                  Duration evolved: <strong className="text-green-500">one month</strong> (Archaic, <em>hieromenia</em>) → <strong className="text-green-500">three months</strong> (Classical - one for travel, one for Games, one for return) → potentially <strong className="text-green-500">ten months</strong> in Hellenistic period for distant colonies.
                </p>
                <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                  <li>Elis declared <em>asylos</em> (sacred and inviolable) - a "mobile sanctuary" around pilgrims</li>
                  <li>Armed forces forbidden from entering the <em>Altis</em> (sanctuary); no weapons in sacred territory</li>
                  <li>Official delegations (<em>theoriai</em>) sent by cities received protected status</li>
                  <li>All legal disputes and executions suspended during the truce</li>
                  <li>Wars between states could continue - only Olympia and travelers were protected</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30 mb-8"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span>🎭</span> Religious & Cultural Significance
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                The ekecheiria was fundamentally tied to <strong className="text-purple-500">Zeus</strong>, king of the Greek gods.
                Waging war during Zeus's festival was seen as impious. Inside the Temple of Zeus stood a statue depicting King Iphitos
                being crowned by <strong className="text-purple-500">Ekecheiria</strong> - a female personification of Peace/Truce (Pausanias 5.10.10),
                implying the Greeks deified the concept itself. A statue of <strong className="text-purple-500">Agon</strong> (personified Competition)
                holding dumbbells also stood at Olympia - the Greek concept of <em>agon</em> (ἀγών) channeled competitive spirit from warfare to athletics.
              </p>
              <p>
                Athletes swore sacred oaths on slices of <strong className="text-purple-500">boar's flesh</strong> at the altar of Zeus Horkios ("Zeus of Oaths").
                Pausanias (5.24.9) notes Zeus in the Council Chamber was called "Oath-god" and "most likely to strike terror into the hearts of sinners."
                The main sacrifice was a <strong className="text-purple-500">hecatomb</strong> (100 oxen) to Zeus on the third day.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/30"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span>⚖️</span> Enforcement: The Hellanodikai
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <p className="mb-2">
                  The <strong className="text-red-500">Hellanodikai</strong> (10 Elean judges, given 10 months of training before each Games) acted as the supreme court of the festival.
                  Enforcement relied on religious fear (<em>asebeia</em> - sacrilege) and social pressure - no "Olympic army" existed. Violators faced <strong className="text-red-500">exclusion</strong>, heavy fines
                  converted into bronze statues of Zeus called <strong className="text-red-500">Zanes</strong> - perpetual monuments to the violators' transgression lining the entrance to the stadium.
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  The "Host State Rule" held that the Truce was active the moment proclaimed in Elis - all participants bound from that date. Aristophanes' <em>Lysistrata</em> (411 BC) cites the Truce as evidence that even bitter enemies could find peaceful common ground.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">The Spartan Precedent (420 BC)</h4>
                <p>
                  Sparta deployed 1,000 hoplites to Lepreum after proclamation. Their legalistic defense (not yet announced <em>in Sparta</em>) was rejected.
                  Elis fined them <strong className="text-red-500">2,000 minae</strong> (2 minae per soldier - cost of a trireme fleet).
                  When Lichas entered his chariot under Thebes's flag and won, he was <strong className="text-red-500">publicly flogged</strong> in the stadium - demonstrating the supra-national authority of Olympic officials.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 bg-gray-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Ancient Timeline
          </motion.h2>

          <div className="space-y-4">
            {ANCIENT_MOMENTS.map((moment, index) => {
              const sigConfig = {
                milestone: { bg: 'bg-blue-100', border: 'border-blue-500/30', icon: '📌', color: 'text-blue-500' },
                violation: { bg: 'bg-red-500/10', border: 'border-red-500/30', icon: '⚠️', color: 'text-red-500' },
                symbolic: { bg: 'bg-amber-100', border: 'border-amber-500/30', icon: '✨', color: 'text-amber-500' },
              }[moment.significance];

              return (
                <motion.div
                  key={moment.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-4 rounded-lg ${sigConfig.bg} border ${sigConfig.border}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{sigConfig.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-bold ${sigConfig.color}`}>
                          {moment.year < 0 ? `${Math.abs(moment.year)} BC` : `${moment.year} AD`}
                        </span>
                        <h4 className="font-semibold text-gray-900">{moment.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{moment.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ancient Wisdom Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <span className="text-2xl">📜</span>
              Ancient Wisdom
            </h2>
            <p className="text-gray-600">Voices from antiquity on the Olympic ideal</p>
          </motion.div>

          <div className="grid gap-4">
            {/* Ekecheiria quotes */}
            {ANCIENT_QUOTES.filter(q => q.category === 'ekecheiria').map((quote, index) => (
              <motion.div
                key={`${quote.author}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🏛️</span>
                  <span className="text-xs text-amber-500 font-medium">On the Truce</span>
                </div>
                <blockquote className="text-gray-600 italic mb-3 text-sm leading-relaxed">
                  "{quote.text}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-900 font-medium text-sm">{quote.author}</span>
                    <span className="text-gray-500 text-xs ml-2">({quote.authorDates})</span>
                  </div>
                  {quote.sourceUrl ? (
                    <a
                      href={quote.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-amber-800 hover:text-amber-500"
                    >
                      {quote.source} ↗
                    </a>
                  ) : (
                    <span className="text-xs text-gray-500">{quote.source}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Athletics & Glory quotes in a 2-column grid */}
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              {ANCIENT_QUOTES.filter(q => q.category === 'athletics' || q.category === 'glory').map((quote, index) => {
                const config = quote.category === 'athletics'
                  ? { icon: '🏃', color: 'from-green-500/10 to-green-600/5', border: 'border-green-500/30', label: 'On Athletics', labelColor: 'text-green-500' }
                  : { icon: '🏆', color: 'from-purple-500/10 to-purple-600/5', border: 'border-purple-500/30', label: 'On Glory', labelColor: 'text-purple-500' };

                return (
                  <motion.div
                    key={`${quote.author}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl bg-gradient-to-br ${config.color} border ${config.border}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{config.icon}</span>
                      <span className={`text-xs font-medium ${config.labelColor}`}>{config.label}</span>
                    </div>
                    <blockquote className="text-gray-600 italic text-sm leading-relaxed mb-2">
                      "{quote.text}"
                    </blockquote>
                    <div className="text-xs">
                      <span className="text-gray-900 font-medium">{quote.author}</span>
                      <span className="text-gray-500 ml-1">— {quote.source}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/history"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to History Hub
            </Link>
            <Link
              href="/history/modern"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
            >
              Continue to Modern Era
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-semibold text-gray-500 mb-4 text-center">Ancient Sources</h3>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <a href="http://www.perseus.tufts.edu/hopper/text?doc=Paus.+5.4" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
              Pausanias
            </a>
            <span>|</span>
            <a href="http://www.perseus.tufts.edu/hopper/text?doc=Thuc.+5.49" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
              Thucydides
            </a>
            <span>|</span>
            <a href="http://www.perseus.tufts.edu/hopper/text?doc=Isoc.+4.43" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
              Isocrates
            </a>
            <span>|</span>
            <a href="https://www.theoi.com/Daimon/Ekekheira.html" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
              Theoi (Ekecheiria)
            </a>
          </div>
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
