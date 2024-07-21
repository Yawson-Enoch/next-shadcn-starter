import { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  /* add your app routes here
   * example: ['/', '/about', '/etc']
   */
  return [''].map((route) => ({
    url: `${siteConfig.URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
}
