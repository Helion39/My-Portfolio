"use client";
import { useState } from "react";
import ProjectCarousel from "@/components/ui/project-carousel";
import ProjectModal from "@/components/ui/project-modal";
import { projects } from "@/data/projects";
import { Project } from "@/types";

export default function CarouselDemo() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Convert projects data to carousel slide format
  const slideData = projects.map(project => ({
    id: project.id,
    title: project.title,
    description: project.description,
    src: project.image,
  }));

  const handleProjectClick = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <ProjectCarousel 
        slides={slideData} 
        onProjectClick={handleProjectClick}
      />
      
      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}