import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Gallery',
  description: 'Photo gallery documenting Olympic Truce events, ceremonies, and peace initiatives.',
  keywords: ['gallery', 'photos', 'events', 'ceremonies'],
  path: '/gallery',
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
