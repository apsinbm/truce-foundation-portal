import { MetadataRoute } from 'next';

const BASE_URL = 'https://index.trucefoundation.world';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: 'daily' },
    { url: `${BASE_URL}/portal`, priority: 0.9, changeFrequency: 'daily' },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/co-sponsors`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/accountability`, priority: 0.8, changeFrequency: 'daily' },
    { url: `${BASE_URL}/ceasefire`, priority: 0.8, changeFrequency: 'daily' },
    { url: `${BASE_URL}/humanitarian`, priority: 0.8, changeFrequency: 'daily' },
    { url: `${BASE_URL}/truce-pulse`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/history`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/history/ancient`, priority: 0.6, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/history/modern`, priority: 0.6, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/methodology`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/partners`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/press`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/advocacy`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/documents`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/briefing`, priority: 0.6, changeFrequency: 'daily' },
    { url: `${BASE_URL}/briefing-sheet`, priority: 0.6, changeFrequency: 'daily' },
    { url: `${BASE_URL}/reports`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/scorecards`, priority: 0.6, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/leaderboard`, priority: 0.6, changeFrequency: 'daily' },
    { url: `${BASE_URL}/videos`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/gallery`, priority: 0.5, changeFrequency: 'monthly' },
  ];
}
