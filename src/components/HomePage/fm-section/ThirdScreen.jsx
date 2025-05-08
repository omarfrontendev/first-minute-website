import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useSelector } from "react-redux";

import './fm.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ThirdScreen = () => {

    const { data: { section_4 } } = useSelector(state => state.home);

    useGSAP(() => {
        // const cards = gsap.utils.toArray(".screen_card");
        // // const yOffsets = cards.map((_, index) => -50 + index * 15);

        // // ON ENTER
        // ScrollTrigger.create({
        //     trigger: ".third_screen",
        //     start: "top 10%",
        //     end: "bottom 80%",
        //     toggleActions: "restart",
        //     scroller: "#scroller",
        //     onEnter: () => {
        //         const tl = gsap.timeline();
        //         tl.to(cards, {
        //             duration: 0.3,
        //             ease: 'linear',
        //             top: "50%",
        //             transform: "translate(-50%, -50%)",
        //             stagger: {
        //                 each: 0.1,
        //             },
        //         })
        //         tl.to(cards, {
        //             rotateZ: () => gsap.utils.random(-30, 30),
        //             duration: 0.3,
        //             ease: 'back.out(1.2)',
        //         });
        //     },
        //     onLeaveBack: () => {
        //         const tl = gsap.timeline();
        //         tl.to(cards, {
        //             rotateZ: 0, // ترجعهم للوضع الطبيعي
        //             duration: 0.3,
        //             ease: 'linear',
        //         });
        //         tl.to(cards, {
        //             top: "100%", // أو المكان اللي كانوا فيه قبل الدخول
        //             transform: "translate(-50%, 0%)", // تراجع الترانسليت Y
        //             duration: 0.3,
        //             ease: 'linear',
        //             stagger: {
        //                 each: 0.1,
        //             },
        //         });
        //     },
        // });

        // // // onLeaveBack
        // // ScrollTrigger.create({
        // //     trigger: ".third_screen",
        // //     start: "top 20%",
        // //     end: "bottom 140%",
        // //     toggleActions: "restart",
        // //     scroller: "#scroller",
        // //     markers: true,
        // //     onLeaveBack: () => {
        // //         const tl = gsap.timeline();

        // //         tl.to(cards, {
        // //             rotateZ: 0,
        // //             duration: 0.3,
        // //             ease: 'back.out(1.2)',
        // //         });

        // //         cards.forEach((_, index) => {
        // //             tl.to(cards, {
        // //                 duration: 0.3,
        // //                 ease: 'back.out(1.2)',
        // //                 top: "120%",
        // //                 transform: `translate(-50%, -${5 - (index + 1) * 10}%)`,
        // //                 // transform: `translate(-50%, -50%)`,
        // //                 stagger: {
        // //                     each: 0.3,
        // //                 },
        // //             })
        // //         });
        // //     },
        // // });

        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".third_screen",
        //         endTrigger: "#img-5",
        //         scroller: "#scroller",
        //         start: "50% 50%",
        //         end: "100% 100%",
        //         pin: true,
        //         pinSpacing: false,
        //         scrub: 1,
        //         pinType: "transform", // ✅ أضف السطر ده
        //     },
        // });

        ScrollTrigger.create({
            trigger: "#third_screen",
            start: "top 100%",
            end: "bottom 100%",
            toggleActions: "restart",
            scroller: 'body',
            markers: true,
            onEnter: () => {
                console.log("Enter")
                gsap.to(window, {
                    scrollTo: { y: "#third_screen", offsetY: 0 },
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });

    return (
        <div id="third_screen" className='third_screen w-100 h-100 d-flex justify-content-center align-items-center'>
            {/* <div className="_fm-cards">
                {section_4?.images.map((img, index) => (
                    <img
                        src={img.url}
                        alt={img.alt}
                        key={index}
                        className='screen_card block'
                    />
                ))}
            </div> */}
            SCREEN 3
        </div>
    );
};

export default ThirdScreen;
