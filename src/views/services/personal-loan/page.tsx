import ServiceDetailPage from "../ServiceDetailPage";
import { Shield } from "lucide-react";

export default function PersonalLoan({ locale }: { locale: string }) {
  return (
    <ServiceDetailPage locale={locale} service={{
      slug: "personal-loan",
      title: "Personal Loan",
      subtitle: "Quick cash for any personal need",
      description: "Quick and hassle-free personal loans for medical emergencies, home renovation, travel, education, weddings — or any personal requirement. No collateral required.",
      heroImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=1600&q=80",
      color: "text-rose-500",
      bgColor: "bg-rose-50",
      gradientFrom: "bg-rose-600",
      gradientTo: "bg-pink-400",
      icon: <Shield size={22} />,
      highlights: [
        { label: "Max Loan", value: "₹10 Lakhs" },
        { label: "Interest Rate", value: "From 16%" },
        { label: "Disbursal", value: "48 Hours" },
        { label: "Tenure", value: "Up to 5 Yrs" },
      ],
      features: [
        "No collateral or security required",
        "Loan up to ₹10 Lakhs for salaried and self-employed",
        "Fast approval and disbursal within 48 hours",
        "Flexible repayment from 12 to 60 months",
        "Use for any purpose — medical, travel, wedding, education",
        "Minimal documentation and 100% paperless process",
        "Pre-approved offers for existing customers",
      ],
      eligibility: [
        "Age between 21–60 years",
        "Salaried with minimum net monthly income of ₹15,000",
        "Or self-employed with annual profit above ₹2 Lakhs",
        "Minimum 1 year in current employment / business",
        "CIBIL score 650 or above",
        "Indian resident with valid KYC documents",
      ],
      documents: [
        "Aadhaar Card / PAN Card (KYC)",
        "Passport-size photographs (2)",
        "Salary slips (last 3 months) or latest ITR",
        "Bank statement (last 6 months)",
        "Employment letter / business registration proof",
        "Address proof (utility bill / rental agreement)",
      ],
    }} />
  );
}
