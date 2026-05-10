"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft, CheckCircle2, Layers, Cpu, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const PROJECTS = [
  {
    id: "01",
    title: "JACKFRUIT_PROJECT",
    category: "Full Stack Platform",
    description: "A comprehensive digital ecosystem for fruit supply chain management and consumer connectivity.",
    detailedDescription: "The Jackfruit Project is a high-performance MERN stack application designed to streamline the fruit supply chain in Bangladesh. It features a robust inventory management system, a real-time order processing dashboard, and secure payment gateways (SSLCommerz) to ensure seamless transactions between growers and consumers. The platform focuses on high-availability and mobile responsiveness for field operations.",
    tags: ["React", "Next.js", "TailwindCSS", "Node.js", "MongoDB"],
    features: [
      "Dynamic inventory tracking system",
      "Real-time order management dashboard",
      "Secure payment integration (SSLCommerz)",
      "Responsive mobile-first user experience",
      "Automated SMS/Email notification system",
      "High-performance image optimization"
    ],
    role: "Lead Developer",
    color: "#00f2ff",
    image: "https://images.unsplash.com/photo-1595009552535-be753447727e?q=80&w=2940&auto=format&fit=crop",
    liveLink: "https://a08-jackfruit-project.vercel.app",
    githubLink: "https://github.com/ibnaabid/A08-jackfruit-project",
  },
  {
    id: "02",
    title: "KEEN_KEEPER",
    category: "Task Management System",
    description: "A high-fidelity task and note-taking application designed for organized productivity and secure data storage.",
    detailedDescription: "Keen Keeper is a secure, cloud-native productivity tool built with Next.js and Prisma. It implements a zero-trust security architecture using BetterAuth, allowing users to securely manage their tasks and sensitive notes with real-time synchronization across devices. The application features a clean, obsidian-style interface for focused work.",
    tags: ["Next.js", "TypeScript", "BetterAuth", "Prisma", "PostgreSQL"],
    features: [
      "Zero-trust authentication with BetterAuth",
      "Real-time task synchronization",
      "Cloud-based persistent storage",
      "Advanced categorization and labeling",
      "Secure MFA & session management",
      "Intuitive dark-mode focused UI"
    ],
    role: "Full Stack Engineer",
    color: "#bc13fe",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2940&auto=format&fit=crop",
    liveLink: "https://keen-keeper-a07-chi.vercel.app",
    githubLink: "https://github.com/ibnaabid/Keen-keeper",
  },
  {
    id: "03",
    title: "ENGLISH_JANALA",
    category: "E-Learning Platform",
    description: "An interactive web application for learning English, featuring comprehensive modules and real-time assessments.",
    detailedDescription: "English Janala (English Window) is an educational platform designed to bridge the language gap for non-native speakers. Built with a focus on accessibility and performance, the platform provides interactive learning modules, progress tracking, and multimedia-rich content to enhance the language learning experience.",
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    features: [
      "Interactive lesson modules",
      "Real-time progress tracking",
      "Responsive curriculum display",
      "Static site optimization for speed",
      "Multimedia integration (Audio/Video)",
      "Automated assessment system"
    ],
    role: "Frontend Developer",
    color: "#f6c445",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2940&auto=format&fit=crop",
    liveLink: "https://ibnaabid.github.io/english-janala-web/",
    githubLink: "https://github.com/ibnaabid/english-janala-web",
  },
  {
    id: "04",
    title: "MOBILE_BANK_V2",
    category: "FinTech Interface",
    description: "A secure and intuitive mobile banking interface concept focusing on user transaction flows and security.",
    detailedDescription: "Mobile Bank V2 is a fintech conceptual project exploring modern banking interfaces. It focuses on the user journey of fund transfers, bill payments, and balance monitoring, utilizing a secure Node.js backend to simulate banking protocols and biometric authentication flows.",
    tags: ["React", "Express.js", "MongoDB", "Auth0"],
    features: [
      "Secure transaction monitoring",
      "Real-time balance synchronization",
      "Biometric feedback simulation",
      "High-security encryption protocols",
      "Dynamic transaction history ledger",
      "Smart-budgeting visualization"
    ],
    role: "Full Stack Developer",
    color: "#ff3e3e",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop",
    liveLink: "#",
    githubLink: "https://github.com/ibnaabid/mobile-bank2",
  },
];

export default function ProjectDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const project = PROJECTS.find(p => p.id === params.id) || PROJECTS[0];

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <Sidebar />

      <div className="md:ml-20 pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Back Button */}
          <motion.button
            onClick={() => router.back()}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-technical-sm text-xs uppercase tracking-widest">Back to Archive</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Visuals */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                
                {/* HUD Decorations */}
                <div className="absolute top-6 left-6">
                  <div className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[9px] font-technical-sm text-white uppercase tracking-widest">Live_Status_OK</span>
                  </div>
                </div>
              </div>

              {/* Stats/Meta Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "ID_CODE", val: `XC_${project.id}` },
                  { label: "PROTOCOL", val: "ALPHA_7" },
                  { label: "STATUS", val: "COMPLETE" }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl">
                    <span className="text-[8px] font-technical-sm text-slate-500 uppercase tracking-widest block mb-1">{item.label}</span>
                    <span className="text-[10px] text-white font-bold uppercase">{item.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary font-technical-sm text-xs tracking-[0.4em] uppercase">Project_Details</span>
                  <div className="h-[1px] w-12 bg-white/10" />
                  <span className="text-slate-500 font-technical-sm text-[10px] uppercase tracking-widest">{project.category}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-display-xl text-white uppercase tracking-tighter leading-tight mb-8">
                  {project.title.replace("_", " ")}
                </h1>
                <p className="text-slate-300 font-body-lg text-xl leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Features Matrix */}
              <div className="space-y-4">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                  <Layers size={16} className="text-primary" /> Key_Innovations
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-primary/20 transition-all">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                  <Cpu size={16} className="text-iron-gold" /> Architecture_Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl text-[10px] font-technical-sm text-slate-300 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6 pt-8">
                <motion.a
                  href={project.liveLink}
                  whileHover={{ scale: 1.05, backgroundColor: project.color, color: "#000" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 border border-primary text-primary font-bold text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center gap-3 transition-all duration-300 shadow-lg shadow-primary/5"
                >
                  Launch Live Demo <Globe size={18} />
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center gap-3 transition-all"
                >
                  Source Repository <Github size={18} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
