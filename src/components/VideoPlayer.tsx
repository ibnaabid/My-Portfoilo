"use client";

import React from "react";
import { motion } from "framer-motion";

const VideoPlayer = () => {
  return (
    <section className="relative w-full aspect-video glass-panel overflow-hidden group">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
        style={{ 
          backgroundImage: "url('https://lh3.googleusercontent.com/aida/ADBb0uigoLCIK_U9kZNJrVb8mNpvDW8oaKQBcayiJrttXFHquZI7WgxKJcyd3Y3b16k68aA0c2Rf82rixwjJqxZMFLDsllO4ZGt92fLpmK2VFmWSlAuzRXCzsxJ4l3f0zmkoYK8jNeUi2-V_KiMzuL9eFE7gJBGJb03qgWv2zNs0isvG2HvAJ5iGHg_ZC6vSQQkCmuiN3VV7f_ofdSoZNUogE8N1AZi7vd0sbz_Jk0gC4rnlHWDlZnHt42drbsS0tFKJczOe2_0pt_zbRbI')" 
        }}
      ></div>
      
      {/* HUD Overlays for Player */}
      <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between items-start">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel px-4 py-2 flex items-center gap-4"
          >
            <span className="material-symbols-outlined text-red-500 animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>
              fiber_manual_record
            </span>
            <span className="font-technical-sm tracking-widest text-xs md:text-base">00:04:12:18</span>
          </motion.div>
          
          <div className="flex flex-col items-end gap-2">
            <span className="font-label-caps border border-white/20 px-2 py-1 text-white text-[8px] md:text-[10px]">4K RAW</span>
            <span className="font-label-caps border border-white/20 px-2 py-1 text-white text-[8px] md:text-[10px]">23.98 FPS</span>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: "rgba(88, 216, 223, 0.8)" }}
              className="pointer-events-auto glass-panel w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:text-on-primary transition-all"
            >
              <span className="material-symbols-outlined">play_arrow</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              className="pointer-events-auto glass-panel w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all"
            >
              <span className="material-symbols-outlined">skip_next</span>
            </motion.button>
          </div>
          
          <div className="glass-panel px-4 py-2 font-technical-sm text-[8px] md:text-[10px]">
            HISTOGRAM: ACTIVE
          </div>
        </div>
      </div>

      {/* HUD Decorative Crosshairs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 border border-white/5 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-px bg-primary/40 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-px bg-primary/40 pointer-events-none"></div>
    </section>
  );
};

export default VideoPlayer;
