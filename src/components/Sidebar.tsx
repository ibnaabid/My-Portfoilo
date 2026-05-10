"use client";

import React from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-full z-40 flex-col items-center py-20 bg-slate-950/60 backdrop-blur-2xl border-r border-white/10 w-20">
      <div className="mb-12 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full border border-primary/40 p-0.5 overflow-hidden mb-2">
          <img
            alt="Director Profile"
            className="w-full h-full object-cover rounded-full"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhzb8zZmDDtjMX-CeC29KjYrCJlQ-WrdHTJDW8207L1lJ3iWoViV7NweHoZCqcVTK41u1dkAxvNU9EUnLaX54cNDscM_54sNqftsaislnHYTy1wyf1lVRrUMeT39-CVEsf68D6trANgE74JLozQHAwiFMrmAU_ap8kWpnnvuPbiWP7jM9cufWAVTexzuZDOYdQ6fj5yyq5CFVI900uxPpju8PPdk4V7h7j1orsCHlyc9qWWps3qAjHWiz0yWdNTjaU39YY692rthVQ"
          />
        </div>
        <span className="text-[8px] font-label-caps text-primary">OP_CENTER</span>
      </div>

      <div className="flex flex-col w-full space-y-4">
        {/* Sidebar items removed as per user request */}
      </div>
    </aside>
  );
};

export default Sidebar;
