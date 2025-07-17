/**
 * Utility functions for blog post management and filtering
 */
import { BlogPost } from '../models/BlogPost';

/**
 * Sort blog posts by publish date (newest first)
 * @param posts Array of blog posts to sort
 * @returns Sorted array of blog posts
 */
export const sortPostsByDate = (posts: BlogPost[]): BlogPost[] => {
  return [...posts].sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
};

/**
 * Filter blog posts by tag
 * @param posts Array of blog posts to filter
 * @param tag Tag to filter by
 * @returns Filtered array of blog posts
 */
export const filterPostsByTag = (posts: BlogPost[], tag: string): BlogPost[] => {
  return posts.filter(post => post.tags.includes(tag));
};

/**
 * Filter blog posts by author
 * @param posts Array of blog posts to filter
 * @param authorId Author ID to filter by
 * @returns Filtered array of blog posts
 */
export const filterPostsByAuthor = (posts: BlogPost[], authorId: string): BlogPost[] => {
  return posts.filter(post => post.author === authorId);
};

/**
 * Filter blog posts by status
 * @param posts Array of blog posts to filter
 * @param status Status to filter by
 * @returns Filtered array of blog posts
 */
export const filterPostsByStatus = (posts: BlogPost[], status: BlogPost['status']): BlogPost[] => {
  return posts.filter(post => post.status === status);
};

/**
 * Search blog posts by keyword in title or content
 * @param posts Array of blog posts to search
 * @param keyword Keyword to search for
 * @returns Filtered array of blog posts
 */
export const searchPosts = (posts: BlogPost[], keyword: string): BlogPost[] => {
  const lowercaseKeyword = keyword.toLowerCase();
  return posts.filter(
    post => 
      post.title.toLowerCase().includes(lowercaseKeyword) || 
      post.content.toLowerCase().includes(lowercaseKeyword) ||
      post.excerpt.toLowerCase().includes(lowercaseKeyword)
  );
};

/**
 * Get related posts based on tags
 * @param currentPost Current blog post
 * @param allPosts All available blog posts
 * @param limit Maximum number of related posts to return
 * @returns Array of related blog posts
 */
export const getRelatedPosts = (currentPost: BlogPost, allPosts: BlogPost[], limit: number = 3): BlogPost[] => {
  // Filter out the current post and non-published posts
  const otherPosts = allPosts.filter(
    post => post.id !== currentPost.id && post.status === 'published'
  );
  
  // Calculate relevance score based on tag matches
  const postsWithRelevance = otherPosts.map(post => {
    const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    return {
      post,
      relevance: commonTags.length
    };
  });
  
  // Sort by relevance and return limited number
  return postsWithRelevance
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit)
    .map(item => item.post);
};

/**
 * Calculate estimated reading time for a blog post
 * @param content Blog post content
 * @param wordsPerMinute Average reading speed (words per minute)
 * @returns Estimated reading time in minutes
 */
export const calculateReadTime = (content: string, wordsPerMinute: number = 200): number => {
  const wordCount = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return readTime > 0 ? readTime : 1; // Minimum 1 minute
};