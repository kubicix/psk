import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPostSlugs, getPostBySlug, formatDate } from '@/lib/blog';
import { BlogPostHeader } from '@/components/blog/BlogPostHeader';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { SITE_URL } from '@/lib/constants';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Yazı Bulunamadı' };

  return {
    title: `${post.title} | Psikolog Asya Özcan`,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: 'Psikolog Asya Özcan',
      locale: 'tr_TR',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Article Schema.org structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: 'Psikolog',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Psikolog Asya Özcan',
      url: SITE_URL,
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)] backdrop-blur-[10px] min-h-[70px] flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-accent font-semibold text-xl max-[767px]:text-lg group no-underline"
          >
            <div className="relative h-10 w-10 mr-3 overflow-hidden transition-transform duration-300 group-hover:scale-110 max-[767px]:h-[35px] max-[767px]:w-[35px] max-[767px]:mr-2.5">
              <Image
                src="/images/logo.png"
                alt="Psikolog Asya Özcan Logo"
                fill
                sizes="(max-width: 767px) 35px, 40px"
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-[1.4rem] max-[375px]:text-[1.1rem] max-[480px]:text-[1.2rem] max-[767px]:text-[1.2rem]">
              Psikolog Asya Özcan
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="text-text-dark font-medium text-sm no-underline hover:text-accent transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-accent font-medium text-sm no-underline hover:gap-3 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="h-3.5 w-3.5" />
              Ana Sayfa
            </Link>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="pt-[100px] pb-20 max-[767px]:pt-[90px] max-[767px]:pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-[780px] mx-auto">
            <BlogPostHeader post={post} />

            {/* MDX Content */}
            <div className="prose prose-lg max-w-none
              prose-headings:text-text-dark prose-headings:font-bold
              prose-h2:text-[1.6rem] prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-[1.25rem] prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-text-light prose-p:leading-[1.8] prose-p:mb-5
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-text-dark prose-strong:font-semibold
              prose-ul:text-text-light prose-ul:leading-[1.8]
              prose-ol:text-text-light prose-ol:leading-[1.8]
              prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-[rgba(147,112,219,0.04)] prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-lg prose-blockquote:text-text-light prose-blockquote:italic
              prose-table:w-full
              prose-th:bg-[rgba(147,112,219,0.08)] prose-th:text-text-dark prose-th:font-semibold prose-th:p-3 prose-th:text-left
              prose-td:p-3 prose-td:border-b prose-td:border-[rgba(0,0,0,0.06)]
              prose-hr:border-[rgba(147,112,219,0.15)] prose-hr:my-10
              prose-code:text-accent prose-code:bg-[rgba(147,112,219,0.06)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            ">
              <MDXRemote source={post.content} />
            </div>

            {/* Author Bio */}
            <AuthorBio />

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary to-bg-light rounded-[20px] text-center border border-[rgba(230,230,250,0.5)] max-[575px]:p-5">
              <h3 className="text-xl font-bold text-text-dark mb-3">
                Profesyonel Destek mi Arıyorsunuz?
              </h3>
              <p className="text-text-light text-sm mb-5 max-w-[400px] mx-auto">
                Online veya yüz yüze terapi seansları için randevu alabilirsiniz.
              </p>
              <Link
                href="/#contact"
                className="inline-block relative overflow-hidden bg-accent hover:bg-opacity-95 text-white font-semibold py-3.5 px-[35px] rounded-[30px] transition-all duration-300 shadow-[0_4px_15px_rgba(147,112,219,0.3)] hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(147,112,219,0.5)] active:translate-y-[-1px] no-underline text-sm"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-text-dark text-white py-10 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm m-0">
            &copy; {new Date().getFullYear()} Psikolog Asya Özcan. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </>
  );
}
