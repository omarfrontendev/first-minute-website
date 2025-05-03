import './layout.css';

const MainBgSectionImg = ({ children, type }) => (
    <>
        <div className='position-relative overflow-hidden'>
            <div className='_fm-overlay' style={{ backgroundAttachment: type }} />
            {children}
        </div>
    </>
);

export default MainBgSectionImg;