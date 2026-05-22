import ServiceDetailPage from "../ServiceDetailPage";
import { Building2 } from "lucide-react";
import { getTranslation } from "../../../lib/translations";

export default function BusinessLoan({ locale }: { locale: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

  return (
    <ServiceDetailPage locale={locale} service={{
      slug: "business-loan",
      title: isHi ? "बिजनेस लोन" : "Business Loan",
      subtitle: isHi ? "तेजी से पूंजी के साथ अपना व्यवसाय बढ़ाएं" : "Grow your business with fast capital",
      description: isHi 
        ? "हमारे लचीले और किफायती बिजनेस लोन के साथ अपने व्यवसाय विस्तार को गति दें, वर्किंग कैपिटल का प्रबंधन करें, उपकरण खरीदें, या अपने बुनियादी ढांचे को अपग्रेड करें।" 
        : "Fuel your business expansion, manage working capital, purchase equipment, or upgrade your infrastructure with our flexible and affordable business loans.",
      heroImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      gradientFrom: "bg-orange-500",
      gradientTo: "bg-orange-400",
      icon: <Building2 size={22} />,
      highlights: [
        { label: isHi ? "अधिकतम ऋण राशि" : "Max Loan Amount", value: isHi ? "₹50 लाख" : "₹50 Lakhs" },
        { label: isHi ? "ब्याज दर" : "Interest Rate", value: isHi ? "14% से शुरू" : "From 14%" },
        { label: isHi ? "ऋण अवधि" : "Tenure", value: isHi ? "5 वर्ष तक" : "Up to 5 Yrs" },
        { label: isHi ? "ऋण स्वीकृति" : "Approval", value: isHi ? "24 घंटे" : "24 Hours" },
      ],
      features: isHi ? [
        "व्यवसाय विस्तार और वर्किंग कैपिटल के लिए ₹50 लाख तक का ऋण",
        "न्यूनतम दस्तावेज़ — कोई लंबी कागजी कार्रवाई नहीं",
        "12 से 60 महीने तक की लचीली पुनर्भुगतान अवधि",
        "योग्य उधारकर्ताओं के लिए किसी संपार्श्विक की आवश्यकता नहीं",
        "सीधे आपके व्यावसायिक खाते में त्वरित वितरण",
        "शुरू से अंत तक सहायता के लिए समर्पित संबंध प्रबंधक",
        "आपके क्रेडिट प्रोफाइल के अनुरूप प्रतिस्पर्धी ब्याज दरें",
      ] : [
        "Loans up to ₹50 Lakhs for business expansion and working capital",
        "Minimal documentation — no lengthy paperwork",
        "Flexible repayment tenure from 12 to 60 months",
        "No collateral required for eligible borrowers",
        "Quick disbursal directly to your business account",
        "Dedicated relationship manager for end-to-end support",
        "Competitive interest rates tailored to your credit profile",
      ],
      eligibility: isHi ? [
        "ऋण परिपक्वता पर आयु 21-65 वर्ष के बीच",
        "कम से कम 2 वर्ष से व्यवसाय परिचालन में हो",
        "न्यूनतम वार्षिक टर्नओवर ₹5 लाख",
        "वैध व्यवसाय पंजीकरण / जीएसटी पंजीकरण",
        "अच्छा क्रेडिट स्कोर (CIBIL 650+)",
        "केवाईसी अनुपालन के साथ भारतीय निवासी",
      ] : [
        "Age between 21–65 years at loan maturity",
        "Business in operation for at least 2 years",
        "Minimum annual turnover of ₹5 Lakhs",
        "Valid business registration / GST registration",
        "Good credit score (CIBIL 650+)",
        "Indian resident with KYC compliance",
      ],
      documents: isHi ? [
        "आधार कार्ड / पैन कार्ड (केवाईसी)",
        "व्यवसाय पंजीकरण / जीएसटी प्रमाणपत्र",
        "पिछले 2 वर्षों का आईटीआर पीएंडएल और बैलेंस शीट के साथ",
        "बैंक स्टेटमेंट (पिछले 12 महीने)",
        "पता प्रमाण (बिजली बिल / किराया समझौता)",
        "व्यवसाय निरंतरता प्रमाण",
      ] : [
        "Aadhaar Card / PAN Card (KYC)",
        "Business Registration / GST Certificate",
        "Last 2 years ITR with P&L and Balance Sheet",
        "Bank statements (last 12 months)",
        "Address proof (utility bill / rent agreement)",
        "Business continuity proof",
      ],
    }} />
  );
}
