import About from "../../../pages/about/page";

export default function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return <About locale={locale} />;
}
