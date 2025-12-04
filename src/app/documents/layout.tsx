import { PAGE_SEO } from '@/lib/seo';

export const metadata = PAGE_SEO.documents;

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
