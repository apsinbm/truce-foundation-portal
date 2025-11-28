import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Truce Foundation - Olympic Truce',
  description: 'Transforming the Olympic Truce tradition into meaningful action for peace. Monitoring compliance, advocacy, and global engagement.',
  keywords: ['Olympic Truce', 'Truce Foundation', 'Peace', 'Milano-Cortina 2026', 'Olympics'],
  authors: [{ name: 'Truce Foundation' }],
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/icon-192x192.png',
  },
  openGraph: {
    title: 'Truce Foundation - Olympic Truce',
    description: 'Transforming the Olympic Truce tradition into meaningful action for peace.',
    url: 'https://trucefoundation.world',
    siteName: 'Truce Foundation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Truce Foundation - Olympic Truce',
    description: 'Transforming the Olympic Truce tradition into meaningful action for peace.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
