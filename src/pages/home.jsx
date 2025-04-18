import ContactUs from "../components/HomePage/contact-us";
import FMSection from "../components/HomePage/fm-section";
import FMContent from "../components/HomePage/fm-section/fm-content";
import HeroSection from "../components/HomePage/hero";
import ServicesSection from "../components/HomePage/services";
import Standards from "../components/HomePage/standards";
import MainBgSectionImg from "../components/layout/main-bg-section";
import Vector1 from '../assets/Vector-1.png'
import Vector2 from '../assets/Vector.png'

const Home = () => (
    <>
        <MainBgSectionImg>
            <HeroSection />
        </MainBgSectionImg>
        <div className='_fm-container main_bg_color'>
            <div className='services-bg-image'>
                <img src={Vector2} alt="" />
                <img src={Vector1} alt="" />
            </div>
            <ServicesSection />
            <Standards />
        </div>
        <MainBgSectionImg>
            <FMSection />
            <FMContent />
        </MainBgSectionImg>
        <ContactUs />
    </>
);

export default Home;