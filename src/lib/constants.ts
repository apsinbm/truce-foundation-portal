// Truce Window dates for Milano-Cortina 2026
export const TRUCE_START_DATE = new Date('2026-01-23T00:00:00Z');
export const TRUCE_END_DATE = new Date('2026-03-22T23:59:59Z');

// External URLs
export const TRUCE_INDEX_URL = 'https://truce-index.vercel.app';
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
    id: 'forum',
    icon: '💬',
    title: 'Forum',
    description: 'Real-time monitoring and storytelling from truce-enabled zones',
    href: '/forum',
    status: 'coming-soon',
  },
  {
    id: 'advocacy',
    icon: '📥',
    title: 'Advocacy Toolkit',
    description: 'Infographics, policy briefs, and social media templates',
    href: '/advocacy',
    status: 'coming-soon',
  },
  {
    id: 'candles',
    icon: '🕯️',
    title: 'Global Candle Wall',
    description: 'Geo-tagged peace gestures from around the world',
    href: '/candles',
    status: 'coming-soon',
  },
  {
    id: 'stories',
    icon: '💚',
    title: 'Youth Stories',
    description: 'First-person accounts from truce-enabled zones',
    href: '/stories',
    status: 'coming-soon',
  },
  {
    id: 'partners',
    icon: '🔐',
    title: 'Partner Portal',
    description: 'Secure access for UN missions, NGOs, and media',
    href: '/partners',
    status: 'coming-soon',
  },
  {
    id: 'scorecards',
    icon: '📊',
    title: 'Member Scorecards',
    description: 'Compliance benchmarks for UN member states',
    href: '/scorecards',
    status: 'coming-soon',
  },
  {
    id: 'reports',
    icon: '📄',
    title: 'Report Archives',
    description: 'Monthly and final reports, infographics, and data',
    href: '/reports',
    status: 'coming-soon',
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
