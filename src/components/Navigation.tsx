import { Link } from "react-router-dom";

const Navigation = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-sarina text-2xl text-primary hover:text-accent transition-colors">
            dennisulijn
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </Link>
            <Link to="/tags" className="text-foreground hover:text-primary transition-colors font-medium">
              Tags
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <button 
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground px-6 py-2 font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95 relative overflow-hidden"
              style={{clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)'}}
            >
              <span className="relative z-10">Contact</span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-200"
            >
              Contact
            </button>
            <button className="text-foreground hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;