/**
 * TeamMember interface for _usernameTaken website
 * Defines the data structure for team member information
 */

/**
 * Social media links for team members
 */
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

/**
 * TeamMember interface defining the structure of team member data
 */
export interface TeamMember {
  id: string;
  name: string; 
  role: string;
  bio: string;
  skills: string[];
  avatar?: string; // Optional, will use initials if not provided
  socialLinks?: SocialLinks;
  joinDate: Date;
  specializations: string[];
  quote: string;
}

/**
 * TeamMemberCardProps interface for the TeamMemberCard component
 */
export interface TeamMemberCardProps {
  member: TeamMember;
  variant: 'grid' | 'list';
}