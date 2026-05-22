import FAQsPage from "../../../views/about/faqs/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <FAQsPage locale={locale} />;
}
