import CaseStudyCard from "./CaseStudyCard";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Study Kit Spark",
      description: "A comprehensive learning platform designed to enhance student engagement through gamification and adaptive learning paths.",
      category: "EdTech Platform",
      accentColor: "coral" as const,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    },
    {
      title: "HealthConnect",
      description: "Streamlining patient-doctor communication with an intuitive telemedicine interface that prioritizes accessibility and ease of use.",
      category: "Healthcare App",
      accentColor: "cyan" as const,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      title: "EcoTrack",
      description: "Empowering users to monitor and reduce their carbon footprint through data visualization and actionable sustainability insights.",
      category: "Sustainability",
      accentColor: "emerald" as const,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    },
    {
      title: "TaskFlow Pro",
      description: "Reimagining project management with a focus on visual workflow design and seamless team collaboration.",
      category: "Productivity Tool",
      accentColor: "yellow" as const,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    },
  ];

  return (
    <section id="case-studies" className="py-24 px-6 bg-background relative">
      {/* Decorative geometric elements */}
      <div className="absolute top-32 right-10 w-40 h-40 bg-accent-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-10 w-40 h-40 bg-accent-emerald/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            Selected Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing user-centered design thinking and creative problem-solving
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
