import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Truce Pulse',
  description: 'Expert analysis of key developments affecting Olympic Truce compliance. In-depth briefings on diplomatic actions, ceasefire dynamics, and humanitarian access.',
  keywords: ['truce pulse', 'analysis', 'briefings', 'diplomatic', 'compliance'],
  path: '/truce-pulse',
});

export default function TrucePulseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
