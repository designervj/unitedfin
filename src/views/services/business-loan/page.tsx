import ServiceDetailPage from "../ServiceDetailPage";
import { Building2 } from "lucide-react";

export default function BusinessLoan({ locale }: { locale: string }) {
  return (
    <ServiceDetailPage locale={locale} service={{
      slug: "business-loan",
      title: "Business Loan",
      subtitle: "Grow your business with fast capital",
      description: "Fuel your business expansion, manage working capital, purchase equipment, or upgrade your infrastructure with our flexible and affordable business loans.",
      heroImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      gradientFrom: "bg-orange-500",
      gradientTo: "bg-orange-400",
      icon: <Building2 size={22} />,
      highlights: [
        { label: "Max Loan Amount", value: "₹50 Lakhs" },
        { label: "Interest Rate", value: "From 14%" },
        { label: "Tenure", value: "Up to 5 Yrs" },
        { label: "Approval", value: "24 Hours" },
      ],
      features: [
        "Loans up to ₹50 Lakhs for business expansion and working capital",
        "Minimal documentation — no lengthy paperwork",
        "Flexible repayment tenure from 12 to 60 months",
        "No collateral required for eligible borrowers",
        "Quick disbursal directly to your business account",
        "Dedicated relationship manager for end-to-end support",
        "Competitive interest rates tailored to your credit profile",
      ],
      eligibility: [
        "Age between 21–65 years at loan maturity",
        "Business in operation for at least 2 years",
        "Minimum annual turnover of ₹5 Lakhs",
        "Valid business registration / GST registration",
        "Good credit score (CIBIL 650+)",
        "Indian resident with KYC compliance",
      ],
      documents: [
        "Aadhaar Card / PAN Card (KYC)",
        "Business Registration / GST Certificate",
        "Last 2 years ITR with P&L and Balance Sheet",
        "Bank statements (last 12 months)",
        "Address proof (utility bill / rent agreement)",
        "Business continuity proof",
      ],
    }} />
  );
}
