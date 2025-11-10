const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      
      {/* Parallax Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-sarina text-5xl md:text-7xl text-primary mb-6 leading-tight">
            ulijn digital
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-foreground mb-8">
            Design & Development Studio
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light italic">
              "We creëren digitale ervaringen die naadloos werken. Van merkidentiteit tot full-stack development, we transformeren complexe uitdagingen naar intuïtieve oplossingen."
            </p>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden"
            >
              <span className="group-hover:scale-110 transition-transform duration-200 inline-block relative z-10">Onze Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border border-primary text-primary px-8 py-3 font-medium hover:bg-primary/5 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden rounded-full"
            >
              <span className="group-hover:scale-110 transition-transform duration-200 inline-block relative z-10">Neem Contact Op</span>
              <div className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-200 rounded-full" />
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