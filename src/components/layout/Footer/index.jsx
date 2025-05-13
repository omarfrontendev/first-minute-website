import '../Header/header.css';
import LOGO from '../../../assets/logo.svg';
import './footer.css';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const { data: dynamicPages } = useSelector(state => state.additionalPages);
    const { pathname } = useLocation();

    return (
        <>
            <div className="fm__footer_container _fm-container d-flex align-items-center justify-content-between mt-4">
                <a className="d-flex aling-items-center justify-content-center" href="#">
                    <img src={LOGO} className='_fm-logo' alt="" />
                </a>
                <div className="footer__links">
                    <Link to="/standards" className="_fm-link">معاييرنا</Link>
                    {pathname === "/" && <a href="#services" className="_fm-link">خدماتنا</a>}
                    <Link to="/first-minute" className="_fm-link">أول دقيقة</Link>
                    <a href="#contact-us" className="_fm-link">تواصل معنا</a>
                    {dynamicPages
                        .filter(page => page.show_in_footer)
                        .map(page => (
                            <Link key={page.id} to={`/${page.id}`} className="_fm-link">
                                {page.page_name}
                            </Link>
                        ))}
                </div>
            </div>
            <footer className='_fm-footer'>
                © 2025 جميع الحقوق محفوظة. صُنع بكل حب وشغف بواسطة الشوربجي.
            </footer>
        </>
    );
}

export default Footer;