"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Award, Calendar, CheckCircle2, Code2, ShieldCheck, Sparkles, Terminal, Trophy } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden border-b border-white/5">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top Tagline / Meta Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-8 text-xs font-mono tracking-widest text-zinc-400 uppercase"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
            <span className="text-[#f2f2ee]">BACKEND SDE @ CRED</span>
            <span className="text-zinc-600">//</span>
            <span>LEETCODE KNIGHT 2103</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-zinc-500">SANJIVANI COE • CGPA 9.1</span>
            <a
              href="#hackathons"
              className="px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[11px] font-mono hover:bg-emerald-500/20 transition-colors flex items-center gap-1.5"
            >
              <Trophy className="w-3 h-3" />
              <span>SIH &apos;24 WINNER (₹1L)</span>
            </a>
          </div>
        </motion.div>

        {/* Main Massive Kinetic Typography (Christendijoux Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] tracking-tight text-[#f2f2ee] leading-[0.82] uppercase select-none">
              PRAVIN
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2f2ee] via-[#f2f2ee] to-zinc-600">
                AVHAD
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-zinc-300 font-light max-w-2xl leading-relaxed">
              Architecting high-concurrency <span className="text-[#f2f2ee] font-medium">Go microservices</span> at{" "}
              <span className="text-[#00E599] font-medium underline underline-offset-4 decoration-[#00E599]/40">CRED</span>, event-driven payment pipelines, and autonomous{" "}
              <span className="text-[#f2f2ee] font-medium">Agentic AI systems</span> with n8n and MCP.
            </p>
          </motion.div>

          {/* Right Column: Pravin's Photo & Quick Stat Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            {/* Photo Card with Tilt & Border Glow */}
            <div 
              className="relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-2 backdrop-blur-md transition-all duration-500 hover:border-[#00E599]/40 hover:shadow-[0_0_30px_rgba(0,229,153,0.15)]"
              data-cursor-text="PRAVIN"
            >
              <div className="relative w-full h-[300px] sm:h-[340px] rounded-xl overflow-hidden bg-black">
                <Image
                  src="/images/pravin-portrait.png"
                  alt="Pravin Avhad Portrait"
                  fill
                  className="object-cover object-top contrast-110 group-hover:scale-105 transition-all duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[#f2f2ee] bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
                    <span>Pravin Avhad</span>
                  </div>
                  <span className="text-zinc-400 text-[10px]">Backend SDE @ CRED</span>
                </div>
              </div>
            </div>

            {/* Quick Rating Badge Card */}
            <div className="rounded-xl border border-white/10 bg-[#0C0C0E] p-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Competitive Ranking</div>
                <div className="text-xl font-display font-bold text-[#f2f2ee] flex items-center gap-2">
                  <span>2103 RATING</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono font-normal">
                    Knight
                  </span>
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">Top 1.5% worldwide • 800+ solved</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                <Award className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Metric Ticker Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-8"
        >
          <a
            href="#cred"
            className="p-4 rounded-xl border border-white/5 bg-[#0C0C0E]/60 backdrop-blur-sm group hover:border-[#00E599]/30 transition-all block"
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              Primary Role
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#f2f2ee] block group-hover:text-[#00E599] transition-colors">
              CRED SDE
            </span>
            <span className="text-xs text-zinc-400 font-mono">Mobile Recharge Platform</span>
          </a>

          <a
            href="#hackathons"
            className="p-4 rounded-xl border border-white/5 bg-[#0C0C0E]/60 backdrop-blur-sm group hover:border-amber-400/30 transition-all block"
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              National Winner
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-amber-300 block">
              ₹1,00,000
            </span>
            <span className="text-xs text-zinc-400 font-mono">Smart India Hackathon &apos;24</span>
          </a>

          <a
            href="#freelance"
            className="p-4 rounded-xl border border-white/5 bg-[#0C0C0E]/60 backdrop-blur-sm group hover:border-cyan-400/30 transition-all block"
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              Client Delivery
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-cyan-300 block">
              22+ CLIENTS
            </span>
            <span className="text-xs text-zinc-400 font-mono">5★ Freelance Rating</span>
          </a>

          <a
            href="#hackathons"
            className="p-4 rounded-xl border border-white/5 bg-[#0C0C0E]/60 backdrop-blur-sm group hover:border-violet-400/30 transition-all block"
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              National Finalist
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-violet-300 block">
              TOP 10
            </span>
            <span className="text-xs text-zinc-400 font-mono">Out of 74,000+ Teams</span>
          </a>
        </motion.div>

        {/* CTA Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5"
        >
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://topmate.io/pravin_s_avhad/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#00E599] text-[#050505] hover:bg-[#00FF87] hover:shadow-[0_0_25px_rgba(0,229,153,0.45)] transition-all transform hover:-translate-y-0.5"
              data-cursor-text="BOOK"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Mentorship Call (Topmate)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#cred"
              className="flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/5 text-[#f2f2ee] border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-[#00E599]" />
              <span>CRED Experience</span>
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-transparent text-zinc-400 hover:text-white transition-colors"
            >
              <Code2 className="w-4 h-4" />
              <span>View Systems</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="text-xs font-mono text-zinc-500 flex items-center gap-3">
            <span>SCROLL TO EXPLORE</span>
            <div className="w-1.5 h-6 rounded-full border border-zinc-700 flex items-start justify-center p-0.5">
              <div className="w-0.5 h-1.5 bg-[#00E599] rounded-full animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
