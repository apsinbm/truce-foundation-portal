import { PAGE_SEO } from '@/lib/seo';

export const metadata = PAGE_SEO.advocacy;

export default function AdvocacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
