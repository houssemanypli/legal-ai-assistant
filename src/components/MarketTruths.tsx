import { AlertCircle, XCircle, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const truths = [
  {
    icon: AlertCircle,
    title: "Le juridique, un casse-tête quotidien",
    firstSentence: "Les petits pros font face à des obligations légales complexes sans toujours avoir les compétences ou le temps.",
    lastSentence: "Le juridique devient une source de stress permanente — ils ont besoin d'être guidés, rassurés, protégés.",
    color: "text-destructive"
  },
  {
    icon: XCircle,
    title: "Aucune solution vraiment adaptée aujourd'hui",
    firstSentence: "L'offre actuelle se divise entre outils experts pour juristes ou plateformes grand public incomplètes.",
    lastSentence: "Rien ne répond aux besoins professionnels : accessibilité, simplicité, fiabilité et confidentialité.",
    color: "text-muted-foreground"
  },
  {
    icon: Shield,
    title: "La Poste, un acteur de confiance légitime",
    firstSentence: "Le juridique est un sujet sensible : sécurité des données, confidentialité, fiabilité des sources.",
    lastSentence: "La Poste, acteur historique de confiance numérique, est naturellement positionnée pour offrir un service juridique sécurisé et rassurant.",
    color: "text-primary"
  }
];

export const MarketTruths = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold">
            3 vérités du marché
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {truths.map((truth, index) => (
            <Card 
              key={index}
              className="p-6 glass-card hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-ai flex items-center justify-center flex-shrink-0 ${truth.color}`}>
                  <truth.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold leading-tight">{truth.title}</h3>
              </div>
              <div className="space-y-2">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {truth.firstSentence}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {truth.lastSentence}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
