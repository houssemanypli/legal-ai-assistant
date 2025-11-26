import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import mobile from "@/assets/mobile.png";
import tools from "@/assets/tools.png";

const useCases = [
  {
    title: "Dans la poche,",
    description: "depuis l’application mobile",
    image: mobile,
  },
  {
    title: "Depuis vos outils",
    description: "du Groupe La Poste",
    image: tools,
  },
];

export const UseCases = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-24 px-4 bg-muted/30" ref={ref}>
      <div className="container">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#0D2073" }}
          >
            Jean-mi vous accompagne partout
          </h2>
        </div>

        <div
          className={`mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{
            maxWidth: "25vw",
          }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {useCases.map((useCase, index) => (
                <CarouselItem key={index}>
                  <img
                    src={useCase.image}
                    style={{
                      height: "250px",
                      width: "100%",
                      backgroundColor: index % 2 === 1 ? "#5F4FFF" : undefined,
                    }}
                  ></img>
                  <div
                    className="p-4 mt-2"
                    style={{
                      backgroundColor: "#0D2073",
                      borderBottomLeftRadius: "8px",
                      borderBottomRightRadius: "8px",
                    }}
                  >
                    <h2
                      className="text-bold text-2xl pb-2"
                      style={{ color: "#FFFFFF" }}
                    >
                      {useCase.title}
                    </h2>
                    <p style={{ color: "#FFFFFF", fontWeight: "300" }}>
                      {useCase.description}
                    </p>
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
