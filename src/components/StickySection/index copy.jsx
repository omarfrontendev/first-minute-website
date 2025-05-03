import React, { useEffect, useRef } from "react";
import "./StickySection.css";
import FMTitle from "../HomePage/fm-section/fm-title";
import FMContent from "../HomePage/fm-section/fm-content";

const StickySection = () => {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);

  const scrollToSection = (section) => {
    const duration = 1;
    const start = window.scrollY;
    const end = section.offsetTop;
    const distance = end - start;
    let startTime = null;

    const scroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const scrollAmount = Math.min(progress / duration, 1) * distance;
      window.scrollTo(0, start + scrollAmount);
      if (progress < duration) {
        window.requestAnimationFrame(scroll);
      }
    };

    window.requestAnimationFrame(scroll);
  };

  const scrollBetweenScreens = (direction) => {
    const scrollDistance = window.innerHeight;
    const scroller = scrollerRef.current;

    if (scroller) {
      const currentScroll = scroller.scrollTop;
      const nextScroll = direction === "down" ? currentScroll + scrollDistance : currentScroll - scrollDistance;

      const duration = 500;
      const startTime = performance.now();
      const scroll = (timestamp) => {
        const progress = timestamp - startTime;
        const scrollAmount = Math.min(progress / duration, 1) * (nextScroll - currentScroll);
        scroller.scrollTo(0, currentScroll + scrollAmount);

        if (progress < duration) {
          window.requestAnimationFrame(scroll);
        }
      };

      window.requestAnimationFrame(scroll);
    }
  };

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // scrollToSection(section);
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      },
      {
        threshold: [0, 1],
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      scrollBetweenScreens("down");
    } else {
      scrollBetweenScreens("up");
    }
  };

  return (
    <div
      ref={scrollerRef}
      className="scroller"
      onWheel={handleScroll}
      id="scroller"
    >
      <section className="full-height-section" ref={sectionRef}>
        {[<FMTitle />, <FMContent />].map((screen, index) => (
          <div key={index} className="full-height-section__item">
            <div className="d-flex align-items-center justify-content-center w-100 h-100">
              {screen}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StickySection;
