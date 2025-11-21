import { AlertCircle, XCircle, Shield, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const truths = [
  {
    icon: AlertCircle,
    title: "Le juridique, un casse-tête quotidien",
    shortDescription: "Stress permanent face aux réglementations — besoin de guidance claire et fiable.",
    fullDescription: "Les petits pros font face à des obligations légales complexes sans toujours avoir les compétences ou le temps. Le juridique devient une source de stress permanente — ils ont besoin d'être guidés, rassurés, protégés.",
    color: "text-destructive"
  },
  {
    icon: XCircle,
    title: "Aucune solution vraiment adaptée aujourd'hui",
    shortDescription: "Outils trop experts ou plateformes trop simplistes.",
    fullDescription: "L'offre actuelle se divise entre outils experts pour juristes ou plateformes grand public incomplètes. Rien ne répond aux besoins professionnels : accessibilité, simplicité, fiabilité et confidentialité.",
    color: "text-muted-foreground"
  },
  {
    icon: Shield,
    title: "La Poste, un acteur de confiance légitime",
    shortDescription: "Acteur historique de confiance pour un service juridique sécurisé.",
    fullDescription: "Le juridique est un sujet sensible : sécurité des données, confidentialité, fiabilité des sources. La Poste, acteur historique de confiance numérique, est naturellement positionnée pour offrir un service juridique sécurisé et rassurant.",
    color: "text-primary"
  }
];

export const MarketTruths = () => {
  const [expandedCards, setExpandedCards] = useState<boolean[]>([false, false, false]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            3 vérités du marché
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprendre les tensions et l'opportunité
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {truths.map((truth, index) => (
            <Card 
              key={index}
              className="p-6 glass-card hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-ai flex items-center justify-center mb-4 ${truth.color}`}>
                <truth.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{truth.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {expandedCards[index] ? truth.fullDescription : truth.shortDescription}
              </p>
              <button
                onClick={() => toggleCard(index)}
                className="mt-3 flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {expandedCards[index] ? "Voir moins" : "En savoir plus"}
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-300 ${expandedCards[index] ? "rotate-180" : ""}`}
                />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
