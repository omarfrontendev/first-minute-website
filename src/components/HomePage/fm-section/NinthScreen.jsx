import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import './fm.css';

gsap.registerPlugin(ScrollTrigger);

const NinthScreen = () => {

    function getCurrentRotation(element) {
        const style = window.getComputedStyle(element);
        const transform = style.transform || style.webkitTransform || style.mozTransform;

        if (transform === "none") return 0;

        const matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            const values = matrix[1].split(", ");
            const a = parseFloat(values[0]);
            const b = parseFloat(values[1]);
            const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
            return angle;
        }

        return 0;
    }

    // useGSAP(() => {
    //     const cards = gsap.utils.toArray(".screen_card");

    //     // ON ENTER
    //     ScrollTrigger.create({
    //         trigger: ".nine_screen",
    //         start: "top 90%",
    //         end: "bottom 80%",
    //         onEnter: () => {
    //             const tl = gsap.timeline();

    //             tl.to(cards[cards?.length - 4], {
    //                 y: "-125%",
    //                 duration: 0.5,
    //             }).to(cards[cards?.length - 4], {
    //                 zIndex: 0,
    //                 y: "0",
    //                 duration: 0.5,
    //             }).to(".screen3-container", {
    //                 position: "absolute",
    //                 bottom: "0",
    //                 top: "auto",
    //                 left: "0",
    //             });

    //             cards.forEach((card) => {
    //                 const currentRotation = getCurrentRotation(card);

    //                 tl.to(
    //                     card,
    //                     {
    //                         position: "absolute",
    //                         top: "auto",
    //                         bottom: "0",
    //                         transform: `translate(-50%, calc(-50vh + 50%)) rotate(${currentRotation}deg)`,
    //                     },
    //                     "<"
    //                 );
    //             });
    //         },
    //     });

    //     // ON LEAVE BACK
    //     ScrollTrigger.create({
    //         trigger: ".nine_screen",
    //         start: "top 1%",
    //         end: "bottom 99%",
    //         toggleActions: "restart",
    //         onLeaveBack: () => {
    //             const tl = gsap.timeline();

    //             tl.to(".screen3-container", {
    //                 position: "relative",
    //             })
    
    //             cards.forEach((card) => {
    //                 // const currentRotation = getCurrentRotation(card);
    //                 const randomRotate = gsap.utils.random(-40, 40);

    //                 tl.to(
    //                     card,
    //                     {
    //                         rotateZ: randomRotate,
    //                         position: "fixed",
    //                         top: "50%",
    //                         bottom: "auto",
    //                         transform: `translate(-50%, -50%)`,
    //                     },
    //                     "<"
    //                 );
    //             });
    //         },
    //     });

    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // });


    return (
        <div className='nine_screen w-100 h-100'>
        </div>
    );
};

export default NinthScreen;