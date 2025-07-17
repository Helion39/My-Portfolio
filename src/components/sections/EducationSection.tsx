import { education } from "@/data/education";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Education</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic excellence with focus on Information Technology and cybersecurity
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-gray-600 mb-2">{edu.institution}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    {edu.achievements.map((achievement, index) => (
                      <span key={index} className={`px-3 py-1 rounded-full text-sm font-medium ${
                        achievement.includes('GPA') ? 'bg-green-100 text-green-800' :
                        achievement.includes('Scholarship') ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {achievement}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
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