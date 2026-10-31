"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, CheckCircle2, MessageSquare, Zap, Clock, Users } from "lucide-react";

export default function TopmateBooking() {
  const topics = [
    {
      title: "Distributed Systems & Go Architecture",
      duration: "45 mins",
      icon: Zap,
      desc: "Deep dive into microservices orchestration, Uber Fx, Kafka event streams, Redis caching, and real-world fintech scaling patterns.",
    },
    {
      title: "DSA & LeetCode Knight Strategy (2100+)",
      duration: "45 mins",
      icon: CheckCircle2,
      desc: "Step-by-step roadmap to crossing 2100+ rating, contest mindset, mastering complex graphs/DP, and technical interview preparation.",
    },
    {
      title: "Agentic AI & n8n Workflow Automation",
      duration: "30 mins",
      icon: MessageSquare,
      desc: "Building autonomous RCA agents, Slack assistants with Model Context Protocol (MCP), and automating engineering operations.",
    },
    {
      title: "High-Value Freelance Career Blueprint",
      duration: "30 mins",
      icon: Users,
      desc: "How I closed and shipped 22+ production freelance contracts on Upwork & Freelancer with a flawless 5.0 client satisfaction rating.",
    },
  ];

  return (
    <section className="py-24 border-b border-white/5 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#0B0B0F] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          {/* Top hairline gradient */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E599] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00E599] uppercase mb-3">
                <Calendar className="w-4 h-4" />
                <span>1:1 Mentorship &amp; Technical Consulting</span>
              </div>
              <h2 className="font-display font-black text-4xl sm:text-6xl text-[#f2f2ee] uppercase tracking-tight mb-4">
                BOOK A TECHNICAL DISCUSSION
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
                Whether you need architectural guidance for your distributed microservices, want to accelerate your LeetCode journey to Knight rating, or explore autonomous Agentic AI workflows — book a focused 1:1 call with me on Topmate.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="https://topmate.io/pravin_s_avhad/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full text-sm font-mono font-bold uppercase tracking-wider bg-[#00E599] text-[#050505] hover:bg-[#00FF87] hover:shadow-[0_0_30px_rgba(0,229,153,0.45)] transition-all transform hover:-translate-y-1"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 1:1 on Topmate</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Discussion Topics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((t, idx) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.title}
                  className="bg-[#07070A] border border-white/5 hover:border-[#00E599]/30 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs font-mono">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#00E599] group-hover:bg-[#00E599] group-hover:text-black transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-zinc-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {t.duration}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-[#f2f2ee] uppercase mb-2 group-hover:text-[#00E599] transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {t.desc}
                    </p>
                  </div>

                  <a
                    href="https://topmate.io/pravin_s_avhad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400 group-hover:text-[#00E599]"
                  >
                    <span>SCHEDULE CALL</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
