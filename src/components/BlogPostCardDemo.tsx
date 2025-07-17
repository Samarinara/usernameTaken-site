import React from 'react';
import { getPublishedPosts } from '../data/blogPosts';
import BlogPostCard from './BlogPostCard';

/**
 * Demo component to showcase BlogPostCard in both grid and list variants
 */
const BlogPostCardDemo: React.FC = () => {
  const posts = getPublishedPosts();
  const firstPost = posts[0];
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>BlogPostCard Demo</h2>
      
      <h3>Grid Variant</h3>
      <div style={{ maxWidth: '400px', marginBottom: '40px' }}>
        <BlogPostCard post={firstPost} variant="grid" />
      </div>
      
      <h3>List Variant</h3>
      <div style={{ maxWidth: '800px' }}>
        <BlogPostCard post={firstPost} variant="list" />
      </div>
    </div>
  );
};

export default BlogPostCardDemo;