"use client";
import ProjectCarousel from "@/components/ui/project-carousel";

export default function CarouselDemo() {
  const slideData = [
    {
      id: "digital-forensics",
      title: "Digital Forensic Case Investigations",
      description: "Comprehensive forensic analysis using industry-standard tools and methodologies for cybersecurity investigations.",
      src: "/projects/Cybersecurity Audit PT. Sequre Gate One1.png",
    },
    {
      id: "food-ordering",
      title: "Food Ordering Website",
      description: "Full-stack web application built with PHP and MySQL, featuring user authentication and order management.",
      src: "/projects/FoodOrder1.png",
    },
    {
      id: "frm-platform",
      title: "Free Risk Management (FRM)",
      description: "Cybersecurity Risk Assessment Platform, visualizing ISO/IEC 27005 risk assessment process for systematic security evaluation.",
      src: "/projects/FRM1.png",
    },
    {
      id: "urban-night-city",
      title: "Urban Night City",
      description: "Detailed 3D environment modeling showcasing architectural design and lighting techniques.",
      src: "/projects/Blend.png",
    },
    {
      id: "banddit-reddit-clone",
      title: "Banddit - Reddit Clone Community Forum",
      description: "Full-stack social media platform with authentication, real-time interactions, and modern UI.",
      src: "/projects/Banddit1.png",
    },
    {
      id: "safe-elderly-care",
      title: "SAFE Elderly Care Monitoring System",
      description: "Healthcare monitoring platform with AI-powered emergency response for elderly care facilities.",
      src: "/projects/SAFE1.png",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <ProjectCarousel slides={slideData} />
    </div>
  );
}