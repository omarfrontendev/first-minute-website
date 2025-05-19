import '../Header/header.css';
import LOGO from '../../../assets/logo.svg';
import './footer.css';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from 'gsap';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Footer = () => {
    const { data: dynamicPages, status } = useSelector(state => state.additionalPages);
    const { pathname } = useLocation();

    const handleScrollToContact = (e) => {
        e.preventDefault();

        ScrollTrigger.getAll().forEach(trigger => trigger.disable());

        const el = document.querySelector("#services");
        el?.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
            ScrollTrigger.getAll().forEach(trigger => trigger.enable());
        }, 1200);
    };


    return (
        <>
            <div className="fm__footer_container _fm-container d-flex align-items-center justify-content-between mt-4">
                <a className="d-flex aling-items-center justify-content-center" href="#">
                    <img src={LOGO} className='_fm-logo' alt="" />
                </a>
                <div className="footer__links">
                    <Link to="/standards" className="_fm-link">معاييرنا</Link>
                    {pathname === "/" && <a href="#services" onClick={handleScrollToContact} className="_fm-link">خدماتنا</a>}
                    <Link to="/first-minute" className="_fm-link">أول دقيقة</Link>
                    <a href="#contact-us" className="_fm-link">تواصل معنا</a>
                    {status === "succeeded" && dynamicPages
                        ?.filter(page => page.show_in_footer)
                        ?.map(page => (
                            <Link key={page.id} to={`/${page.id}`} className="_fm-link">
                                {page.page_name}
                            </Link>
                        ))}
                </div>
            </div>
            <footer className='_fm-footer'>
                © 2025 جميع الحقوق محفوظة. صُنع بكل حب وشغف بواسطة ❤️ <a className='footer__link' target='_blank' href="https://wa.me/201080835034?text=مرحبًا،">
                    الشوربجي</a>.
            </footer>
        </>
    );
}

export default Footer;