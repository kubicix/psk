import React from 'react';
import Link from 'next/link';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { BlogCard } from '@/components/blog/BlogCard';
import { FadeIn } from '@/components/ui/FadeIn';
import { getAllPosts } from '@/lib/blog';

export function BlogSection() {
  const latestPosts = getAllPosts().slice(0, 3);

  if (latestPosts.length === 0) return null;

  return (
    <section id="blog" className="py-20 bg-white max-[375px]:py-[50px] max-[767px]:py-[60px]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionTitle
            title="Blog & Güncel Yazılar"
            subtitle="Ruh sağlığı, çocuk gelişimi ve psikoloji üzerine en son yazılarım"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 150}>
              <BlogCard post={post} index={index} />
            </FadeIn>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <FadeIn delay={450}>
            <Link
              href="/blog"
              className="inline-block relative overflow-hidden bg-accent hover:bg-opacity-95 text-white font-semibold py-3.5 px-[35px] rounded-[30px] transition-all duration-300 shadow-[0_4px_15px_rgba(147,112,219,0.3)] hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(147,112,219,0.5)] active:translate-y-[-1px] max-[375px]:text-[0.95rem] max-[375px]:py-2.5 max-[375px]:px-[25px] no-underline"
            >
              Tüm Yazıları Gör
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
