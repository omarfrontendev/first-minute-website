
import './header.css';
import LOGO from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {

    const [showNav, setShowNav] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const controlNavbar = () => {
        if (document.body.getBoundingClientRect().top < -document.getElementById('header').getBoundingClientRect().height) {
            setScrollPosition(document.body.getBoundingClientRect().top);
            setShowNav(document.body.getBoundingClientRect().top > scrollPosition);
        } else {
            setShowNav(null);
        }
    };

    useEffect(() => {

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }

    }, [scrollPosition]);

    return (
        <nav id="header" className={`_fm-nav d-flex align-items-center justify-content-between  ${showNav === null ? '' : showNav ? 'show' : 'hide'}`}>
            <Link className="d-flex aling-items-center justify-content-center" to="/">
                <img src={LOGO} className='_fm-logo' alt="" />
            </Link>
            <div className="d-flex gap-4 align-items-center">
                <a href="#standards" className="_fm-link">معاييرنا</a>
                <a href="#services" className="_fm-link">خدماتنا</a>
                <Link to="/first-minute" className="_fm-link">أول دقيقة</Link>
                <a href="#contact-us" className="_fm-link _fm-link-main">تواصل معنا</a>
            </div>
        </nav>

    );
};

export default Header;