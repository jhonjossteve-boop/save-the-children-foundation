import DonationPanel from '../DonationPanel';

export default function DonationPanelExample() {
  return (
    <DonationPanel
      onDonate={(amount) => console.log(`Donating $${amount}`)}
    />
  );
}
