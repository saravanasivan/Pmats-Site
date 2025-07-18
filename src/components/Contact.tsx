import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            📞 Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with Pulickal & AJ Flooring for your premium gym mat needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <MapPin className="h-6 w-6" />
                  Pulickal & AJ Flooring
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Pulickal & AJ Flooring, Chingavanam P.O, Kottayam, Kerala - 686531</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">[Your Email]</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+917012351774</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-primary rounded-lg p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Mats?</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                  Premium quality rubber-based materials
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                  Suitable for all types of fitness facilities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                  Custom sizes and designs available
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                  Trusted by professionals nationwide
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-fade-in bg-card/80 backdrop-blur-sm border-border/50" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <MessageSquare className="h-6 w-6" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="Enter your first name" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Enter your last name" className="bg-background/50" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input type="email" placeholder="Enter your email" className="bg-background/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <Input type="tel" placeholder="Enter your phone number" className="bg-background/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your flooring needs, space dimensions, and specific requirements..."
                  className="min-h-[120px] bg-background/50"
                />
              </div>
              
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
