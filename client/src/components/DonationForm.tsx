import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Bitcoin, Banknote, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PRESET_AMOUNTS = [25, 50, 100, 250];

interface DonationFormProps {
  onSubmit?: (amount: number, method: string) => void;
}

export default function DonationForm({ onSubmit }: DonationFormProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setIsCustom(true);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setSelectedAmount(numValue);
    }
  };

  return (
    <section id="donate" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-heading mb-4">Make a Difference Today</h2>
          <p className="text-lg text-muted-foreground">Choose your donation amount and preferred payment method</p>
        </div>

        <Card className="border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl">Your Donation</CardTitle>
            <CardDescription>Select an amount or enter a custom value</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {PRESET_AMOUNTS.map((amount) => (
                <Button
                  key={amount}
                  variant={selectedAmount === amount && !isCustom ? "default" : "outline"}
                  className="h-16 text-lg font-semibold"
                  onClick={() => handleAmountSelect(amount)}
                  data-testid={`button-amount-${amount}`}
                >
                  ${amount}
                </Button>
              ))}
            </div>

            <div className="space-y-2">
              <Label htmlFor="custom-amount">Custom Amount</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="Enter amount"
                  className="pl-10 h-12 text-lg"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  data-testid="input-custom-amount"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant={isRecurring ? "default" : "outline"}
                size="sm"
                onClick={() => setIsRecurring(!isRecurring)}
                data-testid="button-recurring-toggle"
              >
                {isRecurring ? "Monthly Donation" : "One-Time"}
              </Button>
              {isRecurring && (
                <Badge variant="secondary">
                  ${selectedAmount}/month
                </Badge>
              )}
            </div>

            <Tabs defaultValue="card" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="card" data-testid="tab-card">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Card
                </TabsTrigger>
                <TabsTrigger value="crypto" data-testid="tab-crypto">
                  <Bitcoin className="w-4 h-4 mr-2" />
                  Crypto
                </TabsTrigger>
                <TabsTrigger value="zelle" data-testid="tab-zelle">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Zelle
                </TabsTrigger>
                <TabsTrigger value="bank" data-testid="tab-bank">
                  <Banknote className="w-4 h-4 mr-2" />
                  Bank
                </TabsTrigger>
              </TabsList>

              <TabsContent value="card" className="space-y-4 mt-6">
                <p className="text-sm text-muted-foreground">
                  Secure payment processing powered by Stripe
                </p>
                <Button 
                  className="w-full h-12" 
                  size="lg"
                  onClick={() => onSubmit?.(selectedAmount, 'card')}
                  data-testid="button-proceed-card"
                >
                  Proceed to Secure Checkout - ${selectedAmount}
                </Button>
              </TabsContent>

              <TabsContent value="crypto" className="space-y-4 mt-6">
                <p className="text-sm text-muted-foreground">
                  Support us with cryptocurrency donations
                </p>
                <Button 
                  className="w-full h-12" 
                  size="lg"
                  onClick={() => onSubmit?.(selectedAmount, 'crypto')}
                  data-testid="button-proceed-crypto"
                >
                  View Crypto Wallets
                </Button>
              </TabsContent>

              <TabsContent value="zelle" className="space-y-4 mt-6">
                <p className="text-sm text-muted-foreground">
                  Send via Zelle using your banking app
                </p>
                <Button 
                  className="w-full h-12" 
                  size="lg"
                  onClick={() => onSubmit?.(selectedAmount, 'zelle')}
                  data-testid="button-proceed-zelle"
                >
                  View Zelle Instructions
                </Button>
              </TabsContent>

              <TabsContent value="bank" className="space-y-4 mt-6">
                <p className="text-sm text-muted-foreground">
                  Direct bank transfer or wire transfer
                </p>
                <Button 
                  className="w-full h-12" 
                  size="lg"
                  onClick={() => onSubmit?.(selectedAmount, 'bank')}
                  data-testid="button-proceed-bank"
                >
                  View Bank Details
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
