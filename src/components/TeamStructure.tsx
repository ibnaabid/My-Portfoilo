"use client";

import React from "react";
import { motion } from "framer-motion";

const operators = [
  {
    id: 1,
    name: "Operator_01",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdEuAs4oT0HqoNhZGrq1JMMs0S1NiYEfw5YRQNNSZQ10VwU0jZeDymruNawCXAvcRstcCOo02-xbxmrY8hz9olDSSmxIINmJKIuV7QBsJ7g_jQT9NIT2fIrMzxZGgAwP8ONblqBozdp6HbIcS_JCsRtEPFj4go1Yx8mg9LRbCqrx6uy5cXO45Jhzlds9GktPkO3ntA4W61WqSyQvsm67R9mk3biM2aSHhTXVwd-gbvTpgmge4ZRjmzFMxjWJ5RbarC2LSTxD8OmRNo",
  },
  {
    id: 2,
    name: "Operator_02",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAumMCP-g4NYmMgrDM7nc-RSbo7UVoNpMgtKQ7CnefeyVeA30oJQCw4sXPItRJ7_VOn5lMv6LUKL2tG5tAvRGFEtt4VvNsDgEUC7Qba05JMLj1LXFte-9UgqTr-CSMyzmwSf1RNhTzv0KaBDesRG-BpQCzqWjD1k6H6EWdhw_V5l_8Y_R11fZOSxG8pfKNHnWSAW346UfowZtNZJOJuCFR7zBfI7ExcjnN-iimCW4fTKCfQU9Mn6BDewcgd3Zr_eNiuCKnzvfh9GSJQ",
  },
  {
    id: 3,
    name: "Operator_03",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARnnhxYMuT_Bo3f-lyL3lyZMGsh52EqsmmhZ3ON1qUkOwEM8WUlw1CabcHmiRXswonNI4vqCT-dq4rPtQ7RcxAZpF0Cp19AB7Pn4zeiNwI0JoYOtDYEZcF0uQT4k-UbcajvY0xdVMO-46zVBzWPqrh4KCY4SEcVVB9iOU7PMyQYU5YRB6G4VPmensFRBOI3JPTEWZ_jOzbwAvb5hxt-f1qE_l_U0p_sGGOGe2UywzyXqNQ1-0tExJGvw6PaFIpomEh5X2c-TRzyFGd",
  },
];

const TeamStructure = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel p-8 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4">
        <span className="font-technical-sm text-[8px] text-primary">02_COLLAB</span>
      </div>
      
      <h3 className="font-headline-md text-xl text-on-background mb-8 flex items-center gap-2">
        <span className="w-1 h-6 bg-primary/40 block"></span>
        LEARNING_NETWORK
      </h3>

      <div className="flex items-center gap-6 mb-10">
        <div className="flex -space-x-3">
          {operators.map((op, index) => (
            <motion.div
              key={op.id}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
            >
              <img
                src={op.img}
                alt={op.name}
                className="w-12 h-12 rounded-full border-2 border-background object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-black text-[6px] font-bold px-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {op.name}
              </div>
            </motion.div>
          ))}
          <div className="w-12 h-12 rounded-full border-2 border-background bg-surface-container-highest flex items-center justify-center text-[10px] font-label-caps text-primary">
            +5
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-technical-sm text-slate-400 text-[10px]">Active Collaborators</span>
          <span className="text-[8px] text-primary/60 font-mono animate-pulse uppercase">Status: Connected</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
        <div className="flex flex-col">
          <span className="font-label-caps text-[8px] text-slate-500 mb-1">NETWORK_STRENGTH</span>
          <div className="flex gap-1 h-1 items-end">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                animate={{ height: ["20%", "100%", "20%"] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className="w-1 bg-primary/40"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col text-right">
          <span className="font-label-caps text-[8px] text-slate-500 mb-1">UPTIME_CLOCK</span>
          <span className="font-technical-sm text-primary text-[10px] font-mono">99.98%</span>
        </div>
      </div>
      
      <div className="scanning-line opacity-20"></div>
    </motion.div>
  );
};

export default TeamStructure;
