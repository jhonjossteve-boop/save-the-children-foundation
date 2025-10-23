import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { useState } from "react";

const presetAmounts = [
  { amount: 25, impact: "Provides school supplies for 5 children" },
  { amount: 50, impact: "Feeds a family for one week" },
  { amount: 100, impact: "Supplies medical care for 10 children" },
  { amount: 250, impact: "Supports a child's education for one year" },
];

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount || selectedAmount;
    console.log("Donation submitted:", { ...donorInfo, amount: finalAmount });
  };

  return (
    <section className="py-20 bg-card">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Make Your Donation</h2>
          <p className="text-xl text-muted-foreground">
            Every contribution makes a lasting impact on a child's life.
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <Label className="text-lg mb-4 block">Select Amount</Label>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset.amount}
                    type="button"
                    onClick={() => handleAmountSelect(preset.amount)}
                    className={`relative p-6 rounded-md border-2 text-left transition-all hover-elevate ${
                      selectedAmount === preset.amount
                        ? "border-primary bg-primary/5"
                        : "border-border"
                    }`}
                    data-testid={`button-amount-${preset.amount}`}
                  >
                    {selectedAmount === preset.amount && (
                      <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                    <p className="text-2xl font-bold mb-2">${preset.amount}</p>
                    <p className="text-sm text-muted-foreground">{preset.impact}</p>
                  </button>
                ))}
              </div>

              <div>
                <Label htmlFor="custom-amount" className="mb-2 block">
                  Or Enter Custom Amount
                </Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="pl-8"
                    data-testid="input-custom-amount"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <Label htmlFor="donor-name">Full Name</Label>
                <Input
                  id="donor-name"
                  type="text"
                  placeholder="John Doe"
                  value={donorInfo.name}
                  onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                  required
                  data-testid="input-donor-name"
                />
              </div>

              <div>
                <Label htmlFor="donor-email">Email Address</Label>
                <Input
                  id="donor-email"
                  type="email"
                  placeholder="john@example.com"
                  value={donorInfo.email}
                  onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                  required
                  data-testid="input-donor-email"
                />
              </div>

              <div>
                <Label htmlFor="donor-message">Message (Optional)</Label>
                <Textarea
                  id="donor-message"
                  placeholder="Share why you're donating..."
                  value={donorInfo.message}
                  onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                  rows={4}
                  data-testid="input-donor-message"
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full text-lg" data-testid="button-submit-donation">
              Complete Donation ${customAmount || selectedAmount || 0}
            </Button>

            <p className="text-sm text-center text-muted-foreground mt-4">
              Secure payment powered by Stripe. Your donation is tax-deductible.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}
