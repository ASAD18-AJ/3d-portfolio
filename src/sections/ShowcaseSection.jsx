import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { professionalWork } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const [primary, recruitment, crm] = professionalWork;
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);
  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader title="Professional Work" />
        <div className="showcaselayout mt-16">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src={primary.imagePath} alt={`${primary.title} application screenshot`} className="!object-contain" />
            </div>
            <div className="text-content">
              <h2>{primary.title}</h2>
              <p className="text-white-50 md:text-xl">{primary.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4" aria-label="InnovoraAI development areas">
                {[
                  { title: "Frontend", detail: "React → Next.js", path: "M3 5h18v14H3zM3 9h18M7 7h.01M10 7h.01" },
                  { title: "Authentication", detail: "JWT & protected routes", path: "M12 3 4 6v6c0 4 8 9 8 9s8-5 8-9V6l-8-3ZM8 12l3 3 5-6" },
                  { title: "Backend", detail: "FastAPI & REST APIs", path: "M4 3h16v7H4zM4 14h16v7H4zM8 6.5h.01M8 17.5h.01M12 10v4" },
                ].map((area) => (
                  <div key={area.title} className="card-border rounded-xl p-5 flex flex-col gap-4">
                    <svg className="size-8 text-blue-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={area.path} />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-white-50">{area.title}</h3>
                      <p className="text-sm text-blue-50 mt-2">{area.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src={recruitment.imagePath} alt={`${recruitment.title} recruitment application screenshot`} />
              </div>
              <h2>{recruitment.title}</h2>
              <p className="text-white-50 mt-3">{recruitment.description}</p>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src={crm.imagePath} alt={`${crm.title} application screenshot`} />
              </div>
              <h2>{crm.title}</h2>
              <p className="text-white-50 mt-3">{crm.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
