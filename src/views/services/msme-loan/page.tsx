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
        ? "कम ब्याज दरों पर त्वरित व्यावसायिक ऋण। यूनाइटेड फाइनेंस के साथ, एक पेशेवर के रूप में अपनी क्षमता का एहसास करना और उसका लाभ उठाना एक निश्चितता है। हमारा अनुकूलित और विशेष व्यावसायिक/एमएसएमई ऋण उन विशेषताओं से भरा है जो आपकी विशिष्ट आवश्यकताओं के अनुरूप हैं। हमने आपके लिए परेशानी मुक्त अनुभव सुनिश्चित करने के लिए ऋण आवेदन से लेकर संवितरण और पुनर्भुगतान तक के अनुभव के हर चरण को अनुकूलित किया है।" 
        : "Instant Professional & MSME Loan with Low Interest Rates. With United Finance in your corner, realising and capitalising on your potential as a professional is a certainty. Our customized and specialised professional loan is loaded with features that suit your niche needs. We’ve optimised every step of the experience, right from loan application to disbursal and repayment to ensure you have a hassle-free experience.",
      heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      gradientFrom: "bg-purple-600",
      gradientTo: "bg-purple-400",
      icon: <TrendingUp size={22} />,
      highlights: [
        { label: isHi ? "अधिकतम ऋण राशि" : "Max Loan Amount", value: isHi ? "₹30 लाख" : "₹30 Lakhs" },
        { label: isHi ? "प्रसंस्करण समय" : "Processing Time", value: isHi ? "2 कार्य दिवस" : "Within 2 Days" },
        { label: isHi ? "प्रोसेसिंग शुल्क" : "Processing Fee", value: isHi ? "2% + 18% GST" : "2% + 18% GST" },
        { label: isHi ? "पुनर्भुगतान मोड" : "Repayment Mode", value: isHi ? "Cash/PDC/NACH" : "Cash/PDC/NACH" },
      ],
      features: isHi ? [
        "₹30 लाख तक का पर्याप्त बहुउद्देश्यीय ऋण संवितरण",
        "पेशेवरों और सूक्ष्म उद्यमियों के लिए पूर्णतः संपार्श्विक-मुक्त ऋण",
        "60 महीने तक की लचीली पुनर्भुगतान अवधि",
        "प्रतिस्पर्धी और किफायती व्यावसायिक ब्याज दरें",
        "निःशुल्क पूर्व-भुगतान और फोरक्लोज़र के बेहतरीन लाभ",
        "त्वरित डिजिटल स्वीकृति के साथ ऑनलाइन त्वरित प्रक्रिया",
        "न्यूनतम और बुनियादी दस्तावेज़ीकरण की आवश्यकता",
        "बिना किसी छिपे शुल्क के पूर्ण पारदर्शिता की गारंटी",
      ] : [
        "Ample multi-purpose sanction up to Rs. 30 Lakhs",
        "Collateral-free loan for professionals and small owners",
        "Flexible tenure ranging up to 60 months",
        "Competitive professional loan interest rates",
        "Free prepayment and foreclosure benefits",
        "Online professional loan with quick digital approvals",
        "Minimal and basic documentation process",
        "Complete transparency with absolutely no hidden costs",
      ],
      eligibility: isHi ? [
        "आयु 21-65 वर्ष के बीच",
        "कम से कम 1 वर्ष से सूक्ष्म या लघु उद्यम चल रहा हो",
        "व्यावसायिक गतिविधि का वैध प्रमाण (एमएसएमई/जीएसटी)",
        "मासिक आय/राजस्व ₹15,000 से अधिक",
        "लागू सेवा क्षेत्र का निवासी होना अनिवार्य",
        "कोई सक्रिय ऋण डिफॉल्ट इतिहास नहीं होना चाहिए",
      ] : [
        "Age between 21–65 years",
        "Running a micro or small enterprise/practice for at least 1 year",
        "Valid proof of business activity or professional qualification",
        "Monthly income/revenue above Rs. 15,000",
        "Resident of the applicable service area",
        "No active loan default history",
      ],
      documents: isHi ? [
        "आवेदक का पासपोर्ट आकार का फोटो",
        "पहचान प्रमाण (पैन कार्ड, ड्राइविंग लाइसेंस, आधार कार्ड)",
        "पता प्रमाण (बिजली बिल, पासपोर्ट, किराया समझौता)",
        "बैंक स्टेटमेंट (पिछले 6 महीने)",
        "जीएसटी पंजीकरण प्रमाणपत्र या नवीनतम आईटीआर",
      ] : [
        "Passport-size photograph of the applicant",
        "Identity Proof (PAN Card, Driving License, Aadhaar)",
        "Address Proof (Electricity bill, Passport, Rent agreement)",
        "Bank statements (last 6 months)",
        "GST registration certificate or latest ITR",
      ],
    }} />
  );
}
