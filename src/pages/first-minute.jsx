import FMHero from "../components/frist-minute/fm-hero";
import BG from '../assets/BG-SVG.svg';
import Standards from "../components/HomePage/standards";
import ContactUs from "../components/HomePage/contact-us";
import FMComponent from "../components/frist-minute/fm-component";
import MainBgSectionImg from "../components/layout/main-bg-section";

const FirstMinute = () => (
    <div className="_fm-temp-bg">
        <img className="BG-temp" src={BG} alt="..." />
        <MainBgSectionImg>
            <div className="_fm-container">
                <FMHero />
            </div>
        </MainBgSectionImg>
        <div className="_fm-container">
            <Standards />
            <div className="d-flex flex-column gap-5">
                <FMComponent subtitle={"رؤيتنا"} text="نرى الحضور الحيوي بأسلوب مختلف، ونسعى لتقديم تصوّرات جديدة تُعيد تشكيل العلاقة بين الفكرة والتجربة." title="نفكّر، نكتب، ونُجسّد الفكرة لتتحول إلى تجربة نابضة بالحياة." />
                <FMComponent subtitle={"رؤيتنا"} text="نرى الحضور الحيوي بأسلوب مختلف، ونسعى لتقديم تصوّرات جديدة تُعيد تشكيل العلاقة بين الفكرة والتجربة." title="نطمح إلى تشكيل إضافة مُثرية، وممتعة في عالم المحتوى." />
                <FMComponent subtitle={"رؤيتنا"} text="نرى الحضور الحيوي بأسلوب مختلف، ونسعى لتقديم تصوّرات جديدة تُعيد تشكيل العلاقة بين الفكرة والتجربة." title="نطمح إلى تشكيل إضافة مُثرية، وممتعة في عالم المحتوى." />
            </div>
        </div>
        <ContactUs />
    </div>
);

export default FirstMinute;