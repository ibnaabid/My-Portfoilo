"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Database, 
  Server, 
  Globe, 
  Github, 
  GitBranch, 
  Zap, 
  ShieldCheck,
  Layout,
  Flame,
  Terminal,
  Box,
  Sparkles
} from "lucide-react";

const Skills = () => {
  const skillGroups = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", level: 98, color: "#E34F26", icon: <Code2 size={20} /> },
        { name: "CSS3", level: 95, color: "#1572B6", icon: <Layers size={20} /> },
        { name: "Tailwind CSS", level: 96, color: "#38BDF8", icon: <Layout size={20} /> },
        { name: "JavaScript", level: 94, color: "#F7DF1E", icon: <Terminal size={20} /> },
        { name: "React / Next.js", level: 92, color: "#61DAFB", icon: <Zap size={20} /> },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 88, color: "#339933", icon: <Server size={20} /> },
        { name: "Express.js", level: 90, color: "#FFFFFF", icon: <Database size={20} /> },
        { name: "MongoDB", level: 85, color: "#47A248", icon: <Box size={20} /> },
        { name: "BetterAuth", level: 80, color: "#bc13fe", icon: <ShieldCheck size={20} /> },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 92, color: "#F05032", icon: <GitBranch size={20} /> },
        { name: "GitHub", level: 95, color: "#FFFFFF", icon: <Github size={20} /> },
        { name: "Framer Motion", level: 90, color: "#bc13fe", icon: <Sparkles size={20} /> },
      ]
    }
  ];

  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-24">
          <span className="font-technical-sm text-primary tracking-[0.4em] uppercase block mb-4">Expertise_Matrix</span>
          <h2 className="font-display-xl text-5xl md:text-7xl text-white uppercase leading-none">
            Technical <span className="text-primary">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillGroups.map((group, gIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gIdx * 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <span className="text-xs font-technical-sm text-primary-accent uppercase tracking-widest">0{gIdx + 1}</span>
                <h3 className="text-xl font-headline-md text-white uppercase tracking-wider">{group.category}</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {group.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 10 }}
                    className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-between group hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white uppercase tracking-widest">{skill.name}</div>
                        <div className="h-1 bg-white/5 w-32 mt-2 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 + sIdx * 0.1 }}
                            className="h-full bg-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="font-technical-sm text-[10px] text-slate-500">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer info removed or simplified for cleanliness */}
        <div className="mt-32 pt-12 border-t border-white/5 flex justify-between items-center opacity-40">
          <div className="font-label-caps text-[8px] text-slate-500 tracking-widest uppercase">Encryption_Active</div>
          <div className="font-technical-sm text-primary text-[10px]">SYNC_STATUS: 100% COMPLETE</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
