import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, Globe, TrendingUp } from "lucide-react";

const STATS = [
  {
    icon: Users,
    value: "125,000+",
    label: "Children Helped",
    description: "Lives transformed through our programs"
  },
  {
    icon: DollarSign,
    value: "$2.5M+",
    label: "Total Raised",
    description: "100% goes to children in need"
  },
  {
    icon: Globe,
    value: "45",
    label: "Countries Served",
    description: "Global reach, local impact"
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Success Rate",
    description: "Children reaching their goals"
  }
];

export default function ImpactSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-heading mb-4">Our Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real numbers, real change. See the difference your donations make.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="border-white/10 text-center hover-elevate" data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="pt-6 space-y-4">
                  <div className="inline-flex p-4 bg-primary/10 rounded-xl">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold font-heading text-primary">{stat.value}</div>
                    <div className="text-lg font-semibold">{stat.label}</div>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
