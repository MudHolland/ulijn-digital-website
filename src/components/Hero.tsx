import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/30" />
      
      {/* Parallax Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-sarina text-5xl md:text-7xl text-primary mb-6 leading-tight">
            Dennis Ulijn
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-foreground mb-8">
            Interaction Designer
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light italic">
              "Ik ontwerp innovatieve interacties met een focus op de gebruiker en het waarom achter hun behoeften. 
              Door mijn analytische blik en creativiteit te combineren, vertaal ik complexe vraagstukken naar intuïtieve oplossingen."
            </p>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95">
              <span className="group-hover:scale-110 transition-transform duration-200 inline-block">Bekijk mijn werk</span>
            </button>
            <button className="group border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95">
              <span className="group-hover:scale-110 transition-transform duration-200 inline-block">Neem contact op</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Subtle decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
};

export default Hero;