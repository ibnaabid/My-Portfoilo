"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-surface relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080808_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex-shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative">

              {/* Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-dashed border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-primary/10 rounded-full"
              />

              {/* Picture Container */}
              <div className="w-full h-full rounded-[2.5rem] border border-white/10 relative overflow-hidden group shadow-2xl shadow-primary/5">

                {/* ✅ তোমার photo এখানে */}
                <img
                  src="/Gemini_Generated_Image_evtujaevtujaevtu.png"
                  alt="Abid"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Scanning line */}
                <motion.div
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-0 right-0 h-0.5 bg-primary/60 shadow-[0_0_15px_rgba(230,33,41,0.8)] z-20"
                />

                {/* Name tag */}
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="text-[9px] font-bold tracking-[0.3em] text-primary uppercase">
                    ABID // FRONTEND_DEV
                  </div>
                </div>

              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-8 p-4 bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl"
              >
                <Sparkles size={20} className="text-primary-accent" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 p-5 bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl"
              >
                <div className="text-[11px] font-technical-sm text-iron-gold uppercase tracking-widest font-bold">
                  System_Sync
                </div>
                <div className="w-16 h-1.5 bg-white/10 mt-2 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: ["10%", "90%", "10%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-full bg-gradient-to-r from-primary via-iron-gold to-stark-red"
                  />
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Text Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-technical-sm text-primary tracking-[0.6em] uppercase text-xs mb-4 block">
                Personal_Module
              </span>
              <h2 className="text-5xl md:text-7xl font-display-xl text-white uppercase tracking-tighter mb-8">
                Beyond the <span className="text-primary">Syntax</span>
              </h2>

              <p className="text-slate-300 font-body-lg text-xl leading-relaxed mb-8">
                I am a developer who believes that{" "}
                <span className="text-white font-bold">code is art</span>. Currently pursuing a{" "}
                <span className="text-primary font-bold">
                  Diploma in Computer Science & Technology
                </span>{" "}
                (2023 Batch) and honing my craft through{" "}
                <span className="text-iron-gold font-bold">Programming Hero</span>, my journey is
                fueled by a relentless passion for blending engineering with cinematic design.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {[
                  {
                    title: "My Passion",
                    desc: "Animation & Development Intersecting in Digital Space.",
                    icon: <Sparkles className="text-primary-accent" size={24} />,
                    delay: 0.2,
                  },
                  {
                    title: "My Goal",
                    desc: "Building seamless, high-fidelity user experiences that leave an impact.",
                    icon: <Code className="text-primary" size={24} />,
                    delay: 0.4,
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay }}
                    whileHover={{
                      y: -5,
                      borderColor: "rgba(246, 196, 69, 0.3)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                    }}
                    className="p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] group transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-iron-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-iron-gold/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        {item.icon}
                      </div>
                      <h4 className="text-white font-bold text-xl uppercase tracking-widest mb-3">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed uppercase tracking-wider group-hover:text-slate-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;