"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Zap, ArrowUp } from "lucide-react";

export default function ScrollTelemetryHUD() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [velocityLevel, setVelocityLevel] = useState(1);
  const [activeSection, setActiveSection] = useState("HERO");
  const [isHovered, setIsHovered] = useState(false);

  const sections = [
    { id: "hero", label: "01. HERO", name: "Pravin Avhad" },
    { id: "cred", label: "02. CRED", name: "Backend SDE" },
    { id: "skills", label: "03. STACK", name: "Tech Matrix" },
    { id: "projects", label: "04. LABS", name: "3D Carousel" },
    { id: "hackathons", label: "05. ARENA", name: "SIH Winner" },
    { id: "freelance", label: "06. CLIENTS", name: "22+ Shipped" },
    { id: "lab", label: "07. SYSTEM", name: "Arch Simulator" },
    { id: "journey", label: "08. STORY", name: "Bangalore Life" },
    { id: "hire-me", label: "09. HIRE", name: "Full/Fractional" },
    { id: "contact", label: "10. REACH", name: "Let's Talk" },
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

      // Compute scroll velocity
      const delta = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;

      // Map delta to velocity levels (1 to 5)
      const level = Math.min(Math.max(Math.ceil(delta / 14), 1), 5);
      setVelocityLevel(level);

      clearTimeout(velocityTimeout);
      velocityTimeout = setTimeout(() => {
        setVelocityLevel(1);
      }, 150);

      // Detect active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.id === "hero" && currentScrollY < 400) {
          setActiveSection("01. HERO");
          break;
        }
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(sec.label);
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 select-none pointer-events-auto"
      aria-label="Scroll Telemetry & Section Navigator"
    >
      {/* Telemetry Capsule */}
      <motion.div
        animate={{ width: isHovered ? "auto" : "auto" }}
        className="bg-[#09090C]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col items-end gap-2.5 transition-all duration-300"
      >
        {/* Top: Progress Percentage & Coordinates */}
        <div className="flex items-center gap-2 text-right">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none">
              TELEMETRY
            </span>
            <span className="font-display font-extrabold text-base text-[#00E599] leading-tight">
              {scrollProgress.toString().padStart(2, "0")}%
            </span>
          </div>
          <div className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
        </div>

        {/* Current Active Section Badge */}
        <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono font-semibold text-zinc-300 max-w-[120px] truncate text-right">
          {activeSection}
        </div>

        {/* Dynamic Velocity Equalizer Bars (Reacts dynamically to scroll speed) */}
        <div className="flex items-end gap-1 h-3.5 px-1 py-0.5 bg-black/40 rounded border border-white/5">
          {[1, 2, 3, 4, 5].map((bar) => {
            const isLit = bar <= velocityLevel;
            return (
              <span
                key={bar}
                style={{ height: `${bar * 20}%` }}
                className={`w-1 rounded-sm transition-all duration-100 ${
                  isLit ? "bg-[#00E599] shadow-[0_0_6px_#00E599]" : "bg-zinc-800"
                }`}
              />
            );
          })}
        </div>

        {/* Vertical Interactive Scrubber Track with Pips */}
        <div className="relative py-2 flex flex-col items-end gap-2 my-1">
          {/* Subtle vertical spine rail */}
          <div className="absolute right-[5px] top-0 bottom-0 w-[1px] bg-white/10" />

          {/* Active Progress Fill line */}
          <div
            style={{ height: `${scrollProgress}%` }}
            className="absolute right-[5px] top-0 w-[1px] bg-gradient-to-b from-[#00E599] to-[#00FF87] transition-all duration-150"
          />

          {/* Interactive Navigation Pips */}
          {sections.map((sec) => {
            const isActive = activeSection.startsWith(sec.label.slice(0, 3));
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="group relative flex items-center justify-end gap-2 py-0.5 outline-none"
                aria-label={`Jump to ${sec.name}`}
                data-cursor-text={sec.id.toUpperCase()}
              >
                {/* Hover Flyout Label */}
                <span
                  className={`text-[10px] font-mono tracking-wider transition-all duration-200 pointer-events-none whitespace-nowrap px-1.5 py-0.5 rounded ${
                    isHovered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-2 hidden group-hover:block"
                  } ${
                    isActive
                      ? "text-[#00E599] font-bold bg-[#00E599]/10 border border-[#00E599]/30"
                      : "text-zinc-400 bg-black/80 border border-white/5"
                  }`}
                >
                  {sec.name}
                </span>

                {/* Dot */}
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 relative z-10 flex items-center justify-center ${
                    isActive
                      ? "bg-[#00E599] shadow-[0_0_12px_#00E599] scale-125"
                      : "bg-zinc-800 border border-white/20 hover:border-[#00E599] hover:bg-zinc-600"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Bottom Coordinates or Back to Top Trigger */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[9px] font-mono text-zinc-500 hover:text-[#00E599] transition-colors flex items-center gap-1 mt-1 pt-1 border-t border-white/5 w-full justify-end"
          title="Scroll to Top"
          data-cursor-text="TOP"
        >
          <span>TOP</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </motion.div>
    </aside>
  );
}
