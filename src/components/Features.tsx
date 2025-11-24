import { MessageSquare, FileSearch, FileEdit, Smartphone, Link2, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import featureQA from "@/assets/feature-qa-assistant.png";
import featureAnalysis from "@/assets/feature-document-analysis.png";
import featureGeneration from "@/assets/feature-doc-generation.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const mainFeatures = [
  {
    icon: MessageSquare,
    title: "Poser toutes mes questions juridiques, simplement",
    features: [
      "Des réponses instantanées avec des termes compréhensibles par tous",
      "Des sources juridiques fiables que je peux consulter"
    ],
    image: featureQA
  },
  {
    icon: FileSearch,
    title: "Analyser automatiquement mes documents",
    features: [
      "Vérification de conformité et détection des risques juridiques",
      "Traduction du jargon en vocabulaire accessible"
    ],
    image: featureAnalysis
  },
  {
    icon: FileEdit,
    title: "Générer et rédiger mes documents juridiques facilement",
    features: [
      "Aide à la rédaction de contrats, devis, courriers, etc, conformes à la législation",
      "Modèles de documents juridiques"
    ],
    image: featureGeneration
  }
];

const secondaryFeatures = [
  { icon: Link2, label: "Intégration outils métiers" },
  { icon: Smartphone, label: "Usage via WhatsApp" },
  { icon: Database, label: "Écosystème La Poste" }
];

export const Features = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-24 px-4 bg-gradient-subtle" ref={ref}>
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-title-alt">
            Avec mon assistant, je peux...
          </h2>
        </div>

        {/* Main features in unified horizontal layout */}
        <Card 
          className={`p-8 lg:p-12 glass-card hover-glow ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - All features text content */}
            <div className="space-y-8">
              {mainFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-ai flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold">{feature.title}</h3>
                  </div>
                  <ul className="space-y-2 ml-16">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right side - Illustrations stacked vertically */}
            <div className="space-y-6">
              {mainFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ transitionDelay: `${index * 0.2 + 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-glow opacity-10 blur-xl rounded-lg" />
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="relative rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>

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