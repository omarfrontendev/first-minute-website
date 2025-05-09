import FMHero from "../components/frist-minute/fm-hero";
import BG from '../assets/BG-SVG.svg';
import ContactUs from "../components/HomePage/contact-us";
import FMComponent from "../components/frist-minute/fm-component";
import MainBgSectionImg from "../components/layout/main-bg-section";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOneMinPageData } from "../redux/services/oneMinPage.services";

const FirstMinute = () => {
    const dispatch = useDispatch();
    const { status, data: { background_image, slug, description, title, sections } } = useSelector(state => state.oneMinPage);


    useEffect(() => {
        dispatch(fetchOneMinPageData());
    }, []);

    if (status !== "succeeded") return;

    return (
        <div className="_fm-temp-bg">
            <img className="BG-temp" src={background_image} alt="..." />
            <MainBgSectionImg>
                <div className="_fm-container">
                    <FMHero slug={slug} description={description} title={title} />
                </div>
            </MainBgSectionImg>
            <div className="_fm-container mt-5">
                <div className="d-flex flex-column gap-5">
                    {sections.map((section, i) => (
                        <FMComponent
                            key={i}
                            subtitle={"رؤيتنا"}
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

export default FirstMinute;