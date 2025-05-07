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
    // if (window.innerWidth <= 768) return;

    let currentIndex = 0;
    let isScrolling = false;

    const scrollerEl = document.getElementById("scroller");

    const onWheel = (e) => {
      if (isScrolling) return;

      const scrollerRect = scrollerEl.getBoundingClientRect();
      const isInView =
        scrollerRect.top <= 0 && scrollerRect.bottom >= window.innerHeight;

      if (!isInView) return;

      isScrolling = true;

      // تحديد الاتجاه
      if (e.deltaY > 0 && currentIndex < sectionRefs.current.length - 1) {
        currentIndex++;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      }

      gsap.to(window, {
        duration: 0.5,
        scrollTo: sectionRefs.current[currentIndex],
        ease: "power2.out",
        onComplete: () => {
          isScrolling = false;
        },
      });
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
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
