import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "digital-forensics",
    title: "Digital Forensic Case Investigations",
    category: "Cybersecurity & Analysis",
    description: "Team-based investigation analyzing financial fraud, data leaks, and malware attacks",
    image: "/projects/Cybersecurity Audit PT. Sequre Gate One1.png",
    period: "Oct 2024 - Dec 2024",
    overview: "Participated in comprehensive team-based digital forensic investigations analyzing complex cybersecurity incidents including financial fraud, data breaches, and malware attacks. Applied professional forensic methodologies to reconstruct incident timelines and identify attack vectors.",
    role: "As a forensic analyst team member, I conducted detailed technical analysis of digital evidence using industry-standard tools and methodologies. My contributions focused on network traffic analysis, file recovery operations, and user activity reconstruction to support incident response and legal proceedings.",
    technologies: ["Wireshark", "Network Miner", "PCAP Analysis", "File Recovery Tools", "Log Analysis", "Incident Response"],
    details: [
      "Analyzed network traffic using Wireshark to identify malicious communication patterns and data exfiltration",
      "Performed file recovery operations to reconstruct deleted evidence and recover critical system files",
      "Conducted comprehensive user activity tracing through system logs and registry analysis",
      "Collaborated with team members to correlate findings and build comprehensive incident timelines",
      "Documented forensic findings with detailed reports suitable for technical and legal review"
    ]
  },
  {
    id: "food-ordering",
    title: "Food Ordering Website",
    category: "Full-Stack Development",
    description: "PHP-MySQL web application with order tracking and product listings",
    image: "/projects/FoodOrder1.png",
    period: "Aug 2024 - Sep 2024",
    overview: "Built a comprehensive full-stack web application for food ordering with real-time order tracking and dynamic product management. This project demonstrates proficiency in both frontend user experience and backend system architecture.",
    role: "As the full-stack developer, I architected and implemented the entire system from database design to user interface. I focused on creating a scalable backend API and an intuitive frontend that provides seamless ordering experiences for customers and efficient management tools for restaurant owners.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "AJAX", "Session Management"],
    details: [
      "Designed and implemented a normalized MySQL database schema for efficient data management",
      "Built RESTful API endpoints in PHP for order processing, user authentication, and product management",
      "Created responsive frontend interfaces with dynamic product listings and real-time order updates",
      "Implemented secure user authentication and session management for customer and admin roles",
      "Developed real-time order tracking system with status updates and notification features"
    ]
  },
  {
    id: "frm-platform",
    title: "Free Risk Management (FRM) - Cybersecurity Risk Assessment Platform",
    category: "Cybersecurity",
    description: "Interactive platform visualizing ISO/IEC 27005 risk assessment process",
    image: "/projects/FRM1.png",
    period: "Nov 2024 - Jan 2025",
    overview: "Created an interactive cybersecurity risk assessment platform that visualizes the comprehensive 9-step ISO/IEC 27005 risk assessment process. The platform helps users systematically evaluate the security of their software or hardware systems by understanding threats, vulnerabilities, and risk controls through an intuitive web interface.",
    role: "As the lead developer and cybersecurity analyst, I designed and implemented the complete risk assessment framework from conceptual design to interactive visualization. My focus was on translating complex cybersecurity standards into an accessible, user-friendly platform that enables effective risk management decision-making.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Interactive Visualization", "ISO/IEC 27005", "Risk Assessment Framework", "Cybersecurity Standards"],
    details: [
      "Implemented interactive visualization of the 9-step ISO/IEC 27005 risk assessment methodology",
      "Designed user-friendly interface for systematic evaluation of software and hardware security",
      "Created comprehensive threat and vulnerability assessment tools with real-time analysis",
      "Developed risk control recommendation system based on industry best practices",
      "Built responsive web platform using modern React and TypeScript architecture"
    ]
  },
  {
    id: "urban-night-city",
    title: "Urban Night City",
    category: "3D Modeling & Animation",
    description: "Collaborative 3D animation with character modeling and environmental design",
    image: "/projects/Blend.png",
    period: "Jun 2024 - Aug 2024",
    overview: "Contributed to an ambitious collaborative 3D animation project as part of a 4-person creative team. The project involved creating a detailed urban environment with dynamic lighting, character animation, and environmental storytelling elements.",
    role: "As a key team member responsible for 30% of total asset creation and animation, I focused on character modeling, movement systems, and environmental design. My contributions included both technical modeling work and creative animation sequences that brought the urban environment to life.",
    technologies: ["3D Modeling Software", "Animation Tools", "Lighting Systems", "Texture Mapping", "Team Collaboration"],
    details: [
      "Created detailed 3D character models with optimized topology for smooth animation workflows",
      "Developed character movement systems and animation sequences for realistic motion",
      "Designed and modeled environmental assets including buildings, vehicles, and urban infrastructure",
      "Implemented dynamic lighting systems to create atmospheric night-time cityscape scenes",
      "Collaborated effectively with team members to maintain consistent artistic vision and technical standards"
    ]
  },
  {
    id: "banddit-reddit-clone",
    title: "Banddit - Full-Stack Reddit Clone Community Forum",
    category: "Full-Stack Development",
    description: "Sophisticated social media platform replicating Reddit's core functionality with modern web technologies",
    image: "/projects/Banddit1.png",
    period: "Dec 2024 - Feb 2025",
    overview: "Developed a sophisticated, full-stack social media platform that replicates Reddit's core functionality using modern web technologies. Banddit demonstrates advanced full-stack development skills through a complete community forum application featuring user authentication, content management, and real-time social interactions.",
    role: "As the full-stack developer, I architected and implemented the entire social media platform from database design to user interface. My focus was on creating a scalable, secure application that handles complex social interactions, user authentication, and real-time content updates while maintaining optimal performance.",
    technologies: ["React", "TypeScript", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Tailwind CSS", "Radix UI", "Framer Motion"],
    details: [
      "Built comprehensive authentication system with JWT tokens, password hashing, and Google OAuth integration",
      "Implemented real-time voting system and comment interactions with optimistic UI updates",
      "Designed RESTful API with full CRUD operations for posts, comments, and user management",
      "Created responsive design with dark theme support and mobile-first approach using Tailwind CSS",
      "Developed advanced state management using Redux Toolkit for complex application state handling"
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
  }
];