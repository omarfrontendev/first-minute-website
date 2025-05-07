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
  const { data: { section_4 } } = useSelector(state => state.home);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    let currentIndex = -1;
    let isScrolling = false;

    const onScroll = () => {
      if (isScrolling) return;

      const windowCenter = window.innerHeight / 2;
      let closestIndex = -1;
      let closestDistance = Infinity;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - windowCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== -1 && closestIndex !== currentIndex) {
        currentIndex = closestIndex;
        isScrolling = true;

        gsap.to(window, {
          duration: 0.5,
          scrollTo: sectionRefs.current[closestIndex],
          ease: "power2.out",
          onComplete: () => {
            isScrolling = false;
          },
        });
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
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
      props: {
        imgIndex: i,
        lastScreen: section_4.images.length - i === 2,
      },
    })),
  ];

  return (
    <div className="scroller position-relative" id="scroller">
      <section className="full-height-section">
        {sections.map(({ component: Component, props }, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="full-height-section__item"
            style={{ height: "100vh" }}
          >
            <div className="d-flex align-items-center justify-content-center w-100 h-100">
              <Component {...props} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StickySection;
