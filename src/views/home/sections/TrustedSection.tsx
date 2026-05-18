"use client";

import { Clock, Lightbulb, Users, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { resolveProps } from "../../../lib/resolveProps";

export function TrustedSection({ props, locale }: { props: any, locale: string }) {
  const resolved = resolveProps(props, locale);

  return (
    <section className="py-24 bg-brand-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[2.5rem] font-serif font-bold text-[#14151a] mb-6 tracking-tight">
              {resolved.title || "Trusted By 1000s"}
            </h2>
            <p className="text-[#14151a] font-medium leading-relaxed mb-6 text-[15px]">
              {resolved.description1 || "For more than a decade, we have been successful financial partners to people from all walks of life. Our continuing commitment to you is best reflected in the recognition and awards United Finance has received over the years."}
            </p>
            <p className="text-[#14151a] font-medium leading-relaxed mb-8 text-[15px]">
              {resolved.description2 || "The rate of interest is prone to fluctuation basis our internal credit and risk policy, and as per an algorithmic multivariate score card."}
            </p>
            
            <ul className="space-y-4 text-[#14151a] font-medium ml-2">
              {(resolved.features || [
                 "Quick Loan",
                 "Online Application",
                 "Hassle-Free",
                 "MSME Friendly"
              ]).map((item: string, index: number) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-3"
                >
                  <ChevronRight className="w-4 h-4 text-gray-900" strokeWidth={3} /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <div className="space-y-12 lg:pl-10 lg:pt-4">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-black shrink-0 flex items-center justify-center text-white">
                <Clock className="w-5 h-5 fill-current text-white" />
              </div>
              <div className="pt-1">
                <h3 className="text-[20px] font-serif font-bold mb-2 text-gray-900 tracking-wide">Service</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">We appreciate customers time & purpose for taking loan. We will reach out to him when he needs fund</p>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="flex gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-black shrink-0 flex items-center justify-center text-white">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="pt-1">
                <h3 className="text-[20px] font-serif font-bold mb-2 text-gray-900 tracking-wide">Innovation</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">We are flexible & will explore new methods to tailor made solutions for customers requirement.</p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="flex gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-black shrink-0 flex items-center justify-center text-white">
                <Users className="w-5 h-5 fill-current text-white" />
              </div>
              <div className="pt-1">
                <h3 className="text-[20px] font-serif font-bold mb-2 text-gray-900 tracking-wide">Mutual Respect</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">We will build an organization, which has a positive mindset. By conducting every interaction with respect and consideration, we will create a self-reinforcing culture of success.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
