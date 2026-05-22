import MsmeLoan from "../../../../views/services/msme-loan/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <MsmeLoan locale={locale} />;
}
