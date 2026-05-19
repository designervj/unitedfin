"use client";

import { motion } from "motion/react";
import { CheckCircle2, Clock, Lightbulb, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Same Day Approval",
    desc: "Submit documents in the morning, get approval by evening. We respect your time.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Tailored Solutions",
    desc: "Every loan is customized to your specific financial needs and repayment capacity.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Dedicated Manager",
    desc: "A personal relationship manager guides you from application to final disbursement.",
    color: "bg-purple-50 text-purple-600",
  },
];

const highlights = ["Quick Loan Disbursal", "Minimal Documentation", "Zero Hidden Charges", "Expert Guidance"];

export function TrustedSection({ props, locale }: { props?: any; locale?: string }) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top row — badge + heading */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5">
              Why United Finance
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              A Decade of
              <br />
              <span className="text-[#EF7E22]">Financial Trust</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
              For over a decade, we have been successful financial partners to people from all walks of life. Our commitment is reflected in thousands of successfully funded dreams across Uttar Pradesh.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.2 }}
                  className="flex items-center gap-2 text-sm text-gray-700 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#EF7E22] shrink-0" />
                  {h}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#EF7E22] transition-colors">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#1a0a2e] to-[#2a1040] rounded-3xl px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-1">Ready to get started?</h3>
            <p className="text-white/50 text-sm">Check your loan eligibility in under 2 minutes.</p>
          </div>
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 bg-[#EF7E22] hover:bg-[#d66a10] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-900/30 text-sm tracking-wide transition-colors shrink-0"
            >
              Apply Now <ArrowRight size={15} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
