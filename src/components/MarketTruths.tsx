import { AlertCircle, XCircle, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const truths = [
  {
    icon: AlertCircle,
    title: "Des obligations complexes",
    description: "Stress permanent face aux réglementations — besoin de guidance claire et fiable.",
    color: "text-destructive"
  },
  {
    icon: XCircle,
    title: "Offre inadaptée",
    description: "Outils trop experts ou plateformes trop simplistes. Aucune ne combine accessibilité et fiabilité.",
    color: "text-muted-foreground"
  },
  {
    icon: Shield,
    title: "La Poste : confiance légitime",
    description: "Acteur historique de confiance, naturellement positionné pour un service juridique sécurisé.",
    color: "text-primary"
  }
];

export const MarketTruths = () => {
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
              className="p-6 glass-card hover-lift cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-ai flex items-center justify-center mb-4 ${truth.color}`}>
                <truth.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{truth.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{truth.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
