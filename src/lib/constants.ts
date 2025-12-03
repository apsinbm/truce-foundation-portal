// Truce Window dates for Milano-Cortina 2026
// Truce starts 7 days before Opening Ceremony (Feb 6), ends 7 days after Paralympics closing (Mar 15)
// Games: Feb 6 - Feb 22, 2026 | Paralympics: Mar 6 - Mar 15, 2026
export const TRUCE_START_DATE = new Date('2026-01-30T00:00:00Z');
export const TRUCE_END_DATE = new Date('2026-03-22T23:59:59Z');

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
    id: 'history',
    icon: '📜',
    title: 'Truce History',
    description: 'UN Solemn Appeals and milestone effects from Lillehammer 1994 to Paris 2024',
    href: '/history',
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
  {
    id: 'advocacy',
    icon: '📥',
    title: 'Advocacy Toolkit',
    description: 'Infographics, policy briefs, and social media templates',
    href: '/advocacy',
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
    id: 'stories',
    icon: '💚',
    title: 'Youth Stories',
    description: 'First-person accounts from truce-enabled zones',
    href: '/stories',
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
    id: 'partners',
    icon: '🤝',
    title: 'Our Partners',
    description: 'Organizations supporting the Olympic Truce',
    href: '/partners',
    status: 'live',
  },
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
    id: 'documents',
    icon: '📚',
    title: 'UN Documents Archive',
    description: 'Complete collection of UN resolutions and IOC documents on Olympic Truce',
    href: '/documents',
    status: 'live',
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
