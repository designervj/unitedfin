"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Phone, Mail, MapPin, ExternalLink, Send,
  User, MessageSquare, CheckCircle2, Building2, ShieldCheck
} from "lucide-react";
import { getTranslation } from "../../lib/translations";

export default function Contact({ locale }: { locale: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <main className="min-h-screen bg-white">

      {/* ══════════════════════════════════════════════
          CINEMATIC HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-[62vh] flex flex-col overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80"
            alt="Contact United Finance"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/90 via-[#0a0a14]/70 to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B1040]/60 via-transparent to-transparent" />
        </div>

        {/* Dot grid texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        {/* Orange top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EF7E22] to-transparent opacity-70" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 lg:px-12 pt-36 pb-20">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1.5 text-xs text-white/40 font-medium mb-8">
              <a href={isHi ? "/hi" : "/en"} className="hover:text-white/70 transition-colors">{isHi ? "मुख्य" : "Home"}</a>
              <span className="text-white/20">/</span>
              <span className="text-[#EF7E22] font-semibold">{isHi ? "संपर्क करें" : "Contact Us"}</span>
            </motion.nav>

            {/* Orange tag */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#EF7E22]" />
              <span className="text-[#EF7E22] text-[11px] font-bold tracking-[0.3em] uppercase">
                {isHi ? "हमसे बात करें" : "Get In Touch"}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-bold text-white leading-[1.1] mb-5 text-4xl md:text-6xl"
            >
              {isHi ? "हमसे संपर्क" : "We're Here"}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7E22] to-[#f9a94b]">
                {isHi ? "करें" : "To Help You"}
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-slate-300/80 text-sm md:text-base leading-relaxed max-w-xl">
              {isHi
                ? "हमारे ऋण, ईएमआई भुगतान या शाखाओं के बारे में प्रश्न हैं? संदेश भेजें, हमें कॉल करें या हमारे कार्यालय में आएं।"
                : "Have questions about our loans, EMI payments, or branches? Drop a message, call us, or visit our office."}
            </motion.p>

            {/* Quick stats row */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 mt-10">
              {[
                { label: isHi ? "24 घंटे में जवाब" : "Response in 24hrs" },
                { label: isHi ? "सोम–शनि · 10AM–5PM" : "Mon–Sat · 10AM–5PM" },
                { label: isHi ? "आरबीआई पंजीकृत" : "RBI Registered NBFC" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EF7E22]" />
                  <span className="text-white/60 text-xs font-medium">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MAIN CONTENT — Form + Info
      ══════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-28 -mt-10 relative z-20">

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── LEFT: Contact form (3 cols) ─────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/80 border border-gray-100 overflow-hidden">
              {/* Card header */}
              <div className="bg-gradient-to-r from-[#3B1040] to-[#5a1a65] px-8 py-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EF7E22]/20 border border-[#EF7E22]/30 flex items-center justify-center">
                  <MessageSquare size={18} className="text-[#EF7E22]" />
                </div>
                <div>
                  <h2 className="font-bold text-white text-lg">{isHi ? "संदेश भेजें" : "Send A Message"}</h2>
                  <p className="text-purple-200/70 text-xs mt-0.5">
                    {isHi ? "हमारे प्रबंधक 2 घंटे में कॉल करेंगे" : "Our manager will call you within 2 hours"}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-16 flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-5">
                        <CheckCircle2 size={30} className="text-green-500" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">
                        {isHi ? "संदेश भेजा गया! 🎉" : "Message Sent! 🎉"}
                      </h3>
                      <p className="text-gray-500 text-sm max-w-xs">
                        {isHi ? "हमारी टीम जल्द ही आपसे संपर्क करेगी।" : "Our team will get back to you shortly."}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="relative group">
                          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                            {isHi ? "पूरा नाम" : "Full Name"} <span className="text-[#EF7E22]">*</span>
                          </label>
                          <div className="relative">
                            <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#EF7E22] transition-colors" />
                            <input
                              id="contact-name"
                              type="text"
                              required
                              placeholder={isHi ? "आपका पूरा नाम" : "Your full name"}
                              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-[#EF7E22] focus:bg-white focus:shadow-[0_0_0_3px_rgba(239,126,34,0.08)] transition-all"
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="relative group">
                          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                            {isHi ? "फोन नंबर" : "Phone"} <span className="text-[#EF7E22]">*</span>
                          </label>
                          <div className="relative">
                            <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#EF7E22] transition-colors" />
                            <input
                              id="contact-phone"
                              type="tel"
                              required
                              placeholder={isHi ? "+91 98765 43210" : "+91 98765 43210"}
                              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-[#EF7E22] focus:bg-white focus:shadow-[0_0_0_3px_rgba(239,126,34,0.08)] transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="relative group">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                          {isHi ? "ईमेल पता" : "Email Address"}
                        </label>
                        <div className="relative">
                          <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#EF7E22] transition-colors" />
                          <input
                            id="contact-email"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-[#EF7E22] focus:bg-white focus:shadow-[0_0_0_3px_rgba(239,126,34,0.08)] transition-all"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="relative group">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                          {isHi ? "संदेश" : "Message"}
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          placeholder={isHi ? "हम आपकी किस प्रकार सहायता कर सकते हैं?" : "How can we help you?"}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-[#EF7E22] focus:bg-white focus:shadow-[0_0_0_3px_rgba(239,126,34,0.08)] transition-all resize-none"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2.5 bg-[#EF7E22] hover:bg-[#d66a10] disabled:opacity-70 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-orange-200 text-sm cursor-pointer"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            {isHi ? "भेज रहे हैं..." : "Sending..."}
                          </span>
                        ) : (
                          <>
                            <Send size={15} />
                            {isHi ? "संदेश भेजें" : "Send Message"}
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Info panel (2 cols) ─────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Quick contact card */}
            <div className="bg-gradient-to-br from-[#3B1040] to-[#5c1870] rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EF7E22]/10 rounded-full -translate-y-8 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
              <h3 className="font-bold text-white text-base mb-5 relative z-10">
                {isHi ? "संपर्क करें" : "Contact Us"}
              </h3>
              <div className="space-y-3 relative z-10">
                <a href="tel:+919151766671" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#EF7E22]/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-[#EF7E22]" />
                  </div>
                  <span className="text-white/90 text-sm font-semibold group-hover:text-[#EF7E22] transition-colors">+91 9151766671</span>
                </a>
                <a href="tel:+919151030011" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#EF7E22]/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-[#EF7E22]" />
                  </div>
                  <span className="text-white/90 text-sm font-semibold group-hover:text-[#EF7E22] transition-colors">+91 9151030011</span>
                </a>
                <a href="mailto:info@unitedfin.in" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#EF7E22]/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-[#EF7E22]" />
                  </div>
                  <span className="text-white/90 text-sm font-semibold group-hover:text-[#EF7E22] transition-colors">info@unitedfin.in</span>
                </a>
              </div>
            </div>

            {/* Head Office card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#EF7E22]/5 rounded-full -translate-y-6 translate-x-6" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
                  <Building2 size={18} className="text-[#EF7E22]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    {isHi ? "मुख्य कार्यालय" : "Head Office"}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">
                    Plot No 101, Block-B, Pocket-4,<br />
                    Sector-23 Dwarka, New Delhi – 110075
                  </p>
                  <a
                    href="https://maps.google.com/?q=Plot+No+101+Block-B+Pocket-4+Sector-23+Dwarka+New+Delhi+110075"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#EF7E22] text-[11px] font-bold hover:underline"
                  >
                    <ExternalLink size={11} />
                    {isHi ? "दिशा-निर्देश" : "Get Directions"}
                  </a>
                </div>
              </div>
            </div>

            {/* Corporate Office card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#3B1040]/5 rounded-full -translate-y-6 translate-x-6" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#3B1040]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    {isHi ? "कॉर्पोरेट कार्यालय" : "Corporate Office"}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">
                    United Finance &amp; Leasing Pvt. Ltd.<br />
                    Katwa (Sahidwara), Near Reliance Petrol Pump,<br />
                    Azamgarh, UP – 276001
                  </p>
                  <a
                    href="https://maps.google.com/?q=United+Finance+Leasing+Azamgarh+UP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#3B1040] text-[11px] font-bold hover:underline"
                  >
                    <ExternalLink size={11} />
                    {isHi ? "दिशा-निर्देश" : "Get Directions"}
                  </a>
                </div>
              </div>
            </div>

            {/* Grievance Officer card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={18} className="text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-0.5">
                    {isHi ? "शिकायत अधिकारी / प्रधान नोडल अधिकारी" : "Grievance Officer / Principal Nodal Officer"}
                  </h3>
                  <p className="text-xs text-gray-400 mb-3">{isHi ? "पदनाम: परिचालन प्रमुख" : "Designation: Operation Head"}</p>
                  <div className="space-y-1.5">
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold text-gray-700">{isHi ? "नाम:" : "Name:"} </span>Aniket
                    </p>
                    <a href="tel:+919151766673" className="flex items-center gap-1.5 text-xs text-[#EF7E22] font-semibold hover:underline">
                      <Phone size={11} /> +91 9151766673
                    </a>
                    <a href="mailto:aniket@unitedfin.in" className="flex items-center gap-1.5 text-xs text-[#EF7E22] font-semibold hover:underline">
                      <Mail size={11} /> aniket@unitedfin.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════
            EMBEDDED MAP — full width
        ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 rounded-3xl overflow-hidden border border-gray-200 shadow-sm"
          style={{ height: 320 }}
        >
          <iframe
            title="United Finance Azamgarh Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114885.20283534003!2d83.1!3d26.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991cc6dc52eac53%3A0x1cac8e0d39e5e4be!2sAzamgarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </main>
  );
}
