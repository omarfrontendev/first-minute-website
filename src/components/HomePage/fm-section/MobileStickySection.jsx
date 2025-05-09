import React, { useEffect, useRef } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./StickySection.css";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import { useSelector } from "react-redux";
import DynamicScreen from "./DynamicScreen";

gsap.registerPlugin(ScrollToPlugin);

const StickySection = ({ sectionsss }) => {
  const sectionRefs = useRef([]);
  const { data: { section_4 } } = useSelector(state => state.home);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#scroller",
      start: "top 100%",
      end: "bottom 20%",
      toggleActions: "restart",
      onEnter: () => {
        gsap.to(window, {
          duration: 0.5,
          scrollTo: sectionRefs.current[0],
          ease: "power2.out"
        });
      }
    });

    ScrollTrigger.create({
      trigger: "#scroller",
      start: "top 100%",
      end: "bottom 20%",
      toggleActions: "restart",
      onEnterBack: () => {
        gsap.to(window, {
          duration: 0.5,
          scrollTo: sectionRefs.current[sectionRefs.current?.length - 1],
          ease: "power2.out"
        });
      }
    });

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

      // if (Math.abs(deltaY) < 50) return; // تجاهل السحبات الصغيرة
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
    ...section_4.images.slice(0, section_4.images.length - 1).map((_, i) => ({
      component: DynamicScreen,
      props: {
        imgIndex: i,
        lastScreen: section_4.images.length - i === 2,
      },
    })),
  ];

  return (
    <section className="scroller bg_fm_section position-relative" id="scroller">
      {sections.map(({ component: Component, props }, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="screen d-flex justify-content-center align-items-center"
        >
          {/* <div className="d-flex align-items-center justify-content-center w-100 h-100"> */}
          <Component {...props} />
          {/* </div> */}
        </div>
      ))}
    </section>
  );
};

export default StickySection;