"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, CheckCircle2, Layers, Cpu, Globe } from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  techStack: string[];
  features: string[];
  liveLink: string;
  githubLink?: string;
  backendLink?: string;
  color: string;
};

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "FOODIEZONE",
    category: "Restaurant Web App",
    description: "A modern restaurant experience built for food ordering, menu browsing, and brand storytelling.",
    images: [
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop"
    ],
    techStack: ["Next.js","javasScript" ,"BetterAuth","TailwindCSS", "express.js", "Node.js"],
    features: [
      "Responsive menu showcase",
      "Online order flow",
      "Modern restaurant branding",
      "Mobile-friendly UX"
    ],
    liveLink: "https://foodiezone-nu.vercel.app",
    githubLink: "https://github.com/ibnaabid/Foodiezone",
    color: "#f97316"
  },
  {
    id: "02",
    title: "B13_HOUSE_RENT",
    category: "House Rental Platform",
    description: "A clean house rental interface with property listings, booking details, and user-friendly search experience.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2940&auto=format&fit=crop"
    ],
    techStack: ["Next.js", "JavaScript","betterAuth","express.js", "CSS", "Webflow"],
    features: [
      "Property listing previews",
      "Booking-ready layout",
      "Clean rental dashboard",
      "Fast browsing experience"
    ],
    liveLink: "https://b-13-a10-house-rent.vercel.app",
    githubLink: "https://github.com/ibnaabid/B-13--A10--house-rent",
    color: "#0ea5e9"
  },
  {
    id: "03",
    title: "CST_HUB",
    category: "Academic Platform",
    description: "A shared academic workspace for CST diploma students, bringing study materials, class routines, notices, and AI help together.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop"
    ],
    techStack: ["CST Student Hub", "Study Resources", "Class Routine", "Notices", "AI Study Help"],
    features: [
      "Class notes and study materials",
      "Quick access to class routines",
      "Group-wise notices and updates",
      "AI assistance for classmates"
    ],
    liveLink: "https://cst-hub.vercel.app/",
    backendLink: "https://csthub-backend-dw3l.onrender.com/",
    githubLink: "https://github.com/ibnaabid/Cst-Hub",
    color: "#38bdf8"
  }
];

const ProjectSection = ({ project }: { project: Project }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <div ref={sectionRef} className="min-h-screen relative flex items-center py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          style={{ opacity, scale }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start"
        >
          {/* Left Side: Sticky Image Gallery */}
          <div className="lg:sticky lg:top-32 h-fit order-1 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 shadow-2xl">
                {/* Main Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                {/* HUD Elements on Image */}
                <div className="absolute top-6 left-6 flex gap-3">
                  <div className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[9px] font-technical-sm text-white uppercase tracking-widest">Live_Status</span>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6">
                  <div className="flex gap-2">
                    {project.images.slice(1).map((img, i) => (
                      <div key={i} className="w-16 h-16 rounded-xl border border-white/20 overflow-hidden bg-black/40 backdrop-blur-md p-1">
                        <img src={img} className="w-full h-full object-cover rounded-lg" alt="thumbnail" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl pointer-events-none" />
            </div>
          </div>

          {/* Right Side: Detailed Content */}
          <div className="space-y-10 order-2 lg:order-2">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-primary font-technical-sm text-xs tracking-[0.4em] uppercase">Project_0{project.id}</span>
                <div className="h-[1px] w-12 bg-white/10" />
                <span className="text-slate-500 font-technical-sm text-[10px] uppercase tracking-widest">{project.category}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display-xl text-white uppercase tracking-tighter leading-none mb-6">
                {project.title.replace("_", " ")}
              </h2>
              <p className="text-slate-400 font-body-lg text-lg md:text-xl leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <Layers size={16} className="text-primary" /> Key_Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white/[0.03] border border-white/5 rounded-2xl group hover:border-primary/20 transition-all">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <Cpu size={16} className="text-iron-gold" /> Tech_Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl text-[10px] font-technical-sm text-slate-300 uppercase tracking-widest hover:border-iron-gold/40 hover:text-white transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-6 pt-6">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02, backgroundColor: project.color, color: "#000" }}
                whileTap={{ scale: 0.99 }}
                className="px-10 py-5 border border-primary text-primary font-bold text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center gap-3 transition-all duration-300 shadow-lg shadow-primary/5"
              >
                Launch Sequence <Globe size={18} />
              </motion.a>
              {project.backendLink && (
                <motion.a
                  href={project.backendLink}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  whileTap={{ scale: 0.99 }}
                  className="px-10 py-5 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center gap-3 transition-colors"
                >
                  Backend API <ExternalLink size={18} />
                </motion.a>
              )}
              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  whileTap={{ scale: 0.99 }}
                  className="px-10 py-5 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center gap-3 transition-colors"
                >
                  Source Repository <Github size={18} />
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const DetailedProjects = () => {
  return (
    <section id="projects" className="bg-surface relative">
      {/* Background Section Header */}
      <div className="container mx-auto px-6 md:px-12 pt-32 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-12 gap-8">
          <div>
            <span className="font-technical-sm text-primary tracking-[0.6em] uppercase text-xs mb-4 block">Archive_Module</span>
            <h2 className="text-6xl md:text-8xl font-display-xl text-white uppercase tracking-tighter">
              Selected <span className="text-primary/20">Protocols</span>
            </h2>
          </div>
          <div className="max-w-xs text-right">
            <p className="text-[10px] font-technical-sm text-slate-500 uppercase tracking-widest leading-relaxed">
              A curated selection of industrial-grade web applications focusing on motion, security, and scalability.
            </p>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-0">
        {PROJECTS.map((project) => (
        <ProjectSection key={project.id} project={project} />
        ))}
      </div>

      {/* View More CTA */}
      <div className="container mx-auto px-6 md:px-12 py-24 border-t border-white/5 text-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="group relative px-12 py-6 bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10 text-white font-bold uppercase tracking-[0.3em] text-xs">View Full Archive Matrix</span>
        </motion.button>
      </div>
    </section>
  );
};

export default DetailedProjects;
