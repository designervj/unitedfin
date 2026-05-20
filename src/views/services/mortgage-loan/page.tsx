import ServiceDetailPage from "../ServiceDetailPage";
import { Landmark } from "lucide-react";

export default function MortgageLoan({ locale }: { locale: string }) {
  return (
    <ServiceDetailPage locale={locale} service={{
      slug: "mortgage-loan",
      title: "Mortgage Loan",
      subtitle: "Unlock your property's value",
      description: "Leverage the equity in your residential or commercial property to secure high-value loans at competitive rates. Fund business expansion, higher education, or medical emergencies.",
      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeefa?auto=format&fit=crop&w=1600&q=80",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      gradientFrom: "bg-emerald-600",
      gradientTo: "bg-teal-400",
      icon: <Landmark size={22} />,
      highlights: [
        { label: "Max Loan", value: "₹2 Crore" },
        { label: "Interest Rate", value: "From 13%" },
        { label: "LTV Ratio", value: "Up to 70%" },
        { label: "Tenure", value: "Up to 15 Yrs" },
      ],
      features: [
        "High loan amounts up to ₹2 Crore against property",
        "Residential and commercial property accepted as collateral",
        "Loan-to-value (LTV) ratio up to 70% of property market value",
        "Long repayment tenure up to 15 years for easier EMIs",
        "Use funds for any purpose — business, education, medical, personal",
        "Balance transfer facility from other lenders at lower rates",
        "Door-step legal and valuation support provided",
      ],
      eligibility: [
        "Age between 21–70 years at loan maturity",
        "Salaried with minimum ₹25,000/month or self-employed with stable income",
        "Clear title property (residential or commercial)",
        "Property should be free from encumbrances",
        "CIBIL score 650 or above",
        "Property in an RBI-approved city or town",
      ],
      documents: [
        "Aadhaar Card / PAN Card (KYC)",
        "Income proof — salary slips / ITR (last 2 years)",
        "Bank statements (last 12 months)",
        "Property title deed and chain of documents",
        "Approved building plan and NOC",
        "Property tax receipts",
        "Encumbrance certificate",
      ],
    }} />
  );
}
