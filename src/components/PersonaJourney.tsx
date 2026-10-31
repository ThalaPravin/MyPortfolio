"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Heart, Terminal, Compass, Laptop, Headphones, MapPin, Coffee, Code2, ArrowRight } from "lucide-react";

export default function PersonaJourney() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      title: "The Deep Work Mindset",
      subtitle: "Late Nights, Goroutines & System Observability",
      image: "/images/pravin-deepwork.webp",
      badge: "ENGINEERING DISCIPLINE",
      text: "Real distributed systems aren't built in the hype — they are forged in the quiet hours profiling race conditions, tuning connection pools, and building resilient event streams. Whether tracing payment reconciliations at CRED or building ride matching algorithms, I obsess over the mechanics of low-latency execution.",
      location: "Late Night Studio",
      quote: "Software must be reliable before it can be clever.",
    },
    {
      title: "The Bangalore Tech Chapter",
      subtitle: "From Kopargaon to CRED Indiranagar",
      image: "/images/pravin-lalbagh.jpg",
      badge: "THE JOURNEY",
      text: "Moving from Sanjivani College of Engineering to Bangalore's premier fintech ecosystem at CRED was a pivotal milestone. Collaborating with world-class engineers, deploying high-scale telecom billing systems, and spending weekends walking through Cubbon Park and Lalbagh keep me grounded and energized.",
      location: "Bangalore, India",
      quote: "Surround yourself with systems that challenge your limits.",
    },
    {
      title: "Reflections & Horizons",
      subtitle: "Coastlines, Perspectives & The Human Side",
      image: "/images/pravin-mumbai.jpg",
      badge: "PERSPECTIVES",
      text: "Outside of writing Go backends and agentic workflows, you'll find me listening to tech podcasts on long evening walks, visiting coastal cities like Mumbai, capturing analog perspectives, and mentoring younger developers aiming for big tech roles.",
      location: "Marine Drive, Mumbai",
      quote: "Balance in life fuels clarity in architecture.",
    },
    {
      title: "Travel & Nomadic Engineering",
      subtitle: "High Velocity Shipping From Anywhere",
      image: "/images/workspace-macbook.jpg",
      badge: "DEV WORKSPACE",
      text: "Over 22+ freelance client deployments across fintech, edtech, and SaaS delivered with 100% on-time execution. A reliable MacBook, high-speed terminal, and sharp system abstractions are all that's required to deliver global-tier software from anywhere.",
      location: "Traveling Workspace",
      quote: "Velocity without quality is technical debt; quality with velocity is craftsmanship.",
    },
  ];

  return (
    <section id="journey" className="py-24 border-b border-white/5 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#00E599] uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
              <span>THE HUMAN BEHIND THE CODE // STORY &amp; CULTURE</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#f2f2ee] uppercase leading-[0.85]">
              JOURNEY &amp; LIFE
            </h2>
          </div>

          <div className="text-xs font-mono text-zinc-400 max-w-sm">
            Beyond the pull requests and system design diagrams — here is what drives my work ethic, curiosity, and discipline.
          </div>
        </div>

        {/* Interactive Story Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#09090C] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          {/* Left Column: Photo with smooth transitions */}
          <div className="lg:col-span-5 relative h-[360px] sm:h-[450px] rounded-2xl overflow-hidden group bg-zinc-900 border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={stories[activeStory].image}
                  alt={stories[activeStory].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                  <span className="flex items-center gap-1.5 text-[#00E599]">
                    <MapPin className="w-3.5 h-3.5" />
                    {stories[activeStory].location}
                  </span>
                  <span className="text-zinc-400 text-[10px]">Pravin Avhad</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Narrative & Story Selector */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              {/* Story Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {stories.map((s, idx) => (
                  <button
                    key={s.title}
                    onClick={() => setActiveStory(idx)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                      activeStory === idx
                        ? "bg-[#00E599] text-black font-bold shadow-[0_0_15px_rgba(0,229,153,0.3)]"
                        : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                    }`}
                    data-cursor-text="STORY"
                  >
                    0{idx + 1}. {s.badge}
                  </button>
                ))}
              </div>

              {/* Title & Subtitle */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                    {stories[activeStory].badge}
                  </span>
                  <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight mb-2">
                    {stories[activeStory].title}
                  </h3>
                  <div className="text-xs sm:text-sm font-mono text-[#00E599] mb-4">
                    {stories[activeStory].subtitle}
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-6">
                    {stories[activeStory].text}
                  </p>

                  <blockquote className="p-4 rounded-xl bg-white/5 border-l-2 border-[#00E599] text-xs sm:text-sm italic text-zinc-300 font-serif">
                    &ldquo;{stories[activeStory].quote}&rdquo;
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Extra Personality Mini Badges */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-[#00E599]" />
                <span>Podcast &amp; Lofi Focus Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <Laptop className="w-4 h-4 text-cyan-400" />
                <span>Go • Uber Fx • Kafka • MCP</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-amber-400" />
                <span>Bengaluru Coffee &amp; Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
