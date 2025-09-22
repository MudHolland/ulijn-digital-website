import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Gebruikersgerichte prototype-ontwerp beeldbeschrijvingssoftware voor Dedicon",
    date: "Uitgevoerd in juni 2024",
    description: "Binnen dit project heb ik met meerdere afdelingen een gebruikersinterface ontworpen die productieafdelingen van Dedicon in staat stelt nieuwe beeldbeschrijvingen op te stellen op basis van beschikbare informatie, beeldbeschrijving over te nemen van eerder vastgelegde afbeeldingen of beeldbeschrijvingen (automatisch) te genereren op basis van generatieve AI. Deze interface kwam tot stand met een focus op het overtuigen van een gebruikersgerichte ontwerpaanpak door gebruik te maken van Contextual Inquiries, Task Flow-mapping en co-creatie van low-, mid- en high-fidelity prototypes met de gebruikers."
  },
  {
    title: "Conceptualisatie, prototype-ontwerp en ontwikkeling omgevingsbeleving van voetgangers voor Gemeente Arnhem",
    date: "Uitgevoerd in juni 2023", 
    description: "Gemeente Arnhem wil een mobiliteitsshift creëren, uit de auto en in de benenwagen. In dit project heb ik als communicatie-ontwerper middels biebonderzoeken, expert interviews en co-creatiesessies met inwoners van Arnhem onderzocht wat mensen drijft te lopen en hoe de omgeving de beleving van de voetganger beïnvloedt. In samenwerking met ICT-en BIM-studenten heb ik een interface ontworpen en ontwikkeld die de invloed van de omgeving inschaalt en weergeeft. Dit resultaat biedt de gemeente Arnhem inzicht in de reikwijdte van wandelend Arnhem en de handvatten om deze te optimaliseren."
  },
  {
    title: "Uitbreiding voor de klantervaring van de KLM-dienstverlening middels uitbreiding van de KLM-app",
    date: "Uitgevoerd in december 2021",
    description: "KLM heeft haar klantreis van voor tot achter ontworpen om de reiziger zich bij KLM thuis en gewaardeerd te laten voelen. In dit project heb ik voor KLM onderzocht middels Cultural Probes wat deze gebruiker denkt en voelt tijdens de voorbereiding van een (vlieg-)reis. Door de onderdelen van de dienstverlening van KLM en de klantervaring samen te laten komen, vond ik de grootste pijnpunten en stressoren van de klantreis voor zowel reizigers als KLM-personeel, 'wachttijden en onduidelijkheden op het vliegveld'. Om de reiziger hierin te ondersteunen, bouwde ik een prototype van gesproken begeleiding in de KLM-app en testte deze met gebruikers en medewerkers van KLM."
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sarina text-4xl md:text-5xl text-primary mb-4">
            Recente Uitgelichte Projecten
          </h2>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 bg-card">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <CardDescription className="text-accent font-medium text-sm">
                    {project.date}
                  </CardDescription>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;