import { useEffect, useRef, useState } from 'react';
import { LogoFav } from '../../../icons';
import './loading.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const onStartAnimation = () => {
    const heroTl = gsap.timeline();

    heroTl.to(['.loading-logo', ".progress-num"], {
        opacity: 0,
        ease: 'back.out(1.7)',
    });

    heroTl.to('.top', {
        y: '-100%',
        duration: 1.2,
        ease: 'power2.inOut',
    });

    heroTl.to('.bottom', {
        y: '100%',
        duration: 1.2,
        ease: 'power2.inOut',
    }, '<');

    heroTl.from(['.rectangular', '.scroll-down'], {
        y: '100vh',
        duration: 1.2,
        ease: 'power2.inOut',
    }, '<');

    heroTl.from(['._fm-logo', '._fm-link'], {
        y: -40,
        opacity: 0,
        duration: 0.6,
        scale: 0,
        ease: 'back.out(1.7)',
        stagger: 0.1,
        filter: 'blur(6px)',
    }, "<0.6");


    heroTl.from(['.inner-word'], {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.1,
        filter: 'blur(6px)',
    }, "<-0.3");

    heroTl.to("body", {
        overflow: "auto"
    }, "<");

    const serviceTl = gsap.timeline({
        delay: .2,
        scrollTrigger: {
            trigger: '._fm-services-container ._fm-section-title',
            scroller: 'body',
            start: 'top 100%',
            toggleActions: 'restart',
        },
    });

    serviceTl.fromTo('._fm-services-container ._fm-section-title', {
        y: 40,
        opacity: 0,
        filter: 'blur(6px)',
        ease: 'back.out(1.7)',
    },
        {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            ease: 'back.out(1.7)',
            stagger: 0.1,
        }
    );

    serviceTl.from('._fm-service-card', {
        transform: 'translateY(10%) scale(.9555)',
        opacity: 0,
        filter: 'blur(4px)',
        stagger: 0.17777,
        ease: 'back.out(.9)',
    }, '<0.2');

    serviceTl.from(['.swiper_button_prev', '.swiper_button_next'], {
        scale: 0,
        filter: 'blur(14px)',
        stagger: 0.2,
        ease: 'back.out(1.7)',
    }, '<0.3');

};

const LoadingScreen = ({ progress }) => {
    const [startAnimation, setStartAnimation] = useState(false);
    const progressNumRef = useRef();

    useEffect(() => {
        startAnimation && onStartAnimation();
    }, [startAnimation])


    useEffect(() => {
        if (progress !== null && progressNumRef.current) {
            const current = parseInt(progressNumRef.current.innerText, 10) || 0;

            gsap.to(progressNumRef.current, {
                innerText: progress,
                duration: .2,
                ease: 'power1.out',
                snap: { innerText: 1 },
                onUpdate: () => {
                    progressNumRef.current.innerText = `${Math.round(progressNumRef.current.innerText)}%`;
                    if (progressNumRef.current.innerText === "100%") {
                        setTimeout(() => {
                            setStartAnimation(true)
                        }, 1000);
                    }
                }
            });
        }
    }, [progress]);

    return (
        <div className='overflow-hidden position-fixed h-100 w-100' style={{ zIndex: 10000000, pointerEvents: "none" }}>
            <div className='loading-logo'>
                <LogoFav />
            </div>
            <div className="progress-num" ref={progressNumRef}>0%</div>
            <div className='bg_box top'></div>
            <div className='bg_box bottom'></div>
        </div>

    );
};

export default LoadingScreen;