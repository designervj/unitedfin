"use client";

import { motion } from "motion/react";
import { Quote, User, Star, ShieldAlert } from "lucide-react";
import { getTranslation } from "../../../lib/translations";

export default function TestimonialsPage({ locale = "en" }: { locale?: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

  const testimonials = [
    {
      quote: isHi 
        ? "यूनाइटेड फाइनेंस एंड लीजिंग प्राइवेट लिमिटेड ने चार्टर्ड अकाउंटेंट्स के लिए उनके प्रोफेशनल लोन के साथ मेरी सीए प्रैक्टिस स्थापित करने और बढ़ाने में मेरी बहुत मदद की। पहली बार लोन लेते हुए, मुझे नहीं पता था कि कहां से शुरू करूं। उन्होंने मुझे प्रक्रिया समझाने में मदद की और लोन मिलने तक पूरी यात्रा में मेरा मार्गदर्शन किया।"
        : "United Finance was a great support in helping me establish and grow my CA practice with their Professional Loan for Chartered Accountants. Availing a loan for the first time, I didn't know where to start. They helped me understand the process and guided me throughout the journey, right till I got my loan.",
      client: isHi ? "अमित शर्मा" : "Amit Sharma",
      role: isHi ? "चार्टर्ड अकाउंटेंट (सीए)" : "Chartered Accountant (CA)",
      location: isHi ? "वाराणसी, उत्तर प्रदेश" : "Varanasi, Uttar Pradesh"
    },
    {
      quote: isHi 
        ? "मैं अपनी बहन को उसकी सपनों की शादी देना चाहता था, लेकिन मैं उच्च दरों और छिपे हुए शुल्कों को लेकर चिंतित था। यूनाइटेड फाइनेंस के साथ, मुझे सबसे कम ब्याज दर पर एक किफायती पर्सनल लोन मिला। इसके अलावा, जो लाभ मुझे मिले उन्होंने पर्सनल लोन लेने के बेहतरीन अनुभव को और बढ़ा दिया।"
        : "I wanted to give my sister her dream wedding, but I was worried about the higher rates and hidden charges. With United Finance, I got an affordable Personal Loan with lowest interest rate. Moreover, the benefits that I availed further added on to the great experience in availing the Personal Loan.",
      client: isHi ? "राजेश कुमार" : "Rajesh Kumar",
      role: isHi ? "संतुष्ट पर्सनल लोन ग्राहक" : "Satisfied Personal Loan Customer",
      location: isHi ? "आजमगढ़, उत्तर प्रदेश" : "Azamgarh, Uttar Pradesh"
    },
    {
      quote: isHi 
        ? "बिजनेस लोन लेना मेरे लिए हमेशा बहुत सारे कागजी काम के साथ एक कठिन और समय लेने वाली गतिविधि थी। लेकिन यूनाइटेड फाइनेंस ने अपने न्यूनतम दस्तावेजों और आसान प्रक्रिया से इसे बहुत आसान बना दिया है। शानदार अनुभव रहा!"
        : "Getting business loan was always a difficult and time-consuming activity for me with lot of paperwork involved. But United Finance has made it easy with its minimum documentation and easy process. Good experience!",
      client: isHi ? "सुनीता देवी" : "Sunita Devi",
      role: isHi ? "लघु व्यवसाय उद्यमी" : "Small Business Owner",
      location: isHi ? "लालगंज, उत्तर प्रदेश" : "Lalganj, Uttar Pradesh"
    },
    {
      quote: isHi 
        ? "मेरे व्यावसायिक सपनों को पूरा करने के लिए, यूनाइटेड फाइनेंस के बिजनेस लोन ने मुझे त्वरित वित्त का आश्वासन दिया और पूरी प्रक्रिया पूरी तरह से पारदर्शी थी। बिना किसी छिपे हुए लोन शुल्कों ने मुझे अपनी कार्यशील पूंजी की योजना बनाने और अपने व्यवसाय को कुशलतापूर्वक चलाने में मदद की।"
        : "To achieve my business plans, United Finance's business loan assured me quick finances and the process was completely transparent. No hidden loan charges helped me plan my working capital and run my business efficiently.",
      client: isHi ? "विक्रम सिंह" : "Vikram Singh",
      role: isHi ? "एमएसएमई उद्यमी" : "MSME Entrepreneur",
      location: isHi ? "फूलपुर, उत्तर प्रदेश" : "Phoolpur, Uttar Pradesh"
    }
  ];

  return (
    <main className="bg-[#fafafb] min-h-screen">
      {/* ══════════════════════════════════════════════
          CINEMATIC FULL-WIDTH HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex flex-col overflow-hidden">
        {/* Full-bleed background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
            alt="Customer Success stories"
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
              <span className="text-[#EF7E22] font-semibold">{isHi ? "टेस्टिमोनियल्स" : "Testimonials"}</span>
            </motion.nav>

            {/* Category tag */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[2px] bg-[#EF7E22]" />
              <span className="text-[#EF7E22] text-[11px] font-bold tracking-[0.3em] uppercase">
                {isHi ? "सफलता की कहानियां" : "Customer Stories"}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-bold text-white leading-[1.1] mb-6 text-4xl md:text-6xl"
            >
              {isHi ? "लोग हमारे बारे में" : "What People Are"}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7E22] to-[#f9a94b]">
                {isHi ? "क्या कह रहे हैं" : "Saying"}
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-slate-300/80 text-sm md:text-base leading-relaxed max-w-xl">
              {isHi
                ? "हमारे सम्मानित ग्राहकों के वास्तविक अनुभव पढ़ें जिन्होंने हमारे पारदर्शी और आसान लोन उत्पादों के साथ अपने सपनों को पूरा किया।"
                : "Read authentic stories from our valued customers across Uttar Pradesh who turned their professional and personal dreams into reality with United Finance."}
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 -mt-10 relative z-20  ">
        
        {/* Security Warning Panel */}
        {/* <div className="mb-12 bg-red-50 border border-red-100 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-start gap-4 shadow-sm relative z-20">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
            <ShieldAlert size={20} />
          </div>
          <div>
            <h4 className="text-red-800 font-bold text-xs md:text-sm uppercase tracking-wider mb-1">
              {isHi ? "महत्वपूर्ण सुरक्षा चेतावनी" : "Important Security Advisory"}
            </h4>
            <p className="text-red-700/90 text-xs leading-relaxed">
              {isHi
                ? "हम केवल उत्तर प्रदेश (वाराणसी, आजमगढ़, लालगंज, फूलपुर) में सक्रिय हैं। हमने अपनी ओर से किसी भी व्यक्ति या संगठन को किसी भी रूप में धन एकत्र करने के लिए अधिकृत नहीं किया है। धोखाधड़ी से बचने के लिए हेल्पलाइन (1930) या cybercrime.gov.in पर रिपोर्ट करें।"
                : "We are Operational in Uttar Pradesh only (Varanasi, Azamgarh, Lalganj, Phoolpur). We have NOT authorized any individual or organization to collect funds in any form on our behalf. Helpline (Toll-Free): 1930 or raise a complaint at cybercrime.gov.in."}
            </p>
          </div>
        </div> */}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={t.client}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100/50 transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Card Quote Icon */}
              <div className="absolute top-6 right-8 text-orange-100 group-hover:text-orange-200 transition-colors">
                <Quote size={56} className="rotate-180" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 italic relative z-10">
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 mb-6" />

              {/* Client Profile */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm">{t.client}</h4>
                  <p className="text-gray-400 text-[10px] font-semibold tracking-wider uppercase mt-0.5">
                    {t.role} &middot; <span className="text-[#EF7E22]">{t.location}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
