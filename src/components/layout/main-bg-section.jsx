import './layout.css';

const MainBgSectionImg = ({ children }) => (
    <>
        <div className='_fm-container'>
            <div className='_fm-overlay' />
            {children}
        </div>
    </>
);

export default MainBgSectionImg;