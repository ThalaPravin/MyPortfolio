"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

interface KineticScrollMarqueeProps {
  baseSpeed?: number;
}

export default function KineticScrollMarquee({
  baseSpeed = 1.2,
}: KineticScrollMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Dynamic velocity factor that accelerates with scroll
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const baseX1 = useMotionValue(0);
  const baseX2 = useMotionValue(0);

  // Animate position every frame with base speed + scroll velocity impulse
  useAnimationFrame((_, delta) => {
    let moveBy1 = -baseSpeed * (delta / 16);
    let moveBy2 = baseSpeed * (delta / 16);

    const currentVelocity = velocityFactor.get();
    moveBy1 += -currentVelocity * 0.8;
    moveBy2 += currentVelocity * 0.8;

    let newX1 = baseX1.get() + moveBy1;
    let newX2 = baseX2.get() + moveBy2;

    // Wrap around infinitely (percentage based on repeat blocks)
    if (newX1 <= -50) newX1 += 50;
    if (newX1 > 0) newX1 -= 50;
    baseX1.set(newX1);

    if (newX2 >= 0) newX2 -= 50;
    if (newX2 < -50) newX2 += 50;
    baseX2.set(newX2);
  });

  const phrase1 = [
    "BACKEND SDE @ CRED",
    "DISTRIBUTED GO SYSTEMS",
    "LEETCODE KNIGHT 2103",
    "SMART INDIA HACKATHON WINNER ₹1L",
    "UBER FX & gRPC",
    "APPLIED AGENTIC AI & MCP",
  ];

  const phrase2 = [
    "KAFKA EVENT STREAMING",
    "22+ SHIPPED CLIENT CONTRACTS",
    "SUB-MILLISECOND REDIS",
    "KUBERNETES & DOCKER",
    "TOPMATE 1:1 MENTORSHIP",
    "FULL-TIME & FRACTIONAL",
  ];

  return (
    <div
      ref={containerRef}
      className="py-12 my-6 bg-[#070709] border-y border-white/5 overflow-hidden select-none relative group"
    >
      {/* Ambient background glow on velocity burst */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E599]/3 to-transparent pointer-events-none" />

      {/* Row 1: Leftward Kinetic Typography */}
      <motion.div
        style={{ x: baseX1 }}
        className="flex whitespace-nowrap mb-2.5"
      >
        {[...Array(4)].map((_, rep) => (
          <div key={rep} className="flex items-center gap-8 shrink-0 pr-8">
            {phrase1.map((item, idx) => (
              <span
                key={idx}
                className="flex items-center gap-8 font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white/80 group-hover:text-white transition-colors"
              >
                <span>{item}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00E599] shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Row 2: Rightward Kinetic Typography (Outlined Editorial Style) */}
      <motion.div
        style={{ x: baseX2 }}
        className="flex whitespace-nowrap"
      >
        {[...Array(4)].map((_, rep) => (
          <div key={rep} className="flex items-center gap-8 shrink-0 pr-8">
            {phrase2.map((item, idx) => (
              <span
                key={idx}
                className="flex items-center gap-8 font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-transparent transition-colors hover:text-[#00E599]"
                style={{
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.25)",
                }}
              >
                <span>{item}</span>
                <span className="w-2 h-2 rounded-full border border-[#00E599]/60 shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
