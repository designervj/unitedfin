import PersonalLoan from "../../../../views/services/personal-loan/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PersonalLoan locale={locale} />;
}
