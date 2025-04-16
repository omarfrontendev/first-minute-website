import './scroll-down.css';

const ScrollDown = ({ arrowColor }) => (
    <div className={`scroll-down ${arrowColor ? "dark" : ""}`} style={{ color: arrowColor }}>
        مرر للأسفل
    </div>
);

export default ScrollDown;