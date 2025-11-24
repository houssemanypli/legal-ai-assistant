import { Hero } from "@/components/Hero";
import { MarketTruths } from "@/components/MarketTruths";
import { Features } from "@/components/Features";
import { ValuePillars } from "@/components/ValuePillars";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MarketTruths />
      <Features />
      <ValuePillars />
      <Footer />
    </div>
  );
};

export default Index;
