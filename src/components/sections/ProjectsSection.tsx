import CarouselDemo from "@/components/ui/carousel-demo";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12" style={{backgroundColor: '#f1f3f4'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of work spanning web development, cybersecurity, and design
          </p>
        </div>

        <CarouselDemo />
      </div>
    </section>
  );
};

export default ProjectsSection;