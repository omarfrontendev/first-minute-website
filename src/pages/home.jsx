import ContactUs from "../components/HomePage/contact-us";
import HeroSection from "../components/HomePage/hero";
import ServicesSection from "../components/HomePage/services";
import Standards from "../components/HomePage/standards";
import MainBgSectionImg from "../components/layout/main-bg-section";
import Vector1 from '../assets/Vector-1.png';
import Vector2 from '../assets/Vector.png';
import StickySection from "../components/HomePage/fm-section/StickySection";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchHomeData } from "../redux/services/home.services";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

    return (
        <>
            <MainBgSectionImg>
                <div className="_fm-container">
                    <HeroSection />
                </div>
            </MainBgSectionImg>
            <div className="position-relative overflow-hidden">
                <div className='services-bg-image-1'>
                    <img src={Vector1} alt="" />
                </div>
                <div className='services-bg-image-2'>
                    <img src={Vector2} alt="" />
                </div>
                <ServicesSection />
                <div className="_fm-container">
                    <Standards />
                </div>
            </div>
            <StickySection />
            <ContactUs />
            {/* <div style={{ height: "100vh" }}></div> */}
        </>
    );
}

export default Home;