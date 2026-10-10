"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CinematicIntro = ({ onComplete }: { onComplete?: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3000); // 3 seconds for the intro
    return () => clearTimeout(timer);
  }, [onComplete]);

  // 3D Code elements (Static positions to avoid mismatch)
  const codeElements = [
    { text: "{ }", x: "15%", y: "20%", scale: 1.2 },
    { text: "</>", x: "80%", y: "15%", scale: 1.5 },
    { text: "js", x: "10%", y: "75%", scale: 1 },
    { text: "const", x: "85%", y: "80%", scale: 0.8 },
    { text: "await", x: "25%", y: "85%", scale: 0.9 },
    { text: "=>", x: "70%", y: "25%", scale: 1.1 },
  ];

  if (!mounted) return null;


  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center overflow-hidden"
        >
          {/* Background Cinematic Gradients */}
          <div className="absolute inset-0">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[150px] rounded-full" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050B18_80%)]" />
          </div>

          {/* 3D Floating Code Elements */}
          {codeElements.map((el, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: [0.1, 0.22, 0.1],
                scale: [el.scale * 0.96, el.scale, el.scale * 0.96],
                y: ["0px", "-10px", "0px"],
              }}
              transition={{
                duration: 8 + i * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              className="absolute text-blue-400/15 font-mono text-2xl md:text-4xl select-none"
              style={{
                left: el.x,
                top: el.y,
              }}
            >
              {el.text}
            </motion.div>
          ))}

          {/* Central Text */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold tracking-[0.2em] text-white uppercase mb-4 relative">
                {"ABID PORTFOLIO".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.3 + index * 0.025,
                      ease: "easeOut",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                
                {/* Glow Effect */}
                <span className="absolute inset-0 blur-2xl bg-blue-500/20 -z-10 rounded-full" />
              </h1>
            </motion.div>


            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "circOut" }}
              className="h-[1px] w-48 md:w-96 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-blue-200/60 font-mono text-sm md:text-lg tracking-[0.3em] uppercase"
            >
              INITIALIZING...
            </motion.p>
          </div>


          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,11,24,0.8)_100%)]" />


        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
