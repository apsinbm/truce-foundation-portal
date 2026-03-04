import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Videos',
  description: 'Video content about the Olympic Truce, peace ceremonies, and foundation activities.',
  keywords: ['videos', 'Olympic Truce', 'peace', 'ceremonies'],
  path: '/videos',
});

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
