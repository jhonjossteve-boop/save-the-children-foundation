import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, CheckCircle2, Bitcoin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  method: 'crypto' | 'zelle' | 'bank' | null;
  amount: number;
}

export default function PaymentModal({ open, onOpenChange, method, amount }: PaymentModalProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
    setTimeout(() => setCopied(null), 2000);
  };

  if (!method) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {method === 'crypto' && 'Cryptocurrency Donation'}
            {method === 'zelle' && 'Zelle Donation'}
            {method === 'bank' && 'Bank Transfer'}
          </DialogTitle>
          <DialogDescription>
            Follow the instructions below to complete your ${amount} donation
          </DialogDescription>
        </DialogHeader>

        {method === 'crypto' && (
          <div className="space-y-6">
            <Card className="border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bitcoin className="w-5 h-5 text-primary" />
                  Bitcoin (BTC)
                </CardTitle>
                <CardDescription>Send Bitcoin to this address</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between gap-4">
                    <code className="text-sm break-all">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</code>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard('bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', 'BTC address')}
                      data-testid="button-copy-btc"
                    >
                      {copied === 'BTC address' ? <CheckCircle2 className="w-4 h-4 text-chart-3" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="aspect-square bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
                    QR Code Placeholder
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bitcoin className="w-5 h-5 text-primary" />
                  Ethereum (ETH)
                </CardTitle>
                <CardDescription>Send Ethereum to this address</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between gap-4">
                    <code className="text-sm break-all">0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb5</code>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard('0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb5', 'ETH address')}
                      data-testid="button-copy-eth"
                    >
                      {copied === 'ETH address' ? <CheckCircle2 className="w-4 h-4 text-chart-3" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bitcoin className="w-5 h-5 text-primary" />
                  USDT (Tether)
                </CardTitle>
                <CardDescription>Send USDT to this address (ERC-20)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between gap-4">
                    <code className="text-sm break-all">0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb5</code>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard('0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb5', 'USDT address')}
                      data-testid="button-copy-usdt"
                    >
                      {copied === 'USDT address' ? <CheckCircle2 className="w-4 h-4 text-chart-3" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-sm text-muted-foreground">
              After sending, please email your transaction ID to donate@savethechildren.org for confirmation.
            </p>
          </div>
        )}

        {method === 'zelle' && (
          <div className="space-y-6">
            <Card className="border-white/10">
              <CardHeader>
                <CardTitle>Send via Zelle</CardTitle>
                <CardDescription>Use your banking app to send ${amount}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Zelle Email</Label>
                  <div className="flex items-center gap-2">
                    <Input 
                      value="donate@savethechildren.org" 
                      readOnly 
                      className="flex-1"
                      data-testid="input-zelle-email"
                    />
                    <Button
                      variant="outline"
                      onClick={() => copyToClipboard('donate@savethechildren.org', 'Zelle email')}
                      data-testid="button-copy-zelle"
                    >
                      {copied === 'Zelle email' ? <CheckCircle2 className="w-4 h-4 text-chart-3" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Recipient Name</Label>
                  <Input value="Save the Children Foundation" readOnly />
                </div>

                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <h4 className="font-semibold text-sm">Instructions:</h4>
                  <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                    <li>Open your banking app</li>
                    <li>Select "Send Money with Zelle"</li>
                    <li>Enter donate@savethechildren.org as recipient</li>
                    <li>Enter ${amount} as the amount</li>
                    <li>Add a note with your email for receipt</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {method === 'bank' && (
          <div className="space-y-6">
            <Card className="border-white/10">
              <CardHeader>
                <CardTitle>Bank Transfer Details</CardTitle>
                <CardDescription>Use these details for wire transfer or ACH</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label>Account Name</Label>
                    <Input value="Save the Children Foundation" readOnly />
                  </div>

                  <div className="space-y-2">
                    <Label>Account Number</Label>
                    <div className="flex items-center gap-2">
                      <Input value="1234567890" readOnly className="flex-1" />
                      <Button
                        variant="outline"
                        onClick={() => copyToClipboard('1234567890', 'Account number')}
                        data-testid="button-copy-account"
                      >
                        {copied === 'Account number' ? <CheckCircle2 className="w-4 h-4 text-chart-3" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Routing Number</Label>
                    <div className="flex items-center gap-2">
                      <Input value="021000021" readOnly className="flex-1" />
                      <Button
                        variant="outline"
                        onClick={() => copyToClipboard('021000021', 'Routing number')}
                        data-testid="button-copy-routing"
                      >
                        {copied === 'Routing number' ? <CheckCircle2 className="w-4 h-4 text-chart-3" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>SWIFT Code (International)</Label>
                    <Input value="CHASUS33" readOnly />
                  </div>

                  <div className="space-y-2">
                    <Label>Bank Name</Label>
                    <Input value="Chase Bank N.A." readOnly />
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Please include your email address in the transfer memo for donation receipt purposes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => onOpenChange(false)} data-testid="button-close-modal">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
