"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof typeof formData) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "Unable to send message.");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel p-10 relative overflow-hidden group border border-primary/30 bg-slate-950/80"
    >
      <div className="absolute top-0 right-0 p-4 z-20">
        <span className="font-technical-sm text-[8px] text-primary">03_LINK</span>
      </div>

      <div className="relative z-10">
        <h3 className="font-headline-md text-3xl text-on-background mb-2">INITIATE_UPLINK</h3>
        <p className="font-body-md text-slate-500 mb-10 max-w-md">Establish a secure connection for collaboration or direct inquiry.</p>

        <form className="space-y-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group/input">
              <label className="font-label-caps text-[8px] text-primary absolute -top-4 left-0 opacity-70 group-focus-within/input:opacity-100 transition-opacity">OPERATOR_ID</label>
              <input 
                className="w-full bg-transparent border-b border-primary/30 focus:border-primary outline-none py-3 font-body-md text-white transition-all focus:pl-2" 
                placeholder="IDENTIFY" 
                type="text" 
                value={formData.name}
                onChange={handleChange("name")}
              />
              <div className="absolute bottom-0 left-0 h-[1px] bg-primary w-0 group-focus-within/input:w-full transition-all duration-500"></div>
            </div>
            <div className="relative group/input">
              <label className="font-label-caps text-[8px] text-primary absolute -top-4 left-0 opacity-70 group-focus-within/input:opacity-100 transition-opacity">UPLINK_ADDR</label>
              <input 
                className="w-full bg-transparent border-b border-primary/30 focus:border-primary outline-none py-3 font-body-md text-white transition-all focus:pl-2" 
                placeholder="EMAIL" 
                type="email" 
                value={formData.email}
                onChange={handleChange("email")}
              />
              <div className="absolute bottom-0 left-0 h-[1px] bg-primary w-0 group-focus-within/input:w-full transition-all duration-500"></div>
            </div>
          </div>

          <div className="relative group/input">
            <label className="font-label-caps text-[8px] text-primary absolute -top-4 left-0 opacity-70 group-focus-within/input:opacity-100 transition-opacity">DATA_PAYLOAD</label>
            <textarea 
              className="w-full bg-transparent border-b border-primary/30 focus:border-primary outline-none py-3 font-body-md text-white transition-all focus:pl-2 resize-none" 
              placeholder="TRANSMIT_MESSAGE..." 
              rows={4}
              value={formData.message}
              onChange={handleChange("message")}
            ></textarea>
            <div className="absolute bottom-0 left-0 h-[1px] bg-primary w-0 group-focus-within/input:w-full transition-all duration-500"></div>
            <span className="blinking-cursor absolute right-0 bottom-4"></span>
          </div>

          <motion.button 
            whileHover={{ 
              backgroundColor: "rgba(88, 216, 223, 0.12)",
              gap: "2rem"
            }}
            whileTap={{ scale: 0.99 }}
            className="w-full border border-primary/30 bg-primary/10 text-white font-label-caps py-6 hover:bg-primary/20 hover:border-primary transition-all flex justify-between items-center px-10 group/btn relative overflow-hidden" 
            type="submit"
            disabled={status === "sending"}
          >
            <span className="relative z-10">{status === "sending" ? "SENDING..." : "EXECUTE_SEND"}</span>
            <span className="material-symbols-outlined relative z-10 group-hover/btn:translate-x-2 transition-transform">trending_flat</span>
            
            <motion.div 
              className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"
            />
          </motion.button>
        </form>
        {status === "success" && (
          <div className="mt-6 text-emerald-300 text-sm">Message sent successfully. I will contact you soon.</div>
        )}
        {status === "error" && (
          <div className="mt-6 text-rose-300 text-sm">{error || "Failed to send message."}</div>
        )}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-80 transition-opacity duration-500">
          <a href="mailto:mdibnaabid123@gmail.com" className="flex items-center gap-3 text-primary text-[10px] font-technical-sm hover:text-white transition-colors">
            <span className="material-symbols-outlined text-primary text-sm">alternate_email</span>
            <span>mdibnaabid123@gmail.com</span>
          </a>
          <a href="tel:+8801814055729" className="flex items-center gap-3 text-primary text-[10px] font-technical-sm hover:text-white transition-colors">
            <span className="material-symbols-outlined text-primary text-sm">phone</span>
            <span>WP: 01814055729</span>
          </a>
          <a href="https://www.linkedin.com/in/mdibnaabid" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-primary text-[10px] font-technical-sm hover:text-white transition-colors">
            <span className="material-symbols-outlined text-primary text-sm">share</span>
            <span>LinkedIn Profile</span>
          </a>
        </div>

        <div className="mt-8">
          <a
            href="mailto:mdibnaabid123@gmail.com?subject=Contact%20via%20Portfolio&body=Hi%20Abid,%20I%20would%20like%20to%20talk%20about%20your%20portfolio%20projects."
            className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary/20 hover:text-white"
          >
            Email Me Directly
          </a>
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
