
import './header.css';
import LOGO from './logo.png';

const Header = () => {
    return (
        <nav className="_fm-nav _fm-container d-flex align-items-center justify-content-between">
            <a className="d-flex aling-items-center justify-content-center" href="#">
                <img src={LOGO} className='_fm-logo' alt="" />
            </a>
            <div className="d-flex gap-4 align-items-center">
                <a href="#" className="_fm-link">خدماتنا</a>
                <a href="#" className="_fm-link">معاييرنا</a>
                <a href="#" className="_fm-link">أول دقيقة</a>
                <a href="#" className="_fm-link _fm-link-main">تواصل معنا</a>
            </div>
        </nav>

    );
};

export default Header;