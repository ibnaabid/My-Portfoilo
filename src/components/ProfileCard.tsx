"use client";

import React from "react";
import { motion } from "framer-motion";

const ProfileCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      className="col-span-12 lg:col-span-4 glass-panel p-8 relative overflow-hidden group border border-white/5"
    >
      <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/20 p-2 text-right z-20">
        <span className="font-technical-sm text-[8px] text-[#00A9B0]">01_BIO</span>
      </div>
      
      <h3 className="font-headline-md text-2xl text-on-background mb-6 flex items-center gap-3">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
        OP_LEAD
      </h3>
      
      <div className="mb-8 overflow-hidden rounded-sm relative">
        <img 
          className="w-full aspect-[4/5] object-cover filter grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" 
          src="https://lh3.googleusercontent.com/aida/ADBb0uhzb8zZmDDtjMX-CeC29KjYrCJlQ-WrdHTJDW8207L1lJ3iWoViV7NweHoZCqcVTK41u1dkAxvNU9EUnLaX54cNDscM_54sNqftsaislnHYTy1wyf1lVRrUMeT39-CVEsf68D6trANgE74JLozQHAwiFMrmAU_ap8kWpnnvuPbiWP7jM9cufWAVTexzuZDOYdQ6fj5yyq5CFVI900uxPpju8PPdk4V7h7j1orsCHlyc9qWWps3qAjHWiz0yWdNTjaU39YY692rthVQ"
        />
        <div className="scanning-line opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60"></div>
      </div>
      
      <div className="space-y-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="border-l-2 border-primary/20 pl-4 py-1"
        >
          <span className="font-label-caps text-[#00A9B0] block text-[8px] tracking-widest mb-1">DESIGNATION</span>
          <span className="font-body-md text-on-background text-lg">Chief Visionary Architect</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="border-l-2 border-primary/20 pl-4 py-1"
        >
          <span className="font-label-caps text-[#00A9B0] block text-[8px] tracking-widest mb-1">CORE_COMPETENCIES</span>
          <span className="font-body-md text-on-background text-slate-400">Anamorphic Synthesis, Digital Grain Modeling, Spatial UX</span>
        </motion.div>

        <div className="pt-4 flex justify-between items-center text-[8px] font-mono text-slate-600">
          <span>THREAT_LEVEL: MINIMAL</span>
          <span className="text-primary/40">ACCESS_LEVEL: 05</span>
        </div>
      </div>
      
      {/* Decorative HUD corners */}
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/30"></div>
    </motion.div>
  );
};

export default ProfileCard;
