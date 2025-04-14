import './layout.css';

const MainBgSectionImg = ({ children }) => (
    <>
        <div className='_fm-container'>
            <div className='_fm-overlay' />
            {/* <div className='_fm-bg-main-image'></div> */}
            {children}
        </div>
    </>
);

export default MainBgSectionImg;