import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import FMContent from "./fm-content";
import FMTitle from "./fm-title";
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const FMSection = () => {

    const scrollerRef = useRef(null);
    const scrollbarRef = useRef(null);
    const isScrollingRef = useRef(true);

    useEffect(() => {
        const scroller = scrollerRef.current;

        // Init smooth-scrollbar
        const bodyScrollBar = Scrollbar.init(scroller, {
            damping: 0.1,
            delegateTo: document
        });
        scrollbarRef.current = bodyScrollBar;

        // Link ScrollTrigger with smooth-scrollbar
        ScrollTrigger.scrollerProxy(scroller, {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            }
        });

        bodyScrollBar.addListener(ScrollTrigger.update);
        ScrollTrigger.defaults({ scroller });

        const sections = scroller.querySelectorAll(".js-full-height-item");

        function goToSection(section, anim) {
            const viewportOffset = section.getBoundingClientRect();

            if (isScrollingRef.current) {
                isScrollingRef.current = false;
                bodyScrollBar.scrollTo(0, bodyScrollBar.scrollTop + viewportOffset.top, 1000, {
                    callback: () => {
                        isScrollingRef.current = true;
                    }
                });
            }

            anim && anim.restart();
        }

        sections.forEach(section => {
            const intoAnim = gsap.from(section, {
                autoAlpha: 0,
                y: 0,
                duration: 0.5
            });

            ScrollTrigger.create({
                trigger: section,
                end: "bottom top+=2",
                onEnter: () => goToSection(section, intoAnim),
                onEnterBack: () => goToSection(section, intoAnim)
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            bodyScrollBar?.destroy();
        };
    }, []);

    return (
        <div ref={scrollerRef} className="scroller">
            <section className="full-height-section">
                <div className="full-height-section__item js-full-height-item d-flex align-items-center justify-content-center">
                    <FMTitle />
                </div>
                <div className="full-height-section__item js-full-height-item d-flex align-items-center justify-content-center">
                    {/* <FMContent /> */}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores iste reprehenderit porro impedit doloremque eligendi, quisquam facere nobis asperiores repellat nisi rem libero sequi expedita repudiandae minus, voluptatem, tenetur omnis.
                </div>
                <div className="full-height-section__item js-full-height-item d-flex align-items-center justify-content-center">
                    {/* TODO: SCREEN */}
                    100% Image
                </div>
            </section>
        </div>
    );
};

export default FMSection;