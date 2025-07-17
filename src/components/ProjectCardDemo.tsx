import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

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
      
      <style jsx>{`
        .project-card-demo {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .demo-title {
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          border-bottom: 2px solid #000;
          padding-bottom: 0.5rem;
        }
        
        .demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .demo-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .demo-grid-item,
        .demo-list-item {
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default ProjectCardDemo;