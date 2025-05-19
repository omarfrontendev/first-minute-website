import MainBgSectionImg from "../components/layout/main-bg-section";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MainSection from "../components/main-section";
import MainHero from "../components/main-hero";

const PageTemplate = ({ onGetData }) => {
    const [pageContent, setPageContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const { pathname } = useLocation();
    const { id } = useParams();

    useEffect(() => {
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

    console.log(pageContent);
    useEffect(() => {
        document.title = pageContent?.page_name || pageContent?.title || "First minute - أول دقيقة";
    }, [pageContent]);

    return (
        <div className="_fm-temp-bg" style={{ minHeight: "100vh" }}>
            {!loading && pageContent?.background_image && <img className="BG-temp" src={pageContent?.background_image} alt="..." />}
            <MainBgSectionImg>
                <div className="_fm-container">
                    <MainHero name={pageContent?.page_name} description={pageContent?.description} title={pageContent?.title} loading={loading} />
                </div>
            </MainBgSectionImg>
            <div className="_fm-container" style={{ marginTop: "160px" }}>
                <div className="d-flex flex-column gap-5">
                    {pageContent?.sections?.map((section, i) => (
                        <MainSection
                            key={i}
                            subtitle={section?.section_name}
                            title={section?.title}
                            text={section.content}
                            image={section?.images[0]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

}

export default PageTemplate;