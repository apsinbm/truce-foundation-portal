import { PAGE_SEO } from '@/lib/seo';

export const metadata = PAGE_SEO.leaderboard;

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
