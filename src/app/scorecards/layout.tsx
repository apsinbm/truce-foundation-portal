import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Country Scorecards',
  description: 'Detailed compliance scorecards for countries during the Olympic Truce period.',
  keywords: ['scorecards', 'compliance', 'country', 'assessment'],
  path: '/scorecards',
});

export default function ScorecardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
