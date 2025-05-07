import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import './fm.css';

gsap.registerPlugin(ScrollTrigger);

const FifthScreen = () => {

    useGSAP(() => {
        const cards = gsap.utils.toArray(".screen_card");

        ScrollTrigger.create({
            trigger: ".fifth_screen",
            start: "top 0%",
            end: "bottom 100%",
            toggleActions: "restart",
            onLeaveBack: () => {
                cards.forEach((card) => {
                    gsap.to(card, {
                        rotateZ: 0,
                        ease: 'back.out(1.2)',
                    }, "<");
                });
            },
        });

        ScrollTrigger.create({
            trigger: ".fifth_screen",
            start: "top 10%",
            end: "bottom 50%",
            toggleActions: "restart",
            onEnterBack: () => {
                const targetCard = cards?.[cards.length - 1];
                if (!targetCard) return;

                gsap.timeline()
                    .to(targetCard, {
                        y: "-125%",
                        duration: 0.5
                    })
                    .set(targetCard, {
                        zIndex: 1
                    })
                    .to(targetCard, {
                        y: "0",
                        duration: 0.5,
                    });
            }
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".fifth_screen",
                start: "top 0%",
                end: "bottom 100%",
                toggleActions: "restart",
            },
        });

        cards.forEach((card) => {
            const randomRotate = gsap.utils.random(-20, 40);
            tl.to(card, {
                rotateZ: randomRotate,
                ease: 'back.out(1.2)',
            }, "<");
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });


    return (
        <div className='fifth_screen w-100 h-100'>
        </div>
    );
};

export default FifthScreen;