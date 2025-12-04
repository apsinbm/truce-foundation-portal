import { PAGE_SEO } from '@/lib/seo';

export const metadata = PAGE_SEO.partners;

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
