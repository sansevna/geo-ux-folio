import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-coral via-accent-cyan to-accent-emerald flex items-center justify-center text-background font-bold text-sm">
              AY
            </div>
            <span className="text-lg font-semibold">Alexandra Yasny</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-accent-cyan transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent-cyan transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="text-foreground hover:text-accent-cyan transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-accent-cyan transition-colors"
            >
              Skills
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left text-foreground hover:text-accent-cyan transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-foreground hover:text-accent-cyan transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="text-left text-foreground hover:text-accent-cyan transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-left text-foreground hover:text-accent-cyan transition-colors"
            >
              Skills
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
