import EmiCalculator from "../../../pages/emi-calculator/page";

export default function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return <EmiCalculator locale={locale} />;
}
