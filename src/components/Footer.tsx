import { Instagram, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-secondary/20 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl text-primary mb-4">Flowers Forever</h3>
            <p className="font-body text-sm text-muted-foreground">
              Handmade everlasting bouquets crafted with love. Perfect for gifting and keeping memories alive.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/gallery" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/custom-order" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                Custom Order
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-foreground mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <a href="https://wa.me/917655042406?text=Hi!%20I%20want%20to%20order%20a%20bouquet%20from%20Flowers%20Forever." target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle size={18} />
                <span>​Whatsapp</span>
              </a>
              <a href="https://www.instagram.com/flowers._forever._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
                <span>​@flowers._forever._</span>
              </a>
              <a href="mailto:pratikshamail2810@gmail.com" className="flex items-center space-x-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} />
                <span>flowersforeverofficial@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="font-body text-sm text-muted-foreground">Copyright © 2025 FLOWERS FOREVER. All rights reserved. Made with 💐 by Pratiksha. Designed by Deepak
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;