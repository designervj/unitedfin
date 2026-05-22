"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Eye, Image as ImageIcon } from "lucide-react";
import { getTranslation } from "../../../lib/translations";

export default function Gallery({ locale = "en" }: { locale?: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", label: isHi ? "सभी तस्वीरें" : "All Photos" },
    { id: "offices", label: isHi ? "हमारे कार्यालय" : "Our Offices" },
    { id: "meetings", label: isHi ? "निदेशक बैठकें" : "Board Meetings" },
    { id: "csr", label: isHi ? "सीएसआर गतिविधियां" : "CSR Initiatives" },
    { id: "team", label: isHi ? "हमारी टीम" : "Our Team" }
  ];

  const items = [
    {
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      title: isHi ? "कॉर्पोरेट मुख्यालय वाराणसी" : "Varanasi Corporate Headquarters",
      category: "offices",
    },
    {
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      title: isHi ? "आजमगढ़ मुख्य शाखा इंटीरियर" : "Azamgarh Main Branch Interior",
      category: "offices",
    },
    {
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      title: isHi ? "निदेशक मंडल की बैठक - 2025" : "Board of Directors Assembly - 2025",
      category: "meetings",
    },
    {
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      title: isHi ? "ऋण वितरण शिविर वाराणसी" : "Loan Distribution Ceremony, Varanasi",
      category: "team",
    },
    {
      img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
      title: isHi ? "सामुदायिक विकास और सीएसआर कार्य" : "Community Welfare & CSR Campaign",
      category: "csr",
    },
    {
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
      title: isHi ? "टीम समन्वय और वित्तीय योजना सत्र" : "Team Strategy & Annual Financial Planning",
      category: "team",
    }
  ];

  const filteredItems = activeCategory === "all" ? items : items.filter(item => item.category === activeCategory);

  return (
    <main className="bg-[#fafafb] min-h-screen">
      {/* ══════════════════════════════════════════════
          CINEMATIC FULL-WIDTH HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex flex-col overflow-hidden">
        {/* Full-bleed background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="United Finance Gallery & Media"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/85 via-[#0a0a14]/65 to-[#fafafb]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14]/80 via-transparent to-[#0a0a14]/20" />
        </div>

        {/* Dot grid texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        {/* Orange diagonal accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EF7E22] to-transparent opacity-60" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 lg:px-12 pt-36 pb-20">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1.5 text-xs text-white/40 font-medium mb-8">
              <a href={isHi ? "/hi" : "/en"} className="hover:text-white/70 transition-colors">{isHi ? "मुख्य" : "Home"}</a>
              <span className="text-white/20">/</span>
              <a href={isHi ? "/hi/about-us" : "/en/about-us"} className="hover:text-white/70 transition-colors">{t.common.aboutCompany}</a>
              <span className="text-white/20">/</span>
              <span className="text-[#EF7E22] font-semibold">{isHi ? "गैलरी" : "Gallery"}</span>
            </motion.nav>

            {/* Category tag */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[2px] bg-[#EF7E22]" />
              <span className="text-[#EF7E22] text-[11px] font-bold tracking-[0.3em] uppercase">
                {isHi ? "गैलरी और मीडिया" : "Gallery & Media"}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-bold text-white leading-[1.1] mb-6 text-4xl md:text-6xl"
            >
              {isHi ? "यूनाइटेड की" : "Glimpses of"}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7E22] to-[#f9a94b]">
                {isHi ? "सच्ची झलकियां" : "United Finance"}
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-slate-300/80 text-sm md:text-base leading-relaxed max-w-xl">
              {isHi
                ? "हमारी शाखाओं, आधिकारिक समारोहों, सामाजिक सीएसआर गतिविधियों और उद्यमी ग्राहकों के साथ काम करने वाली हमारी कुशल टीमों की तस्वीरों को देखें।"
                : "Discover real photographs from our active branch networks, corporate milestones, CSR welfare distribution, and our passionate team working on the ground."}
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 mt-10 relative z-20">

        {/* Categories Tab Filter */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#3B1040] text-white shadow-md"
                  : "bg-white border border-gray-100 text-gray-600 hover:border-gray-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                key={item.img}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedImage(item.img)}
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#3B1040]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#3B1040] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye size={20} />
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#3B1040] text-[9px] font-extrabold uppercase tracking-widest rounded-md px-2.5 py-1 shadow-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 font-bold text-sm line-clamp-1 group-hover:text-[#EF7E22] transition-colors">{item.title}</h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-semibold mt-1">
                    <ImageIcon size={10} />
                    {isHi ? "आधिकारिक फोटोग्राफी" : "Official Photography"}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h4 className="text-gray-700 font-bold text-base mb-1">{isHi ? "कोई तस्वीर उपलब्ध नहीं" : "No Photos Available"}</h4>
            <p className="text-gray-400 text-xs">{isHi ? "इस श्रेणी में अभी और मीडिया जोड़ी जानी है।" : "More media files will be uploaded to this category soon."}</p>
          </div>
        )}

        {/* Image Modal Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl relative bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Expanded view"
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full p-2.5 transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}
