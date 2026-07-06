import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faClock, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/lib/blog';

interface BlogPostHeaderProps {
  post: BlogPost;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="mb-10">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-accent font-medium text-sm no-underline mb-8 group hover:gap-3 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
        Tüm Yazılar
      </Link>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block text-xs font-medium px-3 py-1.5 rounded-full bg-[rgba(147,112,219,0.08)] text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-[2.5rem] font-bold text-text-dark leading-[1.3] mb-6 max-[767px]:text-[1.8rem] max-[480px]:text-[1.5rem]">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-5 text-sm text-text-light pb-8 border-b border-[rgba(0,0,0,0.06)]">
        <span className="flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} className="h-3.5 w-3.5 text-accent opacity-60" />
          {post.author}
        </span>
        <span className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCalendarAlt} className="h-3.5 w-3.5 text-accent opacity-60" />
          {formatDate(post.date)}
        </span>
        <span className="flex items-center gap-2">
          <FontAwesomeIcon icon={faClock} className="h-3.5 w-3.5 text-accent opacity-60" />
          {post.readingTime}
        </span>
      </div>
    </header>
  );
}
