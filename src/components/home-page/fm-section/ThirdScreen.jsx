import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useSelector } from "react-redux";

import './fm.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ThirdScreen = ({ mobile }) => {

    const { data: { section_4 } } = useSelector(state => state.home);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".screen_card");
        // const yOffsets = cards.map((_, index) => -50 + index * 15);

        // ON ENTER
        ScrollTrigger.create({
            trigger: ".third_screen",
            start: "top 10%",
            end: "bottom 80%",
            // start: "top bottom",
            // end: "bottom top",
            toggleActions: "play none none none",
            scroller: mobile ? "body" : "#scroller",
            onEnter: () => {
                const tl = gsap.timeline();
                tl.to(cards, {
                    duration: 0.3,
                    ease: 'linear',
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    stagger: {
                        each: 0.1,
                    },
                })
                tl.to(cards, {
                    rotateZ: () => gsap.utils.random(-30, 30),
                    duration: 0.3,
                    ease: 'back.out(1.2)',
                });
            },
            onLeaveBack: () => {
                const tl = gsap.timeline();
                tl.to(cards, {
                    rotateZ: 0, // ترجعهم للوضع الطبيعي
                    duration: 0.3,
                    ease: 'linear',
                });
                tl.to(cards, {
                    top: "120%",
                    transform: "translate(-50%, 0%)",
                    duration: 0.3,
                    ease: 'linear',
                    stagger: {
                        each: 0.1,
                    },
                });
            },
            onEnterBack: () => {
                const targetCard = cards[cards?.length - 1];
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

        gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                pin: true,
                trigger: "#third_screen",
                start: "50% 50%",
                // endTrigger: "#scroller",
                // end: "bottom bottom",
                scroller: mobile ? "body" : "#scroller",
                end: `+=${(cards?.length - 1) * 100}%`,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });

    return (
        <div id="third_screen" className='third_screen w-100 h-100 d-flex justify-content-center align-items-center'>
            <div className="_fm-cards">
                {section_4?.images?.map((img, index) => (
                    <img
                        src={img.url}
                        alt={img.alt}
                        key={index}
                        // style={{ transform: `translate(-50%, ${(+index * 10) - 50}%)` }}
                        className='screen_card block'
                    />
                ))}
            </div>
        </div>
    );
};

export default ThirdScreen;
