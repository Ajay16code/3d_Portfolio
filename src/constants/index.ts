import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  fileAuth,
  project2,
  chatbotImg,
  cropDetect,
  restaurant,
  threejs,
  maskingToolImg,
  ecommerceImg,
  careerCompassImg,
  aiVerseImg,
  taskAppImg,
  movieRecImg,
  distributionCalcImg,

} from "../assets";


export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience & Education" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "achievements", title: "Achievements" },
  { id: "certifications", title: "Certifications" },
  { id: "blog", title: "Blogs" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI & ML Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Web Development Intern",
    companyName: "CodTech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Worked on guided projects and tasks focused on web development and AI fundamentals.",
      "Implemented small feature modules and practice apps using JavaScript and React.",
      "Gained experience with version control using Git and GitHub for project submissions.",
    ],
  },
  {
    title: "Volunteer & AI/DS Student",
    companyName: "KGiSL Institute of Technology",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Mar 2025",
    points: [
      "Pursuing B.Tech in Artificial Intelligence and Data Science with a strong focus on ML, DL and Data Analytics.",
      "Volunteered at InPyExpo and other Python/AI events, guiding participants in hands-on coding sessions.",
      "Worked on academic and personal projects involving computer vision, dashboards and automation.",
    ],
  },
  {
    title: "Tech Community Member",
    companyName: "IPS Tech Community — KGiSL Institute of Technology",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2025 - May 2025",
    points: [
      "Actively contributed to technical events, Workshops and peer learning activities.",
      "Helped juniors with coding, project ideas and basic web/AI concepts.",
      "Collaborated with the core team to plan and execute tech meetups and sessions.",
    ],
  },
  {
    title: "Full Stack Development Intern",
    companyName: "Thennai Tech Pvt Ltd",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Jul 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const education = [
  {
    title: "B.Tech in Artificial Intelligence and Data Science",
    companyName: "KGiSL Institute of Technology (KITE)",
    icon: tesla,
    iconBg: "#1E293B",
    date: "2023 – 2027",
    points: [
      "CGPA: 8.8 / 10",
      "CourseWork: Machine Learning, Deep Learning, SQL, Big Data, Data Structures, Computer Vision.",
      "Volunteered at InPyExpo and other Python/AI community events.",
      "Actively contributed to technical teams and student innovation activities.",
    ],
  },

  // Your 12th Standard
  {
    title: "Higher Secondary Certificate (HSC)",
    companyName: "Municipal Higher Secondary School, Tiruppur",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", // replace later with your photo if you want
    iconBg: "#334155",
    date: "2021 – 2023",
    points: [
      "Scored 81.1% in HSC.",
      "Studied Biology & Mathematics stream with strong interest in science.",
      "Participated in school-level academic and tech-related activities.",
    ],
  },
];


const testimonials: TTestimonial[] = [
  {
    testimonial: "Web Server System",
    name: "Medium Blog",
    designation: "",
    company: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrTBpNHXwvpnOLrs2nUL9WNwFGKzRc5DDE-g&s",
    link: "https://medium.com/@ajay527946494/case-study-web-server-system-8cabce951aa0",
  },
  {
    testimonial: "Data Science",
    name: "Medium Blog",
    designation: "",
    company: "",
    image: "https://thumbs.dreamstime.com/b/data-science-logo-icon-design-vector-100675205.jpg",
    link: "https://medium.com/@ajay527946494/data-science-data-science-is-the-study-of-data-to-extract-meaningful-insights-for-business-ea95b44bd85d",
  },
  {
    testimonial: "AI Basics",
    name: "Medium Blog",
    designation: "",
    company: "",
    image: "https://media.istockphoto.com/id/1182950590/vector/ai-logo-letter-vector-template-design-illustration-ai-logo-letter-vector-concept-design.jpg?s=612x612&w=0&k=20&c=BQDfp9wnDYO_1PSbEUvNswCF2e3Z7TuzsBxyPgK3x1M=",
    link: "https://medium.com/@ajay527946494/artificial-intelligence-b45633769637",
  },
];




const projects: TProject[] = [
  {
    name: "File Authenticity & Extension Validator",
    description:
      "A tool to validate uploaded files' extensions and content signatures to prevent dangerous/malicious uploads (Flask + Python).",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "flask", color: "green-text-gradient" },
      { name: "security", color: "pink-text-gradient" },
    ],
    image: fileAuth,
    sourceCodeLink: "https://github.com/Ajay16code/File_Authentication",
    liveDemo: "www.google.com", // leave empty if not hosted yet
  },
  
  {
    name: "3D Developer Portfolio",
    description:
      "A stunning 3D portfolio using React, Three.js, and @react-three/fiber with animated models, chatbot integration, and dynamic UI elements.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "r3f", color: "pink-text-gradient" },
    ],
    image: project2,
    sourceCodeLink: "https://github.com/Ajay16code/3d_Portfolio",
    liveDemo: "",
  },

  {
  name: "AI Chatbot (MERN + Docker)",
  description:
    "A full-stack AI-powered chatbot built using the MERN stack with MongoDB for data storage, Node.js/Express backend, React frontend, and Docker containerization. The chatbot integrates an AI model API to generate intelligent responses, supports user session tracking, real-time message flow, and secure backend communication.",
  tags: [
    { name: "mongodb", color: "green-text-gradient" },
    { name: "express", color: "blue-text-gradient" },
    { name: "react", color: "pink-text-gradient" },
    { name: "nodejs", color: "yellow-text-gradient" },
    { name: "docker", color: "orange-text-gradient" },
    { name: "ai", color: "purple-text-gradient" },
  ],
  image: chatbotImg, // replace with your imported chatbot image
  sourceCodeLink: "https://github.com/Ajay16code/Aj_Chatbot",
  liveDemo: "", // add deployed URL when ready
  },

  {
  name: "Crop Field Detection Dashboard",
  description:
    "A data-driven dashboard that analyzes agricultural patterns, detects crop field conditions, and visualizes weather impact using ML and analytics techniques.",
  tags: [
    { name: "python", color: "blue-text-gradient" },
    { name: "ml", color: "green-text-gradient" },
    { name: "data-visualization", color: "pink-text-gradient" },
  ],
  image: cropDetect,
  sourceCodeLink: "https://github.com/Ajay16code/Weather_impact_on_Agri_Analysis",
  liveDemo: "",
  },
  {
  name: "Document Masking Tool",
  description:
    "A utility that automatically masks sensitive information like names, addresses, numbers, and IDs from documents using OCR and rule-based detection.",
  tags: [
    { name: "python", color: "blue-text-gradient" },
    { name: "ocr", color: "green-text-gradient" },
    { name: "security", color: "pink-text-gradient" },
  ],
  image: maskingToolImg,
  sourceCodeLink: "https://github.com/Ajay16code/Masking_Tool",
  liveDemo: "",
  },
  {
  name: "Restaurant Ordering System",
  description:
    "A full-stack restaurant ordering platform built with Vue.js and Node.js, supporting menu browsing, order placement, admin controls, and real-time order updates.",
  tags: [
    { name: "vue", color: "green-text-gradient" },
    { name: "nodejs", color: "blue-text-gradient" },
    { name: "fullstack", color: "pink-text-gradient" },
  ],
  image: restaurant,
  sourceCodeLink: "https://github.com/Ajay16code/Full-stack-restaurant-ordering-system",
  liveDemo: "",
  },
  {
    name: "E-commerce Website",
    description:
      "A full-featured e-commerce platform with product listings, cart system, customer authentication, and order management.",
    tags: [
      { name: "mern", color: "green-text-gradient" },
      { name: "ecommerce", color: "blue-text-gradient" },
      { name: "fullstack", color: "pink-text-gradient" },
    ],
    image: ecommerceImg,
    sourceCodeLink: "https://github.com/Ajay16code/E-commerce_website",
    liveDemo: "",
  },
  {
    name: "Career Compass",
    description:
      "A platform designed to guide students with career paths, skill roadmaps, mentorship support, and personalized suggestions.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "webapp", color: "green-text-gradient" },
      { name: "career", color: "pink-text-gradient" },
    ],
    image: careerCompassImg,
    sourceCodeLink: "https://github.com/Ajay16code/cc",
    liveDemo: "",
  },
  {
    name: "AI Verse",
    description:
      "An AI-powered multi-utility platform offering text generation, speech tools, and smart automation features using advanced AI models.",
    tags: [
      { name: "ai", color: "pink-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
    ],
    image: aiVerseImg,
    sourceCodeLink: "https://github.com/Ajay16code/Aiverse",
    liveDemo: "",
  },
  {
    name: "Task Management App",
    description:
      "A task management platform with authentication, priority sorting, progress tracking, and CRUD operations to organize daily work.",
    tags: [
      { name: "mern", color: "green-text-gradient" },
      { name: "productivity", color: "blue-text-gradient" },
      { name: "fullstack", color: "pink-text-gradient" },
    ],
    image: taskAppImg,
    sourceCodeLink: "https://github.com/Ajay16code/task_app",
    liveDemo: "",
  },
  {
    name: "Movie Recommendation System",
    description:
      "A recommendation engine that suggests movies based on user preferences using content similarity and ML algorithms.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "ml", color: "green-text-gradient" },
      { name: "recommendation", color: "pink-text-gradient" },
    ],
    image: movieRecImg,
    sourceCodeLink: "https://github.com/Ajay16code/Movie-Recommdation",
    liveDemo: "",
  },
  {
    name: "Distribution Calculator",
    description:
      "A calculator tool that computes profit distribution, shares, and percentage allocations based on input parameters.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "calculator", color: "green-text-gradient" },
      { name: "utility", color: "pink-text-gradient" },
    ],
    image: distributionCalcImg,
    sourceCodeLink: "https://github.com/Ajay16code/Distribution_calculator",
    liveDemo: "",
  },




  // keep your original template items (optional)
  
];


export { services, technologies, experiences, testimonials, projects };
