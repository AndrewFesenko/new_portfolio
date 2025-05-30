import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import {Suspense, useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';
import TitleHeader from "../components/TitleHeader.jsx";

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
    }, [selectedProjectIndex]);

    const currentProject = myProjects[selectedProjectIndex];

    const sectionRef = useRef(null);
    const descRef = useRef(null);
    const projectRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);


    return (
        <section id="projects" ref={sectionRef} className="c-space my-20 min-h-screen flex flex-col items-center">
            <TitleHeader title="Projects" sub="🛠️ My Projects" />

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">

                {/* Card with spotlight as background */}
                <div ref={descRef} className="card-border relative p-10 shadow-2xl shadow-black-200 rounded-2xl bg-[#10131a] overflow-hidden flex flex-col justify-between max-w-3xl mx-auto min-h-[28rem]">
                    {/* Spotlight as background */}
                    <img
                        src={currentProject.spotlight}
                        alt="spotlight"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none rounded-2xl"
                        style={{ zIndex: 0 }}
                    />
                    {/* Card content above spotlight */}
                    <div className="relative z-10 flex flex-col gap-4 w-full">
                        <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg mb-2" style={currentProject.logoStyle}>
                            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
                        </div>
                        <div className="flex flex-col gap-2 text-white-600">
                            <p className="text-white text-2xl font-semibold animatedText leading-tight">{currentProject.title}</p>
                            <p className="animatedText text-base leading-relaxed text-neutral-300">{currentProject.desc}</p>
                            <p className="animatedText text-base leading-relaxed text-neutral-400">{currentProject.subdesc}</p>
                        </div>
                        <div  className="flex items-center justify-between flex-wrap gap-5 mt-2">
                            <div className="flex items-center gap-3">
                                {currentProject.tags.map((tag, index) => (
                                    <div key={index} className="tech-logo w-10 h-10 relative group">
                                        <img src={tag.path} alt={tag.name} className="w-8 h-8 object-contain" />
                                        {/* Tooltip */}
                                        <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 translate-y-full px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-20 transition-opacity duration-200">
                                            {tag.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <a
                                className="flex items-center gap-2 cursor-pointer text-white-600"
                                href={currentProject.href}
                                target="_blank"
                                rel="noreferrer">
                                <p>Check Live Site</p>
                                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                            </a>
                        </div>
                        <div className="flex justify-between items-center mt-7 w-full">
                            <button className="arrow-btn flex items-center justify-center w-10 h-10" onClick={() => handleNavigation('previous')}>
                                <img src="/assets/left-arrow.png" alt="left arrow" className="w-6 h-6" />
                            </button>
                            <button className="arrow-btn flex items-center justify-center w-10 h-10" onClick={() => handleNavigation('next')}>
                                <img src="/assets/right-arrow.png" alt="right arrow" className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* 3D Model */}
                <div ref={projectRef} className="flex items-center justify-center h-[32rem] lg:h-[40rem] bg-transparent rounded-none border-none shadow-none">
                    <Canvas className="bg-transparent">
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Projects;