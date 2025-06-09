'use client'

import {useState, useEffect, useRef} from "react";

const navLinks = [
    { link: "#about", name: "About" },
    { link: "#projects", name: "Projects" },
    { link: "#experience", name: "Experience" },
    // { link: "#testimonials", name: "Testimonials" },
];

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const clickedRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // const handleHover = () => {
    //     if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
    //         // const x = Math.floor(Math.random() * 300 - 100); // -100 to +100
    //         // const y = Math.floor(Math.random() * 100 - 100);  // -50 to +50
    //
    //         // const x = Math.floor(Math.random() * 600 - 300); // Farther left/right
    //         // const y = Math.floor(Math.random() * 300 - 150); // Farther up/down
    //
    //         const x = Math.floor(Math.random() * 100 - 250); // only move left (0 to -200)
    //         const y = Math.floor(Math.random() * 200 + 20); // move down 20–120px
    //
    //         setOffset({ x, y });
    //     }
    // };

    const handleHover = () => {
        if (
            typeof window !== 'undefined' &&
            window.innerWidth >= 1024 &&
            !clickedRef.current
        ) {
            const minX = -250;
            const maxX = -100;
            const minY = 50;
            const maxY = 250;

            // Ensures a definite move within defined ranges
            const x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            const y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

            setOffset({ x, y });
        }
    };

    const handleClick = () => {
        clickedRef.current = true;
        requestAnimationFrame(() => {
            setOffset({ x: 0, y: 0 });
        });
    };

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a href="#hero" className="logo">
                    Andrew Fesenko
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a
                    href="#contact"
                    onMouseEnter={handleHover}
                    onClick={handleClick}
                    className="contact-btn group"
                    style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                        transition: "transform 0.1s ease-in-out",
                    }}
                >
                <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default NavBar;
