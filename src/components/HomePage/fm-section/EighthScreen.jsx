import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import './fm.css';

gsap.registerPlugin(ScrollTrigger);

const EighthScreen = () => {

    // useGSAP(() => {
    //     const cards = gsap.utils.toArray(".screen_card");

    //     ScrollTrigger.create({
    //         trigger: ".eighth_screen",
    //         start: "top 10%",
    //         end: "bottom 50%",
    //         toggleActions: "restart",
    //         onEnterBack: () => {
    //             gsap.to(cards[cards?.length - 4], {
    //                 y: "-125%",
    //                 duration: 0.5
    //             })
    //             gsap.to(cards[cards?.length - 4], {
    //                 zIndex: 1,
    //                 delay: .5,
    //                 y: "0",
    //                 duration: 0.5
    //             });
    //         },
    //     });

    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".eighth_screen",
    //             start: "top 90%",
    //             end: "bottom 80%",
    //             toggleActions: "restart",
    //         },
    //     });

    //     tl.to(cards[cards?.length - 3], {
    //         y: "-125%",
    //         duration: 0.5
    //     }).to(cards[cards?.length - 3], {
    //         zIndex: 0,
    //         y: "0",
    //         duration: 0.5
    //     });

    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // });

    return (
        <div className='eighth_screen w-100 h-100'>
        </div>
    );
};

export default EighthScreen;