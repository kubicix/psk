import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getAllPosts } from '@/lib/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog | Psikolog Asya Özcan | Psikoloji Yazıları',
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
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
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

          <Link
            href="/"
            className="flex items-center gap-2 text-accent font-medium text-sm no-underline hover:gap-3 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-3.5 w-3.5" />
            Ana Sayfa
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-[120px] pb-16 bg-gradient-to-br from-primary to-bg-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_viewBox=%220_0_100_100%22%3E%3Ccircle_cx=%2250%22_cy=%2250%22_r=%222%22_fill=%22rgba(255,255,255,0.1)%22/%3E%3C/svg%3E')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-[3rem] font-bold text-text-dark mb-4 max-[767px]:text-[2rem] max-[480px]:text-[1.7rem]">
            Blog
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
