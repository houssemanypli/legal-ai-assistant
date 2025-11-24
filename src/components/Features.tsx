import { MessageSquare, FileSearch, FileEdit, Smartphone, Link2, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import featuresImage from "@/assets/features-illustration.png";
import featureQuestions from "@/assets/feature-questions.png";
import featureDocumentGeneration from "@/assets/feature-document-generation.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const mainFeatures = [
  {
    icon: MessageSquare,
    title: "Poser toutes mes questions juridiques, simplement",
    features: [
      "Des réponses instantanées avec des termes compréhensibles par tous",
      "Des sources juridiques fiables que je peux consulter"
    ],
    image: featureQuestions
  },
  {
    icon: FileSearch,
    title: "Analyser automatiquement mes documents",
    features: [
      "Vérification de conformité et détection des risques juridiques",
      "Traduction du jargon en vocabulaire accessible"
    ],
    image: featuresImage
  },
  {
    icon: FileEdit,
    title: "Générer et rédiger mes documents juridiques facilement",
    features: [
      "Aide à la rédaction de contenus juridiques",
      "Modèles de documents juridiques"
    ],
    image: featureDocumentGeneration
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

        {/* Main features with alternating layout */}
        <div className="space-y-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card 
              key={index}
              className={`p-6 lg:p-8 glass-card hover-lift hover-glow ${isVisible ? (index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right') : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Content - Order changes based on index */}
                <div className={`${index === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-ai flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image - Order changes based on index */}
                <div className={`relative ${index === 1 ? 'lg:order-1' : 'lg:order-2'} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-gradient-glow opacity-20 blur-2xl rounded-full" />
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="relative rounded-xl shadow-ai-glow w-full h-auto object-contain"
                  />
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