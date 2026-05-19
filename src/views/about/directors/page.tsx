"use client";

import { motion } from "motion/react";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
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
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">Leadership</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl font-bold text-white mb-5">
            Board of Directors
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our board brings together decades of expertise in finance, operations, and governance — steering United Finance towards sustainable growth.
          </motion.p>
        </div>
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
