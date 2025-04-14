import StandardCard from "./standard-card";
import TimeIcon from './01.svg';

const Standards = () => (
    <section className='_fm-standards-container d-flex flex-column align-items-center justify-content-center'>
        <h2 className='_fm-section-title mb-4'>معــــــــاييـــرنــــــــــــــــــــــــــــــــــــــــــا</h2>
        <div className='d-flex gap-4'>
            <StandardCard
                title="الوقت"
                text="عامل الوقت مهم في تجربتنا، ومؤثر في صناعتنا الإبداعية. نستغل التوقيت لنبتكر الدهشة ومعالمها الفاتنة."
                icon={TimeIcon}
                backgroundColor="#000"
            />
            <StandardCard
                title="الوقت"
                text="عامل الوقت مهم في تجربتنا، ومؤثر في صناعتنا الإبداعية. نستغل التوقيت لنبتكر الدهشة ومعالمها الفاتنة."
                icon={TimeIcon}
                backgroundColor="#362E57"
            />
            <StandardCard
                title="الوقت"
                text="عامل الوقت مهم في تجربتنا، ومؤثر في صناعتنا الإبداعية. نستغل التوقيت لنبتكر الدهشة ومعالمها الفاتنة."
                icon={TimeIcon}
                backgroundColor="#D16166"
            />
        </div>
    </section>
);

export default Standards;