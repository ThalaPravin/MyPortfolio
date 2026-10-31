"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollTelemetryHUD() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [velocityLevel, setVelocityLevel] = useState(1);
  const [activeSectionId, setActiveSectionId] = useState("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const sections = [
    { id: "hero", num: "01", name: "Hero" },
    { id: "cred", num: "02", name: "CRED SDE" },
    { id: "skills", num: "03", name: "Skills Matrix" },
    { id: "projects", num: "04", name: "3D Carousel" },
    { id: "hackathons", num: "05", name: "SIH Winner" },
    { id: "freelance", num: "06", name: "Clients" },
    { id: "lab", num: "07", name: "System Lab" },
    { id: "journey", num: "08", name: "Journey" },
    { id: "hire-me", num: "09", name: "Hire Me" },
    { id: "contact", num: "10", name: "Contact" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let velocityTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(Math.max(currentScrollY / maxScroll, 0), 1);
      setScrollProgress(Math.round(progress * 100));

      // Velocity calculation
      const delta = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;
      const level = Math.min(Math.max(Math.ceil(delta / 16), 1), 4);
      setVelocityLevel(level);

      clearTimeout(velocityTimeout);
      velocityTimeout = setTimeout(() => {
        setVelocityLevel(1);
      }, 140);

      // Detect active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.id === "hero" && currentScrollY < 350) {
          setActiveSectionId("hero");
          break;
        }
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSectionId(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(velocityTimeout);
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center select-none pointer-events-auto"
      aria-label="Scroll Navigator"
    >
      {/* Sleek, Slender Micro-Capsule (Width: ~34px) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-9 py-2.5 px-1 bg-[#09090C]/85 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.65)] flex flex-col items-center gap-2"
      >
        {/* Top: Minimal Crisp Percentage Counter */}
        <div className="flex flex-col items-center">
          <span className="font-mono text-[9px] font-bold text-[#00E599] leading-none tracking-tighter">
            {scrollProgress}%
          </span>
          <span className="w-1 h-1 rounded-full bg-[#00E599] mt-1 animate-pulse" />
        </div>

        {/* Vertical Rail with Pips */}
        <div className="relative py-1 flex flex-col items-center gap-1.5 my-0.5">
          {/* Subtle vertical center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10" />

          {/* Dynamic Laser Progress Fill */}
          <div
            style={{ height: `${scrollProgress}%` }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] bg-[#00E599] shadow-[0_0_8px_#00E599] transition-all duration-150"
          />

          {/* Interactive Micro Pips */}
          {sections.map((sec) => {
            const isActive = activeSectionId === sec.id;
            const isPipHovered = hoveredSection === sec.id;

            return (
              <div
                key={sec.id}
                className="relative flex items-center justify-center py-0.5"
                onMouseEnter={() => setHoveredSection(sec.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Floating Tooltip to the Left on Hover */}
                <AnimatePresence>
                  {isPipHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: 8, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 8, scale: 0.95 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute right-9 pointer-events-none whitespace-nowrap px-2.5 py-1 rounded-md bg-[#0C0C10]/95 backdrop-blur-md border border-white/15 text-[10px] font-mono shadow-[0_6px_20px_rgba(0,0,0,0.6)] flex items-center gap-1.5 z-50 text-white"
                    >
                      <span className="text-[#00E599] font-bold">{sec.num}</span>
                      <span className="text-zinc-500">//</span>
                      <span className="text-zinc-200">{sec.name}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* The Dot Pip */}
                <button
                  onClick={() => scrollToSection(sec.id)}
                  aria-label={`Jump to ${sec.name}`}
                  className="relative p-0.5 group outline-none"
                  data-cursor-text={sec.id.toUpperCase()}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.35 : isPipHovered ? 1.2 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      isActive
                        ? "bg-[#00E599] shadow-[0_0_10px_#00E599]"
                        : "bg-zinc-700/80 hover:bg-[#00E599]/80 border border-white/10 hover:border-[#00E599]"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Minimal Scroll Velocity Equalizer (3 micro bars) */}
        <div className="flex items-end gap-0.5 h-2 px-0.5">
          {[1, 2, 3].map((bar) => {
            const isLit = bar <= velocityLevel;
            return (
              <span
                key={bar}
                style={{ height: `${bar * 33}%` }}
                className={`w-0.5 rounded-full transition-all duration-150 ${
                  isLit ? "bg-[#00E599] shadow-[0_0_4px_#00E599]" : "bg-zinc-800"
                }`}
              />
            );
          })}
        </div>

        {/* Quick Back to Top Micro Trigger */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-5 h-5 rounded-full bg-white/5 hover:bg-[#00E599]/20 hover:text-[#00E599] text-zinc-400 flex items-center justify-center transition-all duration-200 mt-0.5"
          title="Scroll to Top"
          aria-label="Scroll to Top"
          data-cursor-text="TOP"
        >
          <ArrowUp className="w-2.5 h-2.5" />
        </button>
      </motion.div>
    </aside>
  );
}
