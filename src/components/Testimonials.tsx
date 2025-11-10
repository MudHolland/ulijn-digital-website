import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Working with ulijn digital transformed our brand identity. Their attention to detail and strategic thinking resulted in a cohesive brand that truly represents our values.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    content: "The UX design process was exceptional. They took time to understand our users and delivered an interface that significantly improved our conversion rates.",
    rating: 5
  },
  {
    name: "Emma Williams",
    role: "Marketing Director, GrowthLabs",
    content: "From concept to execution, ulijn digital exceeded our expectations. Their full-stack development skills and design expertise made our project a success.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Wat klanten zeggen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vertrouwd door bedrijven voor uitzonderlijke digitale ervaringen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
