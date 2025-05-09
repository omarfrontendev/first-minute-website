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

const StickySection = () => {
  const sectionRefs = useRef([]);
  const { data: { section_4 } } = useSelector(state => state.home);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#scroller",
      start: "top 60%",
      end: "bottom 20%",
      toggleActions: "restart",
      onEnter: () => {
        gsap.to(window, {
          duration: 0.1,
          // scrollTo: sectionRefs.current[0],
          scrollTo: "#scroller",
          ease: "linear"
        });
      }
    });

    ScrollTrigger.create({
      trigger: "#scroller",
      start: "top 60%",
      end: "bottom 20%",
      toggleActions: "restart",
      onEnterBack: () => {
        gsap.to(window, {
          duration: 0.1,
          // scrollTo: sectionRefs.current[0],
          scrollTo: "#scroller",
          ease: "linear"
        });
      }
    });

    let currentIndex = 0;
    let isScrolling = false;
    let touchStartY = 0;
    let lastScrollTime = 0;
    const SCROLL_COOLDOWN = 2000;

    const scrollerEl = document.getElementById("scroller");

    const scrollToSection = (index) => {
      isScrolling = true;
      gsap.to(window, {
        duration: 0.1,
        scrollTo: sectionRefs.current[index],
        ease: "linear",
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
      const now = Date.now();
      if (isScrolling || !isInView()) return;
      if (now - lastScrollTime < SCROLL_COOLDOWN) return;
      if (Math.abs(e.deltaY) < 100) return;

      if (e.deltaY > 0 && currentIndex < sectionRefs.current.length - 1) {
        currentIndex++;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      } else {
        return;
      }

      lastScrollTime = now;
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

      // if (Math.abs(deltaY) < 30) return; // تجاهل السحبات الصغيرة

      if (deltaY > 0 && currentIndex < sectionRefs.current.length - 1) {
        currentIndex++;
      } else if (deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      } else {
        return;
      }

      scrollToSection(currentIndex);
    };

    const onKeyDown = (e) => {
      if (isScrolling || !isInView()) return;

      if (
        e.code === "ArrowDown" ||
        e.code === "PageDown" ||
        e.code === "Space"
      ) {
        if (currentIndex < sectionRefs.current.length - 1) {
          currentIndex++;
          scrollToSection(currentIndex);
          e.preventDefault();
        }
      } else if (
        e.code === "ArrowUp" ||
        e.code === "PageUp"
      ) {
        if (currentIndex > 0) {
          currentIndex--;
          scrollToSection(currentIndex);
          e.preventDefault();
        }
      }
    };

    // window.addEventListener("wheel", onWheel, { passive: false });
    // window.addEventListener("keydown", onKeyDown);
    if (window.innerWidth <= 768) {
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });
    }

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const sections = [
    { component: FirstScreen, props: { mobile: window.innerWidth <= 768 } },
    { component: SecondScreen, props: { mobile: window.innerWidth <= 768 } },
    { component: ThirdScreen, props: { mobile: window.innerWidth <= 768 } },
    ...section_4.images.slice(0, section_4.images?.length - 1).map((_, i) => ({
      component: DynamicScreen,
      props: {
        imgIndex: i,
        lastScreen: +i === +section_4.images.length - 2,
        mobile: window.innerWidth <= 768
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
          <Component {...props} />
        </div>
      ))}
    </section>
  );
};

export default StickySection;