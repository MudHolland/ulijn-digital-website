import dennisPhoto from "@/assets/DennisUlijn-2024-10.png";

const AboutMe = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Dennis</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm Dennis Ulijn, the founder of ulijn digital. With over a decade of experience 
                  in design and development, I've helped brands transform their digital presence through 
                  thoughtful design and robust technical solutions.
                </p>
                <p>
                  My approach combines strategic thinking with hands-on execution. Whether it's crafting 
                  a brand identity from scratch, designing intuitive user experiences, or building 
                  full-stack applications, I'm committed to delivering solutions that not only look 
                  great but work beautifully.
                </p>
                <p>
                  I believe in the power of collaboration and clear communication. Every project is 
                  an opportunity to solve complex challenges with elegant, user-centered solutions 
                  that drive real business results.
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
