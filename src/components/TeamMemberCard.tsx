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
  const cardStyle = member.avatar ? { backgroundImage: `url(${member.avatar})` } : {};

  return (
    <Link
      to={`/team/${member.id}`}
      className={`team-member-card team-member-card--interactive art-deco-card team-member-card--${variant}`}
      aria-label={`View ${member.name}'s profile`}
      style={cardStyle}
    >
      <div className="team-member-card__overlay"></div>
      <div className="team-member-card__content">
        <div className="team-member-card__initial-content">
          <h3 className="team-member-card__name">{member.name}</h3>
          <p className="team-member-card__role">{member.role}</p>
        </div>
        <div className="team-member-card__hover-content">
          <div className="team-member-card__skills">
            {member.skills.slice(0, 3).map((skill) => (
              <span key={skill} className="team-member-card__skill">
                {skill}
              </span>
            ))}
          </div>
          <span className="team-member-card__link-indicator">
            View Profile →
          </span>
        </div>
      </div>
      {!member.avatar && (
        <div className="team-member-card__initials-bg">{getInitials(member)}</div>
      )}
    </Link>
  );
}

export default TeamMemberCard;