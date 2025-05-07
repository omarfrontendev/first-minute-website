import { useEffect, useRef, useState } from 'react';
import { LogoFav } from '../../icons';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";
import gsap from 'gsap';
import { useSelector } from 'react-redux';

import './loading.css';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const onStartAnimation = () => {
    const heroTl = gsap.timeline();

    heroTl.to(['.loading-logo', ".progress-num"], {
        opacity: 0,
        ease: 'back.out(1.2)',
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
        ease: 'back.out(1.2)',
        stagger: 0.1,
        filter: 'blur(6px)',
    }, "<0.6");

    heroTl.to("body", {
        overflow: "auto"
    }, "<");

    heroTl.from(`#hero-title .inner-word`, {
        y: 80,
        stagger: .1,
        ease: 'back.out(1.2)',
        filter: "blur(6px)"
    }, "<0.8");

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
        y: 80,
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

    serviceTl.from('._fm-service-card', {
        transform: 'translateY(10%) scale(.9555)',
        opacity: 0,
        filter: 'blur(4px)',
        stagger: 0.17777,
        ease: 'back.out(.8)',
    }, '<0.2');

    serviceTl.from(['.swiper_button_prev', '.swiper_button_next'], {
        scale: 0,
        filter: 'blur(14px)',
        stagger: 0.2,
        ease: 'back.out(2)',
    }, '<0.3');

};

const LoadingScreen = ({ progress }) => {
    const [startAnimation, setStartAnimation] = useState(false);
    const { status } = useSelector(state => state.home);
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
                    if (progressNumRef.current.innerText === "100%" && status === "succeeded") {
                        setTimeout(() => {
                            setStartAnimation(true)
                        }, 1000);
                    }
                }
            });
        }
    }, [progress, status]);

    return (
        <div className='overflow-hidden position-fixed h-100 w-100' style={{ zIndex: 10000000, pointerEvents: "none", top: 0 }}>
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