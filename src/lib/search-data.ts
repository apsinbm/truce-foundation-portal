// Search index for the Truce Foundation Portal
// This provides instant client-side search across all pages and content

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: 'page' | 'country' | 'document' | 'topic';
  keywords: string[];
}

// All searchable content in the portal
export const SEARCH_INDEX: SearchItem[] = [
  // === MAIN PAGES ===
  {
    id: 'portal',
    title: 'Truce Portal Hub',
    description: 'Your gateway to Olympic Truce resources, monitoring, and engagement',
    href: '/portal',
    category: 'page',
    keywords: ['portal', 'hub', 'resources', 'gateway', 'main', 'home'],
  },
  {
    id: 'index',
    title: 'Truce Compliance Index',
    description: 'Real-time monitoring dashboard tracking Olympic Truce compliance worldwide',
    href: 'https://truce-index.vercel.app',
    category: 'page',
    keywords: ['map', 'live', 'dashboard', 'monitoring', 'incidents', 'compliance'],
  },
  {
    id: 'briefing',
    title: 'Daily Briefing',
    description: 'Auto-generated daily summary of global incidents and trends',
    href: '/briefing',
    category: 'page',
    keywords: ['daily', 'summary', 'news', 'update', 'incidents', 'today'],
  },
  {
    id: 'leaderboard',
    title: 'Country Leaderboard',
    description: 'Countries ranked by incidents and compliance metrics',
    href: '/leaderboard',
    category: 'page',
    keywords: ['ranking', 'countries', 'best', 'worst', 'violations', 'score'],
  },
  {
    id: 'accountability',
    title: 'Accountability Record',
    description: 'Historical record of Truce violations from 1992 to present',
    href: '/accountability',
    category: 'page',
    keywords: ['violations', 'history', 'record', 'wall of shame', 'accountability'],
  },
  {
    id: 'humanitarian',
    title: 'Humanitarian Access',
    description: 'Monitoring barriers to humanitarian aid delivery during Truce periods',
    href: '/humanitarian',
    category: 'page',
    keywords: ['aid', 'humanitarian', 'corridors', 'access', 'blockade', 'relief'],
  },
  {
    id: 'ceasefire',
    title: 'Ceasefire Watch',
    description: 'Tracking fragile peace agreements and ceasefires during the Truce',
    href: '/ceasefire',
    category: 'page',
    keywords: ['ceasefire', 'peace', 'agreement', 'truce', 'armistice'],
  },
  {
    id: 'methodology',
    title: 'Methodology',
    description: 'How we measure Olympic Truce compliance across four pillars',
    href: '/methodology',
    category: 'page',
    keywords: ['methodology', 'measurement', 'scoring', 'criteria', 'pillars'],
  },
  {
    id: 'history',
    title: 'Truce History',
    description: '2,800 years of Olympic Truce tradition from ancient Greece to modern UN resolutions',
    href: '/history',
    category: 'page',
    keywords: ['history', 'ancient', 'greece', 'ekecheiria', 'tradition', 'olympics'],
  },
  {
    id: 'documents',
    title: 'UN Documents Archive',
    description: 'Complete collection of UN resolutions and IOC documents on Olympic Truce',
    href: '/documents',
    category: 'page',
    keywords: ['UN', 'resolution', 'documents', 'IOC', 'official', 'legal'],
  },
  {
    id: 'stories',
    title: 'Youth Stories',
    description: 'First-person accounts from truce-enabled zones',
    href: '/stories',
    category: 'page',
    keywords: ['stories', 'youth', 'personal', 'accounts', 'voices'],
  },
  {
    id: 'candles',
    title: 'Global Candle Wall',
    description: 'Geo-tagged peace gestures from around the world',
    href: '/candles',
    category: 'page',
    keywords: ['candles', 'peace', 'gestures', 'solidarity', 'community'],
  },
  {
    id: 'advocacy',
    title: 'Advocacy Toolkit',
    description: 'Infographics, policy briefs, and social media templates',
    href: '/advocacy',
    category: 'page',
    keywords: ['advocacy', 'toolkit', 'infographics', 'social media', 'action'],
  },
  {
    id: 'press',
    title: 'Press & Media',
    description: 'Media resources, embed widgets, and press contacts',
    href: '/press',
    category: 'page',
    keywords: ['press', 'media', 'journalists', 'coverage', 'contact'],
  },
  {
    id: 'about',
    title: 'About Us',
    description: 'Learn about the Truce Foundation mission and team',
    href: '/about',
    category: 'page',
    keywords: ['about', 'mission', 'team', 'foundation', 'who we are'],
  },
  {
    id: 'partners',
    title: 'Our Partners',
    description: 'Organizations supporting the Olympic Truce',
    href: '/partners',
    category: 'page',
    keywords: ['partners', 'sponsors', 'supporters', 'organizations'],
  },
  {
    id: 'reports',
    title: 'Report Archives',
    description: 'Monthly and final reports, infographics, and data downloads',
    href: '/reports',
    category: 'page',
    keywords: ['reports', 'download', 'PDF', 'data', 'analysis'],
  },

  // === KEY COUNTRIES ===
  {
    id: 'country-rus',
    title: 'Russia',
    description: 'Russian Federation truce compliance record',
    href: '/accountability/country/rus',
    category: 'country',
    keywords: ['russia', 'russian', 'moscow', 'putin', 'ukraine war'],
  },
  {
    id: 'country-ukr',
    title: 'Ukraine',
    description: 'Ukraine conflict and humanitarian situation',
    href: '/accountability/country/ukr',
    category: 'country',
    keywords: ['ukraine', 'ukrainian', 'kyiv', 'kiev', 'war', 'conflict'],
  },
  {
    id: 'country-isr',
    title: 'Israel',
    description: 'Israel truce compliance record',
    href: '/accountability/country/isr',
    category: 'country',
    keywords: ['israel', 'israeli', 'tel aviv', 'jerusalem', 'gaza', 'palestine'],
  },
  {
    id: 'country-pse',
    title: 'Palestine',
    description: 'Palestinian territories humanitarian situation',
    href: '/accountability/country/pse',
    category: 'country',
    keywords: ['palestine', 'palestinian', 'gaza', 'west bank', 'hamas'],
  },
  {
    id: 'country-syr',
    title: 'Syria',
    description: 'Syria conflict and truce compliance',
    href: '/accountability/country/syr',
    category: 'country',
    keywords: ['syria', 'syrian', 'damascus', 'assad', 'civil war'],
  },
  {
    id: 'country-yem',
    title: 'Yemen',
    description: 'Yemen conflict and humanitarian crisis',
    href: '/accountability/country/yem',
    category: 'country',
    keywords: ['yemen', 'yemeni', 'sanaa', 'houthi', 'saudi'],
  },
  {
    id: 'country-sdn',
    title: 'Sudan',
    description: 'Sudan conflict and humanitarian situation',
    href: '/accountability/country/sdn',
    category: 'country',
    keywords: ['sudan', 'sudanese', 'khartoum', 'darfur', 'rsf'],
  },
  {
    id: 'country-afg',
    title: 'Afghanistan',
    description: 'Afghanistan humanitarian access and security',
    href: '/accountability/country/afg',
    category: 'country',
    keywords: ['afghanistan', 'afghan', 'kabul', 'taliban'],
  },
  {
    id: 'country-mmr',
    title: 'Myanmar',
    description: 'Myanmar military coup and humanitarian crisis',
    href: '/accountability/country/mmr',
    category: 'country',
    keywords: ['myanmar', 'burma', 'burmese', 'rohingya', 'military', 'junta'],
  },
  {
    id: 'country-eth',
    title: 'Ethiopia',
    description: 'Ethiopia Tigray conflict and peace process',
    href: '/accountability/country/eth',
    category: 'country',
    keywords: ['ethiopia', 'ethiopian', 'tigray', 'addis ababa'],
  },

  // === KEY TOPICS ===
  {
    id: 'topic-milano-cortina',
    title: 'Milano-Cortina 2026',
    description: 'The 2026 Winter Olympics and Paralympic Games in Italy',
    href: '/about',
    category: 'topic',
    keywords: ['milano', 'cortina', '2026', 'winter olympics', 'italy', 'paralympics'],
  },
  {
    id: 'topic-ekecheiria',
    title: 'Ekecheiria (Ancient Truce)',
    description: 'The ancient Greek Olympic Truce tradition',
    href: '/history/ancient',
    category: 'topic',
    keywords: ['ekecheiria', 'ancient', 'greece', 'tradition', 'sacred truce'],
  },
  {
    id: 'topic-un-resolution',
    title: 'UN Resolution A/RES/78/10',
    description: 'Latest UN General Assembly resolution on Olympic Truce',
    href: '/documents',
    category: 'document',
    keywords: ['UN', 'resolution', '78/10', 'general assembly', 'UNGA'],
  },
  {
    id: 'topic-maritime',
    title: 'Maritime Threats',
    description: 'Maritime mine incidents and shipping disruptions',
    href: '/humanitarian',
    category: 'topic',
    keywords: ['maritime', 'mines', 'shipping', 'black sea', 'red sea', 'houthi'],
  },
  {
    id: 'topic-fragile-peace',
    title: 'Fragile Peace Zones',
    description: 'Post-conflict regions requiring careful monitoring',
    href: '/humanitarian',
    category: 'topic',
    keywords: ['fragile', 'peace', 'post-conflict', 'stabilizing', 'ceasefire'],
  },
];

// Search function - returns matching items sorted by relevance
export function searchPortal(query: string): SearchItem[] {
  if (!query || query.length < 2) return [];

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/);

  const results = SEARCH_INDEX.map((item) => {
    let score = 0;

    // Check title match (highest weight)
    const titleLower = item.title.toLowerCase();
    if (titleLower === normalizedQuery) {
      score += 100; // Exact match
    } else if (titleLower.includes(normalizedQuery)) {
      score += 50; // Contains full query
    } else {
      queryWords.forEach((word) => {
        if (titleLower.includes(word)) score += 20;
      });
    }

    // Check description match
    const descLower = item.description.toLowerCase();
    if (descLower.includes(normalizedQuery)) {
      score += 30;
    } else {
      queryWords.forEach((word) => {
        if (descLower.includes(word)) score += 10;
      });
    }

    // Check keywords match
    item.keywords.forEach((keyword) => {
      const keyLower = keyword.toLowerCase();
      if (keyLower === normalizedQuery) {
        score += 40;
      } else if (keyLower.includes(normalizedQuery) || normalizedQuery.includes(keyLower)) {
        score += 25;
      } else {
        queryWords.forEach((word) => {
          if (keyLower.includes(word) || word.includes(keyLower)) score += 15;
        });
      }
    });

    return { item, score };
  })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10) // Limit to top 10 results
    .map(({ item }) => item);

  return results;
}

// Get category label for display
export function getCategoryLabel(category: SearchItem['category']): string {
  switch (category) {
    case 'page':
      return 'Page';
    case 'country':
      return 'Country';
    case 'document':
      return 'Document';
    case 'topic':
      return 'Topic';
    default:
      return 'Result';
  }
}

// Get category color for display
export function getCategoryColor(category: SearchItem['category']): string {
  switch (category) {
    case 'page':
      return 'bg-blue-500/20 text-blue-300';
    case 'country':
      return 'bg-green-500/20 text-green-300';
    case 'document':
      return 'bg-purple-500/20 text-purple-300';
    case 'topic':
      return 'bg-amber-500/20 text-amber-300';
    default:
      return 'bg-slate-500/20 text-slate-300';
  }
}
