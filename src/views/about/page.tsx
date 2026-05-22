"use client";

import { motion } from "motion/react";
import { Target, Eye, ShieldCheck, TrendingUp, Award, Users, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getTranslation } from "../../lib/translations";

export default function AboutCompany({ locale }: { locale: string }) {
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

  const stats = [
    { value: t.home.stats.disbursed, label: t.home.stats.disbursedLbl },
    { value: t.home.stats.customers, label: t.home.stats.customersLbl },
    { value: t.home.stats.trusted, label: t.home.stats.trustedLbl },
    { value: t.home.stats.speed, label: t.home.stats.speedLbl },
  ];

  const milestones = [
    { year: "2014", title: t.aboutPage.milestones[0].title, desc: t.aboutPage.milestones[0].desc },
    { year: "2016", title: t.aboutPage.milestones[1].title, desc: t.aboutPage.milestones[1].desc },
    { year: "2019", title: t.aboutPage.milestones[2].title, desc: t.aboutPage.milestones[2].desc },
    { year: "2022", title: t.aboutPage.milestones[3].title, desc: t.aboutPage.milestones[3].desc },
    { year: "2024", title: t.aboutPage.milestones[4].title, desc: t.aboutPage.milestones[4].desc },
  ];

  const values = [
    { icon: <ShieldCheck size={20} />, title: t.aboutPage.valueList[0].title, desc: t.aboutPage.valueList[0].desc },
    { icon: <Users size={20} />, title: t.aboutPage.valueList[1].title, desc: t.aboutPage.valueList[1].desc },
    { icon: <TrendingUp size={20} />, title: t.aboutPage.valueList[2].title, desc: t.aboutPage.valueList[2].desc },
    { icon: <Award size={20} />, title: t.aboutPage.valueList[3].title, desc: t.aboutPage.valueList[3].desc },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* ══════════════════════════════════════════════
          CINEMATIC FULL-WIDTH HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        {/* Full-bleed background */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=2000&q=80"
            alt="United Finance Team" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/85 via-[#0a0a14]/65 to-[#0a0a14]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14]/80 via-transparent to-[#0a0a14]/20" />
        </div>

        {/* Dot texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        {/* Orange top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EF7E22] to-transparent opacity-60" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 lg:px-12 pt-36 pb-36">
          <div className="max-w-3xl">

            {/* Breadcrumb */}
            <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1.5 text-xs text-white/40 font-medium mb-8">
              <Link href={getLocalizedHref("/")} className="hover:text-white/70 transition-colors">{t.common.home}</Link>
              <ChevronRight size={11} className="text-white/20" />
              <span className="text-[#EF7E22] font-semibold">{t.common.aboutCompany}</span>
            </motion.nav>

            {/* Category tag */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[2px] bg-[#EF7E22]" />
              <span className="text-[#EF7E22] text-[11px] font-bold tracking-[0.3em] uppercase">
                {t.home.hero.badge}
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
              {t.aboutPage.title1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7E22] to-[#f9a94b]">
                {t.aboutPage.title2}
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-slate-300/80 text-[17px] leading-relaxed max-w-2xl mb-10">
              {t.aboutPage.desc}
            </motion.p>

            {/* CTA row */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-5">
              <Link href={getLocalizedHref("/contact")}>
                <motion.button whileHover={{ scale: 1.04, x: 4 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold px-7 py-3.5 rounded-2xl text-sm shadow-xl shadow-orange-900/40 transition-colors cursor-pointer">
                  {t.common.applyNow} <ArrowRight size={15} />
                </motion.button>
              </Link>

              <div className="w-px h-8 bg-white/15" />

              <Link href={getLocalizedHref("/about/directors")}>
                <button className="text-white/60 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all cursor-pointer">
                  {t.common.directors} →
                </button>
              </Link>

              <Link href={getLocalizedHref("/about/csr")}>
                <button className="text-white/60 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all cursor-pointer">
                  {t.common.csr} →
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Frosted glass stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="relative z-10 border-t border-white/8 backdrop-blur-2xl"
          style={{ background: "rgba(10,10,20,0.75)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
              {stats.map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="py-6 px-6 lg:px-8 group">
                  <div className="font-serif text-2xl md:text-3xl font-bold text-[#EF7E22] mb-0.5 group-hover:scale-110 transition-transform origin-left">
                    {s.value}
                  </div>
                  <div className="text-white font-semibold text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Our Story ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5">
                {t.aboutPage.ourStory}
              </span>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">{t.aboutPage.storyTitle}</h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
                {t.aboutPage.storyDesc1}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                {t.aboutPage.storyDesc2}
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: <Target size={18} />, title: t.aboutPage.mission, desc: t.aboutPage.missionDesc },
                  { icon: <Eye size={18} />, title: t.aboutPage.vision, desc: t.aboutPage.visionDesc },
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
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4">
              {t.aboutPage.journey}
            </span>
            <h2 className="font-serif text-4xl font-bold text-gray-900">{t.aboutPage.journeyTitle}</h2>
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
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4">
              {t.aboutPage.valuesSub}
            </span>
            <h2 className="font-serif text-4xl font-bold text-gray-900">{t.aboutPage.values}</h2>
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
          <h2 className="font-serif text-4xl font-bold text-white mb-4">{t.aboutPage.partnerTitle}</h2>
          <p className="text-orange-100 mb-8 leading-relaxed">{t.aboutPage.partnerSub}</p>
          <Link href={getLocalizedHref("/services")}>
            <button className="bg-white text-[#EF7E22] font-bold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all text-sm inline-flex items-center gap-2 cursor-pointer">
              {t.aboutPage.exploreBtn} <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
