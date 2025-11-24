import { TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const WhyNow = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-24 px-4 bg-gradient-subtle" ref={ref}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>Opportunité stratégique</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-title">
              Pourquoi maintenant ?
            </h2>
          </div>

          <div className={`prose prose-lg max-w-none ${isVisible ? 'animate-fade-in-delay' : 'opacity-0'}`}>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Les réglementations explosent en nombre et en complexité. Les petits professionnels 
              se retrouvent démunis face à des obligations qu'ils ne comprennent pas toujours, 
              avec un besoin croissant d'outils simples et accessibles.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Parallèlement, l'IA de confiance émerge comme une réponse technologique crédible, 
              capable de démocratiser l'expertise juridique tout en garantissant fiabilité et sécurité.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dans ce contexte, <strong className="text-foreground">La Poste dispose d'un rôle institutionnel unique</strong> : 
              acteur historique de confiance numérique, elle est légitime pour offrir un service 
              juridique sécurisé, responsable et rassurant. L'opportunité stratégique est forte 
              et le moment est idéal pour se positionner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
