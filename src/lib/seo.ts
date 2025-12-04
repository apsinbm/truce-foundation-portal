// SEO metadata helper for consistent page metadata across the portal
import { Metadata } from 'next';

const BASE_URL = 'https://trucefoundation.world';
const SITE_NAME = 'Truce Foundation';

interface PageSEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path,
  image = '/og-default.png',
}: PageSEOConfig): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;
  const defaultKeywords = ['Olympic Truce', 'Truce Foundation', 'Peace', 'Milano-Cortina 2026'];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      images: [
        {
          url: `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${BASE_URL}${image}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Pre-configured metadata for all pages
export const PAGE_SEO = {
  accountability: generatePageMetadata({
    title: 'Accountability Record',
    description: 'Historical record of Olympic Truce violations from 1992 to present. Track which nations have violated the sacred tradition.',
    keywords: ['violations', 'history', 'compliance', 'record', 'accountability'],
    path: '/accountability',
  }),
  leaderboard: generatePageMetadata({
    title: 'Country Leaderboard',
    description: 'Live rankings of countries by Olympic Truce compliance. See who leads and who violates the peace.',
    keywords: ['rankings', 'countries', 'compliance', 'leaderboard', 'violations'],
    path: '/leaderboard',
  }),
  methodology: generatePageMetadata({
    title: 'Methodology',
    description: 'How the Truce Index measures Olympic Truce compliance across five categories: Armed Conflict, Political Violence, Athlete Safety, Aid Access, and Diplomatic Actions.',
    keywords: ['methodology', 'measurement', 'index', 'compliance', 'data'],
    path: '/methodology',
  }),
  humanitarian: generatePageMetadata({
    title: 'Humanitarian Access',
    description: 'Monitoring barriers to humanitarian aid delivery during Olympic Truce periods. Track aid corridors, blockades, and relief access.',
    keywords: ['humanitarian', 'aid', 'access', 'corridors', 'blockades'],
    path: '/humanitarian',
  }),
  ceasefire: generatePageMetadata({
    title: 'Ceasefire Watch',
    description: 'Tracking fragile peace agreements and ceasefires during the Olympic Truce window. Monitor peace processes worldwide.',
    keywords: ['ceasefire', 'peace', 'agreements', 'truce', 'armistice'],
    path: '/ceasefire',
  }),
  briefing: generatePageMetadata({
    title: 'Daily Briefing',
    description: 'Auto-generated daily summary of global incidents and trends affecting Olympic Truce compliance.',
    keywords: ['daily', 'briefing', 'news', 'incidents', 'updates'],
    path: '/briefing',
  }),
  history: generatePageMetadata({
    title: 'Truce History',
    description: '2,800 years of Olympic Truce tradition from ancient Greek ekecheiria to modern UN resolutions.',
    keywords: ['history', 'ekecheiria', 'ancient Greece', 'tradition', 'Olympics'],
    path: '/history',
  }),
  documents: generatePageMetadata({
    title: 'UN Documents Archive',
    description: 'Complete collection of UN resolutions and IOC documents on the Olympic Truce since 1993.',
    keywords: ['UN', 'resolutions', 'documents', 'IOC', 'legal'],
    path: '/documents',
  }),
  stories: generatePageMetadata({
    title: 'Youth Stories',
    description: 'First-person accounts from young people worldwide. Stories of peace, sport, and hope from conflict zones.',
    keywords: ['youth', 'stories', 'voices', 'peace', 'sport'],
    path: '/stories',
  }),
  reports: generatePageMetadata({
    title: 'Report Archives',
    description: 'Monthly compliance reports, final assessments, infographics, and downloadable data for researchers.',
    keywords: ['reports', 'data', 'analysis', 'download', 'research'],
    path: '/reports',
  }),
  advocacy: generatePageMetadata({
    title: 'Advocacy Toolkit',
    description: 'Resources to champion the Olympic Truce: infographics, policy briefs, social media templates, and talking points.',
    keywords: ['advocacy', 'toolkit', 'resources', 'campaign', 'action'],
    path: '/advocacy',
  }),
  candles: generatePageMetadata({
    title: 'Global Candle Wall',
    description: 'Geo-tagged peace gestures from around the world. Light a virtual candle for peace during the Olympic Truce.',
    keywords: ['candles', 'peace', 'solidarity', 'community', 'gestures'],
    path: '/candles',
  }),
  partners: generatePageMetadata({
    title: 'Our Partners',
    description: 'Organizations supporting the Olympic Truce and Truce Foundation mission.',
    keywords: ['partners', 'supporters', 'organizations', 'collaboration'],
    path: '/partners',
  }),
  press: generatePageMetadata({
    title: 'Press & Media',
    description: 'Media resources, embed widgets, press releases, and contact information for journalists.',
    keywords: ['press', 'media', 'journalists', 'coverage', 'contact'],
    path: '/press',
  }),
  about: generatePageMetadata({
    title: 'About Us',
    description: 'Learn about the Truce Foundation mission, team, and our commitment to transforming the Olympic Truce into action.',
    keywords: ['about', 'mission', 'team', 'foundation', 'organization'],
    path: '/about',
  }),
  forum: generatePageMetadata({
    title: 'Forum',
    description: 'Join the global conversation about peace, sport, and the Olympic Truce.',
    keywords: ['forum', 'community', 'discussion', 'conversation'],
    path: '/forum',
  }),
};
