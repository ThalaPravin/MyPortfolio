"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Calendar, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "CRED", href: "#cred" },
    { name: "Projects", href: "#projects" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Clients", href: "#freelance" },
    { name: "Journey", href: "#journey" },
    { name: "The Lab", href: "#lab" },
    { name: "Hire Me", href: "#hire-me" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
              isScrolled
                ? "bg-[#0A0A0D]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Left: Minimal Monogram & Name */}
            <a
              href="#"
              className="flex items-center gap-2.5 group text-[#f2f2ee]"
              data-cursor-text="TOP"
            >
              <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center font-mono font-bold text-xs group-hover:border-[#00E599] transition-colors">
                PA
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base sm:text-lg tracking-wider uppercase text-white group-hover:text-[#00E599] transition-colors">
                  PRAVIN AVHAD
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse" />
              </div>
            </a>

            {/* Center: Clean, Uncluttered Desktop Navigation Capsule */}
            <nav className="hidden md:flex items-center gap-6 px-5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono tracking-wider text-zinc-400">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Topmate 1:1 Booking Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://topmate.io/pravin_s_avhad/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide bg-[#00E599] text-[#050505] hover:bg-[#00FF87] hover:shadow-[0_0_20px_rgba(0,229,153,0.4)] transition-all duration-300 transform hover:scale-105"
                data-cursor-text="BOOK"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>1:1 Topmate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href="https://topmate.io/pravin_s_avhad/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#00E599] text-[#050505] flex items-center gap-1"
              >
                <span>1:1</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-zinc-300 hover:text-white"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Clean Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#050505]/98 backdrop-blur-2xl pt-24 px-6 md:hidden flex flex-col justify-between pb-10"
          >
            <div className="flex flex-col gap-5">
              <div className="text-[10px] font-mono text-[#00E599] tracking-widest uppercase">
                // Navigation Index
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-4xl uppercase tracking-tight text-[#f2f2ee] hover:text-[#00E599] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6">
              <a
                href="https://topmate.io/pravin_s_avhad/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#00E599] text-[#050505] font-mono text-center font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 1:1 Call on Topmate</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
