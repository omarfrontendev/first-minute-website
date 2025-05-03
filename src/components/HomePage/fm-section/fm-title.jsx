import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import './fm.css';

gsap.registerPlugin(ScrollTrigger);

const FMTitle = () => {
    const titleRef = useRef(null);

    useGSAP(() => {
        if (titleRef.current) {
            const innerWords = "#title-fm-section .inner-word";

            // ON Enter
            ScrollTrigger.create({
                trigger: titleRef.current,
                start: "top 100%",
                end: "bottom 50%",
                toggleActions: "restart",
                onEnter: () => {
                    gsap.fromTo(
                        innerWords,
                        {
                            y: 80, // يبدأ من الأسفل
                            opacity: 0,
                            stagger: 0.1,
                            ease: 'back.out(1.2)',
                        },
                        {
                            y: 0, // يتحرك للموضع الطبيعي
                            opacity: 1,
                            stagger: 0.1,
                            ease: 'back.out(1.2)',
                        }
                    );
                }
            });

            // ON Leave
            ScrollTrigger.create({
                trigger: titleRef.current,
                start: "top 35%",
                end: "bottom 70%",
                toggleActions: "restart",
                onLeave: () => {
                    gsap.fromTo(innerWords, {
                        y: 0, // يتحرك للموضع الطبيعي
                        opacity: 1,
                        stagger: 0.1,
                        ease: 'back.out(1.2)',
                    }, {
                        y: -80, // يتحرك للأعلى
                        opacity: 0,
                        stagger: 0.1,
                        ease: 'back.out(1.2)',
                        duration: 0.3,
                    });
                }
            });

            // ON Enter Back
            ScrollTrigger.create({
                trigger: titleRef.current,
                start: "top 0%",
                end: "bottom 50%",
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
                trigger: titleRef.current,
                start: "top 60%",
                end: "bottom 100%",
                toggleActions: "restart",
                onLeaveBack: () => {
                    gsap.fromTo(
                        innerWords,
                        {
                            y: 0, // يبدأ من الأسفل
                            opacity: 1,
                            stagger: 0.1,
                            ease: 'back.out(1.2)',
                            duration: 0.3,
                        },
                        {
                            y: 80, // يتحرك للموضع الطبيعي
                            opacity: 0,
                            stagger: 0.1,
                            ease: 'back.out(1.2)',
                            duration: 0.3,
                        }
                    );
                }
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [{ scope: "#title-fm-section" }]);

    const title = "أول دقيقة ... عنوان التميز";

    return (
        <div id="title-fm-section" className="panel d-flex justify-content-center align-items-center">
            <div className="_fm-title-screen d-flex align-items-center justify-content-center h-100">
                <h2 className="_fm-section-title text-center" ref={titleRef}>
                    {title.split(" ")
                        .map((word, i) => (
                            <span key={i} className="word" style={{ display: "inline-block", overflow: "hidden" }}>
                                <span className="inner-word" id={`inner-word-${i}`} style={{ display: "inline-block", opacity: 1 }}>{word}&nbsp;</span>
                            </span>
                        ))}
                </h2>
            </div>
        </div>

    );
};

export default FMTitle;
