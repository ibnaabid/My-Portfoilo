"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the outer ring
  const springConfig = { damping: 20, stiffness: 100 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest("button, a, .cursor-pointer");
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Arc Reactor Center */}
      <motion.div
        style={{
          left: mouseX,
          top: mouseY,
          x: "-50%",
          y: "-50%",
        }}
        className="fixed w-4 h-4 bg-primary/80 rounded-full pointer-events-none z-[9999] hidden md:block shadow-[0_0_15px_#58d8df]"
      >
        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
      </motion.div>

      {/* Rotating Outer Rings (Arc Reactor Style) */}
      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          rotate: 360,
        }}
        transition={{ 
          width: { type: "spring", damping: 20 },
          height: { type: "spring", damping: 20 },
          rotate: { duration: 10, repeat: Infinity, ease: "linear" }
        }}
        className="fixed pointer-events-none z-[9998] hidden md:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#00f2ff" strokeWidth="1.5" strokeDasharray="10 5" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="#f6c445" strokeWidth="1" strokeDasharray="5 5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#00f2ff" strokeWidth="0.5" strokeDasharray="2 2" />
          {isHovering && (
            <circle cx="50" cy="50" r="48" fill="none" stroke="#e62129" strokeWidth="2" strokeDasharray="1 10" />
          )}
        </svg>
      </motion.div>

      {/* Target Crosshair when hovering */}
      {isHovering && (
        <motion.div
          style={{
            left: mouseX,
            top: mouseY,
            x: "-50%",
            y: "-50%",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed pointer-events-none z-[10000] hidden md:block"
        >
          <div className="w-10 h-10 border border-red-500/50 rounded-sm relative">
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-red-500" />
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-red-500" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-red-500" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-red-500" />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
