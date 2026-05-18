import Services from "../../../views/services/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <Services locale={locale} />;
}
