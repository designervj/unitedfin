import { motion } from "motion/react";

export function ChairmanMessage() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
         <motion.h2 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-[2.5rem] font-serif font-bold text-gray-900 mb-12"
         >
           Message from Chairman
         </motion.h2>
         <motion.div 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="max-w-4xl border-l-[3px] border-brand-blue text-left pl-6"
         >
           <p className="text-lg md:text-[20px] text-gray-600 font-medium leading-relaxed font-sans tracking-wide">
             I am grateful to all our shareholders and other stakeholders for the support extended to the company over the years. We remain indebted to the Reserve Bank of India and NABARD for the support given to the industry over the years. I would also like to take this opportunity to commend Managing Director, and his management team, for having led the company from strength to strength. Not withstanding the current phase of stress, we look forward to a year of growth and profitability as to set the benchmark for the industry.
           </p>
         </motion.div>
       </div>
    </section>
  );
}
