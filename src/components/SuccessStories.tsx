"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react";

const SuccessStories = () => {
  const successes = [
    {
      title: "GLOBAL_CAMPAIGN_X",
      client: "AERO_DYNAMICS",
      result: "124M+ VIEWS",
      icon: <TrendingUp className="text-primary" />,
      color: "from-primary/10",
    },
    {
      title: "CINEMATIC_DOC_01",
      client: "VISION_CORP",
      result: "42 AWARDS",
      icon: <Award className="text-primary" />,
      color: "from-primary-accent/10",
    },
    {
      title: "BRAND_NARRATIVE",
      client: "OASIS_STUDIOS",
      result: "98% IMPACT",
      icon: <Users className="text-primary" />,
      color: "from-primary/10",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative HUD background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-technical-sm text-primary tracking-[0.3em] uppercase block mb-2">Operation_Log</span>
            <h2 className="font-headline-lg text-4xl md:text-6xl text-white uppercase">SUCCESS_METRICS</h2>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-full"
          >
            <CheckCircle2 size={16} className="text-primary animate-pulse" />
            <span className="font-label-caps text-[10px] text-primary tracking-widest">MISSION_ACCOMPLISHED: 100%</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successes.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 glass-panel border-l-4 border-l-primary bg-gradient-to-br ${item.color} to-transparent group cursor-default`}
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                {React.cloneElement(item.icon as React.ReactElement, { size: 64 })}
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                  {item.icon}
                </div>
                <span className="font-technical-sm text-[10px] text-slate-500">{item.client}</span>
              </div>

              <h3 className="font-headline-md text-xl text-white mb-2 tracking-tight">{item.title}</h3>
              <div className="text-3xl font-display-xl text-primary font-bold">{item.result}</div>
              
              <div className="mt-8 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-1 h-3 bg-primary/40" />)}
                </div>
                <span className="font-label-caps text-[8px] tracking-widest">VERIFIED_DATA</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
