import './main-section.css';

const MainSection = ({ title, subtitle, text, image }) => (
    <div className="_fm-component-box d-flex align-items-center justify-content-between gap-4">
        <div className='_fm-component-image'>
            <img src={image?.url} alt={image?.alt} className='-fm_component-image' />
        </div>
        <div className='_fm-component-content'>
            <span className='_fm-component-subtitle text-truncate-1'>{subtitle}</span>
            <h4 className='_fm-component-title text-truncate-2 _fm-section-title'>{title}</h4>

            <p className='_fm-component-text' dangerouslySetInnerHTML={{
                __html: text
            }} />
        </div>
    </div>
);
export default MainSection;