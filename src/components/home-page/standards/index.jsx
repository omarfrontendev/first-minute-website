import StandardCard from "./standard-card";
import ExpandedWord from "./ExpandedWord";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Standards = ({ standards }) => {

    const colors = [
        "#000000",
        "#362E57",
        "#D16166",
    ];

    const standardsColored = standards.map((standard, index) => {
        const color = colors[index % colors.length];
        return { ...standard, color };
    });

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

    // useEffect(() => {
    //     const section = document.getElementById("standards");

    //     let previousY = 0;

    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             const currentY = entry.boundingClientRect.y;

    //             const isScrollingUp = currentY > previousY;

    //             if (entry.isIntersecting && isScrollingUp) {
    //                 section.scrollIntoView({ behavior: "smooth", block: "start" });
    //             }

    //             previousY = currentY;
    //         },
    //         {
    //             threshold: 0.1,
    //         }
    //     );

    //     if (section) observer.observe(section);

    //     return () => {
    //         if (section) observer.unobserve(section);
    //     };
    // }, []);

    return (
        <section className='_fm-standards-container' id='standards'>
            <div className="overflow-hidden text-right">
                <ExpandedWord baseText="معــــــــاييـــرنا" filler="ـ" />
            </div>
            <div className='standards-list'>
                {standardsColored.map((standard, i) => (
                    <StandardCard
                        key={i}
                        title={standard?.title}
                        text={standard?.description}
                        icon={standard?.logo}
                        backgroundColor={standard?.color}
                    />
                ))}
            </div>
        </section>

    );
};

export default Standards;