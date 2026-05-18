import Contact from "../../../pages/contact/page";

export default function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return <Contact locale={locale} />;
}
