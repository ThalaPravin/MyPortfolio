"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function AmbientBackground() {
  const { scrollYProgress } = useScroll();

  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);
  const orb1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.25, 0.9]);
  const orb2Opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.12, 0.22, 0.18, 0.1]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic Scrolling Orb 1 (Emerald Glow) */}
      <motion.div
        style={{
          top: orb1Y,
          scale: orb1Scale,
        }}
        className="absolute left-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#00E599]/10 via-[#00E599]/3 to-transparent blur-[160px]"
      />

      {/* Dynamic Scrolling Orb 2 (Cyan & Gold Depth) */}
      <motion.div
        style={{
          bottom: orb2Y,
          opacity: orb2Opacity,
        }}
        className="absolute right-10 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-cyan-500/10 via-amber-500/5 to-transparent blur-[180px]"
      />

      {/* Faint Cybernetic Geometric Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(242, 242, 238, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(242, 242, 238, 0.4) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}
