import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { teamMembers } from '../data/teamMembers';
import { getInitials } from '../utils/teamMemberUtils';
import type { TeamMember } from '../models/TeamMember';
import './TeamPage.css';

const TeamPage: React.FC = () => {
  const [focusedMember, setFocusedMember] = useState<TeamMember | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set the first member as focused on initial load
    if (teamMembers.length > 0) {
      setFocusedMember(teamMembers[currentIndex]);
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleGridSelect = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Layout className="team-page-layout">
      <div className="team-page">
        <header className="team-page-header">
          <h1>Meet the Team</h1>
          <p>These are the people that make things happen</p>
        </header>

        <section className="team-grid">
          <div className="team-grid-container">
            {teamMembers.map((member, index) => (
              <button
                key={member.id}
                className={`team-grid-item ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleGridSelect(index)}
                aria-label={`Select ${member.name}`}
              >
                <div className="grid-item-avatar-container">
                  {member.avatar ? (
                    <img src={member.avatar} alt={member.name} className="grid-item-avatar" />
                  ) : (
                    <div className="grid-item-initials-avatar">
                      <span>{getInitials(member)}</span>
                    </div>
                  )}
                </div>
                <span className="grid-item-name">{member.name}</span>
              </button>
            ))}
          </div>
        </section>

        <div className="team-showcase-container">
          <main className="focused-member-container">
            <button onClick={handlePrevious} className="nav-button prev-button" aria-label="Previous member">
              &#x2190;
            </button>
            {focusedMember && (
              <div key={focusedMember.id} className="focused-member">
                <div className="focused-member-card">
                  <div className="member-avatar-container">
                    {focusedMember.avatar ? (
                      <img
                        src={focusedMember.avatar}
                        alt={focusedMember.name}
                        className="member-avatar"
                      />
                    ) : (
                      <div className="member-initials-avatar">
                        <span>{getInitials(focusedMember)}</span>
                      </div>
                    )}
                  </div>
                  <div className="member-details">
                    <h2 className="member-name">{focusedMember.name}</h2>
                    <p className="member-role">{focusedMember.role}</p>
                    {focusedMember.quote && (
                      <blockquote className="member-quote">
                        "{focusedMember.quote}"
                      </blockquote>
                    )}
                    <Link to={`/team/${focusedMember.id}`} className="profile-link">
                      View Full Profile
                    </Link>
                    <div className="member-socials">
                      {focusedMember.socialLinks?.github && (
                        <a href={focusedMember.socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label={`${focusedMember.name}'s GitHub`}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {focusedMember.socialLinks?.linkedin && (
                        <a href={focusedMember.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label={`${focusedMember.name}'s LinkedIn`}>
                          <svg xmlns="http://www.w_3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                      {focusedMember.socialLinks?.bluesky && (
                        <a href={focusedMember.socialLinks.bluesky} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label={`${focusedMember.name}'s Bluesky`}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="24" height="24">
                            <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/>
                          </svg>
                        </a>
                      )}
                      {focusedMember.socialLinks?.website && (
                        <a href={focusedMember.socialLinks.website} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label={`${focusedMember.name}'s Website`}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24M1 12C1 6.477 5.477 2 11 2c1.466 0 2.847.304 4.108.84a10.95 10.95 0 0 0-2.322 3.16H11v2h3.938c.08.49.122.992.122 1.5 0 2.48-.91 4.717-2.48 6.434a10.95 10.95 0 0 0-2.322 3.16A11.001 11.001 0 0 1 1 12m11 11a11.001 11.001 0 0 1-5.108-1.16c1.29-.983 2.33-2.344 3.108-3.84h2v-2H9.062a12.05 12.05 0 0 1-.122-1.5c0-.49.042-.992.122-1.5H13v-2H9.256a10.95 10.95 0 0 0-3.108-3.84A11.001 11.001 0 0 1 23 12c0 6.075-4.925 11-11 11"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {!focusedMember && (
              <div className="focused-member-placeholder">
                <p>Select a team member to see their details.</p>
              </div>
            )}
            <button onClick={handleNext} className="nav-button next-button" aria-label="Next member">
              &#x2192;
            </button>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;