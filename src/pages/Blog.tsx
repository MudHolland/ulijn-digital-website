import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import klmMockup from "@/assets/KLM-mockup.png";

const blogPosts = [
  {
    slug: "dedicon-prototype-ontwerp",
    title: "Gebruikersgerichte prototype-ontwerp beeldbeschrijvingssoftware voor Dedicon",
    date: "Juni 2024",
    tags: ["UI/UX Design", "Prototyping", "User Research"],
    description: "Binnen dit project heb ik met meerdere afdelingen een gebruikersinterface ontworpen die productieafdelingen van Dedicon in staat stelt nieuwe beeldbeschrijvingen op te stellen op basis van beschikbare informatie, beeldbeschrijving over te nemen van eerder vastgelegde afbeeldingen of beeldbeschrijvingen (automatisch) te genereren op basis van generatieve AI."
  },
  {
    slug: "gemeente-arnhem-omgevingsbeleving",
    title: "Conceptualisatie, prototype-ontwerp en ontwikkeling omgevingsbeleving van voetgangers voor Gemeente Arnhem",
    date: "Juni 2023",
    tags: ["Concept Design", "Research", "Development"],
    description: "Gemeente Arnhem wil een mobiliteitsshift creëren, uit de auto en in de benenwagon. In dit project heb ik als communicatie-ontwerper middels biebonderzoeken, expert interviews en co-creatiesessies met inwoners van Arnhem onderzocht wat mensen drijft te lopen en hoe de omgeving de beleving van de voetganger beïnvloedt."
  },
  {
    slug: "klm-app-uitbreiding",
    title: "Uitbreiding voor de klantervaring van de KLM-dienstverlening middels uitbreiding van de KLM-app",
    date: "December 2021",
    tags: ["App Design", "Service Design", "User Testing"],
    description: "KLM heeft haar klantreis van voor tot achter ontworpen om de reiziger zich bij KLM thuis en gewaardeerd te laten voelen. In dit project heb ik voor KLM onderzocht middels Cultural Probes wat deze gebruiker denkt en voelt tijdens de voorbereiding van een (vlieg-)reis."
  }
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Blog Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold text-foreground mb-6">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Inzichten, ervaringen en verhalen uit de wereld van UX design en gebruikersonderzoek.
            </p>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <Link key={index} to={`/blog/${post.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20 bg-card hover:scale-[1.02] cursor-pointer active:scale-[0.98] overflow-hidden">
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                    <img 
                      src={klmMockup} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Blog
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors mb-3">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-secondary/50 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;