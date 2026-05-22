import ServiceDetailPage from "../ServiceDetailPage";
import { Shield } from "lucide-react";
import { getTranslation } from "../../../lib/translations";

export default function PersonalLoan({ locale }: { locale: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

  return (
    <ServiceDetailPage locale={locale} service={{
      slug: "personal-loan",
      title: isHi ? "पर्सनल लोन" : "Personal Loan",
      subtitle: isHi ? "किसी भी व्यक्तिगत आवश्यकता के लिए त्वरित धन" : "Quick cash for any personal need",
      description: isHi 
        ? "चिकित्सा आपात स्थिति, घर के नवीनीकरण, यात्रा, शिक्षा, शादी — या किसी भी व्यक्तिगत आवश्यकता के लिए त्वरित और परेशानी मुक्त व्यक्तिगत ऋण। किसी भी गारंटी की आवश्यकता नहीं है।" 
        : "Quick and hassle-free personal loans for medical emergencies, home renovation, travel, education, weddings — or any personal requirement. No collateral required.",
      heroImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=1600&q=80",
      color: "text-rose-500",
      bgColor: "bg-rose-50",
      gradientFrom: "bg-rose-600",
      gradientTo: "bg-pink-400",
      icon: <Shield size={22} />,
      highlights: [
        { label: isHi ? "अधिकतम ऋण" : "Max Loan", value: isHi ? "₹10 लाख" : "₹10 Lakhs" },
        { label: isHi ? "ब्याज दर" : "Interest Rate", value: isHi ? "16% से शुरू" : "From 16%" },
        { label: isHi ? "ऋण वितरण" : "Disbursal", value: isHi ? "48 घंटे" : "48 Hours" },
        { label: isHi ? "ऋण अवधि" : "Tenure", value: isHi ? "5 वर्ष तक" : "Up to 5 Yrs" },
      ],
      features: isHi ? [
        "किसी संपार्श्विक या सुरक्षा की आवश्यकता नहीं",
        "वेतनभोगी और स्व-नियोजित के लिए ₹10 लाख तक का ऋण",
        "48 घंटे के भीतर त्वरित स्वीकृति और वितरण",
        "12 से 60 महीने तक की लचीली पुनर्भुगतान अवधि",
        "किसी भी उद्देश्य के लिए उपयोग करें — चिकित्सा, यात्रा, शादी, शिक्षा",
        "न्यूनतम दस्तावेज़ीकरण और 100% पेपरलेस प्रक्रिया",
        "मौजूदा ग्राहकों के लिए पूर्व-स्वीकृत (pre-approved) ऑफ़र",
      ] : [
        "No collateral or security required",
        "Loan up to ₹10 Lakhs for salaried and self-employed",
        "Fast approval and disbursal within 48 hours",
        "Flexible repayment from 12 to 60 months",
        "Use for any purpose — medical, travel, wedding, education",
        "Minimal documentation and 100% paperless process",
        "Pre-approved offers for existing customers",
      ],
      eligibility: isHi ? [
        "आयु 21-60 वर्ष के बीच",
        "न्यूनतम ₹15,000 की शुद्ध मासिक आय वाले वेतनभोगी",
        "या ₹2 लाख से अधिक के वार्षिक लाभ वाले स्व-नियोजित",
        "वर्तमान रोजगार / व्यवसाय में न्यूनतम 1 वर्ष",
        "CIBIL स्कोर 650 या उससे अधिक",
        "वैध केवाईसी दस्तावेजों के साथ भारतीय निवासी",
      ] : [
        "Age between 21–60 years",
        "Salaried with minimum net monthly income of ₹15,000",
        "Or self-employed with annual profit above ₹2 Lakhs",
        "Minimum 1 year in current employment / business",
        "CIBIL score 650 or above",
        "Indian resident with valid KYC documents",
      ],
      documents: isHi ? [
        "आधार कार्ड / पैन कार्ड (केवाईसी)",
        "पासपोर्ट आकार के फोटो (2)",
        "सैलरी स्लिप (पिछले 3 महीने) या नवीनतम आईटीआर",
        "बैंक स्टेटमेंट (पिछले 6 महीने)",
        "रोजगार पत्र / व्यवसाय पंजीकरण प्रमाण",
        "पता प्रमाण (बिजली बिल / किराया समझौता)",
      ] : [
        "Aadhaar Card / PAN Card (KYC)",
        "Passport-size photographs (2)",
        "Salary slips (last 3 months) or latest ITR",
        "Bank statement (last 6 months)",
        "Employment letter / business registration proof",
        "Address proof (utility bill / rental agreement)",
      ],
    }} />
  );
}
