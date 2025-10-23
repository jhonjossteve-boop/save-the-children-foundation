import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  backgroundImage: string;
  onDonateClick?: () => void;
  onLearnMoreClick?: () => void;
}

export default function HeroSection({ 
  backgroundImage, 
  onDonateClick,
  onLearnMoreClick 
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Change Lives with <span className="text-primary">Your Generosity</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Every donation brings hope, health, and happiness to communities in need. 
          Join thousands of supporters making a real difference.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            size="lg"
            className="bg-chart-2 hover:bg-chart-2 text-white px-8 py-6 text-lg border border-chart-2"
            onClick={onDonateClick}
            data-testid="button-donate-hero"
          >
            <Heart className="w-5 h-5 mr-2" />
            Donate Now
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg"
            onClick={onLearnMoreClick}
            data-testid="button-learn-more"
          >
            Learn Our Story
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
        
        <p className="mt-8 text-white/70 text-sm">
          Join 50,000+ supporters making an impact worldwide
        </p>
      </div>
    </section>
  );
}
