const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
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
    name: "Testimonials",
    link: "#testimonials",
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
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
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
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "HTML",
    type: "model",
    modelPath: "/models/html-logo.glb",
    scale: 50,
    rotation: [0, 0, 0]
  },
  {
    name: "JavaScript",
    type: "model",
    modelPath: "/models/javascript_1.glb",
    scale: 0.2,
    rotation: [0, Math.PI / 2, Math.PI / 2]
  },
  {
    name: "CSS",
    type: "img",
    imgPath: "/images/skills/css-logo.png"
  },
  {
    name: "React",
    type: "model",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    type: "model",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "MongoDB",
    type: "model",
    modelPath: "/models/mongodb-logo.glb",
    scale: 35,
    rotation: [0, 0, 0],
  },
  {
    name: "SQL",
    type: "img",
    imgPath: "/images/skills/sql.png"
  },
  {
    name: "MySQL",
    type: "img",
    imgPath: "/images/skills/mysql.png"
  },
  {
    name: "C++",
    type: "model",
    modelPath: "/models/cpp-logo.glb",
    scale: 40,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    type: "model",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Next.js",
    type: "img",
    imgPath: "/images/skills/icons8-next.js-100.png",
    size: "w-38 h-38"
  },
  {
    name: "Tailwind CSS",
    type: "model",
    modelPath: "/models/tailwindcss-logo.glb",
    scale: 40,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    type: "model",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  ...[
  {
    "name": "TypeScript",
    "type": "text",
    "mark": "TS"
  },
  {
    "name": "Redux Toolkit",
    "type": "text",
    "mark": "RTK"
  },
  {
    "name": "Express.js",
    "type": "text",
    "mark": "EX"
  },
  {
    "name": "FastAPI",
    "type": "text",
    "mark": "API"
  },
  {
    "name": "Flask",
    "type": "text",
    "mark": "FL"
  },
  {
    "name": "REST APIs",
    "type": "text",
    "mark": "REST"
  },
  {
    "name": "JWT",
    "type": "text",
    "mark": "JWT"
  },
  {
    "name": "OAuth",
    "type": "text",
    "mark": "AUTH"
  },
  {
    "name": "PostgreSQL",
    "type": "text",
    "mark": "PG"
  },
  {
    "name": "OpenAI API",
    "type": "text",
    "mark": "AI"
  },
  {
    "name": "Scikit-learn",
    "type": "text",
    "mark": "ML"
  },
  {
    "name": "AWS S3",
    "type": "text",
    "mark": "S3"
  },
  {
    "name": "AWS EC2",
    "type": "text",
    "mark": "EC2"
  },
  {
    "name": "Docker",
    "type": "text",
    "mark": "DK"
  },
  {
    "name": "Linux",
    "type": "text",
    "mark": "LX"
  },
  {
    "name": "GitHub",
    "type": "text",
    "mark": "GH"
  },
  {
    "name": "Postman",
    "type": "text",
    "mark": "PM"
  }
]
];

const expCards = [
  {
    "company": "UFS Networks",
    "title": "AI & Full Stack Developer",
    "date": "June 2026 – Present",
    "location": "Remote / New Delhi",
    "review": "Current role · AI and full stack development",
    "imgPath": "/images/ufs_newlogo_.jpg",
    "logoPath": "/images/ufs_newlogo_.jpg",
    "responsibilities": [
      "Innovora: develop across React, Next.js, Python and FastAPI; migrate the React frontend to Next.js App Router with restructured routes, shared layouts and reusable components.",
      "Innovora: adapt authentication contexts and route guards; debug JWT credential validation, authentication initialization and protected-page access.",
      "Innovora: develop FastAPI backend features and integrate REST APIs; resolve routing, module import, API response and network issues.",
      "Other UFS products: build CRM landing, login and registration pages, work on OpenAI integrations, and support AWS S3 / EC2 deployment workflows."
    ]
  },
  {
    "company": "UFS Networks",
    "title": "Full Stack Developer Intern",
    "date": "December 2024 – September 2025",
    "location": "New Delhi",
    "review": "Internship · Recruitment workflows",
    "imgPath": "/images/ufs_newlogo_.jpg",
    "logoPath": "/images/ufs_newlogo_.jpg",
    "responsibilities": [
      "Built resume processing with AWS S3 and OpenAI APIs to extract structured candidate skills, education and experience.",
      "Developed recruiter dashboards for structured candidate information.",
      "Integrated Zoom interview scheduling, automated email invitations and a calendar-style dashboard."
    ]
  },
  {
    "company": "Jaipur Smart City Limited",
    "title": "Frontend Developer Intern",
    "date": "July 2024 – October 2024",
    "location": "Jaipur, Rajasthan",
    "review": "Internship · Surveillance interfaces",
    "imgPath": "/images/jscl.png",
    "logoPath": "/images/jscl.png",
    "responsibilities": [
      "Developed React, TypeScript and Redux Toolkit surveillance interfaces with multi-camera streams, maps, incident tracking, notifications and role-based access.",
      "Applied lazy loading and code splitting.",
      "Labelled Roboflow datasets and collaborated with the ML team to integrate detection outputs."
    ]
  }
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

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Asad. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Asad was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Asad was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Asad's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Asad is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Asad was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Asad’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Asad was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
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

const allProjects = [
  {
    id: 1,
    title: "Effortless Hair Perfection Made Simple with Beauty",
    hidden: true,
    description: "An AI-powered app that fixes your look instantly with advanced beauty technology.",
    longDescription: "An innovative app built with React Native, Expo, & Tailwind CSS for a fast, user-friendly experience. Features real-time hair styling suggestions powered by AI.",
    imagePath: "/images/hairAnalysis.png",
    tags: ["React", "Expo", "Tailwind CSS", "AI"],
    featured: false,
    backgroundColor: "bg-[#1c1c21]",
    projectLink: "#",
  },
  {
    id: 2,
    title: "Code Craft",
    description: "A comprehensive platform for managing code resources and user interactions by Commenting and Linking on projects.",
    longDescription: "Complete Code management system with user authentication and admin dashboard. Built with modern web technologies.",
    imagePath: "/images/CodeCraft.png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    featured: true,
    backgroundColor: "bg-[#ffefdb]",
    projectLink: "#",
  },
  {
    id: 3,
    title: "XORA AI Video Editor",
    contentNote: "Project details pending confirmation: the existing description refers to a startup directory, while the title refers to a video editor.",
    description: "Project details pending confirmation: the title and existing startup-directory description conflict.",
    longDescription: "The existing title identifies a video editor, while the previous description identified a startup directory. Functionality and technology details need confirmation.",
    imagePath: "/images/Xora.png",
    tags: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
    featured: true,
    backgroundColor: "bg-[#ffefdb]",
    projectLink: "#",
  },
  {
    id: 4,
    title: "Health Insight Web App",
    description: "Independent symptom-based prediction prototype using an SVM model and Flask JSON API; React frontend with voice input.",
    longDescription: "Built a symptom-based prediction prototype using an SVM model and Flask JSON API. Migrated Jinja2 views to React, added Web Speech API voice input with fuzzy phrase matching, and deployed the integrated React/Python application on Render. This prototype does not establish clinical reliability or verified prediction accuracy.",
    imagePath: "/images/health-insight.png",
    tags: ["React", "Tailwind CSS", "Python", "Flask", "Scikit-learn"],
    featured: false,
    backgroundColor: "bg-[#1c1c21]",
    projectLink: "https://medicine-recommendation-system-z1vl.onrender.com/",
  },
  // {
  //   id: 5,
  //   title: "Real-time Collaborative Editor",
  //   description: "A web-based document editor with real-time collaboration features.",
  //   longDescription: "Document collaboration tool with real-time editing, commenting, and version control. Perfect for teams working remotely on projects.",
  //   imagePath: "/images/CodeCraft.png",
  //   tags: ["React", "WebSocket", "Firebase", "Tailwind CSS"],
  //   featured: false,
  //   backgroundColor: "bg-[#ffefdb]",
  // },
  // {
  //   id: 6,
  //   title: "AI Task Management System",
  //   description: "Intelligent task management tool powered by artificial intelligence.",
  //   longDescription: "Smart task management platform that uses AI to prioritize tasks, predict deadlines, and optimize team productivity. Includes analytics and reporting features.",
  //   imagePath: "/images/Xora.png",
  //   tags: ["React", "Python", "TensorFlow", "PostgreSQL"],
  //   featured: false,
  //   backgroundColor: "bg-[#1c1c21]",
  // },
  // {
  //   id: 7,
  //   title: "Social Media Dashboard",
  //   description: "Unified dashboard for managing multiple social media accounts.",
  //   longDescription: "Comprehensive social media management tool that allows scheduling posts, tracking analytics, and engaging with audiences across multiple platforms.",
  //   imagePath: "/images/hairAnalysis.png",
  //   tags: ["React", "Node.js", "Social APIs", "Chart.js"],
  //   featured: false,
  //   backgroundColor: "bg-[#ffefdb]",
  // },
  // {
  //   id: 8,
  //   title: "Weather & Climate Analytics",
  //   description: "Advanced weather forecasting and climate data visualization tool.",
  //   longDescription: "Weather prediction application with real-time data, historical analysis, and interactive visualizations. Powered by weather APIs and machine learning models.",
  //   imagePath: "/images/CodeCraft.png",
  //   tags: ["React", "D3.js", "Python", "APIs"],
  //   featured: false,
  //   backgroundColor: "bg-[#1c1c21]",
  // },
  // {
  //   id: 9,
  //   title: "Portfolio Management Tool",
  //   description: "Professional portfolio tracking and analysis for investments.",
  //   longDescription: "Investment portfolio management platform with real-time market data, performance analytics, and diversification recommendations for individual investors.",
  //   imagePath: "/images/Xora.png",
  //   tags: ["React", "Node.js", "Financial APIs", "MongoDB"],
  //   featured: false,
  //   backgroundColor: "bg-[#ffefdb]",
  // },
];

const professionalWork = [
  {
    "id": "innovora",
    "title": "InnovoraAI",
    "imagePath": "/images/InnovoraAI.png",
    "description": "React to Next.js App Router migration, shared layouts and reusable components. Authentication contexts, JWT validation and protected routes; Python / FastAPI development and REST API integration.",
    "tags": [
      "React",
      "Next.js",
      "Python",
      "FastAPI"
    ],
    "mark": "IN",
    "caption": "Application migration & API integration"
  },
  {
    "id": "recruitment",
    "title": "TexoraAI",
    "imagePath": "/images/TexoraAI.png",
    "description": "AWS S3 and OpenAI resume processing, structured recruiter dashboards, Zoom interview scheduling, automated email invitations and a calendar-style dashboard.",
    "tags": [
      "AWS S3",
      "OpenAI API",
      "Zoom"
    ],
    "mark": "UFS",
    "caption": "Resume processing & interview scheduling"
  },
  {
    "id": "crm",
    "title": "UnifiedCRM",
    "imagePath": "/images/unifiedCRM.png",
    "description": "Landing, login and registration pages for a UFS CRM product. Other UFS contributions include OpenAI integrations and support for AWS S3 / EC2 deployment workflows, separate from Innovora.",
    "tags": [
      "CRM",
      "Authentication",
      "AWS"
    ],
    "mark": "CRM",
    "caption": "Landing & authentication pages"
  }
];

export {
  professionalWork,
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  allProjects,
};
