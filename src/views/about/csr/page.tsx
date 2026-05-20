"use client";

import { motion } from "motion/react";
import { ArrowRight, Heart, Leaf, Users, BookOpen, HandshakeIcon, ChevronRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const csrAreas = [
  { icon: <BookOpen size={22} />, title: "Education", desc: "Supporting underprivileged children with school scholarships, stationery, and digital learning resources in rural UP.", color: "text-blue-500 bg-blue-50" },
  { icon: <Heart size={22} />, title: "Healthcare", desc: "Organizing free medical camps, health check-ups, and awareness drives in partnership with local hospitals.", color: "text-rose-500 bg-rose-50" },
  { icon: <Leaf size={22} />, title: "Environment", desc: "Tree plantation drives, clean-up campaigns, and promoting green lending practices to protect our planet.", color: "text-emerald-500 bg-emerald-50" },
  { icon: <Users size={22} />, title: "Women Empowerment", desc: "Financial literacy programs for women, SHG group lending, and training workshops across villages.", color: "text-purple-500 bg-purple-50" },
  { icon: <HandshakeIcon size={22} />, title: "Rural Development", desc: "Providing micro-enterprise loans to artisans, weavers, and farmers for sustainable rural income generation.", color: "text-amber-500 bg-amber-50" },
  { icon: <Users size={22} />, title: "Financial Inclusion", desc: "Taking formal credit to the unbanked through doorstep banking, digital onboarding, and multilingual support.", color: "text-orange-500 bg-orange-50" },
];

const policies = [
  { title: "Fair Practice Code", desc: "Transparent communication, no hidden charges, and ethical collection practices." },
  { title: "KYC/AML Policy", desc: "Strict adherence to Know Your Customer and Anti-Money Laundering guidelines." },
  { title: "Grievance Redressal", desc: "A dedicated Principal Nodal Officer handles all customer complaints within 30 days." },
  { title: "Data Privacy Policy", desc: "Customer data is secured with industry-standard encryption and never shared without consent." },
  { title: "Interest Rate Policy", desc: "Rates are disclosed upfront, linked to credit score, and reviewed quarterly." },
  { title: "Outsourcing Policy", desc: "All vendor relationships are governed by RBI's outsourcing guidelines for NBFCs." },
];

export default function CsrAndPolicies({ locale }: { locale: string }) {
  return (
    <main className="min-h-screen bg-white">

      {/* ══════════════════════════════════════════════
          CINEMATIC FULL-WIDTH HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        {/* Full-bleed background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2000&q=80"
            alt="CSR Community" className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/85 via-[#0a0a14]/65 to-[#0a0a14]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14]/80 via-transparent to-[#0a0a14]/20" />
        </div>

        {/* Dot texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        {/* Orange top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EF7E22] to-transparent opacity-60" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 lg:px-12 pt-36 pb-36">
          <div className="max-w-3xl">

            {/* Breadcrumb */}
            <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1.5 text-xs text-white/40 font-medium mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <ChevronRight size={11} className="text-white/20" />
              <Link href="/about" className="hover:text-white/70 transition-colors">About Us</Link>
              <ChevronRight size={11} className="text-white/20" />
              <span className="text-[#EF7E22] font-semibold">CSR & Policies</span>
            </motion.nav>

            {/* Category tag */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[2px] bg-[#EF7E22]" />
              <span className="text-[#EF7E22] text-[11px] font-bold tracking-[0.3em] uppercase">Social Responsibility · Ethical Finance</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-bold text-white leading-[1.0] mb-7"
              style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
            >
              Giving Back to<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7E22] to-[#f9a94b]">
                Our Community.
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-slate-300/80 text-[17px] leading-relaxed max-w-2xl mb-10">
              We believe business growth and social responsibility go hand-in-hand. Our CSR efforts focus on education, healthcare, and financial inclusion across Uttar Pradesh.
            </motion.p>

            {/* CTA row */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-5">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04, x: 4 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold px-7 py-3.5 rounded-2xl text-sm shadow-xl shadow-orange-900/40 transition-colors">
                  Partner With Us <ArrowRight size={15} />
                </motion.button>
              </Link>

              <div className="w-px h-8 bg-white/15" />

              <Link href="/about">
                <button className="text-white/60 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all">
                  Our Company →
                </button>
              </Link>

              <Link href="/about/directors">
                <button className="text-white/60 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all">
                  Leadership →
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Frosted glass stats bar at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="relative z-10 border-t border-white/8 backdrop-blur-2xl"
          style={{ background: "rgba(10,10,20,0.75)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
              {[
                { value: "6", label: "CSR Programs", sub: "Active initiatives" },
                { value: "1,000+", label: "Lives Impacted", sub: "In 2024 alone" },
                { value: "6", label: "Policy Areas", sub: "RBI compliant" },
                { value: "2018", label: "CSR Since", sub: "Community first" },
              ].map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="py-6 px-6 lg:px-8 group">
                  <div className="font-serif text-2xl md:text-3xl font-bold text-[#EF7E22] mb-0.5 group-hover:scale-110 transition-transform origin-left">
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

      {/* ── CSR Areas ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4">Our Impact</span>
            <h2 className="font-serif text-4xl font-bold text-gray-900">CSR Initiatives</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-[15px]">We allocate a dedicated percentage of profits every year to community welfare and social development programs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {csrAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 group transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${area.color} flex items-center justify-center mb-5`}>
                  {area.icon}
                </div>
                <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{area.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image Banner ─────────────────────────── */}
      <section className="py-0">
        <div className="relative h-72 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80"
            alt="Community" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/60 to-transparent" />
          <div className="absolute inset-0 flex items-center px-12 md:px-24">
            <div>
              <div className="text-4xl font-serif font-bold text-white mb-2">1,000+ Lives Impacted</div>
              <div className="text-orange-400 font-semibold">Through our CSR programs in 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Policies ─────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4">Compliance</span>
            <h2 className="font-serif text-4xl font-bold text-gray-900">Our Policies</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-[15px]">We operate with full transparency and regulatory compliance as mandated by the Reserve Bank of India.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {policies.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-orange-100 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 font-serif font-bold text-sm shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{p.title}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 p-5 bg-blue-50 border border-blue-100 rounded-2xl text-sm text-blue-700 text-center">
            All policies are available for download upon request. Write to us at <span className="font-semibold">compliance@unitedfin.in</span>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────── */}
      <section className="py-20 bg-[#EF7E22]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Committed to Responsible Finance</h2>
          <p className="text-orange-100 mb-8">Learn more about how we're building a better financial future for all.</p>
          <Link href="/contact">
            <button className="bg-white text-[#EF7E22] font-bold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all text-sm inline-flex items-center gap-2">
              Get in Touch <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
