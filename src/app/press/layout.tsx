import { PAGE_SEO } from '@/lib/seo';

export const metadata = PAGE_SEO.press;

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
