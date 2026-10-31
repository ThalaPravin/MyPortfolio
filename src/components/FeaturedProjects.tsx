"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Github, 
  ExternalLink, 
  Trophy, 
  Cpu, 
  Car, 
  Package, 
  Sun, 
  Database, 
  Building, 
  Smartphone, 
  CloudSun,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import {
  RideFlowVisual,
  WaqtPePostVisual,
  SolarSyncVisual,
  PrimesCapitalVisual,
  AtmagauravBMSVisual,
  TeddypupsVisual,
  HomeWorkoutVisual,
  WeatherVisual,
} from "./ProjectVisuals";

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const projects = [
    {
      id: "rideflow",
      title: "RideFlow",
      tagline: "Distributed High-Concurrency Ride-Hailing Platform",
      badge: "DISTRIBUTED GO SYSTEM",
      badgeColor: "border-[#00E599]/30 bg-[#00E599]/10 text-[#00E599]",
      githubUrl: "https://github.com/thalapravin",
      liveUrl: "",
      visual: RideFlowVisual,
      metrics: [
        { label: "Architecture", val: "5 Microservices" },
        { label: "IPC Protocol", val: "gRPC & Protobuf" },
        { label: "Event Bus", val: "Apache Kafka" },
        { label: "Orchestration", val: "Kubernetes (K8s)" },
      ],
      description:
        "Architected and developed a production-grade distributed ride-hailing backend in Go with Uber Fx dependency injection, handling geospatial driver-rider matching, trip state machines, and payment fulfillment.",
      highlights: [
        "Composed of 5 decoupled microservices: User, Driver, Trip, Matching, and Payment.",
        "Implemented event-driven choreography via Apache Kafka managing the complete trip lifecycle from ride request to fare settlement.",
        "Engineered sub-millisecond driver availability lookup using Redis geospatial indexing backed by durable PostgreSQL storage.",
        "Containerized with Docker and deployed on Kubernetes with automated health probes and Prometheus telemetry.",
      ],
      stack: ["Go (Golang)", "Uber Fx", "gRPC", "Apache Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
    },
    {
      id: "waqt-pe-post",
      title: "Waqt Pe Post",
      tagline: "India Post AI-Driven Parcel Management & Route Optimization",
      badge: "SIH '24 WINNER (₹1 LAKH)",
      badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      githubUrl: "https://github.com/thalapravin",
      liveUrl: "",
      visual: WaqtPePostVisual,
      metrics: [
        { label: "Award", val: "National 1st Place (₹1L)" },
        { label: "Client Partner", val: "Department of Posts" },
        { label: "Delivery Auth", val: "OTP & Geofencing" },
        { label: "Routing", val: "AI Dynamic Routing" },
      ],
      description:
        "Smart India Hackathon 2024 National 1st Place Winning Project (Cash Prize ₹1,00,000). A next-generation parcel operations ecosystem engineered to modernize parcel tracking, delivery verification, and routing across India Post.",
      highlights: [
        "Built intelligent role-based operational dashboards for Postmasters, regional Sorting Hubs, Delivery Agents, and citizens.",
        "Integrated AI route optimization algorithms analyzing real-time road congestion and hub capacity limits to cut delivery mileage.",
        "Engineered secure cryptographic OTP handovers and GPS geofenced delivery confirmations, eliminating parcel theft.",
        "Built resilient notification webhooks via SMS and WhatsApp dispatching real-time transit status updates to millions.",
      ],
      stack: ["React.js", "Node.js", "MongoDB", "Redux", "Tailwind CSS", "Python", "Django", "Google Maps API"],
    },
    {
      id: "solarsync",
      title: "SolarSync",
      tagline: "AI-Powered Smart Grid & Solar Energy Scheduling System",
      badge: "LUMINOUS TECHNO-X FINALIST",
      badgeColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
      githubUrl: "https://github.com/thalapravin",
      liveUrl: "",
      visual: SolarSyncVisual,
      metrics: [
        { label: "Ranking", val: "Top 10 Nationally" },
        { label: "Competition", val: "74,000+ Teams" },
        { label: "Finale Venue", val: "Luminous HQ Noida" },
        { label: "Algorithm", val: "Tariff Predictor AI" },
      ],
      description:
        "Grand Finale Finalist at Luminous Techno-X 2024, placing in the top 10 teams out of 74,000+ teams across India. Built an automated AI scheduling system that balances domestic solar generation against volatile grid tariffs.",
      highlights: [
        "Designed real-time telemetry ingestion from solar inverters and battery charge controllers to forecast battery charge.",
        "Trained machine learning models on historical weather and seasonal irradiance data to predict solar output 24h in advance.",
        "Automated decision algorithms switching households between battery storage, solar generation, and grid supply during peak pricing.",
        "Presented system architecture and live hardware simulation to top leadership and industry executives at Luminous HQ.",
      ],
      stack: ["MERN Stack", "Python AI/ML", "Redux", "Tailwind CSS", "Express.js", "IoT Telemetry", "Docker"],
    },
    {
      id: "primes-capital",
      title: "PrimesCapital CRM Portal",
      tagline: "Multi-Tier Role-Based Financial CRM & KYC Ledger System",
      badge: "STARTUP CRM SYSTEM",
      badgeColor: "border-violet-500/30 bg-violet-500/10 text-violet-400",
      githubUrl: "https://github.com/thalapravin",
      liveUrl: "https://www.linkedin.com/in/pravin-avhad/details/projects/",
      visual: PrimesCapitalVisual,
      metrics: [
        { label: "User Roles", val: "Admin, Vendor, Lead" },
        { label: "Security", val: "JWT & Role RBAC" },
        { label: "Database", val: "MySQL Relational" },
        { label: "Finance", val: "KYC & Withdrawals" },
      ],
      description:
        "Engineered a multi-tenant CRM portal for fintech startup PrimesCapital with 3 isolated operational dashboards: Administrator (system management, vendor tracking, withdrawal approvals), Vendor (lead inputs & communications), and Lead (portfolio tracking, KYC submission, withdrawal ledger).",
      highlights: [
        "Architected role-based access control (RBAC) with JWT auth protecting granular financial and client transaction records.",
        "Engineered relational MySQL schema modeling complex financial withdrawals, commission splits, and lead lifecycles.",
        "Built responsive frontend with React.js, Redux state management, and Tailwind CSS for rapid operational data entry.",
      ],
      stack: ["React.js", "Redux", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "JWT Auth"],
    },
    {
      id: "atmagaurav-bms",
      title: "Atmagaurav Business Management System",
      tagline: "Comprehensive ERP for Building Material Suppliers",
      badge: "ENTERPRISE ERP & LOGISTICS",
      badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      githubUrl: "https://github.com/thalapravin",
      liveUrl: "https://www.linkedin.com/in/pravin-avhad/details/projects/",
      visual: AtmagauravBMSVisual,
      metrics: [
        { label: "Modules", val: "Suppliers, Drivers, Fleet" },
        { label: "Finance", val: "Invoicing & PnL" },
        { label: "Bookings", val: "Interactive Calendar" },
        { label: "Roles", val: "Admin, Manager, Driver" },
      ],
      description:
        "Developed an end-to-end enterprise management web application for Atmagaurav Building Material Suppliers. Automated operations across supplier orders, driver monthly settlements, fleet maintenance logs, booking schedules, automated invoicing, and profit/loss financial reporting.",
      highlights: [
        "Engineered comprehensive CRUD directories for suppliers, driver monthly payroll, and vehicle maintenance intervals.",
        "Built dynamic booking calendar with purchase order tracking and automated tax invoice generation.",
        "Designed financial logging system tracking daily material expenses against delivery revenue with profit/loss visualization.",
      ],
      stack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Financial Ledger", "Invoice Engine"],
    },
    {
      id: "teddypups-clone",
      title: "Teddypups Live Platform",
      tagline: "High-Performance Next.js E-Commerce & Adoption Portal",
      badge: "DEPLOYED LIVE APPLICATION",
      badgeColor: "border-[#00E599]/30 bg-[#00E599]/10 text-[#00E599]",
      githubUrl: "https://github.com/ThalaPravin/Teddypups",
      liveUrl: "https://teddypups-2n18h3dd9-pravin-avhads-projects.vercel.app/",
      visual: TeddypupsVisual,
      metrics: [
        { label: "Deployment", val: "Vercel Edge" },
        { label: "Architecture", val: "Next.js App Router" },
        { label: "Animations", val: "Framer Motion" },
        { label: "Performance", val: "100 Lighthouse" },
      ],
      description:
        "Built and deployed a responsive, interactive puppy boutique platform with full-featured catalog browsing, breed filtering, interactive media galleries, and frictionless customer booking funnels.",
      highlights: [
        "Architected with Next.js App Router, Tailwind CSS, and kinetic Framer Motion micro-interactions.",
        "Optimized image pipelines, client-side routing, and responsive mobile-first UI.",
        "Deployed to Vercel with automated GitHub CI/CD releases.",
      ],
      stack: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "Vercel", "TypeScript"],
    },
    {
      id: "workout-app",
      title: "Home Workout Fitness Mobile App",
      tagline: "Cross-Platform React Native Fitness Application",
      badge: "MOBILE ENGINEERING",
      badgeColor: "border-pink-500/30 bg-pink-500/10 text-pink-400",
      githubUrl: "https://github.com/thalapravin",
      liveUrl: "https://www.linkedin.com/in/pravin-avhad/details/projects/",
      visual: HomeWorkoutVisual,
      metrics: [
        { label: "Framework", val: "React Native" },
        { label: "Media", val: "Exercise Video Streams" },
        { label: "Tracking", val: "Reps & Timers" },
        { label: "Platform", val: "Android & iOS" },
      ],
      description:
        "Developed a mobile fitness frontend application using React Native. Fetches exercise data from web APIs, rendering video/GIF guides, repetition counters, and structured workout schedules with intuitive touch navigation.",
      highlights: [
        "Integrated exercise API delivering exercise video streams, muscle group tags, and duration countdowns.",
        "Designed clean, engaging mobile interface with responsive layout adapters across Android and iOS devices.",
      ],
      stack: ["React Native", "JavaScript", "REST APIs", "Mobile UI/UX"],
    },
    {
      id: "weather-app",
      title: "Dynamic Weather & Forecast App",
      tagline: "Real-Time Weather Intelligence with 5-Day Forecasting",
      badge: "REACT & API INTEGRATION",
      badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-400",
      githubUrl: "https://github.com/thalapravin",
      liveUrl: "https://www.linkedin.com/in/pravin-avhad/details/projects/",
      visual: WeatherVisual,
      metrics: [
        { label: "API Provider", val: "OpenWeatherMap" },
        { label: "Forecast", val: "5-Day Forecast" },
        { label: "State", val: "React Hooks" },
        { label: "Search", val: "Global Cities" },
      ],
      description:
        "Dynamic meteorological application built with React.js and OpenWeatherMap API, delivering live temperature, wind speed, humidity, and 5-day predictive forecasts for any city worldwide.",
      highlights: [
        "Implemented debounced city search with dynamic weather icon rendering based on atmospheric condition codes.",
        "Built responsive forecast cards with temperature trend graphs.",
      ],
      stack: ["React.js", "OpenWeatherMap API", "CSS3", "JavaScript"],
    },
  ];

  const total = projects.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentProject = projects[currentIndex];
  const VisualComponent = currentProject.visual;

  // Slide transition variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.96,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section id="projects" className="py-24 border-b border-white/5 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#00E599] uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
              <span>PROJECT SHOWCASE // KINETIC 3D CAROUSEL</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#f2f2ee] uppercase leading-[0.85]">
              FEATURED PROJECTS
            </h2>
          </div>

          {/* Carousel Arrows & Counter */}
          <div className="flex items-center gap-4">
            <div className="text-sm font-mono text-zinc-400">
              <span className="font-display font-bold text-2xl text-white">
                {(currentIndex + 1).toString().padStart(2, "0")}
              </span>
              <span className="text-zinc-600 mx-1">/</span>
              <span>{total.toString().padStart(2, "0")}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 hover:border-[#00E599] text-white flex items-center justify-center transition-all duration-200 active:scale-95"
                aria-label="Previous project"
                data-cursor-text="PREV"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full border border-white/10 bg-[#00E599] hover:bg-[#00FF87] text-black flex items-center justify-center transition-all duration-200 shadow-[0_0_20px_rgba(0,229,153,0.3)] active:scale-95"
                aria-label="Next project"
                data-cursor-text="NEXT"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Selector Thumbnail Scrubber Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
                currentIndex === idx
                  ? "bg-[#00E599] text-black font-bold shadow-[0_0_15px_rgba(0,229,153,0.35)]"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
              data-cursor-text="VIEW"
            >
              <span>0{idx + 1}.</span>
              <span>{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Active Kinetic 3D Slide */}
        <div className="relative min-h-[580px] sm:min-h-[520px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-[#09090D] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Subtle Ambient Radial Highlight */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E599]/5 rounded-full blur-[140px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Technical Specs & Execution */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Badge & Index */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span
                        className={`text-xs font-mono px-3 py-1 rounded-full border uppercase tracking-wider font-semibold ${currentProject.badgeColor}`}
                      >
                        {currentProject.badge}
                      </span>
                      <span className="font-mono text-xs text-zinc-500">
                        SYSTEM 0{currentIndex + 1} OF 0{total}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight mb-2">
                      {currentProject.title}
                    </h3>
                    <p className="text-zinc-400 font-mono text-xs sm:text-sm mb-4">
                      {currentProject.tagline}
                    </p>

                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                      {currentProject.description}
                    </p>

                    {/* Key Technical Execution Bullets */}
                    <div className="space-y-2 mb-6">
                      {currentProject.highlights.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-[#00E599] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics 4-Box Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6 pt-4 border-t border-white/5">
                      {currentProject.metrics.map((m, i) => (
                        <div key={i} className="bg-black/40 border border-white/5 rounded-xl p-2.5">
                          <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-0.5">
                            {m.label}
                          </span>
                          <span className="font-display font-bold text-sm sm:text-base text-white">
                            {m.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips & Action Links */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5 max-w-md">
                      {currentProject.stack.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#131318] border border-white/5 text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {currentProject.liveUrl && (
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00E599] text-black hover:bg-[#00FF87] text-xs font-mono font-bold transition-all shadow-[0_0_15px_rgba(0,229,153,0.3)]"
                          data-cursor-text="LIVE"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={currentProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#00E599] text-xs font-mono text-[#f2f2ee] hover:text-[#00E599] transition-all"
                        data-cursor-text="CODE"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Bespoke Animated Visual Photo Canvas */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  <div className="w-full">
                    <VisualComponent />
                  </div>
                  <div className="mt-3 text-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse" />
                    <span>Real-Time Architecture Simulation // Interactive Canvas</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
