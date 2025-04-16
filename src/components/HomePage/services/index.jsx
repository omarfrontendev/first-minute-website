import ServiceCard from './service-card';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './services.css';

const ServicesSection = () => {

    const service = {
        title: "كتابة المحتوى الإبداعي",
        text: "إبراز الهوية الرقمية بأسلوب مبتكر يجمع بين تصميم بصري متقن، محتوى جذاب، وتجربة مستخدم سلسة، مدعومة بتحليل مستمر لضمان التأثير والتفاعل المستدام",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSju1pUVVJ3ZwXSjVB4I_33eN3YNghWxoDcw&s"
    }

    return (
        <section className='_fm-services-container' id='services'>
            <div className='d-flex gap-5'>
                <div>
                    <h2 className="_fm-section-title">خدماتنا</h2>
                    <div className='d-flex justify-content-end gap-3'>
                        <button className='swiper_button_prev'><FaArrowRightLong /></button>
                        <button className='swiper_button_next'><FaArrowLeftLong /></button>
                    </div>
                </div>
                <Swiper
                    className="mySwiper services-slider"
                    navigation={{
                        nextEl: ".swiper_button_next",
                        prevEl: ".swiper_button_prev"
                    }}
                    spaceBetween={16}
                    slidesPerView={3.35}
                    modules={[Navigation]}
                >
                    {/* <SliderNavigation /> */}
                    {Array(10).fill(service).map((service, i) => (
                        <SwiperSlide key={i}>
                            <ServiceCard
                                title={service?.title}
                                text={service?.text}
                                image={service?.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
};

export default ServicesSection;
