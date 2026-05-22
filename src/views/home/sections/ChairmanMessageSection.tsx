"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { getTranslation } from "../../../lib/translations";

export function ChairmanMessageSection({ locale = "en" }: { locale?: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EF7E22]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00A2D9]/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Image col */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80"
                alt="Chairman"
                className="w-full h-[420px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
            </div>
            {/* Name card */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4">
              <div className="text-white font-bold">{isHi ? "श्री राजीव कुमार गुप्ता" : "Sh. Rajiv Kumar Gupta"}</div>
              <div className="text-white/50 text-xs mt-0.5">{isHi ? "अध्यक्ष एवं प्रबंध निदेशक" : "Chairman & Managing Director"}</div>
            </div>
            {/* Orange accent box */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#EF7E22]/20 rounded-2xl -z-10 blur-sm" />
          </motion.div>

          {/* Text col */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-8">
              {t.home.message.badge}
            </span>

            <Quote size={40} className="text-orange-500/20 mb-4" />

            <p className="text-slate-300 text-xl leading-relaxed font-light mb-6">
              {t.home.message.quote}
            </p>
            <p className="text-slate-500 leading-relaxed mb-6 text-[15px]">
              {t.home.message.p1}
            </p>
            <p className="text-slate-500 leading-relaxed text-[15px]">
              {t.home.message.p2}
            </p>


            <div className="mt-10 flex items-center gap-4">
              
              <div className="h-px flex-1 bg-gradient-to-r from-[#EF7E22]/50 to-transparent" />
              <div className="text-white/50 text-sm italic">{isHi ? "स्थापना 2014 · उत्तर प्रदेश" : "Est. 2014 · Uttar Pradesh"}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
