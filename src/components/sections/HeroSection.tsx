
import { FlipWords } from "@/components/ui/flip-words";
// Import the illustration from public/png/MeIlust.png
import MeIlust from "@/../public/png/MeIlust.png";

const HeroSection = () => {
  const specialties = ["Web Development", "Cybersecurity", "UI/UX Design"];

  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12" style={{backgroundColor: '#f1f3f4'}}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left side illustration */}
          <div className="hidden md:flex justify-center items-center">
            <img
              src={MeIlust}
              alt="Illustration of Mohammad Nabil Hanif"
              className="w-[320px] h-auto object-contain drop-shadow-xl"
              draggable={false}
            />
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