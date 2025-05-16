import HeroSection from "../components/home-page/hero";
import ServicesSection from "../components/home-page/services";
import Standards from "../components/home-page/standards";
import MainBgSectionImg from "../components/layout/main-bg-section";
import Vector1 from '../assets/Vector-1.png';
import Vector2 from '../assets/Vector.png';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchHomeData } from "../redux/services/home.services";
import { fetchStandardsData } from "../redux/services/standards.services";
import LoadingScreen from "../components/LoadingScreen";
import StickySection from "../components/home-page/fm-section/StickySection";


const Home = () => {
    const [progress, setProgress] = useState(null);
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.home);
    const { status: servicesStatus, data: services } = useSelector(state => state.services);
    const { status: standardsStatus, data: { our_standards: standards } } = useSelector(state => state.standards);

    useEffect(() => {
        dispatch(fetchHomeData());
        dispatch(fetchStandardsData());
    }, [dispatch]);


    const onFinish = () => { };

    useEffect(() => {
        const images = document.images;
        const totalImages = images.length;
        let loadedImages = 0;

        const updateProgress = () => {
            loadedImages += 1;
            const newProgress = Math.floor((loadedImages / totalImages) * 100);
            setProgress(newProgress);

            if (newProgress === 100) {
                setTimeout(onFinish, 300);
            }
        };

        if (totalImages === 0) {
            setProgress(100);
            setTimeout(onFinish, 300);
            return;
        }

        for (let i = 0; i < totalImages; i++) {
            const img = images[i];
            if (img.complete) {
                updateProgress();
            } else {
                img?.addEventListener('load', updateProgress);
                img?.addEventListener('error', updateProgress);
            }
        }

        return () => {
            for (let i = 0; i < totalImages; i++) {
                const img = images[i];
                img?.removeEventListener('load', updateProgress);
                img?.removeEventListener('error', updateProgress);
            }
        };
    }, []);

    return (
        <>
            <LoadingScreen progress={progress} />
            {[status, servicesStatus, standardsStatus].every(s => s === "succeeded") && (
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
                </>
            )}
        </>
    )
}

export default Home;