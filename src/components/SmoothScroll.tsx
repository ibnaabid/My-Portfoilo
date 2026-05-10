"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Use a ref to store the Lenis instance to avoid potential re-initialization issues
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,

      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // 2. Add class to HTML for CSS requirements
    document.documentElement.classList.add("lenis");

    // 3. Optimized RAF loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // 4. Cleanup function (Crucial for Deployment)
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("lenis");
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}