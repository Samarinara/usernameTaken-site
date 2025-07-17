import { useState } from 'react';
import { getAllTeamMembers } from '../utils/teamMemberUtils';
import TeamMemberCard from './TeamMemberCard';
import Layout from './Layout';

/**
 * Demo component to showcase both grid and list variants of TeamMemberCard
 */
function TeamMemberCardDemo() {
  const [variant, setVariant] = useState<'grid' | 'list'>('grid');
  const teamMembers = getAllTeamMembers();

  return (
    <Layout>
      <div className="layout-container">
        <div className="layout-section">
          <h2 className="section-title">Team Member Card Demo</h2>
          
          <div className="demo-controls" style={{ marginBottom: 'var(--space-6)' }}>
            <button 
              onClick={() => setVariant('grid')}
              className={`nav-link ${variant === 'grid' ? 'nav-link--active' : ''}`}
              style={{ marginRight: 'var(--space-2)' }}
            >
              Grid View
            </button>
            <button 
              onClick={() => setVariant('list')}
              className={`nav-link ${variant === 'list' ? 'nav-link--active' : ''}`}
            >
              List View
            </button>
          </div>
          
          {variant === 'grid' ? (
            <div className="layout-grid layout-grid--3-col">
              {teamMembers.map(member => (
                <TeamMemberCard 
                  key={member.id} 
                  member={member} 
                  variant="grid" 
                />
              ))}
            </div>
          ) : (
            <div className="layout-section">
              {teamMembers.map(member => (
                <div key={member.id} style={{ marginBottom: 'var(--space-4)' }}>
                  <TeamMemberCard 
                    member={member} 
                    variant="list" 
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default TeamMemberCardDemo;