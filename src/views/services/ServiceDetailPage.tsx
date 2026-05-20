"use client";

import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, ChevronRight, Clock, FileText, Users, Sparkles } from "lucide-react";
import Link from "next/link";

interface ServicePageProps {
  locale: string;
  service: {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    heroImage: string;
    color: string;
    bgColor: string;
    gradientFrom: string;
    gradientTo: string;
    icon: React.ReactNode;
    highlights: { label: string; value: string; icon?: React.ReactNode }[];
    features: string[];
    eligibility: string[];
    documents: string[];
  };
}

export default function ServiceDetailPage({ locale, service }: ServicePageProps) {
  return (
    <main className="min-h-screen bg-white">

      {/* ═══════════════════════════════════════════
          TRENDING HERO — Split Panel + Floating Stats
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex overflow-hidden">

        {/* ── LEFT DARK PANEL ──────────────────── */}
        <div className="relative z-10 w-full lg:w-[52%] bg-[#0a0a14] flex flex-col justify-center px-8 sm:px-12 lg:px-16 pt-32 pb-16">

          {/* Mesh gradient glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className={`absolute -top-40 -left-40 w-[500px] h-[500px] ${service.gradientFrom} opacity-20 blur-[120px] rounded-full`} />
            <div className={`absolute bottom-0 right-0 w-80 h-80 ${service.gradientTo} opacity-10 blur-[80px] rounded-full`} />
            <div className="absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          </div>

          <div className="relative z-10 max-w-lg">
            {/* Breadcrumb */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1.5 text-xs text-white/35 font-medium mb-6">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
              <ChevronRight size={12} />
              <span className={`${service.color} font-semibold`}>{service.title}</span>
            </motion.div>

            {/* Badge */}
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border ${service.bgColor} border-current/20`}>
              <Sparkles size={11} className={service.color} />
              <span className={`${service.color} text-[10px] font-bold tracking-[0.2em] uppercase`}>{service.subtitle}</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6"
            >
              {service.title.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className={service.color}> {word}</span>
                ) : (
                  <span key={i}>{i > 0 ? " " : ""}{word}</span>
                )
              )}
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              className="text-slate-400 text-[15px] leading-relaxed mb-8">
              {service.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-3 mb-12">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold px-7 py-3.5 rounded-2xl text-sm transition-colors shadow-lg shadow-orange-900/30"
                >
                  Apply Now <ArrowRight size={15} />
                </motion.button>
              </Link>
              <Link href="/emi-calculator">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 border border-white/10 hover:border-white/25 bg-white/5 text-white font-semibold px-7 py-3.5 rounded-2xl text-sm transition-all"
                >
                  Calculate EMI
                </motion.button>
              </Link>
            </motion.div>

            {/* Floating stat cards row */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="grid grid-cols-2 gap-3">
              {service.highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative bg-white/5 border border-white/8 backdrop-blur-sm rounded-2xl p-4 overflow-hidden group cursor-default"
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${service.gradientFrom}`} />
                  <div className={`font-serif text-2xl font-bold mb-0.5 ${service.color}`}>{h.value}</div>
                  <div className="text-white/40 text-xs font-medium uppercase tracking-wider">{h.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT IMAGE PANEL ──────────────────── */}
        <div className="hidden lg:block absolute right-0 top-0 w-[52%] h-full">
          {/* Image */}
          <img src={service.heroImage} alt={service.title}
            className="w-full h-full object-cover" />

          {/* Dark left-fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/60 to-transparent" />
          {/* Dark top/bottom overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/30 via-transparent to-[#0a0a14]/60" />

          {/* Floating badge — top right */}
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute top-36 right-8 bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl px-5 py-3 text-white"
          >
            <div className="text-[10px] text-white/50 uppercase tracking-widest mb-0.5">Processing Time</div>
            <div className="font-bold text-lg flex items-center gap-2">
              <Clock size={15} className="text-[#EF7E22]" /> 24 Hours
            </div>
          </motion.div> */}

          {/* Floating badge — bottom right */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-20 right-8 bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl px-5 py-3 text-white"
          >
            <div className="text-[10px] text-white/50 uppercase tracking-widest mb-0.5">Minimal Docs</div>
            <div className="font-bold text-lg flex items-center gap-2">
              <FileText size={15} className="text-[#EF7E22]" /> 100% Online
            </div>
          </motion.div> */}

          {/* Floating badge — mid left on image */}
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute top-1/2 -translate-y-1/2 right-[38%] bg-[#EF7E22] rounded-2xl px-4 py-2.5 text-white shadow-xl"
          >
            <div className="text-[9px] uppercase tracking-widest mb-0.5 opacity-80">Trusted By</div>
            <div className="font-bold text-base">10,000+ Customers</div>
          </motion.div> */}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES + ELIGIBILITY + DOCUMENTS
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Features */}
            <div>
              <span className={`inline-block text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5 ${service.bgColor} ${service.color}`}>
                Key Benefits
              </span>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our<br />{service.title}?
              </h2>
              <div className="space-y-3">
                {service.features.map((f, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-100 hover:bg-orange-50/30 transition-all group">
                    <CheckCircle2 size={17} className="text-[#EF7E22] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-[14px] leading-relaxed">{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Eligibility */}
              <div className="bg-gray-50 rounded-3xl p-7 border border-gray-100">
                <h3 className="font-serif font-bold text-gray-900 text-xl mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Users size={16} className="text-[#EF7E22]" />
                  </span>
                  Eligibility Criteria
                </h3>
                <ul className="space-y-3">
                  {service.eligibility.map((e, i) => (
                    <li key={i} className="flex gap-3 text-gray-600 text-sm">
                      <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents */}
              <div className="bg-[#0a0a14] rounded-3xl p-7">
                <h3 className="font-serif font-bold text-white text-xl mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center">
                    <FileText size={16} className="text-[#EF7E22]" />
                  </span>
                  Documents Required
                </h3>
                <ul className="space-y-2.5">
                  {service.documents.map((d, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 text-sm">
                      <CheckCircle2 size={14} className="text-[#EF7E22] shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4-STEP PROCESS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4">How It Works</span>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Apply in 4 Easy Steps</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-orange-100 via-orange-400 to-orange-100" />
            {[
              { n: "01", t: "Apply Online", d: "Fill our simple application form." },
              { n: "02", t: "Submit Docs", d: "Upload minimal KYC & income documents." },
              { n: "03", t: "Quick Approval", d: "Decision within 24 hours." },
              { n: "04", t: "Get Funds", d: "Money in your account instantly." },
            ].map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#EF7E22] text-white font-serif font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-100">
                  {s.n}
                </div>
                <div className="font-bold text-gray-900 mb-1 text-sm">{s.t}</div>
                <div className="text-gray-500 text-xs">{s.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden bg-[#0a0a14]">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] ${service.gradientFrom} opacity-10 blur-[120px] rounded-full`} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className={`inline-flex items-center gap-2 ${service.bgColor} border border-current/10 rounded-full px-4 py-1.5 mb-6`}>
              <Sparkles size={11} className={service.color} />
              <span className={`${service.color} text-[10px] font-bold tracking-[0.2em] uppercase`}>Ready to Apply?</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Get Your {service.title}<br />Approved in 24 Hours
            </h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Minimal paperwork, transparent terms, and dedicated support — every step of the way.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold px-10 py-4 rounded-2xl shadow-xl shadow-orange-900/30 transition-colors text-sm">
                  Apply Now <ArrowRight size={15} />
                </motion.button>
              </Link>
              <Link href="/emi-calculator">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 border border-white/15 hover:border-white/30 text-white font-bold px-10 py-4 rounded-2xl transition-all text-sm bg-white/5">
                  Calculate EMI
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
