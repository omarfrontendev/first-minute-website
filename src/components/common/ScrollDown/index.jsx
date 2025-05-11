import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import './scroll-down.css';

const ScrollDown = ({ arrowColor }) => {

    useGSAP(() => {
        gsap.fromTo(".scroll-down",
            { y: -10 },
            { y: 0, duration: 0.8, repeat: -1, yoyo: true, ease: "power1.inOut" }
        );
    }, []);

    return (
        <div className={`scroll-down ${arrowColor ? "dark" : ""}`} style={{ color: arrowColor }}>
            مرر للأسفل
        </div>
    );

};

export default ScrollDown;