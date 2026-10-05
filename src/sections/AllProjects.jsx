import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { allProjects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AllProjects = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Animate section title
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Animate each project card
    projectsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="projects" className="flex-center section-padding">
      <div className="w-full" ref={sectionRef}>
        <TitleHeader
          title="Independent Projects"
          sub="Personal projects & prototypes"
        />

        <div className="mt-16 projects-grid">
          {allProjects.filter(project => !project.hidden).map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectsRef.current[index] = el)}
              className={`project-card group ${
                project.featured ? "featured" : ""
              }`}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.imagePath}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  {project.projectLink && project.projectLink !== "#" ? <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="view-btn" aria-label={`Open ${project.title} live demo`}>Live Demo</a> : <span className="view-btn">Live link unavailable</span>}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="text-sm md:text-base leading-relaxed text-white-50">
                  {project.longDescription}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllProjects;
