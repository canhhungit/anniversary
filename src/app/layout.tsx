import './globals.css';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import type { Metadata, Viewport } from 'next';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import PWAInstallPrompt from '@/components/seo/PWAInstallPrompt';
import { metaData, organizationData, websiteData } from '@/config/site';

export const metadata: Metadata = metaData;
export const viewport: Viewport = { themeColor: '#FFFFFF' };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <OrganizationSchema data={organizationData} />
        <WebSiteSchema data={websiteData} />
      </head>
      <body>
        <PWAInstallPrompt />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
