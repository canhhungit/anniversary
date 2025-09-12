import createNextIntlPlugin from 'next-intl/plugin';
import withSerwistInit from "@serwist/next";

const withNextIntl = createNextIntlPlugin();
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com; style-src 'self' 'unsafe-inline'; img-src * blob: data:; font-src 'self' data:;",
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/todos/:slug',
        destination: 'https://jsonplaceholder.typicode.com/todos/:slug',
      },
    ];
  },
  productionBrowserSourceMaps: true,
  basePath: '',
  output: 'standalone',
  swcMinify: true,
  assetPrefix: '',
  publicRuntimeConfig: {
    SERVICE_PATH: '',
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
  images: {
    path: '/_next/image',
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
      },
    ],
  },
};

// Cấu hình PWA
const withSerwist = withSerwistInit({
  // Note: This is only an example. If you use Pages Router,
  // use something else that works, such as "service-worker/index.ts".
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  disable: false
});


// Kết hợp next-pwa và next-intl
export default withNextIntl(withSerwist(nextConfig));
