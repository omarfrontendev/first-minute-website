import ServiceCard from './service-card';
import Subtract from './Subtract.png';

import './services.css';

const ServicesSection = () => (
    <section className='_fm-services-container d-flex align-items-center'>
        <div className='d-flex gap-5'>
            <h2 className='_fm-section-title'>خدماتنا</h2>
            <div className='d-flex gap-4'>
                <ServiceCard title="كتابة المحتوى الإبداعي" text="إبراز الهوية الرقمية بأسلوب مبتكر يجمع بين تصميم بصري متقن، محتوى جذاب، وتجربة مستخدم سلسة، مدعومة بتحليل مستمر لضمان التأثير والتفاعل المستدام." image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSju1pUVVJ3ZwXSjVB4I_33eN3YNghWxoDcw&s" />
                <ServiceCard title="كتابة المحتوى الإبداعي" text="إبراز الهوية الرقمية بأسلوب مبتكر يجمع بين تصميم بصري متقن، محتوى جذاب، وتجربة مستخدم سلسة، مدعومة بتحليل مستمر لضمان التأثير والتفاعل المستدام." image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSju1pUVVJ3ZwXSjVB4I_33eN3YNghWxoDcw&s" />
                <ServiceCard title="كتابة المحتوى الإبداعي" text="إبراز الهوية الرقمية بأسلوب مبتكر يجمع بين تصميم بصري متقن، محتوى جذاب، وتجربة مستخدم سلسة، مدعومة بتحليل مستمر لضمان التأثير والتفاعل المستدام." image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSju1pUVVJ3ZwXSjVB4I_33eN3YNghWxoDcw&s" />
            </div>
        </div>
    </section>
);

export default ServicesSection;