import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"], // for boldness
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Filmbox - Film emulation without compromise',
  description: 'Authentic print profiles, nuanced grain, halation, and color density with ACES and HDR support.',
  keywords: ['film emulation', 'color grading', 'post production', 'cinema'],
  openGraph: {
    title: 'Filmbox - Film emulation without compromise',
    description: 'Authentic print profiles, nuanced grain, halation, and color density with ACES and HDR support.',
    type: 'website',
    siteName: 'Filmbox',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Filmbox - Film emulation without compromise',
    description: 'Authentic print profiles, nuanced grain, halation, and color density with ACES and HDR support.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Filmbox',
              description: 'Film emulation software without compromise',
              brand: {
                '@type': 'Brand',
                name: 'Video Village',
              },
              category: 'Software',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-filmbox-bg text-filmbox-text-primary">
        {children}
      </body>
    </html>
  );
}