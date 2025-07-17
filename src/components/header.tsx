import { Link, useLocation } from 'react-router-dom';
import './header.css';

interface NavigationItem {
  label: string;
  path: string;
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Team', path: '/team' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Certifications', path: '/certifications' }
];

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <Link to="/" className="brand-link">
            <h1 className="brand-title">_usernameTaken</h1>
          </Link>
        </div>
        
        <nav className="header-nav">
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'nav-link--active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button - will be styled for mobile */}
        <button className="mobile-menu-button" aria-label="Toggle navigation">
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;