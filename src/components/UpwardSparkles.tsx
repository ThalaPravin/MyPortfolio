"use client";

import { useEffect, useRef } from "react";

interface Sparkle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  opacityTarget: number;
  pulseSpeed: number;
  color: string;
}

export default function UpwardSparkles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Color palette: soft emerald, gold, crisp white
    const colors = [
      "rgba(0, 229, 153,",   // CRED emerald
      "rgba(242, 242, 238,", // Bone white
      "rgba(212, 175, 55,",  // Champagne gold
      "rgba(147, 197, 253,", // Cyan star
    ];

    const particleCount = Math.min(Math.floor(width / 22), 65);
    const sparkles: Sparkle[] = [];

    for (let i = 0; i < particleCount; i++) {
      sparkles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.6, // Very small: 0.6px to 2.4px
        speedY: Math.random() * 0.45 + 0.15, // Smooth upward drift
        speedX: (Math.random() - 0.5) * 0.2, // Subtle horizontal sway
        opacity: Math.random() * 0.7 + 0.15,
        opacityTarget: Math.random() * 0.8 + 0.2,
        pulseSpeed: Math.random() * 0.015 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.04;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Decay scroll velocity smoothly
      scrollVelocity *= 0.94;

      for (let i = 0; i < sparkles.length; i++) {
        const s = sparkles[i];

        // Move upward + scroll response
        s.y -= s.speedY + Math.abs(scrollVelocity);
        s.x += s.speedX + Math.sin(s.y * 0.005) * 0.2;

        // Reset if drifted past top of screen
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }
        if (s.x < -10) s.x = width + 10;
        if (s.x > width + 10) s.x = -10;

        // Subtle opacity pulsing
        if (Math.abs(s.opacity - s.opacityTarget) < 0.05) {
          s.opacityTarget = Math.random() * 0.75 + 0.15;
        }
        s.opacity += (s.opacityTarget - s.opacity) * s.pulseSpeed;

        // Draw sparkle
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color} ${s.opacity})`;
        ctx.shadowBlur = s.size > 1.2 ? 6 : 2;
        ctx.shadowColor = `${s.color} 0.6)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1] opacity-75"
      aria-hidden="true"
    />
  );
}
