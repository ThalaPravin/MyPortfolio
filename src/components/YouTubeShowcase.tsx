"use client";

import { motion } from "framer-motion";
import { Youtube, Play, ExternalLink, ArrowUpRight, Video, Sparkles, Twitter } from "lucide-react";

export default function YouTubeShowcase() {
  const videos = [
    {
      title: "Building High-Throughput Distributed Microservices in Go",
      duration: "18:42",
      views: "Tech Breakdown",
      tag: "DISTRIBUTED GO",
      channel: "@the_zynx1",
      url: "https://www.youtube.com/@the_zynx1",
      desc: "Architectural walkthrough of event-driven choreography with Apache Kafka, gRPC IPC, Uber Fx dependency injection, and sub-millisecond Redis caching.",
    },
    {
      title: "How We Won Smart India Hackathon 2024 (₹1,00,000 Prize)",
      duration: "24:15",
      views: "Hackathon Story",
      tag: "SIH WINNER STORY",
      channel: "@the_zynx1",
      url: "https://www.youtube.com/@the_zynx1",
      desc: "Complete story behind Waqt Pe Post — from brainstorming in the arena to building AI route optimization, OTP handovers, and pitching to the Ministry of Communication jury.",
    },
    {
      title: "Roadmap to LeetCode Knight (2100+ Rating) as a College Student",
      duration: "15:30",
      views: "DSA Strategy",
      tag: "LEETCODE 2100+",
      channel: "@the_zynx1",
      url: "https://www.youtube.com/@the_zynx1",
      desc: "My systematic framework for cracking 800+ algorithmic problems, contest pacing strategy, and transitioning from brute force to optimal graph & DP solutions.",
    },
  ];

  return (
    <section className="py-24 border-b border-white/5 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#00E599] uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
              <span>CONTENT &amp; ENGINEERING MEDIA // YOUTUBE &amp; X</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#f2f2ee] uppercase leading-[0.85]">
              VIDEOS &amp; TECH TALKS
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@the_zynx1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-xs font-mono text-red-400 hover:text-white transition-all"
              data-cursor-text="WATCH"
            >
              <Youtube className="w-4 h-4 fill-current" />
              <span>@the_zynx1 on YouTube</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://x.com/dev_Pravin_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:border-white/30 text-xs font-mono text-zinc-300 hover:text-white transition-all"
              data-cursor-text="TWITTER"
            >
              <Twitter className="w-4 h-4" />
              <span>@dev_Pravin_</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((vid, idx) => (
            <motion.a
              key={vid.title}
              href={vid.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#09090D] border border-white/10 rounded-2xl p-6 hover:border-[#00E599]/40 hover:shadow-[0_0_25px_rgba(0,229,153,0.1)] transition-all duration-300 flex flex-col justify-between group h-full"
              data-cursor-text="PLAY"
            >
              <div>
                {/* Simulated Video Preview Screen with Play Trigger */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800 to-black border border-white/10 mb-5 flex items-center justify-center group-hover:border-[#00E599]/30 transition-all">
                  {/* Subtle Grid Accent */}
                  <div className="absolute inset-0 opacity-10 bg-noise" />
                  
                  {/* Big Play Button */}
                  <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#00E599] group-hover:text-black transition-all duration-300">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>

                  {/* Badges on Video */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-white border border-white/10">
                    {vid.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-zinc-300">
                    {vid.duration}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-2">
                  <span className="text-red-400 flex items-center gap-1">
                    <Youtube className="w-3 h-3" /> YouTube Full Form
                  </span>
                  <span>{vid.channel}</span>
                </div>

                <h3 className="font-display font-bold text-xl text-white uppercase group-hover:text-[#00E599] transition-colors mb-3 leading-snug">
                  {vid.title}
                </h3>

                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                  {vid.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#00E599]">
                <span>WATCH ON YOUTUBE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Twitter / X Banner Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-900/50 via-zinc-900/20 to-black border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <Twitter className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display font-bold text-xl text-white uppercase">
                Follow @dev_Pravin_ on X
              </div>
              <div className="text-xs font-mono text-zinc-400">
                Sharing thoughts on distributed Go architecture, LeetCode algorithms, and Agentic AI workflows.
              </div>
            </div>
          </div>

          <a
            href="https://x.com/dev_Pravin_"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-[#00E599] text-xs font-mono font-bold uppercase tracking-wider transition-all"
            data-cursor-text="FOLLOW"
          >
            <span>Follow on X →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
