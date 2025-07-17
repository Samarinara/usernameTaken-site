/**
 * Project interface for _usernameTaken website
 * Defines the data structure for project information
 */

/**
 * Project links interface for external resources
 */
export interface ProjectLinks {
  github?: string;
  demo?: string;
  documentation?: string;
  paper?: string;
}

/**
 * Project category type
 */
export type ProjectCategory = 'computer-science' | 'cybersecurity' | 'web-development' | 'research' | 'other';

/**
 * Project status type
 */
export type ProjectStatus = 'completed' | 'in-progress' | 'archived' | 'planning';

/**
 * Project interface defining the structure of project data
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  startDate: Date;
  endDate?: Date;
  teamMembers: string[]; // Team member IDs
  links: ProjectLinks;
  images?: string[];
  achievements?: string[];
}

/**
 * ProjectCardProps interface for the ProjectCard component
 */
export interface ProjectCardProps {
  project: Project;
  variant: 'grid' | 'list';
}