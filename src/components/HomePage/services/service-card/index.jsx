import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useRef, useLayoutEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const ServiceCard = ({ title, text, image, color }) => {
    const [hovered, setHovered] = useState(false);
    const [cardSize, setCardSize] = useState({ width: 0, height: 0 });
    const [linkSize, setLinkSize] = useState({ width: 0, height: 0 });
    const cardRef = useRef(null);
    const textRef = useRef(null);
    const linkRef = useRef(null);

    useLayoutEffect(() => {
        if (cardRef.current) {
            const { width, height } = cardRef.current.getBoundingClientRect();
            setCardSize({ width, height });
        }

        if (linkRef.current) {
            const { width, height } = linkRef.current.getBoundingClientRect();
            setLinkSize({ width, height });
        }
    }, []);

    useGSAP(() => {
        if (linkRef.current && cardRef.current) {
            gsap.to([linkRef.current], {
                scale: hovered ? 1.2 : 1,
                right: hovered ? 8 : -2,
                bottom: hovered ? 8 : -2,
                duration: 0.4,

            });
            gsap.to([cardRef.current], {
                height: hovered ? cardSize.height * 1.18 : cardSize.height,
                duration: .4,
                ease: 'back.out(.3)',
            });
            gsap.to([textRef.current], {
                y: hovered ? 0 : 140,
                opacity: hovered ? 1 : 0,
                duration: 0.4,
            });
        }
    }, { dependencies: [hovered, cardSize, linkSize] });

    return (
        <div
            ref={cardRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="_fm-service-card d-flex flex-column justify-content-between gap-2"
        >
            <img className="service-card-image" src={image} alt="" />
            <div className="overlay"></div>
            <div className="service-card-content">
                <h4 className="serviec-card-title">{title}</h4>
                <div className="overflow-hidden">
                    <p className="service-card-text" ref={textRef}>{text}</p>
                </div>
            </div>
            <button ref={linkRef} className="service-card-link d-flex align-items-center justify-content-center">
                <span className="service-arrow-icon" style={{ background: color }}>
                    <IoIosArrowRoundBack size={40} />
                </span>
                <span className="card-top-curve"></span>
                <span className="card-bottom-curve"></span>
            </button>
        </div>
    );
};

export default ServiceCard;
