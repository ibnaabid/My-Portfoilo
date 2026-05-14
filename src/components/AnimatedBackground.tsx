"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">

      {/* Pure Dark Base */}
      <div className="absolute inset-0 bg-[#2C3639]" />

      {/* Top Left — Tan Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[150px]"
        style={{ backgroundColor: "rgba(162, 123, 92, 0.05)" }} // Tan Glow
      />

      {/* Bottom Right — Subtle Glow */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -60, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[150px]"
        style={{ backgroundColor: "rgba(63, 78, 79, 0.05)" }} // Charcoal Accent Glow
      />

      {/* Center — Very Subtle */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
        style={{
          background: "radial-gradient(circle at center, rgba(162, 123, 92, 0.02) 0%, transparent 60%)",
        }}
      />



    </div>
  );
};

export default AnimatedBackground;