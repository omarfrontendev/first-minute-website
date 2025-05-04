import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import './fm.css';

gsap.registerPlugin(ScrollTrigger);

const FourthScreen = () => {

    useGSAP(() => {
        // ON ENTER Back
        ScrollTrigger.create({
            trigger: ".forth_screen",
            start: "top 10%",
            end: "bottom 50%",
            toggleActions: "restart",
            onEnterBack: () => {
                cards.forEach((card, index) => {
                    gsap.to(
                        card,
                        {
                            duration: 0.3,
                            ease: 'back.out(1.2)',
                            rotateZ: 0,
                        }
                    );
                });
            },
        });


        const cards = gsap.utils.toArray(".screen_card");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".forth_screen",
                start: "top 90%",
                end: "bottom 80%",
                toggleActions: "restart",
            },
        });

        tl.to(cards, {
            top: "50%",
            left: "50%",
            xPercent: -50,
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
        <div className='forth_screen w-100 h-100'>
        </div>
    );
};

export default FourthScreen;