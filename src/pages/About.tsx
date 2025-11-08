import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Sparkles, Gift } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen font-body">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-4" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-6xl text-primary mb-4 animate-fade-in">
            Our Story
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Where passion meets creativity, and every bouquet tells a story
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-soft)] mb-12">
              <h2 className="font-heading text-4xl text-secondary mb-6">Meet Pratiksha</h2>
              <p className="font-body text-foreground/80 leading-relaxed mb-4">
                Flowers Forever began with a simple love for art and the joy of gifting. As someone who has always been passionate about creativity and handmade crafts, I, Pratiksha, started creating flower bouquets as a way to share happiness and preserve beautiful moments.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed mb-4">
                What started as a hobby quickly blossomed into something more meaningful. I discovered that artificial flowers, soap roses, and thoughtful decorative wrapping could create pieces that last forever — just like the memories we cherish.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed">
                Each bouquet I create is personalized with care and attention to detail. Whether it's for a birthday, anniversary, celebration, or just because, I believe every arrangement should feel as special as the person receiving it.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-primary/5 rounded-3xl p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Heart className="text-primary" size={32} />
                </div>
                <h3 className="font-body font-semibold text-xl text-foreground mb-2">Made with Love</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Every bouquet is crafted by hand with genuine care and passion
                </p>
              </div>

              <div className="text-center bg-secondary/5 rounded-3xl p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                  <Sparkles className="text-secondary" size={32} />
                </div>
                <h3 className="font-body font-semibold text-xl text-foreground mb-2">Everlasting Beauty</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Our flowers stay beautiful forever, just like your memories
                </p>
              </div>

              <div className="text-center bg-accent/5 rounded-3xl p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Gift className="text-accent" size={32} />
                </div>
                <h3 className="font-body font-semibold text-xl text-foreground mb-2">Personalized Gifts</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Each piece is customized to make your gift truly unique
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="font-heading text-3xl text-primary mb-4">Our Mission</h3>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                To bring beauty and joy through handcrafted bouquets that celebrate life's special moments. We believe in the power of thoughtful gifting and the magic of flowers that never fade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
