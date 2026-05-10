"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel p-10 relative overflow-hidden group border border-white/5"
    >
      <div className="absolute top-0 right-0 p-4 z-20">
        <span className="font-technical-sm text-[8px] text-primary">03_LINK</span>
      </div>

      <div className="relative z-10">
        <h3 className="font-headline-md text-3xl text-on-background mb-2">INITIATE_UPLINK</h3>
        <p className="font-body-md text-slate-500 mb-10 max-w-md">Establish a secure connection for collaboration or direct inquiry.</p>

        <form className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group/input">
              <label className="font-label-caps text-[8px] text-primary absolute -top-4 left-0 opacity-70 group-focus-within/input:opacity-100 transition-opacity">OPERATOR_ID</label>
              <input 
                className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-3 font-body-md text-white transition-all focus:pl-2" 
                placeholder="IDENTIFY" 
                type="text" 
              />
              <div className="absolute bottom-0 left-0 h-[1px] bg-primary w-0 group-focus-within/input:w-full transition-all duration-500"></div>
            </div>
            <div className="relative group/input">
              <label className="font-label-caps text-[8px] text-primary absolute -top-4 left-0 opacity-70 group-focus-within/input:opacity-100 transition-opacity">UPLINK_ADDR</label>
              <input 
                className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-3 font-body-md text-white transition-all focus:pl-2" 
                placeholder="EMAIL" 
                type="email" 
              />
              <div className="absolute bottom-0 left-0 h-[1px] bg-primary w-0 group-focus-within/input:w-full transition-all duration-500"></div>
            </div>
          </div>

          <div className="relative group/input">
            <label className="font-label-caps text-[8px] text-primary absolute -top-4 left-0 opacity-70 group-focus-within/input:opacity-100 transition-opacity">DATA_PAYLOAD</label>
            <textarea 
              className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-3 font-body-md text-white transition-all focus:pl-2 resize-none" 
              placeholder="TRANSMIT_MESSAGE..." 
              rows={2}
            ></textarea>
            <div className="absolute bottom-0 left-0 h-[1px] bg-primary w-0 group-focus-within/input:w-full transition-all duration-500"></div>
            <span className="blinking-cursor absolute right-0 bottom-4"></span>
          </div>

          <motion.button 
            whileHover={{ 
              backgroundColor: "rgba(88, 216, 223, 0.1)",
              gap: "2rem"
            }}
            whileTap={{ scale: 0.99 }}
            className="w-full border border-primary/30 text-primary font-label-caps py-6 hover:border-primary transition-all flex justify-between items-center px-10 group/btn relative overflow-hidden" 
            type="submit"
          >
            <span className="relative z-10">EXECUTE_SEND</span>
            <span className="material-symbols-outlined relative z-10 group-hover/btn:translate-x-2 transition-transform">trending_flat</span>
            
            {/* Button background animation */}
            <motion.div 
              className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"
            />
          </motion.button>
        </form>

        <div className="mt-12 flex flex-wrap gap-8 opacity-40 group-hover:opacity-80 transition-opacity duration-500">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm">alternate_email</span>
            <span className="font-technical-sm text-[10px]">HI@ABID.DEV</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm">terminal</span>
            <span className="font-technical-sm text-[10px]">DIN_BD_REGION</span>
          </div>
        </div>
      </div>

      <div className="scanning-line opacity-10"></div>
      
      {/* Decorative SVG elements */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-5 pointer-events-none rotate-45">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-primary fill-none">
          <rect x="10" y="10" width="80" height="80" />
          <circle cx="50" cy="50" r="30" />
          <line x1="0" y1="50" x2="100" y2="50" />
        </svg>
      </div>
    </motion.div>
  );
};

export default ContactForm;
