import { Link } from 'react-router-dom';
import type { TeamMemberCardProps } from '../models/TeamMember';
import { getInitials } from '../utils/teamMemberUtils';
import './TeamMemberCard.css';

/**
 * TeamMemberCard component
 * Displays a team member's information in a card format
 * Supports both grid and list variants
 */
function TeamMemberCard({ member, variant = 'grid' }: TeamMemberCardProps) {
  return (
    <div className={`team-member-card team-member-card--${variant}`}>
      <div className="team-member-card__avatar">
        {member.avatar ? (
          <img 
            src={member.avatar} 
            alt={`${member.name}`} 
            className="team-member-card__avatar-img"
          />
        ) : (
          <div className="team-member-card__avatar-initials">
            {getInitials(member)}
          </div>
        )}
      </div>
      
      <div className="team-member-card__content">
        <h3 className="team-member-card__name">{member.name}</h3>
        <p className="team-member-card__role">{member.role}</p>
        
        <div className="team-member-card__skills">
          {member.skills.slice(0, variant === 'grid' ? 3 : 5).map((skill, index) => (
            <span key={index} className="team-member-card__skill">
              {skill}
            </span>
          ))}
          {member.skills.length > (variant === 'grid' ? 3 : 5) && (
            <span className="team-member-card__skill team-member-card__skill--more">
              +{member.skills.length - (variant === 'grid' ? 3 : 5)}
            </span>
          )}
        </div>
        
        <Link 
          to={`/team/${member.id}`} 
          className="team-member-card__link"
          aria-label={`View ${member.name}'s profile`}
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default TeamMemberCard;