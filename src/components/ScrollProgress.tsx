"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] pointer-events-none">
      <motion.div
        className="h-full bg-primary origin-left shadow-[0_0_10px_#58d8df]"
        style={{ scaleX }}
      />
      {/* Decorative HUD side markers */}
      <div className="absolute top-0 left-0 flex flex-col space-y-1 p-2 opacity-30">
        <div className="w-4 h-[1px] bg-primary" />
        <div className="w-2 h-[1px] bg-primary" />
      </div>
    </div>
  );
};

export default ScrollProgress;
