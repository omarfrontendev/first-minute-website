import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

import './fm.css';

gsap.registerPlugin(ScrollTrigger);

const FirstScreen = () => {
    const titleRef = useRef(null);
    const { data: { section_2 } } = useSelector(state => state.home);

    // useGSAP(() => {
    //     if (titleRef.current) {
    //         const innerWords = "#first_screen .inner-word";

    //         // ON Enter
    //         ScrollTrigger.create({
    //             trigger: ".fm_title",
    //             start: "top 100%",
    //             end: "bottom 20%",
    //             toggleActions: "restart",
    //             onEnter: () => {
    //                 gsap.fromTo(innerWords, {
    //                     y: 80,
    //                     opacity: 0,
    //                     stagger: 0.1,
    //                 }, {
    //                     delay: .2,
    //                     y: 0,
    //                     opacity: 1,
    //                     stagger: 0.1,
    //                     duration: 0.3,
    //                 });
    //             }
    //         });

    //         // ON Leave
    //         ScrollTrigger.create({
    //             trigger: ".fm_title",
    //             start: "top 0%",
    //             end: "bottom 100%",
    //             toggleActions: "restart",
    //             onLeave: () => {
    //                 gsap.to(innerWords, {
    //                     delay: .5,
    //                     y: -80,
    //                     opacity: 0,
    //                     stagger: 0.1,
    //                     duration: 0.3,
    //                 });
    //             }
    //         });


    //         // ON Enter Back
    //         ScrollTrigger.create({
    //             trigger: ".fm_title",
    //             start: "top 0%",
    //             end: "bottom 30%",
    //             toggleActions: "restart",
    //             onEnterBack: () => {
    //                 gsap.fromTo(innerWords, {
    //                     y: -80,
    //                     opacity: 0
    //                 }, {
    //                     delay: .2,
    //                     y: 0,
    //                     opacity: 1,
    //                     stagger: 0.1,
    //                     ease: 'back.out(1.2)',
    //                     duration: 0.3,
    //                 });
    //             }
    //         });


    //         // ON Leave Back
    //         // ScrollTrigger.create({
    //         //     trigger: ".fm_title",
    //         //     start: "top 20%",
    //         //     end: "bottom bottom",
    //         //     toggleActions: "restart",
    //         //     onLeaveBack: () => {
    //         //         gsap.fromTo(innerWords, {
    //         //             y: 0,
    //         //             opacity: 1,
    //         //             stagger: 0.1,
    //         //             ease: 'back.out(1.2)',
    //         //             duration: 0.3,
    //         //         }, {
    //         //             y: 80,
    //         //             opacity: 0,
    //         //             stagger: 0.1,
    //         //             ease: 'back.out(1.2)',
    //         //             duration: 0.3,
    //         //         });
    //         //     }
    //         // });

    //     }

    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // }, [{ scope: "#first_screen" }]);

    return (
        <div id="first_screen" className="panel d-flex justify-content-center align-items-center">
            <div className="_fm-title-screen d-flex align-items-center justify-content-center h-100">
                <h2 className="_fm-section-title fm_title text-center" ref={titleRef}>
                    {section_2.split(" ")
                        .map((word, i) => (
                            <span key={i} className="word" style={{ display: "inline-block", overflow: "hidden" }}>
                                <span className="inner-word" style={{ display: "inline-block" }}>{word}&nbsp;</span>
                            </span>
                        ))}
                </h2>
            </div>
        </div>

    );
};

export default FirstScreen;
