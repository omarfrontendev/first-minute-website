import { useSelector } from 'react-redux';
import ScrollDown from '../../common/ScrollDown';

import './hero.css'

const HeroSection = () => {

    const { data: { section_1 } } = useSelector(state => state.home);

    return (
        <div className="_fm-hero-section d-flex align-items-center justify-content-center position-relative ">
            <div style={{ overflow: "hidden" }}>
                <h1 className="_fm-main-title"
                    id='hero-title'
                    style={{
                        fontKerning: "none"
                    }}
                >
                    {section_1?.split(" ")
                        .map((word, i) => (
                            <span key={i} className="word" style={{ display: "inline-block", overflow: "hidden" }}>
                                <span className="inner-word" id={`innwe-word-${i}`} style={{ display: "inline-block" }}>{word}&nbsp;</span>
                            </span>
                        ))}
                </h1>
            </div>
            <div className='rectangular'></div>
            <ScrollDown />
        </div>

    )
}

export default HeroSection;