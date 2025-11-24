import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const truths = [
  {
    title: "Le juridique, un vrai casse-tête pour les petits pro",
    firstSentence: "Face aux obligations légales auxquelles ils sont confrontés, le volet juridique est une source de stress pour les petits pro, peu compétents en la matière.",
    lastSentence: "Ils ont besoin d'être guidés, rassurés et protégés."
  },
  {
    title: "Un marché mal couvert, enclin à des opportunités",
    firstSentence: "Le paysage d'offres actuel est inadapté des petits pro.",
    lastSentence: "Entre outils d'experts adressant les juristes et plateformes grand public incomplètes, aucune solution n'adresse de manière adéquate les problématiques rencontrées par cette cible."
  },
  {
    title: "La Poste, un acteur de confiance légitime",
    firstSentence: "Le juridique est un sujet sensible : sécurité des données, confidentialité, fiabilité des sources.",
    lastSentence: "La Poste, acteur historique de confiance numérique, est naturellement positionnée pour offrir un service juridique sécurisé et rassurant."
  }
];

export const MarketTruths = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-16 px-4 bg-background relative overflow-hidden" ref={ref}>
      {/* Parallax background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" 
             style={{ transform: isVisible ? 'translateY(0)' : 'translateY(50px)', transition: 'transform 1s ease-out' }} />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" 
             style={{ transform: isVisible ? 'translateY(0)' : 'translateY(50px)', transition: 'transform 1.2s ease-out' }} />
      </div>
      
      <div className="container max-w-6xl relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold gradient-title-alt">
            Les signaux forts
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {truths.map((truth, index) => (
            <Card 
              key={index}
              className={`p-6 glass-card hover-lift hover-glow transition-all duration-700 shadow-ai-glow border-2 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 0.2}s`,
                backgroundColor: 'hsl(var(--card) / 0.9)'
              }}
            >
              <h3 className="text-lg font-bold leading-tight mb-4 gradient-title">{truth.title}</h3>
              <div className="space-y-2">
                <p className="text-base text-foreground leading-snug">
                  {truth.firstSentence}
                </p>
                {truth.lastSentence && (
                  <p className="text-base text-foreground leading-snug">
                    {truth.lastSentence}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
