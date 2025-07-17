import { experiences } from "@/data/experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional journey spanning cybersecurity, development, and leadership
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;