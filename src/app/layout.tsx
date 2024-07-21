import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import { fontSans } from './fonts';
import Providers from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.URL),
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'Tailwind', 'Shadcn', 'Template'],
  robots: {
    follow: true,
    index: true,
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@gybex_enock',
    site: siteConfig.URL,
  },
  creator: siteConfig.author.name,
};
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(fontSans.variable)}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
