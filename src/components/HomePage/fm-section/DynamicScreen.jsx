import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const DynamicScreen = ({ imgIndex, lastScreen }) => {

    console.log(lastScreen);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".screen_card");

        ScrollTrigger.create({
            trigger: `#img-${imgIndex + 1}`,
            start: "top 10%",
            end: "bottom 50%",
            toggleActions: "restart none none none",
            // scroller: "#scroller",
            onEnterBack: () => {
                const targetCard = cards?.[cards.length - (imgIndex + 2)];
                if (!targetCard) return;

                !lastScreen && gsap.timeline()
                    .to(targetCard, {
                        y: "-125%",
                        duration: 0.5
                    })
                    .set(targetCard, {
                        zIndex: 1
                    })
                    .to(targetCard, {
                        y: "0",
                        duration: 0.5,
                    });
            }
        });


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#img-${imgIndex + 1}`,
                start: "top 90%",
                end: "bottom 80%",
                toggleActions: "restart",
            },
        });

        tl.to(cards[cards?.length - (imgIndex + 1)], {
            y: "-125%",
            duration: 0.5
        }).to(cards[cards?.length - (imgIndex + 1)], {
            zIndex: 0,
            duration: 0,
        }).to(cards[cards?.length - (imgIndex + 1)], {
            y: "0",
            duration: 0.5
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });

    return (
        <div id={`img-${imgIndex + 1}`} className="panel d-flex justify-content-center align-items-center">
            SCREEN {imgIndex + 3}
        </div>
    );
};

export default DynamicScreen