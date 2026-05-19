"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Calculator, ShieldCheck, Zap, Award, Users, ChevronRight } from "lucide-react";
import Link from "next/link";

const loanChips = [
  "Business Loan", "Gold Loan", "MSME Loan",
  "Personal Loan", "Two Wheeler", "Mortgage",
];

const trustItems = [
  { icon: <ShieldCheck size={15} />, label: "RBI Registered NBFC" },
  { icon: <Zap size={15} />, label: "Approval in 24hrs" },
  { icon: <Award size={15} />, label: "10+ Years of Trust" },
  { icon: <Users size={15} />, label: "10,000+ Customers" },
];

const floatingStats = [
  { label: "Loan Disbursed", value: "₹500 Cr+", change: "+12% this year" },
  { label: "Avg. Processing", value: "24 hrs", change: "Fastest in UP" },
];

export function HeroSection({ props, locale }: { props?: any; locale?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen bg-[#FAFAF8] overflow-hidden flex items-center">
      {/* ── Decorative background shapes ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large orange arc top-right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border-[60px] border-[#EF7E22]/8" />
        <div className="absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full border-[40px] border-[#EF7E22]/5" />
        {/* Bottom left accent */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#3B1040]/5 to-transparent rounded-full" />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle, #1a1a1a 1.2px, transparent 1.2px)", backgroundSize: "28px 28px" }}
        />
        {/* Horizontal line accents */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 items-center min-h-screen lg:min-h-0 lg:py-32">

          {/* ── LEFT — Copy ─────────────────── */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm mb-8"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-semibold text-gray-600 tracking-wide">RBI Registered NBFC &nbsp;·&nbsp; Uttar Pradesh</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-serif text-[3.2rem] md:text-[4rem] xl:text-[4.8rem] font-bold text-gray-950 leading-[1.05] tracking-tight mb-6"
            >
              Loans That
              <br />
              <span className="relative whitespace-nowrap">
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 380 14" fill="none" preserveAspectRatio="none">
                  <path d="M2 10 C80 2, 200 14, 378 4" stroke="#EF7E22" strokeWidth="4" strokeLinecap="round" fill="none"/>
                </svg>
                <span className="text-[#EF7E22]">Move With You</span>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md"
            >
              Fast, transparent, and affordable financial solutions for individuals and businesses across Uttar Pradesh.
            </motion.p>

            {/* Loan chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {loanChips.map((chip, i) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-gray-200 rounded-full text-[12px] font-semibold text-gray-600 shadow-sm hover:border-[#EF7E22] hover:text-[#EF7E22] cursor-pointer group transition-all"
                >
                  <ChevronRight size={10} className="opacity-0 group-hover:opacity-100 -ml-1 transition-all" />
                  {chip}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 12px 32px rgba(239,126,34,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-[#EF7E22] text-white font-bold px-7 py-3.5 rounded-2xl text-sm tracking-wide shadow-lg shadow-orange-200"
                >
                  Apply for Loan <ArrowRight size={16} />
                </motion.button>
              </Link>
              <Link href="/emi-calculator">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-gray-900 text-gray-700 hover:text-gray-900 font-bold px-7 py-3.5 rounded-2xl text-sm transition-all"
                >
                  <Calculator size={15} /> EMI Calculator
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-8 border-t border-gray-100"
            >
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
                  <span className="text-[#EF7E22]">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Visual ───────────────── */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative w-full max-w-sm lg:max-w-none"
            >
              {/* Stacked photo effect */}
              <div className="absolute top-3 left-3 w-full h-full bg-[#EF7E22]/10 rounded-3xl" />
              <div className="absolute top-1.5 left-1.5 w-full h-full bg-[#EF7E22]/20 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                  alt="Happy customers with their loan"
                  className="w-full h-[420px] lg:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
              </div>

              {/* Floating stat card — top left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -left-5 top-10 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 min-w-[160px]"
              >
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Disbursed</div>
                <div className="text-2xl font-bold text-gray-900 font-serif">₹500 Cr+</div>
                <div className="text-[11px] text-green-600 font-semibold mt-1 flex items-center gap-1">
                  <span>↑</span> Growing every month
                </div>
              </motion.div>

              {/* Floating approval badge — bottom right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute -right-4 bottom-16 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 min-w-[190px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600 font-bold text-sm">✓</div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Loan Approved!</div>
                    <div className="text-[10px] text-gray-400">Business Loan · 2 min ago</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-[#EF7E22] font-serif">₹8,00,000</div>
              </motion.div>

              {/* Processing time — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                className="absolute left-4 -bottom-5 bg-[#EF7E22] text-white rounded-xl px-5 py-3 shadow-lg shadow-orange-300"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Avg Processing</div>
                <div className="text-lg font-bold font-serif">24 Hours</div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
