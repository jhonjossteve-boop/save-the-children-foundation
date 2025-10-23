import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onDonateClick: () => void;
}

export default function Header({ onDonateClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-2 bg-primary/10 rounded-lg">
              <Heart className="w-6 h-6 text-primary fill-primary" />
            </div>
            <span className="text-xl font-bold font-heading">Save the Children</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('programs')} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-programs"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('impact')} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-impact"
            >
              Impact
            </button>
            <button 
              onClick={() => scrollToSection('donate')} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-donate-nav"
            >
              Donate
            </button>
            <Button onClick={onDonateClick} data-testid="button-donate-header">
              <Heart className="w-4 h-4 mr-2 fill-current" />
              Donate Now
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('programs')} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left px-2 py-2"
              >
                Programs
              </button>
              <button 
                onClick={() => scrollToSection('impact')} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left px-2 py-2"
              >
                Impact
              </button>
              <button 
                onClick={() => scrollToSection('donate')} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left px-2 py-2"
              >
                Donate
              </button>
              <Button onClick={onDonateClick} className="w-full">
                <Heart className="w-4 h-4 mr-2 fill-current" />
                Donate Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
