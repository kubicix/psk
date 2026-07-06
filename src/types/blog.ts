export interface BlogPostMeta {
  title: string;
  slug: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
  image: string;
  readingTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
