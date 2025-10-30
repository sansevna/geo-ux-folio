import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Artistic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent-cyan/5 to-accent-coral/10" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-accent-emerald/5 to-transparent" />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-accent-coral rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-cyan rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-emerald rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute bottom-8 right-20 w-72 h-72 bg-accent-yellow rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000" />
      </div>
      
      {/* Geometric decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-accent-coral/20 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-16 w-24 h-24 border-4 border-accent-cyan/20 rotate-45 animate-spin-slow" />
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-accent-emerald/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-accent-yellow/30 rounded-lg rotate-12 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-accent-coral/10 rounded-full blur-xl animate-pulse animation-delay-2000" />
      
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
