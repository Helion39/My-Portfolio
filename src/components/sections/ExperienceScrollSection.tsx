import React from "react";
import { FullScreenStickyScroll } from "@/components/ui/full-screen-sticky-scroll";

const ExperienceScrollSection = () => {
  const experienceContent = [
    {
      title: "Website Tester",
      description: "President University CTF Cybersecurity Event. Tested a cybersecurity-focused CTF website for usability and vulnerabilities, delivering feedback for improving site security and performance.",
      content: (
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
          <p className="text-muted-foreground">// Image Placeholder 1</p>
        </div>
      ),
    },
    {
      title: "Game Tester",
      description: "Independent. Tested performance and identified over 20 bugs in 'Do You Copy?' and 'The Leeds Murder,' providing structured feedback to improve gameplay and stability.",
      content: (
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
          <p className="text-muted-foreground">// Image Placeholder 2</p>
        </div>
      ),
    },
    {
      title: "UI/UX Designer",
      description: "Internship at Nuri. Applied UI/UX principles including persona creation, user flow, wireframing, and prototyping, using Google Analytics to support design decisions.",
      content: (
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
          <p className="text-muted-foreground">// Image Placeholder 3</p>
        </div>
      ),
    },
    {
      title: "Vice Head – Seiyuu Circle",
      description: "President University Nippon Community (PUNICO). Planned and led weekly voice acting sessions for 25–30 members, enhancing vocal expression and character delivery.",
      content: (
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
          <p className="text-muted-foreground">// Image Placeholder 4</p>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="bg-gray-50">
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