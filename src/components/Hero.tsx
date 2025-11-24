import { Sparkles } from "lucide-react";

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
          </div>

          {/* Modern abstract visualization */}
          <div className="relative h-[500px] animate-fade-in-delay">
            {/* Central glow */}
            <div className="absolute inset-0 bg-gradient-glow opacity-30 blur-3xl" />
            
            {/* Floating geometric shapes */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-3xl rotate-12 animate-float shadow-ai-glow" />
            <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-accent/20 rounded-full animate-float blur-sm" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-primary/30 rounded-2xl -rotate-6 animate-float" style={{ animationDelay: "0.5s" }} />
            
            {/* Grid overlay effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};
