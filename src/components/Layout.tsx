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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="text-center md:text-left">
              <div className="font-sarina text-3xl text-primary mb-4">dennisulijn</div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                UX Designer die complexe vraagstukken vertaalt naar intuïtieve oplossingen.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>info@dennisulijn.com</p>
                <p>LinkedIn: /in/dennisulijn</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-foreground mb-4">Navigatie</h4>
              <div className="space-y-2">
                <a href="/blog" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Blog</a>
                <a href="/tags" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Tags</a>
                <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">About</a>
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