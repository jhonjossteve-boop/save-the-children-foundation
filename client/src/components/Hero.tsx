import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Children_learning_at_school_02551d7c.png";

interface HeroProps {
  onDonateClick: () => void;
}

export default function Hero({ onDonateClick }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-[60%_40%] gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">100% of donations reach children</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold font-heading leading-tight">
              Every Child Deserves a{" "}
              <span className="text-primary">Bright Future</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Join Save the Children Foundation in transforming lives. Your support provides education, healthcare, and hope to children in need across 45 countries.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={onDonateClick}
                data-testid="button-donate-hero"
              >
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Donate Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold font-heading text-primary">125K+</div>
                <div className="text-sm text-muted-foreground">Children Helped</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-heading text-primary">$2.5M+</div>
                <div className="text-sm text-muted-foreground">Raised</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-heading text-primary">45</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Children learning at school" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
