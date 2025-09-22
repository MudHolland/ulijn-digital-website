const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-sarina text-5xl md:text-7xl text-primary mb-6 leading-tight">
            Dennis Ulijn
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-foreground mb-8">
            Interaction Designer
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              "Ik ontwerp innovatieve interacties met een focus op de gebruiker en het waarom achter hun behoeften. 
              Door mijn analytische blik en creativiteit te combineren, vertaal ik complexe vraagstukken naar intuïtieve oplossingen."
            </p>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Bekijk mijn werk
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors">
              Neem contact op
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