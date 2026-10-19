import type { Metadata, Viewport } from 'next';
import { Big_Shoulders, Public_Sans } from 'next/font/google';
import { firm } from '@/lib/content';
import './globals.css';

// Big Shoulders: a tall, condensed face made for signage. It carries the billboard headlines.
// Public Sans: a plain, sturdy body face.
// adjustFontFallback is off because Next has no fallback metrics for this face yet.
const display = Big_Shoulders({ subsets: ['latin'], variable: '--font-display', display: 'swap', adjustFontFallback: false });
const sans = Public_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  title: `${firm.name} ${firm.line} — ${firm.state} car accident & injury lawyers`,
  description: `Hurt in a crash in ${firm.state}? ${firm.name} offers a free case review, 24/7, and no fee unless we win. A fictional law firm design concept.`,
};

export const viewport: Viewport = { themeColor: '#0B1220', width: 'device-width', initialScale: 1 };

// Runs before paint so elements that animate in never flash in their final position first.
const motionFlag = `try{if(matchMedia('(prefers-reduced-motion: no-preference)').matches)document.documentElement.classList.add('motion')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script adds `motion` to <html> before hydration.
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${sans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
