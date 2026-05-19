"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
  { name: "Rajesh Kumar", location: "Lucknow, UP", loan: "Business Loan", amount: "₹8,00,000", img: "https://i.pravatar.cc/80?img=11", quote: "United Finance was a great support in helping me establish and grow my business. They helped me every step of the way, from documentation to final disbursement. Truly a trustworthy partner!" },
  { name: "Priya Sharma", location: "Varanasi, UP", loan: "Gold Loan", amount: "₹2,50,000", img: "https://i.pravatar.cc/80?img=5", quote: "I needed funds urgently for my daughter's medical treatment. United Finance processed my gold loan within a few hours. Their staff was transparent and very kind throughout." },
  { name: "Amit Verma", location: "Agra, UP", loan: "Two Wheeler Loan", amount: "₹85,000", img: "https://i.pravatar.cc/80?img=33", quote: "Completely hassle-free! Minimal documents, very fast approval. I got my two wheeler loan approved the same day and drove home my new bike." },
];

export function SuccessStoriesSection() {
  const [cur, setCur] = useState(0);
  const prev = () => setCur((c) => (c === 0 ? stories.length - 1 : c - 1));
  const next = () => setCur((c) => (c === stories.length - 1 ? 0 : c + 1));
  const s = stories[cur];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — heading + navigation */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8"
            >
              Real Stories,<br />Real Impact
            </motion.h2>

            {/* Counter */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#EF7E22] hover:text-[#EF7E22] transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="font-bold text-gray-400 text-sm">
                <span className="text-gray-900 text-xl">{String(cur + 1).padStart(2, '0')}</span>
                {" / "}{String(stories.length).padStart(2, '0')}
              </span>
              <button
                onClick={next}
                className="w-12 h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#EF7E22] hover:text-[#EF7E22] transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {stories.map((st, i) => (
                <button
                  key={i}
                  onClick={() => setCur(i)}
                  className={`relative w-14 h-14 rounded-full overflow-hidden border-2 transition-all ${i === cur ? "border-[#EF7E22] scale-110 shadow-md" : "border-transparent opacity-50 hover:opacity-80"}`}
                >
                  <img src={st.img} alt={st.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right — quote card */}
          <motion.div
            key={cur}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              {/* Decorative quote mark */}
              <div className="absolute top-6 right-8 text-8xl text-gray-100 font-serif leading-none select-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed font-medium mb-8 relative z-10">
                {s.quote}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img src={s.img} alt={s.name} className="w-12 h-12 rounded-full object-cover border-2 border-orange-100" />
                <div>
                  <div className="font-bold text-gray-900">{s.name}</div>
                  <div className="text-sm text-gray-500">{s.location}</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-[#EF7E22] font-bold text-lg">{s.amount}</div>
                  <div className="text-xs text-gray-400">{s.loan}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
