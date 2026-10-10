"use client";

import React from "react";
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">

      <div className="absolute inset-0 bg-[#2C3639]" />

      <div
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[150px]"
        style={{ backgroundColor: "rgba(162, 123, 92, 0.05)" }}
      />

      <div
        className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[150px]"
        style={{ backgroundColor: "rgba(63, 78, 79, 0.05)" }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
        style={{
          background: "radial-gradient(circle at center, rgba(162, 123, 92, 0.02) 0%, transparent 60%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;