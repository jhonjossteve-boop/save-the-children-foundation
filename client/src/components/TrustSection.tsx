import { Card } from "@/components/ui/card";
import { Award, Lock, Shield, TrendingUp } from "lucide-react";

const trustMetrics = [
  {
    icon: Award,
    title: "4-Star Charity",
    description: "Charity Navigator Rating",
  },
  {
    icon: TrendingUp,
    title: "92% Program Spend",
    description: "Directly helps children",
  },
  {
    icon: Shield,
    title: "Verified Nonprofit",
    description: "GuideStar Platinum Seal",
  },
  {
    icon: Lock,
    title: "Secure Donations",
    description: "Stripe-powered payments",
  },
];

export function TrustSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trust & Transparency</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to using your donations responsibly and maximizing impact for children.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover-elevate"
                data-testid={`card-trust-${index}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-chart-2/10 mb-4">
                  <Icon className="h-7 w-7 text-chart-2" />
                </div>
                <p className="font-bold mb-1">{metric.title}</p>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Trusted by leading organizations worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["UNICEF", "WHO", "Red Cross", "UNESCO", "UNHCR"].map((org) => (
              <div key={org} className="text-lg font-semibold">
                {org}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
