import { projects } from "@/data/projects";
import { useState } from "react";
import ProjectModal from "@/components/ui/project-modal";
import { Project } from "@/types";

const ProjectCardsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="project-cards" className="py-20 px-6 md:px-12" style={{backgroundColor: '#f1f3f4'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover my technical and creative projects, from current builds to completed work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl p-6 flex flex-col transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{
                backdropFilter: 'blur(20px)',
                background: 'rgba(255, 255, 255, 0.2)',
                border: '3px solid rgba(210, 210, 210, 0.8)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)'
              }}
              onClick={() => handleProjectClick(project)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              
              {/* Project Image */}
              <div 
                className="relative w-full h-48 mb-6 flex items-center justify-center overflow-hidden rounded-xl group/image"
                style={{
                  backdropFilter: 'blur(15px)',
                  background: 'rgba(255, 255, 255, 0.25)',
                  border: '3px solid rgba(210, 210, 210, 0.8)'
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-contain h-full max-w-full transition-transform duration-300 group-hover:scale-105" 
                />
                {(project.id === 'safe-elderly-care' || project.id === 'banddit-reddit-clone') && (
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <span className="text-white text-lg font-semibold">Coming Soon</span>
                  </div>
                )}
              </div>
              
              {/* Category Badge */}
              <div className="mb-3 flex items-center gap-2">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium text-gray-700"
                  style={{
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255, 255, 255, 0.3)',
                    border: '3px solid rgba(210, 210, 210, 0.8)'
                  }}
                >
                  {project.category}
                </span>
                {/* AI Tag - show for projects that have AI in technologies */}
                {project.technologies.includes("AI") && (
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium text-gray-700"
                    style={{
                      backdropFilter: 'blur(10px)',
                      background: 'rgba(255, 255, 255, 0.3)',
                      border: '3px solid rgba(210, 210, 210, 0.8)'
                    }}
                  >
                    AI
                  </span>
                )}
              </div>
              
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-200">
                {project.title}
              </h3>
              
              {/* Project Period */}
              {project.period && (
                <p className="text-xs text-gray-500 mb-2">{project.period}</p>
              )}
              
              {/* Project Description */}
              <p className="text-gray-700 mb-6 text-sm leading-relaxed line-clamp-3 flex-grow">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies
                  .filter((tech) => tech !== "AI" && tech !== "Full-Stack Development")
                  .map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 rounded-md text-xs font-medium text-gray-600"
                    style={{
                      backdropFilter: 'blur(10px)',
                      background: 'rgba(255, 255, 255, 0.25)',
                      border: '3px solid rgba(210, 210, 210, 0.8)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <button 
                  className="flex-1 px-4 py-2 rounded-lg text-gray-600 font-medium text-sm transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255, 255, 255, 0.25)',
                    border: '3px solid rgba(210, 210, 210, 0.8)'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project);
                  }}
                >
                  View Details
                </button>
                {(project.id === 'safe-elderly-care' || project.id === 'banddit-reddit-clone') ? (
                  <button 
                    className="px-4 py-2 rounded-lg text-gray-600 font-medium text-sm cursor-default"
                    style={{
                      backdropFilter: 'blur(10px)',
                      background: 'rgba(255, 255, 255, 0.15)',
                      border: '3px solid rgba(210, 210, 210, 0.8)'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Coming Soon
                  </button>
                ) : (
                  <button 
                    className="px-4 py-2 rounded-lg text-white font-medium text-sm transition-all duration-200 hover:scale-[1.02] flex items-center gap-2"
                    style={{
                      backdropFilter: 'blur(10px)',
                      background: '#1f2937',
                      border: '3px solid rgba(210, 210, 210, 0.8)'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    GitHub
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectCardsSection;
