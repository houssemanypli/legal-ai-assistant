import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import person from "@/assets/person.png";
import { ChevronDown, X, Plus } from "lucide-react";
import { useState } from "react";

const truths = [
  {
    subtitle: "Besoin d'accompagnement ?",
    title:
      "Vous vous sentez perdus face à toutes les obligations légales auxquelles vous devez faire face dans le cadre de votre activité ?",
    content:
      "Vous n'êtes pas seuls : Avec blabla réglementations, les questions juridiques représentent une grande source de stress pour les petits Pros.",
  },
  {
    subtitle: "Accès à des conseils adaptés",
    title:
      "Vous aimeriez avoir accès à des conseils adaptés pour répondre à toutes vos interrogations au quotidien ? ",
    content:
      "Aujourd'hui, l'IA ouvre la voie à une expertise juridique accessible... Mais entre outils d'experts destinés aux juristes et chatbots grand public, aucune solution n'adresse réellement vos besoins.",
  },
  {
    subtitle: "Confidentialité et protection des données",
    title:
      "Vous avez peur de confier vos données sur un sujet aussi sensible au premier acteur venu ? ",
    content:
      "Vous pouvez faire confiance au Groupe La Poste, un acteur historique de confiance numérique, pour assurer la confidentialité de vos échanges et la sécurité de vos données sur des serveurs certifiés basés en France.",
  },
];

export const MarketTruths = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 px-36 bg-background relative overflow-hidden"
      ref={ref}
      style={{ backgroundColor: "#FAFAFA" }}
    >
      {/* Parallax background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "transform 1s ease-out",
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "transform 1.2s ease-out",
          }}
        />
      </div>
      <div
        className={`text-center mb-12 px-40 ${
          isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <h2
          style={{
            color: "#0D2073",
            fontWeight: "800",
            fontSize: "36px",
            lineHeight: "45px",
            paddingInline: "150px",
          }}
        >
          Toutes les bonnes raisons de faire appel à notre assistant juridique
        </h2>
      </div>
      <div className="container px-16 relative z-10 flex justify-center gap-12">
        <img
          src={person}
          style={{ width: "30vw", objectFit: "contain" }}
          className="animate-fade-in"
        ></img>
        <div style={{ width: "100%" }}>
          <div className="space-y-2">
            {truths.map((truth, index) => (
              <div
                key={index}
                className={`${
                  index !== truths.length - 1 ? "border-b border-gray-300" : ""
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-start justify-between py-4 hover:opacity-80 transition-opacity text-left"
                >
                  <div className="flex-1">
                    <p
                      style={{
                        color: expandedIndex === index ? "#0D2073" : "#333333",
                        fontSize: "16px",
                        fontWeight: "600",
                        marginBottom: "8px",
                      }}
                    >
                      {truth.subtitle}
                    </p>
                  </div>
                  {expandedIndex === index ? (
                    <X
                      size={24}
                      style={{
                        color: "#0D2073",
                        flexShrink: 0,
                        marginLeft: "20px",
                      }}
                    />
                  ) : (
                    <Plus
                      size={24}
                      style={{
                        color: "#0D2073",
                        flexShrink: 0,
                        marginLeft: "20px",
                      }}
                    />
                  )}
                </button>
                {expandedIndex === index && (
                  <div className="pb-4 animate-fade-slide-down">
                    <h3
                      style={{
                        color: "#0D2073",
                        fontSize: "20px",
                        lineHeight: "24px",
                        fontWeight: "800",
                      }}
                      className="pb-4"
                    >
                      {truth.title}
                    </h3>
                    <p
                      style={{
                        color: "#0D2073",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      {truth.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
