import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import redRoses from "@/assets/red-roses.jpg";
import sunflowers from "@/assets/sunflowers.jpg";
import teddyBouquet from "@/assets/teddy-bouquet.jpg";
import pastelBlossoms from "@/assets/pastel-blossoms.jpg";
import teddyBearBouquet from "@/assets/teddy_bear_bouquet.jpg";
import purpleLilySingle from "@/assets/purple_lily_single.jpg";
import royalRedRoses from "@/assets/royal_red_roses.jpg";
import multicolorLilyBouquet from "@/assets/multicolor_lily_bouquet.jpg";
import peachRosesBouquet from "@/assets/peach_roses_bouquet.jpg";
import redTulipBouquet from "@/assets/red_tulip_bouquet.jpg";
import blueLilyBouquet from "@/assets/blue_lily_bouquet.jpg";


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const collections = [
  {
    title: "Red Rose Romance",
    description: "Timeless elegance with classic red roses, perfect for expressing love and admiration",
    image: redRoses,
  },
  {
    title: "Sunflower Smiles",
    description: "Bright and cheerful sunflower arrangements that bring warmth and happiness",
    image: sunflowers,
  },
  {
    title: "Teddy Bouquets",
    description: "Adorable combinations of cuddly teddy bears with beautiful flower arrangements",
    image: teddyBouquet,
  },
  {
    title: "Pastel Blossoms",
    description: "Soft and dreamy pastel collections for a gentle, romantic touch",
    image: pastelBlossoms,
  },
  {
    title: "Cuddle Bear Bouquet",
    description: "A charming collection of mini teddy bears wrapped in sweet pink tones—perfect for gifting warmth and cuteness.",
    image: teddyBearBouquet,
  },
  {
    title: "Velvet Purple Lily",
    description: "A unique handcrafted velvet lily bouquet paired with elegant paper wrapping for a stylish and modern gift.",
    image: purpleLilySingle,
  },
  {
    title: "Royal Velvet Roses",
    description: "Premium deep-red velvet roses arranged with golden lighting for an elegant and luxurious gifting experience.",
    image: royalRedRoses,
  },
  {
    title: "Rainbow Lily Bloom",
    description: "A vibrant mix of handcrafted lilies bursting with colour—perfect to brighten someone’s day.",
    image: multicolorLilyBouquet,
  },
  {
    title: "Blush Rose Elegance",
    description: "Soft peach roses arranged beautifully in premium black wrapping for a classy and romantic look.",
    image: peachRosesBouquet,
  },
  {
    title: "Scarlet Tulip Charm",
    description: "Bright handcrafted red tulips with subtle green detailing—a simple yet striking bouquet.",
    image: redTulipBouquet,
  },
  {
    title: "Blue Harmony Bouquet",
    description: "A soothing arrangement of blue lilies and mini flowers wrapped in soft pastel tones for a serene gift aesthetic.",
    image: blueLilyBouquet,
  }
];

  return (
    <div className="min-h-screen font-body">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-4" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-6xl text-primary mb-4 animate-fade-in">
            Our Gallery
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Explore our beautiful collections of handcrafted everlasting bouquets
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="group animate-fade-in bg-card rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300"
              >
                <div
                  className="aspect-square overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(collection.image)}
                >
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-body font-semibold text-2xl text-foreground mb-3">
                    {collection.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12">
            <h3 className="font-heading text-4xl text-primary mb-4">
              Want Something Custom?
            </h3>
            <p className="font-body text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every bouquet can be personalized to match your vision. Let's create something uniquely yours!
            </p>
            <a
              href="/custom-order"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-body font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Request Custom Bouquet
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Bouquet preview"
            className="max-w-full max-h-[90vh] rounded-2xl"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
