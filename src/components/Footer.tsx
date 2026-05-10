"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={18} />, label: "Instagram", href: "#" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
    { icon: <Twitter size={18} />, label: "X / Twitter", href: "#" },
    { icon: <Youtube size={18} />, label: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-slate-950 px-6 md:px-12 py-16 border-t border-white/5 relative z-50">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Brand Section */}
        <div className="md:col-span-4 space-y-6">
          <div className="text-2xl font-bold tracking-tighter text-primary font-headline-md uppercase">
            IBNA ABID
          </div>
          <p className="text-slate-500 text-sm max-w-xs font-body-md">
            Crafting high-fidelity digital experiences and technical narratives from Dinajpur, Bangladesh.
          </p>
          <div className="flex items-center space-x-3 text-primary/60">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="font-technical-sm text-[10px] tracking-widest uppercase">INFRASTRUCTURE: STABLE</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="font-label-caps text-xs text-white tracking-widest uppercase">Navigation</h4>
          <ul className="space-y-4">
            {["Showcase", "Narratives", "Capabilities", "Agency"].map((item) => (
              <li key={item}>
                <a href="#" className="text-slate-500 hover:text-primary text-xs transition-colors uppercase font-technical-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact/Location */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="font-label-caps text-xs text-white tracking-widest uppercase">Connect</h4>
          <div className="space-y-4">
            <div className="text-slate-500 text-xs font-technical-sm uppercase">
              DINAJPUR_POLYTECHNIC<br />
              DINAJPUR // BANGLADESH
            </div>
            <a href="mailto:hi@abid.dev" className="flex items-center space-x-2 text-primary text-xs font-technical-sm group">
              <span>mdibnaabid123@gmail.com</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="font-label-caps text-xs text-white tracking-widest uppercase">Frequencies</h4>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, color: "#58d8df", borderColor: "#58d8df" }}
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-slate-500 rounded-sm transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-technical-sm text-slate-600 uppercase tracking-widest">
        <div>© 2026 Abid. All rights reserved.</div>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition-colors">Privacy_Protocol</a>
          <a href="#" className="hover:text-white transition-colors">Terms_Of_Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
