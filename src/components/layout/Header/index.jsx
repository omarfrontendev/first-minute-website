
import './header.css';
import LOGO from './logo.png';

const Header = () => {
    return (
        <nav className="_fm-nav d-flex align-items-center justify-content-between">
            <a className="d-flex aling-items-center justify-content-center" href="#">
                <img src={LOGO} className='_fm-logo' alt="" />
            </a>
            <div className="d-flex gap-4 align-items-center">
                <a href="#standards" className="_fm-link">معاييرنا</a>
                <a href="#services" className="_fm-link">خدماتنا</a>
                <a href="#fm-section" className="_fm-link">أول دقيقة</a>
                <a href="#contact-us" className="_fm-link _fm-link-main">تواصل معنا</a>
            </div>
        </nav>

    );
};

export default Header;