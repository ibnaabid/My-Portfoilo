"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, User, Mail, Menu, X, Rocket } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for sticky effect and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/#home", id: "home", icon: <Home size={16} />, color: "#38BDF8", animType: "pulse" },
    { label: "About", href: "/#about", id: "about", icon: <User size={16} />, color: "#818CF8", animType: "glow" },
    { label: "Skills", href: "/#skills", id: "skills", icon: <Rocket size={16} />, color: "#38BDF8", animType: "glitch" },
    { label: "Projects", href: "/#projects", id: "projects", icon: <Briefcase size={16} />, color: "#818CF8", animType: "glow" },
    { label: "Experience", href: "/#experience", id: "experience", icon: <Briefcase size={16} />, color: "#38BDF8", animType: "pulse" },
    { label: "Contact", href: "/#contact", id: "contact", icon: <Mail size={16} />, color: "#818CF8", animType: "ping" },
  ];

  const isActive = (item: any) => {
    if (item.href === pathname) return true;
    if (activeSection === item.id) return true;
    return false;
  };

  const ActiveBackground = ({ item }: { item: typeof navItems[0] }) => {
    return (
      <motion.div
        layoutId="activePill"
        className="absolute inset-0 rounded-full -z-10 border border-white/10 overflow-hidden"
        style={{
          backgroundColor: `${item.color}15`, // 15 is hex for low opacity
          boxShadow: `0 0 20px ${item.color}33`,
        }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      >
        {/* Unique Internal Animations */}
        {item.animType === "pulse" && (
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-white rounded-full"
          />
        )}

        {item.animType === "glitch" && (
          <motion.div
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />
        )}

        {item.animType === "glow" && (
          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent"
          />
        )}

        {item.animType === "ping" && (
          <motion.div
            animate={{
              scale: [1, 1.5],
              opacity: [0.5, 0],
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 border-2 rounded-full"
            style={{ borderColor: item.color }}
          />
        )}
      </motion.div>
    );
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-[100] px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`max-w-fit mx-auto flex items-center gap-2 p-2 rounded-full border transition-all duration-700 pointer-events-auto ${isScrolled
          ? "bg-slate-950/80 backdrop-blur-[40px] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          : "bg-white/[0.03] backdrop-blur-[15px] border-white/5"
          }`}
      >
        {/* Left Side: Logo & Branding */}
        <Link href="/#home" className="flex items-center gap-4 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 border border-primary/40 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            <div className="absolute inset-0 border border-primary/20 rounded-sm -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
            <span className="text-white font-black text-xl z-10">A</span>
          </div>
          <div className="flex flex-col border-l border-white/10 pl-4">
            <span className="font-bold tracking-widest text-white text-lg">ABID</span>
            <span className="text-[8px] font-technical-sm text-primary tracking-[0.3em] uppercase opacity-60">FRONTEND_DEV</span>
          </div>
        </Link>

        {/* Center: Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative px-5 py-2.5 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase transition-all rounded-full group ${isActive(item) ? "text-white" : "text-slate-400"
                }`}
              style={!isActive(item) ? { color: undefined } : {}}
            >
              {/* Hover Color Logic via Inline Style or Utility */}
              <motion.span
                className="flex items-center gap-2 z-10"
                whileHover={{ color: item.color }}
                style={isActive(item) ? { color: "white" } : {}}
              >
                {item.icon}
                <span className="hidden lg:inline">{item.label}</span>
              </motion.span>

              {isActive(item) && <ActiveBackground item={item} />}

              {/* Bottom line animation */}
              <motion.div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "16px", backgroundColor: item.color }}
                style={isActive(item) ? { width: "16px", backgroundColor: item.color } : {}}
              />
            </Link>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            borderColor: "#38BDF8",
            boxShadow: "0 0 20px rgba(56, 189, 248, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          className="ml-4 px-8 py-2.5 bg-black border border-white/20 text-white font-bold text-[11px] tracking-widest uppercase rounded-full transition-all flex items-center gap-2 group"
        >
          <span className="group-hover:text-primary transition-colors">Hire Me</span>
          <Rocket size={14} className="group-hover:text-primary transition-colors" />
        </motion.button>




        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden ml-2 p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-6 right-6 p-4 bg-black/90 backdrop-blur-3xl border border-white/10 rounded-2xl md:hidden flex flex-col gap-2 pointer-events-auto shadow-2xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all ${isActive(item)
                  ? "bg-white/10 border border-white/10"
                  : "text-slate-400 hover:bg-white/5"
                  }`}
                style={isActive(item) ? { color: item.color, borderColor: `${item.color}33` } : {}}
              >
                <motion.div
                  className="flex items-center gap-4 w-full"
                  whileHover={{ color: item.color }}
                >
                  {item.icon}
                  {item.label}
                </motion.div>
              </Link>
            ))}
            <button className="w-full mt-4 py-5 bg-gradient-to-r from-primary to-primary-accent text-white font-bold uppercase tracking-widest rounded-xl">
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

