import ServiceDetailPage from "../ServiceDetailPage";
import { Bike } from "lucide-react";

export default function TwoWheelerLoan({ locale }: { locale: string }) {
  return (
    <ServiceDetailPage locale={locale} service={{
      slug: "two-wheeler-loan",
      title: "Two Wheeler Loan",
      subtitle: "Hit the road with your dream bike",
      description: "Finance your dream motorcycle or scooter with attractive interest rates, up to 95% on-road financing, low down payment, and a hassle-free approval process.",
      heroImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      gradientFrom: "bg-blue-600",
      gradientTo: "bg-cyan-400",
      icon: <Bike size={22} />,
      highlights: [
        { label: "Max Financing", value: "Up to 95%" },
        { label: "Interest Rate", value: "From 15%" },
        { label: "Down Payment", value: "Only 5%" },
        { label: "Tenure", value: "Up to 4 Yrs" },
      ],
      features: [
        "Up to 95% on-road financing for new two-wheelers",
        "Low down payment starting from just 5%",
        "Covers all major brands — Hero, Honda, TVS, Bajaj, Royal Enfield",
        "On-road processing — get loan at the dealership",
        "No guarantor required for salaried individuals",
        "Attractive festive season offers and cashback",
        "Flexible tenure from 12 to 48 months",
      ],
      eligibility: [
        "Age between 18–65 years",
        "Salaried or self-employed individual",
        "Minimum monthly income of ₹10,000",
        "Valid driving license",
        "Minimum 6 months employment / business continuity",
        "Good credit history (CIBIL 600+)",
      ],
      documents: [
        "Aadhaar Card / PAN Card (KYC)",
        "Driving License",
        "Passport-size photographs (2)",
        "Salary slips (last 3 months) or ITR",
        "Bank statement (last 6 months)",
        "Vehicle quotation from dealership",
      ],
    }} />
  );
}
