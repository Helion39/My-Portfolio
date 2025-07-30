
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { projectImages } from "@/data/projectImages";
import { getIconForTech } from "@/utils/iconMapping";
import ProjectSlideshow from "@/components/ui/project-slideshow";

const ProjectDetail = () => {
  const { id } = useParams();





  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-6 left-6 z-50">
        <Button 
          asChild
          variant="outline"
          className="backdrop-blur-md bg-white/80 border border-gray-200/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              {project.title}
            </h1>
          </div>
          
          <ProjectSlideshow 
            images={projectImages[project.id] || [project.image]}
            title={project.title}
            projectId={project.id}
          />
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Project Overview */}
          <div>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Project Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* My Role & Contribution */}
          <div>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">My Role & Contribution</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.role}
            </p>
          </div>

          {/* Key Details */}
          <div>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Key Accomplishments</h2>
            <div className="space-y-4">
              {project.details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.technologies.map((tech) => (
                <div key={tech} className="flex items-center space-x-3 p-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="text-lg">{getIconForTech(tech)}</div>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-6">
            Interested in learning more about this project?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="mailto:mohammad.n.hanif@gmail.com" className="flex items-center space-x-2">
                <span>Get In Touch</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
