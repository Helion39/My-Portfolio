"use client";
import React from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
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
  const ref = React.useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map(
      (_, index) => index / (content.length - 1)
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
    <div className="relative grid grid-cols-10 gap-x-4 px-4 lg:gap-x-12 lg:px-12">
      {/* Left Column: Scrolling Text */}
      <div className="col-span-6" ref={ref}>
        <div className="py-[40vh]">
          {content.map((item, index) => (
            // Reduced vertical margin significantly for a tighter scroll
            <div key={item.title + index} className="my-20 lg:my-24">
              <div className="max-w-md">
                <motion.div
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <h2 className="text-2xl font-bold text-foreground md:text-4xl lg:text-5xl">
                    {item.title}
                  </h2>
                  <p className="mt-2 max-w-md text-base text-muted-foreground md:mt-6 md:text-xl">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Sticky Image Placeholder */}
      <div className="col-span-4">
        <div className="sticky top-0 flex h-screen items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                "h-64 w-full rounded-xl border bg-card shadow-lg md:h-96 lg:h-[28rem] lg:rounded-2xl",
                contentClassName
              )}
            >
              {content[activeCard]?.content ?? null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};