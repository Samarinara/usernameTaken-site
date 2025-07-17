import type { TeamMember } from '../models/TeamMember';
import { teamMembers } from '../data/teamMembers';

/**
 * Get all team members
 * @returns Array of all team members
 */
export const getAllTeamMembers = (): TeamMember[] => {
  return teamMembers;
};

/**
 * Get a team member by ID
 * @param id - The ID of the team member to retrieve
 * @returns The team member with the specified ID, or undefined if not found
 */
export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};

/**
 * Get a random team member
 * @returns A randomly selected team member
 */
export const getRandomTeamMember = (): TeamMember => {
  const randomIndex = Math.floor(Math.random() * teamMembers.length);
  return teamMembers[randomIndex];
};

/**
 * Filter team members by skill
 * @param skill - The skill to filter by
 * @returns Array of team members with the specified skill
 */
export const getTeamMembersBySkill = (skill: string): TeamMember[] => {
  return teamMembers.filter(member => 
    member.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))
  );
};

/**
 * Filter team members by specialization
 * @param specialization - The specialization to filter by
 * @returns Array of team members with the specified specialization
 */
export const getTeamMembersBySpecialization = (specialization: string): TeamMember[] => {
  return teamMembers.filter(member => 
    member.specializations.some(s => s.toLowerCase().includes(specialization.toLowerCase()))
  );
};

/**
 * Sort team members by join date
 * @param ascending - Whether to sort in ascending order (true) or descending order (false)
 * @returns Array of team members sorted by join date
 */
export const getTeamMembersSortedByJoinDate = (ascending: boolean = true): TeamMember[] => {
  return [...teamMembers].sort((a, b) => {
    if (ascending) {
      return a.joinDate.getTime() - b.joinDate.getTime();
    } else {
      return b.joinDate.getTime() - a.joinDate.getTime();
    }
  });
};

/**
 * Generate initials from a team member's name
 * @param member - The team member
 * @returns The initials (up to 2 characters)
 */
export const getInitials = (member: TeamMember): string => {
  const nameParts = member.name.split(' ');
  if (nameParts.length === 1) {
    return nameParts[0].substring(0, 2).toUpperCase();
  }
  return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
};