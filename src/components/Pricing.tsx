import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Essentiel",
    description: "Idéale pour découvrir judi",
    price: "0€/",
    features: [
      "10 questions juridiques / mois",
      "Réponses instantanées et vulgarisées ",
      "Suggestions de ressources juridiques fiables",
      "Historique limité des échanges",
      "Sécurité standard & confidentialité La Poste",
    ],
    cta: "Commencer l’Essai Gratuit",
    highlighted: false,
    period: "mois",
  },
  {
    name: "Confiance",
    description: "Idéale pour être guidé au quotidien",
    price: "24,90€/",
    features: [
      "Questions juridiques illimitées",
      "Analyse de 5 documents / mois",
      "Détection des risques + explications simples",
      "Rédaction de modèles juridiques standards",
      "Sécurité standard & confidentialité La Poste",
      "Intégration basique (WhatsApp, mail) ",
      "Stockage sécurisé des échanges (serveurs FR)",
      "Support prioritaire",
    ],
    cta: "Commencer l’Essai Gratuit",
    highlighted: true,
    badge: "Plus populaire",
    period: "mois",
  },
  {
    name: "Entreprise",
    description: "Idéale pour des besoins juridiques renforcés",
    price: "59,90€/",
    features: [
      "Questions & analyses de documents illimitées",
      "Rédaction avancée de documents (clauses personnalisées)",
      "Intégration dans outils métiers (CRM, GED…)",
      "Assistance proactive : alertes réglementaires personnalisées",
      "Possibilité de partager des documents avec un expert juridique partenaire",
    ],
    cta: "Demander un devis",
    highlighted: false,
    period: "mois",
  },
];

export const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      className="py-12 px-4 mb-24"
      ref={ref}
      style={{ backgroundColor: "#F8FAFF" }}
    >
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
            Tarification simple et transparente
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            style={{ color: "#0D2073" }}
          >
            Choisissez l’offre qui correspond à vos besoins professionnels
          </p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 max-w-7xl mx-auto ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primary/5 border-primary shadow-2xl scale-105 hover-lift hover-glow"
                  : "bg-card border-border hover:border-primary/50 hover:shadow-lg"
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
                background:
                  "linear-gradient(201.34deg, #DEE4FF 44.07%, #8B9BE8 94.16%)",
              }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg"
                    style={{
                      background:
                        "linear-gradient(90deg, #112372 4.81%, #53F3EA 100%)",
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3
                    className="text-3xl font-bold mb-2 text-center"
                    style={{ color: "#0D2073" }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground text-center"
                    style={{ color: "#0D2073" }}
                  >
                    {plan.description}
                  </p>
                </div>
                <div className="py-4">
                  <div
                    className="flex items-baseline gap-1"
                    style={{ justifyContent: "center", color: "#0D2073" }}
                  >
                    <span className={`text-2xl font-bold`}>{plan.price}</span>
                    {plan.period && (
                      <span
                        className="text-muted-foreground"
                        style={{
                          color: "#0D2073",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                  }}
                >
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                        : "variant-outline"
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                    style={{
                      background: plan.highlighted
                        ? "linear-gradient(90deg, #112372 4.81%, #53F3EA 100%)"
                        : undefined,
                    }}
                  >
                    {plan.cta}
                  </Button>
                  <p
                    style={{
                      color: "#0D2073",
                      fontWeight: "300",
                      fontSize: "11px",
                      textAlign: "center",
                    }}
                  >
                    Sans engagement - annulation à tout moment
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
