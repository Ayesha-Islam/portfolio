import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

import { SideLinks } from '@/components/side-links';
import { SiteHeader } from '@/components/navigation/site-header';
import { siteConfig } from '@/config/site';

import './globals.css';

const calibre = localFont({
  src: [
    { path: './fonts/Calibre-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Calibre-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Calibre-Semibold.woff2', weight: '600', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-calibre',
});

const sfMono = localFont({
  src: [
    { path: './fonts/SFMono-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/SFMono-RegularItalic.woff2', weight: '400', style: 'italic' },
    {
      path: './fonts/SFMono-SemiboldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-sf-mono',
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Full-Stack Developer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a192f',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${calibre.variable} ${sfMono.variable}`}>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        <SideLinks />
        <main id="content" className="site-main">
          {children}
        </main>
      </body>
    </html>
  );
}
