import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { getIconForTech } from "@/utils/iconMapping";
import ProjectSlideshow from "@/components/ui/project-slideshow";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  if (!isOpen || !project) return null;

  const handleImageClick = () => {
    setIsImageZoomed(true);
  };

  const handleZoomClose = () => {
    setIsImageZoomed(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-6xl max-h-[90vh] rounded-2xl lg:overflow-hidden overflow-hidden"
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

        {/* Modal Body - Scrollable on mobile/tablet, fixed on desktop */}
        <div className="p-8 pb-12 lg:overflow-hidden overflow-y-auto max-h-[calc(90vh-2rem)]">
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

          {/* Project Media (Video/Image/Slideshow) */}
          <div className="mb-6">
            {project.video ? (
              <div 
                className="w-full rounded-xl overflow-hidden"
                style={{
                  backdropFilter: 'blur(15px)',
                  background: 'rgba(255, 255, 255, 0.4)',
                  border: ['frm-platform', 'food-ordering', 'safe-elderly-care'].includes(project.id) 
                    ? 'none' 
                    : '3px solid rgba(210, 210, 210, 0.8)'
                }}
              >
                <video 
                  src={project.video}
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full h-auto max-h-96 object-contain"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : project.images && project.images.length > 1 ? (
              <ProjectSlideshow 
                images={project.images} 
                title={project.title}
                projectId={project.id}
              />
            ) : (
              <div 
                className="w-full h-48 md:h-48 rounded-xl overflow-hidden cursor-pointer"
                style={{
                  backdropFilter: 'blur(15px)',
                  background: 'rgba(255, 255, 255, 0.4)',
                  border: ['frm-platform', 'food-ordering', 'safe-elderly-care'].includes(project.id) 
                    ? 'none' 
                    : '3px solid rgba(210, 210, 210, 0.8)'
                }}
                onClick={handleImageClick}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-200 hover:scale-105"
                />
              </div>
            )}
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
              {project.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal - Matching ProjectSlideshow Style */}
      <AnimatePresence>
        {isImageZoomed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleZoomClose}
          >
            {/* Blurred Background - Matching ProjectSlideshow */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
            
            {/* Zoomed Image - Matching ProjectSlideshow Layout */}
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh] z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain rounded-xl shadow-2xl"
              />
              
              {/* Close hint - Matching ProjectSlideshow Position */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                Click outside to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectModal;