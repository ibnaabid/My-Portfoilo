"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LudoSkills from "@/components/LudoSkills";
import DetailedProjects from "@/components/DetailedProjects";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import CinematicIntro from "@/components/CinematicIntro";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="min-h-screen">
      <CinematicIntro onComplete={() => setIntroComplete(true)} />
      
      <AnimatePresence>
        {introComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar />
            <Sidebar />
            <div className="ml-0 lg:ml-20">
              <div id="home"><Hero /></div>
              <div id="about">
                <About />
              </div>
              <Stats />
              <div id="skills"><LudoSkills /></div>
              <div id="projects"><DetailedProjects /></div>
              <div id="experience"><Experience /></div>
              <div id="contact" className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
                <ContactForm />
              </div>
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

