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
    let currentIndex = 0;
    let isScrolling = false;
    let touchStartY = 0;

    const scrollerEl = document.getElementById("scroller");

    const scrollToSection = (index) => {
      isScrolling = true;
      gsap.to(window, {
        duration: 0.5,
        scrollTo: sectionRefs.current[index],
        ease: "power2.out",
        onComplete: () => {
          isScrolling = false;
        },
      });
    };

    const isInView = () => {
      const rect = scrollerEl.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom >= window.innerHeight;
    };

    const onWheel = (e) => {
      if (isScrolling || !isInView()) return;

      if (e.deltaY > 0 && currentIndex < sectionRefs.current.length - 1) {
        currentIndex++;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      } else {
        return;
      }

      scrollToSection(currentIndex);
      e.preventDefault();
    };

    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      if (isScrolling || !isInView()) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) < 50) return; // تجاهل السحبات الصغيرة

      if (deltaY > 0 && currentIndex < sectionRefs.current.length - 1) {
        // سحب لتحت
        currentIndex++;
      } else if (deltaY < 0 && currentIndex > 0) {
        // سحب لفوق
        currentIndex--;
      } else {
        return;
      }

      scrollToSection(currentIndex);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
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
