import { Button } from "@/components/ui/button";
import { Heart, Clock } from "lucide-react";

interface CTASectionProps {
  onDonateClick?: () => void;
  onRecurringClick?: () => void;
}

export default function CTASection({ onDonateClick, onRecurringClick }: CTASectionProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-card/50 to-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
          Your contribution today will bring hope, health, and happiness to families in need. 
          Together, we can create lasting change.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            size="lg"
            className="bg-chart-2 hover:bg-chart-2 text-white px-8 py-6 text-lg border border-chart-2"
            onClick={onDonateClick}
            data-testid="button-donate-cta"
          >
            <Heart className="w-5 h-5 mr-2" />
            Make a One-Time Gift
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            onClick={onRecurringClick}
            data-testid="button-recurring"
          >
            <Clock className="w-5 h-5 mr-2" />
            Become a Monthly Donor
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-muted-foreground">
          All donations are tax-deductible. You'll receive a receipt via email.
        </p>
      </div>
    </section>
  );
}
