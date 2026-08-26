import { business } from "@/lib/site-data";
import { MessageCircle, Phone, MapPin, Car } from "lucide-react";
import logoImg from "@/assets/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <a href="#top" className="flex items-center gap-2 font-semibold mb-6">
              <img
                src={logoImg}
                alt="RK Travels Logo"
                className="h-20 w-auto max-w-[220px] object-contain"
              />
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your trusted partner for self-drive cars, outstation travels, and family trips in Jadcherla.
            </p>
            <div className="flex gap-4">
              <a 
                href={business.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors text-white"
              >
                <MessageCircle className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#top" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#cars" className="hover:text-primary transition-colors">Cars</a></li>
              <li><a href="#why-us" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#rules-regulations" className="hover:text-primary transition-colors">Policies</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#services" className="hover:text-primary transition-colors">Self Drive Cars</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Car Rentals</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">SUV Rentals</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Sedan Rentals</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Hatchback Rentals</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Outstation Travel</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-white/70 mb-6">
              <li>
                <a 
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="group-hover:text-primary transition-colors">{business.address}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href={business.phoneHref} className="hover:text-primary transition-colors">{business.phone}</a>
                  <a href={`tel:+91${business.additionalPhone}`} className="hover:text-primary transition-colors">{business.additionalPhone}</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-semibold text-xs uppercase tracking-wider">Hours</span>
                <span>Open 24/7</span>
              </li>
            </ul>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary/20 hover:bg-primary px-5 text-sm font-bold text-white transition-colors border border-primary/30"
            >
              📍 Get Directions
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {currentYear} {business.name}. All rights reserved.</p>
          <p>Made for Jadcherla</p>
        </div>
      </div>
    </footer>
  );
}
