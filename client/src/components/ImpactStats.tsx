import { Card } from "@/components/ui/card";
import { BookOpen, Heart, Shield, Users } from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    number: "1.2M",
    label: "Children Educated",
    description: "Access to quality education and school supplies",
  },
  {
    icon: Heart,
    number: "850K",
    label: "Health Services",
    description: "Medical care and nutrition programs provided",
  },
  {
    icon: Shield,
    number: "500K",
    label: "Children Protected",
    description: "Safe environments and emergency assistance",
  },
  {
    icon: Users,
    number: "2.5M",
    label: "Lives Impacted",
    description: "Total children and families helped worldwide",
  },
];

export function ImpactStats() {
  return (
    <section id="impact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Global Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Together, we're making a real difference in children's lives every single day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover-elevate"
                data-testid={`card-stat-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-4xl font-bold mb-2" data-testid={`text-stat-number-${index}`}>
                  {stat.number}
                </p>
                <p className="font-semibold mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
