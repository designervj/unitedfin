"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Calculator, TrendingDown, PieChart, Info } from "lucide-react";
import Link from "next/link";

function formatINR(n: number) {
  return "₹ " + Math.round(n).toLocaleString("en-IN");
}

function calcEMI(p: number, ratePA: number, years: number) {
  const r = ratePA / 12 / 100;
  const n = years * 12;
  if (r === 0) return p / n;
  return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

const loanTypes = [
  { label: "Business Loan", rate: 14, min: 50000, max: 5000000, href: "/services/business-loan" },
  { label: "MSME Loan", rate: 16, min: 5000, max: 3000000, href: "/services/msme-loan" },
  { label: "Gold Loan", rate: 12, min: 10000, max: 2000000, href: "/services/gold-loan" },
  { label: "Two Wheeler", rate: 15, min: 20000, max: 500000, href: "/services/two-wheeler-loan" },
  { label: "Mortgage Loan", rate: 13, min: 100000, max: 20000000, href: "/services/mortgage-loan" },
  { label: "Personal Loan", rate: 16, min: 10000, max: 1000000, href: "/services/personal-loan" },
];

export default function EmiCalculator({ locale }: { locale: string }) {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(14);
  const [tenure, setTenure] = useState(3);
  const [activeType, setActiveType] = useState(0);

  const emi = useMemo(() => calcEMI(amount, rate, tenure), [amount, rate, tenure]);
  const total = emi * tenure * 12;
  const interest = total - amount;
  const principalPct = Math.round((amount / total) * 100);
  const interestPct = 100 - principalPct;

  function selectLoanType(i: number) {
    setActiveType(i);
    setRate(loanTypes[i].rate);
    setAmount(Math.min(Math.max(amount, loanTypes[i].min), loanTypes[i].max));
  }

  return (
    <main className="min-h-screen bg-white">

      {/* ══════════════════════════════════════════════
          CINEMATIC HERO — same design as About pages
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex flex-col overflow-hidden">

        {/* Full-bleed background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80"
            alt="EMI Calculator" className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/85 via-[#0a0a14]/70 to-[#0a0a14]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14]/80 via-transparent to-[#0a0a14]/30" />
        </div>

        {/* Dot texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        {/* Orange top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EF7E22] to-transparent opacity-60" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 lg:px-12 pt-36 pb-24">
          <div className="max-w-3xl">

            {/* Breadcrumb */}
            <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1.5 text-xs text-white/40 font-medium mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <ChevronRight size={11} className="text-white/20" />
              <span className="text-[#EF7E22] font-semibold">EMI Calculator</span>
            </motion.nav>

            {/* Category tag */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[2px] bg-[#EF7E22]" />
              <span className="text-[#EF7E22] text-[11px] font-bold tracking-[0.3em] uppercase">Plan Smart · Borrow Wisely</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-bold text-white leading-[1.0] mb-7"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            >
              EMI<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7E22] to-[#f9a94b]">
                Calculator.
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-slate-300/80 text-[17px] leading-relaxed max-w-xl mb-10">
              Estimate your monthly EMI, total interest payable, and plan your loan from United Finance & Leasing before you apply.
            </motion.p>

            {/* CTA row */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-5">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04, x: 4 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold px-7 py-3.5 rounded-2xl text-sm shadow-xl shadow-orange-900/40 transition-colors">
                  Apply for Loan <ArrowRight size={15} />
                </motion.button>
              </Link>
              <div className="w-px h-8 bg-white/15" />
              <Link href="/emi-payment-qr-code">
                <button className="text-white/60 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all">
                  Pay via QR Code →
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Frosted glass stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="relative z-10 border-t border-white/8 backdrop-blur-2xl"
          style={{ background: "rgba(10,10,20,0.75)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
              {[
                { value: "12%", label: "From Rate", sub: "Gold loan p.a." },
                { value: "₹2Cr", label: "Max Loan", sub: "Mortgage loan" },
                { value: "15 Yrs", label: "Max Tenure", sub: "Flexible terms" },
                { value: "24 Hrs", label: "Approval", sub: "Fast processing" },
              ].map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="py-5 px-6 lg:px-8 group">
                  <div className="font-serif text-xl md:text-2xl font-bold text-[#EF7E22] mb-0.5 group-hover:scale-110 transition-transform origin-left">
                    {s.value}
                  </div>
                  <div className="text-white font-semibold text-sm">{s.label}</div>
                  <div className="text-white/35 text-xs mt-0.5">{s.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          LOAN TYPE SELECTOR
      ══════════════════════════════════════════════ */}
      <section className="bg-[#0a0a14] py-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {loanTypes.map((lt, i) => (
              <button key={lt.label} onClick={() => selectLoanType(i)}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeType === i
                    ? "bg-[#EF7E22] text-white shadow-lg shadow-orange-900/30"
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                }`}>
                {lt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CALCULATOR SECTION
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* ── Sliders Panel ── */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <h2 className="font-serif text-xl font-bold text-gray-900 mb-7">Loan Details</h2>

              {/* Loan Amount */}
              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-gray-500 text-sm font-medium">Loan Amount</label>
                  <span className="font-serif font-bold text-[#EF7E22] text-xl">{formatINR(amount)}</span>
                </div>
                <input type="range" min={loanTypes[activeType].min} max={loanTypes[activeType].max}
                  step={loanTypes[activeType].min < 50000 ? 1000 : 10000}
                  value={amount} onChange={e => setAmount(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ background: `linear-gradient(to right, #EF7E22 ${((amount - loanTypes[activeType].min) / (loanTypes[activeType].max - loanTypes[activeType].min)) * 100}%, #e5e7eb ${((amount - loanTypes[activeType].min) / (loanTypes[activeType].max - loanTypes[activeType].min)) * 100}%)` }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                  <span>{formatINR(loanTypes[activeType].min)}</span>
                  <span>{formatINR(loanTypes[activeType].max)}</span>
                </div>
              </div>

              {/* Rate */}
              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-gray-500 text-sm font-medium">Interest Rate (p.a.)</label>
                  <span className="font-serif font-bold text-[#EF7E22] text-xl">{rate.toFixed(1)}%</span>
                </div>
                <input type="range" min={8} max={28} step={0.5}
                  value={rate} onChange={e => setRate(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ background: `linear-gradient(to right, #EF7E22 ${((rate - 8) / 20) * 100}%, #e5e7eb ${((rate - 8) / 20) * 100}%)` }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                  <span>8%</span><span>28%</span>
                </div>
              </div>

              {/* Tenure */}
              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-gray-500 text-sm font-medium">Loan Tenure</label>
                  <span className="font-serif font-bold text-[#EF7E22] text-xl">{tenure} {tenure === 1 ? "Year" : "Years"}</span>
                </div>
                <input type="range" min={1} max={15} step={1}
                  value={tenure} onChange={e => setTenure(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ background: `linear-gradient(to right, #EF7E22 ${((tenure - 1) / 14) * 100}%, #e5e7eb ${((tenure - 1) / 14) * 100}%)` }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                  <span>1 Yr</span><span>15 Yrs</span>
                </div>
              </div>

              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold py-4 rounded-2xl text-sm shadow-lg shadow-orange-100 transition-colors">
                  Apply for {loanTypes[activeType].label} <ArrowRight size={15} />
                </motion.button>
              </Link>
            </motion.div>

            {/* ── Results Panel ── */}
            <div className="space-y-5">
              {/* Monthly EMI — Big card */}
              <motion.div
                key={emi.toFixed(0)}
                initial={{ scale: 0.96, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-[#0a0a14] rounded-3xl p-8 text-white">
                <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Monthly EMI</div>
                <div className="font-serif text-5xl font-bold text-[#EF7E22] mb-1">{formatINR(emi)}</div>
                <div className="text-white/40 text-sm">for {tenure * 12} months</div>

                {/* Visual bar */}
                <div className="mt-6 mb-2 h-3 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#EF7E22] to-[#f9a94b] transition-all duration-500"
                    style={{ width: `${principalPct}%` }} />
                </div>
                <div className="flex justify-between text-xs text-white/40">
                  <span>Principal {principalPct}%</span>
                  <span>Interest {interestPct}%</span>
                </div>
              </motion.div>

              {/* Breakdown cards */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Principal", value: formatINR(amount), icon: "₹", color: "text-blue-500 bg-blue-50" },
                  { label: "Total Interest", value: formatINR(interest), icon: "%", color: "text-orange-500 bg-orange-50" },
                  { label: "Total Amount", value: formatINR(total), icon: "Σ", color: "text-emerald-500 bg-emerald-50" },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                    <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center font-bold text-xs mb-3`}>
                      {item.icon}
                    </div>
                    <div className="font-serif font-bold text-gray-900 text-sm leading-tight mb-0.5">{item.value}</div>
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider font-medium">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Amortisation note */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex gap-3">
                <Info size={16} className="text-orange-500 shrink-0 mt-0.5" />
                <p className="text-orange-700 text-xs leading-relaxed">
                  EMI calculated using reducing balance method. Actual rate may vary based on credit profile. 
                  <Link href="/contact" className="font-bold underline ml-1">Get exact quote →</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          LOAN COMPARISON TABLE
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4">Compare</span>
            <h2 className="font-serif text-3xl font-bold text-gray-900">All Loan Products</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0a0a14] text-white">
                  <th className="text-left py-4 px-5 font-semibold text-xs uppercase tracking-widest text-white/60">Loan Type</th>
                  <th className="text-center py-4 px-5 font-semibold text-xs uppercase tracking-widest text-white/60">Rate (from)</th>
                  <th className="text-center py-4 px-5 font-semibold text-xs uppercase tracking-widest text-white/60">Max Amount</th>
                  <th className="text-center py-4 px-5 font-semibold text-xs uppercase tracking-widest text-white/60">Apply</th>
                </tr>
              </thead>
              <tbody>
                {loanTypes.map((lt, i) => (
                  <tr key={lt.label} className={`border-t border-gray-50 hover:bg-orange-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="py-4 px-5 font-semibold text-gray-900">{lt.label}</td>
                    <td className="py-4 px-5 text-center text-[#EF7E22] font-bold">{lt.rate}% p.a.</td>
                    <td className="py-4 px-5 text-center text-gray-600">{formatINR(lt.max)}</td>
                    <td className="py-4 px-5 text-center">
                      <Link href={lt.href}>
                        <button className="bg-orange-50 hover:bg-orange-100 text-orange-600 font-bold text-xs px-3 py-1.5 rounded-lg transition-colors">
                          Apply →
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a14] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EF7E22]/50 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-slate-400 mb-8">Get your loan approved in 24 hours with minimal documentation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold px-10 py-4 rounded-2xl shadow-xl shadow-orange-900/30 transition-colors text-sm">
                Apply Now <ArrowRight size={15} />
              </motion.button>
            </Link>
            <Link href="/emi-payment-qr-code">
              <button className="flex items-center gap-2 border border-white/15 text-white font-bold px-10 py-4 rounded-2xl text-sm bg-white/5 hover:border-white/30 transition-all">
                Pay via QR Code
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
