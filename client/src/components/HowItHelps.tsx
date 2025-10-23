import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import impactImage from "@assets/generated_images/Healthcare_worker_with_child_2a10b24f.png";

const ALLOCATIONS = [
  { amount: 25, items: ["School supplies for 3 children", "Basic healthcare checkup"] },
  { amount: 50, items: ["School supplies for 5 children", "Weekly meals for 2 families", "Emergency supplies kit"] },
  { amount: 100, items: ["Healthcare for 10 children", "Month of education support", "Clean water access for a family"] },
  { amount: 250, items: ["Full year education for 1 child", "Emergency relief for 5 families", "Medical care for 25 children"] }
];

export default function HowItHelps() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-heading mb-4">How Your Donation Helps</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete transparency in how every dollar makes a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {ALLOCATIONS.map((allocation) => (
              <Card key={allocation.amount} className="border-white/10" data-testid={`card-allocation-${allocation.amount}`}>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-accent">${allocation.amount}</span>
                    <span className="text-muted-foreground text-base font-normal">provides:</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {allocation.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-chart-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={impactImage} 
                alt="Healthcare worker helping a child" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <Card className="absolute -bottom-6 -left-6 border-white/10 max-w-xs">
              <CardContent className="pt-6">
                <CardDescription className="mb-2 font-semibold text-foreground">Transparency Guarantee</CardDescription>
                <p className="text-sm text-muted-foreground">
                  100% of your donation goes directly to programs helping children. Administrative costs are covered by separate grants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
