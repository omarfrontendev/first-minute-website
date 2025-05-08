import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useSelector } from 'react-redux';

import './fm.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.defaults({
    scroller: "#scroller",
});


const SecondScreen = () => {

    const { data: { section_3 } } = useSelector(state => state.home);

    useGSAP(() => {
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

        ScrollTrigger.create({
            trigger: "#second_screen",
            start: "top 100%",
            end: "bottom 100%",
            toggleActions: "restart",
            scroller: 'body',
            onEnter: () => {
                console.log("Enter")
                gsap.to(window, {
                    scrollTo: { y: "#second_screen", offsetY: 0 },
                });
            },
        });

        gsap.timeline({
            scrollTrigger: {
              trigger: "#second_screen ._fm-text",
              start: "50% 50%",
              end: "+=5000vh", // ✅ دي بتخلي الـ pin يستمر 500vh
              pin: true,
              pinSpacer: false,
              scrub: 1,
              markers: true,
              scroller: "body", // ✅ أو احذفها خالص لو بتسكرول على window
            }
          });

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