import StandardCard from "./standard-card";
import TimeIcon from '../../../assets/01.svg';

const Standards = () => {
    const standards = [
        {
            title: "الوقت",
            text: "عامل الوقت مهم في تجربتنا، ومؤثر في صناعتنا الإبداعية. نستغل التوقيت لنبتكر الدهشة ومعالمها الفاتنة.",
            icon: TimeIcon,
            bgColor: "#000"
        },
        {
            title: "الوقت",
            text: "عامل الوقت مهم في تجربتنا، ومؤثر في صناعتنا الإبداعية. نستغل التوقيت لنبتكر الدهشة ومعالمها الفاتنة.",
            icon: TimeIcon,
            bgColor: "#362E57"
        },
        {
            title: "الوقت",
            text: "عامل الوقت مهم في تجربتنا، ومؤثر في صناعتنا الإبداعية. نستغل التوقيت لنبتكر الدهشة ومعالمها الفاتنة.",
            icon: TimeIcon,
            bgColor: "#D16166"
        },
    ]
    return (
        <section className='_fm-standards-container d-flex flex-column align-items-center justify-content-center' id='standards'>
            <h2 className='_fm-section-title mb-4'>معــــــــاييـــرنــــــــــــــــــــــــــــــــــــــــــا</h2>
            <div className='d-flex gap-4'>
                {standards.map((standard, i) => (
                    <StandardCard
                        key={i}
                        title={standard?.title}
                        text={standard?.text}
                        icon={standard?.icon}
                        backgroundColor={standard?.bgColor}
                    />
                ))}
            </div>
        </section>

    );
};

export default Standards;