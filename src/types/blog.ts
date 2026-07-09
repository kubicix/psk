export interface BlogPostMeta {
  title: string;
  slug: string;
  date: string;
  /** Optional last-updated date from frontmatter (`updated:`); falls back to `date` */
  updated?: string;
  author: string;
  description: string;
  tags: string[];
  image: string;
  readingTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
