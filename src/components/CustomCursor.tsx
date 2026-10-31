"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing outer ring
  const springX = useSpring(mouseX, { damping: 28, stiffness: 350 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 350 });

  useEffect(() => {
    // Only enable on desktop
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-pointer"
      );
      setIsPointer(!!interactive);

      const customBadge = target.closest("[data-cursor-text]") as HTMLElement | null;
      if (customBadge && customBadge.dataset.cursorText) {
        setCursorText(customBadge.dataset.cursorText);
      } else {
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden select-none">
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#00E599]/60 flex items-center justify-center pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorText ? 72 : isPointer ? 48 : 28,
          height: cursorText ? 72 : isPointer ? 48 : 28,
          backgroundColor: cursorText
            ? "rgba(0, 229, 153, 0.9)"
            : isPointer
            ? "rgba(0, 229, 153, 0.15)"
            : "rgba(0, 229, 153, 0.05)",
          borderColor: cursorText
            ? "#00E599"
            : isPointer
            ? "rgba(0, 229, 153, 0.8)"
            : "rgba(242, 242, 238, 0.3)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
      >
        {cursorText && (
          <span className="font-mono text-[9px] font-bold uppercase text-black tracking-widest text-center px-1">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#00E599] pointer-events-none shadow-[0_0_8px_#00E599]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorText ? 0 : isPointer ? 1.5 : 1,
        }}
      />
    </div>
  );
}
