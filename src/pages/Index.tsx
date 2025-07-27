import MobileDock from "@/components/MobileDock";
import { Home, User, Briefcase, MessageSquare, GraduationCap, Github } from "lucide-react";
import NavbarDemo from "@/components/ui/resizable-navbar-demo";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceScrollSection from "@/components/sections/ExperienceScrollSection";


import ProjectsSection from "@/components/sections/ProjectsSection";
import ProjectCardsSection from "@/components/sections/ProjectCardsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {

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
      icon: <GraduationCap size={18} />,
      label: "Education",
      onClick: () => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })
    },
    {
      icon: <Briefcase size={18} />,
      label: "Projects",
      onClick: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    },
    {
      icon: <Github size={18} />,
      label: "Contact",
      onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background: '#f1f3f4',
        minHeight: '100vh',
      }}
    >
      {/* Desktop Navigation - Original Resizable Navbar */}
      <div className="hidden md:block">
        <NavbarDemo />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <MobileDock items={dockItems} />
      </div>

      {/* All Sections as Components */}
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceScrollSection />
      <ProjectsSection />
      <ProjectCardsSection />
      <ContactSection />
      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-gray-200" style={{backgroundColor: '#f1f3f4'}}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Mohammad Nabil Hanif. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;