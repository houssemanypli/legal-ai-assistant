import { Sparkles } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import hero from "@/assets/hero.png";

export const Hero = () => {
  const parallax1 = useParallax(-0.2);
  const parallax2 = useParallax(-0.3);
  const parallax3 = useParallax(0.15);

  return (
    <section className="relative min-h-[70vh]">
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "end",
          paddingBlock: "16px",
          paddingInline: "32px",
        }}
        className="animate-fade-in"
      >
        <button
          style={{
            backgroundColor: "#53F3EA",
            borderRadius: "12px",
            height: "50px",
            paddingInline: "60px",
          }}
        >
          <span className="text-l" style={{ color: "#3244DB" }}>
            Interrogez-moi !
          </span>
        </button>
      </div>
      <div className=" flex items-center justify-center overflow-hidden">
        <div
          className=" relative z-10 px-16 py-20"
          style={{ backgroundColor: "#100559" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <h1
                className="text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: "#FFFFFF" }}
              >
                Découvrez <span className="gradient-title">Jean-mi</span>
                {", "}
                l’assistant qui vous accompagne dans vos{" "}
                <span className="gradient-title">
                  problématiques juridiques{" "}
                </span>{" "}
                du quotidien
              </h1>
            </div>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <img src={hero} style={{ width: "250px" }}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
