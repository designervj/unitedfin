"use client";

import Link from "next/link";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink, ArrowUpRight, Shield } from "lucide-react";

const LogoIcon = () => (
  <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M50 15 A35 35 0 0 0 50 85" fill="none" stroke="#00A2D9" strokeWidth="18" strokeLinecap="butt" />
    <path d="M50 15 A35 35 0 0 1 50 85" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="18" strokeDasharray="20 10" strokeLinecap="butt" />
    <rect x="25" y="45" width="6" height="30" fill="white" />
    <rect x="35" y="35" width="6" height="40" fill="white" />
    <rect x="45" y="25" width="6" height="50" fill="white" />
  </svg>
);

const navCols = [
  {
    heading: "About Us",
    links: [
      { label: "About Our Company", href: "/about" },
      { label: "Board of Directors", href: "/about/directors" },
      { label: "CSR & Policies", href: "/about/csr" },
      { label: "FAQs", href: "/" },
      { label: "Testimonials", href: "/" },
      { label: "Gallery", href: "/" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Business Loan", href: "/services/business-loan" },
      { label: "MSME Loan", href: "/services/msme-loan" },
      { label: "Gold Loan", href: "/services/gold-loan" },
      { label: "Two Wheeler Loan", href: "/services/two-wheeler-loan" },
      { label: "Mortgage Loan", href: "/services/mortgage-loan" },
      { label: "Personal Loan", href: "/services/personal-loan" },
    ],
  },
  {
    heading: "Quick Links",
    links: [
      { label: "EMI Calculator", href: "/emi-calculator" },
      { label: "News", href: "/" },
      { label: "Privacy Policy", href: "/" },
      { label: "Code of Conduct", href: "/" },
      { label: "Terms & Conditions", href: "/" },
      { label: "KYC Policy", href: "/" },
    ],
  },
  {
    heading: "Information",
    links: [
      { label: "Forms", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Board of Directors", href: "/about/directors" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/contact" },
    ],
  },
];

const socials = [
  { icon: <Facebook size={15} className="fill-white" />, href: "#", label: "Facebook" },
  { icon: <span className="text-[12px] font-black text-white">𝕏</span>, href: "#", label: "X" },
  { icon: <Instagram size={15} className="text-white" />, href: "#", label: "Instagram" },
  { icon: <Linkedin size={15} className="fill-white" />, href: "#", label: "LinkedIn" },
  { icon: <Mail size={15} className="text-white" />, href: "mailto:info@unitedfin.in", label: "Email" },
];

export function Footer() {
  return (
    <footer className="w-full text-white">

      {/* ── Two-tone main body ─────────────────────────── */}
      <div className="flex flex-col lg:flex-row">

        {/* ══ LEFT — Orange ══════════════════════════════ */}
        <div className="w-full lg:w-[38%] xl:w-[35%] bg-[#EF7E22] px-8 py-14 lg:px-12 lg:py-16 flex flex-col gap-10">

          {/* Logo block */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <LogoIcon />
              <div className="leading-none">
                <div className="font-serif font-bold text-[20px] text-white tracking-[0.1em] border-b border-white/30 pb-[2px]">UNITED</div>
                <div className="text-[9px] text-white/70 font-bold tracking-[0.22em] mt-[3px]">FINANCE & LEASING</div>
                <div className="text-[7px] text-white/50 font-bold tracking-[0.28em] mt-[2px]">PRIVATE LIMITED</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 rounded-full px-3 py-1">
              <Shield size={10} className="text-white" />
              <span className="text-white text-[10px] font-bold tracking-widest uppercase">RBI Registered NBFC</span>
            </div>
          </div>

          {/* Quick Enquiry form */}
          <div>
            <h3 className="font-serif font-bold text-white text-xl mb-5 tracking-wide">Quick Enquiry</h3>
            <form className="space-y-3">
              <input type="text" placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/15 border border-white/20 rounded-xl text-white placeholder:text-white/50 text-sm outline-none focus:bg-white/20 focus:border-white/40 transition-all" />
              <input type="tel" placeholder="Phone Number"
                className="w-full px-4 py-3 bg-white/15 border border-white/20 rounded-xl text-white placeholder:text-white/50 text-sm outline-none focus:bg-white/20 focus:border-white/40 transition-all" />
              <input type="email" placeholder="Email Address"
                className="w-full px-4 py-3 bg-white/15 border border-white/20 rounded-xl text-white placeholder:text-white/50 text-sm outline-none focus:bg-white/20 focus:border-white/40 transition-all" />
              <div className="flex gap-3 items-center">
                <span className="text-white/80 text-sm font-medium shrink-0">9 + 10 =</span>
                <input type="text"
                  className="w-16 px-3 py-3 bg-white/15 border border-white/20 rounded-xl text-white text-sm text-center outline-none focus:bg-white/20 transition-all" />
                <button type="submit"
                  className="flex-1 bg-[#3B1040] hover:bg-[#2a0a2e] text-white font-bold py-3 rounded-xl text-sm tracking-wide transition-colors shadow-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Follow Us On</h4>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a key={s.label} href={s.href} title={s.label}
                  className="w-9 h-9 rounded-xl bg-white/15 border border-white/15 hover:bg-white/25 hover:border-white/30 flex items-center justify-center transition-all hover:scale-110">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QR code */}
          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 max-w-[280px]">
            <div className="w-20 h-20 rounded-none overflow-hidden border border-gray-100 shrink-0 ">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=UnitedFinance"
                alt="UPI QR Code" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-gray-900 font-bold text-sm mb-1">Pay via UPI</div>
              <p className="text-gray-500 text-[11px] leading-relaxed">
                Scan with any BharatQR or UPI enabled app to pay EMI
              </p>
            </div>
          </div>
        </div>

        {/* ══ RIGHT — Dark Purple ═══════════════════════════ */}
        <div className="w-full lg:w-[62%] xl:w-[65%] bg-[#3B1040] px-8 py-14 lg:px-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {navCols.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[#FAE9A8] text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
                  {col.heading}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}
                        className="text-white/45 hover:text-[#FAE9A8] text-[13px] font-medium transition-colors leading-snug block">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/8 pt-10">
            <div className="grid md:grid-cols-3 gap-8">

              {/* Customer Care */}
              <div>
                <h4 className="text-[#FAE9A8] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Customer Care</h4>
                <div className="space-y-2.5">
                  <a href="tel:+919151766671" className="flex items-center gap-2 text-white/60 hover:text-white text-sm group transition-colors">
                    <Phone size={12} className="text-[#EF7E22] shrink-0" /> +91 9151766671
                  </a>
                  <a href="tel:+919151030011" className="flex items-center gap-2 text-white/60 hover:text-white text-sm group transition-colors">
                    <Phone size={12} className="text-[#EF7E22] shrink-0" /> +91 9151030011
                  </a>
                  <a href="mailto:info@unitedfin.in" className="flex items-center gap-2 text-white/60 hover:text-[#FAE9A8] text-sm transition-colors">
                    <Mail size={12} className="text-[#EF7E22] shrink-0" /> info@unitedfin.in
                  </a>
                  <p className="text-white/35 text-xs mt-1">
                    Helpdesk: <a href="mailto:helpdesk@unitedfin.in" className="text-[#FAE9A8]/70 hover:text-[#FAE9A8] transition-colors">helpdesk@unitedfin.in</a>
                  </p>
                </div>
              </div>

              {/* Grievance Officer */}
              <div>
                <h4 className="text-[#FAE9A8] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Grievance Officer</h4>
                <div className="space-y-1">
                  <div className="text-white font-semibold text-sm">Aniket</div>
                  <div className="text-white/40 text-xs mb-2">Operation Head</div>
                  <a href="tel:+919151766673" className="text-white/55 hover:text-white text-sm block transition-colors">+91 9151766673</a>
                  <a href="mailto:aniket@unitedfin.in" className="text-[#FAE9A8]/80 hover:text-[#FAE9A8] text-sm block transition-colors">aniket@unitedfin.in</a>
                </div>
              </div>

              {/* Offices */}
              <div className="space-y-5">
                <div>
                  <h4 className="text-[#FAE9A8] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Head Office</h4>
                  <div className="flex gap-2">
                    <MapPin size={12} className="text-[#EF7E22] mt-0.5 shrink-0" />
                    <p className="text-white/45 text-[13px] leading-relaxed">Plot No 121, Block-B, Pocket-4, Sector-23 Dwarka, New Delhi — 110075</p>
                  </div>
                  <a href="#" className="text-[12px] text-[#EF7E22] hover:text-orange-300 flex items-center gap-1 mt-1.5 ml-[20px] font-medium transition-colors">
                    <ExternalLink size={10} /> Google Maps
                  </a>
                </div>
                <div>
                  <h4 className="text-[#FAE9A8] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Corporate Office</h4>
                  <div className="flex gap-2">
                    <MapPin size={12} className="text-[#EF7E22] mt-0.5 shrink-0" />
                    <p className="text-white/45 text-[13px] leading-relaxed">Opp. Cinema Hall, Mouni Baba Road, Lalganj, Azamgarh, UP — 276202</p>
                  </div>
                  <a href="#" className="text-[12px] text-[#EF7E22] hover:text-orange-300 flex items-center gap-1 mt-1.5 ml-[20px] font-medium transition-colors">
                    <ExternalLink size={10} /> Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom copyright bar ─────────────────────────── */}
      <div className="bg-[#2a0a2e] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} United Finance & Leasing Pvt. Ltd. · RBI Registered NBFC · All rights reserved
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Use</a>
            <span>·</span>
            <a href="#" className="hover:text-white/60 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
