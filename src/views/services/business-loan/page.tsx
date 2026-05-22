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
        ? "यूनाइटेड फाइनेंस बिजनेस लोन से पूंजी प्रवाह के साथ अपने व्यवसाय को सशक्त बनाएं और उसे नई ऊंचाइयों पर ले जाएं। हम एमएसएमई क्षेत्र के लिए बिजनेस लोन प्रदान करते हैं और आपकी अनूठी जरूरतों को पूरा करने के लिए हमारी पेशकश को तैयार किया है। यूनाइटेड फाइनेंस भारत के व्यवसाय स्वामियों और उद्यमियों को त्वरित, लघु व्यवसाय ऋण प्रदान करता है ताकि सफलता की ओर प्रयास करते समय वित्तपोषण कभी भी बाधा न बने।" 
        : "Empower your business and take it to new heights with capital infusion from the United Finance Business Loan. We offer business loans for the MSME sector and have designed our offering to match your unique needs. United Finance offers business owners and entrepreneurs of India quick, small business loans to ensure funding is never an obstacle when striving towards success. We have optimised every step of the way to promise a hassle-free and time-efficient experience.",
      heroImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      gradientFrom: "bg-orange-500",
      gradientTo: "bg-orange-400",
      icon: <Building2 size={22} />,
      highlights: [
        { label: isHi ? "अधिकतम ऋण राशि" : "Max Loan Amount", value: isHi ? "₹50 लाख" : "₹50 Lakhs" },
        { label: isHi ? "प्रसंस्करण समय" : "Processing Time", value: isHi ? "2 कार्य दिवस" : "Within 2 Days" },
        { label: isHi ? "प्रोसेसिंग शुल्क" : "Processing Fee", value: isHi ? "2% + 18% GST" : "2% + 18% GST" },
        { label: isHi ? "पुनर्भुगतान मोड" : "Repayment Mode", value: isHi ? "Cash/PDC/NACH" : "Cash/PDC/NACH" },
      ],
      features: isHi ? [
        "व्यवसाय विस्तार और वर्किंग कैपिटल के लिए ₹50 लाख तक का ऋण",
        "ऋण पात्रता मानदंडों को पूरा करना बेहद आसान",
        "दस्तावेज़ीकरण के लिए न्यूनतम आवश्यकता",
        "त्वरित स्वीकृति और त्वरित संवितरण सुविधा",
        "प्रतिस्पर्धी बिजनेस लोन ब्याज दर",
        "बिना किसी छिपे हुए शुल्क के शून्य हिडन चार्जेज",
        "योग्य उद्यमियों के लिए पूर्णतः संपार्श्विक-मुक्त (collateral-free) लोन",
        "परेशानी मुक्त, ऑनलाइन डिजिटल आवेदन की सुविधा",
      ] : [
        "Sizable loan sanction up to Rs. 50 Lakhs for business growth",
        "Easy-to-meet business loan eligibility criteria",
        "Minimal requirement for documentation & zero paperwork",
        "Instant approval and super-fast disbursal",
        "Competitive and highly attractive interest rates",
        "Complete transparency with zero hidden charges",
        "Collateral-free business loan for eligible applicants",
        "Hassle-free, completely online application provision",
      ],
      eligibility: isHi ? [
        "ऋण परिपक्वता पर आयु 21-65 वर्ष के बीच",
        "कम से कम 2 वर्ष से व्यवसाय सुचारू रूप से परिचालन में हो",
        "न्यूनतम वार्षिक टर्नओवर ₹5 लाख",
        "वैध व्यवसाय पंजीकरण / जीएसटी पंजीकरण",
        "अच्छा क्रेडिट स्कोर (CIBIL 650+)",
        "केवाईसी अनुपालन के साथ भारतीय निवासी",
      ] : [
        "Age between 21–65 years at loan maturity",
        "Business in active operation for at least 2 years",
        "Minimum annual turnover of Rs. 5 Lakhs",
        "Valid business registration / GST registration",
        "Good credit score (CIBIL 650+)",
        "Indian resident with KYC compliance",
      ],
      documents: isHi ? [
        "आवेदक का पासपोर्ट आकार का फोटो",
        "पहचान प्रमाण (पैन कार्ड, ड्राइविंग लाइसेंस, आधार कार्ड)",
        "पता प्रमाण (बिजली बिल, पासपोर्ट, किराया समझौता)",
        "बैंक स्टेटमेंट (पिछले 12 महीने)",
        "जीएसटी पंजीकरण प्रमाणपत्र या नवीनतम आईटीआर",
      ] : [
        "Passport-size photograph of the applicant",
        "Identity Proof (PAN Card, Driving License, Aadhaar)",
        "Address Proof (Electricity bill, Passport, Rent agreement)",
        "Bank statements (last 12 months)",
        "GST registration certificate or latest ITR",
      ],
    }} />
  );
}
