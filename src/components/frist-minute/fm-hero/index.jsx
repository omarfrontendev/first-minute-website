import Skeleton from 'react-loading-skeleton';
import './fm-hero.css';

const FMHero = ({ name, description, title, loading }) => (
    <div className="_fm-hero-section d-flex align-items-center justify-content-center flex-column position-relative">
        <span className='_fm-main-subtitle'>{loading ? <Skeleton width={98} height={28} baseColor='#FFF' /> : name}</span>
        <h1 className="_fm-main-title mt-3 mb-2">{loading ? <Skeleton baseColor='#FFF' width={909} height={88} /> : title}</h1>
        <p className='_fm-main-desc text-truncate-2 fm-hero-desc text-center'>
            {loading ? <Skeleton baseColor='#FFF' width={676} height={28} count={2} /> : description}
        </p>
    </div>
);

export default FMHero;