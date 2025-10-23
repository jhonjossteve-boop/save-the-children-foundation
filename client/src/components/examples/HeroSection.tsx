import HeroSection from '../HeroSection';
import heroImage from '@assets/generated_images/Hero_community_volunteers_helping_454ecbcf.png';

export default function HeroSectionExample() {
  return (
    <HeroSection
      backgroundImage={heroImage}
      onDonateClick={() => console.log('Donate clicked')}
      onLearnMoreClick={() => console.log('Learn more clicked')}
    />
  );
}
