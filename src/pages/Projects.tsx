import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { 
  filterProjectsByCategory, 
  getUniqueCategories,
  sortProjectsByStartDate
} from '../utils/projectUtils';
import type { Project, ProjectCategory } from '../models/Project';
import './Projects.css';

/**
 * Projects page component displaying all projects with filtering functionality
 * Features:
 * - Grid layout for project cards
 * - Category filtering (computer science, cybersecurity, etc.)
 * - Navigation to individual project detail pages
 * - Consistent neobrutalist styling
 */
const Projects: React.FC = () => {
  // State for filtered projects and active category
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  
  // Get unique categories from projects
  const categories = getUniqueCategories(projects);
  
  // Handle category filter change
  const handleCategoryChange = (category: ProjectCategory | 'all') => {
    setActiveCategory(category);
    
    if (category === 'all') {
      setFilteredProjects(sortProjectsByStartDate(projects));
    } else {
      setFilteredProjects(sortProjectsByStartDate(filterProjectsByCategory(projects, category)));
    }
  };
  
  // Initialize with sorted projects
  useEffect(() => {
    setFilteredProjects(sortProjectsByStartDate(projects));
  }, []);
  
  // Format category for display
  const formatCategory = (category: string) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };
  
  return (
    <Layout className="projects-page">
      <header className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-description">
          Explore our team's work in computer science and cybersecurity
        </p>
      </header>
      
      <section className="projects-filters">
        <div className="category-filters">
          <button 
            className={`category-filter ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            All Projects
          </button>
          
          {categories.map((category) => (
            <button 
              key={category}
              className={`category-filter ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {formatCategory(category)}
            </button>
          ))}
        </div>
        
        <div className="projects-count">
          <span className="count-badge">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
          </span>
        </div>
      </section>
      
      {filteredProjects.length > 0 ? (
        <section className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card-wrapper">
              <ProjectCard project={project} variant="grid" />
            </div>
          ))}
        </section>
      ) : (
        <div className="no-projects">
          <p>No projects found in this category.</p>
          <button 
            className="reset-filter"
            onClick={() => handleCategoryChange('all')}
          >
            Show all projects
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Projects;