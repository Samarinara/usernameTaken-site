import type { ReactNode } from 'react';
import Header from './header';
import Footer from './Footer';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      
      <main className={`layout-main ${className}`}>
        <div className="layout-container">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;