import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-secondary to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Pmats
              </h3>
              <p className="text-muted-foreground">A Pulickal & AJ Concern</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Premium rubber-based gym and multi-sports mats for home gyms, commercial fitness centres, athletic facilities, and play schools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#products" className="block text-muted-foreground hover:text-primary transition-colors">
                Product Categories
              </a>
              <a href="#gallery" className="block text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <div className="text-muted-foreground">
                  <div className="font-medium">Pmats</div>
                  <div>Pulickal & AJ Flooring</div>
                  <div>Chingavanam P.O, Kottayam</div>
                  <div>Kerala - 686531</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">[Your Email]</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+917012351774</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Pmats - Pulickal & AJ Concern. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;