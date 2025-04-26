import ScrollDown from '../../common/ScrollDown';

import './hero.css'

const HeroSection = () => {
    const text = "هنا، حيث تصبح البداية حكاية، والإبداع توقيعاً لكل لحظة"

    return (
        <div className="_fm-hero-section d-flex align-items-center justify-content-center position-relative ">
            <div style={{ overflow: "hidden" }}>
                <h1 className="_fm-main-title"
                    id='hero-title'
                    style={{
                        fontKerning: "none"
                    }}
                >
                    {text.split(" ")
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