import React from 'react';
import Link from 'next/link';
import { BlogPostMeta } from '@/types/blog';
import { formatDate } from '@/lib/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface BlogCardProps {
  post: BlogPostMeta;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <article
      className="group relative bg-white rounded-[20px] overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.08)] border border-[rgba(230,230,250,0.5)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(147,112,219,0.2)] hover:border-[rgba(147,112,219,0.3)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Top Gradient Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary scale-x-0 transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" />

      <div className="p-7 max-[767px]:p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[rgba(147,112,219,0.08)] text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-text-dark mb-3 leading-[1.4] group-hover:text-accent transition-colors duration-300 max-[767px]:text-lg">
          <Link href={`/blog/${post.slug}`} className="no-underline text-inherit hover:text-accent">
            {post.title}
          </Link>
        </h2>

        {/* Description */}
        <p className="text-text-light text-[0.95rem] leading-[1.7] mb-5 line-clamp-3">
          {post.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between pt-4 border-t border-[rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-4 text-sm text-text-light">
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faCalendarAlt} className="h-3.5 w-3.5 text-accent opacity-60" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faClock} className="h-3.5 w-3.5 text-accent opacity-60" />
              {post.readingTime}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1.5 text-accent font-medium text-sm no-underline group/link"
          >
            Oku
            <FontAwesomeIcon
              icon={faArrowRight}
              className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
