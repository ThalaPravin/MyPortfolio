"use client";

import { motion } from "framer-motion";
import { 
  Car, 
  Package, 
  Sun, 
  Database, 
  Building, 
  ExternalLink, 
  Smartphone, 
  CloudSun,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Zap,
  Radio,
  Lock,
  Cpu,
  Truck,
  Heart,
  Flame,
  Wind
} from "lucide-react";

// 1. RideFlow Visual: Animated Geospatial Radar & Event Bus
export function RideFlowVisual() {
  return (
    <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden bg-[#07070A] border border-white/10 p-5 flex flex-col justify-between select-none">
      {/* Background Radar Grid */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(0, 229, 153, 0.4) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "36px 36px, 18px 18px, 18px 18px",
        }}
      />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00E599] animate-ping" />
          <span className="text-white font-semibold">GEO-SPATIAL RADAR // REDIS 0.8ms</span>
        </div>
        <span className="text-[#00E599]">PUNE_MESH_NODE_04</span>
      </div>

      {/* Radar Center Animation */}
      <div className="relative z-10 my-auto flex items-center justify-center">
        {/* Concentric Radar Rings */}
        <div className="relative w-44 h-44 rounded-full border border-[#00E599]/20 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.05, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border border-[#00E599]/40"
          />
          <div className="w-28 h-28 rounded-full border border-dashed border-[#00E599]/30 flex items-center justify-center">
            {/* Center Vehicle Beacon */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="absolute top-0 w-3 h-3 rounded-full bg-[#00E599] shadow-[0_0_12px_#00E599] flex items-center justify-center">
                <Car className="w-2 h-2 text-black" />
              </div>
            </motion.div>
            <div className="w-12 h-12 rounded-full bg-[#00E599]/15 border border-[#00E599] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,153,0.3)]">
              <Radio className="w-5 h-5 text-[#00E599]" />
            </div>
          </div>
        </div>

        {/* Floating Geo Ping Badges */}
        <motion.div 
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1 left-4 px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 text-[10px] font-mono text-zinc-300 backdrop-blur-md"
        >
          <span>Driver ETA: 3.2m</span>
        </motion.div>

        <motion.div 
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1 right-4 px-2.5 py-1 rounded-lg bg-black/80 border border-white/10 text-[10px] font-mono text-[#00E599] backdrop-blur-md"
        >
          <span>Kafka: TRIP_ACCEPTED</span>
        </motion.div>
      </div>

      {/* Bottom Live IPC Stream */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono bg-black/60 px-3 py-1.5 rounded-lg border border-white/5 text-zinc-400">
        <span className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-[#00E599]" />
          <span>gRPC STREAM // 1,420 RPS</span>
        </span>
        <span className="text-zinc-500">UBER FX APP CONTEXT: OK</span>
      </div>
    </div>
  );
}

// 2. Waqt Pe Post Visual: India Post AI Route & OTP Security
export function WaqtPePostVisual() {
  return (
    <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden bg-[#07070A] border border-white/10 p-5 flex flex-col justify-between select-none">
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-white font-semibold">INDIA POST DISPATCH MATRIX</span>
        </div>
        <span className="text-amber-400">SIH 1761 // AI ROUTE</span>
      </div>

      {/* Route Network Topology */}
      <div className="relative z-10 my-auto py-2">
        <div className="flex items-center justify-between relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-6 right-6 h-[2px] bg-gradient-to-r from-emerald-500 via-amber-400 to-[#00E599] -translate-y-1/2 z-0" />

          {/* Node 1: Post Office */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-black border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Package className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono text-zinc-400 mt-1">Origin Hub</span>
          </div>

          {/* Node 2: AI Route Optimizer */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-11 h-11 rounded-xl bg-black border border-amber-400 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.35)]"
            >
              <Cpu className="w-5 h-5" />
            </motion.div>
            <span className="text-[10px] font-mono text-amber-300 mt-1">AI Optimized</span>
          </div>

          {/* Node 3: OTP Handover */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-black border border-[#00E599]/60 flex items-center justify-center text-[#00E599] shadow-[0_0_15px_rgba(0,229,153,0.3)]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono text-zinc-400 mt-1">OTP Verified</span>
          </div>
        </div>

        {/* Live Status Pill */}
        <div className="mt-5 bg-black/60 border border-white/10 rounded-xl p-3 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-zinc-300">OTP HANDOVER:</span>
            <span className="font-bold text-[#00E599] tracking-wider">948-210</span>
          </div>
          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
            -34% TRANSIT TIME
          </span>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono bg-black/60 px-3 py-1.5 rounded-lg border border-white/5 text-zinc-400">
        <span>MINISTRY OF COMMUNICATION SPEC</span>
        <span className="text-amber-400 font-bold">1ST PLACE CHAMPION</span>
      </div>
    </div>
  );
}

// 3. SolarSync Visual: AI Solar Waveform & Dynamic Grid Switching
export function SolarSyncVisual() {
  return (
    <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden bg-[#07070A] border border-white/10 p-5 flex flex-col justify-between select-none">
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-white font-semibold">SMART GRID AI SCHEDULER</span>
        </div>
        <span className="text-cyan-400">74K TEAMS FINALIST</span>
      </div>

      {/* Dynamic Waveform Graph & Power Gauge */}
      <div className="relative z-10 my-auto">
        <div className="flex items-center justify-between mb-2 text-xs font-mono">
          <span className="text-zinc-400 flex items-center gap-1.5">
            <Sun className="w-3.5 h-3.5 text-amber-400" /> Solar Generation (Forecast)
          </span>
          <span className="text-cyan-400 font-bold">4.8 kW Peak</span>
        </div>

        {/* Animated Waveform Canvas Simulation */}
        <div className="w-full h-20 rounded-xl bg-black/60 border border-white/10 p-2 relative overflow-hidden flex items-end gap-1.5">
          {[40, 65, 80, 95, 88, 70, 85, 92, 60, 75, 90, 82, 68, 85, 95, 78, 55, 70, 88, 92, 75].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 10 }}
              animate={{ height: [`${h * 0.4}%`, `${h * 0.9}%`, `${h * 0.6}%`] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
              className="flex-1 bg-gradient-to-t from-cyan-500/20 via-cyan-400 to-[#00E599] rounded-t-sm"
            />
          ))}
        </div>

        {/* Dynamic Mode Switcher */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between">
            <div>
              <div className="text-[9px] font-mono text-zinc-400">ENERGY MODE</div>
              <div className="text-xs font-mono font-bold text-cyan-300">SOLAR BATTERY (88%)</div>
            </div>
            <Zap className="w-4 h-4 text-cyan-400" />
          </div>

          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
            <div>
              <div className="text-[9px] font-mono text-zinc-400">GRID TARIFF</div>
              <div className="text-xs font-mono font-bold text-amber-400">PEAK SHEDDING ACTIVE</div>
            </div>
            <Activity className="w-4 h-4 text-amber-400" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono bg-black/60 px-3 py-1.5 rounded-lg border border-white/5 text-zinc-400">
        <span>LUMINOUS CORPORATE HQ NOIDA</span>
        <span className="text-cyan-400 font-bold">TOP 10 NATIONWIDE</span>
      </div>
    </div>
  );
}

// 4. PrimesCapital CRM Visual: Multi-Tier RBAC & KYC Ledger
export function PrimesCapitalVisual() {
  return (
    <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden bg-[#07070A] border border-white/10 p-5 flex flex-col justify-between select-none">
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-white font-semibold">3-TIER ENTERPRISE CRM // JWT RBAC</span>
        </div>
        <span className="text-violet-400">MYSQL LEDGER</span>
      </div>

      <div className="relative z-10 my-auto space-y-2.5">
        {/* Tier 1: Admin */}
        <div className="p-2.5 rounded-xl bg-white/5 border border-violet-500/30 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-[10px]">
              A
            </div>
            <span className="text-white font-semibold">Admin Dashboard</span>
          </div>
          <span className="text-violet-300 text-[10px]">Global Control &amp; Reports</span>
        </div>

        {/* Tier 2: Vendor */}
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px]">
              V
            </div>
            <span className="text-white font-semibold">Vendor Gateway</span>
          </div>
          <span className="text-cyan-300 text-[10px]">Lead Intake &amp; Comms</span>
        </div>

        {/* Tier 3: Lead with live withdrawal status */}
        <div className="p-2.5 rounded-xl bg-black/60 border border-emerald-500/30 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
              L
            </div>
            <div>
              <span className="text-white font-semibold block">Lead Transaction Portal</span>
              <span className="text-[10px] text-zinc-400">KYC Status: Verified</span>
            </div>
          </div>
          <span className="text-[#00E599] font-bold text-[11px] bg-[#00E599]/10 px-2 py-0.5 rounded border border-[#00E599]/20">
            ₹45,000 APPROVED
          </span>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono bg-black/60 px-3 py-1.5 rounded-lg border border-white/5 text-zinc-400">
        <span>SECURITY: JWT TOKEN SIGNATURE</span>
        <span className="text-violet-400">ROLE ISOLATION: 100%</span>
      </div>
    </div>
  );
}

// 5. Atmagaurav BMS Visual: Fleet Management & Invoicing Engine
export function AtmagauravBMSVisual() {
  return (
    <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden bg-[#07070A] border border-white/10 p-5 flex flex-col justify-between select-none">
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-semibold">LOGISTICS &amp; ERP DISPATCH</span>
        </div>
        <span className="text-emerald-400">PHP // MYSQL</span>
      </div>

      <div className="relative z-10 my-auto space-y-2">
        <div className="p-3 rounded-xl bg-black/60 border border-white/10">
          <div className="flex items-center justify-between text-xs font-mono mb-1.5">
            <span className="text-zinc-300 flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Fleet Dispatch #MH-17-A-4491</span>
            </span>
            <span className="text-[10px] text-[#00E599] bg-[#00E599]/10 px-2 py-0.5 rounded">
              EN ROUTE
            </span>
          </div>
          <div className="text-[10px] font-mono text-zinc-400 flex justify-between">
            <span>Material: Ready-Mix Concrete</span>
            <span>Driver: Verified Monthly Payroll</span>
          </div>
        </div>

        {/* Invoice Generator badge */}
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
          <div>
            <span className="text-[10px] text-zinc-400 block">TAX INVOICE GENERATOR</span>
            <span className="text-white font-bold">INV-ATMA-2024-884</span>
          </div>
          <span className="text-emerald-400 font-bold">AUTO GENERATED</span>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono bg-black/60 px-3 py-1.5 rounded-lg border border-white/5 text-zinc-400">
        <span>BOOKING CALENDAR &amp; SUPPLIERS</span>
        <span className="text-emerald-400">FINANCIAL PnL: ACTIVE</span>
      </div>
    </div>
  );
}

// 6. Teddypups Visual: High-End Boutique Adoption Showcase
export function TeddypupsVisual() {
  return (
    <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden bg-[#07070A] border border-white/10 p-5 flex flex-col justify-between select-none">
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
          <span className="text-white font-semibold">TEDDYPUPS BOUTIQUE // NEXT.JS</span>
        </div>
        <span className="text-[#00E599]">VERCEL EDGE</span>
      </div>

      <div className="relative z-10 my-auto p-4 rounded-xl bg-gradient-to-br from-zinc-900/80 to-black border border-white/10 text-center">
        <div className="w-12 h-12 rounded-full bg-[#00E599]/10 border border-[#00E599]/40 flex items-center justify-center text-[#00E599] mx-auto mb-2">
          <Heart className="w-6 h-6 fill-current" />
        </div>
        <h4 className="font-display font-bold text-xl text-white uppercase tracking-wide">
          Boutique Adoption &amp; Puppies Portal
        </h4>
        <div className="flex items-center justify-center gap-2 my-2 text-[10px] font-mono">
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300">Teacup Yorkie</span>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300">Maltipoo</span>
          <span className="px-2 py-0.5 rounded bg-[#00E599]/10 border border-[#00E599]/30 text-[#00E599]">100% Pedigree</span>
        </div>
        <div className="text-[11px] font-mono text-zinc-400">
          5.0 ★ Rating • Vercel Edge Serverless Deployment
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono bg-black/60 px-3 py-1.5 rounded-lg border border-white/5 text-zinc-400">
        <span>LIGHTHOUSE: 100 PERFORMANCE</span>
        <span className="text-[#00E599]">LIVE ON VERCEL</span>
      </div>
    </div>
  );
}

// 7. Home Workout Visual: Mobile Bezel with Reps & Calorie Ticker
export function HomeWorkoutVisual() {
  return (
    <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden bg-[#07070A] border border-white/10 p-5 flex flex-col justify-between select-none">
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
          <span className="text-white font-semibold">REACT NATIVE FITNESS ENGINE</span>
        </div>
        <span className="text-pink-400">MOBILE FRONTEND</span>
      </div>

      <div className="relative z-10 my-auto flex items-center justify-center gap-6">
        {/* Animated Circular Rep Counter */}
        <div className="relative w-28 h-28 rounded-full border-4 border-pink-500/20 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-t-pink-500 border-r-transparent border-b-transparent border-l-transparent"
          />
          <div className="text-center">
            <span className="font-display font-extrabold text-2xl text-white block">12/15</span>
            <span className="text-[9px] font-mono text-pink-400 uppercase">REPETITIONS</span>
          </div>
        </div>

        {/* Telemetry Stats */}
        <div className="space-y-2 text-xs font-mono">
          <div className="p-2 rounded-lg bg-black/60 border border-white/5 flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 text-pink-400" />
            <span className="text-zinc-300">HEART: 138 BPM</span>
          </div>
          <div className="p-2 rounded-lg bg-black/60 border border-white/5 flex items-center gap-2">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-zinc-300">BURN: 340 KCAL</span>
          </div>
          <div className="p-2 rounded-lg bg-black/60 border border-white/5 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-[#00E599]" />
            <span className="text-zinc-300">REST: 45 SEC</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono bg-black/60 px-3 py-1.5 rounded-lg border border-white/5 text-zinc-400">
        <span>EXERCISE REST API STREAM</span>
        <span className="text-pink-400">CROSS PLATFORM</span>
      </div>
    </div>
  );
}

// 8. Weather Visual: Atmospheric Radar & 5-Day Forecast
export function WeatherVisual() {
  return (
    <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden bg-[#07070A] border border-white/10 p-5 flex flex-col justify-between select-none">
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-white font-semibold">METEOROLOGICAL RADAR // OPENWEATHER</span>
        </div>
        <span className="text-sky-400">5-DAY FORECAST</span>
      </div>

      <div className="relative z-10 my-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <CloudSun className="w-10 h-10 text-sky-400" />
          <div className="text-left">
            <span className="font-display font-bold text-4xl text-white">28°C</span>
            <span className="text-xs font-mono text-zinc-400 block">PUNE // CLEAR SKY</span>
          </div>
        </div>

        {/* 5-Day forecast cards */}
        <div className="grid grid-cols-5 gap-1.5 mt-3 text-[10px] font-mono">
          {["MON 29°", "TUE 31°", "WED 27°", "THU 28°", "FRI 26°"].map((d, i) => (
            <div key={i} className="p-1.5 rounded bg-white/5 border border-white/5 text-zinc-300">
              {d}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono bg-black/60 px-3 py-1.5 rounded-lg border border-white/5 text-zinc-400">
        <span>DYNAMIC WEATHER HOOKS</span>
        <span className="text-sky-400">GLOBAL API READY</span>
      </div>
    </div>
  );
}
