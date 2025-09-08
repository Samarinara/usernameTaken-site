import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import './pages.css';

const UnderConstruction: React.FC = () => {
  return (
    <Layout>
      <div className="page-container">
        <div className="centered-container">
          <h1 className="centered-title">Page Under Construction</h1>
          <p className="centered-message">This page is currently being developed. Please check back later.</p>
          <Link to="/" className="back-button">
            Go to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default UnderConstruction;