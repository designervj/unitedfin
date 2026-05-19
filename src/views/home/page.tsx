import { HeroSection } from "./sections/HeroSection";
import { TrustedSection } from "./sections/TrustedSection";
import { ProductsSection } from "./sections/ProductsSection";
import { ChairmanMessageSection } from "./sections/ChairmanMessageSection";
import { SuccessStoriesSection } from "./sections/SuccessStoriesSection";
import { FAQSection } from "./sections/FAQSection";
import { ContactFormSection } from "./sections/ContactFormSection";

export default function Home({ locale }: { locale: string }) {
  return (
    <main>
      <HeroSection locale={locale} />
      <TrustedSection locale={locale} />
      <ProductsSection />
      <ChairmanMessageSection />
      <SuccessStoriesSection />
      <FAQSection />
      <ContactFormSection />
    </main>
  );
}
