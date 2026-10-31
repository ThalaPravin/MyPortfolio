"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, CheckCircle2, ShieldCheck, Zap, Server, Activity, ArrowRight, Database, Terminal } from "lucide-react";

export default function SystemLab() {
  const [activeSimulation, setActiveSimulation] = useState<"cred" | "rideflow">("cred");
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "[SYS_READY] Distributed simulation engine initialized. Select a pipeline.",
  ]);

  const credSteps = [
    {
      name: "Client Ingestion & Auth",
      service: "API Gateway",
      detail: "JWT verified, Rate limiter token bucket pass (sub-5ms)",
      log: "[INGRESS] POST /api/v1/recharge/initiate -> Verified token (User ID: cred_user_9921)",
    },
    {
      name: "Plan Validation & Catalog",
      service: "Recharge Service (Go)",
      detail: "Plan discovered from multi-telco cache (Jio/Airtel/Vi/BSNL)",
      log: "[CATALOG] Validated ₹299 Unlimited Plan against Operator Matrix (Cache HIT: Redis 0.8ms)",
    },
    {
      name: "Payment Fulfillment & Lock",
      service: "Payment Switch (Uber Fx)",
      detail: "Distributed idempotency lock acquired via Redis Redlock",
      log: "[PAYMENT] Idempotency Key locked. Bank webhook callback dispatched 200 OK",
    },
    {
      name: "Settlement & Reconciliation",
      service: "Reconciliation Engine",
      detail: "Double-entry ledger posted to PostgreSQL with zero variance",
      log: "[LEDGER] Double-entry balanced. Audit log appended to Kafka topic `recharge-settlements`",
    },
    {
      name: "Dynamic Reminder Scheduled",
      service: "Kafka Event Sourcing",
      detail: "28-day dynamic expiry reminder queued into notification workers",
      log: "[EVENT_BUS] Emitted `RECHARGE_SUCCESS` event -> Notification scheduler armed",
    },
  ];

  const rideflowSteps = [
    {
      name: "Ride Request Emitted",
      service: "Trip Microservice",
      detail: "gRPC payload received with origin & destination coordinates",
      log: "[TRIP] New ride request trip_uuid_8492 lat: 18.5204, lon: 73.8567",
    },
    {
      name: "Geo-Radius Spatial Indexing",
      service: "Redis In-Memory (GEOADD)",
      detail: "Scanning active drivers within 3.0 km radius",
      log: "[REDIS_GEO] GEORADIUS query returned 6 nearby available drivers within 12ms",
    },
    {
      name: "Driver Matching & Bidding",
      service: "Matching Engine (Go / Uber Fx)",
      detail: "ETA & rating optimization matrix calculates best driver dispatch",
      log: "[MATCHING] Optimal driver paired: driver_7718 (ETA 3.4 mins, 4.9★ rating)",
    },
    {
      name: "Event-Driven State Transition",
      service: "Apache Kafka Bus",
      detail: "Trip state flipped to `DRIVER_ACCEPTED` across distributed mesh",
      log: "[KAFKA] Event `TRIP_ACCEPTED` broadcast to Driver & Rider WebSocket channels",
    },
    {
      name: "Durable Ledger Persistence",
      service: "PostgreSQL & K8s Telemetry",
      detail: "Trip session committed to durable store with trace ID attached",
      log: "[AUDIT] Prometheus metric incremented: rideflow_trips_completed_total +1",
    },
  ];

  const activePipeline = activeSimulation === "cred" ? credSteps : rideflowSteps;

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(0);
    setLogs([`[EXECUTION_START] Triggering ${activeSimulation.toUpperCase()} transaction flow...`]);

    activePipeline.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
        setLogs((prev) => [...prev, step.log]);
        if (index === activePipeline.length - 1) {
          setIsRunning(false);
          setLogs((prev) => [
            ...prev,
            `[EXECUTION_COMPLETE] All 5 microservice nodes committed successfully. Latency: 184ms.`,
          ]);
        }
      }, (index + 1) * 750);
    });
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setLogs([
      `[SYS_READY] Reset complete. Ready to simulate ${activeSimulation.toUpperCase()} pipeline.`,
    ]);
  };

  return (
    <section id="lab" className="py-24 border-b border-white/5 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#00E599] uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
              <span>THE INTERACTIVE LAB // SYSTEM ARCHITECTURE TAKEN APART</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#f2f2ee] uppercase leading-[0.85]">
              SYSTEM SIMULATOR
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-[#0E0E12] border border-white/10 p-1.5 rounded-full">
            <button
              onClick={() => {
                setActiveSimulation("cred");
                resetSimulation();
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeSimulation === "cred"
                  ? "bg-[#00E599] text-black font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              CRED Recharge Engine
            </button>
            <button
              onClick={() => {
                setActiveSimulation("rideflow");
                resetSimulation();
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeSimulation === "rideflow"
                  ? "bg-[#00E599] text-black font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              RideFlow Event Mesh
            </button>
          </div>
        </div>

        {/* Simulation Control Board */}
        <div className="bg-[#09090C] border border-white/10 rounded-3xl p-6 sm:p-10 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                Active Architecture Model
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#f2f2ee] uppercase tracking-wide">
                {activeSimulation === "cred"
                  ? "CRED Telecom Recharge & Reconciliation Pipeline"
                  : "RideFlow Distributed Geospatial Matching Protocol"}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={runSimulation}
                disabled={isRunning}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  isRunning
                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                    : "bg-[#00E599] text-black hover:bg-[#00FF87] hover:shadow-[0_0_20px_rgba(0,229,153,0.3)]"
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? "Simulating Traffic..." : "Trigger Simulation"}</span>
              </button>

              <button
                onClick={resetSimulation}
                className="p-2.5 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                title="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Node Flow Visualizer */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
            {activePipeline.map((step, idx) => {
              const isPast = currentStep > idx;
              const isCurrent = currentStep === idx + 1;
              return (
                <div
                  key={step.name}
                  className={`p-4 rounded-xl border transition-all duration-300 relative ${
                    isCurrent
                      ? "bg-[#14141C] border-[#00E599] shadow-[0_0_20px_rgba(0,229,153,0.2)]"
                      : isPast
                      ? "bg-[#0D0D12] border-emerald-500/40 text-zinc-300"
                      : "bg-[#070709] border-white/5 opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                    <span className="text-zinc-500">STAGE 0{idx + 1}</span>
                    {isCurrent ? (
                      <span className="w-2 h-2 rounded-full bg-[#00E599] animate-ping" />
                    ) : isPast ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599]" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-zinc-700" />
                    )}
                  </div>

                  <div className="text-xs font-mono font-semibold text-zinc-400 mb-1">
                    {step.service}
                  </div>
                  <div className="font-display font-bold text-base text-[#f2f2ee] uppercase mb-2">
                    {step.name}
                  </div>
                  <div className="text-[11px] text-zinc-400 leading-tight font-light">
                    {step.detail}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Terminal Log Output */}
          <div className="bg-black/90 rounded-2xl border border-white/10 p-5 font-mono text-xs">
            <div className="flex items-center justify-between text-[10px] text-zinc-500 pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#00E599]" />
                <span className="uppercase tracking-widest text-zinc-400">
                  Distributed Telemetry Log Stream
                </span>
              </div>
              <span className="text-[#00E599]">● LIVE CONCURRENT IPC</span>
            </div>

            <div className="space-y-1.5 max-h-48 overflow-y-auto">
              {logs.map((log, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-zinc-600 select-none">&gt;</span>
                  <span
                    className={
                      log.includes("COMPLETE")
                        ? "text-[#00E599] font-bold"
                        : log.includes("START")
                        ? "text-cyan-400"
                        : "text-zinc-300"
                    }
                  >
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
