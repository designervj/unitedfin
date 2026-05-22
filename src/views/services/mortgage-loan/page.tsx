import ServiceDetailPage from "../ServiceDetailPage";
import { Landmark } from "lucide-react";
import { getTranslation } from "../../../lib/translations";

export default function MortgageLoan({ locale }: { locale: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

  return (
    <ServiceDetailPage locale={locale} service={{
      slug: "mortgage-loan",
      title: isHi ? "मॉर्टगेज लोन" : "Mortgage Loan",
      subtitle: isHi ? "अपनी संपत्ति के मूल्य का लाभ उठाएं" : "Unlock your property's value",
      description: isHi 
        ? "प्रतिस्पर्धी दरों पर उच्च मूल्य के ऋण प्राप्त करने के लिए अपनी आवासीय या व्यावसायिक संपत्ति का लाभ उठाएं। व्यवसाय विस्तार, उच्च शिक्षा, या चिकित्सा आपात स्थितियों के लिए धन प्राप्त करें।" 
        : "Leverage the equity in your residential or commercial property to secure high-value loans at competitive rates. Fund business expansion, higher education, or medical emergencies.",
      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeefa?auto=format&fit=crop&w=1600&q=80",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      gradientFrom: "bg-emerald-600",
      gradientTo: "bg-teal-400",
      icon: <Landmark size={22} />,
      highlights: [
        { label: isHi ? "अधिकतम ऋण" : "Max Loan", value: isHi ? "₹2 करोड़" : "₹2 Crore" },
        { label: isHi ? "ब्याज दर" : "Interest Rate", value: isHi ? "13% से शुरू" : "From 13%" },
        { label: isHi ? "एलटीवी अनुपात" : "LTV Ratio", value: isHi ? "70% तक" : "Up to 70%" },
        { label: isHi ? "ऋण अवधि" : "Tenure", value: isHi ? "15 वर्ष तक" : "Up to 15 Yrs" },
      ],
      features: isHi ? [
        "संपत्ति के बदले ₹2 करोड़ तक की उच्च ऋण राशि",
        "आवासीय और व्यावसायिक संपत्ति संपार्श्विक के रूप में स्वीकार्य",
        "संपत्ति के बाजार मूल्य का 70% तक ऋण-टू-मूल्य (LTV) अनुपात",
        "आसान ईएमआई के लिए 15 वर्ष तक की लंबी पुनर्भुगतान अवधि",
        "किसी भी उद्देश्य के लिए धन का उपयोग करें — व्यवसाय, शिक्षा, चिकित्सा, व्यक्तिगत",
        "कम दरों पर अन्य उधारदाताओं से बैलेंस ट्रांसफर की सुविधा",
        "घर पर ही कानूनी और मूल्यांकन सहायता प्रदान की जाती है",
      ] : [
        "High loan amounts up to ₹2 Crore against property",
        "Residential and commercial property accepted as collateral",
        "Loan-to-value (LTV) ratio up to 70% of property market value",
        "Long repayment tenure up to 15 years for easier EMIs",
        "Use funds for any purpose — business, education, medical, personal",
        "Balance transfer facility from other lenders at lower rates",
        "Door-step legal and valuation support provided",
      ],
      eligibility: isHi ? [
        "ऋण परिपक्वता पर आयु 21-70 वर्ष के बीच",
        "न्यूनतम ₹25,000/माह के साथ वेतनभोगी या स्थिर आय वाले स्व-नियोजित",
        "स्पष्ट शीर्षक वाली संपत्ति (आवासीय या व्यावसायिक)",
        "संपत्ति सभी प्रकार के भारों (encumbrances) से मुक्त होनी चाहिए",
        "CIBIL स्कोर 650 या उससे अधिक",
        "आरबीआई-अनुमोदित शहर या कस्बे में संपत्ति",
      ] : [
        "Age between 21–70 years at loan maturity",
        "Salaried with minimum ₹25,000/month or self-employed with stable income",
        "Clear title property (residential or commercial)",
        "Property should be free from encumbrances",
        "CIBIL score 650 or above",
        "Property in an RBI-approved city or town",
      ],
      documents: isHi ? [
        "आधार कार्ड / पैन कार्ड (केवाईसी)",
        "आय का प्रमाण — सैलरी स्लिप / आईटीआर (पिछले 2 वर्ष)",
        "बैंक स्टेटमेंट (पिछले 12 महीने)",
        "संपत्ति का टाइटल डीड और दस्तावेजों की पूरी चेन",
        "अनुमोदित भवन योजना और एनओसी",
        "संपत्ति कर रसीदें",
        "भार रहित प्रमाण पत्र (Encumbrance certificate)",
      ] : [
        "Aadhaar Card / PAN Card (KYC)",
        "Income proof — salary slips / ITR (last 2 years)",
        "Bank statements (last 12 months)",
        "Property title deed and chain of documents",
        "Approved building plan and NOC",
        "Property tax receipts",
        "Encumbrance certificate",
      ],
    }} />
  );
}
