import AboutUsImage from '../../../assets/about-us.png';

import './contact-us.css';

const ContactUs = () => (
    <section className='_fm-contact-us main_bg_color'>
        <div className='contact-us-form-box d-flex flex-column' id="contact-us">
            <h3 className='contact-us-title'>نحن دائمًا هنا لدعمك، يسعدنا تواصلك معنا.</h3>
            <form className='contact-us-form'>
                <div className='input-box'>
                    <label htmlFor="name">الاسم بالكامل</label>
                    <input type="text" id='name' placeholder='يا هلا، ممكن نعرف اسمك؟' />
                </div>
                <div className='d-flex align-items-center justify-content-center gap-3'>
                    <div className='input-box'>
                        <label htmlFor="phone-number">رقم الجوال</label>
                        <input type="number" id='phone-number' placeholder='500080009' />
                    </div>
                    <div className='input-box'>
                        <label htmlFor="email">البريد الإلكتروني</label>
                        <input type="email" id='email' placeholder='user@domain.com' />
                    </div>
                </div>
                <div className='input-box'>
                    <label htmlFor="message">رسالتك</label>
                    <textarea id='message' placeholder='اكتب رسالتك هنا  ^_^' />
                </div>
                <button type='submit' className='contact-us-submit-btn'>ارسل رسالتك</button>
            </form>
        </div>
        <div className='contact-us-left-boxes'>
            <div className='contact-us-box d-flex align-items-center gap-2 mb-3'>
                <img src={AboutUsImage} alt="" />
                <div>
                    <h5 className='contact-us-title mb-2'>من نحن؟</h5>
                    <p className='contact-us-text'>نحن منصّة إبداعية سعودية، تبتكر المحتوى وتجسّد حيوية البدايات.</p>
                </div>
            </div>
            <div className='contact-us-box d-flex align-items-center gap-2'>
                <img src={AboutUsImage} alt="" />
                <div>
                    <h5 className='contact-us-title mb-2'>من نحن؟</h5>
                    <p className='contact-us-text'>نحن منصّة إبداعية سعودية، تبتكر المحتوى وتجسّد حيوية البدايات.</p>
                </div>
            </div>
        </div>
    </section>
);

export default ContactUs;