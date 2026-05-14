"use client";

import React from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-full z-40 flex-col items-center py-20 bg-slate-950/60 backdrop-blur-2xl border-r border-white/10 w-20">
      <div className="mb-12 flex flex-col items-center opacity-0 pointer-events-none h-0">
        {/* Profile section removed as per user request */}
      </div>

      <div className="flex flex-col w-full space-y-4">
        {/* Sidebar items removed as per user request */}
      </div>
    </aside>
  );
};

export default Sidebar;
