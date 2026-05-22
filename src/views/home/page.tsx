import { HeroSection } from "./sections/HeroSection";
import { TrustedSection } from "./sections/TrustedSection";
import { ProductsSection } from "./sections/ProductsSection";
import { ChairmanMessageSection } from "./sections/ChairmanMessageSection";
import { SuccessStoriesSection } from "./sections/SuccessStoriesSection";
import { FAQSection } from "./sections/FAQSection";
import { ContactFormSection } from "./sections/ContactFormSection";

export default function Home({ locale }: { locale: string }) {
  return (
    <main className="scroll-smooth">
      <HeroSection locale={locale} />
      <TrustedSection locale={locale} />
      <ProductsSection locale={locale} />
      <ChairmanMessageSection locale={locale} />
      <div id="testimonials">
        <SuccessStoriesSection locale={locale} />
      </div>
      <div id="faq">
        <FAQSection locale={locale} />
      </div>
      <ContactFormSection locale={locale} />
    </main>
  );
}
