import StandardCard from "./standard-card";
import TimeIcon from '../../../assets/01.svg';
import ExpandedWord from "./ExpandedWord";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const standards = [
    {
        title: "الوقت",
        text: "عامل الوقت مهم في تجربتنا، ومؤثر في صناعتنا الإبداعية. نستغل التوقيت لنبتكر الدهشة ومعالمها الفاتنة.",
        icon: TimeIcon,
        bgColor: "#000",
    },
    {
        title: "الوقت",
        text: "عامل الوقت مهم في تجربتنا، ومؤثر في صناعتنا الإبداعية. نستغل التوقيت لنبتكر الدهشة ومعالمها الفاتنة.",
        icon: TimeIcon,
        bgColor: "#362E57",
    },
    {
        title: "الوقت",
        text: "عامل الوقت مهم في تجربتنا، ومؤثر في صناعتنا الإبداعية. نستغل التوقيت لنبتكر الدهشة ومعالمها الفاتنة.",
        icon: TimeIcon,
        bgColor: "#D16166",
    },
];


const Standards = () => {
    useGSAP(() => {
        const masterTL = gsap.timeline({
            delay: 0.2,
            scrollTrigger: {
                trigger: '._fm-standards-container',
                scroller: 'body',
                start: 'top 80%',
                toggleActions: 'restart',
            },
        });

        masterTL.fromTo("._fm-standards-container ._fm-section-title", {
            y: 120,
            stagger: .1,
            ease: 'back.out(1.2)',
            filter: "blur(6px)"
        },
            {
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                stagger: 0.1,
            }   
        );

        masterTL.from('._fm-standards-container .standard-card', {
            transform: 'translateY(10%) scale(.9555)',
            opacity: 0,
            filter: 'blur(4px)',
            stagger: 0.17777,
            ease: 'back.out(.8)',
        });

        // masterTL.from(".standard-card-icon", {
        //     scale: 0.5,
        //     opacity: 0,
        //     filter: 'blur(14px)',
        //     duration: 0.5,
        //     ease: 'back.out(4)',
        //     stagger: .1,
        // }, ">-0.8");

        // masterTL.from(".standard-card-title", {
        //     opacity: 0,
        //     y: 40,
        //     filter: 'blur(14px)',
        //     duration: 0.3,
        //     ease: 'back.out(4)',
        //     stagger: .1,
        // }, ">-0.7");

        // masterTL.from(".standard-card-text", {
        //     opacity: 0,
        //     y: 40,
        //     filter: 'blur(14px)',
        //     duration: 0.3,
        //     ease: 'back.out(4)',
        //     stagger: .1,
        // }, ">-0.3");

        // cards.forEach((card) => {

        //     // const tl = gsap.timeline();

        //     // tl.from(card, {
        //     //     y: '10%',
        //     //     opacity: 0,
        //     //     filter: 'blur(4px)',
        //     //     duration: 0.3,
        //     //     ease: 'back.out(1.2)',
        //     //     stagger: 0.1,
        //     // });

        //     // if (icon) {
        //     //     tl.from(icon, {
        //     //         scale: 0.5,
        //     //         opacity: 0,
        //     //         filter: 'blur(14px)',
        //     //         duration: 0.3,
        //     //         ease: 'back.out(4)',
        //     //     });
        //     // }

        //     // if (title) {
        //     //     tl.from(title, {
        //     //         opacity: 0,
        //     //         y: 40,
        //     //         filter: 'blur(14px)',
        //     //         duration: 0.3,
        //     //         ease: 'back.out(4)',
        //     //     });
        //     // }

        //     // if (text) {
        //     //     tl.from(text, {
        //     //         opacity: 0,
        //     //         y: 40,
        //     //         filter: 'blur(14px)',
        //     //         duration: 0.3,
        //     //         ease: 'back.out(4)',
        //     //     });
        //     // }

        //     // masterTL.add(tl); // Add tl sequentially, no overlap
        // });

    });

    return (
        <section className='_fm-standards-container' id='standards'>
            <div className="overflow-hidden text-right">
                <ExpandedWord baseText="معــــــــاييـــرنا" filler="ـ" />
            </div>
            <div className='d-flex gap-3 gap-xl-4 standards-list'>
                {standards.map((standard, i) => (
                    <StandardCard
                        key={i}
                        title={standard?.title}
                        text={standard?.text}
                        icon={standard?.icon}
                        backgroundColor={standard?.bgColor}
                        cover={standard?.cover}
                    />
                ))}
            </div>
        </section>

    );
};

export default Standards;