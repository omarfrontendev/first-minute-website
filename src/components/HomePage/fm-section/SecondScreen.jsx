import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useSelector } from 'react-redux';

import './fm.css';

gsap.registerPlugin(ScrollTrigger);


const SecondScreen = () => {

    const { data: { section_3 } } = useSelector(state => state.home);

    useGSAP(() => {
        const innerWords = ".text-fm-section .inner-word";

        // ON ENTER
        ScrollTrigger.create({
            trigger: "#second_screen",
            start: "top 80%",
            end: "bottom 100%",
            scroller: "#scroller",
            toggleActions: "restart",
            onEnter: () => {
                gsap.fromTo(
                    innerWords,
                    {
                        y: 200,
                        opacity: 0,
                        duration: .6,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: .6,
                    }
                );
            },
        });

        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: "#second_screen",
        //         endTrigger: "#img-5",
        //         start: "top top",
        //         end: "bottom bottom", // لحظة خروج img-5 من الشاشة
        //         scroller: "#scroller",
        //         pin: true,
        //         pinSpacing: false,
        //         scrub: 1,
        //         pinType: "transform",
        //         markers: true,
        //     }
        // });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });

    return (
        <div id="second_screen" className="panel second_screen d-flex justify-content-center align-items-center">
            <div className="text-fm-section _fm-title-screen d-flex align-items-center justify-content-center h-100">
                <p className="_fm-text text-center">
                    {section_3.split(" ")
                        .map((word, i) => (
                            <span key={i} className="word" style={{ display: "inline-block", overflow: "hidden" }}>
                                <span className="inner-word" style={{ display: "inline-block" }}>{word}&nbsp;</span>
                            </span>
                        ))}
                </p>
            </div>
        </div>

    );
}

export default SecondScreen;