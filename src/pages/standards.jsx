import FMHero from "../components/frist-minute/fm-hero";
import ContactUs from "../components/HomePage/contact-us";
import FMComponent from "../components/frist-minute/fm-component";
import MainBgSectionImg from "../components/layout/main-bg-section";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchStandardsData } from "../redux/services/standards.services";
import { useLocation } from "react-router-dom";

const StandardsPage = () => {
    const dispatch = useDispatch();
    const { status, data: { background_image, page_name, description, title, sections } } = useSelector(state => state.standards);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
    
    useEffect(() => {
        dispatch(fetchStandardsData());
    }, []);

    if (status !== "succeeded") return <div style={{ minHeight: "100vh" }}></div>;

    return (
        <div className="_fm-temp-bg">
            <img className="BG-temp" src={background_image} alt="..." />
            <MainBgSectionImg>
                <div className="_fm-container">
                    <FMHero name={page_name} description={description} title={title} />
                </div>
            </MainBgSectionImg>
            <div className="_fm-container mt-5">
                <div className="d-flex flex-column gap-5">
                    {sections.map((section, i) => (
                        <FMComponent
                            key={i}
                            subtitle={section?.section_name}
                            title={section?.title}
                            text={section.content}
                            image={section?.images[0]}
                        />
                    ))}
                </div>
            </div>
            <ContactUs services={[]} />
        </div>
    );

}

export default StandardsPage;