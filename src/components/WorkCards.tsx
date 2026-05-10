"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroFeatureCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="col-span-12 lg:col-span-8 group relative overflow-hidden glass-panel rounded-lg"
  >
    <div className="aspect-[16/9] w-full overflow-hidden">
      <img
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src="/Gemini_Generated_Image_evtujaevtujaevtu.png"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
    </div>
    <div className="absolute top-6 right-6">
      <div className="px-3 py-1 bg-primary text-black font-label-caps text-[9px] border border-primary/50 shadow-[0_0_15px_rgba(88,216,223,0.4)]">
        PREMIUM_CORE
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
      <div>
        <div className="flex items-center space-x-3 mb-2">
          <span className="px-2 py-0.5 border border-white/20 text-[8px] font-label-caps text-white/60">DIRECTOR'S CUT</span>
          <span className="px-2 py-0.5 border border-primary/40 text-[8px] font-label-caps text-primary">8K_RAW</span>
        </div>
        <h3 className="font-headline-lg text-white mb-2 text-3xl">NEON_FRONTIER</h3>
        <p className="font-body-md text-slate-300 max-w-lg">An exploratory journey into the intersection of light-speed travel and sentient architecture.</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-end">
          <span className="font-label-caps text-[9px] text-white/40">RUNTIME</span>
          <span className="font-technical-sm text-primary">00:14:22:04</span>
        </div>
        <Link href="/project/neon-drift">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#58d8df", color: "#000" }}
            className="w-14 h-14 rounded-full border border-primary/50 flex items-center justify-center transition-all duration-300"
          >
            <span className="material-symbols-outlined">play_arrow</span>
          </motion.button>
        </Link>
      </div>
    </div>
  </motion.div>
);

export const MetaCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="col-span-12 md:col-span-6 lg:col-span-4 glass-panel rounded-lg flex flex-col p-8 inner-glow"
  >
    <div className="flex justify-between items-start mb-12">
      <div className="font-headline-md text-xl leading-none">ARCHIVE_01</div>
      <span className="material-symbols-outlined text-primary/40">grid_view</span>
    </div>
    <div className="flex-1 space-y-8">
      <div className="space-y-4">
        {[
          { label: "PROJECT_ID", value: "XC_8829_ALPHA" },
          { label: "CAMERA_SPEC", value: "ALEXA_LF" },
          { label: "BIT_DEPTH", value: "16_BIT_LINEAR" },
        ].map((item) => (
          <div key={item.label} className="flex justify-between items-end border-b border-white/5 pb-2">
            <span className="font-label-caps text-slate-500 text-[10px]">{item.label}</span>
            <span className="font-technical-sm text-xs">{item.value}</span>
          </div>
        ))}
      </div>
      <div className="p-4 border border-white/10 bg-white/5 space-y-4">
        <div className="flex justify-between text-[10px] font-label-caps text-slate-400">
          <span>INDEXING_STORAGE</span>
          <span>84%</span>
        </div>
        <div className="h-1 bg-white/10 w-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "84%" }}
            className="h-full bg-primary"
          />
        </div>
      </div>
    </div>
    <button className="mt-8 w-full py-4 border border-white/10 font-label-caps text-[10px] hover:border-primary hover:text-primary transition-all">
      DOWNLOAD_METADATA_EXT
    </button>
  </motion.div>
);

export const WorkGridCard = ({ title, sub, img, delay = 0 }: { title: string, sub: string, img: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer"
  >
    <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={img} />
      <div className="absolute top-4 left-4 flex space-x-2">
        <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-[8px] font-label-caps text-white border border-white/10">STORY_02</span>
        <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-[8px] font-label-caps text-primary border border-primary/20">PROCESS_COMPLETE</span>
      </div>
    </div>
    <h4 className="font-headline-md text-[20px] mb-1">{title}</h4>
    <div className="flex justify-between items-center">
      <span className="font-technical-sm text-slate-500 text-xs">{sub}</span>
      <span className="material-symbols-outlined text-slate-600 group-hover:text-primary transition-colors">arrow_outward</span>
    </div>
  </motion.div>
);

export const UploadCard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4 }}
    className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer"
  >
    <div className="relative aspect-square overflow-hidden rounded-lg mb-4 glass-panel inner-glow flex items-center justify-center">
      <div className="absolute inset-0 opacity-20">
        <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida/ADBb0uigoLCIK_U9kZNJrVb8mNpvDW8oaKQBcayiJrttXFHquZI7WgxKJcyd3Y3b16k68aA0c2Rf82rixwjJqxZMFLDsllO4ZGt92fLpmK2VFmWSlAuzRXCzsxJ4l3f0zmkoYK8jNeUi2-V_KiMzuL9eFE7gJBGJb03qgWv2zNs0isvG2HvAJ5iGHg_ZC6vSQQkCmuiN3VV7f_ofdSoZNUogE8N1AZi7vd0sbz_Jk0gC4rnlHWDlZnHt42drbsS0tFKJczOe2_0pt_zbRbI" />
      </div>
      <div className="z-10 text-center px-12 group-hover:scale-110 transition-transform duration-300">
        <span className="material-symbols-outlined text-primary text-4xl mb-4">add_circle</span>
        <p className="font-label-caps text-[11px] text-primary">UPLOAD_NEW_SEQUENCE</p>
        <p className="font-technical-sm text-slate-500 mt-2 text-[10px]">DRAG AND DROP .RAW FILES HERE</p>
      </div>
    </div>
    <h4 className="font-headline-md text-[20px] mb-1">INITIATE_SESSION</h4>
    <div className="flex justify-between items-center">
      <span className="font-technical-sm text-slate-500 text-xs">UPLOADER_V1.2 // SECURE</span>
      <span className="text-[10px] font-label-caps text-white/20">AWAITING_INPUT</span>
    </div>
  </motion.div>
);
