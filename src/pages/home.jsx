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
import LoadingScreen from "../components/LoadingScreen";
import MobileStickySection from "../components/HomePage/fm-section/MobileStickySection";
import FirstScreen from "../components/HomePage/fm-section/FirstScreen";
import SecondScreen from "../components/HomePage/fm-section/SecondScreen";
import ThirdScreen from "../components/HomePage/fm-section/ThirdScreen";
import DynamicScreen from "../components/HomePage/fm-section/DynamicScreen";

const Home = ({ progress }) => {

    const dispatch = useDispatch();
    const { status } = useSelector(state => state.home);
    const { status: sevicesStatus, data: services } = useSelector(state => state.services);
    const { status: standardsStatus, data: { our_standards: standards } } = useSelector(state => state.standards);
    const { data: { section_4 } } = useSelector(state => state.home);



    const stickyScreens = [
        { component: FirstScreen },
        { component: SecondScreen },
        { component: ThirdScreen },
        { component: ThirdScreen },
        { component: ThirdScreen },
        // ...section_4.images.slice(0, section_4.images.length - 1).map((_, i) => ({
        //     component: DynamicScreen,
        //     props: {
        //         imgIndex: i,
        //         lastScreen: section_4.images.length - i === 2,
        //     },
        // })),
    ];

    useEffect(() => {
        dispatch(fetchHomeData());
        dispatch(fetchServicesData());
        dispatch(fetchStandardsData());
    }, [dispatch]);

    return (
        <>
            <LoadingScreen progress={progress} />
            {[status, sevicesStatus, standardsStatus].every(s => s === "succeeded") && (
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
                    {/* {window.innerWidth <= 768 ? (
                        <MobileStickySection sections={stickyScreens} />
                        ) : (
                            <StickySection sections={stickyScreens} />
                            )} */}
                    <MobileStickySection sections={stickyScreens} />
                    {/* <StickySection sections={stickyScreens} /> */}
                    <ContactUs services={services} />
                </>
            )}
        </>
    )
}

export default Home;