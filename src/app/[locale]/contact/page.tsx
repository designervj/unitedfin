import Contact from "../../../views/contact/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <Contact locale={locale} />;
}
