import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPostSlugs, getAllPosts, getPostBySlug } from '@/lib/blog';
import { BlogPostHeader } from '@/components/blog/BlogPostHeader';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { BlogCard } from '@/components/blog/BlogCard';
import { SubPageNavbar } from '@/components/layout/SubPageNavbar';
import { Footer } from '@/components/layout/Footer';
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

  const url = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = `${SITE_URL}${post.image}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author, url: SITE_URL }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author],
      url,
      siteName: 'Psikolog Asya Özcan',
      locale: 'tr_TR',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const url = `${SITE_URL}/blog/${post.slug}`;
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const previousPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  // Related: shared tags first, then recency; exclude self
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const sharedA = a.tags.filter((t) => post.tags.includes(t)).length;
      const sharedB = b.tags.filter((t) => post.tags.includes(t)).length;
      return sharedB - sharedA;
    })
    .slice(0, 2);

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: `${SITE_URL}${post.image}`,
      inLanguage: 'tr-TR',
      keywords: post.tags.join(', '),
      author: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: post.author,
        jobTitle: 'Psikolog',
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Psikolog Asya Özcan',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/logo.png`,
        },
      },
      datePublished: post.date,
      dateModified: post.updated || post.date,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
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

            {/* Medical Disclaimer */}
            <p className="mt-10 p-4 bg-bg-light rounded-[12px] text-text-light text-sm leading-[1.7] border border-[rgba(230,230,250,0.7)]">
              <strong className="text-text-dark">Not:</strong> Bu yazı bilgilendirme amaçlıdır;
              psikolojik değerlendirme, tanı veya tedavi önerisi yerine geçmez. Yaşadığınız
              zorluklar için bir ruh sağlığı uzmanına başvurmanızı öneririm.
            </p>

            {/* Author Bio */}
            <AuthorBio />

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary to-bg-light rounded-[20px] text-center border border-[rgba(230,230,250,0.5)] max-[575px]:p-5">
              <h2 className="text-xl font-bold text-text-dark mb-3">
                Profesyonel Destek mi Arıyorsunuz?
              </h2>
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

            {/* Previous / Next Navigation */}
            {(previousPost || nextPost) && (
              <nav aria-label="Yazı gezinmesi" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                {previousPost ? (
                  <Link
                    href={`/blog/${previousPost.slug}`}
                    className="block p-5 bg-white rounded-[16px] border border-[rgba(230,230,250,0.7)] shadow-[0_3px_15px_rgba(0,0,0,0.06)] no-underline hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(147,112,219,0.18)] transition-all duration-300"
                  >
                    <span className="flex items-center gap-2 text-xs text-text-light mb-2">
                      <FontAwesomeIcon icon={faArrowLeft} className="h-3 w-3" />
                      Önceki Yazı
                    </span>
                    <span className="block font-semibold text-text-dark text-sm leading-[1.5]">
                      {previousPost.title}
                    </span>
                  </Link>
                ) : (
                  <span aria-hidden />
                )}
                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="block p-5 bg-white rounded-[16px] border border-[rgba(230,230,250,0.7)] shadow-[0_3px_15px_rgba(0,0,0,0.06)] no-underline hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(147,112,219,0.18)] transition-all duration-300 text-right"
                  >
                    <span className="flex items-center justify-end gap-2 text-xs text-text-light mb-2">
                      Sonraki Yazı
                      <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
                    </span>
                    <span className="block font-semibold text-text-dark text-sm leading-[1.5]">
                      {nextPost.title}
                    </span>
                  </Link>
                )}
              </nav>
            )}

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-14">
                <h2 className="text-[1.35rem] font-bold text-text-dark mb-6">İlgili Yazılar</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((related, index) => (
                    <BlogCard key={related.slug} post={related} index={index} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
