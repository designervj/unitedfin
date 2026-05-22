import ServiceDetailPage from "../ServiceDetailPage";
import { TrendingUp } from "lucide-react";
import { getTranslation } from "../../../lib/translations";

export default function MsmeLoan({ locale }: { locale: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

  return (
    <ServiceDetailPage locale={locale} service={{
      slug: "msme-loan",
      title: isHi ? "एमएसएमई लोन" : "MSME Loan",
      subtitle: isHi ? "सूक्ष्म और लघु उद्यमों को सशक्त बनाना" : "Empowering micro & small enterprises",
      description: isHi 
        ? "त्वरित, लचीले और किफायती वित्तपोषण के साथ सूक्ष्म उद्यमियों और छोटे व्यवसाय स्वामियों को सशक्त बनाना। खुदरा दुकानों से लेकर विनिर्माण इकाइयों तक — हम प्रत्येक एमएसएमई का समर्थन करते हैं।" 
        : "Empowering micro-entrepreneurs and small business owners with fast, flexible, and affordable financing. From retail shops to manufacturing units — we support every MSME.",
      heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      gradientFrom: "bg-purple-600",
      gradientTo: "bg-purple-400",
      icon: <TrendingUp size={22} />,
      highlights: [
        { label: isHi ? "ऋण राशि" : "Loan Amount", value: isHi ? "₹5 हजार–30 लाख" : "₹5K–30L" },
        { label: isHi ? "ब्याज दर" : "Interest Rate", value: isHi ? "16% से शुरू" : "From 16%" },
        { label: isHi ? "कलेक्शन" : "Collection", value: isHi ? "दैनिक / मासिक" : "Daily / Monthly" },
        { label: isHi ? "प्रसंस्करण" : "Processing", value: isHi ? "उसी दिन" : "Same Day" },
      ],
      features: isHi ? [
        "₹5,000 से ₹30 लाख तक की ऋण राशि",
        "लचीला पुनर्भुगतान — दैनिक, साप्ताहिक या मासिक विकल्प",
        "ग्रामीण और अर्ध-शहरी उधारकर्ताओं के लिए घर पर बैंकिंग (doorstep banking) सुविधा",
        "सूक्ष्म ऋण राशियों के लिए किसी गारंटर की आवश्यकता नहीं",
        "सरल और त्वरित दस्तावेज़ीकरण प्रक्रिया",
        "सभी प्रकार के सूक्ष्म व्यवसायों का समर्थन — खुदरा, कृषि, कारीगर",
        "समय पर पुनर्भुगतान पर बढ़ी हुई सीमाओं के साथ बार-बार ऋण सुविधा",
      ] : [
        "Loan amounts starting from ₹5,000 to ₹30 Lakhs",
        "Flexible repayment — daily, weekly, or monthly options",
        "Doorstep banking for rural and semi-urban borrowers",
        "No guarantor required for micro loan amounts",
        "Simple and fast documentation process",
        "Supports all types of micro businesses — retail, agri, artisan",
        "Repeat loan facility with enhanced limits on timely repayment",
      ],
      eligibility: isHi ? [
        "आयु 18-60 वर्ष के बीच",
        "कम से कम 1 वर्ष से सूक्ष्म या लघु उद्यम चल रहा हो",
        "व्यावसायिक गतिविधि का वैध प्रमाण",
        "मासिक आय/राजस्व ₹15,000 से अधिक",
        "लागू सेवा क्षेत्र का निवासी",
        "कोई सक्रिय ऋण डिफॉल्ट इतिहास नहीं",
      ] : [
        "Age between 18–60 years",
        "Running a micro or small enterprise for at least 1 year",
        "Valid proof of business activity",
        "Monthly income/revenue above ₹15,000",
        "Resident of the applicable service area",
        "No active loan default history",
      ],
      documents: isHi ? [
        "आधार कार्ड / मतदाता पहचान पत्र (केवाईसी)",
        "पासपोर्ट आकार के फोटो",
        "व्यावसायिक गतिविधि का प्रमाण (तस्वीरें, इनवॉइस)",
        "बैंक पासबुक / स्टेटमेंट (पिछले 6 महीने)",
        "पता प्रमाण (बिजली बिल / किराया समझौता)",
        "एमएसएमई/उद्यम पंजीकरण (यदि उपलब्ध हो)",
      ] : [
        "Aadhaar Card / Voter ID (KYC)",
        "Passport-size photographs",
        "Proof of business activity (photos, invoices)",
        "Bank passbook / statement (last 6 months)",
        "Address proof (electricity bill / rent agreement)",
        "MSME/Udyam Registration (if available)",
      ],
    }} />
  );
}
