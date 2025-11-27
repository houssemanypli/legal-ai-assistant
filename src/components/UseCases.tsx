import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import mobile from "@/assets/mobile.png";
import vocal from "@/assets/vocal.png";

import tools from "@/assets/tools.png";
import tools2 from "@/assets/tools2.png";
import digiposte from "@/assets/digiposte.png";

const useCasesMobile = [
  {
    title: "Dans la poche,",
    description: "depuis l’application mobile",
    image: mobile,
  },
  {
    title: "Dans la poche,",
    description: "depuis l’application mobile",
    image: vocal,
  },
];

const useCasesPoste = [
  {
    title: "Dans la poche,",
    description: "depuis l’application mobile",
    image: tools,
    tag: digiposte,
  },
  {
    title: "Dans la poche,",
    description: "depuis l’application mobile",
    image: tools2,
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
            judi vous accompagne partout
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8rem",
          }}
        >
          <div
            className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{
              width: "455px",
              aspectRatio: "1",
            }}
          >
            <Carousel className="w-full">
              <CarouselContent>
                {useCasesMobile.map((useCase, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={useCase.image}
                      style={{
                        height: "320px",
                        width: "100%",
                      }}
                    ></img>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div
                className="p-4 mt-2"
                style={{
                  backgroundColor: "#0D2073",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              >
                <h2
                  className="text-bold text-3xl pb-2"
                  style={{ color: "#FFFFFF" }}
                >
                  {useCasesMobile[0].title}
                </h2>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "200",
                    fontSize: "20px",
                  }}
                >
                  {useCasesMobile[0].description}
                </p>
              </div>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div
            className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{
              width: "455px",
              aspectRatio: "1",
            }}
          >
            <Carousel className="w-full">
              <CarouselContent>
                {useCasesPoste.map((useCase, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={useCase.image}
                      style={{
                        height: "320px",
                        width: "100%",
                        backgroundColor:
                          index % 2 === 1 ? "#0000FF" : "#5F4FFF",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                      }}
                    ></img>
                    {useCase.tag && (
                      <img
                        src={useCase.tag}
                        style={{
                          position: "absolute",
                          top: "0px",
                          right: "10px",
                          height: "60px",
                        }}
                      ></img>
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div
                className="p-4 mt-2"
                style={{
                  backgroundColor: "#0D2073",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              >
                <h2
                  className="text-bold text-3xl pb-2"
                  style={{ color: "#FFFFFF" }}
                >
                  Depuis vos outils
                </h2>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "200",
                    fontSize: "20px",
                  }}
                >
                  du Groupe La Poste
                </p>
              </div>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
