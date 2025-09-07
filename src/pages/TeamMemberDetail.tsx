import { useParams, Link } from 'react-router-dom';
import { getTeamMemberById, getInitials, getTeamMembersBySkill } from '../utils/teamMemberUtils';
import Layout from '../components/Layout';
import TeamMemberCard from '../components/TeamMemberCard';
import './pages.css';

/**
 * TeamMemberDetail page component
 * Displays detailed information about a specific team member
 * Implements requirements 2.2, 2.3, 2.4
 */
function TeamMemberDetail() {
  // Get the member ID from URL parameters
  const { memberId } = useParams<{ memberId: string }>();
  
  // Get the team member data
  const member = memberId ? getTeamMemberById(memberId) : undefined;
  
  // Format join date
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
    }).format(date);
  };

  // If member not found, display error message
  if (!member) {
    return (
      <Layout>
        <div className="team-member-detail">
          <div className="member-not-found">
            <h1 className="not-found-title">Member Not Found</h1>
            <p className="not-found-message">
              The team member you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/team" className="back-to-team">
              Back to Team
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Get team members with similar skills (for related members section)
  const relatedMembers = getTeamMembersBySkill(member.skills[0])
    .filter(m => m.id !== member.id)
    .slice(0, 2);

  return (
    <Layout>
      <div className="team-member-detail">
        {/* Member Header */}
        <section className="member-header">
          <div className="member-header-content">
            {/* Member Avatar */}
            <div className="member-avatar-container">
              <div className="member-avatar">
                {member.avatar ? (
                  <img 
                    src={member.avatar} 
                    alt={`${member.name}`} 
                    className="member-avatar-img"
                  />
                ) : (
                  <div className="member-avatar-initials">
                    {getInitials(member)}
                  </div>
                )}
              </div>
            </div>
            
            {/* Member Info */}
            <div className="member-info">
              <h1 className="member-name">{member.name}</h1>
              <p className="member-role">{member.role}</p>
              <p className="member-join-date">
                Member since {formatDate(member.joinDate)}
              </p>
              
              {/* Social Links */}
              {member.socialLinks && (
                <div className="member-social-links">
                  {member.socialLinks.github && (
                    <a 
                      href={member.socialLinks.github}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s GitHub profile`}
                    >
                      GitHub
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a 
                      href={member.socialLinks.linkedin}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      LinkedIn
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a 
                      href={member.socialLinks.twitter}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      Twitter
                    </a>
                  )}
                  {member.socialLinks.website && (
                    <a 
                      href={member.socialLinks.website}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s personal website`}
                    >
                      Website
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Member Content */}
        <section className="member-content">
          {/* Bio Section */}
          <div className="member-bio-section">
            <h2 className="section-title">About</h2>
            <p className="member-bio">{member.bio}</p>
            
            {/* Member Quote - New section */}
            <div className="member-quote">
              <blockquote>
                "In the world of {member.specializations[0].toLowerCase()}, the most important skill is continuous learning."
              </blockquote>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="member-sidebar">
            {/* Skills Section */}
            <div className="member-skills-section">
              <h2 className="section-title">Skills</h2>
              <ul className="skills-list">
                {member.skills.map((skill, index) => (
                  <li key={index} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Specializations Section */}
            <div className="member-specializations-section">
              <h2 className="section-title">Specializations</h2>
              <ul className="specializations-list">
                {member.specializations.map((specialization, index) => (
                  <li key={index} className="specialization-item">
                    {specialization}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        {/* Related Team Members - New section */}
        {relatedMembers.length > 0 && (
          <section className="related-members-section">
            <h2 className="section-title">Team Members with Similar Skills</h2>
            <div className="related-members-grid">
              {relatedMembers.map(relatedMember => (
                <TeamMemberCard 
                  key={relatedMember.id} 
                  member={relatedMember} 
                  variant="grid" 
                />
              ))}
            </div>
          </section>
        )}
        
        {/* Projects Section - New section */}
        <section className="member-projects-section">
          <h2 className="section-title">Current Projects</h2>
          <div className="member-projects-placeholder">
            <div className="project-card">
              <h3 className="project-title">Security Research</h3>
              <p className="project-description">
                Ongoing research in {member.specializations[0]}
              </p>
              <div className="project-status">In Progress</div>
            </div>
            <div className="project-card">
              <h3 className="project-title">Team Collaboration</h3>
              <p className="project-description">
                Working with _usernameTaken team on cybersecurity initiatives
              </p>
              <div className="project-status">Active</div>
            </div>
          </div>
        </section>
        
        {/* Back to Team Link */}
        <div className="back-link-container">
          <Link to="/team" className="back-to-team">
            Back to Team
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default TeamMemberDetail;