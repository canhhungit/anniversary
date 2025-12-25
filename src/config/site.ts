export const siteConfig = {
  name: 'Next.js Boilerplate',
  description:
    'Production-ready foundation for building scalable Next.js applications with TypeScript, Tailwind CSS, SEO and PWA tooling.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://example.com',
  ogImage: '/og-image.png',
  keywords: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'PWA',
    'Boilerplate',
    'React',
    'SEO',
    'Performance',
  ],
  author: {
    name: 'Your Name',
    url: 'https://github.com/yourname',
  },
  links: {
    github: 'https://github.com/yourname/yourrepo',
    docs: 'https://nextjs.org/docs',
    deploy:
      'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
  },
  locale: {
    default: 'vi',
    supported: ['vi', 'en'] as const,
  },
};

export type SiteConfig = typeof siteConfig;

export const metaData = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [siteConfig.author],
  creator: siteConfig.author.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.url,
    languages: {
      vi: `${siteConfig.url}/vi`,
      en: `${siteConfig.url}/en`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: {
      default: siteConfig.name,
      template: `%s · ${siteConfig.name}`,
    },
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: siteConfig.name,
      template: `%s · ${siteConfig.name}`,
    },
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export const organizationData = {
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.ogImage}`,
  description: siteConfig.description,
  address: {
    streetAddress: '123 Developer Street',
    addressLocality: 'Ho Chi Minh City',
    addressRegion: 'HCM',
    postalCode: '70000',
    addressCountry: 'VN',
  },
  telephone: '+84 123 456 789',
  email: 'contact@example.com',
  sameAs: [siteConfig.links.github, 'https://twitter.com/yourhandle'],
};

export const websiteData = {
  name: siteConfig.name,
  url: siteConfig.url,
  searchUrl: `${siteConfig.url}/search`,
};
