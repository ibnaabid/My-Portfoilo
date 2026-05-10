"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Trophy, Layers, Cpu, Globe, CheckCircle2 } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    title: "JACKFRUIT_PROJECT",
    description: "A comprehensive digital ecosystem for fruit supply chain management and consumer connectivity.",
    detailedDescription: "Designed for high-concurrency environments, Nexus_Social utilizes WebSocket protocols for sub-millisecond messaging latency and a distributed database architecture for global scalability.",
    tags: ["React", "Next.js", "TailwindCSS", "Node.js", "MongoDB"],
    features: [
      "Dynamic inventory tracking system",
      "Real-time order management dashboard",
      "Secure payment integration (SSLCommerz)",
      "Responsive mobile-first user experience"
    ],
    role: "Lead Developer",
    animations: "Real-time state synchronization & smooth layout shifts.",
    color: "#00f2ff", // Neon Blue
    image: "https://images.unsplash.com/photo-1595009552535-be753447727e?q=80&w=2940&auto=format&fit=crop",
    startPos: { x: "10%", y: "10%" },
    liveLink: "https://a08-jackfruit-project.vercel.app",
    githubLink: "https://github.com/ibnaabid/A08-jackfruit-project",
  },
  {
    id: "02",
    title: "KEEN_KEEPER",
    description: "A high-fidelity task and note-taking application designed for organized productivity and secure data storage.",
    detailedDescription: "A zero-trust security framework that implements multi-layered authentication and real-time biometric simulation, ensuring enterprise-grade protection for distributed applications.",
    tags: ["Next.js", "TypeScript", "BetterAuth", "Prisma", "PostgreSQL"],
    features: [
      "Zero-trust authentication with BetterAuth",
      "Real-time task synchronization",
      "Cloud-based persistent storage",
      "Advanced categorization and labeling"
    ],
    role: "Full Stack Engineer",
    animations: "Interactive login flows & biometric feedback simulation.",
    color: "#bc13fe", // Neon Purple
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2940&auto=format&fit=crop",
    startPos: { x: "90%", y: "10%" },
    liveLink: "https://keen-keeper-a07-chi.vercel.app",
    githubLink: "https://github.com/ibnaabid/Keen-keeper",
  },
  {
    id: "03",
    title: "ENGLISH_JANALA",
    description: "An interactive web application for learning English, featuring comprehensive modules and real-time assessments.",
    detailedDescription: "Engineered for deep-data analytics, this dashboard provides real-time visualization of infrastructure metrics using D3.js and automated deployment pipeline monitoring.",
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    features: [
      "Interactive lesson modules",
      "Real-time progress tracking",
      "Responsive curriculum display",
      "Static site optimization for speed"
    ],
    role: "Frontend Developer",
    animations: "Dynamic data charting & glassmorphism card interactions.",
    color: "#f6c445", // Iron Gold
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2940&auto=format&fit=crop",
    startPos: { x: "10%", y: "90%" },
    liveLink: "https://ibnaabid.github.io/english-janala-web/",
    githubLink: "https://github.com/ibnaabid/english-janala-web",
  },
  {
    id: "04",
    title: "MOBILE_BANK_V2",
    description: "A secure and intuitive mobile banking interface concept focusing on user transaction flows and security.",
    detailedDescription: "A specialized framework for building high-fidelity cinematic web experiences, utilizing Framer Motion for scroll-linked orchestrations and custom HUD shaders.",
    tags: ["React", "Express.js", "MongoDB", "Auth0"],
    features: [
      "Secure transaction monitoring",
      "Real-time balance synchronization",
      "Biometric feedback simulation",
      "High-security encryption protocols"
    ],
    role: "Full Stack Developer",
    animations: "Advanced scroll-linked animations & HUD overlays.",
    color: "#ff3e3e", // Stark Red
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop",
    startPos: { x: "90%", y: "90%" },
    liveLink: "#",
    githubLink: "https://github.com/ibnaabid/mobile-bank2",
  },
];

const LudoProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Die rotation and number
  const dieRotate = useTransform(smoothProgress, [0, 1], [0, 1080]);
  const [dieValue, setDieValue] = useState(1);

  useEffect(() => {
    const unsubscribe = smoothProgress.onChange((v) => {
      // Simulate die rolling based on scroll
      setDieValue(Math.floor(v * 60) % 6 + 1);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <section id="projects" ref={containerRef} className="relative h-[500vh] bg-slate-950 overflow-visible">
      {/* Sticky Content */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Ludo Board Grid - Subtler */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-15 grid-rows-15 w-full h-full border border-white/5">
            {Array.from({ length: 225 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/5" />
            ))}
          </div>
        </div>

        {/* HUD Elements */}
        <div className="absolute inset-0 p-12 flex flex-col justify-between pointer-events-none">
          <div className="flex justify-between items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-xl"
            >
              <span className="font-technical-sm text-primary tracking-[0.5em] uppercase text-[10px] mb-2 block">Project_Protocols // 04</span>
              <h2 className="text-6xl md:text-8xl font-display-xl text-white leading-none uppercase tracking-tighter">
                ACTIVE <br /> <span className="text-primary/20">ARCHIVES</span>
              </h2>
            </motion.div>
            
            <motion.div 
              style={{ rotate: dieRotate }}
              className="w-16 h-16 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-center text-primary/40 backdrop-blur-md"
            >
              <div className="relative">
                <Globe size={32} className="opacity-40" />
                <div className="absolute inset-0 border border-primary/20 rounded-full animate-ping" />
              </div>
              <span className="absolute -bottom-6 font-technical-sm text-[8px] tracking-widest opacity-40 uppercase">Sequence_{dieValue}</span>
            </motion.div>
          </div>
          
          <div className="flex justify-between items-end">
            <div className="max-w-xs opacity-30">
              <p className="font-technical-sm text-slate-500 leading-relaxed uppercase text-[8px] tracking-widest">
                Initiate scroll to navigate through the project matrix.
              </p>
            </div>
            <div className="text-right">
              <span className="font-technical-sm text-primary/40 text-[9px] uppercase tracking-widest">Protocol_Sync_Active</span>
              <div className="w-48 h-[1px] bg-white/5 mt-2">
                <motion.div 
                  className="h-full bg-primary/40"
                  style={{ width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* The Board Center (Home) */}
        <div className="relative w-[350px] h-[350px] border border-white/[0.05] rounded-full flex items-center justify-center z-10">
          <Trophy size={64} className="text-primary/5" />
          
          <AnimatePresence mode="wait">
            {PROJECTS.map((project, idx) => {
              const start = idx * 0.25;
              const end = (idx + 1) * 0.25;
              
              return (
                <ProjectFocus 
                  key={project.id} 
                  project={project} 
                  progress={smoothProgress} 
                  range={[idx === 0 ? 0 : start + 0.1, end]} 
                />
              );
            })}
          </AnimatePresence>
        </div>

        {/* Quick Matrix HUD - Navigation */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-[40]">
          {PROJECTS.map((p, i) => (
            <button 
              key={p.id}
              onClick={() => {
                const section = containerRef.current;
                if (section) {
                  const start = i * 0.25;
                  const targetScroll = section.offsetTop + (start + 0.15) * (section.offsetHeight - window.innerHeight);
                  window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                }
              }}
              className="w-10 h-10 border border-white/10 bg-white/5 backdrop-blur-xl rounded-lg flex items-center justify-center text-[10px] font-bold text-slate-500 hover:text-primary hover:border-primary/40 transition-all group pointer-events-auto"
            >
              {p.id}
              <div className="absolute right-full mr-4 px-3 py-1 bg-black border border-white/10 rounded text-[8px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest pointer-events-none">
                {p.title.replace("_", " ")}
              </div>
            </button>
          ))}
        </div>

        {/* Project Pieces (Tech Balls / Tokens) */}
        {PROJECTS.map((project, idx) => (
          <LudoPiece 
            key={project.id} 
            project={project} 
            progress={smoothProgress} 
            idx={idx} 
            containerRef={containerRef}
          />
        ))}
      </div>
    </section>
  );
};

const LudoPiece = ({ project, progress, idx, containerRef }: { project: typeof PROJECTS[0], progress: any, idx: number, containerRef: React.RefObject<HTMLDivElement> }) => {
  const segmentStart = idx * 0.25;
  
  const handleBallClick = () => {
    const section = containerRef.current;
    if (section) {
      const targetScroll = section.offsetTop + (segmentStart + 0.15) * (section.offsetHeight - window.innerHeight);
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const segmentEnd = (idx + 1) * 0.25;

  const x = useTransform(
    progress,
    [0, segmentStart, segmentStart + 0.12, segmentStart + 0.18, 1],
    [project.startPos.x, project.startPos.x, "50%", "50%", "50%"]
  );

  const y = useTransform(
    progress,
    [0, segmentStart, segmentStart + 0.12, segmentStart + 0.18, 1],
    [project.startPos.y, project.startPos.y, "50%", "50%", "50%"]
  );

  const scale = useTransform(
    progress,
    [segmentStart, segmentStart + 0.12, segmentStart + 0.18],
    [1, 1.8, 0]
  );

  const opacity = useTransform(
    progress,
    [segmentStart - 0.05, segmentStart, segmentStart + 0.12, segmentStart + 0.18],
    [0, 1, 1, 0]
  );

  const rotation = useTransform(progress, [segmentStart, segmentStart + 0.18], [0, 360]);

  return (
    <motion.div
      style={{ x: "-50%", y: "-50%", left: x, top: y, scale, opacity, rotate: rotation }}
      className="absolute w-16 h-16 z-20 cursor-pointer pointer-events-auto"
      onClick={handleBallClick}
    >
      {/* Tech Ball / Cricket Ball Style Token */}
      <div 
        className="w-full h-full rounded-full border-2 border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center relative overflow-hidden group"
        style={{ backgroundColor: project.color }}
      >
        {/* "Seam" of the ball */}
        <div className="absolute inset-0 border-t border-b border-black/20 my-auto h-4" />
        <div className="absolute inset-0 border-l border-r border-black/20 mx-auto w-4" />
        
        <div className="absolute inset-0 rounded-full animate-pulse opacity-40 bg-white" />
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-black font-black text-[10px] leading-none">{project.id}</span>
          <span className="text-black/60 font-technical-sm text-[6px] tracking-tight uppercase">Active</span>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_70%)]" />
      </div>
    </motion.div>
  );
};

const ProjectFocus = ({ project, progress, range }: { project: typeof PROJECTS[0], progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, [range[0], range[0] + 0.02, range[1] - 0.02, range[1]], [0, 1, 1, 0]);
  const scale = useTransform(progress, [range[0], range[0] + 0.02], [0.85, 1]);
  const y = useTransform(progress, [range[0], range[0] + 0.02], [40, 0]);
  const projectProgress = useTransform(progress, [range[0], range[1]], ["0%", "100%"]);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const unsubscribe = progress.onChange((v: number) => {
      setIsVisible(v >= range[0] && v <= range[1]);
    });
    return () => unsubscribe();
  }, [progress, range]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="absolute inset-0 flex items-center justify-center z-30"
    >
      <div className="relative group w-[90vw] max-w-6xl h-[80vh] md:h-[70vh] bg-slate-900/95 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-[0_0_120px_rgba(0,0,0,0.8)]">
        
        {/* Left: Image & HUD Overlay */}
        <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:hidden" />
          
          <div className="absolute bottom-8 left-8 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[9px] font-technical-sm text-primary uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>

          <div className="absolute top-6 left-6">
            <div className="px-3 py-1 bg-primary text-black font-technical-sm text-[8px] rounded-full uppercase tracking-widest font-bold">
              System_Alpha_0{project.id}
            </div>
          </div>
        </div>

        {/* Right: Detailed Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto custom-scrollbar">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-primary/40"></div>
            <span className="text-[9px] font-technical-sm text-primary uppercase tracking-[0.4em]">
              Archive_Protocol_Active
            </span>
          </div>

          <h3 className="text-4xl md:text-6xl font-display-xl text-white mb-6 leading-tight uppercase tracking-tighter">
            {project.title.replace("_", " ")}
          </h3>

          <p className="text-slate-300 font-body-lg text-lg mb-8 leading-relaxed">
            {project.detailedDescription}
          </p>

          {/* Features List - "Interviewer grade" */}
          <div className="space-y-4 mb-10">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              <Layers size={14} className="text-primary" /> Key_Innovations
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/5 rounded-xl group hover:border-primary/20 transition-all">
                  <CheckCircle2 size={14} className="text-primary opacity-40" />
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mt-auto">
            <motion.a 
              href={`/project/${project.id}`}
              whileHover={{ scale: 1.05, backgroundColor: project.color, color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-primary text-primary font-bold text-xs uppercase tracking-[0.2em] rounded-xl flex items-center gap-3 transition-all duration-300"
            >
              Launch <Globe size={16} />
            </motion.a>
            <motion.a 
              href={project.githubLink}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-xl flex items-center gap-3 transition-all"
            >
              Source <Github size={16} />
            </motion.a>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/5 w-full">
          <motion.div 
            className="h-full"
            style={{ 
              backgroundColor: project.color,
              width: projectProgress
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LudoProjects;
