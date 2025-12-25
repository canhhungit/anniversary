'use client';

import { NextIntlClientProvider } from 'next-intl';
import type { AbstractIntlMessages } from 'next-intl';
import type { ReactNode } from 'react';
import NotificationPermissionPrompt from '@/components/notifications/NotificationPermissionPrompt';
import PWAInstallPrompt from '@/components/seo/PWAInstallPrompt';

interface ProvidersProps {
  children: ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}

export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="Asia/Ho_Chi_Minh"
      now={new Date()}
    >
      {/* <NotificationPermissionPrompt /> */}
      {/* <PWAInstallPrompt /> */}
      {children}
    </NextIntlClientProvider>
  );
}
