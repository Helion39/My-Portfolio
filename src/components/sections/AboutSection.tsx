import { skills } from "@/data/skills";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12" style={{backgroundColor: '#f1f3f4'}}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            I am an Information Technology enthusiast currently studying Informatics at President University, passionate about building digital experiences that are functional, intuitive, and secure. I believe that the best technology feels both effortless and safe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6">Core Skills</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-gray-800">Analytical Thinking</strong> - Skilled in evaluating complex systems, identifying inconsistencies, and making data-driven decisions through structured problem-solving approaches.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-gray-800">Team Collaboration</strong> - Collaborates effectively in diverse teams by contributing ideas, actively listening, and adapting to dynamic group settings.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-gray-800">Leadership & Initiative</strong> - Takes ownership in team environments—planning activities, guiding peers, and driving collective goals with accountability.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-gray-800">Adaptability & Growth Mindset</strong> - Quick to grasp new tools and concepts across domains. Embraces unfamiliar challenges with flexibility and a commitment to continuous learning.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6">Core Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    backdropFilter: 'blur(15px)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '3px solid rgba(210, 210, 210, 0.8)'
                  }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <div className="text-lg">{skill.icon}</div>
                  </div>
                  <span className="text-gray-800 font-medium text-sm">{skill.name}</span>
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