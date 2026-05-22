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
        ? "जब आपके पास सोने की शक्ति हो तो पर्सनल या बिजनेस लोन क्यों लें! मिनटों में अपने सोने के बदले ऋण प्राप्त करें! अपने सोने के आभूषण और आभूषण गिरवी रखकर तत्काल नकद प्राप्त करें। सोने की शुद्धता और कुल वजन के आधार पर उच्च ऋण राशि। विभिन्न योजनाओं में से चुनें; आपकी आवश्यकताओं के लिए बिल्कुल सही विकल्प उपलब्ध है।" 
        : "Why go for Personal or Business loans when you have the power of gold with you! Get a loan against your gold, in minutes! Draw instant Cash by pledging your Gold Ornaments and Jewellery. Higher loan amounts, depending on purity, net weight of the gold. Choose from a range of schemes; there’s one just right for your needs.",
      heroImage: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1600&q=80",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      gradientFrom: "bg-amber-500",
      gradientTo: "bg-yellow-400",
      icon: <Coins size={22} />,
      highlights: [
        { label: isHi ? "ऋण-टू-मूल्य (LTV)" : "Loan-to-Value (LTV)", value: isHi ? "75% तक" : "Up to 75%" },
        { label: isHi ? "प्रसंस्करण समय" : "Processing Time", value: isHi ? "2 कार्य दिवस" : "Within 2 Days" },
        { label: isHi ? "प्रोसेसिंग शुल्क" : "Processing Fee", value: isHi ? "2% + 18% GST" : "2% + 18% GST" },
        { label: isHi ? "पुनर्भुगतान मोड" : "Repayment Mode", value: isHi ? "Cash/PDC/NACH" : "Cash/PDC/NACH" },
      ],
      features: isHi ? [
        "सोने के गहने और आभूषण गिरवी रखकर तत्काल नकद संवितरण",
        "सोने की शुद्धता और वजन के आधार पर अधिकतम संभव ऋण राशि",
        "अपनी पुनर्भुगतान क्षमता के अनुरूप आकर्षक गोल्ड लोन योजनाओं का विकल्प",
        "अत्यंत सुरक्षित, बीमित और आधुनिक तिजोरी भंडारण प्रणाली",
        "न्यूनतम ब्याज दरें और बिना किसी परेशानी के त्वरित मूल्यांकन",
        "बिना किसी आय प्रमाण या पूर्व सिबिल स्कोर की आवश्यकता के ऋण",
        "योग्य ग्राहकों के लिए सरल नवीनीकरण और टॉप-अप सुविधा",
        "पूरी तरह पारदर्शी प्रक्रिया — कोई भी हिडन या अतिरिक्त शुल्क नहीं",
      ] : [
        "Pledge your Gold Ornaments and Jewellery for instant cash",
        "Higher loan amounts based on gold purity and net weight",
        "Choose from a broad range of highly customized schemes",
        "Safe, fully insured, and highly secure vault storage",
        "Attractive and affordable gold loan interest rates",
        "No income proof or previous CIBIL score required",
        "Hassle-free evaluation process and instant evaluation",
        "100% transparent processing with zero hidden charges",
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
        "आवेदक का पासपोर्ट आकार का फोटो",
        "पहचान प्रमाण (पैन कार्ड, ड्राइविंग लाइसेंस, आधार कार्ड)",
        "पता प्रमाण (बिजली बिल, पासपोर्ट, किराया समझौता)",
        "बैंक स्टेटमेंट (पिछले 6 महीने)",
        "गिरवी रखे जाने वाले सोने के आभूषण (भौतिक रूप से)",
      ] : [
        "Passport-size photograph of the applicant",
        "Identity Proof (PAN Card, Driving License, Aadhaar)",
        "Address Proof (Electricity bill, Passport, Rent agreement)",
        "Bank statements (last 6 months)",
        "Physical gold jewelry/ornaments to be pledged",
      ],
    }} />
  );
}
