import ServiceDetailPage from "../ServiceDetailPage";
import { Coins } from "lucide-react";
import { getTranslation } from "../../../lib/translations";

export default function GoldLoan({ locale }: { locale: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

  return (
    <ServiceDetailPage locale={locale} service={{
      slug: "gold-loan",
      title: isHi ? "गोल्ड लोन" : "Gold Loan",
      subtitle: isHi ? "अपने सोने के बदले तुरंत नकद" : "Instant cash against your gold",
      description: isHi 
        ? "अधिकतम ऋण-टू-मूल्य (LTV) अनुपात, सुरक्षित तिजोरी भंडारण और न्यूनतम ब्याज दरों के साथ अपने सोने के आभूषणों पर तुरंत नकद प्राप्त करें। न्यूनतम कागजी कार्रवाई के साथ त्वरित स्वीकृति।"
        : "Get instant cash against your gold jewelry with maximum loan-to-value ratio, secure vault storage, and lowest interest rates. Quick approval with minimal documentation.",
      heroImage: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1600&q=80",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      gradientFrom: "bg-amber-500",
      gradientTo: "bg-yellow-400",
      icon: <Coins size={22} />,
      highlights: [
        { label: isHi ? "एलटीवी अनुपात" : "LTV Ratio", value: isHi ? "75% तक" : "Up to 75%" },
        { label: isHi ? "ब्याज दर" : "Interest Rate", value: isHi ? "12% से शुरू" : "From 12%" },
        { label: isHi ? "ऋण स्वीकृति" : "Approval", value: isHi ? "1 घंटा" : "1 Hour" },
        { label: isHi ? "ऋण अवधि" : "Tenure", value: isHi ? "3–24 महीने" : "3–24 Months" },
      ],
      features: isHi ? [
        "मात्र 1 घंटे में तत्काल ऋण स्वीकृति",
        "अधिकतम एलटीवी (ऋण-टू-मूल्य) अनुपात 75% तक",
        "आपके सोने के लिए सुरक्षित और बीमाकृत तिजोरी भंडारण",
        "12% प्रति वर्ष से शुरू होने वाली सबसे कम ब्याज दरें",
        "लचीला पुनर्भुगतान — बुलेट, ईएमआई, या केवल-ब्याज विकल्प",
        "कोई आय प्रमाण या क्रेडिट स्कोर आवश्यक नहीं",
        "मौजूदा गोल्ड लोन पर टॉप-अप सुविधा उपलब्ध",
      ] : [
        "Instant loan approval in as little as 1 hour",
        "Maximum LTV (Loan-to-Value) ratio up to 75%",
        "Safe and insured vault storage for your gold",
        "Lowest interest rates starting from 12% p.a.",
        "Flexible repayment — bullet, EMI, or interest-only options",
        "No income proof or credit score required",
        "Top-up facility available on existing gold loans",
      ],
      eligibility: isHi ? [
        "आयु 18-70 वर्ष के बीच",
        "वैध केवाईसी दस्तावेजों के साथ भारतीय निवासी",
        "संपार्श्विक के रूप में सोने के आभूषण (18-22 कैरेट)",
        "न्यूनतम सोने का वजन 5 ग्राम",
        "गिरवी रखे गए सोने का स्पष्ट स्वामित्व",
      ] : [
        "Age between 18–70 years",
        "Indian resident with valid KYC documents",
        "Gold jewelry (18–22 karat) as collateral",
        "Minimum gold weight of 5 grams",
        "Clear ownership of the gold pledged",
      ],
      documents: isHi ? [
        "आधार कार्ड / पैन कार्ड / मतदाता पहचान पत्र (केवाईसी)",
        "पासपोर्ट आकार के फोटो (2)",
        "पता प्रमाण (आधार / बिजली बिल)",
        "गिरवी रखा जाने वाला सोने का आभूषण (भौतिक रूप से)",
        "सोने के स्वामित्व की रसीद / प्रमाण (यदि उपलब्ध हो)",
      ] : [
        "Aadhaar Card / PAN Card / Voter ID (KYC)",
        "Passport-size photographs (2)",
        "Address proof (Aadhaar / utility bill)",
        "Gold jewelry to be pledged (physical)",
        "Receipt / proof of gold ownership (if available)",
      ],
    }} />
  );
}
