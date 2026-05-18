import { HeroSection } from "./sections/HeroSection";
import { TrustedSection } from "./sections/TrustedSection";
import { ProductsSection } from "./sections/ProductsSection";
import { ChairmanMessageSection } from "./sections/ChairmanMessageSection";
import { SuccessStoriesSection } from "./sections/SuccessStoriesSection";
import { FAQSection } from "./sections/FAQSection";
import { ContactFormSection } from "./sections/ContactFormSection";

import homeData from "../../data/home-page.json";

export default function Home({ locale }: { locale: string }) {
  // Find props for each section
  const heroProps = homeData.content.find((s: any) => s.id === "sec_hero")?.props;
  const trustedProps = homeData.content.find((s: any) => s.id === "sec_trusted")?.props;

  return (
    <main>
      <HeroSection props={heroProps} locale={locale} />
      <TrustedSection props={trustedProps} locale={locale} />
      <ProductsSection />
      <ChairmanMessageSection />
      <SuccessStoriesSection />
      <FAQSection />
      <ContactFormSection />
    </main>
  );
}
