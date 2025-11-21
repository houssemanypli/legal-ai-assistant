import { MessageSquare, FileSearch, FileEdit, Smartphone, Link2, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import featuresImage from "@/assets/features-illustration.png";

const mainFeatures = [
  {
    icon: MessageSquare,
    title: "Poser toutes mes questions juridiques, simplement",
    features: [
      "Un chat IA qui me comprend, même sans jargon",
      "Des réponses claires et instantanées",
      "Des sources juridiques fiables que je peux consulter",
      "L'assurance d'informations vérifiées"
    ]
  },
  {
    icon: FileSearch,
    title: "Analyser automatiquement mes documents",
    features: [
      "Je détecte les risques juridiques cachés",
      "J'obtiens des résumés compréhensibles",
      "Je peux interroger l'IA sur des clauses précises",
      "Mes données restent confidentielles (serveurs français)"
    ]
  },
  {
    icon: FileEdit,
    title: "Générer et rédiger mes documents juridiques facilement",
    features: [
      "J'accède à des modèles personnalisés",
      "Je reformule ou rédige mes clauses",
      "Je bénéficie d'une assistance pédagogique",
      "Chaque terme m'est expliqué clairement"
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
          <h2 className="text-4xl lg:text-5xl font-bold">
            Avec mon assistant, je peux...
          </h2>
        </div>

        {/* Main features with alternating layout */}
        <div className="space-y-16 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 lg:p-12 glass-card hover-lift animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                {/* Image */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute inset-0 bg-gradient-glow opacity-20 blur-3xl rounded-full" />
                  <img 
                    src={featuresImage} 
                    alt={feature.title}
                    className="relative rounded-2xl shadow-ai-glow w-full h-auto object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-ai flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6">{feature.title}</h3>
                  <ul className="space-y-4">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-lg">{item}</span>
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