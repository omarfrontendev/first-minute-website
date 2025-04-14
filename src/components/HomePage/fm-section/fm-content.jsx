import Card from './Rectangle.png';
const FMContent = () => (
    <div className="_fm-title-screen d-flex align-items-center justify-content-center">
        <p className="_fm-text">
            موعد الانطلاق ولحظة البداية والحسم، التوثّب لصنع التغيير وتدوين القيمة، الانتقال من نقطة الصفر إلى توهّج البدايات واللحظات الأولى، الدخول في نطاق الوقت والعبور نحو مساحات الإبداع، والكفاءة، والتأثير.
        </p>
        <div className="_fm-cards">
            <img src={Card} alt="" style={{ transform: "translate(-50%, -50%)" }} />
            <img src={Card} alt="" style={{ transform: "translate(-50%, -40%)" }} />
            <img src={Card} alt="" style={{ transform: "translate(-50%, -30%)" }} />
            <img src={Card} alt="" style={{ transform: "translate(-50%, -20%)" }} />
            <img src={Card} alt="" style={{ transform: "translate(-50%, -10%)" }} />
        </div>
    </div>
);

export default FMContent;