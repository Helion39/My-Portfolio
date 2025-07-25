import { education } from "@/data/education";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12" style={{backgroundColor: '#f1f3f4'}}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Education</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic excellence with focus on Information Technology and cybersecurity
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu) => (
            <div 
              key={edu.id} 
              className="rounded-2xl p-8 transition-all duration-300 hover:scale-[1.01]"
              style={{
                backdropFilter: 'blur(20px)',
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(200, 200, 200, 0.3)'
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-gray-600 mb-2">{edu.institution}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    {edu.achievements.map((achievement, index) => (
                      <span 
                        key={index} 
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          achievement.includes('GPA') ? 'text-green-800' :
                          achievement.includes('Scholarship') ? 'text-blue-800' :
                          'text-purple-800'
                        }`}
                        style={{
                          backdropFilter: 'blur(10px)',
                          background: achievement.includes('GPA') ? 'rgba(34, 197, 94, 0.15)' :
                                     achievement.includes('Scholarship') ? 'rgba(59, 130, 246, 0.15)' :
                                     'rgba(147, 51, 234, 0.15)',
                          border: `1px solid ${achievement.includes('GPA') ? 'rgba(34, 197, 94, 0.25)' :
                                              achievement.includes('Scholarship') ? 'rgba(59, 130, 246, 0.25)' :
                                              'rgba(147, 51, 234, 0.25)'}`
                        }}
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
                <span className="text-sm text-gray-500 mt-4 md:mt-0">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;