import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DonationForm from "@/components/DonationForm";
import ImpactSection from "@/components/ImpactSection";
import ProgramsSection from "@/components/ProgramsSection";
import HowItHelps from "@/components/HowItHelps";
import Footer from "@/components/Footer";
import PaymentModal from "@/components/PaymentModal";

export default function Home() {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'crypto' | 'zelle' | 'bank' | null>(null);
  const [donationAmount, setDonationAmount] = useState(50);

  const scrollToDonate = () => {
    const element = document.getElementById('donate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDonationSubmit = (amount: number, method: string) => {
    setDonationAmount(amount);
    if (method === 'crypto' || method === 'zelle' || method === 'bank') {
      setPaymentMethod(method);
      setPaymentModalOpen(true);
    } else if (method === 'card') {
      console.log('Redirect to Stripe checkout with amount:', amount);
    }
  };

  return (
    <div className="min-h-screen">
      <Header onDonateClick={scrollToDonate} />
      <Hero onDonateClick={scrollToDonate} />
      
      <div id="impact">
        <ImpactSection />
      </div>
      
      <div id="programs">
        <ProgramsSection />
      </div>
      
      <HowItHelps />
      <DonationForm onSubmit={handleDonationSubmit} />
      <Footer />

      <PaymentModal
        open={paymentModalOpen}
        onOpenChange={setPaymentModalOpen}
        method={paymentMethod}
        amount={donationAmount}
      />
    </div>
  );
}
