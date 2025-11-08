import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/gallery", label: "Our Gallery" },
    { to: "/custom-order", label: "Custom Order" },
    { to: "/contact", label: "Contact Us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // 🌸 Add scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-border"
          : "bg-white/90 backdrop-blur-sm border-b border-border"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* ✅ Brand Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/assets/logo.jpeg"
              alt="Flowers Forever Logo"
              className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* 🌸 Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm transition-all duration-300 hover:text-primary ${
                  isActive(link.to)
                    ? "text-primary font-medium border-b-2 border-primary pb-1"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
            >
              <Link to="/custom-order">Order Now</Link>
            </Button>
          </div>

          {/* 🌼 Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 🌿 Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block font-body py-2 transition-colors ${
                  isActive(link.to)
                    ? "text-primary font-medium"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="w-full rounded-full bg-primary text-white hover:bg-primary/90"
            >
              <Link to="/custom-order" onClick={() => setIsOpen(false)}>
                Order Now
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
