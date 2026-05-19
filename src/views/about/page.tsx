"use client";

import { motion } from "motion/react";
import { Building2, Target, Eye, ShieldCheck, CheckCircle2, TrendingUp, Award, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "₹500Cr+", label: "Loans Disbursed" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "10+", label: "Years of Trust" },
  { value: "24hr", label: "Loan Approval" },
];

const milestones = [
  { year: "2014", title: "Foundation", desc: "United Finance & Leasing Pvt. Ltd. was incorporated as an RBI-registered NBFC in New Delhi." },
  { year: "2016", title: "First Branch", desc: "Expanded operations into Uttar Pradesh, opening our first branch in Lucknow." },
  { year: "2019", title: "₹100 Cr Milestone", desc: "Crossed ₹100 Crore in total loan disbursements, serving thousands of families." },
  { year: "2022", title: "Digital Transformation", desc: "Launched digital onboarding and loan processing for faster customer experience." },
  { year: "2024", title: "₹500 Cr & Beyond", desc: "Crossed ₹500 Crore in cumulative disbursements with 10,000+ satisfied customers." },
];

const values = [
  { icon: <ShieldCheck size={20} />, title: "Integrity", desc: "We operate with complete transparency — no hidden fees, no surprises." },
  { icon: <Users size={20} />, title: "Customer First", desc: "Every decision we make starts and ends with what's best for our customers." },
  { icon: <TrendingUp size={20} />, title: "Growth", desc: "We believe in growing together — when you succeed, we succeed." },
  { icon: <Award size={20} />, title: "Excellence", desc: "We pursue the highest standards in service delivery and compliance." },
];

export default function AboutCompany({ locale }: { locale: string }) {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────── */}
      <section className="relative bg-[#0f172a] overflow-hidden pt-36 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-[#EF7E22]/8 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00A2D9]/6 blur-[100px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <Building2 size={13} className="text-orange-400" />
                <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">About Our Company</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                A Decade of
                <br /><span className="text-[#EF7E22]">Financial Trust</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                className="text-slate-400 text-lg leading-relaxed">
                United Finance & Leasing Private Limited is an RBI-registered NBFC committed to bridging the credit gap and fostering economic growth across Uttar Pradesh.
              </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={s.label} className="bg-white/5 border border-white/8 rounded-2xl p-5 text-center">
                  <div className="font-serif text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Story ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5">Our Story</span>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Built on a Simple Promise</h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
                United Finance & Leasing Private Limited was founded in 2014 with a clear purpose — to make credit accessible to those who need it most. We began in New Delhi and quickly expanded operations into Uttar Pradesh, where we identified a significant underserved lending market.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                Today, we serve thousands of individuals, micro-entrepreneurs, and small businesses with a wide range of loan products — from micro loans as small as ₹5,000 to mortgage loans exceeding ₹50 lakhs. Every product is designed with the customer's genuine need in mind.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: <Target size={18} />, title: "Our Mission", desc: "To empower individuals and MSMEs with quick, affordable financial solutions, driving holistic economic development." },
                  { icon: <Eye size={18} />, title: "Our Vision", desc: "To become the most trusted and preferred financial partner for underserved segments across India." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 shrink-0">{item.icon}</div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                      <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative">
              <div className="absolute -top-3 -right-3 w-full h-full bg-orange-100 rounded-3xl" />
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32f7?auto=format&fit=crop&w=900&q=80"
                alt="Our Story" className="relative rounded-3xl w-full h-[500px] object-cover shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4">Our Journey</span>
            <h2 className="font-serif text-4xl font-bold text-gray-900">Milestones That Define Us</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-orange-400 via-orange-200 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#EF7E22] text-white font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-lg shadow-orange-200 z-10">
                    {m.year}
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex-1 hover:border-orange-100 transition-colors">
                    <div className="font-bold text-gray-900 mb-1">{m.title}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{m.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4">What We Stand For</span>
            <h2 className="font-serif text-4xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-orange-100 hover:shadow-lg group transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 group-hover:bg-orange-500 flex items-center justify-center text-orange-500 group-hover:text-white mb-4 transition-all">
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────── */}
      <section className="py-20 bg-[#EF7E22]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-orange-100 mb-8 leading-relaxed">Join thousands of satisfied customers who trust United Finance for their financial needs.</p>
          <Link href="/services">
            <button className="bg-white text-[#EF7E22] font-bold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all text-sm inline-flex items-center gap-2">
              Explore Our Loans <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
