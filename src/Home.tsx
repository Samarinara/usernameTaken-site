import { useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import './Home.css';

/**
 * Homepage component for _usernameTaken website
 * Implements a clean hero section with team name and description
 * Creates navigation cards for main sections following neobrutalist design principles
 */
function HomePage() {
  const navigate = useNavigate();

  // Navigation card data
  const navigationCards = [
    {
      title: 'Team',
      description: 'Meet our members and their expertise',
      path: '/team',
      ariaLabel: 'Navigate to Team section'
    },
    {
      title: 'Projects',
      description: 'Explore our technical work and innovations',
      path: '/projects',
      ariaLabel: 'Navigate to Projects section'
    },
    {
      title: 'Blog',
      description: 'Read our insights and research findings',
      path: '/blog',
      ariaLabel: 'Navigate to Blog section'
    },
    {
      title: 'Certifications',
      description: 'View our credentials and achievements',
      path: '/certifications',
      ariaLabel: 'Navigate to Certifications section'
    }
  ];

  return (
    <Layout>
      <div className="homepage">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="team-name">
              <span className="cursor">_</span>usernameTaken
            </h1>
            <p className="team-description">
              Computer Science & Cybersecurity Team
            </p>
            <p className="team-subtitle">
              Building secure solutions and exploring the frontiers of technology
            </p>
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="navigation-section">
          <div className="nav-grid">
            {navigationCards.map((card) => (
              <button 
                key={card.path}
                className="nav-card" 
                onClick={() => navigate(card.path)}
                aria-label={card.ariaLabel}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </button>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;