import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ 
  image, // Added image prop
  title, 
  description, 
  tech = [] 
}) => {
  return (
    <div className="project-card">
      <div className="project-preview">
        {/* Native Lazy Loading: loading="lazy" */}
        <img 
          src={image} 
          alt={title} 
          
          className="project-image" 
          loading="lazy" 
        />
      </div>

      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      <div className="project-tech">
        {tech.map((item, i) => (
          <span key={i} className="tech-badge">
            {item}
          </span>
        ))}
      </div>

      <button className="project-btn">View Project</button>
    </div>
  );
};

export default ProjectCard;