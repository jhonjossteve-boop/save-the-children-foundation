import TestimonialsSection from '../TestimonialsSection';

export default function TestimonialsSectionExample() {
  const testimonials = [
    {
      quote: "Seeing the impact of my donations through regular updates gives me so much joy. The Hope Foundation truly makes every dollar count.",
      author: "Sarah Mitchell",
      role: "Monthly Donor since 2021"
    },
    {
      quote: "I love how transparent they are about where the money goes. The projects are well-managed and the results speak for themselves.",
      author: "James Chen",
      role: "Corporate Partner"
    }
  ];

  return <TestimonialsSection testimonials={testimonials} />;
}
