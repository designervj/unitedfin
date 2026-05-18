import Home from "../../views/home/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <Home locale={locale} />;
}
