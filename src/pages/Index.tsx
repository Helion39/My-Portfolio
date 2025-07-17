import { useState, useEffect } from "react";
import Dock from "@/components/Dock";
import { Home, User, Briefcase, MessageSquare } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceScrollSection from "@/components/sections/ExperienceScrollSection";
import StatsSection from "@/components/sections/StatsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dockItems = [
    {
      icon: <Home size={18} />,
      label: "Home",
      onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
    },
    {
      icon: <User size={18} />,
      label: "About",
      onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
    },
    {
      icon: <Briefcase size={18} />,
      label: "Projects",
      onClick: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    },
    {
      icon: <MessageSquare size={18} />,
      label: "Contact",
      onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-full px-12 py-4 shadow-2xl" style={{ minWidth: '600px' }}>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-gray-900 hover:-translate-y-0.5 transition-transform duration-200 cursor-default">
                MNH
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm font-medium">
              {["home", "about", "education", "experience", "projects", "contact"].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`} 
                  className={`relative text-gray-700 hover:text-gray-900 transition-all duration-300 ${
                    activeSection === section ? "text-gray-900" : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <div className={`absolute -bottom-1 left-0 h-0.5 bg-gray-900 transition-all duration-500 ease-out ${
                    activeSection === section ? "w-full" : "w-0"
                  }`}></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <Dock 
          items={dockItems}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>

      {/* All Sections as Components */}
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceScrollSection />
      <StatsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Mohammad Nabil Hanif. Crafted with precision and purpose.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;