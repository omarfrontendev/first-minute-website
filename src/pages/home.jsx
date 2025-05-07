import ContactUs from "../components/HomePage/contact-us";
import HeroSection from "../components/HomePage/hero";
import ServicesSection from "../components/HomePage/services";
import Standards from "../components/HomePage/standards";
import MainBgSectionImg from "../components/layout/main-bg-section";
import Vector1 from '../assets/Vector-1.png';
import Vector2 from '../assets/Vector.png';
import StickySection from "../components/HomePage/fm-section/StickySection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHomeData } from "../redux/services/home.services";
import { fetchServicesData } from "../redux/services/services.services";
import { fetchStandardsData } from "../redux/services/standards.services";

const Home = () => {

    const dispatch = useDispatch();
    const { status } = useSelector(state => state.home);
    const { status: sevicesStatus, data: services } = useSelector(state => state.services);
    const { status: standardsStatus, data: { our_standards: standards } } = useSelector(state => state.standards);

    useEffect(() => {
        dispatch(fetchHomeData());
        dispatch(fetchServicesData());
        dispatch(fetchStandardsData());
    }, [dispatch]);

    if ([status, sevicesStatus, standardsStatus].every(s => s === "succeeded")) return (
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
                <ServicesSection services={services} />
                <div className="_fm-container">
                    <Standards standards={standards} />
                </div>
            </div>
            <StickySection />
            <ContactUs />
        </>
    );
}

export default Home;