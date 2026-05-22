import AboutCompany from "../../../views/about/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <AboutCompany locale={locale} />;
}
