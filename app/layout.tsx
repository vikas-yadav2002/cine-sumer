// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { helvetica } from './fonts';   // ← Import Helvetica

export const metadata: Metadata = {
  title: 'CINESUMER - Precision-crafted looks for colorists',
  description:
    'Precision-crafted looks for colorists who refuse to fake it. Authentic print profiles, nuanced grain, halation, and color density with ACES and HDR support.',
  keywords: [
    'color grading',
    'cinema looks',
    'post production',
    'film print emulation',
    'digital intermediate',
    'ACES workflow',
    'HDR color grading',
  ],
  openGraph: {
    title: 'CINESUMER - Precision-crafted looks for colorists',
    description:
      'Precision-crafted looks for colorists who refuse to fake it. Authentic print profiles, nuanced grain, halation, and color density with ACES and HDR support.',
    type: 'website',
    siteName: 'CINESUMER',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CINESUMER - Precision-crafted looks for colorists',
    description:
      'Precision-crafted looks for colorists who refuse to fake it. Authentic print profiles, nuanced grain, halation, and color density with ACES and HDR support.',
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={helvetica.variable}>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'CINESUMER',
              description:
                'Precision-crafted looks for professional colorists. Authentic print profiles, nuanced grain, halation, and HDR-ready color density.',
              brand: {
                '@type': 'Brand',
                name: 'CINESUMER',
              },
              category: 'Software',
              offers: {
                '@type': 'Offer',
                url: 'https://www.cinesumer.com',
                availability: 'https://schema.org/InStock',
              },
            }),
          }}
        />
      </head>
      <body className="font-helvetica antialiased bg-[#121212] text-white">
        {children}
      </body>
    </html>
  );
}