"use client";

import { motion } from "motion/react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function ContactFormSection() {
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
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-6">
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-5">
              Check Your
              <br />
              <span className="text-[#EF7E22]">Loan Offer</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 text-[15px] max-w-sm">
              Fill in your basic details and our team will reach out with a personalized loan offer — no commitment required.
            </p>

            <div className="space-y-5">
              {[
                { icon: <Phone size={16} />, label: "Call Us", value: "+91 9151766671 / 9151030011" },
                { icon: <Mail size={16} />, label: "Email", value: "info@unitedfin.in" },
                { icon: <MapPin size={16} />, label: "Head Office", value: "Sector-23 Dwarka, New Delhi - 110075" },
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
            <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-white font-bold text-xl mb-6 font-serif">Apply for a Loan</h3>

              {/* Employment type */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Employment Type</label>
                <div className="flex gap-4">
                  {["Salaried", "Self Employed"].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="empType" defaultChecked={type === "Self Employed"} className="w-4 h-4 accent-orange-500" />
                      <span className="text-sm text-gray-400">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                {[
                  { ph: "Full Name", t: "text" }, { ph: "Phone Number", t: "tel" },
                  { ph: "City", t: "text" }, { ph: "Email Address", t: "email" },
                  { ph: "Aadhaar Number", t: "text" }, { ph: "PAN Number", t: "text" },
                  { ph: "Date of Birth", t: "text" }, { ph: "Monthly Income", t: "text" },
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
                  className="flex-1 flex items-center justify-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold py-3 rounded-xl text-sm transition-colors shadow-lg shadow-orange-900/30"
                >
                  <Send size={14} /> Submit Application
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
