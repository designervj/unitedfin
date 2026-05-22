"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getTranslation } from "../../../lib/translations";

export function ProductsSection({ locale = "en" }: { locale?: string }) {
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

  const products = [
    {
      title: t.home.products.business.title,
      sub: isHi ? "एमएसएमई" : "MSME",
      desc: t.home.products.business.desc,
      tag: isHi ? "सबसे लोकप्रिय" : "Most Popular",
      color: "#EF7E22",
      lightBg: "#FFF5EB",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: t.home.products.gold.title,
      sub: isHi ? "तुरंत नकद" : "Instant Cash",
      desc: t.home.products.gold.desc,
      tag: "",
      color: "#d4a017",
      lightBg: "#FFFBEB",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: t.home.products.personal.title,
      sub: isHi ? "त्वरित और लचीला" : "Quick & Flexible",
      desc: t.home.products.personal.desc,
      tag: "",
      color: "#ec4899",
      lightBg: "#FFF0F7",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: t.home.products.msme.title,
      sub: isHi ? "दैनिक व्यवसाय" : "Daily Business",
      desc: t.home.products.msme.desc,
      tag: "",
      color: "#6366f1",
      lightBg: "#F5F3FF",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: t.home.products.twoWheeler.title,
      sub: isHi ? "वाहन वित्त" : "Vehicle Finance",
      desc: t.home.products.twoWheeler.desc,
      tag: "",
      color: "#0ea5e9",
      lightBg: "#F0F9FF",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: t.home.products.mortgage.title,
      sub: isHi ? "संपत्ति आधारित" : "Property Backed",
      desc: t.home.products.mortgage.desc,
      tag: "",
      color: "#10b981",
      lightBg: "#F0FDF4",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeefa?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-4 font-sans"
            >
              {t.common.services}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-serif font-bold text-gray-900"
            >
              {isHi ? "प्रत्येक लक्ष्य के लिए ऋण" : "Loans for Every Goal"}
            </motion.h2>
          </div>
          <Link href={getLocalizedHref("/services")}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shrink-0 cursor-pointer"
            >
              {isHi ? "सभी सेवाएं" : "All Services"} <ArrowUpRight size={15} />
            </motion.button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer animate-none"
            >
              {/* Top image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${p.color}dd, transparent)` }} />
                {p.tag && (
                  <div className="absolute top-3 right-3 bg-white text-xs font-bold px-3 py-1 rounded-full shadow" style={{ color: p.color }}>
                    {p.tag}
                  </div>
                )}
                <div className="absolute bottom-3 left-4">
                  <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{p.sub}</div>
                  <div className="text-xl font-serif font-bold text-white">{p.title}</div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <Link href={getLocalizedHref("/services")}>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-all group-hover:gap-2.5" style={{ color: p.color }}>
                    {isHi ? "अधिक जानें" : "Know More"} <ArrowUpRight size={12} />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
