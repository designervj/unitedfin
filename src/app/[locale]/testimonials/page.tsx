import TestimonialsPage from "../../../views/about/testimonials/page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TestimonialsPage locale={locale} />;
}
