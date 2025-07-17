/**
 * BlogPost interface for _usernameTaken website
 * Defines the data structure for blog post information
 */

/**
 * Blog post status type
 */
export type BlogPostStatus = 'published' | 'draft' | 'archived';

/**
 * BlogPost interface defining the structure of blog post data
 */
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string; // Team member ID
  publishDate: Date;
  lastModified: Date;
  tags: string[];
  readTime: number; // Estimated reading time in minutes
  status: BlogPostStatus;
  featuredImage?: string;
}

/**
 * BlogPostCardProps interface for the BlogPostCard component
 */
export interface BlogPostCardProps {
  post: BlogPost;
  variant: 'grid' | 'list';
}