import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "digital-forensics",
    title: "Digital Forensic Case Investigations",
    category: "Cybersecurity & Analysis",
    description: "Team-based investigation analyzing financial fraud, data leaks, and malware attacks",
    image: "/placeholder.svg",
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
    image: "/placeholder.svg",
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
    id: "chatzing",
    title: "Chatzing - Android WhatsApp Clone",
    category: "Android Development",
    description: "Real-time chat app with camera, Bluetooth, and compass integration",
    image: "/placeholder.svg",
    overview: "Developed 'Chatzing,' a feature-rich Android messaging application that demonstrates advanced mobile development skills through real-time communication and hardware integration. The app showcases complex Android API usage and system-level programming.",
    role: "As the lead Android developer, I engineered the complete mobile application from architecture design to hardware integration. My focus was on creating a robust messaging platform that leverages device capabilities to enhance user communication experiences beyond traditional text messaging.",
    technologies: ["Java", "Android Studio", "Firebase", "SensorManager", "Camera API", "Bluetooth API", "Real-time Database"],
    details: [
      "Implemented real-time messaging using Firebase Realtime Database for instant message delivery",
      "Integrated camera functionality using Android Camera API for in-app photo sharing",
      "Developed Bluetooth connectivity features for device-to-device communication",
      "Built compass tool using SensorManager for location-based features and navigation assistance",
      "Designed intuitive chat interfaces with material design principles and smooth animations"
    ]
  },
  {
    id: "urban-night-city",
    title: "Urban Night City",
    category: "3D Modeling & Animation",
    description: "Collaborative 3D animation with character modeling and environmental design",
    image: "/placeholder.svg",
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
    id: "bright-project",
    title: "BRIGHT - English Teaching Project",
    category: "Social Impact & Education",
    description: "English and environmental awareness sessions for 30+ elementary students",
    image: "/placeholder.svg",
    overview: "Co-led the BRIGHT project as Vice Project Manager, delivering English language and environmental awareness education to over 30 elementary students in a remote settlement near Karawang's industrial zone. This social impact initiative combined educational outreach with community development.",
    role: "As Vice Project Manager, I coordinated educational activities, developed interactive learning materials, and facilitated sessions that enhanced students' English vocabulary and communication skills while building environmental awareness. My leadership ensured effective program delivery and meaningful community impact.",
    technologies: ["Team Collaboration", "Project Management", "Educational Planning", "Community Outreach", "Interactive Learning", "Environmental Education"],
    details: [
      "Coordinated and managed educational sessions for 30+ elementary students in remote settlement",
      "Developed interactive activities to build English vocabulary and communication skills effectively",
      "Integrated environmental awareness components to promote civic responsibility and sustainability",
      "Facilitated collaborative learning environments that encouraged student participation and engagement",
      "Demonstrated leadership in community outreach and social impact project management"
    ]
  },
  {
    id: "bancimo",
    title: "Bancimo - Business Simulation",
    category: "Marketing & Business",
    description: "Marketing leadership for campus-wide business simulation project",
    image: "/placeholder.svg",
    overview: "Led marketing strategy for Bancimo, a snack business created during a comprehensive campus-wide economic survival simulation. This project demonstrated practical business skills through real-world market competition and strategic brand positioning.",
    role: "As PIC of Marketing, I developed and executed comprehensive marketing strategies including branding, promotional campaigns, and customer engagement initiatives. My leadership in marketing contributed significantly to increased product visibility and sales performance in the competitive simulation environment.",
    technologies: ["Marketing Strategy", "Brand Development", "Digital Marketing", "Customer Engagement", "Sales Analytics", "Team Leadership"],
    details: [
      "Developed comprehensive marketing strategy for snack business in competitive campus simulation",
      "Created effective branding and promotional materials that increased product visibility significantly",
      "Implemented both digital and on-site marketing strategies to maximize customer reach",
      "Managed customer engagement initiatives that contributed to increased sales performance",
      "Demonstrated leadership in cross-functional team collaboration and strategic business planning"
    ]
  }
];