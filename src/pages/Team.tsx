import { useState } from 'react';
import Layout from '../components/Layout';
import TeamMemberCard from '../components/TeamMemberCard';
import { getAllTeamMembers } from '../utils/teamMemberUtils';
import './Team.css';

/**
 * Team page component
 * Displays all team members in a grid layout
 * Implements requirements 2.1, 7.1, 7.2
 */
function TeamPage() {
  const teamMembers = getAllTeamMembers();
  const [filter, setFilter] = useState('');
  
  // Filter team members based on search input
  const filteredMembers = filter 
    ? teamMembers.filter(member => 
        member.name.toLowerCase().includes(filter.toLowerCase()) ||
        member.role.toLowerCase().includes(filter.toLowerCase()) ||
        member.skills.some(skill => skill.toLowerCase().includes(filter.toLowerCase()))
      )
    : teamMembers;

  return (
    <Layout className="team-page-layout">
      <div className="team-page">
        {/* Page Header */}
        <section className="team-header">
          <div className="team-header-content">
            <h1 className="team-title">Our Team</h1>
            <p className="team-subtitle">
              Meet the _usernameTaken members and their expertise in computer science and cybersecurity
            </p>
          </div>
        </section>
        
        {/* Search and Filter */}
        <section className="team-filter">
          <div className="filter-container">
            <input
              type="text"
              placeholder="Search by name, role, or skill..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="team-search"
              aria-label="Search team members"
            />
            {filter && (
              <button 
                className="clear-filter" 
                onClick={() => setFilter('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </section>
        
        {/* Team Members Grid */}
        <section className="team-grid-section">
          {filteredMembers.length > 0 ? (
            <div className="team-grid">
              {filteredMembers.map((member) => (
                <TeamMemberCard 
                  key={member.id} 
                  member={member} 
                  variant="grid" 
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No team members found matching "{filter}"</p>
              <button 
                className="reset-search" 
                onClick={() => setFilter('')}
              >
                Reset Search
              </button>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}

export default TeamPage;