import { experiences } from "@/data/experience";
import { FaGamepad, FaShieldAlt, FaUsers } from "react-icons/fa";
import { MdBrush } from "react-icons/md";

const getExperienceIcon = (id: string): JSX.Element => {
  switch (id) {
    case "website-tester":
      return <FaShieldAlt className="w-5 h-5 text-gray-600" />;
    case "game-tester":
      return <FaGamepad className="w-6 h-6 text-gray-600" />;
    case "ui-ux-designer":
      return <MdBrush className="w-5 h-5 text-gray-600" />;
    case "vice-head-punico":
      return <FaUsers className="w-5 h-5 text-gray-600" />;
    default:
      return <div className="w-5 h-5 bg-gray-600 rounded-sm"></div>;
  }
};

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
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                  <div className="flex items-center justify-center w-8 h-8">
                    {getExperienceIcon(exp.id)}
                  </div>
                </div>
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