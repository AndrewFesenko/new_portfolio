import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialImgs } from "../constants";

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        if (!footerRef.current) return;

        gsap.fromTo(
            footerRef.current,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                },
            }
        );
    }, []);

    return (
        <footer ref={footerRef} className="footer icy-footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center md:items-start items-center" />
                <div className="socials icy-icons">
                    {socialImgs.map((img, index) => (
                        <a className="icon" target="_blank" href={img.url} key={img.url} rel="noopener noreferrer">
                            <img src={img.imgPath} />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end text-white-50">
                        {/*© {new Date().getFullYear()} Andrew Fesenko. All rights reserved.*/}
                    </p>
                </div>
            </div>
            <div className="footer-divider w-full max-w-screen-xl" />
        </footer>
    );
};

export default Footer;