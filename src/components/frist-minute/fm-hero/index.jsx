import './fm-hero.css';

const FMHero = ({ name, description, title }) => (
    <div className="_fm-hero-section d-flex align-items-center justify-content-center flex-column position-relative">
        <span className='_fm-main-subtitle'>{name}</span>
        <h1 className="_fm-main-title mt-3 mb-2">{title}</h1>
        {/* <p className='_fm-main-desc'><span className='_special_bold'>"أول دقيقة"</span> هي لحظة الانطلاق، لحظة الحسم، لحظة كتابة القيمة والتأثير.</p> */}
        <p className='_fm-main-desc text-truncate-2 fm-hero-desc'>
            {description}
        </p>
    </div>
);

export default FMHero;