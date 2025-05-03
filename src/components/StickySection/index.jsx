import React, { useEffect, useRef } from "react";
import "./StickySection.css";
import FMTitle from "../HomePage/fm-section/fm-title";
import FMContent from "../HomePage/fm-section/fm-content";
import ThirdScreen from "../HomePage/fm-section/ThirdScreen";
import FourthScreen from "../HomePage/fm-section/FourthScreen";
import FivthScreen from "../HomePage/fm-section/FivthScreen";

const StickySection = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        },
        {
          threshold: [0.1, 1],
        }
      );

      if (section) observer.observe(section);

      // Clean up
      return () => {
        if (section) observer.unobserve(section);
      };
    });
  }, []);


  const sections = [FMTitle, FMContent, ThirdScreen,
    FourthScreen, FivthScreen
  ];

  return (
    <div className="scroller" id="scroller">
      <section className="full-height-section">
        {sections.map((Component, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="full-height-section__item"
          >
            <div className="d-flex align-items-center justify-content-center w-100 h-100">
              <Component />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StickySection;
