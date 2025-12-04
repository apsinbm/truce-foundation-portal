import { PAGE_SEO } from '@/lib/seo';

export const metadata = PAGE_SEO.history;

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
