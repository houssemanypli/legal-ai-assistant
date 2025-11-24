import { useState } from "react";
import { Shield, Zap, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import valuePersonalization from "@/assets/value-personalization.png";
import valueSimplicity from "@/assets/value-simplicity.png";
import valueSecurity from "@/assets/value-security.png";

const pillars = [
  {
    icon: Target,
    title: "Personnalisation & Pertinence",
    values: [
      "Conseils adaptés à l'activité",
      "Suggestions contextualisées",
      "Suivi progressif via historique"
    ],
    image: valuePersonalization
  },
  {
    icon: Zap,
    title: "Simplicité & Accessibilité",
    values: [
      "Interface claire et intuitive",
      "Langage vulgarisé pour non-juristes",
      "Explications pédagogiques"
    ],
    image: valueSimplicity
  },
  {
    icon: Shield,
    title: "Sécurité & Confiance",
    values: [
      "Données hébergées en France",
      "Serveurs certifiés : confidentialité renforcée",
      "Fiabilité des sources juridiques"
    ],
    image: valueSecurity
  }
];

export const ValuePillars = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeImage, setActiveImage] = useState(valuePersonalization);

  return (
    <section className="py-24 px-4 bg-background" ref={ref}>
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-title-alt">
            Une solution complète, intuitive et sécurisée
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ce qui fait notre différence
          </p>
        </div>

        <div className={`grid lg:grid-cols-[40%_60%] gap-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Colonne de gauche - Blocs de texte */}
          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover-lift hover-glow transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveImage(pillar.image)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold">{pillar.title}</h3>
                  
                  <ul className="space-y-2">
                    {pillar.values.map((value, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Colonne de droite - Illustration */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-glow opacity-20 blur-xl" />
              <img 
                src={activeImage} 
                alt="Illustration des valeurs"
                className="relative w-full h-auto object-cover transition-all duration-500 ease-in-out animate-fade-in"
                key={activeImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
