import StandardCard from "./standard-card";
import TimeIcon from '../../../assets/01.svg';
import ExpandedWord from "./ExpandedWord";

const Standards = () => {
    const standards = [
        {
            title: "الوقت",
            text: "عامل الوقت مهم في تجربتنا، ومؤثر في صناعتنا الإبداعية. نستغل التوقيت لنبتكر الدهشة ومعالمها الفاتنة.",
            icon: TimeIcon,
            bgColor: "#000",
        },
        {
            title: "الوقت",
            text: "عامل الوقت مهم في تجربتنا، ومؤثر في صناعتنا الإبداعية. نستغل التوقيت لنبتكر الدهشة ومعالمها الفاتنة.",
            icon: TimeIcon,
            bgColor: "#362E57",
        },
        {
            title: "الوقت",
            text: "عامل الوقت مهم في تجربتنا، ومؤثر في صناعتنا الإبداعية. نستغل التوقيت لنبتكر الدهشة ومعالمها الفاتنة.",
            icon: TimeIcon,
            bgColor: "#D16166",
        },
    ]
    return (
        <section className='_fm-standards-container' id='standards'>
            <ExpandedWord baseText="معــــــــاييـــرنا" filler="ـ" />
            <div className='d-flex gap-4'>
                {standards.map((standard, i) => (
                    <StandardCard
                        key={i}
                        title={standard?.title}
                        text={standard?.text}
                        icon={standard?.icon}
                        backgroundColor={standard?.bgColor}
                        cover={standard?.cover}
                    />
                ))}
            </div>
        </section>

    );
};

export default Standards;