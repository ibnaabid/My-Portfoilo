"use client";

import React from "react";
import { motion } from "framer-motion";

const WorksHeader = () => {
  return (
    <header className="mb-16">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-baseline space-x-4 mb-2"
      >
        <span className="font-technical-sm text-primary text-[10px]">DIR_SESSION: 04</span>
        <div className="h-px flex-1 bg-white/10"></div>
      </motion.div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="font-display-xl text-5xl md:text-8xl text-on-surface uppercase mb-4 flex items-center">
            S_WORKS
            <motion.span 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-2 w-2 h-[1.2em] bg-primary inline-block align-middle"
            />
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl text-slate-400">
            Visual chronicles and high-fidelity sensory sequences engineered for the next era of cinematic storytelling.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-start md:items-end text-left md:text-right"
        >
          <span className="font-label-caps text-primary mb-1 text-[9px]">SYSTEM_STABILITY</span>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: "12px" }}
                transition={{ delay: i * 0.1 }}
                className={`w-1 ${i === 5 ? "bg-primary/20" : "bg-primary"}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default WorksHeader;
