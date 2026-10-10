"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { Zap, Code2, Database, Cpu as Chip } from "lucide-react";

const SKILL_GROUPS = [
  {
    id: "01",
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 98, color: "#E34F26" },
      { name: "CSS3", level: 95, color: "#1572B6" },
      { name: "Tailwind", level: 96, color: "#38BDF8" },
      { name: "JavaScript", level: 94, color: "#F7DF1E" },
      { name: "React", level: 92, color: "#61DAFB" },
      { name: "Next.js", level: 90, color: "#E5E7EB" }
    ],
    icon: <Code2 size={24} />,
  },
  {
    id: "02",
    category: "Backend",
    skills: [
      { name: "Java", level: 75, color: "#F7DF1E" },
      { name: "Node.js", level: 88, color: "#3C873A" },
      { name: "Express.js", level: 90, color: "#9CA3AF" },
      { name: "MongoDB", level: 85, color: "#47A248" },
      { name: "BetterAuth", level: 80, color: "#A78BFA" },
      { name: "API Design", level: 85, color: "#38BDF8" },
      { name: "Server Actions", level: 82, color: "#E67E22" }
    ],
    icon: <Database size={24} />,
  },
  {
    id: "03",
    category: "Tools",
    skills: [
      { name: "Git", level: 92, color: "#F05032" },
      { name: "GitHub", level: 95, color: "#E5E7EB" },
      { name: "Framer Motion", level: 90, color: "#BB4BFF" },
      { name: "VS Code", level: 94, color: "#007ACC" }
    ],
    icon: <Chip size={24} />,
  },
];

const ORBIT_SKILL_NAMES = ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Node.js", "MongoDB", "GitHub"];
const ORBIT_POSITIONS = [
  { top: "4%", left: "50%" },
  { top: "17%", left: "83%" },
  { top: "50%", left: "96%" },
  { top: "83%", left: "83%" },
  { top: "96%", left: "50%" },
  { top: "83%", left: "17%" },
  { top: "50%", left: "4%" },
  { top: "17%", left: "17%" },
];
const ORBIT_SKILLS = SKILL_GROUPS
  .flatMap((group) => group.skills)
  .filter((skill) => ORBIT_SKILL_NAMES.includes(skill.name));

const LudoSkills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-xl"
            >
              <span className="font-technical-sm text-[#E63946] tracking-[0.5em] uppercase text-[10px] mb-2 block">Skill_Matrix // 2024</span>
              <h2 className="text-6xl md:text-8xl font-display-xl text-white leading-none uppercase tracking-tighter">
                TECH <br /> <span className="text-[#E63946]/40">STACK</span>
              </h2>
            </motion.div>
            
            <div className="w-16 h-16 bg-[#E63946]/5 border border-[#E63946]/20 rounded-full flex items-center justify-center text-[#E63946] backdrop-blur-md">
              <Zap size={32} />
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

        <div className="absolute top-1/2 left-1/2 w-[min(92vw,820px)] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 pointer-events-none z-20">
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            {ORBIT_SKILLS.map((skill, index) => (
              <div
                key={skill.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={ORBIT_POSITIONS[index]}
              >
                <motion.div
                  animate={shouldReduceMotion ? undefined : { rotate: -360 }}
                  transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 p-1 md:h-14 md:w-14"
                  style={{
                    background: `radial-gradient(circle at 30% 25%, white 0%, ${skill.color} 35%, ${skill.color}99 100%)`,
                    boxShadow: `0 0 24px ${skill.color}66`,
                  }}
                  title={skill.name}
                  aria-label={`${skill.name} skill bubble`}
                >
                  <span className="text-[9px] font-bold tracking-tight text-slate-950 md:text-[10px]">
                    {skill.name === "JavaScript" ? "JS" : skill.name === "HTML5" ? "HTML" : skill.name === "CSS3" ? "CSS" : skill.name === "MongoDB" ? "DB" : skill.name.slice(0, 2).toUpperCase()}
                  </span>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* The Board Center */}
        <div className="relative w-[300px] h-[300px] border border-white/10 rounded-full flex items-center justify-center z-10 bg-white/5 backdrop-blur-md">
          <Chip size={64} className="text-white/10" />
          
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
        </div>




      </div>
    </section>
  );
};

const SkillFocus = ({ group, progress, range }: { group: typeof SKILL_GROUPS[0], progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, [range[0], range[0] + 0.02, range[1] - 0.02, range[1]], [0, 1, 1, 0]);
  const scale = useTransform(progress, [range[0], range[0] + 0.02], [0.96, 1]);
  const y = useTransform(progress, [range[0], range[0] + 0.02], [8, 0]);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const unsubscribe = progress.on("change", (v: number) => {
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.03, duration: 0.2 }}
              className="relative group/item"
            >
              <div className="flex justify-between items-center mb-2 px-1">
                <span className="text-[10px] font-technical-sm uppercase tracking-widest" style={{ color: skill.color }}>{skill.name}</span>
                <span className="text-[9px] font-technical-sm" style={{ color: skill.color }}>{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.6, delay: i * 0.04 }}
                  className="h-full relative"
                  style={{ backgroundColor: skill.color }}
                />
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
