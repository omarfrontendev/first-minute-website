import Image from '../../../assets/Frame.png';

import './fm-component.css';

const FMComponent = ({ title, subtitle, text }) => (
    <div className="_fm-component-box d-flex align-items-center justify-content-between">
        <div className='_fm-component-image'>
            <img src={Image} alt="..." />
        </div>
        <div className='_fm-component-content'>
            <span className='_fm-component-subtitle'>{subtitle}</span>
            <h4 className='_fm-component-title'>{title}</h4>
            <p className='_fm-component-text'>
                {text}
            </p>
        </div>
    </div>
);
export default FMComponent;