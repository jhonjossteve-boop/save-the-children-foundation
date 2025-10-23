import { Users, Heart, Briefcase } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface ImpactStatsProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  {
    icon: <Heart className="w-10 h-10" />,
    value: "$2.5M",
    label: "Total Raised"
  },
  {
    icon: <Users className="w-10 h-10" />,
    value: "15K+",
    label: "Lives Changed"
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    value: "230",
    label: "Projects Funded"
  }
];

export default function ImpactStats({ stats = defaultStats }: ImpactStatsProps) {
  return (
    <section className="py-16 md:py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-chart-3/10 text-chart-3 mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold text-chart-3 mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
