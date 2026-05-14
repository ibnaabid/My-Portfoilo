"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Zap, Trophy, Cpu, Code2, Layers, Database, Globe, Cpu as Chip } from "lucide-react";

const SKILL_GROUPS = [
  {
    id: "01",
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
      { name: "Tailwind", level: 96 },
      { name: "JavaScript", level: 94 },
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 }
    ],
    icon: <Code2 size={24} />,
    color: "#F0C05A", // Gold
    startPos: { x: "10%", y: "10%" },
  },
  {
    id: "02",
    category: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "BetterAuth", level: 80 },
      { name: "API Design", level: 85 },
      { name: "Server Actions", level: 82 }
    ],
    icon: <Database size={24} />,
    color: "#7A84A9", // Soft Blue
    startPos: { x: "90%", y: "10%" },
  },
  {
    id: "03",
    category: "Tools",
    skills: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 95 },
      { name: "Framer Motion", level: 90 },
      { name: "VS Code", level: 94 }
    ],
    icon: <Chip size={24} />,
    color: "#E67E22", // Accent Orange
    startPos: { x: "50%", y: "90%" },
  },
];

const LudoSkills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="skills" ref={containerRef} className="relative h-[350vh] bg-[#1A120B] overflow-visible">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(128,0,0,0.15),transparent_70%)]" />
      
      {/* Sticky Content */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
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
              <span className="font-technical-sm text-[#E63946] tracking-[0.5em] uppercase text-[10px] mb-2 block">Skill_Matrix // 2024</span>
              <h2 className="text-6xl md:text-8xl font-display-xl text-white leading-none uppercase tracking-tighter">
                TECH <br /> <span className="text-[#E63946]/40">STACK</span>
              </h2>
            </motion.div>
            
            <div className="w-16 h-16 bg-[#E63946]/5 border border-[#E63946]/20 rounded-full flex items-center justify-center text-[#E63946] backdrop-blur-md">
              <Zap size={32} className="animate-pulse" />
            </div>
          </div>
          
          <div className="flex justify-between items-end">
            <div className="max-w-xs opacity-60">
              <p className="font-technical-sm text-white/80 leading-relaxed uppercase text-[8px] tracking-widest">
                Scanning proficiency levels... <br />
                Protocol: Coffee_Crimson_Edition
              </p>
            </div>
            <div className="text-right">
              <span className="font-technical-sm text-white/40 text-[9px] uppercase tracking-widest">Archive_Loading...</span>
              <div className="w-48 h-[1px] bg-white/10 mt-2">
                <motion.div 
                   className="h-full bg-[#E63946]"
                  style={{ width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* The Board Center */}
        <div className="relative w-[300px] h-[300px] border border-white/10 rounded-full flex items-center justify-center z-10 bg-white/5 backdrop-blur-md">
          <Chip size={64} className="text-white/10" />
          
          <AnimatePresence mode="wait">
            {SKILL_GROUPS.map((group, idx) => {
              const segment = 1 / SKILL_GROUPS.length;
              const start = idx * segment;
              const end = (idx + 1) * segment;
              
              return (
                <SkillFocus 
                  key={group.id} 
                  group={group} 
                  progress={smoothProgress} 
                  range={[start + 0.1, end]} 
                />
              );
            })}
          </AnimatePresence>
        </div>




        {/* Skill Pieces (Animated Balls) */}
        {SKILL_GROUPS.map((group, idx) => (
          <SkillPiece 
            key={group.id} 
            group={group} 
            progress={smoothProgress} 
            idx={idx} 
          />
        ))}
      </div>
    </section>
  );
};

const SkillPiece = ({ group, progress, idx }: { group: typeof SKILL_GROUPS[0], progress: any, idx: number }) => {
  const segment = 1 / SKILL_GROUPS.length;
  const segmentStart = idx * segment;

  const x = useTransform(
    progress,
    [0, segmentStart, segmentStart + 0.12, segmentStart + 0.18, 1],
    [group.startPos.x, group.startPos.x, "50%", "50%", "50%"]
  );

  const y = useTransform(
    progress,
    [0, segmentStart, segmentStart + 0.12, segmentStart + 0.18, 1],
    [group.startPos.y, group.startPos.y, "50%", "50%", "50%"]
  );

  const scale = useTransform(
    progress,
    [segmentStart, segmentStart + 0.12, segmentStart + 0.18],
    [1, 2, 0]
  );

  const opacity = useTransform(
    progress,
    [segmentStart - 0.05, segmentStart, segmentStart + 0.12, segmentStart + 0.18],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{ x: "-50%", y: "-50%", left: x, top: y, scale, opacity }}
      className="absolute w-16 h-16 z-20"
    >
      <div className="w-full h-full rounded-full border-2 border-white/40 shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: group.color }}>
        <div className="absolute inset-0 rounded-full animate-pulse opacity-40 bg-white" />
        <div className="relative z-10 text-white">
          {group.icon}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_70%)]" />
      </div>
    </motion.div>
  );
};

const SkillFocus = ({ group, progress, range }: { group: typeof SKILL_GROUPS[0], progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, [range[0], range[0] + 0.02, range[1] - 0.02, range[1]], [0, 1, 1, 0]);
  const scale = useTransform(progress, [range[0], range[0] + 0.02], [0.8, 1]);
  const y = useTransform(progress, [range[0], range[0] + 0.02], [30, 0]);

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
      <div className="relative group w-[80vw] max-w-2xl bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-10 md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-white/5 rounded-2xl text-[#E63946] border border-white/10">
            {group.icon}
          </div>
          <div>
            <span className="text-[10px] font-technical-sm text-white/40 uppercase tracking-[0.4em]">Matrix_Sector_0{group.id}</span>
            <h3 className="text-4xl font-display-xl text-white uppercase">{group.category}</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {group.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="relative group/item"
            >
              <div className="flex justify-between items-center mb-2 px-1">
                <span className="text-[10px] font-technical-sm text-white uppercase tracking-widest">{skill.name}</span>
                <span className="text-[9px] font-technical-sm text-[#E63946]">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                   className="h-full bg-[#E63946] relative"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* HUD Elements */}
        <div className="mt-12 flex justify-between items-center opacity-40">
          <div className="text-[8px] font-technical-sm text-white uppercase tracking-widest">Protocol_Active</div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-[#E63946] rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};








export default LudoSkills;
