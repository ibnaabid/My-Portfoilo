"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(0,242,255,0.05)_0%,_transparent_70%)]"></div>
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
              ABID | <span className="text-primary">MERN STUCK DEVELOPER </span>
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-slate-400 font-body-md text-lg mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed italic"
            >
              {/* "I am passionate about coding and love to learn new technologies. My goal is to become a professional Software Developer and work on real-world impactful projects." */}
            </motion.p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 mb-12">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.2, color: "#00f2ff" }}
                  className="text-slate-500 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#00f2ff", color: "#000", boxShadow: "0 0 20px rgba(0, 242, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-primary/10 backdrop-blur-md border border-primary text-primary font-bold rounded-full tracking-widest uppercase text-xs transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Works
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)", scale: 1.05 }}
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
            className="relative w-64 h-64 md:w-96 md:h-96"
          >
            {/* Decorative Rings */}
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute -inset-4 border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

            {/* Photo Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl shadow-primary/20 group">
              <img
                src="/Gemini_Generated_Image_j0n8cej0n8cej0n8.png"
                alt="Abid"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            </div>

            {/* Animated Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-5 rounded-2xl hidden md:block shadow-2xl"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-technical-sm text-primary uppercase tracking-[0.2em] font-bold">Creative_Status</span>
                <span className="text-xs text-white font-bold uppercase tracking-tight">Moving in Pixels</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
