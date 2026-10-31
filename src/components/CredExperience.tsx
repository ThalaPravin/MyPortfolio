"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Shield, 
  Bot, 
  Cpu, 
  GitBranch, 
  Workflow, 
  CheckCircle2, 
  Server, 
  ExternalLink,
  Layers,
  Sparkles,
  Zap,
  Terminal,
  Activity,
  Building2
} from "lucide-react";

// Official CRED SVG Logo Mark
export function CredLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 115" 
      fill="currentColor" 
      className={className} 
      aria-label="CRED Logo"
    >
      <path 
        d="M50 0L5.5 16.5V54.2C5.5 83.2 24.5 109.8 50 115C75.5 109.8 94.5 83.2 94.5 54.2V16.5L50 0ZM79.5 54.2C79.5 76.2 64.9 96.5 50 101.4C35.1 96.5 20.5 76.2 20.5 54.2V27.5L50 16.6L79.5 27.5V54.2Z" 
      />
      <circle cx="50" cy="54" r="14" />
    </svg>
  );
}

export default function CredExperience() {
  const [activeTab, setActiveTab] = useState(0);

  const credPillars = [
    {
      id: "recharge",
      title: "Mobile Prepaid Recharge Platform",
      tag: "CORE BILLING & PAYMENTS",
      icon: Zap,
      headline: "Multi-Provider Telecommunication Payment & Settlement Engine",
      description:
        "Engineered and maintained high-throughput Go microservices powering CRED's mobile prepaid recharge infrastructure across major telecom operators (Jio, Airtel, Vi, BSNL).",
      bullets: [
        "Architected end-to-end plan discovery catalogs, input validation pipelines, and payment fulfillment gateways under stringent sub-200ms SLAs.",
        "Designed real-time settlement reconciliation workflows reconciling ledger entries against bank and operator switch callbacks.",
        "Built dynamic automated expiry reminder pipelines triggered via event queues, driving user retention and recurring transaction volume.",
        "Integrated distributed circuit breakers and fallback providers to eliminate recharge failure drops during peak traffic hours.",
      ],
      stack: ["Go (Golang)", "Uber Fx", "gRPC", "PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes"],
      metrics: ["High Concurrency", "Sub-200ms Latency", "Multi-Telco Switch", "Zero-Loss Reconciliation"],
    },
    {
      id: "agentic-ai",
      title: "Autonomous AI Workflows & RCA",
      tag: "AGENTIC AI & AUTOMATION",
      icon: Bot,
      headline: "AI-Driven Root Cause Analysis & Engineering Diagnostics",
      description:
        "Built intelligent engineering automation workflows using n8n, LLMs, and multi-agent coordination to slash manual engineering overhead across production pipelines.",
      bullets: [
        "Created autonomous debugging pipelines that ingest stack traces, correlate log anomalies across microservices, and produce actionable root-cause diagnoses.",
        "Automated log investigation workflows with vector contextualization, mapping alerts to recent code changes and PR diffs.",
        "Reduced manual incident triage time significantly, empowering developers with AI-generated mitigation playbooks and auto-drafted hotfix patches.",
      ],
      stack: ["n8n", "LLMs", "Agentic Systems", "Python", "Vector Search", "RAG", "Observability APIs"],
      metrics: ["70% Triage Time Cut", "Zero-Touch Anomaly Detection", "Autonomous RCA"],
    },
    {
      id: "slack-mcp",
      title: "Slack AI Assistant with MCP Tools",
      tag: "DEVELOPER PRODUCTIVITY",
      icon: Terminal,
      headline: "Intelligent Incident Response & 24×7 On-Call Bot",
      description:
        "Designed and deployed an AI Slack bot integrated with Model Context Protocol (MCP), GitHub, internal microservices, and cloud infrastructure for real-time operations.",
      bullets: [
        "Implemented Model Context Protocol (MCP) server endpoints allowing Slack prompts to securely inspect live service metrics, query database replicas, and fetch error traces.",
        "Enables engineers to query incident summaries, trigger automated rollbacks or CI/CD deployments directly from Slack channels.",
        "Automated ticketing, escalation routing, and shift handovers with 24×7 intelligent on-call assistance.",
      ],
      stack: ["Model Context Protocol (MCP)", "Slack API", "GitHub API", "Go", "Docker", "AWS"],
      metrics: ["24×7 On-Call Support", "One-Click Deployments", "MCP Integration"],
    },
    {
      id: "test-orchestration",
      title: "Intelligent Test Orchestration",
      tag: "CI/CD & QUALITY ENGINEERING",
      icon: GitBranch,
      headline: "Jenkins-Based Smart Regression Impact Mapping",
      description:
        "Built an automated testing orchestration framework that analyzes commit diffs to run precise, targeted regression suites without slow monolithic test runs.",
      bullets: [
        "Engineered automatic dependency graphing that detects modified service boundaries and maps pull requests strictly to affected integration suites.",
        "Reduced developer feedback loops drastically, eliminating redundant test suite executions while preserving 100% deployment test safety.",
        "Streamlined release pipelines across Bills and Recharge platforms, boosting engineering shipping frequency.",
      ],
      stack: ["Jenkins", "Groovy", "Go", "Docker", "Kubernetes", "AWS EKS", "Git"],
      metrics: ["Targeted Regression", "Faster Feedback Loops", "CI/CD Optimization"],
    },
    {
      id: "cloud-native",
      title: "Cloud-Native Infrastructure & Reliability",
      tag: "PLATFORM & OBSERVABILITY",
      icon: Server,
      headline: "Distributed Microservices Reliability at Scale",
      description:
        "Owned and scaled cloud-native microservices architecture, monitoring dashboards, and deployment reliability across CRED's Bills & Recharge platforms.",
      bullets: [
        "Developed and containerized production Go microservices using Docker and orchestrated them on Kubernetes (AWS).",
        "Implemented structured distributed tracing, Prometheus telemetry, and Grafana alerting to detect throughput bottlenecks before user impact.",
        "Conducted deep performance profiling to eliminate memory allocations and optimize database connection pool dynamics.",
      ],
      stack: ["AWS", "Kubernetes", "Docker", "Prometheus", "Grafana", "Go", "Linux"],
      metrics: ["99.99% Availability", "Distributed Tracing", "Optimized Concurrency"],
    },
  ];

  return (
    <section id="cred" className="py-24 border-b border-white/5 relative bg-[#050505] overflow-hidden">
      {/* Subtle CRED Neon Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00E599]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00E599] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
              <span>CORE PRODUCTION ENGINEERING // OCT &apos;25 – PRESENT</span>
            </div>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#f2f2ee] uppercase leading-[0.85]">
              BACKEND SDE <span className="text-zinc-600">@</span> CRED
            </h2>
          </div>

          {/* CRED Brand Badge */}
          <div className="flex items-center gap-4 bg-[#0F0F12] border border-white/10 px-5 py-3 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-black border border-white/15 flex items-center justify-center text-[#f2f2ee]">
              <CredLogo className="w-7 h-7 text-[#00E599]" />
            </div>
            <div>
              <div className="font-display font-bold text-xl text-[#f2f2ee] tracking-wide flex items-center gap-2">
                CRED
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00E599]/10 text-[#00E599] border border-[#00E599]/20">
                  FULL-TIME SDE
                </span>
              </div>
              <div className="text-xs font-mono text-zinc-400">Bills &amp; Recharge Platform Team</div>
            </div>
          </div>
        </div>

        {/* Real Photo Card at CRED Bangalore HQ */}
        <div className="mb-12 rounded-3xl border border-white/10 bg-[#0A0A0E] p-4 sm:p-6 backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden group">
              <Image
                src="/images/cred-building.jpg"
                alt="Pravin Avhad at CRED HQ Bangalore"
                fill
                className="object-cover object-top group-hover:scale-105 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="flex items-center gap-1.5 text-[#00E599]">
                  <Building2 className="w-3.5 h-3.5" /> CRED HQ Bangalore
                </span>
                <span className="text-zinc-400 text-[10px]">Indiranagar</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#00E599] uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>High Scale Fintech Architecture</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#f2f2ee] uppercase tracking-tight mb-3">
                  Powering Millions in Mobile Recharge &amp; Telecom Settlements
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-4">
                  Working at CRED on high-concurrency distributed Go microservices that handle live plan validation, multi-telecom integration, idempotent billing workflows, and automated AI diagnostic agents.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-zinc-500 block">SLA TARGET</span>
                  <span className="font-display font-bold text-base text-[#00E599]">&lt; 200ms Latency</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-zinc-500 block">AVAILABILITY</span>
                  <span className="font-display font-bold text-base text-white">99.99% Uptime</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-zinc-500 block">AUTOMATION</span>
                  <span className="font-display font-bold text-base text-cyan-400">n8n + MCP AI</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-zinc-500 block">ORCHESTRATION</span>
                  <span className="font-display font-bold text-base text-amber-400">Jenkins Smart Test</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Feature Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tab Navigation List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest px-2 mb-1">
              Select Architecture Pillar
            </div>
            {credPillars.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-4 rounded-xl transition-all duration-300 border flex items-start gap-4 ${
                    isActive
                      ? "bg-[#111116] border-[#00E599]/50 shadow-[0_0_20px_rgba(0,229,153,0.1)]"
                      : "bg-[#09090C] border-white/5 hover:border-white/15 hover:bg-[#0E0E12]"
                  }`}
                  data-cursor-text="PILLAR"
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-[#00E599] text-black" : "bg-white/5 text-zinc-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400">
                        {item.tag}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-mono text-[#00E599] flex items-center gap-1">
                          <Activity className="w-3 h-3" /> ACTIVE
                        </span>
                      )}
                    </div>
                    <div
                      className={`text-sm font-medium transition-colors truncate ${
                        isActive ? "text-[#f2f2ee] font-semibold" : "text-zinc-400"
                      }`}
                    >
                      {item.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Detail View */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0C0C10] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden"
              >
                {/* Glowing Top Edge */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E599]/50 to-transparent" />

                {/* Header */}
                <div className="flex items-center gap-2 text-xs font-mono text-[#00E599] uppercase tracking-widest mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{credPillars[activeTab].tag}</span>
                </div>

                <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#f2f2ee] uppercase tracking-tight mb-4">
                  {credPillars[activeTab].headline}
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {credPillars[activeTab].description}
                </p>

                {/* Key Execution Bullets */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Key Technical Contributions:
                  </div>
                  {credPillars[activeTab].bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00E599] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 pt-4 border-t border-white/5">
                  {credPillars[activeTab].metrics.map((metric, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 rounded-lg p-2.5 text-center">
                      <span className="text-[11px] font-mono text-zinc-300">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    Technologies &amp; Protocols
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {credPillars[activeTab].stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-[#16161C] border border-white/10 text-zinc-300 hover:border-[#00E599]/40 hover:text-white transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
