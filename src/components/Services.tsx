import { useState } from "react";
import { Palette, Lightbulb, Monitor, Code, Printer } from "lucide-react";
import Modal from "./Modal";
import klmMockup from "@/assets/KLM-mockup.png";

interface Service {
  id: string;
  icon: any;
  title: string;
  subtitle: string;
  details: string[];
  content: string;
}

const services: Service[] = [
  {
    id: "brand-design",
    icon: Palette,
    title: "Brand Design",
    subtitle: "Visual Identity & Strategy",
    details: ["Logo Design", "Visual Identity", "Guidelines/Styleguides", "Brand Strategy & Positioning"],
    content: "Creating comprehensive brand identities that resonate with your audience. From conceptual exploration to final guidelines, we ensure your brand stands out with a cohesive visual language that communicates your values and mission effectively."
  },
  {
    id: "print-design",
    icon: Printer,
    title: "Print Design",
    subtitle: "Marketing Materials",
    details: ["Business Cards & Stationery", "Brochure & Marketing Materials", "Packaging Design", "Exhibition & Display Graphics"],
    content: "Designing impactful print materials that extend your brand into the physical world. From business cards to large-scale exhibition graphics, we ensure every touchpoint reflects your brand's quality and values."
  },
  {
    id: "concept-design",
    icon: Lightbulb,
    title: "Project/Concept Design",
    subtitle: "Research & Development",
    details: ["Design Thinking Workshops", "User Research & Personas", "Concept Development", "Prototyping & Testing"],
    content: "Transform ideas into tangible concepts through collaborative workshops and user-centered research. We develop prototypes and test assumptions to ensure your product meets real user needs before full-scale development."
  },
  {
    id: "web-app-design",
    icon: Monitor,
    title: "Web/App Design",
    subtitle: "User Experience & Interface",
    details: ["UX Design", "UI Design", "Wireframing", "Design Systems & Components"],
    content: "Crafting intuitive digital experiences that delight users. We create wireframes, high-fidelity designs, and comprehensive design systems that ensure consistency and scalability across your digital products."
  },
  {
    id: "web-app-dev",
    icon: Code,
    title: "Web/App Development",
    subtitle: "Full-Stack Solutions",
    details: ["React/Angular", "Responsive Design", "Full-Stack Solutions", "Performance Optimization"],
    content: "Building robust, performant web applications using modern frameworks. We deliver responsive, accessible solutions optimized for speed and user experience, with full-stack capabilities for complete digital products."
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end design and development services for digital brands
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" />

              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={service.id}
                    className={`relative mb-12 md:mb-16 md:w-1/2 ${
                      isEven ? "md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-[calc(100%+2px)] md:top-6 w-4 h-4 bg-primary rounded-full border-4 border-background" 
                         style={isEven ? {} : { left: 'auto', right: 'calc(100% + 2px)' }} />

                    {/* Content card */}
                    <div className="ml-20 md:ml-0">
                      <div
                        className="bg-card border border-border rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50 group"
                        onClick={() => setSelectedService(service)}
                      >
                        <div className={`flex items-start gap-4 ${isEven ? "md:flex-row-reverse" : ""}`}>
                          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{service.subtitle}</p>
                            <ul className={`text-sm space-y-1 ${isEven ? "md:text-right" : ""}`}>
                              {service.details.map((detail, i) => (
                                <li key={i} className="text-muted-foreground">• {detail}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ""}
        heroImage={klmMockup}
      >
        {selectedService && (
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground">{selectedService.subtitle}</p>
            <p className="text-lg leading-relaxed">{selectedService.content}</p>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">What's Included</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {selectedService.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <p className="text-center text-muted-foreground italic">
                Example projects and case studies for this service coming soon.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Services;
