import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import Providers from './providers';

const fontMontserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bossrod.com'),
  title: 'clara-international-test',
  description: 'clara-international-test',
  manifest: '/site.webmanifest',
};

export type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${fontMontserrat.variable} ${fontInter.variable}`}>
        <div className="flex gap-5">
          <Link href="/" className="font-inter text-xl underline">
            Home
          </Link>
          <Link href="/activity-one" className="font-montserrat text-xl underline">
            Activity 1
          </Link>
          <Link href="/activity-two" className="font-montserrat text-xl underline">
            Activity 2
          </Link>
          <Link href="/activity-three" className="font-montserrat text-xl underline">
            Activity 3
          </Link>
          <Link href="/activity-four" className="font-montserrat text-xl underline">
            Activity 4
          </Link>
          <Link href="/activity-five" className="font-montserrat text-xl underline">
            Activity 5
          </Link>
          <Link href="/activity-six" className="font-montserrat text-xl underline">
            Activity 6
          </Link>
          <Link href="/activity-seven" className="font-montserrat text-xl underline">
            Activity 7
          </Link>
          <Link href="/activity-eight" className="font-montserrat text-xl underline">
            Activity 8
          </Link>
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
