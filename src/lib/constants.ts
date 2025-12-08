/**
 * Milano-Cortina 2026 Olympic Games - Authoritative Dates
 *
 * Official dates from IOC/Milano-Cortina 2026:
 * - Opening Ceremony: February 6, 2026
 * - Closing Ceremony: February 22, 2026
 * - Paralympic Opening: March 6, 2026
 * - Paralympic Closing: March 15, 2026
 *
 * Olympic Truce (per UN Resolution A/80/L.10):
 * - Starts: 7 days before Opening Ceremony = January 30, 2026
 * - Ends: 7 days after Paralympic Closing = March 22, 2026
 * - Total duration: 52 days
 */
export const OPENING_CEREMONY_DATE = new Date('2026-02-06T00:00:00Z');
export const CLOSING_CEREMONY_DATE = new Date('2026-02-22T23:59:59Z');
export const PARALYMPIC_OPENING_DATE = new Date('2026-03-06T00:00:00Z');
export const PARALYMPIC_CLOSING_DATE = new Date('2026-03-15T23:59:59Z');
export const TRUCE_START_DATE = new Date('2026-01-30T00:00:00Z');
export const TRUCE_END_DATE = new Date('2026-03-22T23:59:59Z');
export const TRUCE_DURATION_DAYS = 52;

// External URLs
export const TRUCE_INDEX_URL = 'https://truce-index.vercel.app';
export const TRUCE_INDEX_PRESS_URL = 'https://truce-index.vercel.app/press';
export const TRUCE_INDEX_BRIEFING_URL = 'https://truce-index.vercel.app/briefing';
export const TRUCE_INDEX_LEADERBOARD_URL = 'https://truce-index.vercel.app/leaderboard';
export const WOA_URL = 'https://worldolympians.org';
export const TRUCE_FOUNDATION_URL = 'https://trucefoundation.world';

// Sub-site definitions
export interface SubSite {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  status: 'live' | 'coming-soon';
  external?: boolean;
}

export const SUB_SITES: SubSite[] = [
  // === LIVE MONITORING & DATA (what visitors want first) ===
  {
    id: 'index',
    icon: '🗺️',
    title: 'Truce Compliance Index',
    description: 'Real-time monitoring dashboard tracking Olympic Truce compliance worldwide',
    href: TRUCE_INDEX_URL,
    status: 'live',
    external: true,
  },
  {
    id: 'briefing',
    icon: '📋',
    title: 'Daily Briefing',
    description: 'Auto-generated daily summary of global incidents and trends',
    href: '/briefing',
    status: 'live',
  },
  {
    id: 'leaderboard',
    icon: '🏆',
    title: 'Country Leaderboard',
    description: 'Countries ranked by incidents and compliance metrics',
    href: '/leaderboard',
    status: 'live',
  },
  // === CONTEXT & BACKGROUND (understanding the truce) ===
  {
    id: 'history',
    icon: '📜',
    title: 'Truce History',
    description: '2,800 years of Olympic Truce tradition, from ancient Greece to modern UN resolutions',
    href: '/history',
    status: 'live',
  },
  {
    id: 'documents',
    icon: '📚',
    title: 'UN Documents Archive',
    description: 'Complete collection of UN resolutions and IOC documents on Olympic Truce',
    href: '/documents',
    status: 'live',
  },
  {
    id: 'methodology',
    icon: '📐',
    title: 'Methodology',
    description: 'How we measure Olympic Truce compliance',
    href: '/methodology',
    status: 'live',
  },
  {
    id: 'humanitarian',
    icon: '🚑',
    title: 'Humanitarian Access',
    description: 'Monitoring barriers to humanitarian aid delivery during Truce periods',
    href: '/humanitarian',
    status: 'live',
  },
  {
    id: 'ceasefire',
    icon: '🕊️',
    title: 'Ceasefire Watch',
    description: 'Tracking fragile peace agreements and ceasefires that need to hold during the Truce',
    href: '/ceasefire',
    status: 'live',
  },
  // === HUMAN STORIES & COMMUNITY (emotional engagement) ===
  {
    id: 'stories',
    icon: '💚',
    title: 'Youth Stories',
    description: 'First-person accounts from truce-enabled zones',
    href: '/stories',
    status: 'live',
  },
  {
    id: 'candles',
    icon: '🕯️',
    title: 'Global Candle Wall',
    description: 'Geo-tagged peace gestures from around the world',
    href: '/candles',
    status: 'live',
  },
  {
    id: 'forum',
    icon: '💬',
    title: 'Forum',
    description: 'Real-time monitoring and storytelling from truce-enabled zones',
    href: '/forum',
    status: 'live',
  },
  // === ACCOUNTABILITY & RECORDS (transparency) ===
  {
    id: 'accountability',
    icon: '🏛️',
    title: 'Accountability Record',
    description: 'Historical record of Truce violations, inspired by the ancient Wall of Shame',
    href: '/accountability',
    status: 'live',
  },
  {
    id: 'reports',
    icon: '📄',
    title: 'Report Archives',
    description: 'Monthly and final reports, infographics, and data',
    href: '/reports',
    status: 'live',
  },
  // === ACTION & ENGAGEMENT (call to action) ===
  {
    id: 'advocacy',
    icon: '📥',
    title: 'Advocacy Toolkit',
    description: 'Infographics, policy briefs, and social media templates',
    href: '/advocacy',
    status: 'live',
  },
  {
    id: 'press',
    icon: '📰',
    title: 'Press & Media',
    description: 'Media resources, embed widgets, and press contacts',
    href: '/press',
    status: 'live',
  },
  {
    id: 'briefing-sheet',
    icon: '📋',
    title: 'Donor Briefing Sheet',
    description: 'Sport for Development & Peace engagement materials based on UN A/79/289',
    href: '/briefing-sheet',
    status: 'live',
  },
  {
    id: 'partners',
    icon: '🤝',
    title: 'Our Partners',
    description: 'Organizations supporting the Olympic Truce',
    href: '/partners',
    status: 'live',
  },
];

// Ancient quotes on the Olympic Truce and athletics
export interface AncientQuote {
  text: string;
  author: string;
  authorDates: string;
  source: string;
  sourceUrl?: string;
  category: 'ekecheiria' | 'athletics' | 'peace' | 'glory';
}

export const ANCIENT_QUOTES: AncientQuote[] = [
  // Primary sources on Ekecheiria
  {
    text: 'The founders of our great festivals are justly praised for handing down to us a custom by which, having proclaimed a truce and resolved our pending quarrels, we come together in one place, where, as we make our prayers and sacrifices in common, we are reminded of the kinship which exists among us and are made to feel more kindly towards each other for the future, reviving our old friendships and establishing new ties.',
    author: 'Isocrates',
    authorDates: '436-338 BCE',
    source: 'Panegyricus, Section 43',
    sourceUrl: 'http://www.perseus.tufts.edu/hopper/text?doc=Perseus:abo:tlg,0010,011:43',
    category: 'ekecheiria',
  },
  {
    text: 'As you enter the bronze doors you see on the right, before the pillar, Iphitus being crowned by a woman, Ekecheiria (Truce), as the elegiac couplet on the statue says.',
    author: 'Pausanias',
    authorDates: 'c. 110-180 CE',
    source: 'Description of Greece, 5.10.10',
    sourceUrl: 'https://www.theoi.com/Text/Pausanias5A.html',
    category: 'ekecheiria',
  },
  {
    text: 'The quoit of Iphitus has inscribed upon it the truce which the Eleans proclaim at the Olympic festivals; the inscription is not written in a straight line, but the letters run in a circle round the quoit.',
    author: 'Pausanias',
    authorDates: 'c. 110-180 CE',
    source: 'Description of Greece, 5.20.1',
    sourceUrl: 'https://www.theoi.com/Text/Pausanias5A.html',
    category: 'ekecheiria',
  },
  {
    text: 'At this time Greece was grievously worn by internal strife and plague, and it occurred to Iphitus to ask the god at Delphi for deliverance from these evils. The Pythian priestess ordained that Iphitus himself and the Eleans must renew the Olympic games.',
    author: 'Pausanias',
    authorDates: 'c. 110-180 CE',
    source: 'Description of Greece, 5.4.5',
    sourceUrl: 'https://www.theoi.com/Text/Pausanias5A.html',
    category: 'ekecheiria',
  },
  // Pindar on glory and peace
  {
    text: 'Let us not proclaim any contest greater than Olympia.',
    author: 'Pindar',
    authorDates: '518-438 BCE',
    source: 'Olympian Ode 1',
    sourceUrl: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0162:book%3DO.',
    category: 'glory',
  },
  {
    text: 'May the god be gracious to his future prayers... whose pure thoughts are turned towards city-loving peace.',
    author: 'Pindar',
    authorDates: '518-438 BCE',
    source: 'Olympian Ode 4',
    category: 'peace',
  },
  {
    text: 'Creatures of a day! What is anyone? What is anyone not? A dream of a shadow is our mortal being. But when there comes to men a gleam of splendour given of heaven, then rests on them a light of glory and blessed are their days.',
    author: 'Pindar',
    authorDates: '518-438 BCE',
    source: 'Pythian Ode 8',
    category: 'glory',
  },
  {
    text: 'Water is best, and gold, like a blazing fire in the night, stands out supreme of all lordly wealth.',
    author: 'Pindar',
    authorDates: '518-438 BCE',
    source: 'Olympian Ode 1',
    category: 'glory',
  },
  // Philosophers on athletics and virtue
  {
    text: 'Athletic training is a helper for philosophy.',
    author: 'Plato',
    authorDates: '428-348 BCE',
    source: 'Republic',
    category: 'athletics',
  },
  {
    text: 'Too much emphasis on athletics produces an excessively uncivilized type, while a purely literary training leaves men indecently soft.',
    author: 'Plato',
    authorDates: '428-348 BCE',
    source: 'Republic',
    category: 'athletics',
  },
  {
    text: 'A young man\'s ultimate physical beauty is a body capable of enduring all efforts, either of the racecourse or of bodily strength... This is why the athletes in the pentathlon are most beautiful.',
    author: 'Aristotle',
    authorDates: '384-322 BCE',
    source: 'Rhetoric, 1361b',
    category: 'athletics',
  },
  // Pre-Socratic philosophers
  {
    text: 'Life is like a great public festival. As in this festival some come to compete for the prizes, others for trade and profit, but the best come as spectators; so in life, the slavish are hunters of fame and gain, while the philosophers are seekers after truth.',
    author: 'Pythagoras',
    authorDates: 'c. 570-495 BCE',
    source: 'Diogenes Laertius, Lives 8.6',
    category: 'athletics',
  },
  {
    text: 'Far better is our wisdom than the strength of men and of horses! These are but thoughtless judgments, nor is it fitting to set strength before goodly wisdom.',
    author: 'Xenophanes',
    authorDates: 'c. 570-478 BCE',
    source: 'Fragment B2 (Diels-Kranz)',
    category: 'athletics',
  },
  {
    text: 'War is the father of all and king of all, who manifested some as gods and some as men, who made some slaves and some freemen.',
    author: 'Heraclitus',
    authorDates: 'c. 535-475 BCE',
    source: 'Fragment B53 (Diels-Kranz)',
    category: 'athletics',
  },
  {
    text: 'More men become good through practice than by nature.',
    author: 'Democritus',
    authorDates: 'c. 460-370 BCE',
    source: 'Fragment B242 (Diels-Kranz)',
    category: 'athletics',
  },
  {
    text: 'It is right that men should value the soul rather than the body; for perfection of soul corrects the inferiority of the body, but physical strength without intelligence does nothing to improve the mind.',
    author: 'Democritus',
    authorDates: 'c. 460-370 BCE',
    source: 'Fragment B187 (Diels-Kranz)',
    category: 'athletics',
  },
  // Socrates on Olympic honors
  {
    text: 'There can be no more fitting reward than maintenance in the Prytaneum, a reward which he deserves far more than the citizen who has won the prize at Olympia in the horse or chariot race. For he makes you seem to be happy, while I make you be so.',
    author: 'Socrates',
    authorDates: '470-399 BCE',
    source: 'Plato, Apology 36d-e',
    sourceUrl: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0170:text=Apol.',
    category: 'athletics',
  },
  // More Plato
  {
    text: 'A god has given music and physical training to human beings not, except incidentally, for the body and the soul, but for the spirited and wisdom-loving parts of the soul itself, in order that these may be in harmony with one another.',
    author: 'Plato',
    authorDates: '428-348 BCE',
    source: 'Republic, 410c-411e',
    sourceUrl: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0168:book=3',
    category: 'athletics',
  },
  // More Aristotle
  {
    text: 'In the Olympic Games it is not the most beautiful and the strongest that are crowned but those who compete, for it is some of these that are victorious. So those who act win, and rightly win, the noble and good things in life.',
    author: 'Aristotle',
    authorDates: '384-322 BCE',
    source: 'Nicomachean Ethics, 1099a',
    sourceUrl: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0054:bekker+page=1099a',
    category: 'athletics',
  },
  // Stoic philosophers
  {
    text: 'Remember that now is the combat, now the Olympiad comes on, nor can it be put off. By once being defeated and giving way, proficiency is lost.',
    author: 'Epictetus',
    authorDates: 'c. 50-135 CE',
    source: 'Enchiridion, 51',
    category: 'athletics',
  },
  {
    text: 'God, like a gymnastic trainer, has pitted you against a rough antagonist. For what end? That you may be an Olympic conqueror; and this cannot be without toil.',
    author: 'Epictetus',
    authorDates: 'c. 50-135 CE',
    source: 'Discourses, 1.24',
    category: 'athletics',
  },
  {
    text: 'The art of life is more like the wrestler\'s art than the dancer\'s, in respect of this, that it should stand ready and firm to meet onsets which are sudden and unexpected.',
    author: 'Marcus Aurelius',
    authorDates: '121-180 CE',
    source: 'Meditations, 7.61',
    category: 'athletics',
  },
  // Cynic philosophers
  {
    text: 'I have come to the games not to watch but to compete. My rivals are not athletes but hardships—hunger, thirst, cold, exile. This is the contest which I steadfastly maintain.',
    author: 'Diogenes',
    authorDates: 'c. 412-323 BCE',
    source: 'Dio Chrysostom, Oration 8',
    category: 'athletics',
  },
  // Pausanias on Olympic sanctity
  {
    text: 'Many are the sights to be seen in Greece, and many are the wonders to be heard; but on nothing does Heaven bestow more care than on the Eleusinian rites and the Olympic games.',
    author: 'Pausanias',
    authorDates: 'c. 110-180 CE',
    source: 'Description of Greece, 5.10.1',
    sourceUrl: 'https://www.theoi.com/Text/Pausanias5A.html',
    category: 'glory',
  },
  // Gorgias on pan-Hellenic unity
  {
    text: 'Seeing Greece involved in civil dissension, he became a counselor of concord to her inhabitants, turning their attention against the barbarians and persuading them to regard as prizes to be won by their arms, not each other\'s cities, but the territory of the barbarians.',
    author: 'Gorgias',
    authorDates: 'c. 480-375 BCE',
    source: 'Philostratus, Lives of the Sophists 1.9.4-5 (Olympic Oration, 408 BCE)',
    category: 'peace',
  },
  // Isocrates on wisdom vs athletics
  {
    text: 'If all the athletes should acquire twice the strength which they now possess, the rest of the world would be no better off; but let a single man attain to wisdom, and all men will reap the benefit.',
    author: 'Isocrates',
    authorDates: '436-338 BCE',
    source: 'Panegyricus, Section 1',
    sourceUrl: 'http://www.perseus.tufts.edu/hopper/text?doc=Perseus:abo:tlg,0010,011:1',
    category: 'athletics',
  },
];

// Calculate days until truce window
export function getDaysUntilTruce(): number {
  const now = new Date();
  const diff = TRUCE_START_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

// Check if we're in the truce window
export function isInTruceWindow(): boolean {
  const now = new Date();
  return now >= TRUCE_START_DATE && now <= TRUCE_END_DATE;
}
