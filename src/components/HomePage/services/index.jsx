import { useEffect, useRef, useState } from 'react';
import ServiceCard from './service-card';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './services.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const services = [
    {
        title: "كتابة المحتوى الإبداعي",
        text: "إبراز الهوية الرقمية بأسلوب مبتكر يجمع بين تصميم بصري متقن، محتوى جذاب، وتجربة مستخدم سلسة، مدعومة بتحليل مستمر لضمان التأثير والتفاعل المستدام",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSju1pUVVJ3ZwXSjVB4I_33eN3YNghWxoDcw&s"
    },
    {
        title: "كتابة المحتوى الإبداعي",
        text: "إبراز الهوية الرقمية بأسلوب مبتكر يجمع بين تصميم بصري متقن، محتوى جذاب، وتجربة مستخدم سلسة، مدعومة بتحليل مستمر لضمان التأثير والتفاعل المستدام",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSju1pUVVJ3ZwXSjVB4I_33eN3YNghWxoDcw&s"

    },
    {
        title: "كتابة المحتوى الإبداعي",
        text: "إبراز الهوية الرقمية بأسلوب مبتكر يجمع بين تصميم بصري متقن، محتوى جذاب، وتجربة مستخدم سلسة، مدعومة بتحليل مستمر لضمان التأثير والتفاعل المستدام",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSju1pUVVJ3ZwXSjVB4I_33eN3YNghWxoDcw&s"

    },
    {
        title: "كتابة المحتوى الإبداعي",
        text: "إبراز الهوية الرقمية بأسلوب مبتكر يجمع بين تصميم بصري متقن، محتوى جذاب، وتجربة مستخدم سلسة، مدعومة بتحليل مستمر لضمان التأثير والتفاعل المستدام",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSju1pUVVJ3ZwXSjVB4I_33eN3YNghWxoDcw&s"

    },
    {
        title: "كتابة المحتوى الإبداعي",
        text: "إبراز الهوية الرقمية بأسلوب مبتكر يجمع بين تصميم بصري متقن، محتوى جذاب، وتجربة مستخدم سلسة، مدعومة بتحليل مستمر لضمان التأثير والتفاعل المستدام",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSju1pUVVJ3ZwXSjVB4I_33eN3YNghWxoDcw&s"

    },
    {
        title: "كتابة المحتوى الإبداعي",
        text: "إبراز الهوية الرقمية بأسلوب مبتكر يجمع بين تصميم بصري متقن، محتوى جذاب، وتجربة مستخدم سلسة، مدعومة بتحليل مستمر لضمان التأثير والتفاعل المستدام",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSju1pUVVJ3ZwXSjVB4I_33eN3YNghWxoDcw&s"

    },
    {
        title: "كتابة المحتوى الإبداعي",
        text: "إبراز الهوية الرقمية بأسلوب مبتكر يجمع بين تصميم بصري متقن، محتوى جذاب، وتجربة مستخدم سلسة، مدعومة بتحليل مستمر لضمان التأثير والتفاعل المستدام",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSju1pUVVJ3ZwXSjVB4I_33eN3YNghWxoDcw&s"

    },
    {
        title: "كتابة المحتوى الإبداعي",
        text: "إبراز الهوية الرقمية بأسلوب مبتكر يجمع بين تصميم بصري متقن، محتوى جذاب، وتجربة مستخدم سلسة، مدعومة بتحليل مستمر لضمان التأثير والتفاعل المستدام",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSju1pUVVJ3ZwXSjVB4I_33eN3YNghWxoDcw&s"

    },
];

const ServicesSection = () => {

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
    })

    const calculateSlidesPerView = () => {
        const rect = firstSlideRef.current?.getBoundingClientRect();

        if (!rect) return;


        const slideWidth = 348;
        const spaceBetween = 0;
        const sidebarWidth = window.innerWidth - rect.right;

        const availableWidth = window.innerWidth - sidebarWidth - 32;
        const totalSlideWidth = slideWidth + spaceBetween;

        const count = availableWidth / totalSlideWidth;


        if (window.innerWidth >= 460) {
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
        <section className='_fm-services-container' id='services'>
            <div className='d-flex _fm-services-content'>
                <div>
                    <h2 className="_fm-section-title">خدماتنا</h2>
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
                    spaceBetween={16}
                    slidesPerView={slidesPerView}
                    modules={[Navigation]}
                >
                    {servicesColored.map((service, i) => (
                        <SwiperSlide key={i} ref={i === 0 ? firstSlideRef : null}>
                            <ServiceCard
                                title={service?.title}
                                text={service?.text}
                                image={service?.image}
                                color={service?.color}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
};

export default ServicesSection;
