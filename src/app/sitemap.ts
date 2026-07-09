import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { getAllServiceSlugs } from '@/lib/services';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const posts = getAllPosts();

  // Latest post date is a stable, meaningful lastModified for listing pages
  // (avoids emitting a new timestamp on every build).
  const latestPostDate = posts.length > 0 ? new Date(posts[0].date) : new Date('2026-07-01');

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: latestPostDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hizmetler`,
      lastModified: latestPostDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/hizmetler/${slug}`,
    lastModified: latestPostDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
