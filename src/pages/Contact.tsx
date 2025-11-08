import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Instagram, MessageCircle, Mail } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen font-body">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-4" style={{
      background: "var(--gradient-hero)"
    }}>
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-6xl text-primary mb-4 animate-fade-in">
            Contact Us
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            We'd love to hear from you! Reach out to us through any of these channels
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <a href="https://wa.me/917655042406?text=Hi!%20I%20want%20to%20order%20a%20bouquet%20from%20Flowers%20Forever." target="_blank" rel="noopener noreferrer" className="bg-card rounded-3xl p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2 group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="text-primary" size={40} />
              </div>
              <h3 className="font-body font-semibold text-xl text-foreground mb-2">WhatsApp</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Chat with us directly for quick responses
              </p>
              <span className="font-body text-sm text-primary font-medium">
                Message Now →
              </span>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/flowers._forever._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="bg-card rounded-3xl p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2 group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-6 group-hover:bg-secondary/20 transition-colors">
                <Instagram className="text-secondary" size={40} />
              </div>
              <h3 className="font-body font-semibold text-xl text-foreground mb-2">Instagram</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Follow us for latest creations and updates
              </p>
              <span className="font-body text-sm text-secondary font-medium">@flowers._forever._ →</span>
            </a>

            {/* Email */}
            <a href="mailto:hello@flowersforever.com" className="bg-card rounded-3xl p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2 group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors">
                <Mail className="text-accent" size={40} />
              </div>
              <h3 className="font-body font-semibold text-xl text-foreground mb-2">Email</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Send us an email for detailed inquiries
              </p>
              <span className="font-body text-sm text-accent font-medium">flowersforever.in →</span>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 text-center">
            <h3 className="font-heading text-4xl text-primary mb-4">
              Have Questions?
            </h3>
            <p className="font-body text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you want to discuss a custom order, ask about our process, or just say hello — we're here to help! Don't hesitate to reach out through your preferred channel.
            </p>
            <p className="font-body text-sm text-muted-foreground">
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;