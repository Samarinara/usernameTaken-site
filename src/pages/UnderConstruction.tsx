import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import './pages.css';

const UnderConstruction: React.FC = () => {
  return (
    <Layout>
      <div className="under-construction-page">
        <div className="under-construction-content">
          <h1>Page Under Construction</h1>
          <p>This page is currently being developed. Please check back later.</p>
          <Link to="/" className="back-button">
            Go to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default UnderConstruction;
