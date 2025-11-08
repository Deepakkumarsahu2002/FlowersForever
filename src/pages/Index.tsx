import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BouquetCard from "@/components/BouquetCard";
import { Button } from "@/components/ui/button";
import heroBouquet from "@/assets/hero-bouquet.jpg";
import redRoses from "@/assets/red-roses.jpg";
import sunflowers from "@/assets/sunflowers.jpg";
import teddyBouquet from "@/assets/teddy-bouquet.jpg";
import pastelBlossoms from "@/assets/pastel-blossoms.jpg";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading text-6xl md:text-7xl text-primary mb-6">
                Happiness that Stays Forever
              </h1>
              <p className="font-body text-lg text-foreground/80 mb-8 leading-relaxed">
                We craft beautiful handmade arrangements with everlasting flowers that speak from the heart. Each bouquet is personalized and made with love.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/gallery">View Our Bouquets</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/custom-order">Custom Order</Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in animate-float">
              <img
                src={heroBouquet}
                alt="Beautiful flower bouquet"
                className="w-full rounded-3xl shadow-[var(--shadow-soft)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-heading text-5xl text-secondary mb-6">Our Story</h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
            Flowers Forever is a small creative business run by Pratiksha, who handcrafts everlasting flower bouquets using artificial flowers, soap roses, and decorative wrapping. Each piece is personalized and made with love — perfect for gifting and keeping memories alive.
          </p>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/about">Read More About Us</Link>
          </Button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-5xl text-primary mb-4">Our Collections</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Explore our handcrafted bouquets, each designed with care to bring joy and beauty to every occasion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BouquetCard
              image={redRoses}
              title="Red Rose Romance"
              description="Classic elegance with timeless red roses"
            />
            <BouquetCard
              image={sunflowers}
              title="Sunflower Smiles"
              description="Bright and cheerful sunflower arrangements"
            />
            <BouquetCard
              image={teddyBouquet}
              title="Teddy Bouquets"
              description="Adorable teddy bears with beautiful flowers"
            />
            <BouquetCard
              image={pastelBlossoms}
              title="Pastel Blossoms"
              description="Soft and dreamy pastel flower collections"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 text-center">
            <h2 className="font-heading text-5xl text-primary mb-6">
              Ready to Create Something Special?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's design a custom bouquet that perfectly captures your feelings and makes your special moments unforgettable
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/custom-order">Start Your Custom Order</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
