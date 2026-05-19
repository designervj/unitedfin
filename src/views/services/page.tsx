"use client";

import { motion } from "motion/react";
import { Building2, TrendingUp, Coins, Shield, Bike, Landmark, CheckCircle2, ArrowRight, Clock, Percent } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Building2 size={24} />,
    title: "Business Loan — MSME",
    desc: "Fuel your business expansion, manage working capital, or upgrade machinery with our customized business loans designed for SMEs.",
    color: "text-orange-500", bg: "bg-orange-50", hoverBg: "hover:bg-orange-500",
    features: ["Up to ₹50 Lakhs", "Minimal documentation", "Flexible repayment"],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Micro Loan — Daily Business",
    desc: "Empowering micro-entrepreneurs and individuals in rural and semi-urban areas with quick, daily-collection based micro loans.",
    color: "text-purple-500", bg: "bg-purple-50", hoverBg: "hover:bg-purple-500",
    features: ["Starts from ₹5,000", "Daily repayment option", "Doorstep service"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Coins size={24} />,
    title: "Gold Loan",
    desc: "Get instant cash against your gold jewelry with maximum loan-to-value, secure storage, and low interest rates.",
    color: "text-amber-500", bg: "bg-amber-50", hoverBg: "hover:bg-amber-500",
    features: ["Approval in hours", "Safe & secure vault", "Lowest interest rate"],
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Shield size={24} />,
    title: "Personal Loan",
    desc: "Quick and hassle-free personal loans for unexpected expenses, medical emergencies, weddings, or vacations.",
    color: "text-rose-500", bg: "bg-rose-50", hoverBg: "hover:bg-rose-500",
    features: ["No collateral required", "Fast disbursal", "Flexible tenure"],
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Bike size={24} />,
    title: "Two Wheeler Loan",
    desc: "Hit the road with your dream bike. We offer attractive interest rates and quick processing for two-wheeler financing.",
    color: "text-blue-500", bg: "bg-blue-50", hoverBg: "hover:bg-blue-500",
    features: ["Up to 95% financing", "Low down payment", "On-road processing"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Landmark size={24} />,
    title: "Mortgage Loan",
    desc: "Unlock the value of your residential or commercial property to secure high-value loans at competitive interest rates.",
    color: "text-emerald-500", bg: "bg-emerald-50", hoverBg: "hover:bg-emerald-500",
    features: ["High loan value", "Long tenure options", "Residential & commercial"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeefa?auto=format&fit=crop&w=800&q=80",
  },
];

const process = [
  { step: "01", title: "Apply Online", desc: "Fill our simple form with basic details." },
  { step: "02", title: "Document Check", desc: "Submit minimal KYC and income documents." },
  { step: "03", title: "Quick Approval", desc: "Get a decision within 24 hours." },
  { step: "04", title: "Disbursement", desc: "Funds transferred directly to your account." },
];

export default function Services({ locale }: { locale: string }) {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────── */}
      <section className="relative bg-[#0f172a] overflow-hidden pt-36 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#EF7E22]/8 blur-[120px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">Our Services</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl font-bold text-white mb-5"
          >
            Financial Solutions<br />For Every Need
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto mb-10"
          >
            From micro loans to mortgage — we have a product designed exactly for your situation.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { icon: <Clock size={15} />, text: "24hr Approval" },
              { icon: <Percent size={15} />, text: "Competitive Rates" },
              { icon: <CheckCircle2 size={15} />, text: "Minimal Documents" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400">
                <span className="text-orange-400">{item.icon}</span> {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Service Cards ─────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center ${s.color}`}>
                    {s.icon}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                        <CheckCircle2 size={12} className={s.color} /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <button className={`w-full py-2.5 rounded-xl border-2 border-current ${s.color} font-bold text-xs tracking-wide flex items-center justify-center gap-1.5 hover:text-white ${s.hoverBg} hover:border-transparent transition-all`}>
                      Apply Now <ArrowRight size={12} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4">How It Works</span>
            <h2 className="font-serif text-4xl font-bold text-gray-900">Simple 4-Step Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200" />
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#EF7E22] text-white font-serif font-bold text-xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-orange-200 relative z-10">
                  {p.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#1a0a2e] to-[#0f172a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Not Sure Which Loan is Right?</h2>
          <p className="text-slate-400 mb-8">Talk to our experts for free — we'll match you to the perfect loan product.</p>
          <Link href="/contact">
            <button className="bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold px-10 py-4 rounded-2xl shadow-xl transition-colors text-sm tracking-wide">
              Talk to an Expert
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
