"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  Clock, 
  Rocket, 
  CheckCircle2, 
  Calendar, 
  Mail, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles, 
  Zap,
  Building2,
  Users,
  Code2
} from "lucide-react";

export default function HireMeSection() {
  const [activeModel, setActiveModel] = useState<number>(0);

  const models = [
    {
      id: "full-time",
      title: "Full-Time SDE",
      tag: "BACKEND • DISTRIBUTED SYSTEMS • APPLIED AI",
      badge: "SELECT HIGH-IMPACT ROLES",
      badgeColor: "border-[#00E599]/30 bg-[#00E599]/10 text-[#00E599]",
      icon: Building2,
      headline: "Senior / Core Backend Software Development Engineer",
      summary:
        "Looking for a high-velocity backend engineer who thrives under production traffic? I bring proven experience from CRED's recharge engine, LeetCode Knight algorithmic discipline, and deep expertise in distributed Go microservices.",
      deliverables: [
        "High-concurrency distributed microservices architected in Go with Uber Fx & gRPC",
        "Event-driven Kafka streaming, sub-millisecond Redis caching, and robust PostgreSQL schemas",
        "Autonomous Agentic AI systems with n8n and Anthropic's Model Context Protocol (MCP)",
        "End-to-end cloud-native deployment with Kubernetes, Docker, and Jenkins CI/CD automation",
      ],
      idealFor: "High-growth unicorns, fintech giants, venture-backed startups, or distributed engineering teams.",
      timeline: "Open for selective high-impact roles (Remote or Bangalore/Pune)",
      ctaText: "Discuss Full-Time Role",
      ctaLink: "https://topmate.io/pravin_s_avhad/",
    },
    {
      id: "part-time",
      title: "Part-Time & Fractional Advisor",
      tag: "10–20 HOURS / WEEK • SYSTEM ARCHITECTURE",
      badge: "FRACTIONAL TECH LEAD",
      badgeColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
      icon: Clock,
      headline: "Architectural Teardowns, Code Reviews & AI Operations",
      summary:
        "Need senior architectural guidance without the overhead of a full-time executive? I partner with founders and engineering leaders to unblock system design bottlenecks, scale microservices, and automate dev operations.",
      deliverables: [
        "Comprehensive architectural teardowns and database query optimization",
        "Designing resilient event-driven pub/sub systems and distributed locking patterns",
        "Setting up autonomous incident triage bots in Slack using MCP and LLMs",
        "Technical interviewing, code review standards, and mentoring junior engineers",
      ],
      idealFor: "Early to Series-A startups seeking battle-tested guidance to scale their backend infrastructure.",
      timeline: "Flexible retainer or weekly fractional sprints (10–20 hrs/week)",
      ctaText: "Schedule Advisory Call",
      ctaLink: "https://topmate.io/pravin_s_avhad/",
    },
    {
      id: "freelance",
      title: "Freelance & Contract Engineering",
      tag: "5.0★ TOP RATED • 22+ SHIPPED PROJECTS",
      badge: "RAPID DELIVERY SPRINTS",
      badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      icon: Rocket,
      headline: "End-to-End Full Stack Web Platforms & APIs",
      summary:
        "With 22+ completed client projects and a flawless 5.0 rating on Upwork and Freelancer.in, I build and ship performant web applications, custom CRM/ERP portals, and scalable backends under aggressive deadlines.",
      deliverables: [
        "Modern, ultra-performant web applications using Next.js, React, and Tailwind CSS",
        "Role-based CRM/ERP management portals with secure JWT auth & relational databases",
        "Third-party integrations, payment gateway fulfillment, and webhook synchronizations",
        "100% on-time milestone delivery with clean, thoroughly documented codebases",
      ],
      idealFor: "Businesses, agencies, and founders needing production-grade web systems shipped rapidly.",
      timeline: "Available for new milestone-based client contracts",
      ctaText: "Hire as Freelancer",
      ctaLink: "mailto:pravinavhadweb@gmail.com?subject=Freelance%20Project%20Inquiry%20-%20Pravin%20Avhad",
    },
  ];

  return (
    <section id="hire-me" className="py-24 border-b border-white/5 bg-[#050505] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00E599]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#00E599] uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
              <span>COLLABORATION &amp; ENGAGEMENT MODELS // 2026</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#f2f2ee] uppercase leading-[0.85]">
              HIRE ME &amp; WORK
            </h2>
          </div>

          <div className="text-xs font-mono text-zinc-400 max-w-sm">
            Whether you are scaling a core engineering team, need fractional architectural direction, or want a high-impact MVP shipped with 5-star precision.
          </div>
        </div>

        {/* 3 Model Selector Cards (Top Pills) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {models.map((m, idx) => {
            const Icon = m.icon;
            const isActive = activeModel === idx;
            return (
              <button
                key={m.id}
                onClick={() => setActiveModel(idx)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 relative ${
                  isActive
                    ? "bg-[#0E0E14] border-[#00E599] shadow-[0_0_25px_rgba(0,229,153,0.15)]"
                    : "bg-[#08080B] border-white/10 hover:border-white/20 hover:bg-[#0C0C10]"
                }`}
                data-cursor-text="MODEL"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? "bg-[#00E599] text-black" : "bg-white/5 text-zinc-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider font-semibold ${m.badgeColor}`}
                  >
                    {m.badge}
                  </span>
                </div>

                <div className="font-display font-bold text-2xl text-white uppercase mb-1">
                  {m.title}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 leading-snug">
                  {m.tag}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Collaboration Model Details Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-[#09090D] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E599]/60 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Detailed Scope & Deliverables */}
              <div className="lg:col-span-8">
                <div className="text-xs font-mono text-[#00E599] uppercase tracking-wider mb-2">
                  // {models[activeModel].tag}
                </div>
                <h3 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4">
                  {models[activeModel].headline}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {models[activeModel].summary}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    What I Deliver:
                  </div>
                  {models[activeModel].deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00E599] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-zinc-400">
                    <strong className="text-white">Ideal For:</strong> {models[activeModel].idealFor}
                  </span>
                  <span className="text-[#00E599] whitespace-nowrap">
                    ● {models[activeModel].timeline}
                  </span>
                </div>
              </div>

              {/* Right Column: Instant Action Card */}
              <div className="lg:col-span-4 bg-[#0E0E14] border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4 pb-3 border-b border-white/10">
                    <Sparkles className="w-4 h-4 text-[#00E599]" />
                    <span>Quick Engagement Start</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono">
                      <span className="text-zinc-500 block text-[10px]">TIME TO INITIATE</span>
                      <span className="font-bold text-white">Call within 24–48 Hours</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono">
                      <span className="text-zinc-500 block text-[10px]">VERIFIED PEDIGREE</span>
                      <span className="font-bold text-[#00E599]">CRED SDE • LeetCode 2103 • SIH Winner</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <a
                    href={models[activeModel].ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#00E599] hover:bg-[#00FF87] text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,153,0.3)] transition-all transform hover:scale-[1.02]"
                    data-cursor-text="HIRE"
                  >
                    <span>{models[activeModel].ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="mailto:pravinavhadweb@gmail.com"
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Direct Email Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
