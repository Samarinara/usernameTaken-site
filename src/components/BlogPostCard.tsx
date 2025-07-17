import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPostCardProps } from '../models/BlogPost';
import { getTeamMemberById } from '../utils/teamMemberUtils';
import './BlogPostCard.css';

/**
 * BlogPostCard component displays a blog post in either grid or list view
 * with neobrutalist styling featuring clean, minimal design
 * 
 * Features:
 * - Clean, minimal card design with sharp borders
 * - Clear typography hierarchy for post title and excerpt
 * - Author and publication date information
 * - Both grid and list variants for different layouts
 */
const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, variant = 'grid' }) => {
  // Get author information
  const author = getTeamMemberById(post.author);
  
  // Format date for display
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  // Format read time
  const formatReadTime = (minutes: number) => {
    return `${minutes} min read`;
  };

  // Limit tags displayed based on variant
  const maxTags = variant === 'grid' ? 3 : 5;
  const displayedTags = post.tags.slice(0, maxTags);
  const hasMoreTags = post.tags.length > maxTags;

  return (
    <article className={`blog-post-card blog-post-card--${variant}`}>
      <header className="blog-post-card__header">
        <h3 className="blog-post-card__title">{post.title}</h3>
        <div className="blog-post-card__meta">
          <span className="blog-post-card__date">
            {formatDate(post.publishDate)}
          </span>
          <span className="blog-post-card__read-time">
            {formatReadTime(post.readTime)}
          </span>
        </div>
      </header>
      
      <div className="blog-post-card__content">
        <p className="blog-post-card__excerpt">{post.excerpt}</p>
      </div>
      
      <footer className="blog-post-card__footer">
        <div className="blog-post-card__author">
          <span className="blog-post-card__author-label">By</span>
          <span className="blog-post-card__author-name">
            {author ? author.name : post.author}
          </span>
        </div>
        
        <div className="blog-post-card__tags">
          {displayedTags.map((tag, index) => (
            <span key={index} className="blog-post-card__tag">
              {tag}
            </span>
          ))}
          {hasMoreTags && (
            <span className="blog-post-card__tag blog-post-card__tag--more">
              +{post.tags.length - maxTags}
            </span>
          )}
        </div>
      </footer>
      
      <Link 
        to={`/blog/${post.id}`} 
        className="blog-post-card__link"
        aria-label={`Read full article: ${post.title}`}
      >
        <div className="blog-post-card__link-indicator">
          <span className="sr-only">Read article</span>
        </div>
      </Link>
    </article>
  );
};

export default BlogPostCard;