import React from "react";
import { FullScreenStickyScroll } from "@/components/ui/full-screen-sticky-scroll";
import { Shield, Gamepad2, Palette, Users } from "lucide-react";

const ExperienceScrollSection = () => {
  const experienceContent = [
    {
      title: "Website Tester",
      description: "President University CTF Cybersecurity Event (Jan 2025 - Feb 2025). Tested a cybersecurity-focused CTF website for usability and vulnerabilities. Identified bugs impacting usability and navigation flow. Assessed responsiveness to ensure compatibility and smooth usage. Simulated real-user interactions to test platform reliability. Delivered feedback for improving site security and performance.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-slate-50 text-gray-700 border border-gray-100 rounded-lg">
          <div className="text-center p-6">
            <Shield className="w-20 h-20 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">Security Testing</h3>
            <p className="text-sm text-gray-600 mb-2">CTF Platform</p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>• Vulnerability Assessment</p>
              <p>• Usability Testing</p>
              <p>• Platform Reliability</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Game Tester (Quality Assistance)",
      description: "Independent (Dec 2024 - Feb 2025). Tested game performance and identified bugs in 'Do You Copy?' and 'The Leeds Murder.' Assessed gameplay performance across specific hardware setups. Reported and documented over 20 bugs across two game titles. Conducted functional tests to verify mechanics and story flow. Provided structured feedback to improve gameplay and stability.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 text-gray-700 border border-gray-100 rounded-lg">
          <div className="text-center p-6">
            <Gamepad2 className="w-20 h-20 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">Game Testing</h3>
            <p className="text-sm text-gray-600 mb-2">Quality Assurance</p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>• 20+ Bugs Documented</p>
              <p>• Performance Testing</p>
              <p>• Gameplay Mechanics</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "UI/UX Designer",
      description: "Nuri via Rakamin Academy (May 2025 - Jun 2025). Completed a 4-week internship at Nuri, a joint venture e-commerce company under Smartfren and Whale Cloud Technology (Alibaba Group partner). Applied UI/UX design principles through tasks including persona creation, user flow, wireframing, and prototyping. Conducted UX research and data analysis using Google Analytics to support design decisions. Delivered a final project consisting of design thinking documentation, a functional wireframe, and a high-fidelity prototype.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 text-gray-700 border border-gray-100 rounded-lg">
          <div className="text-center p-6">
            <Palette className="w-20 h-20 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">UI/UX Design</h3>
            <p className="text-sm text-gray-600 mb-2">E-commerce Platform</p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>• User Research</p>
              <p>• Wireframing & Prototyping</p>
              <p>• Google Analytics</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Vice Head – Seiyuu Circle",
      description: "President University Nippon Community (PUNICO) (Oct 2024 - Present). A cultural student organization at President University focused on promoting Japanese culture, language, and creative arts through community events and interest-based circles. Planned and led weekly Seiyuu Circle sessions focused on voice acting practice through interactive games and activities. Facilitated voice-over exercises, collaborative discussions, and performance challenges to enhance vocal expression and character delivery, engaging 25–30 active members.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 text-gray-700 border border-gray-100 rounded-lg">
          <div className="text-center p-6">
            <Users className="w-20 h-20 text-orange-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">Leadership</h3>
            <p className="text-sm text-gray-600 mb-2">Community Building</p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>• 25-30 Active Members</p>
              <p>• Voice Acting Sessions</p>
              <p>• Cultural Activities</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="bg-white">
      {/* Section Header */}
      <div className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional journey spanning cybersecurity, development, and leadership
          </p>
        </div>
      </div>
      
      {/* Full-Screen Sticky Experience */}
      <FullScreenStickyScroll content={experienceContent} />
    </section>
  );
};

export default ExperienceScrollSection;