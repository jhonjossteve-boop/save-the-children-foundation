import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Heart, Siren } from "lucide-react";
import educationImage from "@assets/generated_images/Children_learning_at_school_02551d7c.png";
import healthcareImage from "@assets/generated_images/Healthcare_worker_with_child_2a10b24f.png";
import emergencyImage from "@assets/generated_images/Food_program_helping_children_b237ebf3.png";

const PROGRAMS = [
  {
    title: "Education",
    description: "Providing school supplies, teacher training, and safe learning environments for children worldwide.",
    icon: GraduationCap,
    image: educationImage,
    impact: "50,000+ children enrolled",
    color: "text-primary"
  },
  {
    title: "Healthcare",
    description: "Essential medical care, vaccinations, and nutrition programs to keep children healthy and thriving.",
    icon: Heart,
    image: healthcareImage,
    impact: "40,000+ children treated",
    color: "text-chart-3"
  },
  {
    title: "Emergency Relief",
    description: "Rapid response to disasters and crises, providing food, shelter, and safety for vulnerable children.",
    icon: Siren,
    image: emergencyImage,
    impact: "35,000+ families supported",
    color: "text-accent"
  }
];

export default function ProgramsSection() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-heading mb-4">Our Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three core initiatives transforming children's lives across the globe
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => {
            const Icon = program.icon;
            return (
              <Card key={program.title} className="hover-elevate cursor-pointer border-white/10" data-testid={`card-program-${program.title.toLowerCase()}`}>
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className={`absolute top-4 right-4 p-3 bg-background/80 backdrop-blur-sm rounded-lg ${program.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${program.color.replace('text-', 'bg-')}`} />
                    <span className="text-sm font-medium text-muted-foreground">{program.impact}</span>
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
