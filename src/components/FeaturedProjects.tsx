import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Modal from "./Modal";
import klmMockup from "@/assets/KLM-mockup.png";

interface Project {
  id: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  fullContent: string;
}

const projects: Project[] = [
  {
    id: "klm-digital",
    title: "KLM Digital Experience",
    date: "October 2024",
    tags: ["UX Design", "Research", "Prototyping"],
    description: "Redesigning the digital booking experience for one of Europe's leading airlines, focusing on mobile-first design and accessibility.",
    fullContent: "This comprehensive project involved reimagining the entire digital booking experience for KLM Royal Dutch Airlines. Through extensive user research and usability testing, we identified key pain points in the existing booking flow and created a streamlined, mobile-first solution that increased conversion rates by 35%. The project included user interviews, competitive analysis, wireframing, prototyping, and extensive A/B testing to validate our design decisions."
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Dashboard",
    date: "September 2024",
    tags: ["UI Design", "Data Visualization", "Web App"],
    description: "Creating an intuitive dashboard for financial advisors to monitor and manage client portfolios with real-time data visualization.",
    fullContent: "Developed a sophisticated data visualization platform for financial advisors managing multi-million dollar portfolios. The dashboard features real-time market data, customizable widgets, and advanced analytics tools. We conducted extensive research with financial advisors to understand their workflow and information needs, resulting in a tool that reduced decision-making time by 40% and improved client satisfaction scores significantly."
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    date: "August 2024",
    tags: ["UX/UI", "E-commerce", "Mobile"],
    description: "Building a seamless shopping experience with personalized recommendations and streamlined checkout process.",
    fullContent: "Created a modern e-commerce platform with AI-powered personalization and a frictionless checkout experience. The project focused on reducing cart abandonment through strategic UX improvements, including guest checkout, saved payment methods, and real-time inventory updates. Implementation of personalized product recommendations increased average order value by 28% and customer retention by 45%."
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    date: "July 2024",
    tags: ["Mobile", "Healthcare", "Accessibility"],
    description: "Patient-centered mobile application for managing appointments, prescriptions, and health records.",
    fullContent: "Designed and developed a comprehensive healthcare app that puts patients in control of their medical journey. The app features appointment scheduling, prescription management, secure messaging with healthcare providers, and access to medical records. Special attention was paid to accessibility compliance and data security, ensuring HIPAA compliance while maintaining an intuitive user experience."
  },
  {
    id: "saas-platform",
    title: "SaaS Project Management",
    date: "June 2024",
    tags: ["Web App", "SaaS", "Collaboration"],
    description: "Collaborative project management platform for distributed teams with real-time updates.",
    fullContent: "Built a powerful project management SaaS platform designed for modern distributed teams. Features include real-time collaboration, advanced task management, time tracking, and comprehensive reporting tools. The platform was built with scalability in mind, supporting teams from 5 to 500+ members. User research and iterative testing resulted in a 92% user satisfaction rate."
  },
  {
    id: "brand-identity",
    title: "Tech Startup Branding",
    date: "May 2024",
    tags: ["Branding", "Visual Identity", "Guidelines"],
    description: "Complete brand identity development for an AI-focused startup, from logo to comprehensive guidelines.",
    fullContent: "Developed a complete brand identity system for an emerging AI technology startup. The project included logo design, color palette, typography system, icon set, and comprehensive brand guidelines. We conducted workshops with stakeholders to understand their vision and values, translating them into a modern, tech-forward visual identity that resonated with their target audience of enterprise clients and investors."
  }
];

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Uitgelichte Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recent werk dat onze aanpak van digitaal design en development laat zien
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="overflow-hidden aspect-video">
                  <img 
                    src={klmMockup}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <span className="text-xs text-muted-foreground">
                    {project.date}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        heroImage={klmMockup}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag, i) => (
                <Badge key={i} variant="secondary">{tag}</Badge>
              ))}
            </div>
            
            <p className="text-muted-foreground">{selectedProject.date}</p>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h3>Project Overzicht</h3>
              <p className="text-lg leading-relaxed">{selectedProject.description}</p>
              
              <h3>Project Details</h3>
              <p className="leading-relaxed">{selectedProject.fullContent}</p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Uitdaging</h4>
                  <p className="text-sm text-muted-foreground">
                    Een oplossing creëren die gebruikersbehoeften balanceert met bedrijfsdoelstellingen, terwijl technische haalbaarheid behouden blijft.
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Resultaat</h4>
                  <p className="text-sm text-muted-foreground">
                    Een uitgebreide oplossing opgeleverd die de verwachtingen van de klant overtrof en meetbare impact realiseerde.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default FeaturedProjects;