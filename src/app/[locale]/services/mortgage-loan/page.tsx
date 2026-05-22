import MortgageLoan from "../../../../views/services/mortgage-loan/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <MortgageLoan locale={locale} />;
}
