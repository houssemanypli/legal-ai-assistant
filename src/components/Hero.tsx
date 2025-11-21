import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-legal.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              <span>Assistant juridique nouvelle génération</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Découvrez l'assistant juridique IA{" "}
              <span className="text-primary">simple et fiable</span>, conçu pour les petits Pros
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Un service moderne, rassurant et toujours disponible qui démystifie le juridique. 
              Profitez d'une expertise professionnelle avec la confiance institutionnelle de La Poste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-ai hover:shadow-ai-glow-hover transition-all duration-300">
                Découvrir la solution
              </Button>
              <Button size="lg" variant="outline" className="hover-lift">
                Voir les fonctionnalités
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative animate-fade-in-delay">
            <div className="absolute inset-0 bg-gradient-glow opacity-20 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="Interface de l'assistant juridique IA" 
              className="relative rounded-2xl shadow-ai-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
