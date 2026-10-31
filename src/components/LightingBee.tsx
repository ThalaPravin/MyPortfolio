"use client";

import { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

export default function LightingBee() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Track scroll position & target progress
    let targetScrollProgress = 0;
    let smoothScrollProgress = 0;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      targetScrollProgress = Math.min(Math.max(currentScrollY / maxScroll, 0), 1);
      scrollVelocity = (currentScrollY - lastScrollY) * 0.05;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initialize immediately
    handleScroll();
    smoothScrollProgress = targetScrollProgress;

    // Mouse tracking for subtle avoidance
    let mouseX = -9999;
    let mouseY = -9999;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Bee state
    let beeX = width * 0.3;
    let beeY = height * 0.4;
    let beeAngle = 0;
    let wingAngle = 0;
    let wingSpeed = 0.55;

    // Light trail & stardust sparks
    const trail: TrailPoint[] = [];
    const maxTrailLength = 32;

    interface Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      decay: number;
      color: string;
    }
    const sparks: Spark[] = [];

    let time = 0;

    const render = () => {
      time += 1;

      // Smoothly interpolate scroll progress with easing
      smoothScrollProgress += (targetScrollProgress - smoothScrollProgress) * 0.045;
      scrollVelocity *= 0.92;

      // Parametric Curvy Path across the viewport as user scrolls:
      // Uses harmonic sinusoidal waves (Lissajous curves) mapped along the scroll progression
      // As progress sweeps from 0 to 1, the curve sweeps across left, right, up, down in organic S-loops
      const wavePhase = smoothScrollProgress * Math.PI * 6; // 3 full harmonic cycles across the page
      
      // Calculate anchor on curvy path
      const pathX =
        width *
        (0.5 +
          0.34 * Math.sin(wavePhase) +
          0.12 * Math.cos(wavePhase * 2.1));
      
      const pathY =
        height *
        (0.48 +
          0.32 * Math.cos(wavePhase * 0.85) +
          0.1 * Math.sin(wavePhase * 1.7));

      // Organic idle micro-hovering (subtle biological drift even when not scrolling)
      const hoverX = Math.sin(time * 0.024) * 22 + Math.cos(time * 0.041) * 14;
      const hoverY = Math.cos(time * 0.028) * 18 + Math.sin(time * 0.036) * 12;

      let targetX = pathX + hoverX;
      let targetY = pathY + hoverY;

      // Mouse soft avoidance: gently veer away if cursor comes within 130px
      const dxToMouse = targetX - mouseX;
      const dyToMouse = targetY - mouseY;
      const distToMouse = Math.sqrt(dxToMouse * dxToMouse + dyToMouse * dyToMouse);
      if (distToMouse < 140 && distToMouse > 0) {
        const pushFactor = ((140 - distToMouse) / 140) * 55;
        targetX += (dxToMouse / distToMouse) * pushFactor;
        targetY += (dyToMouse / distToMouse) * pushFactor;
      }

      // Smoothly steer bee towards target position (fluid damping)
      const prevBeeX = beeX;
      const prevBeeY = beeY;
      beeX += (targetX - beeX) * 0.075;
      beeY += (targetY - beeY) * 0.075;

      const vx = beeX - prevBeeX;
      const vy = beeY - prevBeeY;
      const currentSpeed = Math.sqrt(vx * vx + vy * vy);

      // Smooth angle towards movement direction
      if (currentSpeed > 0.4) {
        const targetAngle = Math.atan2(vy, vx);
        // Shortest angular difference
        let diff = targetAngle - beeAngle;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        beeAngle += diff * 0.12;
      }

      // Wing flapping animation: faster when moving rapidly
      wingSpeed = 0.45 + Math.min(currentSpeed * 0.08, 0.4);
      wingAngle += wingSpeed;

      // Record light trail
      if (time % 2 === 0) {
        trail.unshift({
          x: beeX,
          y: beeY,
          size: Math.random() * 2.2 + 1.2,
          opacity: 0.65,
          color: Math.random() > 0.4 ? "#00E599" : "#FFE55C",
        });
        if (trail.length > maxTrailLength) {
          trail.pop();
        }
      }

      // Emit bioluminescent stardust sparks
      if (Math.random() < 0.35 + Math.min(currentSpeed * 0.06, 0.4)) {
        sparks.push({
          x: beeX - Math.cos(beeAngle) * 8 + (Math.random() - 0.5) * 4,
          y: beeY - Math.sin(beeAngle) * 8 + (Math.random() - 0.5) * 4,
          vx: -Math.cos(beeAngle) * (Math.random() * 1.5 + 0.5) + (Math.random() - 0.5) * 0.8,
          vy: -Math.sin(beeAngle) * (Math.random() * 1.5 + 0.5) + (Math.random() - 0.5) * 0.8,
          size: Math.random() * 1.8 + 0.8,
          opacity: 0.85,
          decay: Math.random() * 0.025 + 0.015,
          color: Math.random() > 0.35 ? "#00E599" : "#FFDF00",
        });
      }

      // CLEAR CANVAS
      ctx.clearRect(0, 0, width, height);

      // 1. RENDER LIGHT TRAIL (Curvy luminous ribbon)
      if (trail.length > 2) {
        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);
        for (let i = 1; i < trail.length - 1; i++) {
          const xc = (trail[i].x + trail[i + 1].x) / 2;
          const yc = (trail[i].y + trail[i + 1].y) / 2;
          ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        }
        ctx.strokeStyle = "rgba(0, 229, 153, 0.18)";
        ctx.lineWidth = 3.5;
        ctx.shadowColor = "#00E599";
        ctx.shadowBlur = 10;
        ctx.stroke();

        // Second thin core stroke
        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);
        for (let i = 1; i < trail.length - 1; i++) {
          const xc = (trail[i].x + trail[i + 1].x) / 2;
          const yc = (trail[i].y + trail[i + 1].y) / 2;
          ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        }
        ctx.strokeStyle = "rgba(255, 235, 120, 0.28)";
        ctx.lineWidth = 1.2;
        ctx.shadowBlur = 4;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Draw individual fading trail dust nodes
      for (let i = 0; i < trail.length; i++) {
        const pt = trail[i];
        pt.opacity -= 0.65 / maxTrailLength;
        if (pt.opacity > 0) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.size * (1 - i / maxTrailLength), 0, Math.PI * 2);
          ctx.fillStyle = pt.color === "#00E599" 
            ? `rgba(0, 229, 153, ${pt.opacity * 0.7})` 
            : `rgba(255, 229, 92, ${pt.opacity * 0.7})`;
          ctx.fill();
        }
      }

      // 2. RENDER STARDUST SPARKS
      for (let i = sparks.length - 1; i >= 0; i--) {
        const sp = sparks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.opacity -= sp.decay;
        sp.size *= 0.98;

        if (sp.opacity <= 0 || sp.size <= 0.2) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        ctx.fillStyle = sp.color === "#00E599"
          ? `rgba(0, 229, 153, ${sp.opacity})`
          : `rgba(255, 223, 0, ${sp.opacity})`;
        ctx.shadowColor = sp.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 3. RENDER AMBIENT LIGHT RADIANCE (Big soft aura around the bee)
      const glowGrad = ctx.createRadialGradient(
        beeX,
        beeY,
        2,
        beeX,
        beeY,
        140
      );
      glowGrad.addColorStop(0, "rgba(0, 229, 153, 0.16)");
      glowGrad.addColorStop(0.25, "rgba(255, 229, 92, 0.08)");
      glowGrad.addColorStop(0.65, "rgba(0, 229, 153, 0.03)");
      glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.beginPath();
      ctx.arc(beeX, beeY, 140, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // 4. RENDER THE LIGHTING BEE (Oriented along flight angle)
      ctx.save();
      ctx.translate(beeX, beeY);
      ctx.rotate(beeAngle);

      // --- WINGS (Translucent fluttering with emerald and cyber gold rim) ---
      const flap = Math.sin(wingAngle);
      const wingSpread = 0.85 + flap * 0.45;

      // Left Wing (top)
      ctx.save();
      ctx.rotate(-0.35 * wingSpread);
      ctx.scale(1, Math.sin(wingAngle));
      ctx.beginPath();
      ctx.ellipse(-2, -12, 10, 4.5, -Math.PI / 5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 229, 153, 0.28)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.65)";
      ctx.lineWidth = 0.75;
      ctx.shadowColor = "#00E599";
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.stroke();
      // Wing vein accent
      ctx.beginPath();
      ctx.moveTo(-2, -7);
      ctx.lineTo(-5, -14);
      ctx.strokeStyle = "rgba(0, 229, 153, 0.5)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.restore();

      // Right Wing (bottom)
      ctx.save();
      ctx.rotate(0.35 * wingSpread);
      ctx.scale(1, Math.sin(wingAngle + Math.PI));
      ctx.beginPath();
      ctx.ellipse(-2, 12, 10, 4.5, Math.PI / 5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 229, 153, 0.28)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.65)";
      ctx.lineWidth = 0.75;
      ctx.shadowColor = "#00E599";
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.stroke();
      // Wing vein accent
      ctx.beginPath();
      ctx.moveTo(-2, 7);
      ctx.lineTo(-5, 14);
      ctx.strokeStyle = "rgba(0, 229, 153, 0.5)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.restore();

      // --- ABDOMEN (Bioluminescent Glowing Stinger/Lantern) ---
      // Radiant pulsating lantern
      const lanternPulse = 0.8 + Math.sin(time * 0.08) * 0.2;
      
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(-8, 0, 7.5, 4.5, 0, 0, Math.PI * 2);
      const abdomenGrad = ctx.createLinearGradient(-15, 0, 0, 0);
      abdomenGrad.addColorStop(0, "#00E599"); // emerald tip
      abdomenGrad.addColorStop(0.45, "#FFDF00"); // bright electric gold
      abdomenGrad.addColorStop(0.85, "#18181B"); // dark obsidian thorax joint
      ctx.fillStyle = abdomenGrad;
      ctx.shadowColor = "#00E599";
      ctx.shadowBlur = 12 * lanternPulse;
      ctx.fill();

      // Cyber stripes across abdomen
      ctx.strokeStyle = "rgba(10, 10, 14, 0.85)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(-10, -3.5);
      ctx.lineTo(-10, 3.5);
      ctx.moveTo(-7, -4.2);
      ctx.lineTo(-7, 4.2);
      ctx.moveTo(-4, -4);
      ctx.lineTo(-4, 4);
      ctx.stroke();

      // Tiny Stinger tip spark
      ctx.beginPath();
      ctx.arc(-15.5, 0, 1.2, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = "#00FFB2";
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();

      // --- THORAX (Metallic Obsidian Core) ---
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(0, 0, 5, 4.2, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#16161D";
      ctx.strokeStyle = "rgba(0, 229, 153, 0.4)";
      ctx.lineWidth = 0.8;
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // --- HEAD & EYES ---
      ctx.save();
      ctx.beginPath();
      ctx.arc(6, 0, 3.2, 0, Math.PI * 2);
      ctx.fillStyle = "#0D0D12";
      ctx.fill();

      // Glowing Emerald Cyber Eyes
      ctx.beginPath();
      ctx.arc(7.2, -1.8, 1.2, 0, Math.PI * 2);
      ctx.arc(7.2, 1.8, 1.2, 0, Math.PI * 2);
      ctx.fillStyle = "#00E599";
      ctx.shadowColor = "#00E599";
      ctx.shadowBlur = 6;
      ctx.fill();

      // Antennae with glowing micro tips
      ctx.beginPath();
      ctx.moveTo(8, -1.2);
      ctx.quadraticCurveTo(11, -4, 13, -3.5);
      ctx.moveTo(8, 1.2);
      ctx.quadraticCurveTo(11, 4, 13, 3.5);
      ctx.strokeStyle = "rgba(242, 242, 238, 0.5)";
      ctx.lineWidth = 0.6;
      ctx.stroke();

      // Antenna glowing tip nodes
      ctx.beginPath();
      ctx.arc(13.5, -3.5, 0.9, 0, Math.PI * 2);
      ctx.arc(13.5, 3.5, 0.9, 0, Math.PI * 2);
      ctx.fillStyle = "#FFDF00";
      ctx.shadowColor = "#FFDF00";
      ctx.shadowBlur = 5;
      ctx.fill();
      ctx.restore();

      ctx.restore(); // Restore bee coordinate transform

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[3] overflow-hidden"
      aria-hidden="true"
    />
  );
}
