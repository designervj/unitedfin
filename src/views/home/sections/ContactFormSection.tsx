"use client";

import { motion } from "motion/react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { getTranslation } from "../../../lib/translations";

export function ContactFormSection({ locale = "en" }: { locale?: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-orange-50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-6 font-sans">
              {isHi ? "शुरू हो जाओ" : "Get Started"}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-5">
              {isHi ? "ऋण प्रस्ताव" : "Check Your"}
              <br />
              <span className="text-[#EF7E22]">{isHi ? "जांचें" : "Loan Offer"}</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 text-[15px] max-w-sm">
              {isHi
                ? "अपने बुनियादी विवरण भरें और हमारी टीम एक व्यक्तिगत ऋण प्रस्ताव के साथ संपर्क करेगी - किसी प्रतिबद्धता की आवश्यकता नहीं है।"
                : "Fill in your basic details and our team will reach out with a personalized loan offer — no commitment required."}
            </p>

            <div className="space-y-5">
              {[
                { icon: <Phone size={16} />, label: t.common.callUs, value: "+91 9151766671 / 9151030011" },
                { icon: <Mail size={16} />, label: t.common.email, value: "info@unitedfin.in" },
                { icon: <MapPin size={16} />, label: t.contactPage.officeTitle, value: t.footer.headOfficeAddress },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#EF7E22] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{item.label}</div>
                    <div className="text-gray-700 text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl animate-none">
              <h3 className="text-white font-bold text-xl mb-6 font-serif">{isHi ? "ऋण के लिए आवेदन" : "Apply for a Loan"}</h3>

              {/* Employment type */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">{isHi ? "रोजगार का प्रकार" : "Employment Type"}</label>
                <div className="flex gap-4">
                  {[(isHi ? "वेतनभोगी" : "Salaried"), (isHi ? "स्व-नियोजित" : "Self Employed")].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="empType" defaultChecked={type.includes("Self") || type.includes("स्व")} className="w-4 h-4 accent-orange-500 cursor-pointer" />
                      <span className="text-sm text-gray-400">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                {[
                  { ph: t.contactPage.formName, t: "text" }, { ph: t.contactPage.formPhone, t: "tel" },
                  { ph: isHi ? "शहर" : "City", t: "text" }, { ph: t.contactPage.formEmail, t: "email" },
                  { ph: isHi ? "आधार संख्या" : "Aadhaar Number", t: "text" }, { ph: isHi ? "पैन संख्या" : "PAN Number", t: "text" },
                  { ph: isHi ? "जन्म तिथि" : "Date of Birth", t: "text" }, { ph: isHi ? "मासिक आय" : "Monthly Income", t: "text" },
                ].map((f, i) => (
                  <input
                    key={i}
                    type={f.t}
                    placeholder={f.ph}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder:text-gray-600 text-sm outline-none focus:border-[#EF7E22]/60 transition-all"
                  />
                ))}
              </div>

              {/* Captcha row */}
              <div className="flex items-center gap-3 mt-4">
                <span className="text-gray-500 text-sm shrink-0">9 + 6 =</span>
                <input type="text" className="w-16 px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-white text-sm outline-none focus:border-orange-500/60 text-center" />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold py-3 rounded-xl text-sm transition-colors shadow-lg shadow-orange-900/30 cursor-pointer"
                >
                  <Send size={14} /> {isHi ? "आवेदन जमा करें" : "Submit Application"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
