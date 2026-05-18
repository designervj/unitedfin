import { Shield, TrendingUp, Building2, Landmark, BadgePercent, Coins, Bike } from "lucide-react";

export default function Services({ locale }: { locale: string }) {
  const services = [
    {
      icon: <Building2 className="h-10 w-10 text-brand-orange group-hover:text-white transition-colors" />,
      title: "Business Loan-MSME",
      desc: "Fuel your business expansion, manage working capital, or upgrade machinery with our customized business loans designed for SMEs.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-brand-orange group-hover:text-white transition-colors" />,
      title: "Daily Business Loan-Micro Loan",
      desc: "Empowering micro-entrepreneurs and individuals in rural and semi-urban areas with quick, daily-collection based micro loans.",
    },
    {
      icon: <BadgePercent className="h-10 w-10 text-brand-orange group-hover:text-white transition-colors" />,
      title: "Gold Loan",
      desc: "Get instant cash against your gold jewelry with maximum loan-to-value, secure storage, and low interest rates.",
    },
    {
      icon: <Shield className="h-10 w-10 text-brand-orange group-hover:text-white transition-colors" />,
      title: "Personal Loan",
      desc: "Quick and hassle-free personal loans for unexpected expenses, medical emergencies, weddings, or vacations.",
    },
    {
      icon: <Bike className="h-10 w-10 text-brand-orange group-hover:text-white transition-colors" />,
      title: "Two Wheeler Loan",
      desc: "Hit the road with your dream bike. We offer attractive interest rates and quick processing for two-wheeler financing.",
    },
    {
      icon: <Landmark className="h-10 w-10 text-brand-orange group-hover:text-white transition-colors" />,
      title: "Mortgage Loan",
      desc: "Unlock the value of your residential or commercial property to secure high-value loans at competitive interest rates.",
    }
  ];

  return (
    <main className="pt-8 pb-16 min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-brand-blue py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-widest mb-4">Complete Solutions For Your Financial Needs</h1>
          <p className="text-blue-100 font-sans tracking-wide">Explore our wide range of services</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded shadow hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 group hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-50 group-hover:bg-brand-blue rounded-full flex items-center justify-center mb-6 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-purple mb-4 uppercase tracking-wider relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-brand-orange after:mt-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed font-sans">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
