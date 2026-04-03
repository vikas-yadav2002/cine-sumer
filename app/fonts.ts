// app/fonts.ts
import localFont from 'next/font/local';

export const helvetica = localFont({
  src: [
    {
      path: '../public/fonts/Helvetica.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Helvetica-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Helvetica-Oblique.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/helvetica-light-587ebe5a59211.woff',
      weight: '300',
      style: 'normal',
    },
    // Add more only when the file actually exists in public/fonts
    // Example (uncomment when you add the file):
    // {
    //   path: '../public/fonts/helvetica-compressed-....woff',
    //   weight: '500',
    //   style: 'normal',
    // },
  ],
  display: 'swap',
  variable: '--font-helvetica',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});