import BranchLocator from "../../../views/about/branch-locator/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <BranchLocator locale={locale} />;
}
