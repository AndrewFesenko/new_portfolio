import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader.jsx";
import { aboutMeTopics } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef(null);
    const glowRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useGSAP(() => {
        gsap.fromTo(
            aboutRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    const handleMouseMove = (e) => {
        const card = glowRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;
        card.style.setProperty("--start", angle + 60);
    };

    const current = aboutMeTopics[activeIndex];

    return (
        <section ref={aboutRef} id="about" className="c-space my-20 section-padding">
            <div className="w-full text-center mb-16">
                <TitleHeader title="About Me" sub="🛠️ A Little About Me" />
            </div>

            <div className="flex justify-center md:flex-row flex-col gap-10">
                <div className="w-full md:w-[48%] lg:w-[45%] px-3 md:px-5">
                    <div
                        ref={glowRef}
                        onMouseMove={handleMouseMove}
                        className="card card-border glass-card rounded-xl p-6 relative overflow-hidden h-full"
                    >
                        <div className="glow absolute inset-0 z-0 pointer-events-none" />
                        <div className="relative z-10 flex flex-col gap-5">
                            <div className="flex gap-2 flex-wrap">
                                {aboutMeTopics.map((topic, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`text-sm px-3 py-1 rounded border transition-colors duration-300 ${
                                            activeIndex === index
                                                ? "bg-white-10 text-white border-white-30"
                                                : "text-white-50 border-white-20 hover:text-white"
                                        }`}
                                    >
                                        {topic.title}
                                    </button>
                                ))}
                            </div>

                            <h3 className="text-white text-2xl font-semibold mt-2">
                                {current.subtitle}
                            </h3>
                            <p className="text-white-50 text-lg leading-relaxed break-words whitespace-pre-wrap">
                                {current.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
