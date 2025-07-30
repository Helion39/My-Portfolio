
import { FlipWords } from "@/components/ui/flip-words";
// Import the portrait image from public/png/MePicPort.jpg
import MePicPort from "@/../public/png/MePicPort.jpg";

const HeroSection = () => {
  const specialties = ["Web Development", "Cybersecurity", "UI/UX Design"];

  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12" style={{backgroundColor: '#f1f3f4'}}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left side portrait */}
          <div className="hidden md:flex justify-center items-center">
            <div 
              className="p-4 rounded-2xl drop-shadow-xl"
              style={{
                border: '3px solid rgba(210, 210, 210, 0.8)',
                backdropFilter: 'blur(20px)',
                background: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <img
                src={MePicPort}
                alt="Portrait of Mohammad Nabil Hanif"
                className="w-[320px] h-auto object-contain rounded-xl"
                draggable={false}
              />
            </div>
          </div>
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