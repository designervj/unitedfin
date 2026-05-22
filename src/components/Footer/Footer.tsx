"use client";

import Link from "next/link";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink, Shield } from "lucide-react";
import { usePathname } from "next/navigation";
import { getTranslation } from "../../lib/translations";

const LogoIcon = () => (
  <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M50 15 A35 35 0 0 0 50 85" fill="none" stroke="#00A2D9" strokeWidth="18" strokeLinecap="butt" />
    <path d="M50 15 A35 35 0 0 1 50 85" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="18" strokeDasharray="20 10" strokeLinecap="butt" />
    <rect x="25" y="45" width="6" height="30" fill="white" />
    <rect x="35" y="35" width="6" height="40" fill="white" />
    <rect x="45" y="25" width="6" height="50" fill="white" />
  </svg>
);

const socials = [
  { icon: <Facebook size={15} className="fill-white" />, href: "#", label: "Facebook" },
  { icon: <span className="text-[12px] font-black text-white">𝕏</span>, href: "#", label: "X" },
  { icon: <Instagram size={15} className="text-white" />, href: "#", label: "Instagram" },
  { icon: <Linkedin size={15} className="fill-white" />, href: "#", label: "LinkedIn" },
  { icon: <Mail size={15} className="text-white" />, href: "mailto:info@unitedfin.in", label: "Email" },
];

export function Footer() {
  const pathname = usePathname();

  // Extract current locale
  const segments = pathname.split("/");
  const currentLocale = ["en", "hi"].includes(segments[1]) ? segments[1] : "en";
  const t = getTranslation(currentLocale);

  const getLocalizedHref = (href: string) => {
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href === "#") {
      return href;
    }
    const cleanHref = href.startsWith("/") ? href : `/${href}`;
    if (cleanHref === "/") {
      return `/${currentLocale}`;
    }
    return `/${currentLocale}${cleanHref}`;
  };

  const navCols = [
    {
      heading: t.common.aboutUs,
      links: [
        { label: t.common.aboutCompany, href: "/about-us" },
        { label: t.common.directors, href: "/board-of-director" },
        { label: t.common.csr, href: "/about/csr" },
        { label: currentLocale === "hi" ? "पूछे जाने वाले प्रश्न" : "FAQs", href: "/faqs" },
        { label: currentLocale === "hi" ? "टेस्टिमोनियल्स" : "Testimonials", href: "/testimonials" },
      ],
    },
    {
      heading: t.common.services,
      links: [
        { label: t.common.businessLoan, href: "/services/business-loan" },
        { label: t.common.msmeLoan, href: "/services/msme-loan" },
        { label: t.common.goldLoan, href: "/services/gold-loan" },
        { label: t.common.twoWheelerLoan, href: "/services/two-wheeler-loan" },
        { label: t.common.mortgageLoan, href: "/services/mortgage-loan" },
        { label: t.common.personalLoan, href: "/services/personal-loan" },
      ],
    },
    {
      heading: currentLocale === "hi" ? "त्वरित लिंक्स" : "Quick Links",
      links: [
        { label: t.common.emiCalculator, href: "/emi-calculator" },
        { label: t.common.privacyPolicy, href: "/" },
        { label: currentLocale === "hi" ? "नियम और शर्तें" : "Terms & Conditions", href: "/" },
        { label: currentLocale === "hi" ? "केवाईसी नीति" : "KYC Policy", href: "/about/csr" },
      ],
    },
    {
      heading: currentLocale === "hi" ? "सूचना" : "Information",
      links: [
        { label: t.common.services, href: "/services" },
        { label: t.common.directors, href: "/board-of-director" },
        { label: t.common.contactUs, href: "/contact" },
        { label: t.common.careers, href: "/contact" },
      ],
    },
  ];

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
                <div className="font-serif font-bold text-[20px] text-white tracking-[0.1em] border-b border-white/30 pb-[2px]">
                  {currentLocale === "hi" ? "यूनाइटेड" : "UNITED"}
                </div>
                <div className="text-[9px] text-white/70 font-bold tracking-[0.22em] mt-[3px]">
                  {currentLocale === "hi" ? "फाइनेंस & लीजिंग" : "FINANCE & LEASING"}
                </div>
                <div className="text-[7px] text-white/50 font-bold tracking-[0.28em] mt-[2px]">
                  {currentLocale === "hi" ? "प्राइवेट लिमिटेड" : "PRIVATE LIMITED"}
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 rounded-full px-3 py-1">
              <Shield size={10} className="text-white" />
              <span className="text-white text-[10px] font-bold tracking-widest uppercase">RBI Registered NBFC</span>
            </div>
          </div>

          {/* Quick Enquiry form */}
          <div>
            <h3 className="font-serif font-bold text-white text-xl mb-5 tracking-wide">{t.common.quickEnquiry}</h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder={t.contactPage.nameInput}
                className="w-full px-4 py-3 bg-white/15 border border-white/20 rounded-xl text-white placeholder:text-white/50 text-sm outline-none focus:bg-white/20 focus:border-white/40 transition-all" 
              />
              <input 
                type="tel" 
                placeholder={t.contactPage.phoneInput}
                className="w-full px-4 py-3 bg-white/15 border border-white/20 rounded-xl text-white placeholder:text-white/50 text-sm outline-none focus:bg-white/20 focus:border-white/40 transition-all" 
              />
              <input 
                type="email" 
                placeholder={t.contactPage.emailInput}
                className="w-full px-4 py-3 bg-white/15 border border-white/20 rounded-xl text-white placeholder:text-white/50 text-sm outline-none focus:bg-white/20 focus:border-white/40 transition-all" 
              />
              <div className="flex gap-3 items-center">
                <span className="text-white/80 text-sm font-medium shrink-0">9 + 10 =</span>
                <input 
                  type="text" 
                  className="w-16 px-3 py-3 bg-white/15 border border-white/20 rounded-xl text-white text-sm text-center outline-none focus:bg-white/20 transition-all" 
                />
                <button 
                  type="submit"
                  className="flex-1 bg-[#3B1040] hover:bg-[#2a0a2e] text-white font-bold py-3 rounded-xl text-sm tracking-wide transition-colors shadow-lg cursor-pointer"
                >
                  {t.common.submit}
                </button>
              </div>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{t.common.followUs}</h4>
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
              <div className="text-gray-900 font-bold text-sm mb-1">{t.common.payViaUpi}</div>
              <p className="text-gray-500 text-[11px] leading-relaxed">
                {t.common.scanUpi}
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
                      <Link href={getLocalizedHref(link.href)}
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
                <h4 className="text-[#FAE9A8] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{t.common.callUs}</h4>
                <div className="space-y-2.5">
                  <a href={`tel:${t.common.phone}`} className="flex items-center gap-2 text-white/60 hover:text-white text-sm group transition-colors">
                    <Phone size={12} className="text-[#EF7E22] shrink-0" /> {t.common.phone}
                  </a>
                  <a href="tel:+919151030011" className="flex items-center gap-2 text-white/60 hover:text-white text-sm group transition-colors">
                    <Phone size={12} className="text-[#EF7E22] shrink-0" /> +91 9151030011
                  </a>
                  <a href={`mailto:${t.common.email}`} className="flex items-center gap-2 text-white/60 hover:text-[#FAE9A8] text-sm transition-colors">
                    <Mail size={12} className="text-[#EF7E22] shrink-0" /> {t.common.email}
                  </a>
                  <p className="text-white/35 text-xs mt-1">
                    {t.common.helpdesk}: <a href="mailto:helpdesk@unitedfin.in" className="text-[#FAE9A8]/70 hover:text-[#FAE9A8] transition-colors">helpdesk@unitedfin.in</a>
                  </p>
                </div>
              </div>

              {/* Grievance Officer */}
              <div>
                <h4 className="text-[#FAE9A8] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{t.common.grievance}</h4>
                <div className="space-y-1">
                  <div className="text-white font-semibold text-sm">{currentLocale === "hi" ? "अनिकेत" : "Aniket"}</div>
                  <div className="text-white/40 text-xs mb-2">{currentLocale === "hi" ? "परिचालन प्रमुख" : "Operation Head"}</div>
                  <a href="tel:+919151766673" className="text-white/55 hover:text-white text-sm block transition-colors">+91 9151766673</a>
                  <a href="mailto:aniket@unitedfin.in" className="text-[#FAE9A8]/80 hover:text-[#FAE9A8] text-sm block transition-colors">aniket@unitedfin.in</a>
                </div>
              </div>

              {/* Offices */}
              <div className="space-y-5">
                <div>
                  <h4 className="text-[#FAE9A8] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">{t.common.headOffice}</h4>
                  <div className="flex gap-2">
                    <MapPin size={12} className="text-[#EF7E22] mt-0.5 shrink-0" />
                    <p className="text-white/45 text-[13px] leading-relaxed">
                      {currentLocale === "hi" 
                        ? "प्लॉट नंबर 121, ब्लॉक-बी, पॉकेट-4, सेक्टर-23 द्वारका, नई दिल्ली — 110075" 
                        : "Plot No 121, Block-B, Pocket-4, Sector-23 Dwarka, New Delhi — 110075"
                      }
                    </p>
                  </div>
                  <a href="#" className="text-[12px] text-[#EF7E22] hover:text-orange-300 flex items-center gap-1 mt-1.5 ml-[20px] font-medium transition-colors">
                    <ExternalLink size={10} /> {t.common.googleMaps}
                  </a>
                </div>
                <div>
                  <h4 className="text-[#FAE9A8] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">{t.common.corporateOffice}</h4>
                  <div className="flex gap-2">
                    <MapPin size={12} className="text-[#EF7E22] mt-0.5 shrink-0" />
                    <p className="text-white/45 text-[13px] leading-relaxed">
                      {currentLocale === "hi"
                        ? "मोनी बाबा रोड, सिनेमा हॉल के सामने, लालगंज, आज़मगढ़, उत्तर प्रदेश — 276202"
                        : "Opp. Cinema Hall, Mouni Baba Road, Lalganj, Azamgarh, UP — 276202"
                      }
                    </p>
                  </div>
                  <a href="#" className="text-[12px] text-[#EF7E22] hover:text-orange-300 flex items-center gap-1 mt-1.5 ml-[20px] font-medium transition-colors">
                    <ExternalLink size={10} /> {t.common.googleMaps}
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
            © {new Date().getFullYear()} {t.common.copyright}
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">{t.common.privacyPolicy}</a>
            <span>·</span>
            <a href="#" className="hover:text-white/60 transition-colors">{currentLocale === "hi" ? "उपयोग की शर्तें" : "Terms of Use"}</a>
            <span>·</span>
            <a href="#" className="hover:text-white/60 transition-colors">{t.common.sitemap}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
