"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Complete Web Development",
      company: "Programming Hero",
      period: "2024 - Present",
      description: "Mastering the MERN stack (MongoDB, Express, React, Node.js) and modern frontend tools. Building real-world projects and focusing on clean, efficient code.",
      icon: <Award size={20} />,
      type: "achievement"
    },
    {
      title: "Diploma in Computer Science & Technology",
      company: "CST Diploma (2023 Batch)",
      period: "2023 - Present",
      description: "Studying the fundamentals of Computer Science, including Algorithms, Data Structures, and Software Engineering principles in Dinajpur, Bangladesh.",
      icon: <GraduationCap size={20} />,
      type: "education"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-surface relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-24">
          <span className="font-technical-sm text-primary tracking-[0.4em] uppercase block mb-4">Professional_Timeline</span>
          <h2 className="font-display-xl text-5xl md:text-7xl text-white uppercase leading-none">
            Experience & <span className="text-primary">Growth</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative pl-12 pb-16 last:pb-0 border-l border-white/10"
            >
              {/* Timeline Node */}
              <div className="absolute left-[-20px] top-0 w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-primary shadow-xl z-10">
                {exp.icon}
              </div>

              {/* Content */}
              <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-headline-md text-white uppercase tracking-wider">{exp.title}</h3>
                    <p className="text-primary-accent font-technical-sm text-xs uppercase tracking-widest mt-1">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-technical-sm text-slate-400 uppercase tracking-widest self-start md:self-center">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-400 font-body-md leading-relaxed">
                  {exp.description}
                </p>
                
                {/* Decorative scanning line on hover */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
