import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import usecaseCommerce from "@/assets/usecase-commerce.png";
import usecaseArtisan from "@/assets/usecase-artisan.png";
import usecaseService from "@/assets/usecase-service.png";

const useCases = [
  {
    title: "Commerce & Restauration",
    sector: "Retail, Hôtellerie, Restauration",
    challenges: [
      "Contrats fournisseurs complexes",
      "Conformité RGPD pour les données clients",
      "Règlementation sanitaire et affichage obligatoire"
    ],
    solution: "L'assistant analyse vos contrats, vous alerte sur les clauses à risque et vous guide dans la mise en conformité RGPD de manière simple et accessible.",
    image: usecaseCommerce
  },
  {
    title: "Artisans & BTP",
    sector: "Construction, Artisanat, Travaux",
    challenges: [
      "Contrats de sous-traitance et clauses de garantie",
      "Réglementation des chantiers et sécurité",
      "Gestion des litiges avec les clients"
    ],
    solution: "Recevez des conseils personnalisés sur vos contrats de chantier, comprenez vos obligations légales et anticipez les risques juridiques avant qu'ils ne surviennent.",
    image: usecaseArtisan
  },
  {
    title: "Services & Conseil",
    sector: "Consulting, Agences, Freelances",
    challenges: [
      "Protection de la propriété intellectuelle",
      "Contrats clients et conditions générales",
      "Gestion des retards de paiement"
    ],
    solution: "Sécurisez vos prestations avec des contrats adaptés, protégez vos créations et obtenez des réponses claires sur le recouvrement de créances.",
    image: usecaseService
  }
];

export const UseCases = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-24 px-4 bg-muted/30" ref={ref}>
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-title-alt">
            Des solutions adaptées à votre activité
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment notre assistant juridique répond aux défis spécifiques de votre secteur
          </p>
        </div>

        <div className={`max-w-5xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <Carousel className="w-full">
            <CarouselContent>
              {useCases.map((useCase, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
                      <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
                        {/* Contenu texte */}
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-3xl lg:text-4xl font-bold mb-2">{useCase.title}</h3>
                            <p className="text-primary font-medium">{useCase.sector}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-3">Défis courants :</h4>
                            <ul className="space-y-2">
                              {useCase.challenges.map((challenge, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4 border-t border-border">
                            <h4 className="text-lg font-semibold mb-2">Notre solution :</h4>
                            <p className="text-muted-foreground leading-relaxed">{useCase.solution}</p>
                          </div>
                        </div>

                        {/* Image */}
                        <div className="flex items-center">
                          <div className="relative rounded-xl overflow-hidden w-full">
                            <div className="absolute inset-0 bg-gradient-glow opacity-10 blur-xl" />
                            <img 
                              src={useCase.image} 
                              alt={`Illustration ${useCase.title}`}
                              className="relative w-full h-auto object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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
