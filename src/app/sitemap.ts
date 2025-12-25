import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/utils/helper';

// Define all static routes here
const staticRoutes = [
  {
    path: '/',
    changeFrequency: 'daily' as const,
    priority: 1.0,
  },
  // Add more routes as your app grows
  // {
  //   path: '/about',
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.8,
  // },
  // {
  //   path: '/contact',
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.5,
  // },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const lastModified = new Date();

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
