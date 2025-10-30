import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Create Something
            <span className="block mt-2 bg-gradient-to-r from-accent-coral via-accent-cyan to-accent-emerald bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Always excited to collaborate on meaningful projects that make a difference
          </p>
          
          <div className="flex items-center justify-center gap-6 pt-8">
            <a 
              href="mailto:hello@designer.com" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-hover transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-8">
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-cyan transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
