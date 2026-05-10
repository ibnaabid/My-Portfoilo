"use client";

import React from "react";
import { motion } from "framer-motion";

const TelemetryGrid = () => {
  const metrics = [
    { label: "SYSTEM_LOAD", value: "65%" },
    { label: "BUFFER_HEALTH", value: "88%" },
    { label: "SIGNAL_STRENGTH", value: "42%" },
    { label: "SYNC_LOCK", value: "ACTIVE" },
  ];

  return (
    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12">
      {metrics.map((metric, i) => (
        <motion.div 
          key={metric.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="space-y-2"
        >
          <div className="h-1 bg-white/5 relative overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: metric.value === "ACTIVE" ? "100%" : metric.value }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-0 top-0 h-full bg-[#00A9B0]"
            />
          </div>
          <div className="flex justify-between font-technical-sm text-[10px]">
            <span className="text-slate-500 uppercase">{metric.label}</span>
            <span className="text-[#00A9B0] uppercase">{metric.value}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TelemetryGrid;
