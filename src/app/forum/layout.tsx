import { PAGE_SEO } from '@/lib/seo';

export const metadata = PAGE_SEO.forum;

export default function ForumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
