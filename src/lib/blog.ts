import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogPostMeta } from '@/types/blog';

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

/**
 * Get all blog post slugs for static path generation
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

/**
 * Get metadata for all blog posts, sorted by date (newest first)
 */
export function getAllPosts(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => getPostMeta(slug)).filter(Boolean) as BlogPostMeta[];
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get full blog post content by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    slug: data.slug || slug,
    date: data.date,
    updated: data.updated,
    author: data.author || 'Psikolog Asya Özcan',
    description: data.description,
    tags: data.tags || [],
    image: data.image || '/images/blog/default.jpg',
    readingTime: data.readingTime || calculateReadingTime(content),
    content,
  };
}

/**
 * Get only metadata (without content) for a post
 */
export function getPostMetaBySlug(slug: string): BlogPostMeta | null {
  return getPostMeta(slug);
}

function getPostMeta(slug: string): BlogPostMeta | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    slug: data.slug || slug,
    date: data.date,
    updated: data.updated,
    author: data.author || 'Psikolog Asya Özcan',
    description: data.description,
    tags: data.tags || [],
    image: data.image || '/images/blog/default.jpg',
    readingTime: data.readingTime || calculateReadingTime(content),
  };
}

/**
 * Calculate estimated reading time for a given text
 */
function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} dk`;
}

/**
 * Get posts filtered by tag
 */
export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique tags across all posts
 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

/**
 * Format a date string to Turkish locale
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
