"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#050505] border-t border-white/5 text-zinc-500 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="text-[#f2f2ee] font-medium">PRAVIN AVHAD</span>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <span>BACKEND SDE @ CRED</span>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <span>© 2026 ALL RIGHTS RESERVED</span>
          </div>

          {/* Center: Coordinates */}
          <div className="text-[11px] text-zinc-600">
            18.5204° N, 73.8567° E • PUNE / BENGALURU, INDIA
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-[#00E599] transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
