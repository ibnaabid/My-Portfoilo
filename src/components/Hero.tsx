"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, Github, Linkedin, Facebook, Instagram } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/ibnaabid", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/1Cj6eRf4U9/", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/mdibnaabid?igsh=MWhmcjB3dDV5NnBjYw==", label: "Instagram" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(56,189,248,0.05)_0%,_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-background"></div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[10px] font-technical-sm text-primary uppercase tracking-widest">Available for new ventures</span>
            </div>

            <h1 className="font-display-xl text-5xl md:text-7xl text-white mb-4 uppercase leading-tight tracking-tight">
              ABID | <span className="text-primary">MERN STACK DEVELOPER </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-300 font-body-lg text-xl md:text-2xl mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Hi, I’m <span className="text-white font-bold">Abid</span>, a <span className="text-primary">CST Diploma student</span> (2023 Batch) from Dinajpur, Bangladesh, and an aspiring <span className="text-primary">Software Developer</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-400 font-body-md text-lg mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I build modern and responsive web applications using <span className="text-white">HTML, CSS, and Tailwind</span>. Currently mastering web development at <span className="text-primary-accent">Programming Hero</span>, I specialize in the <span className="text-primary">MERN & Next.js stack</span>, utilizing <span className="text-primary-accent">Node.js, Express.js, and MongoDB</span> with <span className="text-primary">BetterAuth</span> for secure, seamless web experiences.
            </motion.p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 mb-12">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.2, color: "var(--primary)" }}
                  className="text-slate-500 hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#38BDF8", color: "#050B18", boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-primary/10 backdrop-blur-md border border-primary text-primary font-bold rounded-full tracking-widest uppercase text-xs transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Works
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)", scale: 1.05 }}
                className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-full tracking-widest uppercase text-xs transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
            </div>



          </motion.div>

          {/* Right Side: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-72 h-72 md:w-[450px] md:h-[450px] group"
          >
            {/* Advanced Coding HUD Frame */}
            <div className="absolute inset-0 border border-primary/20 rounded-2xl animate-pulse"></div>
            <div className="absolute -inset-2 border border-primary/10 rounded-2xl rotate-2"></div>
            <div className="absolute -inset-4 border border-white/5 rounded-2xl -rotate-1"></div>

            {/* Scanning Line Effect */}
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-primary/40 z-20 pointer-events-none blur-[1px]"
            />

            {/* Corner Brackets */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary z-30"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary z-30"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary z-30"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary z-30"></div>

            {/* Image with 3D Tilt Hover */}
            <motion.div 
              whileHover={{ 
                rotateY: 15, 
                rotateX: -10,
                scale: 1.02,
                boxShadow: "0 0 50px rgba(56, 189, 248, 0.3)"
              }}
              style={{ perspective: 1000 }}
              className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 cursor-pointer bg-slate-900"
            >
              <img
                src="/hero-portrait.png"
                alt="Abid Portrait"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Overlay: Coding Vibe / Matrix Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute top-4 left-4 font-mono text-[8px] text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity">
                <div>SYSTEM_INFO: ACTIVE</div>
                <div>SEC_LEVEL: 01</div>
                <div>STACK: MERN_NEXTJS</div>
              </div>
            </motion.div>

            {/* Animated Floating Badges */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-slate-900/80 backdrop-blur-xl border border-primary/30 p-4 rounded-xl hidden md:block shadow-2xl z-40"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-technical-sm text-primary uppercase tracking-widest font-bold">Live_Development</span>
                  <span className="text-[11px] text-white font-bold uppercase">Code in Progress</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
