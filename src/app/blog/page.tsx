import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { SubPageNavbar } from '@/components/layout/SubPageNavbar';
import { Footer } from '@/components/layout/Footer';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog | Psikoloji ve Ruh Sağlığı Yazıları',
  description:
    'Psikolog Asya Özcan tarafından yazılan çocuk psikolojisi, depresyon, anksiyete, online terapi ve ruh sağlığı konularında uzman blog yazıları.',
  openGraph: {
    title: 'Blog | Psikolog Asya Özcan',
    description:
      'Çocuk psikolojisi, depresyon, anksiyete, online terapi ve ruh sağlığı konularında uzman psikolog yazıları.',
    type: 'website',
    url: `${SITE_URL}/blog`,
    siteName: 'Psikolog Asya Özcan',
    locale: 'tr_TR',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'Psikolog Asya Özcan Blog' }],
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${SITE_URL}/blog`,
      name: 'Psikolog Asya Özcan Blog',
      description:
        'Çocuk psikolojisi, depresyon, anksiyete, online terapi ve ruh sağlığı konularında uzman psikolog yazıları.',
      url: `${SITE_URL}/blog`,
      inLanguage: 'tr-TR',
      publisher: { '@id': SITE_URL },
      blogPost: posts.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        url: `${SITE_URL}/blog/${post.slug}`,
        datePublished: post.date,
        image: `${SITE_URL}${post.image}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <SubPageNavbar />

      {/* Hero Section */}
      <section className="pt-[120px] pb-16 bg-gradient-to-br from-primary to-bg-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_viewBox=%220_0_100_100%22%3E%3Ccircle_cx=%2250%22_cy=%2250%22_r=%222%22_fill=%22rgba(255,255,255,0.1)%22/%3E%3C/svg%3E')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <nav aria-label="Sayfa konumu" className="text-sm text-text-light mb-4">
            <Link href="/" className="text-accent no-underline hover:underline">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span>Blog</span>
          </nav>
          <h1 className="text-[3rem] font-bold text-text-dark mb-4 max-[767px]:text-[2rem] max-[480px]:text-[1.7rem]">
            Psikoloji Blog
          </h1>
          <p className="text-text-light text-lg max-w-[600px] mx-auto max-[767px]:text-base">
            Psikoloji, ruh sağlığı ve kişisel gelişim hakkında uzman görüşleri ve rehber yazılar
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white max-[767px]:py-12">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-light text-lg">
                Henüz blog yazısı bulunmamaktadır. Yakında yeni içerikler eklenecektir.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
