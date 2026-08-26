import { MapPin, Phone, MessageCircle } from "lucide-react";
import { business } from "@/lib/site-data";

export function FloatingCTAs() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] flex flex-col gap-4 md:gap-6">
      <a
        href={business.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-opacity duration-200 hover:opacity-90"
        style={{ backgroundColor: "#C99445" }}
        aria-label="Location"
      >
        <MapPin className="size-6 md:size-7" />
      </a>
      
      <a
        href={`tel:+91${business.phone}`}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-opacity duration-200 hover:opacity-90"
        style={{ backgroundColor: "#2563EB" }}
        aria-label="Call"
      >
        <Phone className="size-6 md:size-7" />
      </a>
      
      <a
        href={business.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-opacity duration-200 hover:opacity-90"
        style={{ backgroundColor: "#25D366" }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-6 md:size-7" />
      </a>
    </div>
  );
}
