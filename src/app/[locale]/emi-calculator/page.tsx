import EmiCalculator from "../../../views/emi-calculator/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <EmiCalculator locale={locale} />;
}
