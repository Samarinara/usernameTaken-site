import { Link } from 'react-router-dom';
import './Footer.css';

interface FooterLink {
  label: string;
  path: string;
  external?: boolean;
}

const footerLinks: FooterLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Team', path: '/team' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Certifications', path: '/certifications' }
];

const externalLinks: FooterLink[] = [
  { label: 'GitHub', path: 'https://github.com/teamusernametaken', external: true },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-title">_usernameTaken</h3>
            <p className="footer-description">
              Computer Science & Cybersecurity Team
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-section-title">Navigation</h4>
              <ul className="footer-link-list">
                {footerLinks.map((link) => (
                  <li key={link.path} className="footer-link-item">
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-section-title">Connect</h4>
              <ul className="footer-link-list">
                {externalLinks.map((link) => (
                  <li key={link.path} className="footer-link-item">
                    <a 
                      href={link.path} 
                      className="footer-link"
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} _usernameTaken. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;