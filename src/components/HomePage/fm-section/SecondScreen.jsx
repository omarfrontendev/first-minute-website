import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useSelector } from 'react-redux';

import './fm.css';

gsap.registerPlugin(ScrollTrigger);


const SecondScreen = () => {

    const textRef = useRef(null);
    const { data: { section_3 } } = useSelector(state => state.home);

    // useGSAP(() => {
    //     if (textRef.current) {
    //         const innerWords = "#text-fm-section .inner__word";

    //         // ON ENTER
    //         ScrollTrigger.create({
    //             trigger: textRef.current,
    //             start: "top 100%",
    //             end: "bottom 50%",
    //             toggleActions: "restart",
    //             onEnter: () => {
    //                 gsap.fromTo(
    //                     innerWords,
    //                     {
    //                         y: 200,
    //                         opacity: 0,
    //                         duration: .6,
    //                     },
    //                     {
    //                         y: 0,
    //                         opacity: 1,
    //                         duration: .6,
    //                     }
    //                 );
    //             },
    //         });

    //         gsap.timeline({
    //             scrollTrigger: {
    //                 scrub: 1,
    //                 pin: true,
    //                 trigger: textRef.current,
    //                 start: "50% 50%",
    //                 endTrigger: ".scroller",
    //                 end: "100% 90%",
    //             },
    //         });
    //     }

    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // });

    return (

        <div id="text-fm-section" className="panel d-flex justify-content-center align-items-center">
            {/* <div className="_fm-title-screen d-flex align-items-center justify-content-center">
                <p className="_fm-text" ref={textRef}>
                    {section_3.split(" ")
                        .map((word, i) => (
                            <span key={i} className="word" style={{ display: "inline-block", overflow: "hidden" }}>
                                <span className="inner__word" style={{ display: "inline-block" }}>{word}&nbsp;</span>
                            </span>
                        ))}
                </p>
            </div> */}
            <h1>SCREEN (2)</h1>
        </div>
    );
}

export default SecondScreen;