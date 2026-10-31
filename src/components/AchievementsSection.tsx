"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Trophy, GraduationCap, CheckCircle2, Star, BookOpen, ExternalLink, Zap } from "lucide-react";

export default function AchievementsSection() {
  const metrics = [
    {
      num: "2103",
      label: "LeetCode Knight Rating",
      sub: "Top 1.5% worldwide • 800+ solved • 100+ contests",
      tag: "COMPETITIVE PROGRAMMING",
      color: "text-amber-400",
    },
    {
      num: "₹1,00,000",
      label: "Smart India Hackathon '24",
      sub: "National 1st Prize Winner • Team Waqt Pe Post",
      tag: "NATIONAL HACKATHON",
      color: "text-emerald-400",
    },
    {
      num: "TOP 10",
      label: "Luminous Techno-X Finalist",
      sub: "Selected in top 10 out of 74,000+ teams across India",
      tag: "NATIONAL INNOVATION",
      color: "text-cyan-400",
    },
    {
      num: "9.1",
      label: "B.Tech IT CGPA",
      sub: "Sanjivani College of Engineering, Kopargaon",
      tag: "ACADEMIC EXCELLENCE",
      color: "text-violet-400",
    },
    {
      num: "22+",
      label: "Freelance Deployments",
      sub: "5.0/5.0 rated on Upwork & Freelancer.in",
      tag: "CLIENT SATISFACTION",
      color: "text-[#00E599]",
    },
    {
      num: "5x",
      label: "NPTEL Certified",
      sub: "Advanced certifications in Algorithms & Systems",
      tag: "CERTIFIED HONORS",
      color: "text-rose-400",
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
              <span>MEASURABLE IMPACT // PROVEN ENGINEERING GRIT</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#f2f2ee] uppercase leading-[0.85]">
              HONORS &amp; NUMBERS
            </h2>
          </div>

          <div className="text-xs font-mono text-zinc-400 max-w-sm">
            Proven track record across competitive algorithms, national hackathons, and rigorous engineering academics.
          </div>
        </div>

        {/* Big Numbers Grid (Christendijoux Impact Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#09090C] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                  {item.tag}
                </span>
                <div className={`font-display font-extrabold text-5xl sm:text-6xl tracking-tight mb-2 ${item.color}`}>
                  {item.num}
                </div>
                <div className="text-base font-semibold text-[#f2f2ee] mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  {item.sub}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>VERIFIED RECORD</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> OFFICIAL
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Bio Split Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Education Card */}
          <div className="lg:col-span-6 bg-[#0B0B0F] border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#00E599] uppercase tracking-widest mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>

              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#f2f2ee] uppercase mb-2">
                Sanjivani College of Engineering, Kopargaon
              </h3>
              <div className="text-sm font-mono text-[#00E599] mb-4">
                Bachelor of Technology (B.Tech) — Information Technology
              </div>

              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                Graduated with a distinguished cumulative grade point average of <strong className="text-white">9.1 CGPA</strong>. Deeply focused on distributed systems, data structures, algorithm analysis, relational database internals, and computer networks.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599]" />
                  <span>5x NPTEL National Certifications</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599]" />
                  <span>College Technical Coding Lead &amp; Mentor</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599]" />
                  <span>100+ Coding Contests across LeetCode &amp; Codeforces</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>LOCATION: MAHARASHTRA, IN</span>
              <span className="text-zinc-200">CGPA: 9.1 / 10.0</span>
            </div>
          </div>

          {/* Persona & Visual Card */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group bg-zinc-900 h-64 sm:h-full">
              <Image
                src="/images/pravin-nature.png"
                alt="Pravin Avhad outdoor perspective"
                fill
                className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white">
                <div className="text-[10px] text-[#00E599] uppercase tracking-wider">Perspectives</div>
                <div className="font-display font-bold text-lg">Off-Duty / Adventurer</div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 group bg-zinc-900 h-64 sm:h-full">
              <Image
                src="/images/pravin-silhouette.png"
                alt="Pravin Avhad sunset silhouette"
                fill
                className="object-cover contrast-125 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white">
                <div className="text-[10px] text-amber-400 uppercase tracking-wider">Discipline</div>
                <div className="font-display font-bold text-lg">Constant Engineering Curiosity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
