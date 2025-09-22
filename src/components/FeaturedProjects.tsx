import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Gebruikersgerichte prototype-ontwerp beeldbeschrijvingssoftware voor Dedicon",
    date: "Juni 2024",
    tags: ["UI/UX Design", "Prototyping", "User Research"],
    description: "Binnen dit project heb ik met meerdere afdelingen een gebruikersinterface ontworpen die productieafdelingen van Dedicon in staat stelt nieuwe beeldbeschrijvingen op te stellen op basis van beschikbare informatie, beeldbeschrijving over te nemen van eerder vastgelegde afbeeldingen of beeldbeschrijvingen (automatisch) te genereren op basis van generatieve AI. Deze interface kwam tot stand met een focus op het overtuigen van een gebruikersgerichte ontwerpaanpak door gebruik te maken van Contextual Inquiries, Task Flow-mapping en co-creatie van low-, mid- en high-fidelity prototypes met de gebruikers."
  },
  {
    title: "Conceptualisatie, prototype-ontwerp en ontwikkeling omgevingsbeleving van voetgangers voor Gemeente Arnhem",
    date: "Juni 2023",
    tags: ["Concept Design", "Research", "Development"],
    description: "Gemeente Arnhem wil een mobiliteitsshift creëren, uit de auto en in de benenwagen. In dit project heb ik als communicatie-ontwerper middels biebonderzoeken, expert interviews en co-creatiesessies met inwoners van Arnhem onderzocht wat mensen drijft te lopen en hoe de omgeving de beleving van de voetganger beïnvloedt. In samenwerking met ICT-en BIM-studenten heb ik een interface ontworpen en ontwikkeld die de invloed van de omgeving inschaalt en weergeeft. Dit resultaat biedt de gemeente Arnhem inzicht in de reikwijdte van wandelend Arnhem en de handvatten om deze te optimaliseren."
  },
  {
    title: "Uitbreiding voor de klantervaring van de KLM-dienstverlening middels uitbreiding van de KLM-app",
    date: "December 2021",
    tags: ["App Design", "Service Design", "User Testing"],
    description: "KLM heeft haar klantreis van voor tot achter ontworpen om de reiziger zich bij KLM thuis en gewaardeerd te laten voelen. In dit project heb ik voor KLM onderzocht middels Cultural Probes wat deze gebruiker denkt en voelt tijdens de voorbereiding van een (vlieg-)reis. Door de onderdelen van de dienstverlening van KLM en de klantervaring samen te laten komen, vond ik de grootste pijnpunten en stressoren van de klantreis voor zowel reizigers als KLM-personeel, 'wachttijden en onduidelijkheden op het vliegveld'. Om de reiziger hierin te ondersteunen, bouwde ik een prototype van gesproken begeleiding in de KLM-app en testte deze met gebruikers en medewerkers van KLM."
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Recente Uitgelichte Projecten
          </h2>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20 bg-card hover:scale-[1.02] cursor-pointer active:scale-[0.98] overflow-hidden">
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Uitgelicht
                  </span>
                </div>
                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors mb-3">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span>{project.date}</span>
                  <span>•</span>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-secondary/50 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;