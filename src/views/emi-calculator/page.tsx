"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ArrowRight, TrendingDown, Info } from "lucide-react";
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

export default function EmiCalculator({ locale }: { locale: string }) {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10.5);
  const [tenure, setTenure] = useState(5);

  const emi = useMemo(() => calcEMI(amount, rate, tenure), [amount, rate, tenure]);
  const total = emi * tenure * 12;
  const interest = total - amount;
  const principalPct = Math.round((amount / total) * 100);
  const interestPct = 100 - principalPct;

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────── */}
      <section className="relative bg-[#0f172a] overflow-hidden pt-36 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EF7E22]/8 blur-[120px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">EMI Calculator</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl font-bold text-white mb-5">
            Plan Your Finances
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-lg mx-auto">
            Use our EMI calculator to estimate your monthly payments and plan your loan wisely.
          </motion.p>
        </div>
      </section>

      {/* ── Calculator ─────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* Sliders panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8"
            >
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8">Adjust Loan Details</h2>

              {[
                { label: "Loan Amount", value: formatINR(amount), min: 10000, max: 5000000, step: 10000, current: amount, set: setAmount, display: formatINR(amount) },
                { label: "Interest Rate (% p.a.)", value: `${rate}%`, min: 1, max: 36, step: 0.1, current: rate, set: setRate, display: `${rate}%` },
                { label: "Loan Tenure (Years)", value: `${tenure} Yrs`, min: 1, max: 30, step: 1, current: tenure, set: setTenure, display: `${tenure} Years` },
              ].map((slider) => (
                <div key={slider.label} className="mb-8 last:mb-0">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-700">{slider.label}</label>
                    <span className="text-sm font-bold text-[#EF7E22] bg-orange-50 px-3 py-1 rounded-lg">{slider.display}</span>
                  </div>
                  <input
                    type="range"
                    min={slider.min} max={slider.max} step={slider.step}
                    value={slider.current}
                    onChange={(e) => slider.set(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>{slider.min.toLocaleString("en-IN")}</span>
                    <span>{slider.max.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              ))}

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold py-4 rounded-2xl text-sm tracking-wide transition-colors shadow-lg shadow-orange-100 mt-6"
                >
                  Apply for This Loan <ArrowRight size={16} />
                </motion.button>
              </Link>
            </motion.div>

            {/* Results panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-5"
            >
              {/* EMI highlight */}
              <div className="bg-gradient-to-br from-[#0f172a] to-[#1a0a2e] rounded-3xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 blur-[60px] rounded-full pointer-events-none" />
                <div className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-3">Monthly EMI</div>
                <motion.div
                  key={Math.round(emi)}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="font-serif text-5xl font-bold text-white mb-1"
                >
                  {formatINR(emi)}
                </motion.div>
                <div className="text-slate-500 text-xs">per month for {tenure} {tenure === 1 ? "year" : "years"}</div>
              </div>

              {/* Breakdown */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-4">
                <h3 className="font-bold text-gray-900 mb-2">Loan Breakdown</h3>

                {[
                  { label: "Principal Amount", value: formatINR(amount), color: "text-gray-900", dot: "bg-[#EF7E22]" },
                  { label: "Total Interest", value: formatINR(interest), color: "text-rose-600", dot: "bg-rose-400" },
                  { label: "Total Payable", value: formatINR(total), color: "text-gray-900 font-bold text-lg", dot: "bg-gray-300" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${row.dot} shrink-0`} />
                      <span className="text-gray-600 text-sm">{row.label}</span>
                    </div>
                    <span className={`font-mono text-sm ${row.color}`}>{row.value}</span>
                  </div>
                ))}

                {/* Progress bar */}
                <div className="pt-2">
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span>Principal {principalPct}%</span>
                    <span>Interest {interestPct}%</span>
                  </div>
                  <div className="h-3 bg-rose-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#EF7E22] rounded-full transition-all duration-500"
                      style={{ width: `${principalPct}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Tip */}
              <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-blue-700">
                <Info size={16} className="shrink-0 mt-0.5 text-blue-500" />
                <span>A shorter tenure means higher EMI but lower total interest. Choose tenure wisely based on your monthly budget.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900">EMI Related Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Is the EMI amount fixed?", a: "For fixed-rate loans, your EMI remains constant throughout the tenure. For floating-rate loans, it may vary with market rates." },
              { q: "Can I prepay my loan?", a: "Yes, we allow partial and full prepayment. Nominal prepayment charges may apply depending on your loan type." },
              { q: "What happens if I miss an EMI?", a: "A late payment fee is charged and it may affect your CIBIL score. Please contact us immediately if you anticipate a missed payment." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="font-bold text-gray-900 mb-2">{faq.q}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
