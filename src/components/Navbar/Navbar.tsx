"use client";

import { Menu, X, ChevronDown, Phone, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { getTranslation } from "../../lib/translations";

const LogoIcon = () => (
  <svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M50 15 A35 35 0 0 0 50 85" fill="none" stroke="#00A2D9" strokeWidth="18" strokeLinecap="butt"/>
    <path d="M50 15 A35 35 0 0 1 50 85" fill="none" stroke="#862B84" strokeWidth="18" strokeDasharray="20 10" strokeLinecap="butt"/>
    <rect x="25" y="45" width="6" height="30" fill="#EF7E22" />
    <rect x="35" y="35" width="6" height="40" fill="#EF7E22" />
    <rect x="45" y="25" width="6" height="50" fill="#EF7E22" />
  </svg>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  
  const pathname = usePathname() || "";
  const router = useRouter();

  // Extract current locale
  const segments = pathname.split("/");
  const currentLocale = ["en", "hi"].includes(segments[1]) ? segments[1] : "en";
  const t = getTranslation(currentLocale);

  const switchLanguage = (lang: string) => {
    const currentSegments = pathname.split("/");
    if (["en", "hi"].includes(currentSegments[1])) {
      currentSegments[1] = lang;
    } else {
      currentSegments.splice(1, 0, lang);
    }
    const newPath = currentSegments.join("/") || "/";
    router.push(newPath);
  };

  const getLocalizedHref = (href: string) => {
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return href;
    }
    const cleanHref = href.startsWith("/") ? href : `/${href}`;
    if (cleanHref === "/") {
      return `/${currentLocale}`;
    }
    return `/${currentLocale}${cleanHref}`;
  };

  const navLinks = [
    { label: t.common.home, href: "/" },
    {
      label: t.common.aboutUs,
      href: "/about",
      children: [
        { label: t.common.aboutCompany, href: "/about" },
        { label: t.common.directors, href: "/about/directors" },
        { label: t.common.csr, href: "/about/csr" },
      ],
    },
    {
      label: t.common.services,
      href: "/services",
      children: [
        { label: t.common.businessLoan, href: "/services/business-loan" },
        { label: t.common.msmeLoan, href: "/services/msme-loan" },
        { label: t.common.goldLoan, href: "/services/gold-loan" },
        { label: t.common.twoWheelerLoan, href: "/services/two-wheeler-loan" },
        { label: t.common.mortgageLoan, href: "/services/mortgage-loan" },
        { label: t.common.personalLoan, href: "/services/personal-loan" },
      ],
    },
    {
      label: t.common.emiPay,
      href: "/emi-calculator",
      children: [
        { label: t.common.emiCalculator, href: "/emi-calculator" },
        { label: t.common.emiPaymentQr, href: "/emi-payment-qr-code" },
      ],
    },
    {
      label: t.common.contact,
      href: "/contact",
      children: [
        { label: t.common.contactUs, href: "/contact" },
        { label: t.common.careers, href: "/contact" },
      ],
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    const locHref = getLocalizedHref(href);
    return pathname === locHref;
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-[#b31b1b] text-white text-[11px] py-2 md:py-1.5 px-4 md:px-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 md:gap-4">
        <div className="flex items-center justify-between gap-4 md:contents">
          <span className="flex items-center gap-2 shrink-0">
            <Phone size={11} className="opacity-70" />
            <span className="opacity-90">{t.common.phone} &nbsp;|&nbsp; {t.common.email}</span>
          </span>
          
          {/* Premium Language Switcher Capsule on Mobile */}
          <div className="flex md:hidden items-center bg-black/25 backdrop-blur-sm rounded-full p-0.5 border border-white/10 shrink-0 select-none">
            <button 
              onClick={() => switchLanguage("en")} 
              className={`px-2.5 py-0.5 rounded-full font-bold tracking-wider transition-all text-[8px] cursor-pointer ${
                currentLocale === "en" 
                  ? "bg-[#EF7E22] text-white shadow-md shadow-orange-950/20" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              EN
            </button>
            <button 
              onClick={() => switchLanguage("hi")} 
              className={`px-2.5 py-0.5 rounded-full font-bold tracking-wider transition-all text-[8px] cursor-pointer ${
                currentLocale === "hi" 
                  ? "bg-[#EF7E22] text-white shadow-md shadow-orange-950/20" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              हिन्दी
            </button>
          </div>
        </div>
        
        {/* Premium Seamless Marquee Bar */}
        <div className="flex-1 marquee-container relative flex items-center overflow-hidden h-4 select-none">
          <div className="marquee-content font-semibold tracking-wide">
            <span className="flex-shrink-0 pr-24 flex items-center gap-1.5 text-white/90">
              <span className="text-[#FAE9A8] font-bold">⚠️</span> {t.common.operationalMarquee}
            </span>
            <span className="flex-shrink-0 pr-24 flex items-center gap-1.5 text-white/90">
              <span className="text-[#FAE9A8] font-bold">⚠️</span> {t.common.operationalMarquee}
            </span>
          </div>
        </div>
        
        {/* Premium Language Switcher Capsule on Desktop */}
        <div className="hidden md:flex items-center bg-black/25 backdrop-blur-sm rounded-full p-0.5 border border-white/10 shrink-0 select-none">
          <button 
            onClick={() => switchLanguage("en")} 
            className={`px-3 py-0.5 rounded-full font-bold tracking-wider transition-all text-[9px] cursor-pointer ${
              currentLocale === "en" 
                ? "bg-[#EF7E22] text-white shadow-md shadow-orange-950/20" 
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            EN
          </button>
          <button 
            onClick={() => switchLanguage("hi")} 
            className={`px-3 py-0.5 rounded-full font-bold tracking-wider transition-all text-[9px] cursor-pointer ${
              currentLocale === "hi" 
                ? "bg-[#EF7E22] text-white shadow-md shadow-orange-950/20" 
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            हिन्दी
          </button>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5 border-b border-gray-100"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href={getLocalizedHref("/")} className="flex items-center gap-3 group">
              <LogoIcon />
              <div className="leading-none">
                <div className="font-serif font-bold text-[18px] text-[#EF7E22] tracking-[0.12em] border-b border-[#3B1040] pb-[2px]">
                  {currentLocale === "hi" ? "यूनाइटेड" : "UNITED"}
                </div>
                <div className="text-[9px] text-[#3B1040] font-bold tracking-[0.18em] mt-[3px]">
                  {currentLocale === "hi" ? "फाइनेंस & लीजिंग" : "FINANCE & LEASING"}
                </div>
                <div className="text-[7px] text-[#4f6b3e] font-semibold tracking-[0.22em] mt-[1px]">
                  {currentLocale === "hi" ? "प्राइवेट लिमिटेड" : "PRIVATE LIMITED"}
                </div>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <Link
                      href={getLocalizedHref(link.href)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-[13px] font-semibold tracking-wide transition-all ${
                        isActive(link.href)
                          ? "text-[#EF7E22]"
                          : "text-gray-700 hover:text-[#EF7E22] hover:bg-orange-50"
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={13} className="opacity-50 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 min-w-[200px] overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={getLocalizedHref(child.href)}
                            className="flex items-center gap-2 px-4 py-2.5 text-[13px] text-gray-600 hover:text-[#EF7E22] hover:bg-orange-50 font-medium transition-colors"
                          >
                            <span className="w-1 h-1 rounded-full bg-orange-300 flex-shrink-0" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={getLocalizedHref(link.href)}
                    className={`px-4 py-2 rounded-lg text-[13px] font-semibold tracking-wide transition-all ${
                      isActive(link.href)
                        ? "text-[#EF7E22]"
                        : "text-gray-700 hover:text-[#EF7E22] hover:bg-orange-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link href={getLocalizedHref("/services")} className="hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-[#EF7E22] to-[#f5a623] text-white font-bold px-5 py-2 rounded-lg text-[13px] tracking-wide shadow-md shadow-orange-300/30 cursor-pointer"
                >
                  {t.common.applyNow}
                </motion.button>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenMobile(openMobile === link.label ? null : link.label)
                          }
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors cursor-pointer"
                        >
                          {link.label}
                          <ChevronDown
                            size={15}
                            className={`transition-transform ${openMobile === link.label ? "rotate-180 text-orange-500" : "opacity-40"}`}
                          />
                        </button>
                        <AnimatePresence>
                          {openMobile === link.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={getLocalizedHref(child.href)}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-2 px-4 py-2.5 text-[13px] text-gray-600 hover:text-orange-500 font-medium"
                                >
                                  <span className="w-1 h-1 rounded-full bg-orange-300 flex-shrink-0" />
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={getLocalizedHref(link.href)}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-[14px] font-semibold transition-colors ${
                          isActive(link.href)
                            ? "text-orange-500 bg-orange-50"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Language Switcher */}
                <div className="flex items-center justify-center gap-4 py-3 border-t border-gray-100 mt-2">
                  <button 
                    onClick={() => { switchLanguage("en"); setIsOpen(false); }}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold border transition-all ${currentLocale === "en" ? "bg-orange-50 border-orange-200 text-[#EF7E22]" : "border-gray-200 text-gray-600"}`}
                  >
                    English
                  </button>
                  <button 
                    onClick={() => { switchLanguage("hi"); setIsOpen(false); }}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold border transition-all ${currentLocale === "hi" ? "bg-orange-50 border-orange-200 text-[#EF7E22]" : "border-gray-200 text-gray-600"}`}
                  >
                    हिन्दी
                  </button>
                </div>

                <div className="pt-2">
                  <Link href={getLocalizedHref("/services")} onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-[#EF7E22] to-[#f5a623] text-white font-bold py-3 rounded-xl text-[14px] tracking-wide shadow-md cursor-pointer">
                      {t.common.applyNow}
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
