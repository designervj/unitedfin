"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getTranslation } from "../../../lib/translations";

export function FAQSection({ locale = "en" }: { locale?: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

  const faqs = t.home.faq.questions || [];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 text-xs font-bold text-orange-600 tracking-widest uppercase mb-5 font-sans"
          >
            {isHi ? "सामान्य प्रश्न" : "FAQ"}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900"
          >
            {t.home.faq.title}
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? "bg-white border-orange-200 shadow-md shadow-orange-100"
                  : "bg-white border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
              >
                <span className={`font-semibold text-[15px] pr-4 ${open === i ? "text-orange-600" : "text-gray-800"}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-gray-400 transition-transform duration-300 ${open === i ? "rotate-180 text-orange-500" : ""}`}
                />
              </button>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6 text-gray-600 text-sm leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
