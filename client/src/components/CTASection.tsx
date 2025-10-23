import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Make a Difference Today
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Your donation can change a child's life forever. Join thousands of supporters making an impact.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="text-lg px-8 py-6"
          data-testid="button-donate-cta"
        >
          Start Your Donation
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
