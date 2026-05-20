import ServiceDetailPage from "../ServiceDetailPage";
import { TrendingUp } from "lucide-react";

export default function MsmeLoan({ locale }: { locale: string }) {
  return (
    <ServiceDetailPage locale={locale} service={{
      slug: "msme-loan",
      title: "MSME Loan",
      subtitle: "Empowering micro & small enterprises",
      description: "Empowering micro-entrepreneurs and small business owners with fast, flexible, and affordable financing. From retail shops to manufacturing units — we support every MSME.",
      heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      gradientFrom: "bg-purple-600",
      gradientTo: "bg-purple-400",
      icon: <TrendingUp size={22} />,
      highlights: [
        { label: "Loan Amount", value: "₹5K–30L" },
        { label: "Interest Rate", value: "From 16%" },
        { label: "Collection", value: "Daily / Monthly" },
        { label: "Processing", value: "Same Day" },
      ],
      features: [
        "Loan amounts starting from ₹5,000 to ₹30 Lakhs",
        "Flexible repayment — daily, weekly, or monthly options",
        "Doorstep banking for rural and semi-urban borrowers",
        "No guarantor required for micro loan amounts",
        "Simple and fast documentation process",
        "Supports all types of micro businesses — retail, agri, artisan",
        "Repeat loan facility with enhanced limits on timely repayment",
      ],
      eligibility: [
        "Age between 18–60 years",
        "Running a micro or small enterprise for at least 1 year",
        "Valid proof of business activity",
        "Monthly income/revenue above ₹15,000",
        "Resident of the applicable service area",
        "No active loan default history",
      ],
      documents: [
        "Aadhaar Card / Voter ID (KYC)",
        "Passport-size photographs",
        "Proof of business activity (photos, invoices)",
        "Bank passbook / statement (last 6 months)",
        "Address proof (electricity bill / rent agreement)",
        "MSME/Udyam Registration (if available)",
      ],
    }} />
  );
}
