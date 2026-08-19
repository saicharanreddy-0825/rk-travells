import { useState, useEffect } from "react";
import { Phone, Menu, X, Car } from "lucide-react";
import { business } from "@/lib/site-data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "Cars", href: "#cars" },
    { name: "Why Us", href: "#why-us" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Policies", href: "#rules-regulations" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-white py-4 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <Car className="size-6 text-primary" aria-hidden="true" />
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-tight text-ink leading-none">
              VINAYAKA
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mt-0.5">
              Self Drive & Rentals
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={business.phoneHref}
            className="text-sm font-semibold text-ink flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="size-4 text-primary" />
            {business.phone}
          </a>
          <a
            href="#cars"
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-all"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-5 flex flex-col gap-4 animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-ink py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a
              href={business.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-4 py-2.5 text-sm font-semibold text-primary"
            >
              <Phone className="size-4" /> Call {business.phone}
            </a>
            <a
              href="#cars"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
