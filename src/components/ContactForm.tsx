import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, User, Mail, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Laten we samenwerken
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Heb je een project in gedachten? Laten we bespreken hoe we jouw visie tot leven kunnen brengen.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-background/80 backdrop-blur-sm border-border shadow-2xl hover:shadow-3xl transition-all duration-300">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="text-xl font-medium text-foreground flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-lg">Nieuw bericht</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <User size={16} />
                    <span>From:</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Jouw naam"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary transition-colors"
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="jouw.email@voorbeeld.nl"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <Mail size={16} />
                    <span>To: info@ulijn.digital</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <MessageCircle size={16} />
                    <span>Subject:</span>
                  </div>
                  <Input
                    name="subject"
                    placeholder="Waar gaat je bericht over?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <MessageCircle size={16} />
                    <span>Message:</span>
                  </div>
                  <Textarea
                    name="message"
                    placeholder="Vertel ons over je project, uitdaging of vraag..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary transition-colors min-h-[120px] resize-none"
                    required
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <Button 
                    type="submit" 
                    className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden rounded-full"
                  >
                    <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    <span className="relative z-10">Verstuur Bericht</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;