import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="case-studies">
        <CaseStudies />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© 2024 UX/UI Portfolio. Designed with passion.</p>
      </footer>
    </div>
  );
};

export default Index;
