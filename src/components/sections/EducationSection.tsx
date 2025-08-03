import { education } from "@/data/education";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12" style={{backgroundColor: '#f1f3f4'}}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Education</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic excellence in Information Technology and Cybersecurity
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu) => (
            <div 
              key={edu.id} 
              className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.01]"
              style={{
                backdropFilter: 'blur(20px)',
                background: 'rgba(255, 255, 255, 0.2)',
                border: '3px solid rgba(210, 210, 210, 0.8)'
              }}
            >
              <div className="flex flex-col space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600 mt-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mt-1">{edu.period}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, index) => {
                    const style = {
                      background: 'rgba(59, 130, 246, 0.15)',
                      color: '#3B82F6',
                      border: '2px solid rgba(59, 130, 246, 0.3)'
                    };

                    return (
                      <span 
                        key={index} 
                        className="px-4 py-2 rounded-full text-sm font-medium"
                        style={style}
                      >
                        {achievement}
                      </span>
                    );
                  })}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;