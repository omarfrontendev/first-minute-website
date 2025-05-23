import { useEffect, useRef, useState } from 'react';
import ServiceCard from './service-card';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import gsap from 'gsap';

import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './services.css';

const ServicesSection = ({ services }) => {

    const firstSlideRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const colors = [
        "#000000",
        "#D16166",
        "#94BABF",
        "#362E57",
        "#FAE87D",
    ];

    const servicesColored = services.map((service, index) => {
        const color = colors[index % colors.length];
        return { ...service, color };
    });

    const calculateSlidesPerView = () => {
        const rect = firstSlideRef.current?.getBoundingClientRect();

        if (!rect) return;


        const slideWidth = 332;
        const spaceBetween = 16;
        const sidebarWidth = window.innerWidth - rect.right;

        const availableWidth = window.innerWidth - sidebarWidth;
        const totalSlideWidth = slideWidth + spaceBetween;

        const count = availableWidth / totalSlideWidth;

        if (window.innerWidth > 1550) {
            setSlidesPerView(3.5);
        } else if (window.innerWidth >= 460) {
            setSlidesPerView(count > 0 ? count : 1);
        } else {
            setSlidesPerView(1);
        }
    };

    const handleSlideBtn = (btn) => {
        gsap.fromTo([`.${btn}`], {
            scale: .7
        }, {
            scale: 1
        })
    };

    useEffect(() => {
        calculateSlidesPerView();
        window.addEventListener("resize", calculateSlidesPerView);
        return () => window.removeEventListener("resize", calculateSlidesPerView);
    }, []);

    return (
        <section className='_fm-services-container'>
            <div className='d-flex _fm-services-content' id='services'>
                <div className='d-flex flex-row flex-sm-column align-items-center align-items-sm-end'>
                    <div className='overflow-hidden'>
                        <h2 className="_fm-section-title">خدماتنا</h2>
                    </div>
                    <div className='d-flex justify-content-end gap-3 px-3 px-sm-0'>
                        <button className='swiper_button_prev' onClick={() => handleSlideBtn("swiper_button_prev")}><FaArrowRightLong /></button>
                        <button className='swiper_button_next' onClick={() => handleSlideBtn("swiper_button_next")}><FaArrowLeftLong /></button>
                    </div>
                </div>
                <Swiper
                    className="mySwiper services-slider"
                    navigation={{
                        nextEl: ".swiper_button_next",
                        prevEl: ".swiper_button_prev"
                    }}
                    // 1550
                    spaceBetween={16}
                    slidesPerView={slidesPerView}
                    modules={[Navigation]}
                >
                    {servicesColored.map((service, i) => (
                        <SwiperSlide key={i} ref={i === 0 ? firstSlideRef : null}>
                            <ServiceCard
                                title={service?.service_name}
                                text={service?.description || ''}
                                image={service?.image}
                                color={service?.color}
                                id={service?.id}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
};

export default ServicesSection;
