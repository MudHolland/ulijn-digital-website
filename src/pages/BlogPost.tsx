import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import klmMockup from "@/assets/KLM-mockup.png";

const BlogPost = () => {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample blog post data - in real app this would come from API/CMS
  const post = {
    title: "Gebruikersgerichte prototype-ontwerp beeldbeschrijvingssoftware voor Dedicon",
    author: "Dennis Ulijn",
    date: "Juni 2024",
    content: `
      <p>Binnen dit project heb ik met meerdere afdelingen een gebruikersinterface ontworpen die productieafdelingen van Dedicon in staat stelt nieuwe beeldbeschrijvingen op te stellen op basis van beschikbare informatie.</p>
      
      <h2>Het probleem</h2>
      <p>Dedicon, een organisatie die zich richt op toegankelijkheid voor mensen met een leesbeperking, had behoefte aan een efficiënte manier om beeldbeschrijvingen te creëren voor hun publicaties. Het bestaande proces was tijdrovend en niet gebruiksvriendelijk.</p>
      
      <h2>Onderzoeksaanpak</h2>
      <p>Door middel van Contextual Inquiries heb ik de werkprocessen van de productieafdelingen in kaart gebracht. Deze methode stelde mij in staat om:</p>
      <ul>
        <li>De huidige werkflow te begrijpen</li>
        <li>Pijnpunten te identificeren</li>
        <li>Gebruikersbehoeften in context te observeren</li>
      </ul>
      
      <h2>Design proces</h2>
      <p>Het ontwerpproces volgde een iteratieve aanpak waarin ik nauw samenwerkte met eindgebruikers:</p>
      
      <h3>Task Flow Mapping</h3>
      <p>Samen met de gebruikers heb ik de complete workflow in kaart gebracht, van het ontvangen van materiaal tot het publiceren van de eindversie met beeldbeschrijvingen.</p>
      
      <h3>Co-creatie sessies</h3>
      <p>In verschillende sessies hebben we samen low-fidelity prototypes ontwikkeld, waarbij gebruikers direct feedback konden geven en meedenken over de interface.</p>
      
      <h2>Eindresultaat</h2>
      <p>Het resultaat was een intuïtieve interface die het mogelijk maakte om:</p>
      <ul>
        <li>Nieuwe beeldbeschrijvingen efficiënt op te stellen</li>
        <li>Bestaande beschrijvingen te hergebruiken</li>
        <li>AI-gegenereerde beschrijvingen te integreren</li>
      </ul>
      
      <p>Door de gebruikersgerichte aanpak werd niet alleen de efficiency verhoogd, maar ook de acceptatie van het nieuwe systeem binnen de organisatie.</p>
    `
  };

  const openImage = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <Layout>
      <article className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Article Hero */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              Geschreven door {post.author} in {post.date}
            </p>
          </div>
          
          {/* Featured Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <img 
              src={klmMockup} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => openImage(klmMockup)}
            />
          </div>
          
          {/* Article Content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="text-foreground leading-relaxed space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Binnen dit project heb ik met meerdere afdelingen een gebruikersinterface ontworpen die productieafdelingen van Dedicon in staat stelt nieuwe beeldbeschrijvingen op te stellen op basis van beschikbare informatie.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Het probleem</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dedicon, een organisatie die zich richt op toegankelijkheid voor mensen met een leesbeperking, had behoefte aan een efficiënte manier om beeldbeschrijvingen te creëren voor hun publicaties. Het bestaande proces was tijdrovend en niet gebruiksvriendelijk.
              </p>
              
              <div className="my-8">
                <img 
                  src={klmMockup} 
                  alt="Process visualization"
                  className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => openImage(klmMockup)}
                />
              </div>
              
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Onderzoeksaanpak</h2>
              <p className="text-muted-foreground leading-relaxed">
                Door middel van Contextual Inquiries heb ik de werkprocessen van de productieafdelingen in kaart gebracht. Deze methode stelde mij in staat om:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
                <li>De huidige werkflow te begrijpen</li>
                <li>Pijnpunten te identificeren</li>
                <li>Gebruikersbehoeften in context te observeren</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Design proces</h2>
              <p className="text-muted-foreground leading-relaxed">
                Het ontwerpproces volgde een iteratieve aanpak waarin ik nauw samenwerkte met eindgebruikers:
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Task Flow Mapping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Samen met de gebruikers heb ik de complete workflow in kaart gebracht, van het ontvangen van materiaal tot het publiceren van de eindversie met beeldbeschrijvingen.
              </p>
              
              <div className="my-8">
                <img 
                  src={klmMockup} 
                  alt="Task flow diagram"
                  className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => openImage(klmMockup)}
                />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Co-creatie sessies</h3>
              <p className="text-muted-foreground leading-relaxed">
                In verschillende sessies hebben we samen low-fidelity prototypes ontwikkeld, waarbij gebruikers direct feedback konden geven en meedenken over de interface.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Eindresultaat</h2>
              <p className="text-muted-foreground leading-relaxed">
                Het resultaat was een intuïtieve interface die het mogelijk maakte om:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4 space-y-2">
                <li>Nieuwe beeldbeschrijvingen efficiënt op te stellen</li>
                <li>Bestaande beschrijvingen te hergebruiken</li>
                <li>AI-gegenereerde beschrijvingen te integreren</li>
              </ul>
              
              <p className="text-muted-foreground leading-relaxed mt-6">
                Door de gebruikersgerichte aanpak werd niet alleen de efficiency verhoogd, maar ook de acceptatie van het nieuwe systeem binnen de organisatie.
              </p>
            </div>
          </div>
        </div>
      </article>
      
      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] p-0 bg-black/90">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Full size view"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default BlogPost;