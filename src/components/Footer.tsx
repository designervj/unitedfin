import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full flex flex-col lg:flex-row text-white text-[14px]">
      {/* Left Column */}
      <div className="w-full lg:w-[35%] xl:w-[30%] bg-brand-orange px-8 py-12 lg:p-14 flex flex-col">
        <h3 className="font-serif font-bold text-[1.4rem] mb-6 tracking-wide">Contact Us</h3>
        <form className="space-y-4 mb-10">
          <input type="text" placeholder="Name" className="w-full px-4 py-3.5 bg-white text-gray-900 border-none outline-none font-medium text-[14px]" />
          <input type="tel" placeholder="Phone" className="w-full px-4 py-3.5 bg-white text-gray-900 border-none outline-none font-medium text-[14px]" />
          <input type="email" placeholder="Email Address" className="w-full px-4 py-3.5 bg-white text-gray-900 border-none outline-none font-medium text-[14px]" />
          <div className="flex gap-2 items-center">
            <span className="shrink-0 font-medium text-[13px] mr-2">9 + 10 =</span>
            <input type="text" className="w-[60px] px-2 py-3 bg-white text-gray-900 border-none outline-none font-medium text-[14px]" />
            <button type="submit" className="flex-1 bg-[#cc6514] hover:bg-[#a64e0a] text-white font-medium py-3 px-4 transition-colors tracking-wider text-[14px]">Submit</button>
          </div>
        </form>

        <h3 className="font-serif font-bold text-lg mb-5 tracking-wide">FOLLOW US ON</h3>
        <div className="flex gap-3 mb-10">
          <a href="#" className="w-8 h-8 rounded bg-[#3b5998] flex items-center justify-center hover:opacity-80 transition"><Facebook className="w-4 h-4 fill-white text-[#3b5998]" /></a>
          <a href="#" className="w-8 h-8 rounded bg-black flex items-center justify-center hover:opacity-80 transition"><span className="text-[13px] font-bold leading-none">X</span></a>
          <a href="#" className="w-8 h-8 rounded bg-[#E4405F] flex items-center justify-center hover:opacity-80 transition"><Instagram className="w-4 h-4 text-white" /></a>
          <a href="#" className="w-8 h-8 rounded bg-[#0077b5] flex items-center justify-center hover:opacity-80 transition"><Linkedin className="w-4 h-4 fill-current" /></a>
          <a href="#" className="w-8 h-8 rounded bg-[#f4a162] flex items-center justify-center hover:opacity-80 transition"><Mail className="w-4 h-4" /></a>
        </div>

        <div className="bg-white p-5 rounded-md text-center text-gray-800 shadow-sm mx-auto w-full max-w-[250px]">
           <div className="mx-auto mb-4 w-[160px] h-[160px] border border-gray-200 flex items-center justify-center bg-gray-50 p-1">
             <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=UnitedFinance" alt="QR Code" className="w-full h-full object-cover" />
           </div>
           <p className="text-[12px] font-medium leading-relaxed">Scan the QR with any<br/>BharatQR / UPI enabled app</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-[65%] xl:w-[70%] bg-brand-purple px-8 py-12 lg:p-14 lg:pl-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {/* Col 1 */}
          <div className="space-y-12">
            <div>
              <h4 className="font-serif text-[#FAE9A8] mb-5 tracking-wider uppercase text-[15px] font-semibold">ABOUT US</h4>
              <ul className="space-y-2 mt-1 text-[13px] font-medium tracking-wide">
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">ABOUT US</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">FAQs</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">GALLERY</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">TESTIMONIALS</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">EMI CALCULATOR</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-[#FAE9A8] mb-5 tracking-wider uppercase text-[15px] font-semibold">QUICK LINKS</h4>
              <ul className="space-y-2 mt-1 text-[13px] font-medium tracking-wide">
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">NEWS</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">PRIVACY POLICY</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">CODE OF CONDUCT</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">TERMS AND CONDITIONS</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-[#FAE9A8] mb-5 tracking-wider uppercase text-[15px] font-semibold">SERVICES</h4>
              <ul className="space-y-2 mt-1 text-[13px] font-medium tracking-wide">
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">BUSINESS LOAN</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">MSME LOAN</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">GOLD LOAN</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">TWO WHEELER LOAN</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">MORTGAGE LOAN</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">PERSONAL LOAN</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-[#FAE9A8] mb-5 tracking-wider uppercase text-[15px] font-semibold">INFORMATION</h4>
              <ul className="space-y-2 mt-1 text-[13px] font-medium tracking-wide">
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">FORMS</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">SERVICES</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">BOARD OF DIRECTOR</a></li>
                <li><a href="#" className="hover:text-[#FAE9A8] transition-colors leading-relaxed">KYC POLICY</a></li>
              </ul>
            </div>
          </div>

          {/* Col 2 */}
           <div className="md:col-span-1 lg:col-span-2 space-y-8 h-full">
              <div className="bg-brand-yellow-light pt-8 pb-8 px-4 inline-block w-full max-w-[340px] mb-8 text-center rounded-sm">
                <div className="flex-shrink-0 flex items-center gap-3 justify-center">
                  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" className="shrink-0">
                    <path d="M50 15 A35 35 0 0 0 50 85" fill="none" stroke="#00A2D9" strokeWidth="18" strokeLinecap="butt"/>
                    <path d="M50 15 A35 35 0 0 1 50 85" fill="none" stroke="#862B84" strokeWidth="18" strokeDasharray="20 10" strokeLinecap="butt"/>
                    <rect x="25" y="45" width="6" height="30" fill="#EF7E22" />
                    <rect x="35" y="35" width="6" height="40" fill="#EF7E22" />
                    <rect x="45" y="25" width="6" height="50" fill="#EF7E22" />
                  </svg>
                  <div className="leading-[1.1] text-left mt-0.5">
                    <span className="font-bold text-[22px] text-brand-orange block font-serif tracking-[0.08em] border-b border-brand-purple pb-0.5">UNITED</span>
                    <span className="text-[11px] text-brand-purple font-semibold tracking-widest block mt-0.5">FINANCE <span className="text-brand-blue">&</span> LEASING</span>
                    <span className="text-[9px] text-[#4f6b3e] font-bold block tracking-[0.2em] font-sans mt-[3px]">PRIVATE LIMITED</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-serif text-[#FAE9A8] mb-2 font-bold tracking-wide text-[16px]">Customer Care</h4>
                <p className="tracking-[0.1em] font-medium text-[15px] mt-1">+919151766671</p>
                <p className="tracking-[0.1em] font-medium text-[15px]">+919151030011</p>
                <a href="mailto:info@unitedfin.in" className="inline-block mt-3 tracking-[0.1em] font-medium text-[15px] hover:text-[#FAE9A8]">info@unitedfin.in</a>
                <p className="text-[#e4cce3] mt-5 text-[13px] font-medium leading-relaxed">Customers can write to us at</p>
                <a href="mailto:helpdesk@unitedfin.in" className="text-[#FAE9A8] font-bold tracking-wider text-[14px] hover:underline">helpdesk@unitedfin.in</a>
              </div>

              <div className="space-y-1 pt-8">
                <h4 className="font-serif text-[#FAE9A8] mb-4 font-bold tracking-wide text-[16px] leading-[1.3]">Grievance Officer / Principal Nodal<br/>Officer</h4>
                <p className="text-[14px] mb-1"><span className="font-semibold text-[#e4cce3]">Name:</span> <span className="font-medium text-white">Aniket</span></p>
                <p className="text-[14px] mb-1"><span className="font-semibold text-[#e4cce3]">Designation:</span> <span className="font-medium text-white">Operation Head</span></p>
                <p className="text-[14px] mt-3 mb-1 leading-snug"><span className="font-semibold text-[#e4cce3]">Contact Number:</span><br/><span className="text-white font-medium">+91 9151766673</span></p>
                <p className="text-[14px] leading-snug mt-3"><span className="font-semibold text-[#e4cce3]">Email ID:</span><br/><a href="mailto:aniket@unitedfin.in" className="text-white font-medium hover:text-[#FAE9A8]">aniket@unitedfin.in</a></p>
              </div>

              <div className="border-t border-[#ae4faa] pt-8 mt-10">
                <h4 className="font-serif text-[#FAE9A8] mb-3 font-bold tracking-wide text-[16px]">Head Office</h4>
                <p className="text-[14px] leading-relaxed font-medium text-white">Plot No 121, Block-B, Pocket-4,<br/>Sector-23 Dwarka, New Delhi - 110075</p>
                <a href="#" className="text-[#FAE9A8] text-[13px] mt-3 block hover:underline font-medium tracking-wide">Show on Google Map</a>
              </div>

              <div className="border-t border-[#ae4faa] pt-8 mt-10">
                <h4 className="font-serif text-[#FAE9A8] mb-3 font-bold tracking-wide text-[16px]">Corporate Office</h4>
                <p className="text-[14px] leading-relaxed font-medium text-white">Opposite Cinema Hall, Mouni Baba Road, Lalganj,<br/>Azamgarh, Uttar Pradesh, Pin-276202.<br/>Landmark-Above Shanti Sudama Gas Agency.</p>
                <a href="#" className="text-[#FAE9A8] text-[13px] mt-3 block hover:underline font-medium tracking-wide">Show on Google Map</a>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
