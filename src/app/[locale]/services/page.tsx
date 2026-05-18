import Services from "../../../pages/services/page";

export default function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return <Services locale={locale} />;
}
