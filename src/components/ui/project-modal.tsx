import React from "react";
import { X } from "lucide-react";
import { Project } from "@/types";
import { getIconForTech } from "@/utils/iconMapping";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden"
        style={{
          backdropFilter: 'blur(20px)',
          background: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid rgba(200, 200, 200, 0.3)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white/90 transition-colors duration-200"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Modal Body - No Scroll */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span 
                className="px-3 py-1 rounded-full text-xs font-medium text-gray-700"
                style={{
                  backdropFilter: 'blur(10px)',
                  background: 'rgba(255, 255, 255, 0.6)',
                  border: '1px solid rgba(200, 200, 200, 0.3)'
                }}
              >
                {project.category}
              </span>
              {/* AI Tag - show for projects that have AI in technologies */}
              {project.technologies.includes("AI") && (
                <span 
                  className="px-3 py-1 rounded-full text-xs font-medium text-gray-700"
                  style={{
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid rgba(200, 200, 200, 0.3)'
                  }}
                >
                  AI
                </span>
              )}
              {project.period && (
                <span className="text-sm text-gray-500">{project.period}</span>
              )}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              {project.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Project Image */}
          <div className="mb-6">
            <div 
              className="w-full h-48 md:h-64 rounded-xl overflow-hidden"
              style={{
                backdropFilter: 'blur(15px)',
                background: 'rgba(255, 255, 255, 0.4)',
                border: '1px solid rgba(200, 200, 200, 0.25)'
              }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies
                .filter((tech) => tech !== "AI" && tech !== "Full-Stack Development")
                .map((tech) => (
                <div key={tech} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 border border-gray-200/60">
                  <div className="w-5 h-5 flex items-center justify-center">
                    {getIconForTech(tech)}
                  </div>
                  <span className="text-sm font-medium text-gray-800">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {project.details.slice(0, 4).map((detail, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;