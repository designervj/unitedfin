"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown, HelpCircle, ShieldAlert, Sparkles } from "lucide-react";
import { getTranslation } from "../../../lib/translations";

export default function FAQsPage({ locale = "en" }: { locale?: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const categories = [
    { id: "all", label: isHi ? "सभी प्रश्न" : "All Questions" },
    { id: "loans", label: isHi ? "बिजनेस लोन" : "Business Loans" },
    { id: "mfi", label: isHi ? "माइक्रोफाइनेंस और समावेशन" : "Microfinance & Inclusion" }
  ];

  const faqs = [
    {
      category: "loans",
      q: isHi 
        ? "क्या मुझे यूनाइटेड फाइनेंस से नए व्यवसाय के लिए बिजनेस लोन मिल सकता है?"
        : "Can I get a business loan for a new business from United Finance?",
      a: isHi
        ? "हमारे बिजनेस लोन के लिए अर्हता प्राप्त करने के लिए, आपको बस कम से कम 5 लाख रुपये का वार्षिक टर्नओवर बनाए रखना होगा। हमें लोन देने के लिए न्यूनतम 3 वर्ष के व्यावसायिक अनुभव (विंटेज) की आवश्यकता होती है। हम विस्तार के लिए भी लोन प्रदान करते हैं।"
        : "In order to qualify for our business loan, you must simply maintain an annual turnover of at least Rs.5 lakh. We require business vintage of minimum 3 years to lend the loan. We also offer loans for expansion."
    },
    {
      category: "loans",
      q: isHi
        ? "क्या मुझे यूनाइटेड फाइनेंस बिजनेस लोन के लिए आवेदन करने के लिए किसी भौतिक शाखा में जाना होगा?"
        : "Do I have to visit a physical branch to apply for a United Finance Business Loan?",
      a: isHi
        ? "नहीं। आप केवल 5 आसान चरणों में यूनाइटेड फाइनेंस बिजनेस लोन के लिए ऑनलाइन आवेदन कर सकते हैं और आसानी से अपना व्यवसाय बढ़ा सकते हैं।"
        : "No. You can apply online for a United Finance Business Loan in just 5 easy steps and grow your business with ease."
    },
    {
      category: "loans",
      q: isHi
        ? "मैं यूनाइटेड फाइनेंस बिजनेस लोन के लिए ऑनलाइन आवेदन कैसे कर सकता हूँ?"
        : "How can I apply for the United Finance Business Loan online?",
      a: isHi
        ? "ऑनलाइन आवेदन करने के लिए, इन सरल चरणों का पालन करें: 1. बिजनेस लोन वेबपेज पर जाएं, 2. 'अप्लाई नाउ' पर क्लिक करें, 3. केवाईसी, व्यवसाय और वित्तीय दस्तावेज प्रदान करें, 4. सत्यापन और ऋण प्रसंस्करण की प्रतीक्षा करें, 5. ऋण स्वीकृति प्राप्त करें और संवितरण को अधिकृत करें।"
        : "To apply online, follow these simple steps: 1. Visit the business loan webpage, 2. Click on 'Apply Now', 3. Provide KYC, business, and financial documents, 4. Await verification and loan processing, 5. Receive loan approval, 6. Authorise disbursal."
    },
    {
      category: "loans",
      q: isHi
        ? "बिजनेस लोन लेते समय मुझे कैसे तैयारी करनी चाहिए?"
        : "How should I prepare when getting a business loan?",
      a: isHi
        ? "बिजनेस लोन के लिए तैयारी करने का सबसे अच्छा तरीका ईएमआई कैलकुलेटर का उपयोग करना है। यह ऑनलाइन टूल बिजनेस लोन ईएमआई राशि की सटीक गणना करने में मदद करता है, और आपको लोन योजना बनाने में मदद करता है।"
        : "The best way to prepare for a business loan is to use the EMI calculator. This online tool helps calculate business loan EMI amounts accurately, and give you a leg up in loan planning."
    },
    {
      category: "loans",
      q: isHi
        ? "ईएमआई कैलकुलेटर ऋण योजना में कैसे मदद करता है?"
        : "How does the EMI calculator help with loan planning?",
      a: isHi
        ? "ईएमआई कैलकुलेटर देय ब्याज, ईएमआई राशि प्रदर्शित करता है, और पुनर्भुगतान अनुसूची तक पहुंच प्रदान करता है। यह सारी जानकारी निर्णय लेने के दौरान मदद कर सकती है और लागत प्रभावी पुनर्भुगतान रणनीति खोजने के लिए महत्वपूर्ण है।"
        : "The EMI calculator displays the interest payable, EMI amount, and gives access to the amortisation schedule. All of this information can help during decision making and is vital to finding cost-effective repayment strategies."
    },
    {
      category: "mfi",
      q: isHi
        ? "माइक्रोफाइनेंस (सूक्ष्म वित्त) की मुख्य विशेषताएं कौन सी हैं?"
        : "Which of the following are the main features of micro finance?",
      a: isHi
        ? "1. उधारकर्ता आम तौर पर कम आय वाले पृष्ठभूमि से होते हैं। 2. माइक्रोफाइनेंस के तहत लिए गए ऋण आमतौर पर छोटी राशि के होते हैं। 3. ऋण की अवधि कम होती है। 4. माइक्रोफाइनेंस ऋणों के लिए किसी संपार्श्विक (गारंटी) की आवश्यकता नहीं होती है। 5. इन ऋणों को आमतौर पर उच्च आवृत्ति (साप्ताहिक/मासिक) पर चुकाया जाता है।"
        : "1. The borrowers are generally from low income backgrounds. 2. Loans availed under microfinance are usually of small amount, i.e., micro loans. 3. The loan tenure is short. 4. Microfinance loans do not require any collateral. 5. These loans are usually repaid at higher frequencies."
    },
    {
      category: "mfi",
      q: isHi
        ? "वित्तीय समावेशन (Financial Inclusion) क्या है?"
        : "What is financial inclusion?",
      a: isHi
        ? "वित्तीय समावेशन या समावेशी वित्तपोषण का तात्पर्य समाज के वंचित और कम आय वाले परिवारों के वर्गों को वहनीय लागत पर वित्तीय सेवाएं प्रदान करने से है जो अन्यथा औपचारिक वित्तीय सेवाओं का लाभ उठाने में असमर्थ हैं।"
        : "Financial inclusion or inclusive financing refers to delivering financial services at affordable costs to sections of disadvantaged and low-income households in society who are otherwise unable to avail formal financial services."
    },
    {
      category: "mfi",
      q: isHi
        ? "ग्रामीण महिलाओं के लिए माइक्रोफाइनेंस क्यों महत्वपूर्ण है?"
        : "Why is microfinance important for rural women?",
      a: isHi
        ? "चूंकि ग्रामीण महिलाओं के साथ अक्सर भेदभाव होता है, इसलिए माइक्रोफाइनेंस का उद्देश्य उन्हें वित्तीय सेवाओं तक पहुंच देकर परिवार और समुदाय के भीतर उनकी स्थिति में सुधार करना है। माइक्रोफाइनेंस गतिविधियों का लाभ उठाने वाली महिलाएं अधिक मुखर, आत्मविश्वासी होती हैं, अधिक संपत्ति की मालकिन बनती हैं और निर्णय लेने में मजबूत भूमिका निभाती हैं।"
        : "As rural women are more subjugated to discrimination, microfinance aims to improve their status within the family and community by giving them access to financial services. Women availing microfinance activities tend to be more assertive, confident, own more assets and play a stronger role in decision-making."
    },
    {
      category: "mfi",
      q: isHi
        ? "बैंक और माइक्रोफाइनेंस में क्या अंतर है?"
        : "What is the difference between bank and microfinance?",
      a: isHi
        ? "बैंक वित्तीय संस्थान हैं जो जमा स्वीकार करने और ग्राहकों को ऋण देने जैसी बैंकिंग सेवाएं प्रदान करते हैं। दूसरी ओर, एमएफआई मुख्य रूप से ग्रामीण क्षेत्रों में कम सेवा प्राप्त परिवारों को वित्तीय सेवाएं जैसे कि बहुत छोटे ऋण (माइक्रो क्रेडिट) तक पहुंच प्रदान करने के लिए लक्षित करते हैं ताकि उन्हें अपने छोटे व्यवसायों में निवेश करने या विस्तार करने में मदद मिल सके।"
        : "Banks are financial institutions that provide banking and other financial services such as accepting deposits and providing loans to customers. On the other hand, MFIs’ mainly target underserved households in rural areas to access financial services such as very small loans (micro credit) to help them to invest in or scale up their small businesses."
    },
    {
      category: "mfi",
      q: isHi
        ? "माइक्रोफाइनेंस (सूक्ष्म वित्त) क्या है?"
        : "What is Microfinance?",
      a: isHi
        ? "माइक्रोफाइनेंस विभिन्न प्रकार की सस्ती वित्तीय सेवाओं को संदर्भित करता है जो कम आय वाले ग्राहकों को लक्षित करती हैं, विशेष रूप से महिलाओं को। इसका उद्देश्य इन ग्राहकों को आय-सृजन गतिविधियों, बचत, बीमा और प्रेषण सेवाओं के लिए सूक्ष्म ऋण प्रदान करके सशक्त बनाना है।"
        : "Microfinance refers to a variety of affordable financial services that target low-income clients, living either on or below the poverty line, particularly women. It aims to empower these clients by providing them access to microcredit for income-generating activities, savings and insurance, and remittance services."
    },
    {
      category: "mfi",
      q: isHi
        ? "माइक्रोफाइनेंस ग्राहक कौन हैं?"
        : "Who are microfinance clients?",
      a: isHi
        ? "माइक्रोफाइनेंस ग्राहक वे लोग हैं जो गरीबी रेखा के नीचे या ऊपर रहते हैं जिनके पास औपचारिक वित्तीय संस्थानों (जैसे बैंकों) से वित्तीय सेवाओं तक पहुंच नहीं है। वे ग्रामीण या शहरी क्षेत्रों में रह सकते हैं लेकिन उचित दस्तावेजों या संपार्श्विक सुरक्षा की कमी के कारण बैंकिंग सुविधाओं का उपयोग करने में असमर्थ हैं।"
        : "Microfinance clients are either below or above the poverty line who otherwise do not have access to financial services from formal financial institutions such as banks. They may reside in either rural or urban areas but due to lack of proper documents or insufficient collateral security, are unable to utilise banking facilities."
    },
    {
      category: "mfi",
      q: isHi
        ? "क्या माइक्रोफाइनेंस संस्थान विनियमित हैं?"
        : "Are microfinance institutions regulated?",
      a: isHi
        ? "भारत में माइक्रोफाइनेंस संस्थान भारतीय रिजर्व बैंक (RBI) द्वारा विनियमित होते हैं। आरबीआई एनबीएफसी-एमएफआई से संबंधित अपने मास्टर सर्कुलर के माध्यम से ब्याज दरों, ऋण सीमाओं और अनुपालन दिशानिर्देशों को सख्ती से नियंत्रित करता है।"
        : "Microfinance Institutions in India are regulated by the Reserve Bank of India through its master circulars pertaining to NBFC-MFIs. Based on the RBI Circular No: DNBS (PD) CC No: 395/03. 10. 38/2014-15 they strictly comply with margin caps and lending rules."
    },
    {
      category: "mfi",
      q: isHi
        ? "माइक्रोफाइनेंस का मुख्य उद्देश्य क्या है?"
        : "What is the key objective of micro finance?",
      a: isHi
        ? "माइक्रोफाइनेंस का उद्देश्य माइक्रोक्रेडिट के समान ही है; इसका लक्ष्य गरीबी से जूझ रहे क्षेत्रों में उद्यमियों को उनके विचारों पर काम करने और इसके लिए उपलब्ध वित्तीय उपकरण प्राप्त करने में मदद करने के लिए वित्तीय सेवाएं प्रदान करना है ताकि वे अंततः आत्मनिर्भर बन सकें।"
        : "The objective of microfinance is similar to that of microcredit; its goal is to provide financial services to help encourage entrepreneurs in impoverished nations to act on their ideas and obtain the financial tools available to do so and to eventually become self-sustainable."
    }
  ];

  const filteredFaqs = activeCategory === "all" ? faqs : faqs.filter(f => f.category === activeCategory);

  const toggleIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <main className="bg-[#fafafb] min-h-screen">
      {/* ══════════════════════════════════════════════
          CINEMATIC FULL-WIDTH HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex flex-col overflow-hidden">
        {/* Full-bleed background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
            alt="FAQs and Support Guide"
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
              <span className="text-[#EF7E22] font-semibold">{isHi ? "पूछे जाने वाले प्रश्न" : "FAQs"}</span>
            </motion.nav>

            {/* Category tag */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[2px] bg-[#EF7E22]" />
              <span className="text-[#EF7E22] text-[11px] font-bold tracking-[0.3em] uppercase">
                {isHi ? "मदद केंद्र" : "Help Center"}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-bold text-white leading-[1.1] mb-6 text-4xl md:text-6xl"
            >
              {isHi ? "अक्सर पूछे जाने" : "Frequently Asked"}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF7E22] to-[#f9a94b]">
                {isHi ? "वाले प्रश्न" : "Questions"}
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-slate-300/80 text-sm md:text-base leading-relaxed max-w-xl">
              {isHi
                ? "हमारे लोन उत्पादों, पात्रता आवश्यकताओं, प्रसंस्करण समय और नियामक ढांचे के बारे में वह सब कुछ खोजें जो आपको जानना आवश्यक है।"
                : "Discover everything you need to know about our business loan criteria, processing steps, microfinance initiatives, and regulatory adherence."}
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-24 mt-10 relative z-20">

        {/* Categories Tab Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndexes([]);
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#3B1040] text-white shadow-md"
                  : "bg-white border border-gray-100 text-gray-600 hover:border-gray-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:border-orange-200 transition-all duration-300"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4 font-sans cursor-pointer hover:bg-orange-50/20"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#EF7E22] shrink-0 mt-0.5" />
                    <span className="text-gray-900 font-bold text-sm md:text-base leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#EF7E22]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 pl-14 border-t border-gray-50/50">
                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
