import ImpactShowcase from '../ImpactShowcase';
import waterImage from '@assets/generated_images/Clean_water_project_community_48ddfecc.png';
import healthImage from '@assets/generated_images/Healthcare_volunteers_helping_patients_1042a171.png';
import foodImage from '@assets/generated_images/Food_distribution_program_volunteers_f91c836f.png';

export default function ImpactShowcaseExample() {
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

  return <ImpactShowcase impacts={impacts} />;
}
