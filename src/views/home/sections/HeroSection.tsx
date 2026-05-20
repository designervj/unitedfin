"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowRight, Calculator, ShieldCheck, Zap, Award,
  Users, ChevronRight, BadgeCheck, TrendingUp,
  Building2, Landmark, Car, Home, User, Coins
} from "lucide-react";
import Link from "next/link";

const loans = [
  { label: "Business Loan", rate: "14%", icon: <Building2 size={14}/>, href: "/services/business-loan", color: "from-blue-500/20 to-blue-600/10" },
  { label: "MSME Loan", rate: "16%", icon: <Landmark size={14}/>, href: "/services/msme-loan", color: "from-purple-500/20 to-purple-600/10" },
  { label: "Gold Loan", rate: "12%", icon: <Coins size={14}/>, href: "/services/gold-loan", color: "from-yellow-500/20 to-yellow-600/10" },
  { label: "Two Wheeler", rate: "15%", icon: <Car size={14}/>, href: "/services/two-wheeler-loan", color: "from-green-500/20 to-green-600/10" },
  { label: "Mortgage", rate: "13%", icon: <Home size={14}/>, href: "/services/mortgage-loan", color: "from-red-500/20 to-red-600/10" },
  { label: "Personal Loan", rate: "16%", icon: <User size={14}/>, href: "/services/personal-loan", color: "from-orange-500/20 to-orange-600/10" },
];



export function HeroSection({ props, locale }: { props?: any; locale?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const [loanAmount, setLoanAmount] = useState(500000);
  const [activeLoan, setActiveLoan] = useState(0);

  const formatAmount = (n: number) => "₹ " + (n >= 100000 ? (n / 100000).toFixed(1) + " L" : n.toLocaleString("en-IN"));

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden flex flex-col bg-[#060610]">

      {/* ── Parallax background image ── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
            alt="" className="w-full h-full object-cover object-center scale-[1.08]" />
        </motion.div>
        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060610]/98 via-[#060610]/85 to-[#060610]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060610]/60 via-transparent to-[#060610]/98" />
      </div>

      {/* ── Noise texture ── */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* ── Ambient glows ── */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#EF7E22] opacity-[0.07] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#3B1040] opacity-[0.15] blur-[100px] rounded-full pointer-events-none" />

      {/* ── Top accent bar ── */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#EF7E22] to-transparent" />

      {/* ══════ CONTENT ══════ */}
      <motion.div style={{ opacity: fadeOut }} className="relative z-10 flex-1 flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 flex-1 flex flex-col">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 xl:gap-20 items-center flex-1 pt-28 lg:pt-32 pb-8">

            {/* ══ LEFT — Hero Copy ══ */}
            <div className="flex flex-col">

              {/* Pill badge */}
              <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 self-start bg-white/6 border border-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inset-0 rounded-full bg-green-400 opacity-70" />
                  <span className="relative rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-white/65 text-xs font-semibold tracking-wide">RBI Registered NBFC · Uttar Pradesh</span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6">
                <h1
                  className="font-serif font-bold text-white leading-[1.02]"
                  style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}
                >
                  Flexible Loans for your<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7E22] to-[#f9a94b]">
                    Business &amp; Daily Needs.
                  </span>
                </h1>
              </motion.div>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
                className="text-slate-400 text-[17px] leading-relaxed max-w-lg mb-8">
                Whether you're looking to refurbish your property, buy an asset or you just need cash for working capital, we want to help you and your business succeed.
              </motion.p>

              {/* Feature chips — from unitedfin.in */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38 }}
                className="flex flex-wrap gap-2 mb-10">
                {[
                  { label: "Quick Loan", icon: "⚡" },
                  { label: "Online Application", icon: "🖥️" },
                  { label: "Hassle-Free", icon: "✅" },
                  { label: "MSME Friendly", icon: "🏭" },
                  { label: "Minimal Docs", icon: "📄" },
                  { label: "24hr Disbursal", icon: "🕐" },
                ].map((chip, i) => (
                  <motion.span key={chip.label}
                    initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-semibold border bg-white/5 border-white/10 text-white/60 hover:border-[#EF7E22]/60 hover:text-white cursor-default transition-all">
                    <span>{chip.icon}</span>
                    {chip.label}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
                className="flex flex-wrap items-center gap-4 mb-12">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: "0 20px 48px rgba(239,126,34,0.45)" }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2.5 bg-[#EF7E22] hover:bg-[#d96e1a] text-white font-bold px-8 py-4 rounded-2xl text-sm shadow-xl shadow-orange-900/30 transition-colors">
                    Apply for Loan <ArrowRight size={16} />
                  </motion.button>
                </Link>
                <Link href="/emi-calculator">
                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2.5 border border-white/12 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-2xl text-sm transition-all backdrop-blur-sm">
                    <Calculator size={15} /> EMI Calculator
                  </motion.button>
                </Link>
                <div className="w-px h-8 bg-white/10" />
                <Link href="/emi-payment-qr-code">
                  <button className="text-white/40 hover:text-white/70 text-sm font-medium underline underline-offset-4 decoration-white/15 hover:decoration-white/40 transition-all">
                    Pay EMI →
                  </button>
                </Link>
              </motion.div>

              {/* Trust strip */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.58 }}
                className="flex flex-wrap gap-x-7 gap-y-3 pt-7 border-t border-white/6">
                {[
                  { icon: <ShieldCheck size={12} />, text: "RBI Registered" },
                  { icon: <Zap size={12} />, text: "24hr Approval" },
                  { icon: <Award size={12} />, text: "Est. 2014" },
                  { icon: <Users size={12} />, text: "10,000+ Served" },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-white/40 text-[12px] font-medium">
                    <span className="text-[#EF7E22]">{t.icon}</span>{t.text}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ══ RIGHT — Quick Apply Card ══ */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 10 }} animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="flex flex-col gap-4 w-full">

              {/* ── Approval Toast ── */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="flex items-center gap-3 bg-white rounded-2xl shadow-2xl shadow-black/40 px-4 py-3 border border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0">
                  <BadgeCheck size={17} className="text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-900 text-sm font-bold">Loan Approved! 🎉</div>
                  <div className="text-gray-400 text-xs truncate">Business Loan · ₹8,00,000 · Varanasi</div>
                </div>
                <span className="text-green-500 text-[10px] font-bold bg-green-50 px-2 py-0.5 rounded-full shrink-0">Live</span>
              </motion.div>

              {/* ── Main Quick Apply Card ── */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-black/50 overflow-hidden">

                {/* Card Header */}
                <div className="bg-gradient-to-r from-[#3B1040] to-[#5a1a65] px-6 py-5 flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-base">Quick Apply</div>
                    <div className="text-white/60 text-xs mt-0.5">Get approval in 24 hours</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#EF7E22] flex items-center justify-center shadow-lg shadow-orange-900/40">
                    <TrendingUp size={18} className="text-white" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">

                  {/* Loan Type selector */}
                  <div>
                    <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">Select Loan Type</div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {loans.map((loan, i) => (
                        <button key={loan.label}
                          onClick={() => setActiveLoan(i)}
                          className={`text-left px-2.5 py-2 rounded-xl text-[11px] font-semibold border transition-all ${
                            activeLoan === i
                              ? "bg-[#EF7E22] border-[#EF7E22] text-white shadow-md shadow-orange-100"
                              : "bg-gray-50 border-gray-100 text-gray-600 hover:border-orange-200 hover:bg-orange-50"
                          }`}>
                          <div className="flex items-center gap-1 mb-0.5">{loan.icon} {loan.label.split(" ")[0]}</div>
                          <div className={`text-[9px] font-bold ${activeLoan === i ? "text-white/75" : "text-gray-400"}`}>{loan.rate} p.a.</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Loan Amount Slider */}
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-gray-500 text-xs font-medium">Loan Amount</span>
                      <span className="text-[#EF7E22] font-bold text-xl font-serif">{formatAmount(loanAmount)}</span>
                    </div>
                    <input type="range" min={10000} max={5000000} step={10000}
                      value={loanAmount} onChange={e => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2 rounded-full appearance-none cursor-pointer"
                      style={{ background: `linear-gradient(to right, #EF7E22 ${((loanAmount - 10000) / 4990000) * 100}%, #e5e7eb ${((loanAmount - 10000) / 4990000) * 100}%)` }}
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 mt-1.5 font-medium">
                      <span>₹10K</span><span>₹50L</span>
                    </div>
                  </div>

                  {/* EMI Preview */}
                  <div className="bg-orange-50 border border-orange-100 rounded-2xl px-4 py-3 flex items-center justify-between">
                    <div>
                      <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-0.5">Est. Monthly EMI</div>
                      <div className="text-gray-900 font-bold text-xl font-serif">
                        ₹ {Math.round(
                          (loanAmount * (parseFloat(loans[activeLoan].rate) / 100 / 12) *
                            Math.pow(1 + parseFloat(loans[activeLoan].rate) / 100 / 12, 36)) /
                          (Math.pow(1 + parseFloat(loans[activeLoan].rate) / 100 / 12, 36) - 1)
                        ).toLocaleString("en-IN")}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-0.5">Tenure</div>
                      <div className="text-[#EF7E22] font-bold text-sm">3 Years</div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 16px 40px rgba(239,126,34,0.35)" }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full flex items-center justify-center gap-2 bg-[#EF7E22] hover:bg-[#d96e1a] text-white font-bold py-3.5 rounded-2xl text-sm shadow-lg shadow-orange-200 transition-colors">
                      Apply Now <ArrowRight size={15} />
                    </motion.button>
                  </Link>

                  <Link href="/emi-calculator">
                    <button className="w-full text-center text-gray-400 hover:text-[#EF7E22] text-xs font-medium transition-colors">
                      Advanced EMI Calculator →
                    </button>
                  </Link>
                </div>

                {/* Card Footer */}
                <div className="border-t border-gray-100 px-6 py-3 bg-gray-50 flex items-center gap-2">
                  <ShieldCheck size={13} className="text-[#EF7E22] shrink-0" />
                  <div className="text-gray-500 text-[11px]">
                    <span className="font-semibold text-gray-700">Branches:</span> Varanasi · Azamgarh · Lalganj · Phoolpur
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="relative z-10 mt-auto border-t border-white/6 backdrop-blur-2xl"
          style={{ background: "rgba(6,6,16,0.82)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/6">
              {[
                { value: "₹500 Cr+", label: "Loans Disbursed", sub: "Since 2014" },
                { value: "10,000+", label: "Happy Customers", sub: "Across UP" },
                { value: "10+ Yrs", label: "Trusted NBFC", sub: "RBI Registered" },
                { value: "24 Hrs", label: "Loan Approval", sub: "Minimal paperwork" },
              ].map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 + i * 0.07 }}
                  className="py-5 px-5 lg:px-8 group cursor-default">
                  <div className="font-serif text-lg md:text-xl font-bold text-[#EF7E22] mb-0.5 group-hover:scale-105 transition-transform origin-left">
                    {s.value}
                  </div>
                  <div className="text-white/70 text-xs font-semibold">{s.label}</div>
                  <div className="text-white/25 text-[10px] mt-0.5">{s.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
