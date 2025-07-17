import { FullScreenStickyScroll } from "@/components/ui/full-screen-sticky-scroll";
import { Shield, Gamepad2, Palette, Users } from "lucide-react";

const ExperienceScrollSection = () => {
  const experienceContent = [
    {
      title: "Website Tester",
      description: "President University CTF Cybersecurity Event. Tested a cybersecurity-focused CTF website for usability and vulnerabilities, delivering feedback for improving site security and performance.",
      content: (
        <div className="flex h-full w-full items-center justify-center p-6 bg-background text-card-foreground">
          <div className="text-center">
            <Shield className="mx-auto mb-4 h-20 w-20 text-blue-600" />
            <h3 className="mb-2 text-lg font-semibold">Security Testing</h3>
            <p className="mb-4 text-sm text-muted-foreground">CTF Platform</p>
            <div className="space-y-1 text-left text-xs text-muted-foreground">
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
      description: "Independent. Tested performance and identified over 20 bugs in 'Do You Copy?' and 'The Leeds Murder,' providing structured feedback to improve gameplay and stability.",
      content: (
        <div className="flex h-full w-full items-center justify-center p-6 bg-background text-card-foreground">
          <div className="text-center">
            <Gamepad2 className="mx-auto mb-4 h-20 w-20 text-purple-600" />
            <h3 className="mb-2 text-lg font-semibold">Game Testing</h3>
            <p className="mb-4 text-sm text-muted-foreground">Quality Assurance</p>
            <div className="space-y-1 text-left text-xs text-muted-foreground">
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
      description: "Internship at Nuri. Applied UI/UX principles including persona creation, user flow, wireframing, and prototyping, using Google Analytics to support design decisions.",
       content: (
        <div className="flex h-full w-full items-center justify-center p-6 bg-background text-card-foreground">
          <div className="text-center">
            <Palette className="mx-auto mb-4 h-20 w-20 text-green-600" />
            <h3 className="mb-2 text-lg font-semibold">UI/UX Design</h3>
            <p className="mb-4 text-sm text-muted-foreground">E-commerce Platform</p>
            <div className="space-y-1 text-left text-xs text-muted-foreground">
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
      description: "President University Nippon Community. Planned and led weekly voice acting sessions for 25–30 members, enhancing vocal expression and character delivery.",
      content: (
        <div className="flex h-full w-full items-center justify-center p-6 bg-background text-card-foreground">
          <div className="text-center">
            <Users className="mx-auto mb-4 h-20 w-20 text-orange-600" />
            <h3 className="mb-2 text-lg font-semibold">Leadership</h3>
            <p className="mb-4 text-sm text-muted-foreground">Community Building</p>
            <div className="space-y-1 text-left text-xs text-muted-foreground">
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
    <section id="experience" className="bg-background">
      <FullScreenStickyScroll 
        content={experienceContent}
        header={{
          title: "Experience",
          subtitle: "Professional journey spanning cybersecurity, development, and leadership"
        }}
      />
    </section>
  );
};

export default ExperienceScrollSection;