import StandardCard from "./standard-card";
import TimeIcon from '../../../assets/01.svg';
import ExpandedWord from "./ExpandedWord";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useEffect } from "react";

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
                start: 'top 100%',
                toggleActions: 'restart',
            },
        });

        masterTL.fromTo("._fm-standards-container ._fm-section-title", {
            y: 120,
            opacity: 0,
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

    });

    useEffect(() => {
        const section = document.getElementById("standards");

        let previousY = 0;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const currentY = entry.boundingClientRect.y;

                const isScrollingUp = currentY > previousY;

                if (entry.isIntersecting && isScrollingUp) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                }

                previousY = currentY;
            },
            {
                threshold: 0.1,
            }
        );

        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

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