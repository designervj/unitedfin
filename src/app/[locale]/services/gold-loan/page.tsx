import GoldLoan from "../../../../views/services/gold-loan/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <GoldLoan locale={locale} />;
}
