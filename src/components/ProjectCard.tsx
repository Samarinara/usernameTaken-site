import React from 'react';
import { Link } from 'react-router-dom';
import type { ProjectCardProps } from '../models/Project';
import './ProjectCard.css';

/**
 * ProjectCard component displays a project in either grid or list view
 * with neobrutalist styling featuring sharp rectangular design and high contrast
 * 
 * Features:
 * - Sharp rectangular design with thin borders
 * - Technology tags with clean typography
 * - Project status indicator with visual differentiation
 * - Category badges with distinctive styling
 * - Hover effects with inverted colors
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project, variant = 'grid' }) => {
  // Limit the number of technologies displayed based on variant
  const maxTechnologies = variant === 'grid' ? 4 : 6;
  const displayedTechnologies = project.technologies.slice(0, maxTechnologies);
  const hasMoreTechnologies = project.technologies.length > maxTechnologies;

  // Format date for display
  const formatDate = (date: Date | undefined) => {
    if (!date) return 'Present';
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short' 
    }).format(date);
  };

  // Get project duration
  const projectDuration = `${formatDate(project.startDate)} - ${formatDate(project.endDate)}`;

  // Format status for display with proper capitalization
  const formatStatus = (status: string) => {
    return status.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Format category for display with proper capitalization
  const formatCategory = (category: string) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Get status icon based on project status
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'completed': return '✓';
      case 'in-progress': return '⟳';
      case 'archived': return '⌀';
      case 'planning': return '⌘';
      default: return '';
    }
  };

  return (
    <article className={`project-card ${variant}`}>
      <header className="project-card-header">
        <h3 className="project-card-title">{project.title}</h3>
        <div className="project-card-meta">
          <span className={`project-card-status status-${project.status}`}>
            <span className="status-icon">{getStatusIcon(project.status)}</span>
            {formatStatus(project.status)}
          </span>
          <span className="project-card-duration">{projectDuration}</span>
        </div>
      </header>
      
      <div className="project-card-content">
        <p className="project-card-description">{project.description}</p>
        
        <div className="project-card-category-container">
          <span className={`project-card-category category-${project.category}`}>
            {formatCategory(project.category)}
          </span>
        </div>
      </div>
      
      <footer className="project-card-footer">
        <div className="project-card-technologies">
          {displayedTechnologies.map((tech, index) => (
            <span key={index} className="project-card-technology">
              {tech}
            </span>
          ))}
          {hasMoreTechnologies && (
            <span className="project-card-technology project-card-technology-more">
              +{project.technologies.length - maxTechnologies}
            </span>
          )}
        </div>
        
        {project.achievements && project.achievements.length > 0 && (
          <div className="project-card-achievements">
            <span className="project-card-achievement-badge">
              {project.achievements.length} {project.achievements.length === 1 ? 'Achievement' : 'Achievements'}
            </span>
          </div>
        )}
      </footer>
      
      <Link 
        to={`/projects/${project.id}`} 
        className="project-card-link"
        aria-label={`View details for ${project.title} project`}
      >
        <div className="project-card-link-indicator">
          <span className="sr-only">View project details</span>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;