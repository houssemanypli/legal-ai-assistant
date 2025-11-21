import { AlertCircle, XCircle, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const truths = [
  {
    icon: AlertCircle,
    title: "Le juridique, un casse-tête quotidien",
    description: "Les petits pros font face à des obligations légales complexes sans toujours avoir les compétences ou le temps. Le juridique devient une source de stress permanente — ils ont besoin d'être guidés, rassurés, protégés.",
    color: "text-destructive"
  },
  {
    icon: XCircle,
    title: "Aucune solution vraiment adaptée aujourd'hui",
    description: "L'offre actuelle se divise entre outils experts pour juristes ou plateformes grand public incomplètes. Rien ne répond aux besoins professionnels : accessibilité, simplicité, fiabilité et confidentialité.",
    color: "text-muted-foreground"
  },
  {
    icon: Shield,
    title: "La Poste, un acteur de confiance légitime",
    description: "Le juridique est un sujet sensible : sécurité des données, confidentialité, fiabilité des sources. La Poste, acteur historique de confiance numérique, est naturellement positionnée pour offrir un service juridique sécurisé et rassurant.",
    color: "text-primary"
  }
];

export const MarketTruths = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            3 vérités du marché
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprendre les tensions et l'opportunité
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {truths.map((truth, index) => (
            <Card 
              key={index}
              className="p-8 glass-card hover-lift cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-ai flex items-center justify-center mb-6 ${truth.color}`}>
                <truth.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{truth.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{truth.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
