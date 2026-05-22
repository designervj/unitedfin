import TwoWheelerLoan from "../../../../views/services/two-wheeler-loan/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TwoWheelerLoan locale={locale} />;
}
