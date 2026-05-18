import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export function SuccessStoriesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-gray-dark">
       <div className="absolute top-0 right-[40%] transform  -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full opacity-50 pointer-events-none"></div>

       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-[2.5rem] font-serif font-bold text-gray-900 mb-16"
         >
           Success Stories
         </motion.h2>
         
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="bg-[#FAE9A8] rounded-md p-10 md:p-16 shadow-sm relative max-w-3xl mx-auto"
         >
           <button className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition-colors">
             <ChevronLeft className="w-8 h-8" />
           </button>
           <button className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition-colors">
             <ChevronRight className="w-8 h-8" />
           </button>
           
           <h3 className="font-serif font-bold text-lg mb-6 text-gray-900">Dedicated customer service</h3>
           <p className="text-gray-900 leading-relaxed text-[15px] font-medium md:px-12">
             United Finance And Leasing Private Limited was a great support in helping me establish and grow my CA practice with their Professional Loan for Chartered Accountants. Availing a loan for the first time, I didn't know where to start. They helped me understand the process and guided me throughout the journey, right till I got my loan.
           </p>

           <div className="flex justify-center gap-2 mt-10">
             <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
           </div>
         </motion.div>
       </div>
    </section>
  );
}
