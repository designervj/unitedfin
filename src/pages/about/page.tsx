import { CheckCircle2 } from "lucide-react";

export default function About({ locale }: { locale: string }) {
  const features = [
    "Dedicated customer service",
    "Affordable loan",
    "Hassle-free documentation",
    "Transparent loan offer",
    "Excellent support",
    "Easy and quick approvals",
  ];

  return (
    <main className="pt-8 pb-16 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-brand-blue py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-widest mb-4">About Our Company</h1>
          <p className="text-blue-100 font-sans tracking-wide">Learn more about our story, mission, and vision.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-purple mb-6 uppercase tracking-wider relative after:content-[''] after:block after:w-16 after:h-1 after:bg-brand-orange after:mt-4">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              United Finance & Leasing Private Limited is an RBI-registered NBFC committed to providing fair, transparent, and flexible financing solutions. Our journey began with a simple goal: to bridge the credit gap and foster economic growth by ensuring easy access to capital for our customers.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 font-sans">
              Over the years, we have leveraged technology and deep industry expertise to offer customized loan products that suit specific needs, all with minimal documentation and fast turnaround times.
            </p>

            <h2 className="text-3xl font-serif font-bold text-brand-purple mb-6 uppercase tracking-wider relative after:content-[''] after:block after:w-16 after:h-1 after:bg-brand-orange after:mt-4">
              Our Mission & Vision
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 font-sans">
              <strong className="text-brand-blue">Mission:</strong> To empower individuals and MSMEs by providing quick, hassle-free, and affordable financial solutions, driving holistic economic development.
            </p>
            <p className="text-gray-700 leading-relaxed font-sans">
              <strong className="text-brand-blue">Vision:</strong> To become the most trusted and preferred financial partner for the underserved and unserved segments across the country.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Our Story" 
              className="rounded shadow-xl w-full h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Features */}
        <div className="bg-gray-50 border border-gray-100 p-10 rounded shadow-sm mb-16">
          <h3 className="text-2xl font-serif font-bold text-center text-brand-purple mb-10 uppercase tracking-widest">Why Choose Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center space-x-3">
                <CheckCircle2 className="text-brand-orange h-6 w-6 flex-shrink-0" />
                <span className="text-gray-800 font-medium font-sans">{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
