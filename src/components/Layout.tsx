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
      <footer className="bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Dennis Ulijn. Interaction Designer.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;