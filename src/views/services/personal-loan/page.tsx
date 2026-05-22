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
      subtitle: isHi ? "किसी भी व्यक्तिगत जरूरत के लिए त्वरित नकद" : "Quick cash for any personal need",
      description: isHi
        ? "यूनाइटेड फाइनेंस पर्सनल लोन से पूंजी प्रवाह के साथ अपने लक्ष्यों को सशक्त बनाएं और उन्हें नई ऊंचाइयों पर ले जाएं। हम त्वरित, अनुकूलनीय पर्सनल लोन प्रदान करते हैं ताकि यह सुनिश्चित हो सके कि आपातकाल या व्यक्तिगत आकांक्षाओं के समय वित्तपोषण कभी भी बाधा न बने। हमने अनुभव के हर चरण को अनुकूलित किया है ताकि एक परेशानी मुक्त और त्वरित संवितरण प्रक्रिया सुनिश्चित हो सके।"
        : "Empower your goals and take them to new heights with capital infusion from the United Finance Personal Loan. We offer quick, customizable personal loans to ensure funding is never an obstacle in times of emergency or personal aspirations. We have optimised every step of the experience to guarantee a hassle-free and swift disbursal process.",
      heroImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=1600&q=80",
      color: "text-rose-500",
      bgColor: "bg-rose-50",
      gradientFrom: "bg-rose-600",
      gradientTo: "bg-pink-400",
      icon: <Shield size={22} />,
      highlights: [
        { label: isHi ? "अधिकतम ऋण राशि" : "Max Loan Amount", value: isHi ? "₹10 लाख" : "₹10 Lakhs" },
        { label: isHi ? "प्रसंस्करण समय" : "Processing Time", value: isHi ? "2 कार्य दिवस" : "Within 2 Days" },
        { label: isHi ? "प्रोसेसिंग शुल्क" : "Processing Fee", value: isHi ? "2% + 18% GST" : "2% + 18% GST" },
        { label: isHi ? "पुनर्भुगतान मोड" : "Repayment Mode", value: isHi ? "Cash/PDC/NACH" : "Cash/PDC/NACH" },
      ],
      features: isHi ? [
        "व्यक्तिगत जरूरतों के लिए ₹10 लाख तक का बड़ा ऋण स्वीकृति",
        "पूर्णतः संपार्श्विक-मुक्त (collateral-free) पर्सनल लोन, शून्य सुरक्षा के साथ",
        "अत्यधिक सरल और पूरी करने में आसान पात्रता मानदंड",
        "दस्तावेज़ीकरण के लिए न्यूनतम आवश्यकता और तेज प्रसंस्करण",
        "2 कार्य दिवसों के भीतर तत्काल अनुमोदन और त्वरित संवितरण",
        "अत्यधिक प्रतिस्पर्धी और आकर्षक पर्सनल लोन ब्याज दरें",
        "बिल्कुल शून्य छिपे हुए शुल्क के साथ पूर्ण पारदर्शिता",
        "परेशानी मुक्त, पूरी तरह ऑनलाइन डिजिटल आवेदन प्रावधान",
      ] : [
        "Sizable loan sanction up to Rs. 10 Lakhs for personal needs",
        "Completely collateral-free personal loan with zero security",
        "Highly simplified and easy-to-meet eligibility criteria",
        "Minimal requirement for documentation & fast processing",
        "Instant approval and swift disbursal within 2 working days",
        "Highly competitive and attractive personal loan interest rates",
        "Complete transparency with absolutely zero hidden charges",
        "Hassle-free, completely online digital application provision",
      ],
      eligibility: isHi ? [
        "आयु 21-60 वर्ष के बीच",
        "न्यूनतम ₹15,000 मासिक आय या समकक्ष व्यावसायिक आय",
        "वैध केवाईसी दस्तावेज और पते का प्रमाण",
        "अच्छा क्रेडिट इतिहास (CIBIL 650+)",
        "भारतीय निवासी और केवाईसी अनुपालन के साथ",
        "स्थिर रोजगार या व्यावसायिक आय का प्रमाण",
      ] : [
        "Age between 21–60 years",
        "Minimum monthly income of ₹15,000 or equivalent business income",
        "Valid KYC documents and address proof",
        "Good credit history (CIBIL 650+)",
        "Indian resident with KYC compliance",
        "Proof of stable employment or business income",
      ],
      documents: isHi ? [
        "आवेदक का पासपोर्ट आकार का फोटो",
        "पहचान प्रमाण (पैन कार्ड, आधार कार्ड, ड्राइविंग लाइसेंस)",
        "पता प्रमाण (बिजली बिल, पासपोर्ट, किराया समझौता)",
        "आय प्रमाण (वेतन पर्ची / बैंक स्टेटमेंट पिछले 6 महीने)",
        "नवीनतम आईटीआर (स्व-रोजगार के लिए)",
      ] : [
        "Passport-size photograph of the applicant",
        "Identity Proof (PAN Card, Aadhaar Card, Driving License)",
        "Address Proof (Electricity bill, Passport, Rent agreement)",
        "Income Proof (Salary slips / Bank statements last 6 months)",
        "Latest ITR (for self-employed applicants)",
      ],
    }} />
  );
}
