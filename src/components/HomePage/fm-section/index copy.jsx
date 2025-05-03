import Card from '../../../assets/Rectangle.png';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import './fm.css';

gsap.registerPlugin(ScrollTrigger);

const ThirdScreen = () => {

    // useGSAP(() => {
    //     // const cards = gsap.utils.toArray(".screen_card");

    //     // ScrollTrigger.create({
    //     //     trigger: ".screen3-container .screen_card",
    //     //     start: "top 100%",
    //     //     end: "bottom 50%",
    //     //     toggleActions: "restart",
    //     //     onEnter: () => {
                // cards.forEach((card, index) => {
                //     gsap.fromTo(
                //         card,
                //         {
                //             scale: 0,
                //             opacity: 0,
                //             position: "absolute",  
                //             top: "50%",
                //             left :"50%",                          
                //             xPercent: -50,
                //             yPercent: -50 + index * 10,
                //         },
                //         {
                //             scale: 1,
                //             opacity: 1,
                //             duration: 0.6,
                //             delay: index * 0.2,
                //         }
                //     );
                // });
            // },
        // });

    //     // const tl = gsap.timeline({
    //     //     scrollTrigger: {
    //     //         scrub: 1,
    //     //         pin: true,
    //     //         trigger: ".screen3-container .screen_card",
    //     //         start: "50% 50%",
    //     //         endTrigger: ".forth_screen",
    //     //         end: "bottom 50%",
    //     //     },
    //     // });

    //     // // tl.to(".screen3-container .screen_card", {
    //     // //     rotateZ: 900,
    //     // // });

    //     // // return () => {
    //     // //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     // // };
    // });

    useGSAP(() => {
        const cards = gsap.utils.toArray(".screen_card");

        gsap.set(cards, {
            position: "absolute",
            top: "50%",
            left: "50%",
            xPercent: -50,
            yPercent: -50,
            scale: 0,
            opacity: 0,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                pin: true,
                trigger: ".screen3-container .screen_card",
                start: "50% 50%",
                endTrigger: ".forth_screen",
                end: "bottom 50%",
            },
        });

        // // Loop through cards to animate them sequentially
        // cards.forEach((card, index) => {
        //     tl.to(card, {
        //         scale: 1,
        //         opacity: 1,
        //         duration: 0.5,
        //     }, "+=0.3") // optional delay between cards
        //         .to(card, {
        //             scale: 0,
        //             opacity: 0,
        //             duration: 0.5,
        //         }, "+=0.5"); // time while the card stays visible before hiding
        // });


    });


    return (
        <div className='screen3-container position-relative w-100 h-100'>
            <div className="_fm-cards">
                <span className='screen_card block' alt="Random" />
                <span className='screen_card block' alt="Random" />
                <span className='screen_card block' alt="Random" />
                <span className='screen_card block' alt="Random" />
                <span className='screen_card block' alt="Random" />
            </div>
        </div>
    );
};

export default ThirdScreen;