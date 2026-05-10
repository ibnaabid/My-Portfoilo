"use client";

import React from "react";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const specs = [
    { label: "CAMERA_SYSTEM", value: "PHANTOM FLEX4K GS" },
    { label: "OPTICS", value: "ARRI MASTER PRIMES" },
    { label: "CODEC", value: "PRORES 4444 XQ" },
    { label: "COLOR_SPACE", value: "LOG-C / ACES" },
    { label: "FRAME_RATE", value: "1000 FPS MAX" },
    { label: "STORAGE", value: "MAG_DRIVE 2TB" },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Story Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:col-span-7 glass-panel p-8"
      >
        <h3 className="font-headline-md text-2xl mb-6 flex items-center gap-4">
          <span className="w-8 h-1 bg-primary"></span>
          C_STORIES: NARRATIVE
        </h3>
        <div className="space-y-6">
          <p className="font-body-md text-on-surface">
            The project "NEON_DRIFT" was conceived as a digital poem dedicated to the architectural rhythm 
            of modern megalopolises. We utilized modified high-speed sensors to capture light trails 
            that are usually invisible to the human eye.
          </p>
          <p className="font-body-md text-on-surface-variant italic border-l-2 border-primary/30 pl-6 py-2">
            "We wanted to see what the city sees when it thinks it's alone at 3:00 AM." — Director's Statement
          </p>
          <p className="font-body-md text-on-surface text-slate-400">
            The visual language of this project is built on the contrast between static structural elements 
            and the fluid motion of light, representing the constant evolution of urban environments.
          </p>
        </div>
      </motion.div>

      {/* Technical Specs Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:col-span-5 glass-panel p-8"
      >
        <h3 className="font-headline-md text-2xl mb-6 uppercase">TECH_SPEC</h3>
        <div className="space-y-4">
          {specs.map((spec) => (
            <div key={spec.label} className="flex justify-between border-b border-white/5 pb-2">
              <span className="font-label-caps text-outline text-[10px]">{spec.label}</span>
              <span className="font-technical-sm text-xs">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Metadata Micro-grid */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-white/5 p-4 border border-white/5 group hover:border-primary/40 transition-colors">
            <div className="font-label-caps text-primary/60 mb-1 text-[8px]">ISO_SETTING</div>
            <div className="font-display-xl text-[24px] font-bold group-hover:text-primary transition-colors">800</div>
          </div>
          <div className="bg-white/5 p-4 border border-white/5 group hover:border-primary/40 transition-colors">
            <div className="font-label-caps text-primary/60 mb-1 text-[8px]">SHUTTER_ANG</div>
            <div className="font-display-xl text-[24px] font-bold group-hover:text-primary transition-colors">180.0°</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
