import CTASection from '../CTASection';

export default function CTASectionExample() {
  return (
    <CTASection
      onDonateClick={() => console.log('One-time donation clicked')}
      onRecurringClick={() => console.log('Recurring donation clicked')}
    />
  );
}
