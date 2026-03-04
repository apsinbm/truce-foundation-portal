import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'UN Co-Sponsors',
  description: 'Countries co-sponsoring the UN General Assembly Olympic Truce Resolution for Milano-Cortina 2026.',
  keywords: ['co-sponsors', 'UN resolution', 'General Assembly', 'Milano-Cortina'],
  path: '/co-sponsors',
});

export default function CoSponsorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
