"use client";

import React from "react";
import { motion } from "framer-motion";

const AudioWaveform = () => {
  const bars = Array.from({ length: 30 });

  return (
    <section className="mt-8 glass-panel p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="font-label-caps text-primary text-[10px]">AUDIO_TELEMETRY: MASTER_MIX_01</div>
        <div className="font-technical-sm text-outline text-[10px]">BITRATE: 1411 KBPS / 48 KHZ</div>
      </div>
      <div className="flex items-end gap-1 h-16 w-full">
        {bars.map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: "10%" }}
            animate={{ 
              height: [`${20 + Math.random() * 80}%`, `${20 + Math.random() * 80}%`, `${20 + Math.random() * 80}%`] 
            }}
            transition={{ 
              duration: 1.5 + Math.random(), 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className={`flex-1 bg-primary/${i % 3 === 0 ? "80" : i % 2 === 0 ? "40" : "20"}`}
            style={{ 
              boxShadow: i % 5 === 0 ? "0 0 10px rgba(88, 216, 223, 0.3)" : "none"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default AudioWaveform;
