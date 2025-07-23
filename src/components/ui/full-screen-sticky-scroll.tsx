"use client";
import React from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const FullScreenStickyScroll = ({
  content,
  contentClassName,
  header,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
  header?: {
    title: string;
    subtitle: string;
  };
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [expandedCard, setExpandedCard] = React.useState<number | null>(null);
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

  const handleMobileCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Helper function to truncate text for mobile
  const getTruncatedDescription = (description: string, isMobile: boolean = false) => {
    if (!isMobile) return description;
    
    // Extract just the role and company/dates for mobile
    const parts = description.split('.');
    if (parts.length > 0) {
      return parts[0] + '.';
    }
    return description.substring(0, 100) + '...';
  };

  return (
    <div className="relative">
      {/* Mobile Layout - Clean Clickable Items */}
      <div className="block lg:hidden">
        <div ref={ref}>
          <div className="py-4 px-4">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-12">
                {/* Clickable Header - Clean Design */}
                <div 
                  className="cursor-pointer py-4 hover:bg-gray-50 transition-colors"
                  onClick={() => handleMobileCardClick(index)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-foreground mb-3">
                        {item.title}
                      </h2>
                      <p className="text-base text-muted-foreground">
                        {getTruncatedDescription(item.description, true)}
                      </p>
                    </div>
                    <div className="ml-6 mt-1 text-gray-400">
                      <svg 
                        className={`w-6 h-6 transition-transform ${expandedCard === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-8">
                        {/* Full Description */}
                        <p className="text-base text-muted-foreground leading-relaxed mb-6">
                          {item.description}
                        </p>
                        
                        {/* Content/Image */}
                        <div className={cn(
                          "aspect-[4/3] w-full rounded-xl border border-border bg-card/80 backdrop-blur-sm",
                          contentClassName
                        )}>
                          {item.content ?? null}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout - Two Columns with Images */}
      <div className="hidden lg:grid lg:grid-cols-10 lg:gap-x-6 lg:px-12">
        {/* Left Column: Scrolling Text */}
        <div className="col-span-6" ref={ref}>
          <div className="py-[25vh]">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20 lg:my-24">
                <div className="max-w-3xl">
                  <motion.div
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <h2 className="text-3xl font-bold text-foreground md:text-5xl lg:text-6xl xl:text-7xl mb-8 md:mb-10">
                      {item.title}
                    </h2>
                    <p className="text-lg text-muted-foreground md:text-2xl lg:text-3xl leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Image Placeholder */}
        <div className="col-span-4 hidden">
          <div className="sticky top-0 flex h-screen items-center justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(
                  "aspect-[4/3] w-full max-w-2xl rounded-xl border border-border bg-card/80 backdrop-blur-sm lg:rounded-2xl",
                  contentClassName
                )}
              >
                {content[activeCard]?.content ?? null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};