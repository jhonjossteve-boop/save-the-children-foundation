import { Card } from "@/components/ui/card";

interface ImpactCard {
  image: string;
  title: string;
  description: string;
  metric: string;
}

interface ImpactShowcaseProps {
  impacts: ImpactCard[];
}

export default function ImpactShowcase({ impacts }: ImpactShowcaseProps) {
  return (
    <section className="py-20 md:py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Stories of Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how your donations are transforming lives and building stronger communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((impact, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover-elevate transition-transform duration-300 hover:scale-[1.02]"
              data-testid={`card-impact-${index}`}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={impact.image} 
                  alt={impact.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {impact.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {impact.description}
                </p>
                <div className="text-chart-3 font-semibold">
                  {impact.metric}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
