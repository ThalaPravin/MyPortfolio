"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Trophy, Award, Users, CheckCircle2, Sparkles, MapPin, Calendar, ArrowUpRight, X } from "lucide-react";

export default function HackathonsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const hackathons = [
    {
      id: "sih2024",
      title: "Smart India Hackathon (SIH) 2024",
      tag: "NATIONAL CHAMPION • 1ST PRIZE",
      badge: "₹1,00,000 CASH PRIZE",
      badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      problem: "SIH 1761: AI-Driven Delivery of Articles & Parcels",
      ministry: "Ministry of Communication // Department of Posts (India Post)",
      institute: "Sanjivani College of Engineering, Kopargaon",
      team: "Logitech Trailblazers",
      description:
        "Won 1st Place nationally at the prestigious Smart India Hackathon 2024 (Software Edition Grand Finale), awarded a cash prize of ₹1,00,000. Architected 'Waqt Pe Post' — an autonomous delivery ecosystem for India Post featuring AI route optimization, OTP cryptographic handovers, and role-based parcel logistics management.",
      stats: [
        { label: "Cash Prize", val: "₹1,00,000" },
        { label: "Edition", val: "Software Grand Finale" },
        { label: "Ministry", val: "Ministry of Communication" },
        { label: "Impact", val: "Nationwide India Post" },
      ],
      gallery: [
        {
          src: "/images/sih-cheque-winner.png",
          caption: "Smart India Hackathon 2024 Winner Cheque (₹1,00,000)",
          tag: "WINNER CEREMONY",
        },
        {
          src: "/images/sih-banner-winner.png",
          caption: "Team Logitech Trailblazers beside Project Banner (SIH 1761)",
          tag: "GRAND FINALE",
        },
        {
          src: "/images/sih-coding-team.png",
          caption: "Pravin & Team debugging AI route optimization during the 36-hour sprint",
          tag: "LIVE SPRINT",
        },
        {
          src: "/images/sih-arena.png",
          caption: "Massive hackathon arena with hundreds of competing teams",
          tag: "THE ARENA",
        },
        {
          src: "/images/sih-team-celebration.png",
          caption: "Winner celebration with college mentors and jury members",
          tag: "CELEBRATION",
        },
      ],
    },
    {
      id: "technox",
      title: "Luminous Techno-X 2024",
      tag: "NATIONAL GRAND FINALE FINALIST",
      badge: "TOP 10 NATIONWIDE",
      badgeColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
      problem: "SolarSync: AI-Powered Smart Grid Energy Scheduling System",
      ministry: "Luminous Power Technologies HQ, Noida",
      institute: "Sanjivani College of Engineering",
      team: "SolarSync Team",
      description:
        "Selected in the Top 10 Teams out of 74,000+ teams across India. Traveled to the Grand Finale at Luminous corporate headquarters in Noida. Pitched and demonstrated SolarSync live to industry executives, demonstrating predictive AI models for dynamic tariff switching and solar energy conservation.",
      stats: [
        { label: "National Rank", val: "Top 10 Teams" },
        { label: "Scale", val: "74,000+ Teams" },
        { label: "Venue", val: "Luminous HQ, Noida" },
        { label: "Domain", val: "CleanTech & AI" },
      ],
      gallery: [],
    },
  ];

  return (
    <section id="hackathons" className="py-24 border-b border-white/5 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#00E599] uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
              <span>HACKATHON GLORY // NATIONAL HONORS</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#f2f2ee] uppercase leading-[0.85]">
              HACKATHON ARENA
            </h2>
          </div>

          <div className="text-xs font-mono text-zinc-400 max-w-sm">
            From 36-hour non-stop coding sprints to winning 1st place in India&apos;s largest national hackathons.
          </div>
        </div>

        {/* SIH 2024 Featured Big Showcase */}
        <div className="bg-[#09090D] border border-white/10 rounded-3xl p-6 sm:p-10 mb-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 uppercase font-semibold">
                  🏆 SMART INDIA HACKATHON 2024 WINNER
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-zinc-300">
                  ₹1,00,000 CASH PRIZE
                </span>
              </div>
              <h3 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                Team Logitech Trailblazers — National 1st Place
              </h3>
              <div className="text-xs font-mono text-zinc-400 mt-1 flex flex-wrap items-center gap-2">
                <span>Problem Statement 1761</span>
                <span>•</span>
                <span className="text-[#00E599]">Ministry of Communication (India Post)</span>
                <span>•</span>
                <span>St. Joseph&apos;s Institute of Technology</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-2xl bg-black border border-white/10 text-center">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">PRIZE MONEY</span>
                <span className="font-display font-bold text-2xl text-emerald-400">₹1,00,000</span>
              </div>
            </div>
          </div>

          {/* Real Hackathon Photo Mosaic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
            {/* Main Stage Winner Photo */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedImage("/images/sih-cheque-winner.png")}
              className="md:col-span-8 relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden cursor-pointer group bg-zinc-900 border border-white/10"
              data-cursor-text="EXPAND"
            >
              <Image
                src="/images/sih-cheque-winner.png"
                alt="SIH 2024 Winner Cheque Presentation"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                <div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px] uppercase">
                    STAGE CEREMONY
                  </span>
                  <div className="font-display font-bold text-lg mt-1">
                    Winning ₹1,00,000 Cheque — Grand Finale
                  </div>
                </div>
                <span className="text-zinc-400 text-[10px]">Click to view</span>
              </div>
            </motion.div>

            {/* Side Column: Coding & Banner */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage("/images/sih-coding-team.png")}
                className="relative h-[190px] rounded-2xl overflow-hidden cursor-pointer group bg-zinc-900 border border-white/10"
                data-cursor-text="EXPAND"
              >
                <Image
                  src="/images/sih-coding-team.png"
                  alt="SIH 2024 Coding Sprint"
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-mono text-white">
                  <div className="text-[10px] text-[#00E599]">36-HOUR SPRINT</div>
                  <div className="font-bold">Pravin &amp; Team at Work</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage("/images/sih-banner-winner.png")}
                className="relative h-[190px] rounded-2xl overflow-hidden cursor-pointer group bg-zinc-900 border border-white/10"
                data-cursor-text="EXPAND"
              >
                <Image
                  src="/images/sih-banner-winner.png"
                  alt="SIH 2024 Project Banner"
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-mono text-white">
                  <div className="text-[10px] text-amber-400">PROJECT BANNER</div>
                  <div className="font-bold">SIH 1761 Team Shot</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Hackathon Arena & Celebration Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedImage("/images/sih-arena.png")}
              className="relative h-48 rounded-xl overflow-hidden cursor-pointer group border border-white/10"
              data-cursor-text="EXPAND"
            >
              <Image
                src="/images/sih-arena.png"
                alt="Hackathon Arena"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs font-mono text-white">
                <span className="text-zinc-400 text-[10px]">THE ARENA // OVERNIGHT COMPETITION</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedImage("/images/sih-team-celebration.png")}
              className="relative h-48 rounded-xl overflow-hidden cursor-pointer group border border-white/10"
              data-cursor-text="EXPAND"
            >
              <Image
                src="/images/sih-team-celebration.png"
                alt="Winner Celebration"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs font-mono text-white">
                <span className="text-[#00E599] text-[10px]">CELEBRATION // LOGITECH TRAILBLAZERS</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Luminous Techno-X Card */}
        <div className="bg-[#09090D] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 uppercase font-semibold">
                  TOP 10 FINALIST NATIONALLY
                </span>
                <span className="text-xs font-mono text-zinc-500">74,000+ Teams</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase">
                Luminous Techno-X 2024 — Grand Finale at Noida HQ
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light mt-1 max-w-2xl leading-relaxed">
                Developed SolarSync — AI-driven energy scheduling algorithm presented to top engineering leadership and jury at Luminous Corporate Headquarters in Noida.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="px-5 py-2.5 rounded-full border border-white/10 hover:border-cyan-400 bg-white/5 text-xs font-mono text-white transition-all shrink-0"
          >
            <span>View SolarSync Architecture →</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          >
            <div
              className="relative max-w-5xl max-h-[90vh] w-full h-[80vh] rounded-2xl overflow-hidden border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Hackathon Photo Expanded"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 border border-white/20 text-white hover:bg-black"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
