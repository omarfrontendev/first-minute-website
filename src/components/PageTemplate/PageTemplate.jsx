import FMHero from "../../components/frist-minute/fm-hero";
import MainBgSectionImg from "../../components/layout/main-bg-section";
import { useEffect, useState } from "react";
import FMComponent from "../frist-minute/fm-component";
import ContactUs from "../HomePage/contact-us";
import { useLocation, useParams } from "react-router-dom";

const PageTemplate = ({ onGetData }) => {
    const [pageContent, setPageContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const { pathname } = useLocation();
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        (async () => {
            try {
                setLoading(true);
                const res = await onGetData(id);
                setPageContent(res?.payload);
                setLoading(false);
            } catch (err) {
                console.log(err)
                setLoading(false);
            }
            setLoading(false);
        })()
    }, [pathname]);

    return (
        <div className="_fm-temp-bg" style={{ minHeight: "100vh" }}>
            {!loading && <img className="BG-temp" src={pageContent?.background_image} alt="..." />}
            <MainBgSectionImg>
                <div className="_fm-container">
                    <FMHero name={pageContent?.page_name} description={pageContent?.description} title={pageContent?.title} loading={loading} />
                </div>
            </MainBgSectionImg>
            <div className="_fm-container" style={{ marginTop: "160px" }}>
                <div className="d-flex flex-column gap-5">
                    {pageContent?.sections?.map((section, i) => (
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