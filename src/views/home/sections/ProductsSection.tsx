import { motion } from "motion/react";

const products = [
  {
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Business Loan-MSME",
    desc: "Get your business loan eligibility in minutes!.",
    bg: "bg-brand-yellow",
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Daily Business Loan-Micro Loan",
    desc: "Apply for Daily Business or Micro MSME loans with Quick Disbursals.",
    bg: "bg-brand-orange text-white",
    darkText: true 
  },
  {
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Two Wheeler Loan",
    desc: "We provide you with solutions that best fit your needs.",
    bg: "bg-brand-yellow",
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeefa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Mortgage Loan",
    desc: "Get your business loan eligibility in minutes!.",
    bg: "bg-brand-yellow",
  },
  {
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
    title: "Gold Loan",
    desc: "We provide you with solutions that best fit your needs.",
    bg: "bg-brand-blue",
    darkText: true
  },
  {
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Personal Loan",
    desc: "We provide you with solutions that best fit your needs.",
    bg: "bg-brand-yellow",
  }
];

export function ProductsSection() {
  return (
    <section id="services" className="py-24 bg-brand-gray-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[2.5rem] font-serif font-bold text-center text-[#14151a] mb-16 tracking-tight"
        >
          Our Products
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 max-w-6xl mx-auto">
          {products.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${item.bg} rounded flex flex-col`}
            >
              <div className="px-4 pt-4">
                <div className="w-full h-40 bg-white p-2 shadow-sm">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={`pt-6 pb-8 px-6 flex-1 flex flex-col items-center text-center`}>
                <h3 className={`font-serif font-bold text-[18px] mb-3 text-black`}>{item.title}</h3>
                <p className={`text-[13px] font-medium mb-6 leading-relaxed text-black max-w-[250px]`}>{item.desc}</p>
                <div className="mt-auto">
                    <button className={`px-6 py-2 rounded-full border border-black font-semibold text-[13px] text-black transition-colors hover:bg-black hover:text-white tracking-wide`}>
                      Know More
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
