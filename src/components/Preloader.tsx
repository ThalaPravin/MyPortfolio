"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fast initial tick, then accelerating to 100
    const duration = 1600; // 1.6s
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out
      const current = Math.floor(progress * 100);
      setCount(current);

      if (progress >= 1) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
        }, 300);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#050505] text-[#f2f2ee] p-5 md:p-10 select-none overflow-hidden"
          role="status"
          aria-label="Loading portfolio"
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse" />
              <span>PRAVIN AVHAD — PORTFOLIO</span>
            </div>
            <div className="hidden sm:block text-zinc-500">
              BACKEND SDE @ CRED
            </div>
            <div>©2026 // SYSTEM INIT</div>
          </div>

          {/* Center Coordinates */}
          <div className="flex flex-col items-center justify-center text-center my-auto opacity-40 text-xs font-mono tracking-widest uppercase">
            <span>DISTRIBUTED SYSTEMS • GO • AGENTIC AI</span>
            <span className="text-[10px] text-zinc-600 mt-1">18.5204° N, 73.8567° E [ INDIA ]</span>
          </div>

          {/* Bottom Huge Number & Progress Line */}
          <div>
            <div className="font-display font-light leading-[0.75] text-[20vw] sm:text-[22vw] tracking-tighter text-[#f2f2ee] tabular-nums flex items-baseline justify-between">
              <span>{count.toString().padStart(3, "0")}</span>
              <span className="text-xs md:text-sm font-mono tracking-widest text-[#00E599] uppercase mb-4">
                {count < 100 ? "Loading Services..." : "Engine Ready"}
              </span>
            </div>

            {/* Hairline bar */}
            <div className="w-full h-[1px] bg-white/10 mt-2 relative overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00E599] via-white to-[#00E599]"
                style={{ width: `${count}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
