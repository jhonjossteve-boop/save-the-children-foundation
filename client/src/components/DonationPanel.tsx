import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const PRESET_AMOUNTS = [25, 50, 100, 250, 500, 1000];

interface DonationPanelProps {
  onDonate?: (amount: number) => void;
}

export default function DonationPanel({ onDonate }: DonationPanelProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState(false);

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustomClick = () => {
    setIsCustom(true);
    if (customAmount) {
      setSelectedAmount(parseFloat(customAmount) || 0);
    }
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const parsed = parseFloat(value);
    if (!isNaN(parsed)) {
      setSelectedAmount(parsed);
    }
  };

  const getImpactMessage = (amount: number) => {
    if (amount >= 1000) return "Provides comprehensive support for 20 families";
    if (amount >= 500) return "Funds medical care for 15 children";
    if (amount >= 250) return "Supplies clean water for 50 people";
    if (amount >= 100) return "Provides school supplies for 10 students";
    if (amount >= 50) return "Feeds 5 families for a week";
    if (amount >= 25) return "Provides meals for 2 children";
    return "Every dollar makes a difference";
  };

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Make Your Impact Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose an amount to donate and see the direct impact your generosity will have
          </p>
        </div>

        <Card className="p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
                Select Amount
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {PRESET_AMOUNTS.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount && !isCustom ? "default" : "outline"}
                    className="h-14 text-lg font-semibold relative"
                    onClick={() => handlePresetClick(amount)}
                    data-testid={`button-amount-${amount}`}
                  >
                    {selectedAmount === amount && !isCustom && (
                      <Check className="w-4 h-4 absolute top-2 right-2" />
                    )}
                    ${amount}
                  </Button>
                ))}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Custom Amount
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      $
                    </span>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      onFocus={handleCustomClick}
                      className="pl-7"
                      data-testid="input-custom-amount"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  Your Impact
                </h3>
                <Card className="bg-primary/5 border-primary/20 p-6">
                  <div className="text-4xl font-display font-bold text-primary mb-2">
                    ${selectedAmount}
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {getImpactMessage(selectedAmount)}
                  </p>
                </Card>
              </div>

             <Button
  size="lg"
  className="w-full mt-6 bg-chart-2 hover:bg-chart-2 text-white border border-chart-2"
  onClick={() => {
    onDonate?.(selectedAmount); // Optional: keep this if you still want to run the donation logic
    window.location.href = 'https://donate-mu-seven.vercel.app'; // Redirect to the new URL
  }}
  data-testid="button-donate-submit"
>
  Donate ${selectedAmount}
</Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
