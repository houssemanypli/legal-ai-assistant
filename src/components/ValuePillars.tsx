import { Shield, Zap, Target } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Sécurité & Confiance",
    values: [
      "Confidentialité renforcée",
      "Données hébergées en France",
      "Serveurs certifiés",
      "Fiabilité des sources juridiques"
    ]
  },
  {
    icon: Zap,
    title: "Simplicité & Accessibilité",
    values: [
      "Interface claire et intuitive",
      "Langage vulgarisé pour non-juristes",
      "Explications pédagogiques",
      "Expérience rassurante"
    ]
  },
  {
    icon: Target,
    title: "Personnalisation & Pertinence",
    values: [
      "Conseils adaptés à l'activité",
      "Analyse personnalisée des documents",
      "Suggestions contextualisées",
      "Suivi progressif via historique"
    ]
  }
];

export const ValuePillars = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Une solution complète, intuitive et sécurisée
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ce qui fait notre différence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="text-center space-y-6 p-8 rounded-2xl bg-card border border-border hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex w-20 h-20 rounded-full gradient-ai items-center justify-center shadow-ai-glow">
                <pillar.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold">{pillar.title}</h3>
              
              <ul className="space-y-3 text-left">
                {pillar.values.map((value, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
