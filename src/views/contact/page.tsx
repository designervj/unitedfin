"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, UserCheck, Clock, Send, MessageCircle } from "lucide-react";
import { getTranslation } from "../../lib/translations";

export default function Contact({ locale }: { locale: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

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
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">{t.common.contactUs}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl font-bold text-white mb-5">
            {t.contactPage.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-lg mx-auto">
            {t.contactPage.subtitle}
          </motion.p>
        </div>
      </section>

      {/* ── Quick contact cards ─────────────────────────── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: <Phone size={22} />, label: t.common.callUs, value: "+91 9151766671\n+91 9151030011", color: "text-orange-500 bg-orange-50" },
              { icon: <Mail size={22} />, label: t.common.email, value: "info@unitedfin.in", color: "text-blue-500 bg-blue-50" },
              { icon: <Clock size={22} />, label: t.common.workingHours, value: isHi ? "सोमवार–शनिवार\nसुबह 10:00 – शाम 5:00" : "Mon–Sat\n10:00 AM – 5:00 PM", color: "text-emerald-500 bg-emerald-50" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                  {item.icon}
                </div>
                <div className="font-bold text-gray-900 mb-1.5">{item.label}</div>
                <div className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Info ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">{t.contactPage.getInTouch}</h2>

              {/* Head Office */}
              <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin size={16} className="text-orange-500" /> {t.contactPage.officeTitle}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.footer.headOfficeAddress}
                </p>
              </div>

              {/* Grievance */}
              <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <UserCheck size={16} className="text-orange-500" /> {t.common.grievance}
                </h3>
                <p className="font-semibold text-gray-800 text-sm mb-1">{isHi ? "प्रधान नोडल अधिकारी" : "Principal Nodal Officer"}</p>
                <p className="text-gray-600 text-sm mb-1">{isHi ? "श्री अनिकेत वर्मा" : "Mr. Aniket Verma"}</p>
                <p className="text-gray-500 text-xs">{isHi ? "समय: सुबह 10:00 – शाम 5:00 (सोम–शुक्र)" : "Timings: 10:00 AM – 5:00 PM (Mon–Fri)"}</p>
                <div className="mt-3 space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={13} className="text-orange-500" /> +91 9151766673
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail size={13} className="text-orange-500" /> compliance@unitedfin.in
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden h-48 bg-gray-100 border border-gray-100 flex items-center justify-center text-gray-400 text-sm">
                <MapPin className="mr-2 text-orange-400" size={18} /> {isHi ? "नई दिल्ली, भारत" : "New Delhi, India"}
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                    <MessageCircle size={18} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">{t.contactPage.formTitle}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">{t.contactPage.formName}</label>
                    <input type="text" placeholder={isHi ? "आपका पूरा नाम" : "Your full name"}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder:text-gray-600 text-sm outline-none focus:border-orange-500/60 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">{t.contactPage.formEmail}</label>
                    <input type="email" placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder:text-gray-600 text-sm outline-none focus:border-orange-500/60 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">{t.contactPage.formPhone}</label>
                    <input type="tel" placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder:text-gray-600 text-sm outline-none focus:border-orange-500/60 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">{t.contactPage.formSubject}</label>
                    <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-300 text-sm outline-none focus:border-orange-500/60 transition-all appearance-none cursor-pointer">
                      <option>{isHi ? "ऋण पूछताछ" : "Loan Enquiry"}</option>
                      <option>{isHi ? "ईएमआई संबंधित" : "EMI Related"}</option>
                      <option>{isHi ? "सामान्य प्रश्न" : "General Query"}</option>
                      <option>{isHi ? "शिकायत / निवारण" : "Complaint / Grievance"}</option>
                      <option>{isHi ? "करियर" : "Career"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">{t.contactPage.formMessage}</label>
                    <textarea rows={4} placeholder={isHi ? "हम आपकी किस प्रकार सहायता कर सकते हैं?" : "How can we help you?"}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder:text-gray-600 text-sm outline-none focus:border-orange-500/60 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-orange-900/30 text-sm cursor-pointer"
                  >
                    <Send size={15} /> {t.contactPage.formSend}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
