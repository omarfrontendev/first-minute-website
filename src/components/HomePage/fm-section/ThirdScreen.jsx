import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import './fm.css';

gsap.registerPlugin(ScrollTrigger);

const ThirdScreen = () => {
    useGSAP(() => {
        const cards = gsap.utils.toArray(".screen_card");

        // ON ENTER
        ScrollTrigger.create({
            trigger: ".screen3-container",
            start: "top 90%",
            end: "bottom 80%",
            toggleActions: "restart",
            onEnter: () => {
                cards.forEach((card, index) => {
                    gsap.fromTo(
                        card,
                        {
                            // scale: 0,
                            //opacity: 0,
                            position: "absolute", // نستخدم absolute لكي تظل العناصر تتحرك مع الاسكرول
                            top: "100%",
                            left: "50%",
                            xPercent: -50,
                            yPercent: -50 + index * 20,
                        },
                        {
                            // scale: 1,
                            //opacity: 1,
                            duration: 0.3,
                            ease: 'back.out(1.2)',
                            delay: index * 0.2,
                            position: "fixed", // استخدام fixed لكي تبقى في مكان ثابت
                            top: "50%", // تثبيت العناصر في وسط الشاشة
                            left: "50%",
                            xPercent: -50,
                            yPercent: -50 + index * 20,
                        }
                    );
                });
            },
        });

        // ON LEAVE
        ScrollTrigger.create({
            trigger: ".screen3-container",
            start: "top 90%",
            end: "bottom 80%",
            toggleActions: "restart",
            onLeave: () => {
                cards.forEach((card) => {
                    gsap.to(
                        card,

                        {
                            position: "fixed", // استخدام fixed لكي تبقى في مكان ثابت
                        }
                    );
                });
            },
        });

        // ON LEAVE BACK
        ScrollTrigger.create({
            trigger: ".screen3-container",
            start: "top 1%",
            end: "bottom 99%",
            toggleActions: "restart",
            onLeaveBack: () => {
                cards.forEach((card, index) => {
                    gsap.to(
                        card,
                        {
                            // scale: 0,
                            //opacity: 0,
                            position: "absolute", // نستخدم absolute لكي تظل العناصر تتحرك مع الاسكرول
                            top: "100%",
                            left: "50%",
                            xPercent: -50,
                            yPercent: -50 + index * 20,
                        }
                    );
                });
            },
        });

        // ON ENTER BACK
        ScrollTrigger.create({
            trigger: ".screen3-container",
            start: "top 10%",
            end: "bottom 50%",
            toggleActions: "restart",
            onEnterBack: () => {
                cards.forEach((card, index) => {
                    gsap.fromTo(
                        card,
                        {
                            top: "50%",
                            left: "50%",
                            xPercent: -50,
                            yPercent: -50,
                        },
                        {
                            duration: 0.3,
                            ease: 'back.out(1.2)',
                            delay: index * 0.2,
                            top: "50%",
                            left: "50%",
                            xPercent: -50,
                            yPercent: -50 + index * 20,
                        }
                    );
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });

    return (
        <div className='screen3-container w-100 h-100'>
            <div className="_fm-cards">
                {[...Array(5)].map((_, index) => (
                    <img
                        alt={`Random-${index + 1}`}
                        key={index}
                        className='screen_card block'
                    />
                ))}
            </div>
        </div>
    );
};

export default ThirdScreen;
