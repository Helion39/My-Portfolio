import { experiences } from "@/data/experience";
import { Shield, Gamepad2, Palette, Users } from "lucide-react";

const ExperienceScrollSection = () => {
  return (
    <section id="experience" style={{backgroundColor: '#f1f3f4'}}>
      <div className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Work Experiences</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional journey through cybersecurity, development, and leadership roles across various organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backdropFilter: 'blur(20px)',
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '3px solid rgba(210, 210, 210, 0.8)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)'
                }}
              >
                {/* Company Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-gray-700 font-medium text-sm mb-2">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Company Icon */}
                  <div className="flex items-center">
                    {/* Company icons without container */}
                    {exp.company.includes('CTF Cybersecurity') && (
                      <Shield className="w-6 h-6 text-gray-600" />
                    )}
                    {exp.company.includes('Independent') && (
                      <Gamepad2 className="w-6 h-6 text-gray-600" />
                    )}
                    {exp.company.includes('Nuri') && (
                      <Palette className="w-6 h-6 text-gray-600" />
                    )}
                    {exp.company.includes('PUNICO') && (
                      <Users className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Timeline indicator */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-xs text-gray-500">
                    {exp.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceScrollSection;