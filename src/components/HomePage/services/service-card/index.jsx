import { IoIosArrowRoundBack } from "react-icons/io";

const ServiceCard = ({ title, text, image }) => (
    <div className="_fm-service-card d-flex flex-column justify-content-between gap-2">
        <img className="service-card-image" src={image} alt="" />
        <div className="overlay"></div>
        <div className="service-card-content">
            <h4 className="serviec-card-title">{title}</h4>
            <p className="serice-card-text">{text}</p>
        </div>
        <button className="service-card-link d-flex align-items-center justify-content-center">
            <span className="service-arrow-icon">
                <IoIosArrowRoundBack size={40} />
            </span>
                <span className="card-top-curve"></span>
                <span className="card-bottom-curve"></span>
        </button>
    </div>
);

export default ServiceCard;