import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import ContactForm from "@/components/ContactForm";
import TelemetryGrid from "@/components/TelemetryGrid";
import TeamStructure from "@/components/TeamStructure";
import * as motion from "framer-motion/client";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <main className="min-h-screen bg-background selection:bg-primary/20">
      <Navbar />
      <Sidebar />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="lg:ml-20 pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto"
      >
        {/* Hero Content */}
        <motion.div variants={itemVariants} className="grid grid-cols-12 gap-6 items-end mb-24">
          <div className="col-span-12 lg:col-span-8">
            <div className="font-label-caps text-primary mb-6 flex items-center gap-4 text-[10px] tracking-[0.4em]">
              <span className="w-12 h-[1px] bg-primary/40"></span>
              CORE_MISSION_OBJECTIVE
            </div>
            <h1 className="font-display-xl text-5xl md:text-8xl text-on-background leading-[0.9] mb-10 uppercase tracking-tighter">
              THE <span className="text-primary relative inline-block">
                FULL STACK
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="absolute bottom-2 left-0 h-[4px] bg-primary/20 -z-10"
                />
              </span> JOURNEY.
            </h1>
            <p className="font-body-lg text-slate-400 max-w-2xl leading-relaxed border-l border-primary/20 pl-8">
              Hello! I'm Abid, a Computer Science student and aspiring Full Stack Developer with a passion for building interactive and dynamic web applications.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end gap-3 text-left lg:text-right opacity-40 hover:opacity-100 transition-opacity">
            <div className="text-[9px] font-label-caps text-slate-500 font-mono tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/40"></span>
              ACADEMIC_STATUS: ACTIVE
            </div>
            <div className="text-[9px] font-label-caps text-slate-500 font-mono tracking-widest">CS_STUDENT @ CORE_NEXUS</div>
            <div className="text-[9px] font-label-caps text-slate-500 font-mono tracking-widest">LEVEL: APPRENTICE_DEVELOPER</div>
          </div>
        </motion.div>

        {/* Balanced Grid Layout */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column: Profile & Team */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
            <ProfileCard />
            <TeamStructure />
          </div>

          {/* Right Column: Narrative & Contact */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
            <motion.div
              variants={itemVariants}
              className="glass-panel p-10 flex flex-col justify-center min-h-[300px] relative overflow-hidden group"
            >
              <div className="relative z-10">
                <span className="font-label-caps text-[10px] text-primary mb-4 block tracking-[0.2em]">OPERATIONAL_LEAD</span>
                <h2 className="font-headline-md text-3xl mb-6 text-on-background">BUILDING THE FUTURE</h2>
                <div className="space-y-6">
                  <p className="font-body-md text-slate-400 leading-relaxed">
                    I started my journey with HTML and CSS, and gradually moved into JavaScript, React, and Next.js. I love the challenge of turning complex problems into clean, efficient code.
                  </p>
                  <p className="font-body-md text-slate-400 leading-relaxed border-l-2 border-primary/20 pl-6">
                    Currently, I am learning backend technologies like Node.js, Express.js, and MongoDB to become a complete full stack developer. My goal is to work on real-world impactful projects.
                  </p>
                </div>
                <div className="flex gap-12 mt-8">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-label-caps text-slate-500 mb-1">LEARNING_PATH</span>
                    <span className="font-technical-sm text-primary">FULL_STACK_MASTERY</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-label-caps text-slate-500 mb-1">GOAL_OBJECTIVE</span>
                    <span className="font-technical-sm text-primary">PROFESSIONAL_DEV</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] rotate-12 pointer-events-none">
                <svg viewBox="0 0 100 100" className="fill-primary">
                  <path d="M0 0 L100 0 L100 100 Z" />
                </svg>
              </div>
              <div className="scanning-line opacity-10"></div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </div>
        </div>

        <motion.div variants={itemVariants} className="mt-24">
          <TelemetryGrid />
        </motion.div>
      </motion.section>

      <Footer />
    </main>
  );
}
