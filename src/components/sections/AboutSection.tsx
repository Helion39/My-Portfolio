import { skills } from "@/data/skills";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12" style={{backgroundColor: '#f8f9fa'}}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            I am an Information Technology scholar at President University (GPA 3.80/4.00) passionate about building digital experiences that are functional, intuitive, and secure. My work is driven by a belief that the best technology feels both effortless and safe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6">My Approach</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">
                  User-focused design drives every interface decision, informed by real data and user research from my experience at Nuri.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">
                  Security-first engineering ensures robust systems through proactive vulnerability testing and forensic analysis.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">
                  Collaborative leadership builds stronger teams, demonstrated through community building at PUNICO and social impact work with BRIGHT.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6">Core Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-gray-100">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <div className="text-lg">{skill.icon}</div>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;