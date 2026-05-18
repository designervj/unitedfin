import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LogoIcon = () => (
  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M50 15 A35 35 0 0 0 50 85" fill="none" stroke="#00A2D9" strokeWidth="18" strokeLinecap="butt"/>
    <path d="M50 15 A35 35 0 0 1 50 85" fill="none" stroke="#862B84" strokeWidth="18" strokeDasharray="20 10" strokeLinecap="butt"/>
    <rect x="25" y="45" width="6" height="30" fill="#EF7E22" />
    <rect x="35" y="35" width="6" height="40" fill="#EF7E22" />
    <rect x="45" y="25" width="6" height="50" fill="#EF7E22" />
  </svg>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return `font-sans font-medium text-[13px] tracking-wider transition-colors uppercase flex items-center group-hover:text-brand-purple ${
      location.pathname === path ? "text-brand-blue font-semibold" : "text-gray-800"
    }`;
  };

  const getMobileLinkClass = (path: string) => {
    return `block px-3 py-3 text-[14px] font-medium border-b border-gray-100 ${
      location.pathname === path ? "text-brand-blue" : "text-gray-800"
    }`;
  };

  const renderDropdownMenu = (items: { label: string; to: string }[]) => (
    <div className="absolute top-[88px] left-0 md:bg-white bg-gray-50 border-t-2 border-brand-blue shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[240px] z-[60] flex flex-col py-2">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          className="px-5 py-3 text-sm text-gray-700 hover:text-brand-blue hover:bg-blue-50 font-medium tracking-wide uppercase transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="w-full relative z-50">
      <div className="bg-[#b31b1b] text-white text-[12px] py-1 px-4 text-right pr-6 lg:pr-12 md:tracking-wider">
        We are Operational in Uttar Pradesh only!
      </div>
      <nav className="bg-brand-yellow-light shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[88px] items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <LogoIcon />
              <div className="leading-[1.1] pt-1">
                <span className="font-bold text-xl md:text-2xl text-brand-orange block font-serif tracking-widest border-b border-brand-purple pb-[2px]">UNITED</span>
                <span className="text-[10px] md:text-xs text-brand-purple font-semibold tracking-widest block mt-[2px]">FINANCE <span className="text-brand-blue">&</span> LEASING</span>
                <span className="text-[8px] md:text-[9px] text-[#4f6b3e] font-bold block tracking-[0.2em] font-sans">PRIVATE LIMITED</span>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 h-full">
              <div className="h-full flex items-center px-3 hover:bg-yellow-100 transition-colors">
                <Link to="/" className={getLinkClass("/")}>HOME</Link>
              </div>
              
              <div className="h-full group flex items-center px-3 hover:bg-yellow-100 transition-colors cursor-pointer relative">
                <Link to="/about" className={getLinkClass("/about")}>ABOUT US <ChevronDown className="ml-1 w-4 h-4" /></Link>
                {renderDropdownMenu([
                  { label: "About Our Company", to: "/about" },
                  { label: "Board of Directors", to: "/about#directors" }
                ])}
              </div>
              
              <div className="h-full group flex items-center px-3 hover:bg-yellow-100 transition-colors cursor-pointer relative">
                <Link to="/services" className={getLinkClass("/services")}>SERVICES <ChevronDown className="ml-1 w-4 h-4" /></Link>
                {renderDropdownMenu([
                  { label: "Business Loan", to: "/services" },
                  { label: "MSME Loan", to: "/services" },
                  { label: "Gold Loan", to: "/services" },
                  { label: "Two Wheeler Loan", to: "/services" },
                  { label: "Mortgage Loan", to: "/services" },
                  { label: "Personal Loan", to: "/services" }
                ])}
              </div>
              
              <div className="h-full group flex items-center px-3 hover:bg-yellow-100 transition-colors cursor-pointer relative">
                <Link to="/emi-calculator" className={getLinkClass("/emi-calculator")}>EMI PAY <ChevronDown className="ml-1 w-4 h-4" /></Link>
                {renderDropdownMenu([
                  { label: "EMI Payment - QR Code", to: "/emi-calculator" },
                  { label: "EMI Calculator", to: "/emi-calculator" }
                ])}
              </div>
              
              <div className="h-full group flex items-center px-3 hover:bg-yellow-100 transition-colors cursor-pointer relative">
                <Link to="/contact" className={getLinkClass("/contact")}>CONTACT <ChevronDown className="ml-1 w-4 h-4" /></Link>
                {renderDropdownMenu([
                   { label: "Contact Us", to: "/contact" },
                   { label: "Careers", to: "/contact" }
                ])}
              </div>
              
              <div className="pl-4">
                <button className="bg-brand-purple text-white px-5 py-2 rounded-[2px] font-medium text-[13px] shadow hover:bg-brand-purple-dark transition-colors uppercase tracking-[0.1em]">
                  LOGIN
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 focus:outline-none"
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/" onClick={() => setIsOpen(false)} className={getMobileLinkClass("/")}>HOME</Link>
              
              <div className="border-b border-gray-100">
                <Link to="/about" onClick={() => setIsOpen(false)} className={getMobileLinkClass("/about").replace('border-b border-gray-100', '')}>ABOUT US</Link>
                <div className="pl-6 pb-2 space-y-2">
                  <Link to="/about" onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600">Company Profile</Link>
                  <Link to="/about#directors" onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600">Board of Directors</Link>
                </div>
              </div>

              <div className="border-b border-gray-100">
                <Link to="/services" onClick={() => setIsOpen(false)} className={getMobileLinkClass("/services").replace('border-b border-gray-100', '')}>SERVICES</Link>
                <div className="pl-6 pb-2 space-y-2">
                  <Link to="/services" onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600">Business Loan</Link>
                  <Link to="/services" onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600">MSME Loan</Link>
                  <Link to="/services" onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600">Gold Loan</Link>
                  <Link to="/services" onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600">Two Wheeler Loan</Link>
                  <Link to="/services" onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600">Mortgage Loan</Link>
                  <Link to="/services" onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600">Personal Loan</Link>
                </div>
              </div>

              <div className="border-b border-gray-100">
                <Link to="/emi-calculator" onClick={() => setIsOpen(false)} className={getMobileLinkClass("/emi-calculator").replace('border-b border-gray-100', '')}>EMI PAY</Link>
                <div className="pl-6 pb-2 space-y-2">
                  <Link to="/emi-calculator" onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600">EMI Payment - QR Code</Link>
                  <Link to="/emi-calculator" onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600">EMI Calculator</Link>
                </div>
              </div>

              <div className="border-b border-gray-100">
                <Link to="/contact" onClick={() => setIsOpen(false)} className={getMobileLinkClass("/contact").replace('border-b border-gray-100', '')}>CONTACT</Link>
                <div className="pl-6 pb-2 space-y-2">
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600">Contact Us</Link>
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600">Careers</Link>
                </div>
              </div>

              <div className="mt-4 px-3">
                <button className="w-full bg-brand-purple text-white px-6 py-3 rounded-[2px] font-medium shadow hover:bg-brand-purple-dark text-center uppercase tracking-widest text-[14px]">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
