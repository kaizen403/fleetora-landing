import { BuiltForSection } from "@/components/built-for-section";
import { FAQSection } from "@/components/faq-section";
import { FinalCTASection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SectionBorder } from "@/components/section-border";
import { SolutionsSection } from "@/components/solutions-section";
import { TrustedBySection } from "@/components/trusted-by-section";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#0a0f1a]">
      <Header />
      <main className="px-4 sm:px-6 lg:px-8">
        <Hero />
        <TrustedBySection />
        
        <SectionBorder className="my-8">
          <SolutionsSection />
        </SectionBorder>
        
        <SectionBorder className="my-8">
          <BuiltForSection />
        </SectionBorder>
        
        <SectionBorder className="my-8">
          <FAQSection />
        </SectionBorder>
        
        <SectionBorder className="my-8">
          <FinalCTASection />
        </SectionBorder>
      </main>
      <Footer />
    </div>
  );
}
