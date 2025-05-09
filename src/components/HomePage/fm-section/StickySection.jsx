import React, { useRef } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";

import "./StickySection.css";

gsap.registerPlugin(ScrollToPlugin);

const StickySection = ({ sections }) => {

  return (
    <section id="scroller" className="bg_fm_section fm_section_web">
      {sections.map(({ component: Component, props }, index) => (
        <div
          key={index}
          className="screen"
          style={{ height: "100vh" }}
        >
          <div className="d-flex align-items-center justify-content-center w-100 h-100">
            <Component {...props} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default StickySection;
