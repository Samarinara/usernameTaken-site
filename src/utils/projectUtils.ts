/**
 * Project utility functions for filtering, sorting, and categorizing projects
 */

import type { Project, ProjectCategory, ProjectStatus } from '../models/Project';

/**
 * Filter projects by category
 * @param projects - Array of projects to filter
 * @param category - Category to filter by
 * @returns Filtered array of projects
 */
export const filterProjectsByCategory = (
  projects: Project[],
  category: ProjectCategory
): Project[] => {
  return projects.filter(project => project.category === category);
};

/**
 * Filter projects by status
 * @param projects - Array of projects to filter
 * @param status - Status to filter by
 * @returns Filtered array of projects
 */
export const filterProjectsByStatus = (
  projects: Project[],
  status: ProjectStatus
): Project[] => {
  return projects.filter(project => project.status === status);
};

/**
 * Filter projects by technology
 * @param projects - Array of projects to filter
 * @param technology - Technology to filter by
 * @returns Filtered array of projects
 */
export const filterProjectsByTechnology = (
  projects: Project[],
  technology: string
): Project[] => {
  return projects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

/**
 * Filter projects by team member ID
 * @param projects - Array of projects to filter
 * @param teamMemberId - Team member ID to filter by
 * @returns Filtered array of projects
 */
export const filterProjectsByTeamMember = (
  projects: Project[],
  teamMemberId: string
): Project[] => {
  return projects.filter(project => 
    project.teamMembers.includes(teamMemberId)
  );
};

/**
 * Sort projects by start date (newest first)
 * @param projects - Array of projects to sort
 * @returns Sorted array of projects
 */
export const sortProjectsByStartDate = (
  projects: Project[]
): Project[] => {
  return [...projects].sort((a, b) => 
    b.startDate.getTime() - a.startDate.getTime()
  );
};

/**
 * Sort projects by end date (newest first)
 * @param projects - Array of projects to sort
 * @returns Sorted array of projects
 */
export const sortProjectsByEndDate = (
  projects: Project[]
): Project[] => {
  return [...projects].sort((a, b) => {
    // Projects without end date (in progress) come first
    if (!a.endDate) return -1;
    if (!b.endDate) return 1;
    return b.endDate.getTime() - a.endDate.getTime();
  });
};

/**
 * Get all unique technologies used across projects
 * @param projects - Array of projects
 * @returns Array of unique technologies
 */
export const getUniqueTechnologies = (
  projects: Project[]
): string[] => {
  const technologiesSet = new Set<string>();
  
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      technologiesSet.add(tech);
    });
  });
  
  return Array.from(technologiesSet).sort();
};

/**
 * Get all unique categories used across projects
 * @param projects - Array of projects
 * @returns Array of unique categories
 */
export const getUniqueCategories = (
  projects: Project[]
): ProjectCategory[] => {
  const categoriesSet = new Set<ProjectCategory>();
  
  projects.forEach(project => {
    categoriesSet.add(project.category);
  });
  
  return Array.from(categoriesSet).sort();
};

/**
 * Get projects count by category
 * @param projects - Array of projects
 * @returns Object with categories as keys and counts as values
 */
export const getProjectCountByCategory = (
  projects: Project[]
): Record<ProjectCategory, number> => {
  const categories = getUniqueCategories(projects);
  const result = {} as Record<ProjectCategory, number>;
  
  categories.forEach(category => {
    result[category] = projects.filter(project => project.category === category).length;
  });
  
  return result;
};

/**
 * Get featured projects (completed projects with achievements)
 * @param projects - Array of projects
 * @param limit - Maximum number of projects to return
 * @returns Array of featured projects
 */
export const getFeaturedProjects = (
  projects: Project[],
  limit: number = 3
): Project[] => {
  return projects
    .filter(project => 
      project.status === 'completed' && 
      project.achievements && 
      project.achievements.length > 0
    )
    .sort((a, b) => 
      (b.achievements?.length || 0) - (a.achievements?.length || 0)
    )
    .slice(0, limit);
};

/**
 * Search projects by query string (searches in title, description, and technologies)
 * @param projects - Array of projects to search
 * @param query - Search query
 * @returns Filtered array of projects matching the query
 */
export const searchProjects = (
  projects: Project[],
  query: string
): Project[] => {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery) return projects;
  
  return projects.filter(project => {
    // Search in title
    if (project.title.toLowerCase().includes(normalizedQuery)) return true;
    
    // Search in description
    if (project.description.toLowerCase().includes(normalizedQuery)) return true;
    
    // Search in long description
    if (project.longDescription.toLowerCase().includes(normalizedQuery)) return true;
    
    // Search in technologies
    if (project.technologies.some(tech => 
      tech.toLowerCase().includes(normalizedQuery)
    )) return true;
    
    // Search in achievements
    if (project.achievements?.some(achievement => 
      achievement.toLowerCase().includes(normalizedQuery)
    )) return true;
    
    return false;
  });
};

/**
 * Get related projects based on shared technologies or category
 * @param project - Reference project
 * @param allProjects - Array of all projects
 * @param limit - Maximum number of related projects to return
 * @returns Array of related projects
 */
export const getRelatedProjects = (
  project: Project,
  allProjects: Project[],
  limit: number = 3
): Project[] => {
  // Don't include the reference project itself
  const otherProjects = allProjects.filter(p => p.id !== project.id);
  
  // Calculate relevance score for each project
  const projectsWithScore = otherProjects.map(p => {
    let score = 0;
    
    // Same category
    if (p.category === project.category) {
      score += 3;
    }
    
    // Shared technologies
    const sharedTechnologies = p.technologies.filter(tech => 
      project.technologies.includes(tech)
    );
    score += sharedTechnologies.length * 2;
    
    // Shared team members
    const sharedTeamMembers = p.teamMembers.filter(member => 
      project.teamMembers.includes(member)
    );
    score += sharedTeamMembers.length * 1;
    
    return { project: p, score };
  });
  
  // Sort by relevance score (highest first) and take the top 'limit'
  return projectsWithScore
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.project);
};