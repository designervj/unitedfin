import ServiceDetailPage from "../ServiceDetailPage";
import { Bike } from "lucide-react";
import { getTranslation } from "../../../lib/translations";

export default function TwoWheelerLoan({ locale }: { locale: string }) {
  const t = getTranslation(locale);
  const isHi = locale === "hi";

  return (
    <ServiceDetailPage locale={locale} service={{
      slug: "two-wheeler-loan",
      title: isHi ? "टू व्हीलर लोन" : "Two Wheeler Loan",
      subtitle: isHi ? "अपनी सपनों की बाइक के साथ सड़क पर उतरें" : "Hit the road with your dream bike",
      description: isHi 
        ? "तत्काल स्वीकृतियां जो आपके टू-व्हीलर ऋण संवितरण पर अतिरिक्त लाभ देती हैं। यूनाइटेड फाइनेंस टू-व्हीलर लोन के साथ, आप अपनी खुद की बाइक के गौरवशाली मालिक बन सकते हैं और हर दिन आराम से काम पर जा सकते हैं। हमारी त्वरित डिजिटल आवेदन प्रक्रिया आपके अनुभव को यथासंभव आरामदायक बनाने के लिए डिज़ाइन की गई है।" 
        : "Instant approvals that give extra mileage on your two wheeler loan disbursal. With United Finance two-wheeler loan, you can be the proud owner of your very own bike and travel comfortably to work every day. Our quick digital application process is designed to make your experience as comfortable as possible.",
      heroImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      gradientFrom: "bg-blue-600",
      gradientTo: "bg-cyan-400",
      icon: <Bike size={22} />,
      highlights: [
        { label: isHi ? "अधिकतम ऋण (LTV)" : "Max Loan-to-Value (LTV)", value: isHi ? "100% तक" : "Up to 100%" },
        { label: isHi ? "प्रसंस्करण समय" : "Processing Time", value: isHi ? "2 कार्य दिवस" : "Within 2 Days" },
        { label: isHi ? "प्रोसेसिंग शुल्क" : "Processing Fee", value: isHi ? "2% + 18% GST" : "2% + 18% GST" },
        { label: isHi ? "पुनर्भुगतान मोड" : "Repayment Mode", value: isHi ? "Cash/PDC/NACH" : "Cash/PDC/NACH" },
      ],
      features: isHi ? [
        "विशेष मामलों में ऑन-रोड वाहन मूल्य का 100% तक ऋण वित्तपोषण",
        "अत्यंत प्रतिस्पर्धी ब्याज दरें और किफायती मासिक किस्तें",
        "36 महीने तक की लचीली और सुविधाजनक पुनर्भुगतान अवधि",
        "त्वरित प्रसंस्करण समय — केवल 2 कार्य दिवसों में संवितरण",
        "न्यूनतम दस्तावेज़ीकरण और 100% डिजिटल आवेदन प्रक्रिया",
        "बिना किसी गुप्त शुल्क या कमीशन के पूर्ण पारदर्शिता की गारंटी",
        "सभी प्रमुख ब्रांडों और मॉडलों के लिए ऋण उपलब्धता",
        "डीलरशिप से कोटेशन पर तत्काल मूल्यांकन और सहायता",
      ] : [
        "Maximum Loan-to-Value financing up to 100% in select cases",
        "Attractive interest rates tailored to fit your budget",
        "Flexible repayment tenures spanning up to 36 months",
        "Quick digital application process with super fast approvals",
        "Disbursal processed smoothly within just 2 working days",
        "Minimal requirement for paperwork and documentation",
        "100% complete transparency with absolutely no hidden costs",
        "Easy financing for all major motorcycle and scooter brands",
      ],
      eligibility: isHi ? [
        "आयु 18-65 वर्ष के बीच",
        "वेतनभोगी या स्व-नियोजित भारतीय नागरिक",
        "न्यूनतम शुद्ध मासिक आय ₹10,000",
        "गंतव्य डीलरशिप से वैध वाहन कोटेशन",
        "सक्रिय केवाईसी दस्तावेजों के साथ वर्तमान पते का प्रमाण",
        "कोई सक्रिय भुगतान चूक या खराब क्रेडिट इतिहास नहीं",
      ] : [
        "Age between 18–65 years",
        "Salaried or self-employed Indian resident",
        "Minimum net monthly income of Rs. 10,000",
        "Valid vehicle quotation from an authorized dealership",
        "Current address proof with active KYC compliance",
        "No history of payment defaults or bad credit record",
      ],
      documents: isHi ? [
        "आवेदक का पासपोर्ट आकार का फोटो",
        "पहचान प्रमाण (पैन कार्ड, ड्राइविंग लाइसेंस, आधार कार्ड)",
        "पता प्रमाण (बिजली बिल, पासपोर्ट, किराया समझौता)",
        "बैंक स्टेटमेंट (पिछले 6 महीने)",
        "डीलरशिप से प्राप्त दो-पहिया वाहन का आधिकारिक कोटेशन",
      ] : [
        "Passport-size photograph of the applicant",
        "Identity Proof (PAN Card, Driving License, Aadhaar)",
        "Address Proof (Electricity bill, Passport, Rent agreement)",
        "Bank statements (last 6 months)",
        "Official two-wheeler quotation from an authorized dealership",
      ],
    }} />
  );
}
