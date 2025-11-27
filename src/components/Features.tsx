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
import star from "@/assets/star.svg";

const mainFeatures = [
  {
    icon: MessageSquare,
    title: "Des",
    secondTitle: " réponses simples ",
    thirdTitle: "à vos questions juridiques",
    items: [
      "Des réponses instantanées et compréhensibles",
      "Des sources juridiques fiables",
    ],
    image: featureResponse,
  },
  {
    icon: FileSearch,
    title: "Une",
    secondTitle: " analyse automatique ",
    thirdTitle: "de vos documents",
    items: [
      "Vérification de conformité et détection des risques juridiques",
      "Un jargon juridique traduit en termes accessibles",
    ],
    image: featureAnalysis,
  },
  {
    icon: FileEdit,
    title: "Des",
    secondTitle: " créations de documents juridiques ",
    thirdTitle: "personnalisées",
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
    <section className="py-24 pt-12 px-36" ref={ref}>
      <div className="container">
        <div
          className={`text-center mb-36 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2
            style={{
              color: "#0D2073",
              fontWeight: "800",
              fontSize: "44px",
              lineHeight: "55px",
            }}
          >
            Grâce à judi,
            <br />
            bye les problèmes juridiques !
          </h2>
        </div>

        {/* Main features in unified horizontal layout */}
        <div>
          <div className="grid gap-12 items-start px-6">
            {/* Left side - All features text content */}
            <div className="space-y-8">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-12 hover-lift transition-all  duration-300 cursor-pointer  animate-fade-in"
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                    justifyContent: "space-between",
                    flexDirection: index % 2 === 1 ? "row-reverse" : "row",
                    borderRadius: "20px",
                    border: "0.86px solid #E2E2E9",
                  }}
                >
                  <div
                    className="space-y-3 pt-8"
                    style={{ paddingInline: "36px" }}
                  >
                    <h3
                      style={{
                        color: "#0D2073",
                        fontWeight: "800",
                        fontSize: "32px",
                        lineHeight: "40px",
                      }}
                    >
                      {feature.title}
                      <span className="gradient-title">
                        {feature.secondTitle}
                      </span>
                      {feature.thirdTitle}
                    </h3>

                    <ul className="space-y-3 pt-2">
                      {feature.items.map((element) => {
                        return (
                          <div
                            style={{
                              color: "#0D2073",
                              fontSize: "20px",
                              fontWeight: "300",
                              display: "flex",
                              alignItems: "center",
                              gap: "20px",
                            }}
                          >
                            <img
                              src={star}
                              style={{
                                height: "18px",
                              }}
                            ></img>
                            <p>{element}</p>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <img
                      src={feature.image}
                      style={{
                        width: "45vw",
                        objectFit: "contain",
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
