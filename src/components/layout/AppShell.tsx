import type { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export default async function AppShell({ children }: { children: ReactNode }) {
  const t = await getTranslations('Navigation');

  const navItems = [
    { href: '#features', label: t('features') },
    { href: '#tooling', label: t('tooling') },
    { href: '#demo', label: t('demo') },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <main className="flex-1">{children}</main>
    </div>
  );
}
