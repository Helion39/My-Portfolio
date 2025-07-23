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
      src: "/projects/FRM2.png",
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
      id: "bright-project",
      title: "BRIGHT - English Teaching Project",
      description: "Social impact initiative focused on community development and sustainable solutions.",
      src: "/projects/Bright.png",
    },
    {
      id: "bancimo",
      title: "Bancimo - Business Simulation",
      description: "Interactive business simulation demonstrating marketing leadership and strategic decision-making.",
      src: "/projects/FRM3.png",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <ProjectCarousel slides={slideData} />
    </div>
  );
}