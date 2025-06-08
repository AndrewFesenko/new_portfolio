import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
    const cardRefs = useRef([]);

    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        card.style.setProperty("--start", angle + 60);
    };

    return (
        <div
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className="card card-border timeline-card rounded-xl overflow-hidden relative h-52 mb-5"
        >
            <div className="glow"></div>

            {/* Full background banner */}
            <img
                src={card.imgPath}
                alt="exp-img"
                className="absolute inset-0 w-full h-full object-contain"
            />

            {/* Tech icons with tooltip */}
            <div className="absolute bottom-3 right-3 flex gap-2 bg-black-100/80 backdrop-blur-sm rounded-md px-2 py-1 shadow-md z-10">
                {card.tools.map((tool, i) => (
                    <div key={i} className="relative group">
                        <img
                            src={tool.icon}
                            alt={tool.name}
                            className="w-6 h-6 object-contain"
                        />
                        <div className="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-200 z-20">
                            {tool.name}
                        </div>
                    </div>
                ))}
            </div>

            {/* You can still pass content below this component in Experience.jsx */}
            {children}
        </div>
    );
};

export default GlowCard;
