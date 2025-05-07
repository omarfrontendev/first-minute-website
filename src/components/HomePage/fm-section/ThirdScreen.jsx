import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useSelector } from "react-redux";

import './fm.css';

gsap.registerPlugin(ScrollTrigger);

const ThirdScreen = () => {

    const { data: { section_4 } } = useSelector(state => state.home);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".screen_card");
        const yOffsets = cards.map((_, index) => -50 + index * 15);

        // ON ENTER
        ScrollTrigger.create({
            trigger: ".third_screen",
            start: "top 10%",
            end: "bottom 80%",
            toggleActions: "restart",
            onEnter: () => {
                const tl = gsap.timeline();
                // gsap.set(cards, { rotateZ: 0, top: "120%", xPercent: -50 });
                tl.to(cards, {
                    duration: 0.3,
                    ease: 'back.out(1.2)',
                    top: "50%",
                    yPercent: (i) => yOffsets[i],
                    stagger: {
                        each: 0.3,
                    },
                })

                tl.to(cards, {
                    duration: 0.3,
                    ease: 'back.out(1.2)',
                    top: "50%",
                    yPercent: -50,
                    stagger: {
                        each: 0.3,
                    },
                })
                tl.to(cards, {
                    rotateZ: () => gsap.utils.random(-30, 30),
                    duration: 0.3,
                    ease: 'back.out(1.2)',
                });
            },
        });

        // onEterBack
        ScrollTrigger.create({
            trigger: ".third_screen",
            start: "top 0%",
            end: "bottom 30%",
            toggleActions: "restart",
            onEnterBack: () => {
                const tl = gsap.timeline();
                const targetCard = cards?.[cards.length - 1];

                tl.to(targetCard, {
                    y: "-125%",
                    duration: 0.5
                }).set(targetCard, {
                    zIndex: 1
                }).to(targetCard, {
                    y: "0",
                    duration: 0.5,
                });
            },
        });

        // onLeaveBack
        ScrollTrigger.create({
            trigger: ".third_screen",
            start: "top 20%",
            end: "bottom 100%",
            toggleActions: "restart",
            onLeaveBack: () => {
                const tl = gsap.timeline();

                tl.to(cards, {
                    rotateZ: 0,
                    duration: 0.3,
                    ease: 'back.out(1.2)',
                });

                tl.to(cards, {
                    duration: 0.3,
                    ease: 'back.out(1.2)',
                    top: "120%",
                    xPercent: -50,
                    stagger: {
                        each: 0.3,
                    },
                })
            },
        });

        gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                pin: true,
                trigger: "._fm-cards",
                start: "50% 50%",
                endTrigger: ".scroller",
                end: "100% 90%",
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });

    return (
        <div className='third_screen w-100 h-100 d-flex justify-content-center align-items-center'>
            <div className="_fm-cards">
                {section_4?.images.map((img, index) => (
                    <img
                        src={img.url}
                        alt={img.alt}
                        key={index}
                        className='screen_card block'
                    />
                ))}
            </div>
        </div>
    );
};

export default ThirdScreen;
