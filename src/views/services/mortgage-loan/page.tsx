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
        ? "यूनाइटेड फाइनेंस लोन अगेंस्ट प्रॉपर्टी से पूंजी प्रवाह के साथ अपने व्यवसाय को सशक्त बनाएं और उसे नई ऊंचाइयों पर ले जाएं। जब यूनाइटेड फाइनेंस आपके साथ है, तो एक उद्यमी के रूप में अपनी क्षमता का एहसास करना और उसका लाभ उठाना एक निश्चितता है। हमने परेशानी मुक्त अनुभव सुनिश्चित करने के लिए ऋण आवेदन से लेकर संवितरण और पुनर्भुगतान तक के अनुभव के हर चरण को अनुकूलित किया है।" 
        : "Empower your business and take it to new heights with capital infusion from the United Finance Loan Against Property. With United Finance in your corner, realising and capitalising on your potential is a certainty. We’ve optimised every step of the experience, right from loan application to disbursal and repayment to ensure you have a hassle-free experience.",
      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeefa?auto=format&fit=crop&w=1600&q=80",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      gradientFrom: "bg-emerald-600",
      gradientTo: "bg-teal-400",
      icon: <Landmark size={22} />,
      highlights: [
        { label: isHi ? "अधिकतम ऋण राशि" : "Max Loan Amount", value: isHi ? "₹30 लाख" : "₹30 Lakhs" },
        { label: isHi ? "प्रसंस्करण समय" : "Processing Time", value: isHi ? "2 कार्य दिवस" : "Within 2 Days" },
        { label: isHi ? "प्रोसेसिंग शुल्क" : "Processing Fee", value: isHi ? "2% + 18% GST" : "2% + 18% GST" },
        { label: isHi ? "पुनर्भुगतान मोड" : "Repayment Mode", value: isHi ? "Cash/PDC/NACH" : "Cash/PDC/NACH" },
      ],
      features: isHi ? [
        "संपत्ति के बाजार मूल्य के बदले ₹30 लाख तक का पर्याप्त ऋण संवितरण",
        "आवासीय या व्यावसायिक संपत्तियों को संपार्श्विक (collateral) के रूप में स्वीकार्यता",
        "आसान ईएमआई और अनुकूल पुनर्भुगतान विकल्प",
        "प्रतिस्पर्धी बंधक ब्याज दरें और कानूनी मूल्यांकन में सहायता",
        "निःशुल्क पूर्व-भुगतान और आंशिक-फोरक्लोज़र के बेहतरीन लाभ",
        "न्यूनतम बुनियादी दस्तावेज़ीकरण और तीव्र संवितरण प्रक्रिया",
        "संपत्ति दस्तावेजों की कानूनी और तकनीकी जांच में पूर्ण सहायता",
        "बिना किसी छुपे शुल्क के 100% पारदर्शी बंधक ऋण प्रक्रिया",
      ] : [
        "Ample capital infusion sanction up to Rs. 30 Lakhs",
        "Residential or commercial properties accepted as collateral",
        "Flexible repayment options to ensure absolute peace of mind",
        "Competitive interest rates on Loan Against Property (LAP)",
        "Free prepayment and foreclosure benefits for borrowers",
        "Minimal and basic paper documentation for swift processing",
        "Complete door-step legal and valuation assessment support",
        "100% transparency with absolutely no hidden charges",
      ],
      eligibility: isHi ? [
        "ऋण परिपक्वता पर आयु 21-70 वर्ष के बीच",
        "वेतनभोगी या स्थिर आय वाले स्व-नियोजित पेशेवर/व्यवसायी",
        "आवेदक के नाम पर स्पष्ट कानूनी शीर्षक वाली संपत्ति होना आवश्यक",
        "संपत्ति सभी प्रकार के भारों (encumbrances) से मुक्त होनी चाहिए",
        "अच्छा क्रेडिट इतिहास और CIBIL स्कोर 650 या उससे अधिक",
        "केवाईसी अनुपालन के साथ लागू सेवा क्षेत्र का निवासी",
      ] : [
        "Age between 21–70 years at loan maturity",
        "Salaried or self-employed individual with stable income stream",
        "Clear and marketable legal title in the applicant's name",
        "Property must be entirely free from any legal encumbrances",
        "Good credit history with a CIBIL score of 650 or above",
        "Indian resident with KYC compliance in the operational region",
      ],
      documents: isHi ? [
        "आवेदक का पासपोर्ट आकार का फोटो",
        "पहचान प्रमाण (पैन कार्ड, ड्राइविंग लाइसेंस, आधार कार्ड)",
        "पता प्रमाण (बिजली बिल, पासपोर्ट, किराया समझौता)",
        "बैंक स्टेटमेंट (पिछले 12 महीने)",
        "मूल संपत्ति विलेख (title deed) और स्वामित्व दस्तावेजों की श्रृंखला",
      ] : [
        "Passport-size photograph of the applicant",
        "Identity Proof (PAN Card, Driving License, Aadhaar)",
        "Address Proof (Electricity bill, Passport, Rent agreement)",
        "Bank statements (last 12 months)",
        "Original property title deeds and chain of ownership documents",
      ],
    }} />
  );
}
