import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useSelector } from 'react-redux';

import './fm.css';

gsap.registerPlugin(ScrollTrigger);

const SecondScreen = () => {
    const textRef = useRef(null);
    const { data: { section_3 } } = useSelector(state => state.home);

    useGSAP(() => {

        if (!textRef.current) return;

        const innerWords = ".text-fm-section .inner-word";

        // ON ENTER
        // ScrollTrigger.create({
        //     trigger: "#second_screen",
        //     start: "top 80%",
        //     end: "bottom 100%",
        //     scroller: "#scroller",
        //     toggleActions: "restart",
        //     onEnter: () => {
        //         gsap.fromTo(
        //             innerWords,
        //             {
        //                 y: 200,
        //                 opacity: 0,
        //                 duration: .6,
        //             },
        //             {
        //                 y: 0,
        //                 opacity: 1,
        //                 duration: .6,
        //             }
        //         );
        //     },
        // });

        // gsap.timeline({
        //     scrollTrigger: {
        //         // trigger: "#second_screen",
        //         // // endTrigger: "#img-5",
        //         // start: "top top",
        //         // // end: "bottom bottom", // لحظة خروج img-5 من الشاشة
        //         // end: "+=500%", // هنا هينتهي الـ pin بعد ما تمشي 3 سكرينات
        //         // scroller: "#scroller",
        //         // pin: true,
        //         // pinSpacing: true,
        //         // scrub: 1,
        //         // // pinType: "transform",
        //         // markers: true,

        //         // scroller: "#scroller",
        //         scrub: 1,
        //         pin: true,
        //         trigger: "#second_screen ._fm-text",
        //         start: "50% 50%",
        //         endTrigger: ".scroller",
        //         // end: "100% 90%",
        //         end: "+=500%", // هنا هينتهي الـ pin بعد ما تمشي 3 سكرينات
        //         markers: true,
        //     }
        // });

        // ScrollTrigger.create({
        //     trigger: "#second_screen",
        //     start: "top 98%",
        //     // end: "bottom 98%",
        //     toggleActions: "restart",
        //     scroller: 'body',
        //     onEnter: () => {
        //         gsap.to(window, {
        //             scrollTo: { y: "#second_screen", offsetY: 0 },
        //         });
        //     },
        // });

        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: textRef.current,
        //         start: "50% 50%",
        //         pin: true,
        //         scrub: 1,
        //         scroller: "#scroller",
        //         endTrigger: "#scroller",
        //         markers: true,
        //         end: "+=500vh",
        //         // end: "100% 90%",
        //     }
        // });

        gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                pin: true,
                trigger: textRef.current,
                start: "50% 50%",
                endTrigger: "#scroller",
                end: "bottom bottom",
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [{ dependencies: textRef }]);

    return (
        <div id="text-fm-section" className="second_screen d-flex justify-content-center align-items-center">
            <div ref={textRef} className="_fm-title-screen d-flex align-items-center justify-content-center">
                <div className="TEST" style={{ zIndex: 5 }}>
                    <p className="_fm-text">
                        {section_3.split(" ")
                            .map((word, i) => (
                                <span key={i} className="word" style={{ display: "inline-block", overflow: "hidden" }}>
                                    <span className="inner__word" style={{ display: "inline-block" }}>{word}&nbsp;</span>
                                </span>
                            ))}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SecondScreen;