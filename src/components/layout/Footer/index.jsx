import '../Header/header.css';
import LOGO from './logo.png';

const Footer = () => (
    <>
        <div className="_fm-container d-flex align-items-center justify-content-between mt-4">
            <a className="d-flex aling-items-center justify-content-center" href="#">
                <img src={LOGO} className='_fm-logo' alt="" />
            </a>
            <div className="d-flex gap-4 align-items-center">
                <a href="#standards" className="_fm-link">معاييرنا</a>
                <a href="#services" className="_fm-link">خدماتنا</a>
                <a href="#fm-section" className="_fm-link">أول دقيقة</a>
                <a href="#contact-us" className="_fm-link">تواصل معنا</a>
            </div>
        </div>
        <footer className='_fm-footer'>
        © 2025 جميع الحقوق محفوظة. صُنع بكل حب وشغف بواسطة الشوربجي.
        </footer>
    </>
);

export default Footer;