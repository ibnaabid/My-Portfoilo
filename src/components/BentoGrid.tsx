"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, Code2, Globe } from "lucide-react";

const BentoGrid = () => {
  const projects = [
    {
      id: "01",
      title: "QUANTUM_COMMERCE",
      description: "A high-performance E-commerce architecture built with Next.js 14 and Stripe integration.",
      tags: ["NEXT.JS", "STRIPE", "TAILWIND"],
      link: "#",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uigoLCIK_U9kZNJrVb8mNpvDW8oaKQBcayiJrttXFHquZI7WgxKJcyd3Y3b16k68aA0c2Rf82rixwjJqxZMFLDsllO4ZGt92fLpmK2VFmWSlAuzRXCzsxJ4l3f0zmkoYK8jNeUi2-V_KiMzuL9eFE7gJBGJb03qgWv2zNs0isvG2HvAJ5iGHg_ZC6vSQQkCmuiN3VV7f_ofdSoZNUogE8N1AZi7vd0sbz_Jk0gC4rnlHWDlZnHt42drbsS0tFKJczOe2_0pt_zbRbI",
      colSpan: "md:col-span-2 md:row-span-2",
    },
    {
      id: "02",
      title: "NEURAL_DASHBOARD",
      description: "Interactive data visualization engine for AI analytics and system monitoring.",
      tags: ["REACT", "RECHARTS", "NODE.JS"],
      link: "#",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uhzb8zZmDDtjMX-CeC29KjYrCJlQ-WrdHTJDW8207L1lJ3iWoViV7NweHoZCqcVTK41u1dkAxvNU9EUnLaX54cNDscM_54sNqftsaislnHYTy1wyf1lVRrUMeT39-CVEsf68D6trANgE74JLozQHAwiFMrmAU_ap8kWpnnvuPbiWP7jM9cufWAVTexzuZDOYdQ6fj5yyq5CFVI900uxPpju8PPdk4V7h7j1orsCHlyc9qWWps3qAjHWiz0yWdNTjaU39YY692rthVQ",
      colSpan: "md:col-span-2",
    },
    {
      id: "03",
      title: "CRYPTO_VAULT_V2",
      description: "Secure digital asset management interface with real-time price synchronization.",
      tags: ["FIREBASE", "WEB3", "CSS"],
      link: "#",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
      colSpan: "md:col-span-1",
    },
    {
      id: "04",
      title: "VOX_SOCIAL_ENGINE",
      description: "Real-time communication platform with advanced message processing and auth.",
      tags: ["BETTER_AUTH", "SOCKET.IO"],
      link: "#",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2940&auto=format&fit=crop",
      colSpan: "md:col-span-1",
    },
  ];

  return (
    <section className="p-6 md:p-12 space-y-12 bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-8 gap-6">
        <div>
          <span className="font-technical-sm text-primary uppercase mb-2 block tracking-[0.4em]">Project_Archives</span>
          <h2 className="font-display-xl text-5xl text-white uppercase">Selected Works</h2>
          <p className="font-technical-sm text-slate-500 mt-2 max-w-xl">
            A curation of high-fidelity web systems built with frontend precision and architectural logic.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-primary transition-all text-slate-400 hover:text-white">
            <Globe size={18} />
          </button>
          <button className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-primary transition-all text-slate-400 hover:text-white">
            <Github size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[800px]">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`${project.colSpan} relative group overflow-hidden rounded-2xl border border-white/5 cursor-pointer`}
          >
            {/* Image Layer */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
            />
            
            {/* Overlay Layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Content Layer */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-technical-sm text-primary border border-primary/30 px-3 py-1 rounded-full uppercase tracking-widest">
                    SYSTEM_{project.id}
                  </span>
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <ExternalLink size={16} className="text-white hover:text-primary transition-colors" />
                    <Github size={16} className="text-white hover:text-primary transition-colors" />
                  </div>
                </div>
                
                <h3 className="font-display-xl text-2xl md:text-3xl text-white mb-2 uppercase group-hover:tracking-wider transition-all duration-500">
                  {project.title}
                </h3>
                
                <p className="font-body-md text-slate-400 text-sm max-w-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-technical-sm bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-500 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Animated Border Glow */}
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-all duration-500" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
