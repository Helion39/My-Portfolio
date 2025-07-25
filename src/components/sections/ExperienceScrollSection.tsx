import React from "react";
import { FullScreenStickyScroll } from "@/components/ui/full-screen-sticky-scroll";

const ExperienceScrollSection = () => {
  const experienceContent = [
    {
      title: "Website Tester",
      description: "President University CTF Cybersecurity Event (Jan 2025 - Feb 2025). Tested a cybersecurity-focused CTF website for usability and vulnerabilities. Identified bugs impacting navigation flow and delivered feedback for improving site security and performance.",
      content: (
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 text-gray-700 border border-gray-100">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">CTF</span>
            </div>
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
      title: "Game Tester",
      description: "Independent (Dec 2024 - Feb 2025). Tested game performance and identified over 20 bugs in 'Do You Copy?' and 'The Leeds Murder.' Assessed gameplay performance across specific hardware setups to verify performance in different scenarios and events. Reported and documented bugs to improve gameplay stability.",
      content: (
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-black">
          <img
            src="/TheLeedsMurder.webp"
            alt="The Leeds Murder Game"
            className="h-full w-full object-contain p-4"
          />
        </div>
      ),
    },
    {
      title: "UI/UX Designer",
      description: "Nuri via Rakamin Academy (May 2025 - Jun 2025). Completed a 4-week internship at Nuri, a joint venture e-commerce company. Applied UI/UX design principles including persona creation, user flow, wireframing, and prototyping. Conducted UX research using Google Analytics and delivered design documentation with high-fidelity prototypes.",
      content: (
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 text-gray-700 border border-gray-100">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-sm">UX</span>
            </div>
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
      description: "President University Nippon Community (PUNICO) (Oct 2024 - Present). A cultural student organization focused on promoting Japanese culture and creative arts. Planned and led weekly Seiyuu Circle sessions focused on voice acting practice through interactive games and activities, engaging 25–30 active members.",
      content: (
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 text-gray-700 border border-gray-100">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-sm">声</span>
            </div>
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
    <section id="experience" style={{backgroundColor: '#f1f3f4'}}>
      <div className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional journey spanning cybersecurity, development, and
            leadership
          </p>
        </div>
      </div>
      <FullScreenStickyScroll content={experienceContent} />
    </section>
  );
};

export default ExperienceScrollSection;