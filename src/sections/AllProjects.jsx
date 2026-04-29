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
          title="All Projects"
          sub="🚀 Portfolio"
        />

        <div className="mt-16 projects-grid">
          {allProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectsRef.current[index] = el)}
              className={`project-card group cursor-pointer ${
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
                  <span className="view-btn">View Details</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description text-white-50">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="tag">+{project.tags.length - 3}</span>
                  )}
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
