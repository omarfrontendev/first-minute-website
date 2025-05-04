import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import './fm.css';

gsap.registerPlugin(ScrollTrigger);

const FirstScreen = () => {
    const titleRef = useRef(null);

    useGSAP(() => {
        if (titleRef.current) {
            const innerWords = "#first_screen .inner-word";

            // // ON Enter
            ScrollTrigger.create({
                trigger: "#first_screen",
                start: "top 80%", // أول ما يوصل 20% من الشاشة
                end: "bottom 20%",
                toggleActions: "restart",
                onEnter: () => {
                    gsap.fromTo(innerWords, {
                        y: 80,
                        opacity: 0,
                        stagger: 0.1,
                        ease: 'back.out(1.2)',
                    }, {
                        delay: .2,
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        ease: 'back.out(1.2)',
                    });
                }
            });


            // ON Leave
            ScrollTrigger.create({
                trigger: "#first_screen",
                start: "top -10%",
                end: "bottom 100%",
                toggleActions: "restart",
                onLeave: () => {
                    gsap.fromTo(innerWords, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        ease: 'back.out(1.2)',
                    }, {
                        y: -80,
                        opacity: 0,
                        stagger: 0.1,
                        ease: 'back.out(1.2)',
                        duration: 0.3,
                    });
                }
            });


            // ON Enter Back
            ScrollTrigger.create({
                trigger: "#first_screen",
                start: "top bottom",
                end: "bottom 80%",
                toggleActions: "restart",
                onEnterBack: () => {
                    gsap.fromTo(innerWords, {
                        y: -80,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        ease: 'back.out(1.2)',
                        duration: 0.3,
                    });
                }
            });


            // ON Leave Back
            ScrollTrigger.create({
                trigger: "#first_screen",
                start: "top 20%",
                end: "bottom bottom",
                toggleActions: "restart",
                onLeaveBack: () => {
                    gsap.fromTo(innerWords, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        ease: 'back.out(1.2)',
                        duration: 0.3,
                    }, {
                        y: 80,
                        opacity: 0,
                        stagger: 0.1,
                        ease: 'back.out(1.2)',
                        duration: 0.3,
                    });
                }
            });

        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [{ scope: "#first_screen" }]);

    const title = "أول دقيقة ... عنوان التميز";

    return (
        <div id="first_screen" className="panel d-flex justify-content-center align-items-center">
            <div className="_fm-title-screen d-flex align-items-center justify-content-center h-100">
                <h2 className="_fm-section-title text-center" ref={titleRef}>
                    {title.split(" ")
                        .map((word, i) => (
                            <span key={i} className="word" style={{ display: "inline-block", overflow: "hidden" }}>
                                <span className="inner-word" style={{ display: "inline-block", opacity: 1 }}>{word}&nbsp;</span>
                            </span>
                        ))}
                </h2>
            </div>
        </div>

    );
};

export default FirstScreen;
