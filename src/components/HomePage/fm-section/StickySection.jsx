import React, { useEffect, useRef } from "react";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import FourthScreen from "./FourthScreen";
import FifthScreen from "./FifthScreen";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { useSelector } from "react-redux";
import DynamicScreen from "./DynamicScreen";

import "./StickySection.css";

gsap.registerPlugin(ScrollToPlugin);

const StickySection = () => {
  const sectionRefs = useRef([]);
  const { data: { section_4 } } = useSelector(state => state.home)

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

  const sections = [
    { component: FirstScreen },
    { component: SecondScreen },
    { component: ThirdScreen },
    { component: FourthScreen },
    { component: FifthScreen },
    ...section_4.images.slice(0, section_4.images.length - 1).map((_, i) => ({
      component: DynamicScreen,
      props: { imgIndex: i, lastScreen: section_4.images.length - i === 2 }
    }))
  ];

  return (
    <div className="scroller position-relative" id="scroller">
      <section className="full-height-section">
        {sections.map(({ component: Component, props }, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="full-height-section__item"
          >
            <div className="d-flex align-items-center justify-content-center w-100 h-100">
              <Component key={index} {...props} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StickySection;
