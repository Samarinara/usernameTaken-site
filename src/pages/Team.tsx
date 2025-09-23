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