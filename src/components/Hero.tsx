import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="relative bg-[#a0d7d4] lg:bg-transparent min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Happy couple looking at phone" 
          className="w-full h-full object-cover object-top opacity-30 lg:opacity-100"
        />
        {/* Desktop shape overlay */}
        <div className="hidden lg:block absolute inset-0 text-[#7bb4b9]">
           <svg viewBox="0 0 1440 600" fill="currentColor" className="absolute top-0 left-0 w-[65%] h-full opacity-[0.98] drop-shadow-md transform scale-x-110 origin-left" preserveAspectRatio="none">
             <path d="M0,0 L700,0 L500,600 L0,600 Z"></path>
           </svg>
           {/* Darker accent line */}
           <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="absolute left-[30%] top-14 w-12 h-[4px] bg-[#1e2a3a] origin-left"
           ></motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16 pb-24 lg:pt-24 lg:pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="w-16 h-1 bg-gray-900 mb-8 hidden lg:block origin-left"
          ></motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[2.5rem] md:text-5xl lg:text-[4rem] font-serif font-bold text-[#1e2a3a] leading-[1.1] mb-6 tracking-tight"
          >
            Flexible Loans for your <span className="block">Business and Daily</span> <span className="block">Needs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-[16px] text-gray-800 lg:text-[#1e2a3a] drop-shadow-sm lg:drop-shadow-none mb-8 font-medium max-w-lg leading-relaxed"
          >
            Whether you're looking to refurbish your property, buy an asset or you just need cash for working capital, we want to help you and your business succeed
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2a2c4e] text-white px-8 py-3.5 rounded-full font-medium shadow-xl hover:bg-black transition-colors uppercase tracking-[0.15em] text-[13px]"
          >
            APPLY NOW
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
