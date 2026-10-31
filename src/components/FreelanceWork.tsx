"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star, ExternalLink, Globe, Smartphone, Shield, CheckCircle2, Award, Briefcase } from "lucide-react";

export default function FreelanceWork() {
  const clients = [
    {
      name: "Mesa School of Business",
      url: "https://mesaschool.co/",
      domain: "mesaschool.co",
      category: "EDTECH & STARTUP ACADEMY",
      tagline: "Bangalore's AI-First Business School for Startup Leadership",
      description:
        "Engineered responsive, high-converting digital platform architecture for Mesa's flagship 12-month PGP in Startup Leadership in Bangalore, India's startup capital.",
      deliverables: [
        "Built modular interactive curriculum components, founder-led class directory, and admissions application funnel.",
        "Optimized client-side rendering performance, dynamic form engines, and sub-second asset preloading.",
        "Ensured seamless cross-device responsiveness across mobile and desktop for intensive marketing campaigns.",
      ],
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API", "Performance Optimization"],
      stats: { metric: "600+ Hours", label: "Curriculum Showcase" },
    },
    {
      name: "itel India",
      url: "https://www.itel-india.com/",
      domain: "itel-india.com",
      category: "CONSUMER ELECTRONICS & SMARTPHONES",
      tagline: "High-Traffic Smartphone & Tech Hardware Experience",
      description:
        "Contributed to itel India's web portal (via Shap InfoTech collaboration), engineering high-traffic responsive product catalog pages, smartphone launches, and marketing pages under tight deadlines.",
      deliverables: [
        "Engineered responsive product showcase pages and interactive spec comparison tables for new smartphone releases.",
        "Collaborated across product managers, UI/UX designers, and backend engineers to meet rapid launch schedules.",
        "Optimized image asset delivery and responsive layouts ensuring smooth performance across budget handsets in India.",
      ],
      tech: ["React.js", "JavaScript / ES6", "Tailwind CSS", "Responsive Design", "Product Catalog"],
      stats: { metric: "Millions", label: "Monthly Consumer Views" },
    },
    {
      name: "Cautio",
      url: "https://www.cautio.com/",
      domain: "cautio.com",
      category: "AI & TELEMATICS ECOSYSTEM",
      tagline: "AI-Powered Dashcam & Fleet Safety Intelligence Platform",
      description:
        "Developed web experience components for Cautio's AI dashcam ecosystem built for Bharat, trusted by fleets globally (Namma Yatri, RedBus, Zingbus, Juspay).",
      deliverables: [
        "Crafted immersive dark-mode hero components with autoplaying video loops and responsive device transitions.",
        "Built live fleet client logo marquee animations and interactive telematics feature showcases.",
        "Engineered frictionless 'Get in Touch' conversion modal and lead qualification workflows.",
      ],
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Video Optimization", "SaaS Landing"],
      stats: { metric: "20 Cr+", label: "Km Fleet Protected" },
    },
  ];

  return (
    <section id="freelance" className="py-24 border-b border-white/5 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#00E599] uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
              <span>FREELANCE EXCELLENCE // 22+ SHIPPED PROJECTS</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#f2f2ee] uppercase leading-[0.85]">
              CLIENT SHOWCASE
            </h2>
          </div>

          {/* Rating Pill Banner */}
          <div className="flex items-center gap-4 bg-[#0E0E12] border border-white/10 px-5 py-3 rounded-2xl">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div className="border-l border-white/10 pl-4">
              <div className="font-display font-bold text-lg text-white">5.0 / 5.0 RATING</div>
              <div className="text-[11px] font-mono text-zinc-400">
                Top Rated on Freelancer.in &amp; Upwork
              </div>
            </div>
          </div>
        </div>

        {/* 22+ Projects Headline Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-zinc-900/60 via-zinc-900/40 to-black border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00E599]/10 border border-[#00E599]/30 flex items-center justify-center text-[#00E599]">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl font-display font-bold text-white uppercase">
                22+ Enterprise &amp; Startup Freelance Projects
              </div>
              <div className="text-xs font-mono text-zinc-400">
                Delivering high-concurrency systems, AI integrations, and performant web applications.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
              100% On-Time Delivery
            </span>
          </div>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {clients.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0A0A0E] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#00E599]/40 hover:shadow-[0_0_25px_rgba(0,229,153,0.1)] transition-all duration-300 group"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5 uppercase tracking-wider">
                    {client.category}
                  </span>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#00E599] group-hover:border-[#00E599]/40 transition-all"
                    aria-label={`Visit ${client.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Client Name */}
                <h3 className="font-display font-bold text-3xl text-[#f2f2ee] uppercase tracking-tight mb-1 group-hover:text-[#00E599] transition-colors">
                  {client.name}
                </h3>
                <div className="text-xs font-mono text-zinc-500 mb-4 flex items-center gap-1.5">
                  <Globe className="w-3 h-3 text-[#00E599]" />
                  <span>{client.domain}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  {client.description}
                </p>

                {/* Key Execution Highlights */}
                <div className="space-y-2 mb-6">
                  {client.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section: Stat & Tech Tags */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between bg-black/40 p-3 rounded-xl border border-white/5 mb-4">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase">
                    {client.stats.label}
                  </span>
                  <span className="font-display font-bold text-base text-[#00E599]">
                    {client.stats.metric}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {client.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
