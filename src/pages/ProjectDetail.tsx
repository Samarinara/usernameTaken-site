import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { projects } from '../data/projects';
import { getRelatedProjects } from '../utils/projectUtils';
import type { Project } from '../models/Project';
import ProjectCard from '../components/ProjectCard';
import './pages.css';

/**
 * ProjectDetail component displays detailed information about a specific project
 * Features:
 * - Comprehensive project information display with neobrutalist styling
 * - Links to project resources (GitHub, demo, documentation)
 * - Project screenshots and visual content
 * - Team member credits with links to member pages
 * - Related projects section for discovery
 * - Consistent sharp borders and monochrome design
 */
const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const navigate = useNavigate();
  
  // Find the project by ID
  useEffect(() => {
    const foundProject = projects.find(p => p.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
      // Get related projects
      setRelatedProjects(getRelatedProjects(foundProject, projects, 3));
      // Reset active image index when project changes
      setActiveImageIndex(0);
    }
  }, [projectId]);
  
  // Format date for display
  const formatDate = (date: Date | undefined) => {
    if (!date) return 'Present';
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long'
    }).format(date);
  };
  
  // Format status for display
  const formatStatus = (status: string) => {
    return status.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };
  
  // Format category for display
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
  
  // Handle back button click
  const handleBack = () => {
    navigate('/projects');
  };
  
  // Handle image navigation
  const handlePreviousImage = () => {
    if (project?.images && project.images.length > 0) {
      setActiveImageIndex((prevIndex) => 
        prevIndex === 0 ? project.images!.length - 1 : prevIndex - 1
      );
    }
  };
  
  const handleNextImage = () => {
    if (project?.images && project.images.length > 0) {
      setActiveImageIndex((prevIndex) => 
        prevIndex === project.images!.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  
  // Calculate project duration in months
  const calculateDuration = (startDate: Date, endDate?: Date) => {
    const end = endDate || new Date();
    const diffTime = Math.abs(end.getTime() - startDate.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    return diffMonths;
  };
  
  // If project not found
  if (!project) {
    return (
      <Layout className="project-detail-page">
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist or has been removed.</p>
          <button className="back-button" onClick={handleBack}>
            Back to Projects
          </button>
        </div>
      </Layout>
    );
  }
  
  // Calculate project duration
  const projectDuration = calculateDuration(project.startDate, project.endDate);
  
  return (
    <Layout className="project-detail-page">
      <nav className="project-detail-navigation">
        <button className="back-button" onClick={handleBack}>
          ← Back to Projects
        </button>
        
        {/* Project navigation if there are related projects */}
        {relatedProjects.length > 0 && (
          <div className="project-navigation-links">
            {relatedProjects.slice(0, 2).map((relatedProject) => (
              <Link 
                key={relatedProject.id} 
                to={`/projects/${relatedProject.id}`}
                className="project-navigation-link"
              >
                {relatedProject.title} →
              </Link>
            ))}
          </div>
        )}
      </nav>
      
      <header className="project-detail-header">
        <div className="project-detail-meta">
          <span className={`project-detail-category category-${project.category}`}>
            {formatCategory(project.category)}
          </span>
          <span className={`project-detail-status status-${project.status}`}>
            <span className="status-icon">{getStatusIcon(project.status)}</span>
            {formatStatus(project.status)}
          </span>
        </div>
        
        <h1 className="project-detail-title">{project.title}</h1>
        
        <div className="project-detail-period">
          <span className="project-detail-dates">
            {formatDate(project.startDate)} - {formatDate(project.endDate)}
          </span>
          <span className="project-detail-duration">
            {projectDuration} {projectDuration === 1 ? 'month' : 'months'}
          </span>
        </div>
      </header>
      
      {/* Featured image section - show if images exist */}
      {project.images && project.images.length > 0 && (
        <section className="project-detail-featured-image">
          <div className="project-detail-image-showcase">
            <img 
              src={project.images[activeImageIndex]} 
              alt={`${project.title} screenshot ${activeImageIndex + 1}`} 
              className="project-detail-featured-image-main"
            />
            
            {project.images.length > 1 && (
              <div className="project-detail-image-controls">
                <button 
                  className="image-control-button" 
                  onClick={handlePreviousImage}
                  aria-label="Previous image"
                >
                  ←
                </button>
                <div className="image-pagination">
                  {activeImageIndex + 1} / {project.images.length}
                </div>
                <button 
                  className="image-control-button" 
                  onClick={handleNextImage}
                  aria-label="Next image"
                >
                  →
                </button>
              </div>
            )}
          </div>
          
          {project.images.length > 1 && (
            <div className="project-detail-image-thumbnails">
              {project.images.map((image, index) => (
                <button 
                  key={index} 
                  className={`image-thumbnail ${index === activeImageIndex ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} thumbnail ${index + 1}`} 
                    className="thumbnail-image"
                  />
                </button>
              ))}
            </div>
          )}
        </section>
      )}
      
      <section className="project-detail-content">
        <div className="project-detail-description">
          <p className="project-detail-summary">{project.description}</p>
          <div className="project-detail-long-description">
            {project.longDescription.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className="project-detail-sidebar">
          {/* Technologies */}
          <div className="project-detail-section">
            <h2 className="project-detail-section-title">Technologies</h2>
            <div className="project-detail-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="project-detail-technology">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {(project.links.github || project.links.demo || project.links.documentation || project.links.paper) && (
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Links</h2>
              <div className="project-detail-links">
                {project.links.github && (
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-detail-link"
                  >
                    GitHub Repository
                  </a>
                )}
                
                {project.links.demo && (
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-detail-link"
                  >
                    Live Demo
                  </a>
                )}
                
                {project.links.documentation && (
                  <a 
                    href={project.links.documentation} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-detail-link"
                  >
                    Documentation
                  </a>
                )}
                
                {project.links.paper && (
                  <a 
                    href={project.links.paper} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-detail-link"
                  >
                    Research Paper
                  </a>
                )}
              </div>
            </div>
          )}
          
          {/* Team Members */}
          {project.teamMembers && project.teamMembers.length > 0 && (
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Team</h2>
              <div className="project-detail-team">
                {project.teamMembers.map((memberId) => (
                  <Link 
                    key={memberId} 
                    to={`/team/${memberId}`}
                    className="project-detail-team-member"
                  >
                    {memberId.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Achievements</h2>
              <ul className="project-detail-achievements">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="project-detail-achievement">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Images Gallery - show if there are more than one image */}
      {project.images && project.images.length > 1 && (
        <section className="project-detail-images">
          <h2 className="project-detail-section-title">Project Gallery</h2>
          <div className="project-detail-gallery">
            {project.images.map((image, index) => (
              <div 
                key={index} 
                className="project-detail-image-container"
                onClick={() => setActiveImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`${project.title} screenshot ${index + 1}`} 
                  className="project-detail-image"
                />
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="project-detail-related">
          <h2 className="project-detail-section-title">Related Projects</h2>
          <div className="project-detail-related-grid">
            {relatedProjects.map((relatedProject) => (
              <div key={relatedProject.id} className="project-detail-related-item">
                <ProjectCard project={relatedProject} variant="grid" />
              </div>
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProjectDetail;