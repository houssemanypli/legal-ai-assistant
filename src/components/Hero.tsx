import { Sparkles } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import hero from "@/assets/hero.png";

export const Hero = () => {
  const parallax1 = useParallax(-0.2);
  const parallax2 = useParallax(-0.3);
  const parallax3 = useParallax(0.15);

  return (
    <section className="relative">
      <div className=" flex items-center justify-center overflow-hidden">
        <div
          className=" relative z-10  py-20"
          style={{
            backgroundColor: "#100559",
            paddingInline: "165px",
            width: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="grid lg:grid-cols-2 gap-36 items-center"
            style={{ maxWidth: "1380px" }}
          >
            {/* Text content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <h1
                className="font-bold leading-tight"
                style={{
                  color: "#FFFFFF",
                  fontWeight: "100",
                  fontSize: "45px",
                }}
              >
                <p
                  style={{
                    fontWeight: "800",
                    fontSize: "61px",
                    marginBottom: "12px",
                  }}
                >
                  Découvrez <span className="gradient-title">judi</span>
                  {", "}
                </p>
                l’assistant qui vous accompagne dans vos{" "}
                <span className="gradient-title">
                  problématiques juridiques{" "}
                </span>{" "}
                du quotidien
              </h1>
              <div className="animate-fade-in">
                <button
                  style={{
                    backgroundColor: "#38EDFE",
                    borderRadius: "8px",
                    padding: "12px",
                  }}
                >
                  <span
                    className="text-l"
                    style={{
                      color: "#100559",
                      fontSize: "16px",
                      fontWeight: "700",
                      letterSpacing: "0px",
                    }}
                  >
                    Demander une démo
                  </span>
                </button>
              </div>
            </div>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <img
                src={hero}
                style={{
                  width: "500px",
                  objectFit: "contain",
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
