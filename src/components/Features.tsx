import {
  MessageSquare,
  FileSearch,
  FileEdit,
  Smartphone,
  Link2,
  Database,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import featureResponse from "@/assets/response.png";
import featureAnalysis from "@/assets/analyse.png";
import featureCreation from "@/assets/creation.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const mainFeatures = [
  {
    icon: MessageSquare,
    title: "Des réponses simples à vos questions juridiques",
    items: [
      "Des réponses instantanées et compréhensibles",
      "Des sources juridiques fiables",
    ],
    image: featureResponse,
  },
  {
    icon: FileSearch,
    title: "Une analyse automatique de vos documents",
    items: [
      "Vérification de conformité et détection des risques juridiques",
      "Un jargon juridique traduit en termes accessibles",
    ],
    image: featureAnalysis,
  },
  {
    icon: FileEdit,
    title: "Des créations de documents juridiques personnalisées",
    items: [
      "Rédaction de contrats, devis, courriers, etc, conformes à la législation",
      "Génération de modèles de documents juridiques",
    ],
    image: featureCreation,
  },
];

const secondaryFeatures = [
  { icon: Link2, label: "Intégration outils métiers" },
  { icon: Smartphone, label: "Usage via WhatsApp" },
  { icon: Database, label: "Écosystème La Poste" },
];

export const Features = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      className="py-24 px-4"
      ref={ref}
      style={{ backgroundColor: "#FBFAFF" }}
    >
      <div className="container">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2
            className="text-4xl lg:text-5xl font-bold"
            style={{ color: "#0D2073" }}
          >
            Grâce à Jean-mi, bye les pb juridiques
          </h2>
        </div>

        {/* Main features in unified horizontal layout */}
        <div>
          <div className="grid gap-12 items-start">
            {/* Left side - All features text content */}
            <div className="space-y-8">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-12 rounded-2xl bg-card border border-border hover-lift hover-glow transition-all duration-300 cursor-pointer  animate-fade-in"
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                    justifyContent: "space-between",
                    flexDirection: index % 2 === 1 ? "row-reverse" : "row",
                  }}
                >
                  <div className="space-y-3" style={{ paddingInline: "32px" }}>
                    <h3
                      className="text-3xl font-bold"
                      style={{ color: "#0D2073" }}
                    >
                      {feature.title}
                    </h3>

                    <ul className="space-y-2">
                      {feature.items.map((element) => {
                        return (
                          <div style={{ color: "#0D2073" }}>
                            - <span>{element}</span>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <img
                      src={feature.image}
                      style={{
                        height: "300px",
                        maxWidth: "30vw",
                      }}
                    ></img>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
