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
                Design & Development Studio creating digital experiences that work beautifully.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Navigation</h4>
                <div className="space-y-2">
                  <a href="/#services" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Services</a>
                  <a href="/#projects" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Projects</a>
                  <a href="/blog" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Blog</a>
                  <a href="/#testimonials" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Testimonials</a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Services</h4>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">Brand Design</p>
                  <p className="text-muted-foreground text-sm">Web/App Development</p>
                  <p className="text-muted-foreground text-sm">UX/UI Design</p>
                  <p className="text-muted-foreground text-sm">Print Design</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Contact</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>hello@ulijn.digital</p>
                  <p>LinkedIn: /company/ulijn-digital</p>
                  <p>Amsterdam, Netherlands</p>
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