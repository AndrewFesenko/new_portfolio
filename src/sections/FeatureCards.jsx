import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { abilities } from "../constants/index.js";
import TitleHeader from "../components/TitleHeader.jsx";

gsap.registerPlugin(ScrollTrigger);

const FeatureCards = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardGridRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }

        if (cardGridRef.current) {
            gsap.fromTo(
                cardGridRef.current,
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardGridRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <section id="how-i-work" ref={sectionRef} className="my-20">
            <div ref={titleRef} className="w-full text-center mb-16">
                <TitleHeader title="How I Work" sub="🧠 A Few Things That Guide Me" />
            </div>

            <div ref={cardGridRef} className="w-full padding-x-lg">
                <div className="mx-auto grid-3-cols">
                    {abilities.map(({ imgPath, title, desc }) => (
                        <div
                            key={title}
                            className="card-border rounded-xl p-8 flex flex-col gap-4 transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <div className="size-14 flex items-center justify-center rounded-full">
                                <img src={imgPath} alt={title} />
                            </div>
                            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                            <p className="text-white-50 text-lg">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureCards;
