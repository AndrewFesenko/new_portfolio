import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const PhotoCarousel = ({ images }) => {
    const [index, setIndex] = useState(0);
    const current = images[index];

    const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

    const handlers = useSwipeable({
        onSwipedLeft: next,
        onSwipedRight: prev,
        preventScrollOnSwipe: true,
        trackTouch: true,
        trackMouse: true
    });

    return (
        <div className="flex flex-col items-center">
            <div
                {...handlers}
                className="w-full max-h-[450px] rounded-lg overflow-hidden flex justify-center items-center bg-white-10 touch-pan-y"
            >
                <img
                    src={current.src}
                    alt={`Photo ${index + 1}`}
                    className="max-h-[450px] w-auto object-contain"
                />
            </div>
            <p className="text-white-50 text-base mt-4 text-center">{current.caption}</p>
            <div className="flex gap-6 mt-4">
                <button onClick={prev} className="text-white text-2xl hover:scale-110">‹</button>
                <button onClick={next} className="text-white text-2xl hover:scale-110">›</button>
            </div>
        </div>
    );
};

export default PhotoCarousel;
