import ScrollDown from '../../common/ScrollDown';
import './hero.css'

const HeroSection = () => (
    <div className="_fm-hero-section d-flex align-items-center justify-content-center position-relative ">
        <h1 className="_fm-main-title">هنا، حيث تصبح البداية حكاية، والإبداع توقيعاً لكل لحظة.</h1>
        <div className='rectangular'></div>
        <ScrollDown />
    </div>
);

export default HeroSection;