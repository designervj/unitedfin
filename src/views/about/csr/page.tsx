"use client";

import { motion } from "motion/react";
import { ArrowRight, Heart, Leaf, Users, BookOpen, HandshakeIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getTranslation } from "../../../lib/translations";

export default function CsrAndPolicies({ locale }: { locale: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

  const getLocalizedHref = (href: string) => {
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return href;
    }
    const cleanHref = href.startsWith("/") ? href : `/${href}`;
    if (cleanHref === "/") {
      return `/${locale}`;
    }
    return `/${locale}${cleanHref}`;
  };

  const csrAreas = [
    { icon: <BookOpen size={22} />, title: t.csrPage.csrAreas[0].title, desc: t.csrPage.csrAreas[0].desc, color: "text-blue-500 bg-blue-50" },
    { icon: <Heart size={22} />, title: t.csrPage.csrAreas[1].title, desc: t.csrPage.csrAreas[1].desc, color: "text-rose-500 bg-rose-50" },
    { icon: <Leaf size={22} />, title: t.csrPage.csrAreas[2].title, desc: t.csrPage.csrAreas[2].desc, color: "text-emerald-500 bg-emerald-50" },
    { icon: <Users size={22} />, title: t.csrPage.csrAreas[3].title, desc: t.csrPage.csrAreas[3].desc, color: "text-purple-500 bg-purple-50" },
    { icon: <HandshakeIcon size={22} />, title: t.csrPage.csrAreas[4].title, desc: t.csrPage.csrAreas[4].desc, color: "text-amber-500 bg-amber-50" },
    { icon: <Users size={22} />, title: t.csrPage.csrAreas[5].title, desc: t.csrPage.csrAreas[5].desc, color: "text-orange-500 bg-orange-50" },
  ];

  const policies = [
    { title: t.csrPage.policies[0].title, desc: t.csrPage.policies[0].desc },
    { title: t.csrPage.policies[1].title, desc: t.csrPage.policies[1].desc },
    { title: t.csrPage.policies[2].title, desc: t.csrPage.policies[2].desc },
    { title: t.csrPage.policies[3].title, desc: t.csrPage.policies[3].desc },
    { title: t.csrPage.policies[4].title, desc: t.csrPage.policies[4].desc },
    { title: t.csrPage.policies[5].title, desc: t.csrPage.policies[5].desc },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* ── CINEMATIC FULL-WIDTH HERO ── */}
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
              <Link href={getLocalizedHref("/")} className="hover:text-white/70 transition-colors">{t.common.home}</Link>
              <ChevronRight size={11} className="text-white/20" />
              <Link href={getLocalizedHref("/about")} className="hover:text-white/70 transition-colors">{t.common.aboutCompany}</Link>
              <ChevronRight size={11} className="text-white/20" />
              <span className="text-[#EF7E22] font-semibold">{t.common.csr}</span>
            </motion.nav>

            {/* Category tag */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[2px] bg-[#EF7E22]" />
              <span className="text-[#EF7E22] text-[11px] font-bold tracking-[0.3em] uppercase">
                {t.csrPage.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-bold text-white leading-[1.0] mb-7"
              style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
            >
              {t.csrPage.title1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7E22] to-[#f9a94b]">
                {t.csrPage.title2}
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-slate-300/80 text-[17px] leading-relaxed max-w-2xl mb-10">
              {t.csrPage.desc}
            </motion.p>

            {/* CTA row */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-5">
              <Link href={getLocalizedHref("/contact")}>
                <motion.button whileHover={{ scale: 1.04, x: 4 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold px-7 py-3.5 rounded-2xl text-sm shadow-xl shadow-orange-900/40 transition-colors cursor-pointer">
                  {t.csrPage.partnerBtn} <ArrowRight size={15} />
                </motion.button>
              </Link>

              <div className="w-px h-8 bg-white/15" />

              <Link href={getLocalizedHref("/about")}>
                <button className="text-white/60 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all cursor-pointer">
                  {t.common.aboutCompany} →
                </button>
              </Link>

              <Link href={getLocalizedHref("/about/directors")}>
                <button className="text-white/60 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all cursor-pointer">
                  {t.common.directors} →
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
                { value: "6", label: isHi ? "सीएसआर कार्यक्रम" : "CSR Programs", sub: isHi ? "सक्रिय सामाजिक पहल" : "Active initiatives" },
                { value: "1,000+", label: isHi ? "प्रभावित परिवार" : "Lives Impacted", sub: isHi ? "केवल 2024 में" : "In 2024 alone" },
                { value: "6", label: isHi ? "नीतिगत क्षेत्र" : "Policy Areas", sub: isHi ? "आरबीआई अनुपालन" : "RBI compliant" },
                { value: "2018", label: isHi ? "सीएसआर प्रारंभ" : "CSR Since", sub: isHi ? "समुदाय पहले" : "Community first" },
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
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4">
              {isHi ? "हमारा सामाजिक प्रभाव" : "Our Impact"}
            </span>
            <h2 className="font-serif text-4xl font-bold text-gray-900">{t.csrPage.csrTitle}</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-[15px]">{t.csrPage.csrSub}</p>
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
              <div className="text-4xl font-serif font-bold text-white mb-2">1,000+ {isHi ? "से अधिक परिवार लाभान्वित" : "Lives Impacted"}</div>
              <div className="text-orange-400 font-semibold">{isHi ? "हमारे सीएसआर कार्यक्रमों के माध्यम से वर्ष 2024 में" : "Through our CSR programs in 2024"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Policies ─────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4">
              {isHi ? "अनुपालन एवं नियम" : "Compliance"}
            </span>
            <h2 className="font-serif text-4xl font-bold text-gray-900">{t.csrPage.policyTitle}</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-[15px]">{t.csrPage.policySub}</p>
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
            {t.csrPage.policyContact} <span className="font-semibold">compliance@unitedfin.in</span>
          </div>
        </div>
      </section>

      {/* ── CSR CTA ── */}
      <section className="py-20 bg-[#EF7E22]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">{t.csrPage.responsibleTitle}</h2>
          <p className="text-orange-100 mb-8">{t.csrPage.responsibleSub}</p>
          <Link href={getLocalizedHref("/contact")}>
            <button className="bg-white text-[#EF7E22] font-bold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all text-sm inline-flex items-center gap-2 cursor-pointer">
              {isHi ? "संपर्क करें" : "Get in Touch"} <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
