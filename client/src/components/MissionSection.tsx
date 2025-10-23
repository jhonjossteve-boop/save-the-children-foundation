interface MissionSectionProps {
  image1: string;
  image2: string;
}

export default function MissionSection({ image1, image2 }: MissionSectionProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              We believe everyone deserves access to basic necessities: clean water, 
              nutritious food, quality education, and healthcare. Since our founding, 
              we've worked tirelessly to bring hope and resources to underserved communities 
              around the world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through the generosity of donors like you, we've built schools, 
              established clean water systems, provided medical care, and fed thousands 
              of families. But our work is far from finished.
            </p>
          </div>
          
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img 
              src={image1} 
              alt="Community volunteers working together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-96 rounded-xl overflow-hidden">
            <img 
              src={image2} 
              alt="Children in classroom with educational materials"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              How We Make It Happen
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Every dollar you donate goes directly to programs that create lasting change. 
              We partner with local communities to identify their most pressing needs and 
              develop sustainable solutions.
            </p>
            <div className="space-y-3">
              {[
                "95% of donations go directly to programs",
                "Community-led initiatives for lasting impact",
                "Transparent reporting on all projects",
                "Regular updates on your donation's impact"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
