import HeroSection from "@/components/HeroSection";
import DonationPanel from "@/components/DonationPanel";
import ImpactStats from "@/components/ImpactStats";
import MissionSection from "@/components/MissionSection";
import ImpactShowcase from "@/components/ImpactShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import heroImage from '@assets/generated_images/Hero_community_volunteers_helping_454ecbcf.png';
import volunteerImage from '@assets/generated_images/Volunteers_building_community_space_094a0330.png';
import childrenImage from '@assets/generated_images/Children_learning_with_supplies_9565ec32.png';
import waterImage from '@assets/generated_images/Clean_water_project_community_48ddfecc.png';
import healthImage from '@assets/generated_images/Healthcare_volunteers_helping_patients_1042a171.png';
import foodImage from '@assets/generated_images/Food_distribution_program_volunteers_f91c836f.png';

export default function Home() {
  const scrollToDonation = () => {
    const element = document.getElementById('donation-panel');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const impacts = [
    {
      image: waterImage,
      title: "Clean Water Access",
      description: "Built 12 wells providing clean water to rural villages, improving health and reducing disease.",
      metric: "5,000+ people with clean water"
    },
    {
      image: healthImage,
      title: "Healthcare Services",
      description: "Mobile clinics bringing essential medical care to remote communities with limited access.",
      metric: "3,200 patients treated monthly"
    },
    {
      image: foodImage,
      title: "Food Security",
      description: "Community kitchens and food distribution programs ensuring no family goes hungry.",
      metric: "8,500 meals served weekly"
    }
  ];

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

  const handleDonate = (amount: number) => {
    console.log(`Processing donation of $${amount}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        backgroundImage={heroImage}
        onDonateClick={scrollToDonation}
        onLearnMoreClick={() => {
          const element = document.getElementById('mission');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      
      <ImpactStats />
      
      <div id="donation-panel">
        <DonationPanel onDonate={handleDonate} />
      </div>
      
      <div id="mission">
        <MissionSection 
          image1={volunteerImage}
          image2={childrenImage}
        />
      </div>
      
      <ImpactShowcase impacts={impacts} />
      
      <TestimonialsSection testimonials={testimonials} />
      
      <CTASection 
        onDonateClick={scrollToDonation}
        onRecurringClick={() => console.log('Setting up recurring donation')}
      />
      
      <Footer />
    </div>
  );
}
