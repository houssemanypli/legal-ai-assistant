import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import person from "@/assets/person.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const truths = [
  {
    title:
      "Vous vous sentez perdus face à toutes les obligations légales auxquelles vous devez faire face dans le cadre de votre activité ?",
    firstSentence:
      "Vous n’êtes pas seuls : pour beaucoup de Pros, les questions juridiques représentent une grande source de stress au quotidien.",
    lastSentence: "",
  },
  {
    title:
      "Vous aimeriez avoir accès à des conseils adaptés pour répondre à toutes vos interrogations au quotidien ? ",
    firstSentence:
      "Aujourd’hui, l’IA ouvre la voie à une expertise juridique accessible... Mais entre outils d’experts destinés aux juristes et chatbots grand public, aucune solution n’adresse réellement vos besoins.",
    lastSentence: "",
  },
  {
    title:
      "Vous avez peur de confier vos données sur un sujet aussi sensible au premier acteur venu ? ",
    firstSentence:
      "Vous pouvez faire confiance au Groupe La Poste, un acteur historique de confiance numérique, pour assurer la confidentialité de vos échanges et la sécurité de vos données sur des serveurs certifiés basés en France.",
    lastSentence: "",
  },
];

export const MarketTruths = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section
      className="py-16 px-4 bg-background relative overflow-hidden"
      ref={ref}
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

      <div className="container max-w-6xl relative z-10 flex items-center justify-center gap-12">
        <img
          src={person}
          style={{ height: "300px" }}
          className="animate-fade-in"
        ></img>
        <div style={{ paddingInline: "80px" }}>
          <Carousel className="w-full">
            <CarouselContent>
              {truths.map((truth, index) => (
                <CarouselItem key={index}>
                  <h3
                    className="text-lg font-bold leading-tight mb-4"
                    style={{ color: "#0D2073", fontSize: "26px" }}
                  >
                    {truth.title}
                  </h3>
                  <div className="space-y-2">
                    <p
                      className="text-base text-foreground leading-snug animate-fade-in"
                      style={{
                        color: "#0D2073",
                        fontWeight: "300",
                        fontSize: "16px",
                      }}
                    >
                      {truth.firstSentence}
                    </p>
                    {truth.lastSentence && (
                      <p
                        className="text-base text-foreground leading-snug animate-fade-in"
                        style={{ color: "#0D2073" }}
                      >
                        {truth.lastSentence}
                      </p>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
