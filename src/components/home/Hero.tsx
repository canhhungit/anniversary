import Link from 'next/link';
import { siteConfig } from '@/config/site';

interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    href: string;
    label: string;
  };
  secondaryCta: {
    href: string;
    label: string;
  };
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 py-12 shadow-lg">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_65%)]" />
      <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
          {eyebrow}
        </span>
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
          {title}
        </h1>
        <p className="text-base text-slate-300 sm:text-lg">{description}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-sky-300"
          >
            {secondaryCta.label}
          </Link>
        </div>
        <p className="text-xs text-slate-400">
          {siteConfig.description}
        </p>
      </div>
    </section>
  );
}
