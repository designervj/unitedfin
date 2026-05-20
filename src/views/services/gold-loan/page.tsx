import ServiceDetailPage from "../ServiceDetailPage";
import { Coins } from "lucide-react";

export default function GoldLoan({ locale }: { locale: string }) {
  return (
    <ServiceDetailPage locale={locale} service={{
      slug: "gold-loan",
      title: "Gold Loan",
      subtitle: "Instant cash against your gold",
      description: "Get instant cash against your gold jewelry with maximum loan-to-value ratio, secure vault storage, and lowest interest rates. Quick approval with minimal documentation.",
      heroImage: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1600&q=80",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      gradientFrom: "bg-amber-500",
      gradientTo: "bg-yellow-400",
      icon: <Coins size={22} />,
      highlights: [
        { label: "LTV Ratio", value: "Up to 75%" },
        { label: "Interest Rate", value: "From 12%" },
        { label: "Approval", value: "1 Hour" },
        { label: "Tenure", value: "3–24 Months" },
      ],
      features: [
        "Instant loan approval in as little as 1 hour",
        "Maximum LTV (Loan-to-Value) ratio up to 75%",
        "Safe and insured vault storage for your gold",
        "Lowest interest rates starting from 12% p.a.",
        "Flexible repayment — bullet, EMI, or interest-only options",
        "No income proof or credit score required",
        "Top-up facility available on existing gold loans",
      ],
      eligibility: [
        "Age between 18–70 years",
        "Indian resident with valid KYC documents",
        "Gold jewelry (18–22 karat) as collateral",
        "Minimum gold weight of 5 grams",
        "Clear ownership of the gold pledged",
      ],
      documents: [
        "Aadhaar Card / PAN Card / Voter ID (KYC)",
        "Passport-size photographs (2)",
        "Address proof (Aadhaar / utility bill)",
        "Gold jewelry to be pledged (physical)",
        "Receipt / proof of gold ownership (if available)",
      ],
    }} />
  );
}
