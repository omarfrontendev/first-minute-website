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

        // ON ENTER
        ScrollTrigger.create({
            trigger: ".third_screen",
            start: "top 0%",
            end: "bottom 100%",
            toggleActions: "restart",
            onEnter: () => {
                cards.forEach((card, index) => {
                    gsap.to(
                        card,
                        {
                            duration: 0.3,
                            ease: 'back.out(1.2)',
                            delay: index * 0.2,
                            top: "50%",                            // transform: "translate(-50%, -50%)",
                            xPercent: -50,
                            yPercent: -50 + index * 15,
                        }
                    );
                });
            },
        });

        // onLeaveBack
        ScrollTrigger.create({
            trigger: ".third_screen",
            start: "top 50%",
            end: "bottom 100%",
            toggleActions: "restart",
            onLeaveBack: () => {
                cards.forEach((card) => {
                    gsap.to(
                        card,

                        {
                            yPercent: -50,
                            top: "120%"
                        }
                    );
                });
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
        <div className='third_screen w-100 h-100'>
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
