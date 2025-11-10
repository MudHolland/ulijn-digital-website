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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="font-sarina text-4xl text-primary mb-4">ulijn digital</div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Design & Development Studio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-center md:text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Navigatie</h4>
                <div className="space-y-2">
                  <a href="/#services" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Services</a>
                  <a href="/#projects" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Projects</a>
                  <a href="/#about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Over</a>
                  <a href="/#testimonials" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Testimonials</a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Contact</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">Ulijn Digital</p>
                  <p>Wrijfschaalpad 25</p>
                  <p>5347 HX Oss</p>
                  <p className="pt-2">Tel: +31 (0) 6 46 037 987</p>
                  <p>KVK-nummer: 98419315</p>
                  <p className="pt-2">info@ulijn.digital</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 ulijn digital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;