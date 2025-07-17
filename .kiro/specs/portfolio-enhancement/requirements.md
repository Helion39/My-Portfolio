# Requirements Document

## Introduction

This feature focuses on enhancing Mohammad Nabil Hanif's portfolio website to better reflect his actual CV data, improve user experience, and showcase his professional capabilities more effectively. The current portfolio has a solid foundation but needs content alignment, visual improvements, and additional sections to properly represent his background as a 6th-semester IT student with strong interests in cybersecurity, system analysis, and web development.

## Requirements

### Requirement 1

**User Story:** As a potential employer or collaborator, I want to see accurate and comprehensive information about Mohammad's background, so that I can properly evaluate his qualifications and experience.

#### Acceptance Criteria

1. WHEN I visit the portfolio THEN the hero section SHALL display Mohammad's correct title as "Information Technology Student & Cybersecurity Enthusiast"
2. WHEN I view the about section THEN it SHALL include his current GPA (3.80/4.00) and university information
3. WHEN I review his experience THEN it SHALL accurately reflect all positions from his CV including dates and descriptions
4. WHEN I check his education THEN it SHALL show both his current degree program and the KADA bootcamp enrollment

### Requirement 2

**User Story:** As a recruiter in the cybersecurity field, I want to understand Mohammad's security expertise and hands-on experience, so that I can assess his fit for cybersecurity roles.

#### Acceptance Criteria

1. WHEN I view his skills section THEN it SHALL prominently feature cybersecurity tools (Wireshark, Network Miner, VirusTotal)
2. WHEN I read his project descriptions THEN they SHALL highlight security-focused work and forensic analysis experience
3. WHEN I review his experience THEN it SHALL emphasize his website testing and vulnerability assessment work
4. IF I'm interested in his security background THEN the portfolio SHALL provide clear evidence of practical cybersecurity skills

### Requirement 3

**User Story:** As a potential client or employer, I want to easily contact Mohammad and view his professional profiles, so that I can reach out for opportunities or collaborations.

#### Acceptance Criteria

1. WHEN I want to contact Mohammad THEN the contact section SHALL display his actual phone number (+6282246202003) and email (nabilhanif39@gmail.com)
2. WHEN I look for his professional presence THEN it SHALL include his LinkedIn profile link
3. WHEN I view his location THEN it SHALL show "Tangerang Selatan" as specified in his CV
4. WHEN I want to connect THEN all contact information SHALL be easily accessible and properly formatted

### Requirement 4

**User Story:** As a visitor interested in Mohammad's technical projects, I want to see detailed information about his work, so that I can understand his technical capabilities and problem-solving approach.

#### Acceptance Criteria

1. WHEN I view the projects section THEN it SHALL include all major projects from his CV with accurate descriptions
2. WHEN I click on a project THEN it SHALL show detailed technical information, technologies used, and his specific contributions
3. WHEN I review his Android development work THEN it SHALL highlight the Chatzing app with Firebase integration and hardware features
4. WHEN I examine his web development projects THEN they SHALL demonstrate full-stack capabilities with PHP, MySQL, and modern frameworks

### Requirement 5

**User Story:** As a hiring manager, I want to understand Mohammad's leadership and organizational experience, so that I can evaluate his potential for team-based roles.

#### Acceptance Criteria

1. WHEN I review his experience THEN it SHALL include his role as Vice Head of Seiyuu Circle at PUNICO
2. WHEN I examine his project work THEN it SHALL highlight his Vice Project Manager role in the BRIGHT social impact project
3. WHEN I view his achievements THEN it SHALL mention his marketing leadership in the Bancimo business simulation
4. IF I'm assessing leadership potential THEN the portfolio SHALL demonstrate his collaborative and management experience

### Requirement 6

**User Story:** As a mobile user, I want the portfolio to work seamlessly on my device, so that I can review Mohammad's qualifications while on the go.

#### Acceptance Criteria

1. WHEN I access the portfolio on mobile THEN all sections SHALL be fully responsive and readable
2. WHEN I navigate on mobile THEN the dock navigation SHALL work smoothly with appropriate touch targets
3. WHEN I view project details on mobile THEN images and text SHALL be properly formatted for small screens
4. WHEN I interact with contact information on mobile THEN phone numbers and emails SHALL be clickable for direct action

### Requirement 7

**User Story:** As a visitor, I want the portfolio to load quickly and provide smooth interactions, so that I have a positive browsing experience.

#### Acceptance Criteria

1. WHEN I visit any page THEN it SHALL load within 3 seconds on standard internet connections
2. WHEN I scroll through sections THEN animations SHALL be smooth and not cause performance issues
3. WHEN I navigate between sections THEN transitions SHALL be fluid and responsive
4. WHEN I interact with elements THEN hover effects and clicks SHALL provide immediate visual feedback

### Requirement 8

**User Story:** As a visitor scrolling through the experience section, I want an immersive sticky scroll experience, so that I can focus on each experience item without distractions.

#### Acceptance Criteria

1. WHEN I scroll into the experience section THEN it SHALL take up the full viewport height and "trap" my scroll
2. WHEN I continue scrolling within the experience section THEN individual experience items SHALL appear and disappear with smooth animations
3. WHEN I'm in the experience section THEN I SHALL NOT be able to scroll to other sections until I've completed the experience scroll sequence
4. WHEN I finish scrolling through all experience items THEN the scroll SHALL naturally continue to the next section
5. WHEN I scroll back up THEN the sticky experience section SHALL work in reverse, showing experience items in reverse order

### Requirement 9

**User Story:** As someone evaluating Mohammad's design skills, I want to see a visually appealing and professional portfolio, so that I can assess his attention to detail and aesthetic sense.

#### Acceptance Criteria

1. WHEN I view the portfolio THEN it SHALL maintain consistent visual hierarchy and typography throughout
2. WHEN I examine the layout THEN it SHALL demonstrate good use of whitespace and visual balance
3. WHEN I review color choices THEN they SHALL be professional and enhance readability
4. WHEN I assess the overall design THEN it SHALL reflect modern web design principles and best practices


## Sticky Scroll


You are given a task to integrate a React component into your codebase.
Please verify your project has the following setup:
- shadcn/ui project structure
- Tailwind CSS v4.0
- TypeScript

If any of these are missing, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
File location: components/sticky-scroll-reveal-demo.tsx

File content: "use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}


File location: components/ui/sticky-scroll-reveal.tsx

File content: "use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};




"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
 
 
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}

Installation
CLI
Manual
Install dependencies
npm i motion clsx tailwind-merge
Copy
Add util file
lib/utils.ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
Copy

Copy the source code
components/ui/sticky-scroll-reveal.tsx

"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
 
export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;
 
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });
 
  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];
 
  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );
 
  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);
 
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};