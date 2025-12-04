import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Truce Portal',
  description: 'Your gateway to Olympic Truce resources, real-time compliance monitoring, advocacy tools, and global engagement.',
  keywords: ['portal', 'resources', 'monitoring', 'advocacy', 'engagement'],
  path: '/portal',
});

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
