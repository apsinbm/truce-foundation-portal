import { PAGE_SEO } from '@/lib/seo';

export const metadata = PAGE_SEO.humanitarian;

export default function HumanitarianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
