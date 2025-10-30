import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CaseStudies />
      <Contact />
      
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© 2024 UX/UI Portfolio. Designed with passion.</p>
      </footer>
    </div>
  );
};

export default Index;
