const navLinks = [
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Projects",
        link: "#projects",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Contact",
        link: "#contact",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        tools: [
            { name: "React", icon: "/images/tools/react.png" },
            { name: "Tailwind", icon: "/images/tools/tailwind.png" },
            { name: "TypeScript", icon: "/images/tools/typescript.png" },
        ],
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "aw",
        date: "January 2023 - Present",
        responsibilities: [
            "wa",
            "wa",
            "wa",
        ],
    },
    {
        tools: [
            { name: "React", icon: "/images/tools/react.png" },
            { name: "Tailwind", icon: "/images/tools/tailwind.png" },
            { name: "TypeScript", icon: "/images/tools/typescript.png" },
        ],
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "aw",
        date: "June 2020 - December 2023",
        responsibilities: [
            "wa",
            "wa",
            "wa",
        ],
    },
    {
        tools: [
            { name: "React", icon: "/images/tools/react.png" },
            { name: "Tailwind", icon: "/images/tools/tailwind.png" },
            { name: "TypeScript", icon: "/images/tools/typescript.png" },
        ],
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "wa",
        date: "March 2019 - May 2020",
        responsibilities: [
            "aw",
            "aw",
            "aw",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];


const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};

export const myProjects = [
    {
        title: 'EchoHire – AI-Powered Mock Interview Platform',
        desc: 'An interactive mock interview platform that simulates real job interviews through voice, built using Next.js, Firebase, Vapi AI, and the Google Gemini API. Created to explore voice interfaces and conversational AI in a full-stack environment. The platform allows users to practice interviews with AI-generated questions, receive real-time feedback, and access personalized performance analytics.',
        subdesc:
            'EchoHire enables users to practice interviews by speaking with an AI agent, receive structured feedback, and review past performance. It supports role-specific technical and behavioral questions, offers Gemini-powered feedback summaries, and features a responsive dashboard to track progress over time.',
        href: 'https://github.com/AndrewFesenko/ai_mock_interview',
        texture: '/textures/project/echohire.mp4',
        logo: '/assets/ai-avatar.png',
        logoStyle: {
            backgroundColor: '#0e1a1f', // darker and deeper than base card backgrounds
            border: '1px solid #1e2b31', // soft contrast, echoes your panel borders
            boxShadow: '0 0 30px rgba(178, 245, 176, 0.25)' // matches the mint glow from buttons and CTAs
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 4,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 2,
                name: 'Firebase ',
                path: '/assets/firebase.png',
            },
        ],
    },
    {
        title: 'AI/NLP TV Series Analysis System',
        desc: 'A comprehensive AI-powered tool designed to analyze TV show scripts by mapping character relationships, extracting key themes, classifying episodes, and generating AI-driven character dialogues. Developed as a personal project to explore advanced NLP techniques using my favorite anime, Black Clover.',
        subdesc:
            'By leveraging machine learning, natural language processing, and chatbot design, the system identifies and visualizes complex character networks, detects evolving themes across episodes, and simulates realistic conversations with the main character Asta. This project combines data scraping, neural networks, and custom LLMs to provide deep, interactive insights into storylines and character dynamics.',
        href: 'https://github.com/AndrewFesenko/black_clover_nlp',
        texture: '/textures/project/ShowAnalysis.mp4',
        logo: 'assets/blackclover.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0pxrgba(59, 33, 31, 0.3)',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.svg',
            },
            {
                id: 2,
                name: 'Hugging Face',
                path: 'assets/huggingface.png',
            },
            {
                id: 3,
                name: 'Scrapy',
                path: 'assets/scrapy.png',
            },
            {
                id: 4,
                name: 'NetworkX',
                path: 'assets/networkx.png',
            },
        ],
    },
    {
        title: 'ESP32 Self Balancing Cube',
        desc: 'A compact, self-balancing cube built using an ESP32 microcontroller and MPU6050 IMU, designed to maintain balance on an edge or vertex in real time.',
        subdesc:
            'The system uses PID control tuned via Bluetooth, enabling dynamic calibration and fine-tuning without physical access. Real-time sensor feedback is used to drive brushless motors, maintaining stability even during external disturbances. The entire cube was designed to be 3D printed, showcasing a full-stack embedded system from hardware to firmware.',
        href: 'https://github.com/AndrewFesenko/self-balancing-cube',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'C++',
                path: '/assets/C++.png',
            },
            {
                id: 2,
                name: 'esp32',
                path: 'assets/esp32.svg',
            }
        ],
    },
    {
        title: 'AI Chatbot Using LLMs and React Native',
        desc: 'An AI-powered chatbot designed for a coffee shop app, built with React Native and integrated with custom LLMs for real-time, intelligent customer interaction.',
        subdesc:
            'The chatbot architecture includes agents for order-taking, product recommendations, and menu inquiries—powered by Retrieval-Augmented Generation (RAG) and hosted on RunPod. With Firebase as the backend and Pinecone as the vector DB, the app enables context-aware conversations, safe interaction filtering, and a seamless mobile UX tailored for modern service environments.',
        href: '',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/coffee.png',
        logoStyle: {
            backgroundColor: '#fffaf2',
            background:
                'linear-gradient(180deg, #f0e4d7 0%, #fdfbf7 100%)',
            border: '1px solid rgba(87, 62, 47, 0.2)',
            boxShadow: '4px 6px 20px rgba(141, 115, 91, 0.3)'
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'FireBase',
                path: 'assets/firebase.png',
            },
            {
                id: 3,
                name: 'HuggingFace',
                path: '/assets/huggingface.png',
            },
            {
                id: 4,
                name: 'Run Pod',
                path: '/assets/runpod.svg',
            },
        ],
    },
    {
        title: 'Adaptive VR Learning Platform for Education',
        desc: 'An interactive Virtual Reality (VR) application designed to enhance student understanding of complex engineering concepts through hands-on problem-solving. Built as part of research within the GLaDE Lab at UF, the platform allows users to explore, manipulate, and analyze problems within an immersive 3D environment for courses such as Statics, Dynamics, Physics, etc.',
        subdesc:
            'By integrating dynamic models and parametric solutions, students can adjust problem variables and immediately see how forces, reactions, and internal stresses change—making abstract concepts tangible and interactive.',
        href: '',
        texture: '/textures/project/vrproject.mp4',
        logo: '/assets/UF.png',
        logoStyle: {
            backgroundColor: '#1C1C21',
            border: '0.2px solid #2A2A2A',
            boxShadow: '0px 0px 60px 0px #4A90E24D',
        },
        spotlight: '/assets/spotlight5.png',
        status: 'upcoming',
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: '/assets/unity.svg',
            },
            {
                id: 2,
                name: 'C#',
                path: 'assets/csharp.png',
            },
            {
                id: 3,
                name: 'Python',
                path: '/assets/python.svg',
            },
            {
                id: 4,
                name: 'Onshape',
                path: '/assets/onshape.png',
            },
        ],
    },
];