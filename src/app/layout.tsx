import './globals.css';
import type { Metadata, Viewport } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import React from 'react';
import AppShell from '@/components/layout/AppShell';
import { Providers } from '@/components/providers/Providers';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import { metaData, organizationData, websiteData } from '@/config/site';

export const metadata: Metadata = metaData;
export const viewport: Viewport = {
  themeColor: '#0f172a',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <OrganizationSchema data={organizationData} />
        <WebSiteSchema data={websiteData} />
      </head>
      <body
        className="bg-slate-950 text-slate-100 antialiased"
        suppressHydrationWarning
      >
        <Providers locale={locale} messages={messages}>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
