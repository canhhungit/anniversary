import type { MetadataRoute } from 'next';
import { getBaseUrl } from 'src/utils/helper';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
