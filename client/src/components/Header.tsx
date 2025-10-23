import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <div>
              <h1 className="text-xl font-bold">Save the Children</h1>
              <p className="text-xs text-muted-foreground">Foundation</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#impact" className="text-sm hover:text-primary transition-colors" data-testid="link-impact">
              Our Impact
            </a>
            <a href="#programs" className="text-sm hover:text-primary transition-colors" data-testid="link-programs">
              Programs
            </a>
            <a href="#about" className="text-sm hover:text-primary transition-colors" data-testid="link-about">
              About Us
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button data-testid="button-donate-header" className="hidden md:flex">
              Donate Now
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t pt-4">
            <a href="#impact" className="text-sm hover:text-primary transition-colors" data-testid="link-impact-mobile">
              Our Impact
            </a>
            <a href="#programs" className="text-sm hover:text-primary transition-colors" data-testid="link-programs-mobile">
              Programs
            </a>
            <a href="#about" className="text-sm hover:text-primary transition-colors" data-testid="link-about-mobile">
              About Us
            </a>
            <Button className="w-full" data-testid="button-donate-mobile">
              Donate Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
