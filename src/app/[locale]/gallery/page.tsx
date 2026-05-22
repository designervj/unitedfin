import Gallery from "../../../views/about/gallery/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <Gallery locale={locale} />;
}
