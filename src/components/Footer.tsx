import { Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-primary text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-lg">Assistant Juridique IA</p>
              <p className="text-sm text-primary-foreground/80">La Poste — Confiance numérique</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/80">
              © 2024 La Poste. Service sécurisé et confidentiel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
