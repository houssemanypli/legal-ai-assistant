import { MessageSquare, FileSearch, FileEdit, Smartphone, Link2, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mainFeatures = [
  {
    icon: MessageSquare,
    title: "Poser toutes ses questions juridiques, simplement",
    features: [
      "Chat IA adapté aux non-experts",
      "Langage clair, sans jargon",
      "Réponses instantanées",
      "Sources juridiques fiables et vérifiées"
    ]
  },
  {
    icon: FileSearch,
    title: "Analyser automatiquement ses documents",
    features: [
      "Détection des risques juridiques",
      "Résumés compréhensibles",
      "Interrogation IA sur clauses spécifiques",
      "Confidentialité (serveurs français)"
    ]
  },
  {
    icon: FileEdit,
    title: "Générer et rédiger facilement des documents juridiques",
    features: [
      "Modèles personnalisés",
      "Reformulation ou rédaction de clauses",
      "Assistance pédagogique",
      "Explication de chaque terme"
    ]
  }
];

const secondaryFeatures = [
  { icon: Link2, label: "Intégration outils métiers" },
  { icon: Smartphone, label: "Usage via WhatsApp" },
  { icon: Database, label: "Écosystème La Poste" }
];

export const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Fonctionnalités au service des petits Pros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une solution complète, intuitive et sécurisée
          </p>
        </div>

        {/* Main features */}
        <div className="space-y-12 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 glass-card hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-gradient-ai flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-6">{feature.title}</h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Secondary features */}
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground mb-4">Et aussi</p>
          <div className="flex flex-wrap justify-center gap-3">
            {secondaryFeatures.map((feature, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="px-4 py-2 text-sm hover-lift"
              >
                <feature.icon className="w-4 h-4 mr-2" />
                {feature.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
