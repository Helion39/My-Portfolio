const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="hidden md:block"></div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
                Mohammad Nabil Hanif
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-light">
                Full-Stack Developer & Systems Analyst
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-4 text-sm md:text-base text-gray-500 font-medium">
                <span>Web Development</span>
                <span className="text-gray-300">•</span>
                <span>Cybersecurity</span>
                <span className="text-gray-300">•</span>
                <span>UI/UX Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;