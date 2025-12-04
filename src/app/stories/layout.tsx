import { PAGE_SEO } from '@/lib/seo';

export const metadata = PAGE_SEO.stories;

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
