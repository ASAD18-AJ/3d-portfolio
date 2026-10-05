import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { allProjects } from "../constants";

const ProjectDetail = ({ projectId, onClose }) => {
  const project = allProjects.find(p => p.id === projectId);
  const containerRef = useRef(null);

  useGSAP(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [projectId]);

  if (!project) return null;

  return (
    <div className="project-detail-overlay" onClick={onClose}>
      <div className="project-detail-container" ref={containerRef} onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="project-detail-content">
          {/* Project Image */}
          <div className="project-detail-image">
            <img src={project.imagePath} alt={project.title} />
          </div>

          {/* Project Info */}
          <div className="project-detail-info">
            <h1 className="project-detail-title">{project.title}</h1>
            
            <p className="project-detail-description">
              {project.longDescription}
            </p>

            {/* Tech Stack */}
            <div className="tech-stack-section">
              <h3 className="section-title">Tech Stack</h3>
              <div className="tech-stack-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            {/* <div className="project-actions">
              <a 
                href="#" 
                className="btn btn-primary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Live Project
              </a>
              <a 
                href="#" 
                className="btn btn-secondary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div> */}

            {/* Project Details */}
            {/* <div className="project-details-grid">
              <div className="detail-item">
                <h4>Type</h4>
                <p>Web Application</p>
              </div>
              <div className="detail-item">
                <h4>Status</h4>
                <p>Completed</p>
              </div>
              <div className="detail-item">
                <h4>Duration</h4>
                <p>3-6 months</p>
              </div>
              <div className="detail-item">
                <h4>Team Size</h4>
                <p>5-8 people</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
