"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ChevronRight, ArrowRight, ShieldCheck, Clock, CheckCircle2,
  QrCode, Copy, Phone, Building2, Landmark, CreditCard, MapPin, Check
} from "lucide-react";
import Link from "next/link";
import { getTranslation } from "../../lib/translations";

const upiApps = [
  { name: "PhonePe", bg: "#5f259f", letter: "P" },
  { name: "GPay", bg: "#1a73e8", letter: "G" },
  { name: "Paytm", bg: "#002970", letter: "T" },
  { name: "BHIM", bg: "#007bff", letter: "B" },
  { name: "Amazon", bg: "#ff9900", letter: "A" },
  { name: "CRED", bg: "#1c1c1c", letter: "C" },
];

export default function EmiPaymentQr({ locale }: { locale: string }) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

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

  const steps = [
    { icon: <QrCode size={20} />, title: t.emiQrPage.steps[0].t, desc: t.emiQrPage.steps[0].d },
    { icon: <CheckCircle2 size={20} />, title: t.emiQrPage.steps[1].t, desc: t.emiQrPage.steps[1].d },
    { icon: <CreditCard size={20} />, title: t.emiQrPage.steps[2].t, desc: t.emiQrPage.steps[2].d },
    { icon: <ShieldCheck size={20} />, title: t.emiQrPage.steps[3].t, desc: t.emiQrPage.steps[3].d },
  ];

  const bankDetails = [
    { label: t.emiQrPage.bankDetails.name, value: isHi ? "यूनाइटेड फाइनेंस एंड लीजिंग प्राइवेट लिमिटेड" : "United Finance & Leasing Private Limited", icon: <Building2 size={14} /> },
    { label: t.emiQrPage.bankDetails.number, value: "0123456789012345", icon: <CreditCard size={14} />, copy: true },
    { label: t.emiQrPage.bankDetails.ifsc, value: "UTIB0000123", icon: <Landmark size={14} />, copy: true },
    { label: t.emiQrPage.bankDetails.bank, value: isHi ? "एक्सिस बैंक" : "Axis Bank", icon: <Building2 size={14} /> },
    { label: t.emiQrPage.bankDetails.type, value: t.emiQrPage.bankDetails.typeVal, icon: <CreditCard size={14} /> },
    { label: t.emiQrPage.bankDetails.branch, value: t.emiQrPage.bankDetails.branchVal, icon: <MapPin size={14} /> },
  ];

  function copyToClipboard(text: string, field: string) {
    navigator.clipboard?.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  }

  return (
    <main className="min-h-screen bg-white">

      {/* ══════════════════════════════════════════════
          CINEMATIC HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2000&q=80"
            alt="UPI Payment" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/90 via-[#0a0a14]/72 to-[#0a0a14]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14]/85 via-transparent to-[#0a0a14]/30" />
        </div>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EF7E22] to-transparent opacity-60" />

        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 lg:px-12 pt-36 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-1.5 text-xs text-white/40 font-medium mb-8">
                <Link href={getLocalizedHref("/")} className="hover:text-white/70 transition-colors">{t.common.home}</Link>
                <ChevronRight size={11} className="text-white/20" />
                <span className="text-[#EF7E22] font-semibold">{t.common.emiPaymentQr}</span>
              </motion.nav>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
                className="flex items-center gap-3 mb-7">
                <div className="w-8 h-[2px] bg-[#EF7E22]" />
                <span className="text-[#EF7E22] text-[11px] font-bold tracking-[0.3em] uppercase">{t.emiQrPage.badge}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif font-bold text-white leading-[1.0] mb-7"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
                {t.emiQrPage.title1}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7E22] to-[#f9a94b]">
                  {t.emiQrPage.title2}
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="text-slate-300/80 text-[17px] leading-relaxed max-w-xl mb-10">
                {t.emiQrPage.desc}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-5">
                <a href="upi://pay?pa=unitedfinance@upi&pn=United%20Finance%20%26%20Leasing">
                  <motion.button whileHover={{ scale: 1.04, x: 4 }} whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold px-7 py-3.5 rounded-2xl text-sm shadow-xl shadow-orange-900/40 transition-colors cursor-pointer">
                    {t.emiQrPage.payUpiBtn} <ArrowRight size={15} />
                  </motion.button>
                </a>
                <div className="w-px h-8 bg-white/15" />
                <Link href={getLocalizedHref("/emi-calculator")}>
                  <button className="text-white/60 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all cursor-pointer">
                    {t.common.calculateEmi} →
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right: Phone mockup with QR */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
              className="hidden lg:flex justify-center">
              {/* Phone frame */}
              <div className="relative w-56 bg-[#1a1a2e] rounded-[2.5rem] border-4 border-white/10 shadow-2xl shadow-black/50 overflow-hidden p-1">
                {/* Phone notch */}
                <div className="bg-black rounded-t-[2rem] pt-6 pb-4 px-4">
                  <div className="w-16 h-1 bg-white/20 rounded-full mx-auto mb-4" />
                  {/* UPI app header */}
                  <div className="bg-white rounded-2xl p-4">
                    <div className="text-[10px] text-gray-400 font-medium mb-1">Paying to</div>
                    <div className="font-bold text-gray-900 text-xs">United Finance & Leasing</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">unitedfinance@upi</div>
                    {/* QR code area */}
                    <div className="mt-3 border-2 border-gray-100 rounded-xl p-2 bg-white">
                      <div className="grid grid-cols-9 gap-[2px]">
                        {Array.from({ length: 81 }).map((_, i) => {
                          const qr = [
                            1,1,1,1,1,1,1,0,1,
                            1,0,0,0,0,0,1,0,1,
                            1,0,1,1,1,0,1,0,0,
                            1,0,1,0,1,0,1,0,1,
                            1,0,1,1,1,0,1,0,0,
                            1,0,0,0,0,0,1,0,1,
                            1,1,1,1,1,1,1,0,1,
                            0,0,0,0,0,0,0,0,0,
                            1,1,0,1,1,0,1,1,0,
                          ];
                          return (
                            <div key={i}
                              className={`aspect-square rounded-[1px] ${qr[i] ? "bg-[#1a1a2e]" : "bg-white"}`} />
                          );
                        })}
                      </div>
                      <div className="text-center mt-2 text-[8px] text-gray-400 font-medium">{t.emiQrPage.scanToPay}</div>
                    </div>
                    {/* UPI apps row */}
                    <div className="flex justify-between mt-3">
                      {upiApps.slice(0, 4).map((app) => (
                        <div key={app.name} className="flex flex-col items-center gap-1">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[9px] font-black"
                            style={{ background: app.bg }}>{app.letter}</div>
                          <span className="text-[7px] text-gray-400">{app.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Home bar */}
                <div className="bg-black rounded-b-[2rem] py-3 flex justify-center">
                  <div className="w-20 h-1 bg-white/30 rounded-full" />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute mt-8 -right-4 bg-[#EF7E22] rounded-2xl px-4 py-2 text-white shadow-xl">
                <div className="text-[9px] uppercase tracking-widest opacity-80 mb-0.5">UPI ID</div>
                <div className="font-bold text-sm">unitedfinance@upi</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Frosted stats bar */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="relative z-10 border-t border-white/8 backdrop-blur-2xl"
          style={{ background: "rgba(10,10,20,0.75)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
              {[
                { value: "24×7", label: t.emiQrPage.secStats.avail, sub: t.emiQrPage.secStats.availSub },
                { value: "₹0", label: t.emiQrPage.secStats.charge, sub: t.emiQrPage.secStats.chargeSub },
                { value: isHi ? "तुरंत" : "Instant", label: t.emiQrPage.secStats.confirm, sub: t.emiQrPage.secStats.confirmSub },
                { value: "UPI / NEFT", label: t.emiQrPage.secStats.modes, sub: t.emiQrPage.secStats.modesSub },
              ].map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="py-5 px-6 lg:px-8 group">
                  <div className="font-serif text-xl md:text-2xl font-bold text-[#EF7E22] mb-0.5 group-hover:scale-110 transition-transform origin-left">{s.value}</div>
                  <div className="text-white font-semibold text-sm">{s.label}</div>
                  <div className="text-white/35 text-xs mt-0.5">{s.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          QR + ACCOUNT DETAILS
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4">
              {t.emiQrPage.paymentDetails}
            </span>
            <h2 className="font-serif text-4xl font-bold text-gray-900">{t.emiQrPage.scanTitle}</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-[15px]">{t.emiQrPage.scanSub}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* QR Code Card */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center">
              <div className="inline-block bg-orange-50 text-orange-600 text-[10px] font-bold tracking-widest uppercase rounded-full px-3 py-1 mb-5">
                {t.emiQrPage.upiTitle}
              </div>

              {/* QR Code */}
              <div className="relative inline-block mb-5">
                <div className="w-52 h-52 mx-auto bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center p-4 shadow-sm">
                  <div className="w-full h-full relative">
                    <div className="grid grid-cols-11 gap-[2px] w-full h-full">
                      {Array.from({ length: 121 }).map((_, i) => {
                        const qr = [
                          1,1,1,1,1,1,1,0,0,1,0,
                          1,0,0,0,0,0,1,0,1,0,1,
                          1,0,1,1,1,0,1,0,0,1,0,
                          1,0,1,1,1,0,1,0,1,1,1,
                          1,0,1,1,1,0,1,0,0,0,1,
                          1,0,0,0,0,0,1,0,1,0,0,
                          1,1,1,1,1,1,1,0,1,0,1,
                          0,0,0,0,0,0,0,0,1,1,0,
                          1,1,0,1,1,0,1,0,0,1,1,
                          0,1,1,0,1,1,0,1,1,0,1,
                          1,0,0,1,0,1,1,0,1,1,0,
                        ];
                        return (
                          <div key={i}
                            className={`rounded-[1px] ${qr[i] ? "bg-[#0a0a14]" : "bg-white"}`}
                            style={{ aspectRatio: "1" }} />
                        );
                      })}
                    </div>
                    {/* Center logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-lg p-1.5 shadow-sm border border-gray-100">
                        <div className="w-9 h-9 bg-[#EF7E22] rounded-md flex items-center justify-center">
                          <span className="text-white font-black text-xs">UF</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="font-bold text-gray-900 text-base mb-1">{t.emiQrPage.scanToPay}</div>
              <div className="text-gray-400 text-sm mb-5">{t.emiQrPage.worksWith}</div>

              {/* UPI ID */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl px-5 py-3.5 flex items-center justify-between mb-6">
                <div className="text-left">
                  <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-0.5">UPI ID</div>
                  <div className="font-bold text-gray-900 text-sm font-mono">unitedfinance@upi</div>
                </div>
                <button onClick={() => copyToClipboard("unitedfinance@upi", "upi")}
                  className="flex items-center gap-1.5 text-[#EF7E22] hover:text-orange-600 font-bold text-xs transition-colors shrink-0 cursor-pointer">
                  {copiedField === "upi" ? <><Check size={13} /> {t.emiQrPage.copied}</> : <><Copy size={13} /> {t.emiQrPage.copy}</>}
                </button>
              </div>

              {/* App icons */}
              <div className="flex justify-center gap-3">
                {upiApps.map((app) => (
                  <div key={app.name} className="flex flex-col items-center gap-1.5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-black shadow-sm"
                      style={{ background: app.bg }}>{app.letter}</div>
                    <span className="text-[9px] text-gray-400 font-medium">{app.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bank Account Details Card */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <div className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase rounded-full px-3 py-1 mb-5">
                {t.emiQrPage.bankDetails.type}
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">{t.emiQrPage.transferTitle}</h3>

              <div className="space-y-3">
                {bankDetails.map((detail) => (
                  <div key={detail.label}
                    className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#EF7E22] shrink-0 mt-0.5">
                        {detail.icon}
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">{detail.label}</div>
                        <div className="font-bold text-gray-900 text-sm font-mono">{detail.value}</div>
                      </div>
                    </div>
                    {detail.copy && (
                      <button onClick={() => copyToClipboard(detail.value, detail.label)}
                        className="flex items-center gap-1 text-[#EF7E22] hover:text-orange-600 font-bold text-xs transition-colors shrink-0 ml-2 cursor-pointer">
                        {copiedField === detail.label ? <><Check size={12} /> {t.emiQrPage.done}</> : <><Copy size={12} /> {t.emiQrPage.copy}</>}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Warning */}
              <div className="mt-5 bg-amber-50 border border-amber-100 rounded-2xl p-4">
                <div className="font-bold text-amber-800 text-sm mb-1 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-amber-600" /> {t.emiQrPage.warningTitle}
                </div>
                <p className="text-amber-700 text-xs leading-relaxed">
                  {t.emiQrPage.warningDesc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HOW TO PAY — 4 STEES
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4">
              {t.emiQrPage.stepTitle}
            </span>
            <h2 className="font-serif text-4xl font-bold text-gray-900">{t.emiQrPage.stepHeading}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-orange-100 transition-all text-center">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#EF7E22] mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="w-6 h-6 rounded-full bg-[#EF7E22] text-white text-xs font-black flex items-center justify-center mx-auto mb-3">
                  {i + 1}
                </div>
                <div className="font-bold text-gray-900 text-sm mb-2">{step.title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT CARDS
      ══════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Phone size={20} />, title: t.common.callUs, info: t.common.phone, sub: "+91 9151030011", color: "bg-blue-50 text-blue-500 border-blue-100" },
              { icon: <Clock size={20} />, title: t.common.helpdesk, info: "helpdesk@unitedfin.in", sub: isHi ? "24 घंटे के भीतर उत्तर" : "Reply within 24 hours", color: "bg-orange-50 text-orange-500 border-orange-100" },
              { icon: <ShieldCheck size={20} />, title: t.common.grievance, info: "aniket@unitedfin.in", sub: "+91 9151766673", color: "bg-emerald-50 text-emerald-500 border-emerald-100" },
            ].map((item) => (
              <motion.div key={item.title} whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${item.color}`}>{item.icon}</div>
                <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                <div className="text-[#EF7E22] font-semibold text-sm">{item.info}</div>
                <div className="text-gray-400 text-xs mt-0.5">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a14] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EF7E22]/50 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">{t.emiQrPage.needHelp}</h2>
          <p className="text-slate-400 mb-8">{t.emiQrPage.needHelpSub}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={getLocalizedHref("/contact")}>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold px-10 py-4 rounded-2xl shadow-xl transition-colors text-sm cursor-pointer">
                {t.common.contactUs} <ArrowRight size={15} />
              </motion.button>
            </Link>
            <Link href={getLocalizedHref("/emi-calculator")}>
              <button className="flex items-center gap-2 border border-white/15 text-white font-bold px-10 py-4 rounded-2xl text-sm bg-white/5 hover:border-white/30 transition-all cursor-pointer">
                {t.common.calculateEmi}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
