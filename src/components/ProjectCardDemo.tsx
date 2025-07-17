import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import './ProjectCardDemo.css';

/**
 * Demo component to showcase ProjectCard in both grid and list variants
 */
const ProjectCardDemo: React.FC = () => {
  return (
    <div className="project-card-demo">
      <h2 className="demo-title">Project Card - Grid Variant</h2>
      <div className="demo-grid">
        {projects.slice(0, 3).map(project => (
          <div key={project.id} className="demo-grid-item">
            <ProjectCard project={project} variant="grid" />
          </div>
        ))}
      </div>
      
      <h2 className="demo-title">Project Card - List Variant</h2>
      <div className="demo-list">
        {projects.slice(0, 2).map(project => (
          <div key={project.id} className="demo-list-item">
            <ProjectCard project={project} variant="list" />
          </div>
        ))}
      </div>
      

    </div>
  );
};

export default ProjectCardDemo;