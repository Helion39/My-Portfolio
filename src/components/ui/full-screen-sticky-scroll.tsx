"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FullScreenStickyScroll = ({
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
    target: ref,
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
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // An array of subtle background colors for the right card
  const backgroundColors = [
    "from-blue-50 to-slate-50",
    "from-purple-50 to-indigo-50",
    "from-green-50 to-emerald-50",
    "from-orange-50 to-amber-50",
  ];

  return (
    <motion.div
      // Animate the main background to a dark color for a focused feel
      animate={{
        backgroundColor: "#0f172a", // slate-900
      }}
      ref={ref}
      className="relative flex justify-center space-x-8 p-6 md:space-x-12 md:p-12"
    >
      {/* Left Column: Scrolling Text */}
      <div className="relative flex-1 items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-24 md:my-32">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                className="text-2xl font-bold text-slate-100 md:text-3xl"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                className="mt-6 max-w-sm text-lg text-slate-300 md:mt-8"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          {/* Spacer at the end to ensure the last card can be fully viewed */}
          <div className="h-48" />
        </div>
      </div>

      {/* Right Column: Sticky Card */}
      <motion.div
        // Animate the background gradient of the card to match the active content
        animate={{
          background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
        }}
        className={cn(
          "sticky top-20 hidden h-80 w-96 flex-none overflow-hidden rounded-lg border border-gray-600 shadow-xl lg:block",
          backgroundColors[activeCard % backgroundColors.length], // Dynamically apply the background color class
          contentClassName
        )}
      >
        {/* We use a key here to force a re-render with a fade animation */}
        <div key={activeCard} className="h-full w-full animate-fade-in">
            {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </motion.div>
  );
};