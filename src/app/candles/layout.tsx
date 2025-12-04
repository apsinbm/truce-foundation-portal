import { PAGE_SEO } from '@/lib/seo';

export const metadata = PAGE_SEO.candles;

export default function CandlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
