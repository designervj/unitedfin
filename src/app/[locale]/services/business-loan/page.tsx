import BusinessLoan from "../../../../views/services/business-loan/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <BusinessLoan locale={locale} />;
}
