import { motion } from "motion/react";

export function LoanForm() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[1.8rem] md:text-[2.2rem] font-serif font-bold text-center text-gray-900 mb-12"
        >
          Please fill in your details to check Loan Offer
        </motion.h2>
        
        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 mx-auto"
        >
          <div className="mb-8">
            <label className="block text-[14px] text-gray-600 mb-4 font-medium">Select Employment Type</label>
            <div className="flex flex-col gap-3 ml-2">
              <label className="flex items-center gap-3 text-gray-600 text-[14px]">
                <input type="radio" name="empType" className="w-4 h-4 text-brand-blue" /> Salaried
              </label>
              <label className="flex items-center gap-3 text-gray-600 text-[14px]">
                <input type="radio" name="empType" className="w-4 h-4 text-brand-blue" defaultChecked /> Self Employed
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <input type="text" placeholder="Name" className="w-full px-4 py-3.5 bg-[#F0F0F0] text-[14px] border-none outline-none focus:ring-2 focus:ring-brand-blue transition-shadow rounded-sm" />
            <input type="tel" placeholder="Phone" className="w-full px-4 py-3.5 bg-[#F0F0F0] text-[14px] border-none outline-none focus:ring-2 focus:ring-brand-blue transition-shadow rounded-sm" />
            <input type="text" placeholder="City" className="w-full px-4 py-3.5 bg-[#F0F0F0] text-[14px] border-none outline-none focus:ring-2 focus:ring-brand-blue transition-shadow rounded-sm" />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3.5 bg-[#F0F0F0] text-[14px] border-none outline-none focus:ring-2 focus:ring-brand-blue transition-shadow rounded-sm" />
            <input type="text" placeholder="Aadhar Number" className="w-full px-4 py-3.5 bg-[#F0F0F0] text-[14px] border-none outline-none focus:ring-2 focus:ring-brand-blue transition-shadow rounded-sm" />
            <input type="text" placeholder="PAN Number" className="w-full px-4 py-3.5 bg-[#F0F0F0] text-[14px] border-none outline-none focus:ring-2 focus:ring-brand-blue transition-shadow rounded-sm" />
            <input type="text" placeholder="Residence Pincode" className="w-full px-4 py-3.5 bg-[#F0F0F0] text-[14px] border-none outline-none focus:ring-2 focus:ring-brand-blue transition-shadow rounded-sm" />
            <input type="text" placeholder="Residence Address" className="w-full px-4 py-3.5 bg-[#F0F0F0] text-[14px] border-none outline-none focus:ring-2 focus:ring-brand-blue transition-shadow rounded-sm" />
            <input type="text" placeholder="Date of Birth" className="w-full px-4 py-3.5 bg-[#F0F0F0] text-[14px] border-none outline-none focus:ring-2 focus:ring-brand-blue transition-shadow rounded-sm" />
            <input type="text" placeholder="Monthly Take Home Salary" className="w-full px-4 py-3.5 bg-[#F0F0F0] text-[14px] border-none outline-none focus:ring-2 focus:ring-brand-blue transition-shadow rounded-sm" />
          </div>

          <div className="flex justify-end pt-6 items-center gap-4">
            <span className="text-gray-600 text-[14px] font-medium">9 + 6 = </span>
            <input type="text" className="w-[60px] px-2 py-2 border border-brand-blue outline-none text-center rounded-sm focus:ring-2 focus:ring-brand-blue transition-shadow" />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button" 
              className="bg-white border border-brand-blue text-brand-blue font-semibold px-10 py-2.5 rounded hover:bg-brand-blue hover:text-white transition-colors tracking-widest uppercase text-[14px]"
            >
              SUBMIT
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
