import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CaseStudyCardProps {
  title: string;
  description: string;
  category: string;
  accentColor: "coral" | "cyan" | "emerald" | "yellow";
  image: string;
}

const CaseStudyCard = ({ title, description, category, accentColor, image }: CaseStudyCardProps) => {
  const accentColorClasses = {
    coral: "border-accent-coral/30 hover:border-accent-coral",
    cyan: "border-accent-cyan/30 hover:border-accent-cyan",
    emerald: "border-accent-emerald/30 hover:border-accent-emerald",
    yellow: "border-accent-yellow/30 hover:border-accent-yellow",
  };

  const textColorClasses = {
    coral: "text-accent-coral",
    cyan: "text-accent-cyan",
    emerald: "text-accent-emerald",
    yellow: "text-accent-yellow",
  };

  return (
    <a 
      href="https://study-kit-spark.lovable.app" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className={`overflow-hidden border-2 ${accentColorClasses[accentColor]} hover-lift bg-card shadow-elegant h-full`}>
        <div className="aspect-[4/3] overflow-hidden bg-secondary">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className={`text-sm font-medium ${textColorClasses[accentColor]}`}>
              {category}
            </span>
            <ArrowUpRight className={`w-5 h-5 ${textColorClasses[accentColor]} group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform`} />
          </div>
          
          <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
    </a>
  );
};

export default CaseStudyCard;
