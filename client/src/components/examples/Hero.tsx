import Hero from '../Hero';

export default function HeroExample() {
  return <Hero onDonateClick={() => console.log('Donate clicked')} />;
}
