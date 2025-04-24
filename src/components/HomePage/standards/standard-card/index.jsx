import '../standards.css';
import Overlay from '../../../../assets/Rectangle_10.png'; 

const StandardCard = ({ text, title, icon, backgroundColor, cover }) => (
    <div className="standard-card d-flex flex-column justify-content-end" style={{ backgroundColor }}>
        <img className='standard-card-overlay' src={Overlay} alt="..." />
        <div className='standard-card-content'>
            <h4 className="standard-card-title">{title}</h4>
            <p className="standard-card-text">{text}</p>
        </div>
        <div className="standard-card-icon-box">
            <img className="standard-card-icon" src={icon} alt="" />
            <span className="card-top-right-curve"></span>
            <span className="card-bottom-left-curve"></span>
        </div>
    </div>
);

export default StandardCard;