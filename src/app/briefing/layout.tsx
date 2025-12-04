import { PAGE_SEO } from '@/lib/seo';

export const metadata = PAGE_SEO.briefing;

export default function BriefingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
