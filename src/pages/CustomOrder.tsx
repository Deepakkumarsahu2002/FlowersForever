import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CustomOrder = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    occasion: "",
    preferences: "",
    message: "",
    contact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi! I'd like to order a custom bouquet:\n\nName: ${formData.name}\nOccasion: ${formData.occasion}\nPreferences: ${formData.preferences}\nMessage: ${formData.message}\nContact: ${formData.contact}`;
    const whatsappUrl = `https://wa.me/917655042406?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Opening WhatsApp...",
      description: "You'll be redirected to WhatsApp to complete your order",
    });
  };

  return (
    <div className="min-h-screen font-body">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-4" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-6xl text-primary mb-4 animate-fade-in">
            Custom Order
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Let's create a bouquet that's perfectly tailored to your vision
          </p>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-soft)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-body font-medium text-foreground mb-2 block">
                  Your Name *
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="occasion" className="font-body font-medium text-foreground mb-2 block">
                  Occasion *
                </Label>
                <Input
                  id="occasion"
                  required
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  placeholder="Birthday, Anniversary, Wedding, etc."
                  className="rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="preferences" className="font-body font-medium text-foreground mb-2 block">
                  Preferred Flowers/Colors *
                </Label>
                <Input
                  id="preferences"
                  required
                  value={formData.preferences}
                  onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
                  placeholder="Red roses, pastel colors, sunflowers, etc."
                  className="rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="message" className="font-body font-medium text-foreground mb-2 block">
                  Special Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any special requests or message you'd like to include..."
                  className="rounded-xl min-h-[120px]"
                />
              </div>

              <div>
                <Label htmlFor="contact" className="font-body font-medium text-foreground mb-2 block">
                  Contact Number *
                </Label>
                <Input
                  id="contact"
                  type="tel"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="Your phone number"
                  className="rounded-xl"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full">
                Submit Order via WhatsApp
              </Button>

              <p className="font-body text-sm text-muted-foreground text-center">
                By submitting, you'll be redirected to WhatsApp to complete your custom order with us
              </p>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-primary/5 rounded-2xl p-6 text-center">
              <div className="font-heading text-3xl text-primary mb-2">Step 1</div>
              <p className="font-body text-sm text-muted-foreground">Fill out the form with your preferences</p>
            </div>
            <div className="bg-secondary/5 rounded-2xl p-6 text-center">
              <div className="font-heading text-3xl text-secondary mb-2">Step 2</div>
              <p className="font-body text-sm text-muted-foreground">Connect with us via WhatsApp</p>
            </div>
            <div className="bg-accent/5 rounded-2xl p-6 text-center">
              <div className="font-heading text-3xl text-accent mb-2">Step 3</div>
              <p className="font-body text-sm text-muted-foreground">Receive your handmade bouquet</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomOrder;
