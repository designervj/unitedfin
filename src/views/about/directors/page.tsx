"use client";

import { motion } from "motion/react";
import { ArrowRight, Mail, ChevronRight, Users, ShieldCheck, Award, Briefcase } from "lucide-react";
import Link from "next/link";

const board = [
  {
    name: "Sh. Rajiv Kumar Gupta",
    role: "Chairman & Managing Director",
    img: "https://i.pravatar.cc/400?img=51",
    bio: "An accomplished financial executive with over 25 years of experience in NBFCs and banking. He has been the driving force behind United Finance's growth and regulatory compliance.",
    linkedin: "#",
    email: "chairman@unitedfin.in",
  },
  {
    name: "Smt. Priya Gupta",
    role: "Director — Operations",
    img: "https://i.pravatar.cc/400?img=47",
    bio: "With expertise in operations management and process optimization, she oversees branch operations, collections, and customer servicing across all locations.",
    linkedin: "#",
    email: "ops@unitedfin.in",
  },
  {
    name: "Sh. Ankit Verma",
    role: "Director — Finance & Accounts",
    img: "https://i.pravatar.cc/400?img=52",
    bio: "A Chartered Accountant with deep expertise in financial planning, risk management, and regulatory reporting. He ensures the company's financial health and compliance.",
    linkedin: "#",
    email: "finance@unitedfin.in",
  },
  {
    name: "Sh. Deepak Misra",
    role: "Independent Director",
    img: "https://i.pravatar.cc/400?img=57",
    bio: "A seasoned legal and governance professional who serves as an independent director, ensuring highest standards of corporate governance and ethical business practices.",
    linkedin: "#",
    email: "board@unitedfin.in",
  },
];

const committees = [
  { name: "Audit Committee", desc: "Oversees financial reporting, internal controls, and compliance." },
  { name: "Risk Management Committee", desc: "Monitors credit risk, market risk, and operational risk." },
  { name: "Nomination & Remuneration Committee", desc: "Reviews board composition and executive compensation." },
  { name: "Customer Service Committee", desc: "Ensures customer-centric policies and grievance redressal." },
];

export default function BoardOfDirectors({ locale }: { locale: string }) {
  return (
    <main className="min-h-screen bg-white">

      {/* ══════════════════════════════════════════════
          CINEMATIC FULL-WIDTH HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        {/* ── Full-bleed background image ── */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=2000&q=80"
            alt="Leadership" className="w-full h-full object-cover object-center"
          />
          {/* Layered gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/80 via-[#0a0a14]/60 to-[#0a0a14]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14]/70 via-transparent to-[#0a0a14]/30" />
        </div>

        {/* ── Dot grid texture ── */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        {/* ── Orange diagonal accent line ── */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EF7E22] to-transparent opacity-60" />

        {/* ── Content ── */}
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 lg:px-12 pt-36 pb-36">
          <div className="max-w-3xl">

            {/* Breadcrumb */}
            <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1.5 text-xs text-white/40 font-medium mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <ChevronRight size={11} className="text-white/20" />
              <Link href="/about" className="hover:text-white/70 transition-colors">About Us</Link>
              <ChevronRight size={11} className="text-white/20" />
              <span className="text-[#EF7E22] font-semibold">Board of Directors</span>
            </motion.nav>

            {/* Category tag */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[2px] bg-[#EF7E22]" />
              <span className="text-[#EF7E22] text-[11px] font-bold tracking-[0.3em] uppercase">Leadership & Governance</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-bold text-white leading-[1.0] mb-7"
              style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
            >
              Trusted<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7E22] to-[#f9a94b]">
                Leadership.
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-slate-300/80 text-[17px] leading-relaxed max-w-xl mb-10">
              Seasoned professionals with decades of expertise in finance, law, and operations — steering United Finance toward sustainable, ethical growth.
            </motion.p>

            {/* Director avatars + CTA row */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6">
              {/* Avatar stack */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {board.slice(0, 4).map((m, i) => (
                    <div key={m.name}
                      className="w-10 h-10 rounded-full border-2 border-[#0a0a14] overflow-hidden ring-1 ring-white/20"
                      style={{ zIndex: 4 - i }}>
                      <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{board.length} Directors</div>
                  <div className="text-white/45 text-xs">on the board</div>
                </div>
              </div>

              <div className="w-px h-8 bg-white/15" />

              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04, x: 4 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold px-7 py-3.5 rounded-2xl text-sm shadow-xl shadow-orange-900/40 transition-colors">
                  Contact Leadership <ArrowRight size={15} />
                </motion.button>
              </Link>

              <Link href="/about">
                <button className="text-white/60 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all">
                  Our Company →
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── Frosted glass stats bar at bottom ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="relative z-10 border-t border-white/8 backdrop-blur-2xl"
          style={{ background: "rgba(10,10,20,0.7)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
              {[
                { value: "4", label: "Board Directors", sub: "Active members" },
                { value: "60+", label: "Combined Exp.", sub: "Years in finance" },
                { value: "4", label: "Committees", sub: "Governance bodies" },
                { value: "2014", label: "Established", sub: "RBI registered NBFC" },
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

      {/* ── Board Members ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {board.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex gap-6 p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-orange-100 transition-all"
              >
                {/* Avatar */}
                <div className="relative shrink-0">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#EF7E22] border-2 border-white flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">{i + 1}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif font-bold text-gray-900 text-lg mb-0.5">{member.name}</h3>
                  <div className="text-[#EF7E22] text-xs font-bold uppercase tracking-widest mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex items-center gap-3">
                    <a href={`mailto:${member.email}`}
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-orange-500 transition-colors font-medium">
                      <Mail size={12} /> {member.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Governance structure ─────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4">Governance</span>
            <h2 className="font-serif text-4xl font-bold text-gray-900">Board Committees</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-[15px]">
              Specialized committees ensure focused oversight of all critical business functions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {committees.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-orange-100 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 shrink-0 font-serif font-bold text-lg">
                  {i + 1}
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">{c.name}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{c.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1a0a2e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-slate-400 mb-8">Interested in joining our leadership team or learning more about us?</p>
          <Link href="/contact">
            <button className="bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold px-10 py-4 rounded-2xl shadow-xl transition-colors text-sm inline-flex items-center gap-2">
              Contact Us <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
