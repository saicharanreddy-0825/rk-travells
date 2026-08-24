import { useState, useEffect } from "react";
import { Phone, Menu, X, Car, MessageCircle } from "lucide-react";
import { business } from "@/lib/site-data";
import logoImg from "@/assets/logo.png";

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
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white/70 backdrop-blur-md shadow-sm border-b border-white/50 h-[70px] flex items-center">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <img src={logoImg} alt="RK Travels Logo" className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] object-contain" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-primary hover:bg-gray-100/50 px-3 py-1.5 rounded-full border border-transparent hover:border-gray-200 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="text-sm font-semibold text-ink flex items-center gap-2 hover:bg-gray-50 transition-colors border border-gray-200 rounded-full px-4 py-2 bg-white"
          >
            <Phone className="size-4 text-yellow-500" />
            {business.phone}
          </a>
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-bold text-white shadow-sm hover:bg-[#20bd5a] transition-all"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
          <a
            href="#cars"
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-bold text-white shadow-sm hover:bg-primary/90 transition-all"
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
            <div className="flex flex-col gap-2 mb-2 px-2 text-base font-semibold text-ink">
              <a href={`tel:+91${business.phone}`} className="flex items-center gap-3 py-1"><Phone className="size-4 text-primary" /> {business.phone}</a>
              <a href={`tel:+91${business.additionalPhone}`} className="flex items-center gap-3 py-1"><Phone className="size-4 text-primary" /> {business.additionalPhone}</a>
            </div>
            <a
              href={`tel:+91${business.phone}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-4 py-2.5 text-sm font-semibold text-primary"
            >
              Call
            </a>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              WhatsApp
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              Get Directions
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
