import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import './fm.css';

gsap.registerPlugin(ScrollTrigger);

const FourthScreen = () => {

    useGSAP(() => {
        // ON ENTER Back
        ScrollTrigger.create({
            trigger: ".fourth_screen",
            start: "top 0%",
            end: "bottom 100%",
            toggleActions: "restart",
            onLeaveBack: () => {
                cards.forEach((card, index) => {
                    gsap.to(
                        card,
                        {
                            duration: 0.3,
                            ease: 'back.out(1.2)',
                            delay: index * 0.2,
                            xPercent: -50,
                            yPercent: -50 + index * 20,
                        }
                    );
                });
            },
        });


        const cards = gsap.utils.toArray(".screen_card");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".fourth_screen",
                start: "top 0%",
                end: "bottom 100%",
                toggleActions: "restart",
            },
        });

        tl.to(cards, {
            yPercent: -50,
            stagger: 0.2,
            duration: 0.3,
            ease: 'back.out(1.2)',
        }, "<");

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });


    return (
        <div className='fourth_screen w-100 h-100'>
        </div>
    );
};

export default FourthScreen;