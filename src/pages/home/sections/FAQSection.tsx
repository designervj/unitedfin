"use client";

import { PlusCircle, MinusCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "Can I get a business loan for a new business from UNITED FINANCE AND LEASING PRIVATE LIMITED?",
    a: "In order to qualify for our business loan, you must simply maintain an annual turnover of at least Rs.5 lakh. We require business vintage of minimum 3 years to lend the loan. We also offer loans for expansion.",
  },
  {
    q: "Do I have to visit a physical branch to apply for a United Finance Business Loan?",
    a: "You can apply online or visit any of our branches.",
  },
  {
    q: "How can I apply for the United Finance Business Loan online?",
    a: "Click on the apply now button and fill out the details.",
  },
  {
    q: "How should I prepare when getting a business loan?",
    a: "Gather all necessary documentation including bank statements, KYC, and business proofs.",
  },
  {
    q: "How does the EMI calculator help with loan planning?",
    a: "It helps you estimate your monthly obligations so you can plan your finances better.",
  }
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 bg-[#E2DFE3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_2fr] gap-x-12 gap-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-[3.2rem] font-serif font-bold text-[#202758] leading-[1.1] md:mt-2 tracking-tight">
              Frequently<br />Asked<br />Questions
            </h2>
          </motion.div>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border-b border-gray-400 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                  className="w-full flex justify-between items-center text-left py-5 group"
                >
                  <h3 className="font-serif font-bold text-lg text-gray-900 pr-8 group-hover:text-brand-purple transition-colors">{faq.q}</h3>
                  <motion.div
                    animate={{ rotate: openIdx === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIdx === i ? 
                      <MinusCircle className="w-6 h-6 shrink-0 text-brand-purple fill-white" strokeWidth={1.5} /> : 
                      <PlusCircle className="w-6 h-6 shrink-0 text-black fill-white" strokeWidth={1.5} />
                    }
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-900 pb-6 pt-1 leading-relaxed text-[15px] font-medium pr-12">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
