import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "digital-forensics",
    title: "Digital Forensic Case Investigations",
    category: "Cybersecurity & Analysis",
    description: "Team-based investigation analyzing financial fraud, data leaks, and malware attacks",
    image: "/projects/Cybersecurity Audit PT. Sequre Gate One1.png",
    images: [
      "/projects/Cybersecurity Audit PT. Sequre Gate One1.png",
      "/projects/Cybersecurity Audit PT. Sequre Gate One2.png"
    ],
    period: "Oct 2024 - Dec 2024",
    overview: "Team-based digital forensic investigations analyzing cybersecurity incidents including financial fraud, data breaches, and malware attacks using professional forensic methodologies.",
    role: "Conducted technical analysis of digital evidence focusing on network traffic analysis, file recovery operations, and user activity reconstruction for incident response.",
    technologies: ["Wireshark", "Network Miner", "PCAP Analysis", "File Recovery Tools", "Log Analysis", "Incident Response"],
    details: [
      "Analyzed network traffic using Wireshark to identify malicious patterns",
      "Performed file recovery operations and system log analysis",
      "Collaborated on incident timeline reconstruction and forensic reporting"
    ]
  },
  {
    id: "food-ordering",
    title: "Food Ordering Website",
    category: "Full-Stack Development",
    description: "PHP-MySQL web application with order tracking and product listings",
    image: "/projects/FoodOrder1.png",
    images: [
      "/projects/FoodOrder1.png",
      "/projects/FoodOrder2.png"
    ],
    period: "Aug 2024 - Sep 2024",
    overview: "Full-stack web application for food ordering with real-time tracking and dynamic product management, demonstrating both frontend and backend development skills.",
    role: "Architected and implemented the complete system from database design to user interface, focusing on scalable backend API and intuitive frontend experience.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "AJAX", "Session Management"],
    details: [
      "Designed normalized MySQL database and RESTful API endpoints",
      "Created responsive frontend with dynamic listings and real-time updates",
      "Implemented secure authentication and real-time order tracking system"
    ]
  },
  {
    id: "frm-platform",
    title: "Free Risk Management - Cybersecurity Risk Assessment Platform",
    category: "Cybersecurity",
    description: "Interactive platform for ISO/IEC 27005 risk assessment",
    image: "/projects/FRM1.png",
    images: [
      "/projects/FRM1.png",
      "/projects/FRM2.png",
      "/projects/FRM3.png",
      "/projects/FRM4.png"
    ],
    period: "Nov 2024 - Jan 2025",
    overview: "Interactive platform visualizing the 9-step ISO/IEC 27005 process for systematic cybersecurity risk assessment.",
    role: "Lead developer implementing the complete risk assessment framework with user-friendly interfaces.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Interactive Visualization", "ISO/IEC 27005", "Risk Assessment Framework", "Cybersecurity Standards"],
    details: [
      "Implemented interactive visualization of ISO/IEC 27005 methodology",
      "Created threat and vulnerability assessment tools with real-time analysis",
      "Built responsive platform using React and TypeScript architecture"
    ]
  },
  {
    id: "urban-night-city",
    title: "Urban Night City",
    category: "3D Modeling & Animation",
    description: "Collaborative 3D animation with character modeling and environmental design",
    image: "/projects/Blend.png",
    video: "/projects/UrbanNight.mp4",
    period: "Jun 2024 - Aug 2024",
    overview: "Collaborative 3D animation project with a 4-person team creating detailed urban environments with dynamic lighting and character animation.",
    role: "Key team member responsible for 30% of asset creation, focusing on character modeling, movement systems, and environmental design.",
    technologies: ["3D Modeling Software", "Animation Tools", "Lighting Systems", "Texture Mapping", "Team Collaboration"],
    details: [
      "Created optimized 3D character models and animation sequences",
      "Designed environmental assets including buildings and urban infrastructure",
      "Implemented dynamic lighting systems for atmospheric night scenes"
    ]
  },
  {
    id: "banddit-reddit-clone",
    title: "Banddit - Full-Stack Reddit Clone Community Forum",
    category: "Full-Stack Development",
    description: "Sophisticated social media platform replicating Reddit's core functionality with modern web technologies",
    image: "/projects/Banddit1.png",
    period: "Dec 2024 - Feb 2025",
    overview: "Full-stack social media platform replicating Reddit's core functionality with modern web technologies, featuring user authentication and real-time interactions.",
    role: "Architected and implemented the complete platform from database to UI, focusing on scalable, secure social interactions and real-time content updates.",
    technologies: ["React", "TypeScript", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Tailwind CSS", "Radix UI", "Framer Motion"],
    details: [
      "Built authentication system with JWT tokens and Google OAuth integration",
      "Implemented real-time voting and comment system with optimistic UI updates",
      "Created responsive design with dark theme and Redux Toolkit state management"
    ]
  },
  {
    id: "safe-elderly-care",
    title: "SAFE Elderly Care Monitoring System",
    category: "Full-Stack Development",
    description: "Healthcare monitoring platform enhancing elderly care through intelligent monitoring and emergency response",
    image: "/projects/SAFE1.png",
    period: "Jan 2025 - Mar 2025",
    overview: "Developed a comprehensive healthcare monitoring platform designed to enhance elderly care in nursing homes through intelligent monitoring and emergency response coordination. The SAFE (Smart Assisted Fall Emergency) system combines human caregiving with AI-powered monitoring to improve elderly care outcomes and patient safety.",
    role: "As the full-stack developer and healthcare systems architect, I designed and implemented the complete monitoring platform from database architecture to real-time emergency response systems. My focus was on creating a reliable, secure healthcare application that prioritizes patient safety and caregiver efficiency.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS", "JWT Authentication", "Recharts", "Full-Stack Development", "AI"],
    details: [
      "Built role-based dashboards for Admins, Caregivers, and Family Members with healthcare-specific workflows",
      "Implemented real-time vital signs monitoring with interactive charts for blood pressure and heart rate tracking",
      "Developed emergency response system with immediate alert broadcasting and caregiver coordination",
      "Created comprehensive incident management system with complete audit trails for emergency responses",
      "Designed secure healthcare data handling with compliance-focused privacy controls and JWT authentication"
    ]
  },
  {
    id: "nuri-uiux-internship",
    title: "NURI UI/UX Design Project",
    category: "UI/UX Design",
    description: "Project-based internship designing user experiences for e-commerce platform under Smartfren and Whale Cloud Technology partnership",
    image: "/projects/Nuri.png",
    period: "May 2025 - Jun 2025",
    overview: "4-week UI/UX design internship at Nuri, a joint venture e-commerce company under Smartfren and Whale Cloud Technology. Applied design principles through persona creation, user flows, wireframing, and prototyping.",
    role: "UI/UX design intern conducting UX research and creating user-centered design solutions from research through final prototype delivery for e-commerce optimization.",
    technologies: ["Figma", "Google Analytics", "User Research", "Wireframing", "Prototyping", "Design Thinking", "UX Research"],
    details: [
      "Conducted user research and created detailed user personas",
      "Developed user flows and wireframes for e-commerce optimization",
      "Designed high-fidelity prototypes focusing on usability and conversion",
      "Delivered complete design thinking documentation and implementation guidelines"
    ]
  }
];