import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
/* import { blogPosts } from '../data/blogPosts';
 */import { getBlogPostById } from '../utils/blogPostUtils';
import './pages.css';

const BlogPostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  
  if (!postId) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPostById(postId);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <div className="blog-post-detail">
        <article className="blog-post-content">
          <header className="blog-post-header">
            <h1>{post.title}</h1>
            <div className="blog-post-meta">
              <span className="author">By {post.author}</span>
              <span className="date">{post.publishDate.toLocaleDateString()}</span>
              <span className="read-time">{post.readTime} min read</span>
            </div>
            {post.tags.length > 0 && (
              <div className="blog-post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            )}
          </header>
          
          <div className="blog-post-body">
            <div className="excerpt">
              {post.excerpt}
            </div>
            <div className="content">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPostDetail;