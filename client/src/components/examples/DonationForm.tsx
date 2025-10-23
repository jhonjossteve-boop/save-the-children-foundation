import DonationForm from '../DonationForm';

export default function DonationFormExample() {
  return (
    <DonationForm 
      onSubmit={(amount, method) => console.log(`Donating $${amount} via ${method}`)} 
    />
  );
}
