import { useState } from 'react';
import PaymentModal from '../PaymentModal';
import { Button } from '@/components/ui/button';

export default function PaymentModalExample() {
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState<'crypto' | 'zelle' | 'bank' | null>('crypto');

  return (
    <div className="p-8 space-y-4">
      <div className="flex gap-4">
        <Button onClick={() => { setMethod('crypto'); setOpen(true); }}>
          Show Crypto Modal
        </Button>
        <Button onClick={() => { setMethod('zelle'); setOpen(true); }}>
          Show Zelle Modal
        </Button>
        <Button onClick={() => { setMethod('bank'); setOpen(true); }}>
          Show Bank Modal
        </Button>
      </div>
      <PaymentModal 
        open={open} 
        onOpenChange={setOpen} 
        method={method} 
        amount={100} 
      />
    </div>
  );
}
