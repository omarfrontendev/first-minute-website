import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import './fm.css';

gsap.registerPlugin(ScrollTrigger);

const SixthScreen = () => {

    useGSAP(() => {
        const cards = gsap.utils.toArray(".screen_card");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sixth_screen",
                start: "top 90%",
                end: "bottom 80%",
                toggleActions: "restart",
            },
        });

        tl.to(cards[cards?.length - 1], {
            delay: 0.5,
            y: "-100%",
            duration: 0.5
        }).to(cards[cards?.length - 1], {
            zIndex: 0,
            y: "0",
            duration: 0.5
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });


    return (
        <div className='sixth_screen w-100 h-100'>
        </div>
    );
};

export default SixthScreen;