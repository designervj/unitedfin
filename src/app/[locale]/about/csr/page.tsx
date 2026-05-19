import CsrAndPolicies from "../../../../views/about/csr/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <CsrAndPolicies locale={locale} />;
}
