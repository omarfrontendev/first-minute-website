import LOGO from '../../../assets/logo.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { MdArrowDropDown } from "react-icons/md";
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { fetchServicesData } from '../../../redux/services/services.services';
import { fetchAdditionalPages } from '../../../redux/services/additionalPages.services';

import './header.css';

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMenu, setShwoMenu] = useState(false);
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const menuRef = useRef(null);
    const { data: dynamicPages, status } = useSelector(state => state.additionalPages);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const headerHeight = document.getElementById('header')?.offsetHeight || 0;
        if (currentScrollY > headerHeight && !isMenuOpen) {
            setIsNavbarVisible(currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
        } else {
            setIsNavbarVisible(null);
        }
    };

    const handleSlideBtn = (btn) => {
        gsap.fromTo([`.${btn}`], {
            scale: .7
        }, {
            scale: 1
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isMenuOpen]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShwoMenu(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        dispatch(fetchServicesData());
        dispatch(fetchAdditionalPages());
    }, []);

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
                    size={25}
                    color="#D16166"
                    className="_fm-open-menu-btn"
                />
            ) : (
                <BiMenuAltRight
                    onClick={() => setIsMenuOpen(true)}
                    size={25}
                    color="#D16166"
                    className="_fm-open-menu-btn"
                />
            )}

            <div className="nav-links d-flex gap-4 align-items-start align-items-md-center">
                <NavLink
                    to="/standards"
                    className={({ isActive }) => isActive ? "_fm-link active link-nav" : "_fm-link link-nav"}
                >
                    معاييرنا
                </NavLink>
                {pathname === '/' && <a
                    href="#services"
                    className="_fm-link link-nav"
                >
                    خدماتنا
                </a>}
                <NavLink to="/first-minute" className="_fm-link link-nav">أول دقيقة</NavLink>
                <div ref={menuRef} className='position-relative'>
                    <button onClick={() => setShwoMenu(prev => !prev)} className='dropdown-menu-btn link-nav'>الصفحات الاضافية <MdArrowDropDown style={{ transform: `rotateZ(${showMenu ? "180" : "0"}deg)`, transition: ".3s ease-in-out" }} /></button>
                    {showMenu && (
                        <div className='dropdown-menu__'>
                            {status === "succeeded" && dynamicPages
                                .filter(page => page.show_in_main_nav)
                                .map(page => (
                                    <NavLink
                                        key={page.id}
                                        to={`/${page.id}`}
                                        className={({ isActive }) => isActive ? "_fm-link active" : "_fm-link"}
                                    >
                                        {page.page_name}
                                    </NavLink>
                                ))}
                        </div>
                    )}
                </div>
                <a
                    href="#contact-us"
                    className="_fm-link _fm-link-main link-nav"
                    onClick={() => {
                        handleSlideBtn("_fm-link._fm-link-main");
                    }}
                >
                    تواصل معنا
                </a>
            </div>
        </nav>
    );
};

export default Header;
