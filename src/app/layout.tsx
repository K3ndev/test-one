import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Nav from './_components/nav';
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
        <Nav />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
