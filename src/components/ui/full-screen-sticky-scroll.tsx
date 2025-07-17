"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
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

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map(
      (_, index) => index / (content.length - 1) // Adjusted for better accuracy
    );
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

  return (
    <motion.div
      ref={ref}
      className="relative flex justify-center space-x-8 p-6 md:space-x-12 md:p-12"
    >
      {/* Left Column: The vertically scrolling text */}
      <div className="relative flex-1 py-12">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-32">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-2xl font-bold text-slate-100 md:text-3xl"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="mt-6 max-w-sm text-lg text-slate-400"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: The sticky card that updates its content */}
      <motion.div
        className={cn(
          "sticky top-20 hidden h-96 w-96 flex-none overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 shadow-xl backdrop-blur-lg lg:block",
          contentClassName
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full w-full"
          >
            {content[activeCard].content ?? null}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};