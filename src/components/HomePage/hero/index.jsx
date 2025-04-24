import ScrollDown from '../../common/ScrollDown';
import './hero.css'

const HeroSection = () => {
    return (
        <div className="_fm-hero-section d-flex align-items-center justify-content-center position-relative ">
            <h1 className="_fm-main-title hero">
                {"هنا، حيث تصبح البداية حكاية، والإبداع توقيعاً لكل لحظة."
                    .split(" ")
                    .map((word, i) => (
                        <span key={i} className="word" style={{ display: "inline-block", overflow: "hidden" }}>
                            <span className="inner-word" style={{ display: "inline-block" }}>{word}&nbsp;</span>
                        </span>
                    ))}
            </h1>
            <div className='rectangular'></div>
            <ScrollDown />
        </div>

    )
}

export default HeroSection;