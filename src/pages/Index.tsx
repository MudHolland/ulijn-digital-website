import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <div id="services">
        <Services />
      </div>
      <FeaturedProjects />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <ContactForm />
    </Layout>
  );
};

export default Index;
