"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, AlertTriangle, ShieldAlert, ArrowRight } from "lucide-react";
import { getTranslation } from "../../../lib/translations";

export default function BranchLocator({ locale = "en" }: { locale?: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

  const [activeTab, setActiveTab] = useState("all");

  const branches = [
    {
      id: "varanasi",
      name: isHi ? "वाराणसी मुख्य कार्यालय" : "Varanasi Corporate Office",
      address: isHi 
        ? "एस-2/638 A, विजया नगर कॉलोनी, अर्दली बाजार, वाराणसी - 221002"
        : "S-2/638 A, Vijaya Nagar Colony, Ardali Bazar, Varanasi - 221002",
      phone: "+91 9151766671",
      email: "info@unitedfin.in",
      hours: isHi ? "सोमवार - शनिवार: सुबह 9:30 - शाम 6:30" : "Mon - Sat: 9:30 AM - 6:30 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.3314051010376!2d82.9739!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE5JzAzLjQiTiA4MsKwNTgnMjYuMCJF!5e0!3m2!1sen!2sin!4v1680000000000!5md"
    },
    {
      id: "azamgarh",
      name: isHi ? "आजमगढ़ मुख्य शाखा" : "Azamgarh Main Branch",
      address: isHi 
        ? "नरौली रोड, सिविल लाइंस, आजमगढ़, उत्तर प्रदेश - 276001"
        : "Narauli Road, Civil Lines, Azamgarh, Uttar Pradesh - 276001",
      phone: "+91 9151766671",
      email: "info@unitedfin.in",
      hours: isHi ? "सोमवार - शनिवार: सुबह 9:30 - शाम 6:30" : "Mon - Sat: 9:30 AM - 6:30 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.288289458925!2d83.1843!3d26.0667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA0JzAwLjEiTiA4M8KwMTEnMDMuNSJF!5e0!3m2!1sen!2sin!4v1680000000001!5md"
    },
    {
      id: "lalganj",
      name: isHi ? "लालगंज शाखा" : "Lalganj - Azamgarh Branch",
      address: isHi 
        ? "वाराणसी-आजमगढ़ हाईवे, लालगंज, आजमगढ़ - 276202"
        : "Varanasi-Azamgarh Highway, Lalganj, Azamgarh - 276202",
      phone: "+91 9151766671",
      email: "info@unitedfin.in",
      hours: isHi ? "सोमवार - शनिवार: सुबह 9:30 - शाम 6:30" : "Mon - Sat: 9:30 AM - 6:30 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.110283457925!2d82.9123!3d25.7533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ1JzExLjkiTiA4MsKwNTQnNDQuMyJF!5e0!3m2!1sen!2sin!4v1680000000002!5md"
    },
    {
      id: "phoolpur",
      name: isHi ? "फूलपुर शाखा" : "Phoolpur - Azamgarh Branch",
      address: isHi 
        ? "अतरौलिया मार्ग, फूलपुर, आजमगढ़, उत्तर प्रदेश - 276304"
        : "Atrauliya Road, Phoolpur, Azamgarh, Uttar Pradesh - 276304",
      phone: "+91 9151766671",
      email: "info@unitedfin.in",
      hours: isHi ? "सोमवार - शनिवार: सुबह 9:30 - शाम 6:30" : "Mon - Sat: 9:30 AM - 6:30 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.210928372938!2d82.8845!3d26.0232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDAxJzIzLjUiTiA4MsKwNTMnMDQuMiJF!5e0!3m2!1sen!2sin!4v1680000000003!5md"
    }
  ];

  const filteredBranches = activeTab === "all" ? branches : branches.filter(b => b.id === activeTab);

  return (
    <main className="bg-[#fafafb] min-h-screen">
      {/* ══════════════════════════════════════════════
          CINEMATIC FULL-WIDTH HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex flex-col overflow-hidden">
        {/* Full-bleed background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=80"
            alt="Branch Network Locations"
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
              <span className="text-[#EF7E22] font-semibold">{isHi ? "शाखा स्थान" : "Branch Locator"}</span>
            </motion.nav>

            {/* Category tag */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[2px] bg-[#EF7E22]" />
              <span className="text-[#EF7E22] text-[11px] font-bold tracking-[0.3em] uppercase">
                {isHi ? "उत्तर प्रदेश में संचालित" : "Operational in Uttar Pradesh"}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-bold text-white leading-[1.1] mb-6 text-4xl md:text-6xl"
            >
              {isHi ? "हमारे शाखा" : "Our Branch"}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7E22] to-[#f9a94b]">
                {isHi ? "नेटवर्क और स्थान" : "Network & Locations"}
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-slate-300/80 text-sm md:text-base leading-relaxed max-w-xl">
              {isHi
                ? "यूनाइटेड फाइनेंस उत्तर प्रदेश में सुचारू रूप से कार्य कर रहा है। नीचे हमारी आधिकारिक शाखाओं के पते, संपर्क विवरण और स्थान मानचित्र देखें।"
                : "United Finance is smoothly working across Uttar Pradesh. Explore our verified branch addresses, maps, office schedules, and get in touch with our local representatives."}
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24  mt-10 relative z-20">

        {/* Advisory Warning Alert */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="bg-red-50 border border-red-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-5 mb-16 shadow-sm"
        >
          <div className="w-12 h-12 bg-red-100 border border-red-200 rounded-2xl flex items-center justify-center shrink-0">
            <ShieldAlert className="w-6 h-6 text-red-600 animate-pulse" />
          </div>
          <div>
            <h3 className="text-red-950 font-bold text-lg mb-2 flex items-center gap-2">
              {isHi ? "⚠️ महत्वपूर्ण सुरक्षा सूचना और धोखाधड़ी चेतावनी" : "⚠️ Important Safety Notice & Fraud Advisory"}
            </h3>
            <p className="text-red-800 text-sm leading-relaxed mb-4 font-medium">
              {isHi 
                ? "हमने अपनी ओर से किसी भी व्यक्ति या संगठन को किसी भी रूप में धन एकत्र करने के लिए अधिकृत नहीं किया है। यदि कोई आपको हमारी ओर से नकद या व्यक्तिगत खातों में ऋण स्वीकृति के नाम पर ठगने की कोशिश करता है, तो तुरंत सचेत हों।"
                : "We have NOT authorized any individual or organization to collect funds in any form on our behalf. Please do not hand over cash or transfer money to personal accounts for loan processing."}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span className="bg-red-200/40 text-red-900 border border-red-200 rounded-full px-3.5 py-1.5 font-bold">
                {isHi ? "साइबर अपराध हेल्पलाइन: 1930" : "Cyber Crime Helpline: 1930"}
              </span>
              <a 
                href="https://www.cybercrime.gov.in" 
                target="_blank" 
                rel="noreferrer"
                className="text-red-900 hover:text-red-950 underline font-bold flex items-center gap-1"
              >
                www.cybercrime.gov.in <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </motion.div> */}

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {[
            { id: "all", label: isHi ? "सभी शाखाएं" : "All Branches" },
            { id: "varanasi", label: isHi ? "वाराणसी" : "Varanasi" },
            { id: "azamgarh", label: isHi ? "आजमगढ़" : "Azamgarh" },
            { id: "lalganj", label: isHi ? "लालगंज" : "Lalganj" },
            { id: "phoolpur", label: isHi ? "फूलपुर" : "Phoolpur" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#3B1040] text-white shadow-md"
                  : "bg-white border border-gray-100 text-gray-600 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Branch grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredBranches.map((branch, i) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block bg-orange-50 text-orange-600 text-[10px] font-extrabold uppercase tracking-wider rounded-md px-2.5 py-1 mb-4">
                  {isHi ? "सक्रिय कार्यालय" : "Active Office"}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{branch.name}</h3>

                <div className="space-y-4 text-sm text-gray-600 mb-8">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#EF7E22] shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Phone className="w-5 h-5 text-[#EF7E22] shrink-0" />
                    <a href={`tel:${branch.phone}`} className="hover:text-[#EF7E22] font-semibold">{branch.phone}</a>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Mail className="w-5 h-5 text-[#EF7E22] shrink-0" />
                    <a href={`mailto:${branch.email}`} className="hover:text-[#EF7E22] font-medium">{branch.email}</a>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Clock className="w-5 h-5 text-[#EF7E22] shrink-0" />
                    <span>{branch.hours}</span>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-gray-100 mt-2 bg-gray-50">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${branch.name} Location Map`}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
