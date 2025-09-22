import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <ContactForm />
    </Layout>
  );
};

export default Index;
