import React from 'react';
import Layout from '../components/Layout';
import BlogPostCard from '../components/BlogPostCard';
import { blogPosts } from '../data/blogPosts';
import './pages.css';

const Blog: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Blog</h1>
      <div className="grid-container">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

export default Blog;