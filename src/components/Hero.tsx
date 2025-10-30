import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden geometric-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Geometric decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-accent-coral/20 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-16 w-24 h-24 border-4 border-accent-cyan/20 rotate-45" />
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-accent-emerald/10 rounded-full blur-2xl" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block">
            <span className="px-4 py-2 bg-accent-cyan/10 text-accent-cyan rounded-full text-sm font-medium">
              UX/UI Designer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            Crafting Digital
            <span className="block mt-2 bg-gradient-to-r from-accent-coral via-accent-cyan to-accent-emerald bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming complex problems into elegant, user-centered design solutions
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-4">
            <a 
              href="#case-studies" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-hover transition-all hover:scale-105"
            >
              View Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
