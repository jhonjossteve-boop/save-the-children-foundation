import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiX, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Heart className="w-5 h-5 text-primary fill-primary" />
              </div>
              <span className="text-lg font-bold font-heading">Save the Children</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Creating lasting change for children worldwide through education, healthcare, and emergency relief.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full" data-testid="button-social-twitter">
                <SiX className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" data-testid="button-social-facebook">
                <SiFacebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" data-testid="button-social-instagram">
                <SiInstagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" data-testid="button-social-linkedin">
                <SiLinkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Programs</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impact Stories</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Annual Reports</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">donate@savethechildren.org</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">123 Hope Street, NY 10001</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Newsletter</h3>
            <p className="text-sm text-muted-foreground">Get updates on our impact</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button data-testid="button-newsletter-subscribe">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Save the Children Foundation. All rights reserved. Tax ID: 12-3456789
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
