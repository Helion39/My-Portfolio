import { FlipWords } from "@/components/ui/flip-words";

const HeroSection = () => {
  const specialties = ["Web Development", "Cybersecurity", "UI/UX Design"];

  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12" style={{backgroundColor: '#f8f9fa'}}>
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
              <div className="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium min-h-[32px] md:min-h-[40px] flex items-center">
                <FlipWords 
                  words={specialties} 
                  duration={2500}
                  className="text-gray-500 font-medium px-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;