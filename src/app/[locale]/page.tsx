import Home from "../../pages/home/page";

export default function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return <Home locale={locale} />;
}
