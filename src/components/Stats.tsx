"use client";

import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { label: "Projects_Completed", value: "12+", desc: "Personal & learning applications" },
    { label: "Tech_Stack_Units", value: "15+", desc: "Mastered tools & frameworks" },
    { label: "Coding_Hours", value: "1,200+", desc: "Of dedicated development time" },
    { label: "Commits_Synced", value: "850+", desc: "Across various repositories" },
  ];

  return (
    <section className="px-12 py-24 bg-surface-container border-t border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, idx) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              delay: idx * 0.15,
              ease: [0.21, 0.47, 0.32, 0.98] 
            }}
            className="space-y-2 group cursor-default"
          >
            <span className="font-technical-sm text-slate-500 uppercase group-hover:text-primary transition-colors duration-300">{stat.label}</span>
            <div className="font-display-xl text-primary text-4xl group-hover:scale-105 origin-left transition-transform duration-500">{stat.value}</div>
            <p className="font-body-md text-slate-500 text-sm group-hover:text-slate-300 transition-colors duration-300">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
