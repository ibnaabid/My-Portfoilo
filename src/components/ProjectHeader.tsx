"use client";

import React from "react";
import { motion } from "framer-motion";

const ProjectHeader = () => {
  return (
    <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2 py-0.5 border border-primary/40 text-[#00A9B0] font-label-caps text-[8px]">
            PROJECT_ID: 8892_NX
          </span>
          <span className="px-2 py-0.5 border border-primary/40 text-[#00A9B0] font-label-caps text-[8px]">
            STATUS: ARCHIVED_FINAL
          </span>
        </div>
        <h1 className="font-display-xl text-4xl md:text-8xl text-primary leading-none uppercase">
          NEON_DRIFT
        </h1>
        <p className="font-body-lg text-on-surface-variant mt-4 max-w-2xl">
          An exploration of urban kinetic energy through the lens of ultra-high-speed cinematography. 
          This narrative focuses on the blurring lines between organic movement and digital synthesis.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-left md:text-right font-technical-sm text-outline uppercase"
      >
        <div className="mb-1">LAT: 35.6895° N</div>
        <div>LNG: 139.6917° E</div>
      </motion.div>
    </header>
  );
};

export default ProjectHeader;
