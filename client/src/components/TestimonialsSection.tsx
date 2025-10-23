import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    initials: "SJ",
    amount: "$100",
    quote: "Seeing the impact my donation makes gives me so much joy. These children deserve every opportunity to thrive, and I'm honored to be part of their journey.",
  },
  {
    name: "Michael Chen",
    initials: "MC",
    amount: "$250",
    quote: "The transparency and dedication of this foundation is remarkable. I know my contribution is making a real difference in children's lives around the world.",
  },
  {
    name: "Emily Rodriguez",
    initials: "ER",
    amount: "$50/month",
    quote: "As a monthly donor, I love knowing that I'm providing consistent support. Every child deserves access to education and healthcare.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Donor Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from people who are making a difference in children's lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Donated {testimonial.amount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
