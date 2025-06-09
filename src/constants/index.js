const navLinks = [
    {
        name: "Projects",
        link: "#projects",
    },
    {
        name: "Experience",
        link: "#experience",
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
    { text: "Ideas", imgPath: "images/ideas.svg" },
    { text: "Concepts", imgPath: "images/concepts.svg" },
    { text: "Designs", imgPath: "images/designs.svg" },
    { text: "Code", imgPath: "images/code.svg" },
    { text: "Systems", imgPath: "images/hardware.svg" },
    { text: "Ideas", imgPath: "images/ideas.svg" },
    { text: "Concepts", imgPath: "images/concepts.svg" },
    { text: "Designs", imgPath: "images/designs.svg" },
    { text: "Code", imgPath: "images/code.svg" },
    { text: "Systems", imgPath: "images/hardware.svg" }
];

const counterItems = [
    { value: 5, suffix: "+", label: "Personal Projects" },
    { value: 2, suffix: "+", label: "Hackathons Participated" },
    { value: 9, suffix: "+", label: "Technical Courses Completed" },
    { value: 1, suffix: "%", label: "Internship Experiences" },
];

const logoIconsList = [
    {
        imgPath: "images/logos/company-logo-1.png",
    },
    {
        imgPath: "images/logos/company-logo-2.png",
    },
    {
        imgPath: "images/logos/company-logo-3.png",
    },
    {
        imgPath: "images/logos/company-logo-4.png",
    },
    {
        imgPath: "images/logos/company-logo-5.png",
    },
    {
        imgPath: "images/logos/company-logo-6.png",
    },
    {
        imgPath: "images/logos/company-logo-7.png",
    },
    {
        imgPath: "images/logos/company-logo-8.png",
    },
    {
        imgPath: "images/logos/company-logo-9.png",
    },
    {
        imgPath: "images/logos/company-logo-10.png",
    },
    {
        imgPath: "images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "images/seo.png",
        title: "Build → Break → Learn",
        desc: "Most of what I’ve learned came from trying, breaking things, and figuring out why they didn’t work. It sticks better that way.",
    },
    {
        imgPath: "images/chat.png",
        title: "Communication Matters",
        desc: "Clear, honest communication makes everything smoother. I always want the people I work with to know where things stand.",
    },
    {
        imgPath: "images/time.png",
        title: "Questions, Always",
        desc: "I ask a lot of questions. Not to be annoying, it’s just how I learn and how I build better things.",
    },
];


const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React & Frontend",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Projects",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Development",
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
            { name: "Unity", icon: "images/unity.svg" },
            { name: "C#", icon: "images/csharp.png" },
            { name: "Blender", icon: "images/blender.png" },
            { name: "Python", icon: "images/python.svg" },
        ],
        imgPath: "images/uf_banner.png",
        logoPath: "images/ufcirc.png",
        title: "Undergraduate Researcher — GLaDE Lab (UF)",
        date: "Feb 2025 – Present",
        responsibilities: [
            "Built interactive VR simulations in Unity to teach engineering statics.",
            "Created 3D models and physics-based problems using Blender and SolidWorks.",
            "Programmed AI-driven problem variations in C# and Python for dynamic learning.",
            "Researched adaptive systems and personalized feedback for education tools.",
        ],
    },
    {
        tools: [
            { name: "C#", icon: "images/csharp.png" },
            { name: "JavaScript", icon: "images/javascript.png" },
            { name: "SQL", icon: "assets/sql.svg" },
            { name: "Azure", icon: "assets/azure.svg" },
        ],
        imgPath: "images/pbsc_site.png",
        logoPath: "images/pbsccirc.png",
        title: "Web Development Intern — Palm Beach State College",
        date: "June 2024 – Present",
        responsibilities: [
            "Built a secure upload portal using Box APIs.",
            "Let users create folders and upload files without Box accounts, reducing needed licenses.",
            "Built API integrations to sync JotForm data with internal databases.",
            "Automated paper-based workflows into secure online forms.",
            "Helped improve navigation, page, and app layouts based on student/employee feedback.",
        ],
    },
    {
        tools: [
            { name: "AutoCAD", icon: "assets/autocad.png" },
            { name: "Manufacturing", icon: "assets/machine.png" },
            { name: "Blueprints", icon: "assets/blueprint.png" },
        ],
        imgPath: "images/instatech.png",
        logoPath: "images/instacirc.png",
        title: "Assistant — Instatech Industries",
        date: "Oct 2021 – Aug 2023",
        responsibilities: [
            "Created structural hardware blueprints in AutoCAD based on engineering specs.",
            "Maintained clean, organized work areas to support safety and efficiency.",
            "Worked hands-on with fabrication tools in a large-scale production environment.",
        ],
    },
    {
        tools: [
            { name: "Service", icon: "assets/customer-review.png" },
            { name: "Teamwork", icon: "assets/united.png" },
        ],
        imgPath: "images/lindburgers_banner.png",
        logoPath: "images/lindburgers.png",
        title: "Server / Food Runner — Lindburgers",
        date: "May 2021 – Aug 2023",
        responsibilities: [
            "Served customers in a fast-paced restaurant with 50+ menu items.",
            "Managed payments, custom orders, and dietary preferences with care.",
            "Worked closely with kitchen staff to maintain quality and flow.",
        ],
    },
];


const expLogos = [
    {
        name: "logo1",
        imgPath: "images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "images/logo3.png",
    },
];


const socialImgs = [
    {
        name: "github",
        url: "https://github.com/AndrewFesenko",
        imgPath: "images/github.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/andrew-fesenko-007bb3248\n",
        imgPath: "images/linkedin.png",
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
        texture: 'textures/project/echohire.mp4',
        logo: 'assets/ai-avatar.png',
        logoStyle: {
            backgroundColor: '#0e1a1f', // darker and deeper than base card backgrounds
            border: '1px solid #1e2b31', // soft contrast, echoes your panel borders
            boxShadow: '0 0 30px rgba(178, 245, 176, 0.25)' // matches the mint glow from buttons and CTAs
        },
        spotlight: 'assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: 'assets/react.svg',
            },
            {
                id: 4,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: 'assets/typescript.png',
            },
            {
                id: 2,
                name: 'Firebase ',
                path: 'assets/firebase.png',
            },
        ],
    },
    {
        title: 'AI/NLP TV Series Analysis System',
        desc: 'A comprehensive AI-powered tool designed to analyze TV show scripts by mapping character relationships, extracting key themes, classifying episodes, and generating AI-driven character dialogues. Developed as a personal project to explore advanced NLP techniques using my favorite anime, Black Clover.',
        subdesc:
            'By leveraging machine learning, natural language processing, and chatbot design, the system identifies and visualizes complex character networks, detects evolving themes across episodes, and simulates realistic conversations with the main character Asta. This project combines data scraping, neural networks, and custom LLMs to provide deep, interactive insights into storylines and character dynamics.',
        href: 'https://github.com/AndrewFesenko/black_clover_nlp',
        texture: 'textures/project/ShowAnalysis.mp4',
        logo: 'assets/blackclover.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0pxrgba(59, 33, 31, 0.3)',
        },
        spotlight: 'assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: 'assets/python.svg',
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
        texture: 'textures/project/coming_soon.mp4',
        logo: 'assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: 'assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'C++',
                path: 'assets/C++.png',
            },
            {
                id: 2,
                name: 'esp32',
                path: 'assets/esp32.svg',
            }
        ],
    },
    {
        title: 'AI-Powered Basketball Game Analytics',
        desc: 'A computer vision system that analyzes basketball games using object detection, tracking, and deep learning. Built to explore how AI can extract tactical insights from real footage using YOLOv8, keypoint detection, and perspective transforms.',
        subdesc:
            'The system detects players and ball in live footage, assigns team colors using zero-shot classification, and maps real-world positions to a top-down court. Stats like ball possession, passes, and player movement are automatically tracked. Built in Python using OpenCV, NumPy, and Hugging Face APIs.',
        href: '',
        texture: 'textures/project/coming_soon.mp4',
        logo: 'assets/basketball_logo.png',
        logoStyle: {
            backgroundColor: '#0e1a1f',
            border: '1px solid #1e2b31',
            boxShadow: '0 0 30px rgba(255, 144, 56, 0.25)'
        },
        spotlight: 'assets/spotlight4.png',
        tags: [
            { id: 1, name: 'Python', path: 'assets/python.svg' },
            { id: 2, name: 'OpenCV', path: 'assets/OpenCV.svg' },
            { id: 3, name: 'Hugging Face', path: 'assets/huggingface.png' }
        ],
    },
    {
        title: 'Adaptive VR Learning Platform for Education',
        desc: 'An interactive Virtual Reality (VR) application designed to enhance student understanding of complex engineering concepts through hands-on problem-solving. Built as part of research within the GLaDE Lab at UF, the platform allows users to explore, manipulate, and analyze problems within an immersive 3D environment for courses such as Statics, Dynamics, Physics, etc.',
        subdesc:
            'By integrating dynamic models and parametric solutions, students can adjust problem variables and immediately see how forces, reactions, and internal stresses change—making abstract concepts tangible and interactive.',
        href: '',
        texture: 'textures/project/coming_soon.mp4',
        logo: 'assets/UF.png',
        logoStyle: {
            backgroundColor: '#1C1C21',
            border: '0.2px solid #2A2A2A',
            boxShadow: '0px 0px 60px 0px #4A90E24D',
        },
        spotlight: 'assets/spotlight5.png',
        status: 'upcoming',
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: 'assets/unity.svg',
            },
            {
                id: 2,
                name: 'C#',
                path: 'assets/csharp.png',
            },
            {
                id: 3,
                name: 'Python',
                path: 'assets/python.svg',
            },
            {
                id: 4,
                name: 'Onshape',
                path: 'assets/onshape.png',
            },
        ],
    },
    {
        id: 6,
        title: 'GRMR UF Tutoring Platform',
        desc: 'A tutoring and academic support platform built for Gators for Refugee Medical Relief (GRMR), a nonprofit supporting K–12 and adult learners in refugee and underserved communities. Designed with Next.js, TypeScript, and Tailwind CSS to deliver accessible, culturally responsive educational tools.',
        subdesc:
            'Includes custom tutor and student sign-up flows, subject-based lesson browsing, and detailed descriptions of tutoring services and academic resources. The backend will be built with Node.js to support features like session management, TutorCruncher API integration, and transportation coordination for in-person events.',
        href: '',
        texture: 'textures/project/coming_soon.mp4',
        logo: 'assets/GRMR.png',
        logoStyle: {
            backgroundColor: '#f5f3ff',
            border: '1px solid #dcd5fa',
            boxShadow: '0 0 30px rgba(118, 103, 184, 0.25)',
        },
        spotlight: 'assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: 'assets/nextjs.svg',
            },
            {
                id: 2,
                name: 'TypeScript',
                path: 'assets/typescript.png',
            },
            {
                id: 3,
                name: 'Tailwind CSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'Node.js',
                path: 'assets/nodejs.svg',
            },
        ],
    }
];

export const aboutMeTopics = [
    {
        title: "About Me",
        subtitle: "Hey, I'm Andrew Fesenko",
        description: "I've been into computers for as long as I can remember. I built my first PC when I was a kid, and that pretty much lit the spark. I started out in a Java bootcamp, learned how to mod Minecraft, and I haven’t stopped building since.\n" +
            "\n" +
            "Over the past few years, I’ve worked on everything from web platforms to embedded projects and AI tools. Now I'm especially interested in systems that sit close to the hardware — digital logic, embedded design, and real-time systems.\n" +
            "\n" +
            "I like solving problems by building actual things, and I’m always trying to get better at connecting code with the physical world.",
    }
    ,
    {
        title: "Personal Stuff",
        subtitle: "Outside the Code",
        description: [
            "I lift every day. It’s how I reset and keep my mind in check.",
            "I’m into gaming — mostly shooters, strategy, and story-driven stuff. Big fan of Elden Ring, Wukong, and the Batman Arkham series.",
            "I modded my first car with my dad. We built custom headlights for my 2016 Honda Accord EX-L. The LEDs eventually died because we forgot a kill switch, but it was still worth it.",
            "I’m Ukrainian and speak both Ukrainian and Russian.",
            "I listen to a lot of Polyphia, Tyler, The Creator (I went to Chromokopia), and Denzel Curry.",
            "I love LEGOs and still struggle with blowing money on them."
        ],
    },
    {
        title: "Now",
        subtitle: "What I'm Working On",
        description: [
            "Building Day Zero, a mobile app that helps track habits and daily goals.",
            "Testing IoT sensor nodes with ESP32s for a home automation idea.",
            "Working on a new platform for UF's Gators for Refugee Medical Relief Tutoring Program.",
            "Learning more about Docker, AWS, and CI/CD workflows.",
            "Balancing project time with school, the gym, and everything else life throws at me."
        ]
    },
    {
        title: "Photos",
        subtitle: "More About Me",
        images: [
            { src: "images/photos/pc_build.jpg", caption: "Built this myself. Still proud." },
            { src: "images/photos/circuits.jpg", caption: "My first PCB project: designed, soldered, and tested as part of UF's Circuits 1 final." },
            { src: "images/photos/pcb.jpg", caption: "My first self-designed PCB: built for a personal project using the ESP32." },
            { src: "images/photos/weld.JPG", caption: "Welded for the first time nearly seven years ago with my dad." },
            { src: "images/photos/dad.JPG", caption: "Me and my dad. He’s the reason I like building things." },
            { src: "images/photos/dog.JPG", caption: "Project supervisor."},
            { src: "images/photos/concert.jpg", caption: "My first ever concert." },
            { src: "images/photos/clash_base.PNG", caption: "Years of progress and no regrets." },
        ],
    }
];
