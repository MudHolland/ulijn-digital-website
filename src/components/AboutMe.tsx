import dennisPhoto from "@/assets/DennisUlijn-2024-10.png";

const AboutMe = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Over Dennis</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hoi, ik ben Dennis Ulijn, de oprichter van ulijn digital. Met meer dan tien jaar ervaring 
                  in design en development, heb ik merken geholpen hun digitale aanwezigheid te transformeren 
                  door doordacht design en robuuste technische oplossingen.
                </p>
                <p>
                  Mijn aanpak combineert strategisch denken met hands-on uitvoering. Of het nu gaat om het 
                  creëren van een merkidentiteit vanaf nul, het ontwerpen van intuïtieve gebruikerservaringen, 
                  of het bouwen van full-stack applicaties, ik ben toegewijd aan het leveren van oplossingen 
                  die er niet alleen geweldig uitzien, maar ook naadloos werken.
                </p>
                <p>
                  Ik geloof in de kracht van samenwerking en heldere communicatie. Elk project is een kans 
                  om complexe uitdagingen op te lossen met elegante, gebruikersgerichte oplossingen die 
                  echte bedrijfsresultaten opleveren.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-3"></div>
                <img 
                  src={dennisPhoto} 
                  alt="Dennis Ulijn"
                  className="relative rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
