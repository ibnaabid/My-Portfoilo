"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">

      {/* Pure Dark Base */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Top Left — Red Glow (navbar color match) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[150px]"
        style={{ backgroundColor: "rgba(230, 33, 41, 0.06)" }}
      />

      {/* Bottom Right — Dark Red */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -80, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[150px]"
        style={{ backgroundColor: "rgba(180, 20, 30, 0.05)" }}
      />

      {/* Center — Very Subtle */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
        style={{
          background: "radial-gradient(circle at center, rgba(230, 33, 41, 0.03) 0%, transparent 60%)",
        }}
      />

    </div>
  );
};

export default AnimatedBackground;