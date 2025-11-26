import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Essentiel",
    subtitle: "Free",
    description: "Idéale pour découvrir l'assistant juridique IA",
    price: "Gratuit",
    features: [
      "10 questions juridiques / mois",
      "Réponses instantanées et vulgarisées",
      "Suggestions d'articles juridiques",
      "Historique limité des échanges",
      "Sécurité standard & confidentialité"
    ],
    cta: "Commencer gratuitement",
    highlighted: false
  },
  {
    name: "Confiance",
    subtitle: "Pro",
    description: "Pour les petits pros qui veulent être guidés au quotidien",
    price: "29€",
    period: "/mois",
    features: [
      "Questions juridiques illimitées",
      "Analyse de 5 documents / mois",
      "Détection des risques + explications",
      "Rédaction de modèles juridiques",
      "Intégration WhatsApp & mail",
      "Stockage sécurisé (serveurs FR)",
      "Support prioritaire"
    ],
    cta: "Choisir Pro",
    highlighted: true,
    badge: "Le plus populaire"
  },
  {
    name: "Expert+",
    subtitle: "Premium",
    description: "Pour les pros avec des enjeux juridiques plus sensibles",
    price: "69€",
    period: "/mois",
    features: [
      "Questions & analyses illimitées",
      "Rédaction avancée personnalisée",
      "Intégration CRM & outils métiers",
      "Alertes réglementaires proactives",
      "Espace sécurisé renforcé certifié",
      "Partage avec experts juridiques"
    ],
    cta: "Choisir Premium",
    highlighted: false
  }
];

export const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-24 px-4 bg-background" ref={ref}>
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-title-alt">
            Une offre adaptée à vos besoins
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choisissez la formule qui correspond à votre activité
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 max-w-7xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-primary/5 border-primary shadow-2xl scale-105 hover-lift hover-glow'
                  : 'bg-card border-border hover:border-primary/50 hover:shadow-lg'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                    {plan.subtitle}
                  </p>
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="py-4">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-primary' : ''}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                </div>

                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg'
                      : 'variant-outline'
                  }`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                <div className="pt-6 border-t border-border">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Toutes les offres incluent la confidentialité garantie et le respect du RGPD
          </p>
        </div>
      </div>
    </section>
  );
};
