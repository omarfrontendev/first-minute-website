import FMHero from "../../components/frist-minute/fm-hero";
import MainBgSectionImg from "../../components/layout/main-bg-section";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdditionalPageContent } from "../../redux/services/additionalPages.services";
import FMComponent from "../frist-minute/fm-component";
import ContactUs from "../HomePage/contact-us";
import { useLocation } from "react-router-dom";

const PageTemplate = ({ id }) => {
    const dispatch = useDispatch();
    const { contentstatus, content: { background_image, page_name, description, title, sections } } = useSelector(state => state.additionalPages);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    useEffect(() => {
        id && dispatch(fetchAdditionalPageContent(id));
    }, [id]);

    if (contentstatus !== "succeeded") return <div style={{ minHeight: "100vh" }}></div>;

    return (
        <div className="_fm-temp-bg" style={{ minHeight: "100vh" }}>
            <img className="BG-temp" src={background_image} alt="..." />
            <MainBgSectionImg>
                <div className="_fm-container">
                    <FMHero name={page_name} description={description} title={title} />
                </div>
            </MainBgSectionImg>
            <div className="_fm-container mt-5">
                <div className="d-flex flex-column gap-5">
                    {sections?.map((section, i) => (
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
            <ContactUs />
        </div>
    );

}

export default PageTemplate;