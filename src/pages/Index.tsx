import { Hero } from "@/components/Hero";
import { MarketTruths } from "@/components/MarketTruths";
import { Features } from "@/components/Features";
import { ValuePillars } from "@/components/ValuePillars";
import { UseCases } from "@/components/UseCases";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MarketTruths />
      <Features />
      <ValuePillars />
      <UseCases />
      <Footer />
    </div>
  );
};

export default Index;
