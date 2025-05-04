import React, { useEffect, useRef } from "react";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import FourthScreen from "./FourthScreen";
import FifthScreen from "./FifthScreen";
import SixthScreen from "./SixthScreen";

import "./StickySection.css";
import SeventhScreen from "./SeventhScreen";
import EighthScreen from "./EighthScreen";

const StickySection = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        },
        {
          threshold: [0.001, 1],
        }
      );

      if (section) observer.observe(section);

      // Clean up
      return () => {
        if (section) observer.unobserve(section);
      };
    });
  }, []);


  const sections = [FirstScreen, SecondScreen, ThirdScreen,
    FourthScreen, FifthScreen, SixthScreen, SeventhScreen, EighthScreen
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
