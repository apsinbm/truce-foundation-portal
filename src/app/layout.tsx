import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Truce Foundation - Olympic Truce',
    template: '%s | Truce Foundation',
  },
  description: 'Transforming the Olympic Truce tradition into meaningful action for peace. Monitoring compliance, advocacy, and global engagement.',
  keywords: ['Olympic Truce', 'Truce Foundation', 'Peace', 'Milano-Cortina 2026', 'Olympics'],
  authors: [{ name: 'Truce Foundation' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/icon-192x192.png',
  },
  metadataBase: new URL('https://index.trucefoundation.world'),
  openGraph: {
    title: 'Truce Foundation - Olympic Truce',
    description: 'Transforming the Olympic Truce tradition into meaningful action for peace.',
    url: 'https://index.trucefoundation.world',
    siteName: 'Truce Foundation',
    type: 'website',
    images: [
      {
        url: '/truce-foundation-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Truce Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@olympictruce',
    title: 'Truce Foundation - Olympic Truce',
    description: 'Transforming the Olympic Truce tradition into meaningful action for peace.',
    images: ['/truce-foundation-logo.jpg'],
  },
  alternates: {
    canonical: 'https://index.trucefoundation.world',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
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
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased font-serif">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Truce Foundation',
              url: 'https://index.trucefoundation.world',
              logo: 'https://index.trucefoundation.world/truce-foundation-logo.jpg',
              description: 'A 501(c)(3) non-profit promoting the ancient Olympic Truce through awards, cultural programs, compliance monitoring, and diplomacy.',
              foundingDate: '1993',
              founder: {
                '@type': 'Person',
                name: 'Hugh Dugan',
              },
              sameAs: ['https://x.com/olympictruce'],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
