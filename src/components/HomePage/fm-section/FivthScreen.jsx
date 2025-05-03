import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import './fm.css';

gsap.registerPlugin(ScrollTrigger);

const FivthScreen = () => {

    useGSAP(() => {
        const cards = gsap.utils.toArray(".screen_card");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".fivth_screen",
                start: "top 90%",
                end: "bottom 80%",
                toggleActions: "restart",
            },
        });

        cards.forEach((card) => {
            const randomRotate = gsap.utils.random(-40, 40);
            tl.to(card, {
                rotateZ: randomRotate,
                top: "50%",
                left: "50%",
                xPercent: -50,
                yPercent: -50,
                duration: 0.3,
                ease: 'back.out(1.2)',
            }, "<");
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });


    return (
        <div className='fivth_screen w-100 h-100'>
        </div>
    );
};

export default FivthScreen;