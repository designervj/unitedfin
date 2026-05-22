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
        ? "आकर्षक ब्याज दरों, 95% तक ऑन-रोड फाइनेंस, कम डाउन पेमेंट और आसान स्वीकृति प्रक्रिया के साथ अपनी सपनों की मोटरसाइकिल या स्कूटर को फाइनेंस करें।" 
        : "Finance your dream motorcycle or scooter with attractive interest rates, up to 95% on-road financing, low down payment, and a hassle-free approval process.",
      heroImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      gradientFrom: "bg-blue-600",
      gradientTo: "bg-cyan-400",
      icon: <Bike size={22} />,
      highlights: [
        { label: isHi ? "अधिकतम फाइनेंस" : "Max Financing", value: isHi ? "95% तक" : "Up to 95%" },
        { label: isHi ? "ब्याज दर" : "Interest Rate", value: isHi ? "15% से शुरू" : "From 15%" },
        { label: isHi ? "डाउन पेमेंट" : "Down Payment", value: isHi ? "केवल 5%" : "Only 5%" },
        { label: isHi ? "ऋण अवधि" : "Tenure", value: isHi ? "4 वर्ष तक" : "Up to 4 Yrs" },
      ],
      features: isHi ? [
        "नए टू-व्हीलर्स के लिए 95% तक ऑन-रोड फाइनेंसिंग",
        "मात्र 5% से शुरू होने वाला न्यूनतम डाउन पेमेंट",
        "सभी प्रमुख ब्रांडों को कवर करता है — हीरो, होंडा, टीवीएस, बजाज, रॉयल एनफील्ड",
        "ऑन-रोड प्रोसेसिंग — सीधे डीलरशिप पर ऋण प्राप्त करें",
        "वेतनभोगी व्यक्तियों के लिए किसी गारंटर की आवश्यकता नहीं",
        "आकर्षक त्योहारी सीजन ऑफर और कैशबैक",
        "12 से 48 महीने तक की लचीली अवधि",
      ] : [
        "Up to 95% on-road financing for new two-wheelers",
        "Low down payment starting from just 5%",
        "Covers all major brands — Hero, Honda, TVS, Bajaj, Royal Enfield",
        "On-road processing — get loan at the dealership",
        "No guarantor required for salaried individuals",
        "Attractive festive season offers and cashback",
        "Flexible tenure from 12 to 48 months",
      ],
      eligibility: isHi ? [
        "आयु 18-65 वर्ष के बीच",
        "वेतनभोगी या स्व-नियोजित व्यक्ति",
        "न्यूनतम मासिक आय ₹10,000",
        "वैध ड्राइविंग लाइसेंस",
        "न्यूनतम 6 महीने का रोजगार / व्यावसायिक निरंतरता",
        "अच्छा क्रेडिट इतिहास (CIBIL 600+)",
      ] : [
        "Age between 18–65 years",
        "Salaried or self-employed individual",
        "Minimum monthly income of ₹10,000",
        "Valid driving license",
        "Minimum 6 months employment / business continuity",
        "Good credit history (CIBIL 600+)",
      ],
      documents: isHi ? [
        "आधार कार्ड / पैन कार्ड (केवाईसी)",
        "ड्राइविंग लाइसेंस",
        "पासपोर्ट आकार के फोटो (2)",
        "सैलरी स्लिप (पिछले 3 महीने) या आईटीआर",
        "बैंक स्टेटमेंट (पिछले 6 महीने)",
        "डीलरशिप से वाहन का कोटेशन",
      ] : [
        "Aadhaar Card / PAN Card (KYC)",
        "Driving License",
        "Passport-size photographs (2)",
        "Salary slips (last 3 months) or latest ITR",
        "Bank statement (last 6 months)",
        "Vehicle quotation from dealership",
      ],
    }} />
  );
}
