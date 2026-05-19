import BoardOfDirectors from "../../../../views/about/directors/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <BoardOfDirectors locale={locale} />;
}
