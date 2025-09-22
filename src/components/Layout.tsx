import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {children}
      </main>
      <footer className="bg-background border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-sarina text-2xl text-primary mb-4">dennisulijn</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Interaction Designer die complexe vraagstukken vertaalt naar intuïtieve oplossingen.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigatie</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Home</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Over mij</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Projecten</a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Blog</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>info@dennisulijn.com</p>
                <p>LinkedIn: /in/dennisulijn</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Dennis Ulijn. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;