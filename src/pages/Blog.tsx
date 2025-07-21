import React from 'react';
import Layout from '../components/Layout';
import BlogPostCard from '../components/BlogPostCard';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const Blog: React.FC = () => {
  return (
    <Layout>
      <div className="blog-page">
        <div className="blog-header">
          <h1>Blog</h1>
          <p>Insights, research, and experiences from the _usernameTaken team</p>
        </div>
        
        <div className="blog-posts-grid">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} variant="grid" />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;