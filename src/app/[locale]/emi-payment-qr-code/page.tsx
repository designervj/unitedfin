import EmiPaymentQr from "../../../views/emi-payment-qr/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <EmiPaymentQr locale={locale} />;
}
