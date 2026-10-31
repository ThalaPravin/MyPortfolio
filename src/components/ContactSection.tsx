"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Mail, Phone, Github, Linkedin, Copy, Check, ArrowUpRight, Award, MessageCircle, Twitter, Youtube } from "lucide-react";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "pravinavhadweb@gmail.com";
  const phone = "+917972800561";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#00E599", "#ffffff", "#D4AF37", "#06b6d4"],
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      handle: "github.com/thalapravin",
      url: "https://github.com/thalapravin",
      icon: Github,
    },
    {
      name: "LinkedIn",
      handle: "linkedin.com/in/pravin-avhad",
      url: "https://www.linkedin.com/in/pravin-avhad/",
      icon: Linkedin,
    },
    {
      name: "Twitter / X",
      handle: "@dev_Pravin_",
      url: "https://x.com/dev_Pravin_",
      icon: Twitter,
    },
    {
      name: "YouTube",
      handle: "@the_zynx1 (Tech Talks)",
      url: "https://www.youtube.com/@the_zynx1",
      icon: Youtube,
    },
    {
      name: "LeetCode",
      handle: "Knight (Rating 2103)",
      url: "https://leetcode.com/u/thalapravin/",
      icon: Award,
    },
    {
      name: "Topmate",
      handle: "1:1 Tech Discussion",
      url: "https://topmate.io/pravin_s_avhad/",
      icon: MessageCircle,
    },
  ];

  return (
    <section id="contact" className="py-24 border-b border-white/5 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Big Editorial Heading */}
          <div className="lg:col-span-6">
            <div className="text-xs font-mono tracking-widest text-[#00E599] uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
              <span>START A CONVERSATION // OPEN TO COLLABORATION</span>
            </div>

            <h2 className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tight text-[#f2f2ee] uppercase leading-[0.82] mb-8">
              LET&apos;S WORK
              <br />
              <span className="text-zinc-600">TOGETHER</span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed max-w-xl mb-8">
              I partner with high-velocity engineering teams, founders, and startups looking to build robust distributed architectures, event-driven backends in Go, and autonomous AI automation pipelines.
            </p>

            {/* Quick Contact Interactive Pills */}
            <div className="space-y-3 max-w-md">
              {/* Email Pill */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#0C0C10] border border-white/10 hover:border-[#00E599]/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#00E599]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Direct Email</div>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm font-mono text-[#f2f2ee] hover:text-[#00E599] transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all flex items-center gap-1 text-xs font-mono"
                  title="Copy email"
                  data-cursor-text="COPY"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00E599]" />
                      <span className="text-[#00E599]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Pill */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#0C0C10] border border-white/10 hover:border-[#00E599]/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#00E599]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Phone / WhatsApp</div>
                    <a
                      href={`tel:${phone}`}
                      className="text-sm font-mono text-[#f2f2ee] hover:text-[#00E599] transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all flex items-center gap-1 text-xs font-mono"
                  title="Copy phone"
                  data-cursor-text="COPY"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00E599]" />
                      <span className="text-[#00E599]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Social & Verification Links Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-[#09090D] border border-white/10 hover:border-[#00E599]/50 hover:bg-[#0F0F14] transition-all duration-300 group flex flex-col justify-between h-36 hover:-translate-y-1"
                  data-cursor-text="VISIT"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-zinc-300 group-hover:text-[#00E599] group-hover:bg-[#00E599]/10 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#00E599] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <div>
                    <div className="font-display font-bold text-xl text-[#f2f2ee] uppercase group-hover:text-[#00E599] transition-colors">
                      {social.name}
                    </div>
                    <div className="text-xs font-mono text-zinc-400 truncate mt-0.5">
                      {social.handle}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
