import { PAGE_SEO } from '@/lib/seo';

export const metadata = PAGE_SEO.reports;

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
