import './header.css';
import LOGO from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const Header = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const headerHeight = document.getElementById('header')?.offsetHeight || 0;

        if (currentScrollY > headerHeight) {
            setIsNavbarVisible(currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
        } else {
            setIsNavbarVisible(null);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            id="header"
            className={`
                _fm-nav 
                ${isMenuOpen ? 'menu-opened' : ''} 
                d-flex align-items-center justify-content-end justify-content-md-between 
                ${isNavbarVisible === null ? '' : isNavbarVisible ? 'show' : 'hide'}
            `}
        >
            <Link to="/" className="d-flex align-items-center justify-content-center">
                <img src={LOGO} alt="Logo" className="_fm-logo" />
            </Link>

            {isMenuOpen ? (
                <MdClose
                    onClick={() => setIsMenuOpen(false)}
                    size={20}
                    color="#D16166"
                    className="_fm-open-menu-btn"
                />
            ) : (
                <BiMenuAltRight
                    onClick={() => setIsMenuOpen(true)}
                    size={20}
                    color="#D16166"
                    className="_fm-open-menu-btn"
                />
            )}

            <div className="nav-links d-flex gap-4 align-items-start align-items-md-center">
                <a href="#standards" className="_fm-link">معاييرنا</a>
                <a href="#services" className="_fm-link">خدماتنا</a>
                <Link to="/first-minute" className="_fm-link">أول دقيقة</Link>
                <a href="#contact-us" className="_fm-link _fm-link-main">تواصل معنا</a>
            </div>
        </nav>
    );
};

export default Header;
