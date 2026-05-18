import { MapPin, Phone, Mail, UserCheck } from "lucide-react";

export default function Contact({ locale }: { locale: string }) {
  return (
    <main className="pt-8 pb-16 min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-brand-blue py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-widest mb-4">Contact Us</h1>
          <p className="text-blue-100 font-sans tracking-wide">We're here to help you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <div className="bg-white rounded shadow border border-gray-100 p-8 space-y-10">
            <div>
              <h2 className="text-2xl font-serif font-bold text-brand-purple mb-6 uppercase tracking-wider relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-brand-orange after:mt-3">Head Office</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-orange mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="text-gray-700 font-sans">123 Financial Hub, Business District,<br />New Delhi, Delhi 110001, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand-orange mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="text-gray-700 font-sans">+91 1800 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand-orange mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="text-gray-700 font-sans">info@unitedfin.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-brand-purple mb-6 uppercase tracking-wider relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-brand-orange after:mt-3">Grievance Officer</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <UserCheck className="h-6 w-6 text-brand-orange mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="font-bold text-gray-900 font-serif">Principal Nodal Officer</p>
                    <p className="text-gray-700 font-sans mt-1">Mr. Sharma<br />Timings: 10:00 AM to 5:00 PM (Mon-Fri)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand-orange mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="text-gray-700 font-sans">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand-orange mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="text-gray-700 font-sans">grievance@unitedfin.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="bg-white rounded shadow-lg border border-gray-100 p-10">
              <h2 className="text-3xl font-serif font-bold text-brand-purple mb-8 uppercase tracking-widest text-center">Send A Message</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-800 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800 uppercase tracking-widest mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800 uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-brand-purple hover:bg-[#2a152d] text-white font-bold py-4 px-4 rounded uppercase tracking-widest transition-colors shadow">
                  Submit Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
