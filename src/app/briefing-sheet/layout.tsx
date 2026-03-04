import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Briefing Sheet',
  description: 'Daily briefing sheet summarizing key Olympic Truce compliance developments.',
  keywords: ['briefing', 'daily', 'summary', 'compliance'],
  path: '/briefing-sheet',
});

export default function BriefingSheetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
