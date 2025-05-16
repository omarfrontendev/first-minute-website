import Overlay from '../../../../assets/Rectangle_10.png';
import { useRef, useState } from 'react';

import '../standards.css';

const StandardCard = ({ text, title, icon, backgroundColor}) => {

    const [transformStyle, setTransformStyle] = useState();
    const cardRef = useRef();

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const { left, top, width, height } = cardRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 20;
        const tiltY = (relativeX - 0.5) * -20;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;

        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        setTransformStyle("perspective(1700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    };


    return (
        <div className='standard-card-box' ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle, transition: "0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}>
            <div className="standard-card d-flex flex-column justify-content-end" style={{ backgroundColor }}>
                <img className='standard-card-overlay' src={Overlay} alt="..." />
                <div className='standard-card-content'>
                    <h4 className="standard-card-title">{title}</h4>
                    <p className="standard-card-text text-truncate-2 w-100">{text}</p>
                </div>
                <div className="standard-card-icon-box">
                    <img className="standard-card-icon" src={icon} alt="" />
                    <span className="card-top-right-curve"></span>
                    <span className="card-bottom-left-curve"></span>
                </div>
            </div>
        </div>
    );
}

export default StandardCard;