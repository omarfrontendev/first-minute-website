import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

import './fm.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const FirstScreen = () => {
    const titleRef = useRef(null);
    const { data: { section_2 } } = useSelector(state => state.home);

    useGSAP(() => {

        // ScrollTrigger.create({
        //     trigger: "#first_screen",
        //     start: "top 98%",
        //     end: "bottom 98%",
        //     toggleActions: "restart",
        //     scroller: 'body',
        //     snap: {
        //         snapTo: 1,
        //         duration: 0.5,
        //         delay: 0.1,
        //     },
        // });

        if (titleRef.current) {
            const innerWords = "#first_screen .inner-word";

            // ON Enter
            // ScrollTrigger.create({
            //     trigger: "#first_screen",
            //     start: "top 20%",
            //     end: "bottom 100%",
            //     toggleActions: "restart",
            //     markers: true,
            //     onEnter: () => {
            //         gsap.fromTo(innerWords, {
            //             y: 80,
            //             opacity: 0,
            //             stagger: 0.1,
            //         }, {
            //             delay: .5,
            //             y: 0,
            //             opacity: 1,
            //             stagger: 0.1,
            //             duration: 0.3,
            //         });
            //     }
            // });

            ScrollTrigger.create({
                trigger: "#first_screen ._fm-section-title",
                start: "top bottom",    // أول ما top العنصر يوصل لأسفل الشاشة
                end: "bottom top",      // لما العنصر يطلع من الشاشة تمامًا
                toggleActions: "play none none none",
                scrub: 1,
                onEnter: () => {
                    gsap.fromTo(innerWords, {
                        y: 80,
                        opacity: 0,
                        stagger: 0.1,
                    }, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.3,
                    });
                },
                onLeave: () => {
                    gsap.to(innerWords, {
                        y: 80,
                        opacity: 0,
                        stagger: 0.1,
                    });
                },
                onEnterBack: () => {
                    gsap.fromTo(innerWords, {
                        y: -80,
                        opacity: 0,
                        stagger: 0.1,
                    }, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.3,
                    });
                },
                onLeaveBack: () => {
                    gsap.to(innerWords, {
                        y: -80,
                        opacity: 0,
                        stagger: 0.1,
                    });
                }
            });

            // ON Leave
            // ScrollTrigger.create({
            //     trigger: ".fm_title",
            //     scroller: "#scroller",
            //     start: "top 0%",
            //     end: "bottom 100%",
            //     toggleActions: "restart",
            //     onLeave: () => {
            //         gsap.to(innerWords, {
            //             y: -80,
            //             opacity: 0,
            //             stagger: 0.1,
            //             duration: 0.3,
            //         });
            //     }
            // });


            // ON Enter Back
            // ScrollTrigger.create({
            //     trigger: ".fm_title",
            //     scroller: "#scroller",
            //     start: "top 0%",
            //     end: "bottom 30%",
            //     toggleActions: "restart",
            //     onEnterBack: () => {
            //         gsap.fromTo(innerWords, {
            //             y: -80,
            //             opacity: 0
            //         }, {
            //             delay: .2,
            //             y: 0,
            //             opacity: 1,
            //             stagger: 0.1,
            //             ease: 'back.out(1.2)',
            //             duration: 0.3,
            //         });
            //     }
            // });


            // ON Leave Back
            // ScrollTrigger.create({
            //     trigger: ".fm_title",
            //     start: "top 20%",
            //     end: "bottom bottom",
            //     toggleActions: "restart",
            //     onLeaveBack: () => {
            //         gsap.fromTo(innerWords, {
            //             y: 0,
            //             opacity: 1,
            //             stagger: 0.1,
            //             ease: 'back.out(1.2)',
            //             duration: 0.3,
            //         }, {
            //             y: 80,
            //             opacity: 0,
            //             stagger: 0.1,
            //             ease: 'back.out(1.2)',
            //             duration: 0.3,
            //         });
            //     }
            // });

        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [{ scope: "#first_screen" }]);

    // useGSAP(() => {

    //     ScrollTrigger.create({
    //         trigger: "#first_screen",
    //         start: "top 98%",
    //         end: "bottom 98%",
    //         toggleActions: "restart",
    //         scroller: 'body',
    //         snap: {
    //             snapTo: 1,
    //             duration: 0.5,
    //             delay: 0.1,
    //         },
    //     });

    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // }, []);


    return (
        <div id="first_screen" style={{ height: "100vh" }}>
            <div className="_fm-title-screen d-flex align-items-center justify-content-center h-100">
                <h2 className="_fm-section-title fm_title text-center" ref={titleRef}>
                    {section_2.split(" ")
                        .map((word, i) => (
                            <span key={i} className="word" style={{ display: "inline-block", overflow: "hidden" }}>
                                <span className="inner-word" style={{ display: "inline-block", opacity: 0 }}>{word}&nbsp;</span>
                            </span>
                        ))}
                </h2>
            </div>
        </div>

    );
};

export default FirstScreen;
