import { PAGE_SEO } from '@/lib/seo';

export const metadata = PAGE_SEO.accountability;

export default function AccountabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
