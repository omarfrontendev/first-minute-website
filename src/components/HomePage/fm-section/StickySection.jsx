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
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";

import "./StickySection.css";

gsap.registerPlugin(ScrollToPlugin);

const StickySection = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    let direction = null;
    let lastScrollTop = window.scrollY;

    const onScroll = () => {
      const st = window.scrollY;
      direction = st > lastScrollTop ? "down" : "up";
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", onScroll);

    const observers = sectionRefs.current.map((section, index) => {
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            gsap.to(window, {
              duration: 0.5,
              scrollTo: section,
              ease: "none",
            });
          }
        },
        {
          threshold: [0.001, 1],
        }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);


  // const preventDefault = (e) => e.preventDefault();

  // useEffect(() => {
  //   const disableScroll = () => {
  //     window.addEventListener('wheel', preventDefault, { passive: false });
  //   };

  //   const enableScroll = () => {
  //     window.removeEventListener('wheel', preventDefault);
  //   };

  //   sectionRefs.current.forEach((section) => {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         if (entry.isIntersecting) {
  //           disableScroll();
  //           gsap.to(window, {
  //             duration: 0.5,
  //             scrollTo: section,
  //             onComplete: enableScroll,
  //             ease: "none",
  //           });
  //         }
  //       },
  //       { threshold: [0.001, 1] }
  //     );

  //     observer.observe(section);
  //   });

  //   return () => {
  //     enableScroll();
  //   };
  // }, []);


  const sections = [FirstScreen, SecondScreen, ThirdScreen,
    FourthScreen, FifthScreen,
    //  SixthScreen, SeventhScreen, EighthScreen, NinthScreen
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
