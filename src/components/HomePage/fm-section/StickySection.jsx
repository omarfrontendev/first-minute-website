import React, { useEffect, useRef } from "react";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import FourthScreen from "./FourthScreen";
import FifthScreen from "./FifthScreen";
import SixthScreen from "./SixthScreen";
import SeventhScreen from "./SeventhScreen";
import EighthScreen from "./EighthScreen";
import NinthScreen from "./NinthScreen";
import { useLocation } from "react-router-dom";

import "./StickySection.css";

const StickySection = () => {
  const sectionRefs = useRef([]);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetSection = document.getElementById(hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return; // تجاهل باقي الكود لو فيه hash
    }

    const observers = [];

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

      if (section) {
        observer.observe(section);
        observers.push(observer);
      }
    });

    // Clean up
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [hash]);



  const sections = [FirstScreen, SecondScreen, ThirdScreen,
    FourthScreen, FifthScreen, SixthScreen, SeventhScreen, EighthScreen, NinthScreen
  ];

  return (
    <div className="scroller position-relative" id="scroller">
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
