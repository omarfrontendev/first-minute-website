import './layout.css';

const MainBgSectionImg = ({ children }) => (
    <>
        <div className='w-100 position-relative overflow-hidden'>
            <div className='_fm-overlay' />
            {children}
        </div>
    </>
);

export default MainBgSectionImg;