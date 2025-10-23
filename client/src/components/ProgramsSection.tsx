import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import healthcareImage from "@assets/generated_images/Healthcare_for_children_1d6cccb0.png";
import safetyImage from "@assets/generated_images/Children_playing_safely_outdoors_ac12dd04.png";
import nutritionImage from "@assets/generated_images/Children_nutrition_program_9ee9e016.png";

const programs = [
  {
    title: "Education Access",
    description: "Providing quality education, school supplies, and learning opportunities to children in underserved communities worldwide.",
    image: healthcareImage,
    stats: "1.2M children",
  },
  {
    title: "Healthcare & Nutrition",
    description: "Delivering essential medical care, vaccinations, and nutritious meals to ensure healthy development and growth.",
    image: nutritionImage,
    stats: "850K served",
  },
  {
    title: "Child Protection",
    description: "Creating safe environments, emergency assistance, and protection services for vulnerable children in crisis zones.",
    image: safetyImage,
    stats: "500K protected",
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We work in over 120 countries to give children a healthy start, the opportunity to learn, and protection from harm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover-elevate" data-testid={`card-program-${index}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <span className="text-sm font-semibold text-primary whitespace-nowrap">
                    {program.stats}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <Button variant="outline" className="w-full" data-testid={`button-learn-program-${index}`}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
